'use client'

import { useState, useEffect, useRef } from 'react'
import dayjs from 'dayjs'
import { mockEmails, verificationContacts } from '@/lib/mockEmails'
import { mockPasswords } from '@/lib/mockPasswords'
import { mockDataClassifications } from '@/lib/mockDataClassification'
import { GameState, InvestigationCategory, Email, Password, DataClassification } from '@/lib/types'
import { generateRandomIncident, getRandomDelay } from '@/lib/gameHelpers'
import { useCorrectAnswerSound } from '@/lib/useCorrectAnswerSound'
import { useWrongAnswerSound } from '@/lib/useWrongAnswerSound'
import { useTaskNotificationSound } from '@/lib/useTaskNotificationSound'
import { useBackgroundMusic } from '@/lib/useBackgroundMusic'
import Header from '@/components/Header'
import CompanyCard from '@/components/CompanyCard'
import TasksPanel from '@/components/TasksPanel'
import ProgressPanel from '@/components/ProgressPanel'
import DispatchQueueView from '@/components/DispatchQueueView'
import TaskDetailsPanel from '@/components/TaskDetailsPanel'
import EmailInvestigation from '@/components/EmailInvestigation'
import InvestigationPanel from '@/components/InvestigationPanel'
import EmployeeHandbook from '@/components/EmployeeHandbook'
import DecisionModal from '@/components/DecisionModal'
import FeedbackModal from '@/components/FeedbackModal'
import PasswordFeedbackModal from '@/components/PasswordFeedbackModal'
import DataClassificationFeedbackModal from '@/components/DataClassificationFeedbackModal'
import PasswordStrengthTask from '@/components/PasswordStrengthTask'
import PasswordDecisionPanel from '@/components/PasswordDecisionPanel'
import DataClassificationTask from '@/components/DataClassificationTask'
import PasswordPolicyPanel from '@/components/PasswordPolicyPanel'
import DataClassificationDetailsPanel from '@/components/DataClassificationDetailsPanel'
import DeskUI from '@/components/DeskUI'
import ContactModal from '@/components/ContactModal'

export default function Home() {
  const playCorrectSound = useCorrectAnswerSound()
  const playWrongSound = useWrongAnswerSound()
  const playTaskNotificationSound = useTaskNotificationSound()
  const { isMuted, toggleMute } = useBackgroundMusic()
  const [currentTime, setCurrentTime] = useState<string>('')
  const [gameState, setGameState] = useState<GameState>({
    graduationProgress: 35,
    currentTaskType: 'email',
    currentEmailId: 'email-1',
    currentPasswordId: 'pwd-1',
    currentDocumentId: 'doc-1',
    investigatedCategories: new Set(),
    decision: null,
    day: 7,
    todaysTasksCompleted: 0,
    tasksGeneratedToday: 0,
    dispatchQueue: [],
  })
  const [checkedPasswordCharacteristics, setCheckedPasswordCharacteristics] = useState<Set<string>>(new Set())
  const [showHandbook, setShowHandbook] = useState(true)
  const [investigationList, setInvestigationList] = useState<InvestigationCategory[]>([
    { id: 'profile', label: 'Profile', description: 'Verify sender identity and domain legitimacy', checked: false, hasEvidence: true },
    { id: 'link', label: 'Link', description: 'Analyze URLs and check for suspicious redirects', checked: false, hasEvidence: true },
    { id: 'file', label: 'File', description: 'Examine attachments for malware and threats', checked: false, hasEvidence: true },
    { id: 'language', label: 'Language', description: 'Detect unusual grammar and phishing patterns', checked: false, hasEvidence: true },
    { id: 'context', label: 'Context', description: 'Review urgency and legitimacy of request', checked: false, hasEvidence: true },
    { id: 'request', label: 'Request', description: 'Evaluate unusual access or permission demands', checked: false, hasEvidence: true },
  ])
  const [showDecisionModal, setShowDecisionModal] = useState(false)
  const [showFeedback, setShowFeedback] = useState(false)
  const [lastDecision, setLastDecision] = useState<'legitimate' | 'phishing' | null>(null)
  const [showPasswordFeedback, setShowPasswordFeedback] = useState(false)
  const [lastPasswordDecision, setLastPasswordDecision] = useState<'approve' | 'revision' | 'reject' | null>(null)
  const [showDataClassificationFeedback, setShowDataClassificationFeedback] = useState(false)
  const [lastDataClassificationDecision, setLastDataClassificationDecision] = useState<'public' | 'internal' | 'confidential' | 'restricted' | null>(null)
  const [showContactModal, setShowContactModal] = useState(false)
  const [notificationCount, setNotificationCount] = useState(0)
  const [showDispatchQueue, setShowDispatchQueue] = useState(false)
  const [selectedQueueItemId, setSelectedQueueItemId] = useState<string | null>(null)
  const incidentGeneratorRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const usedIncidentsRef = useRef<Set<string>>(new Set())

  // Update time every minute (client-side only to avoid hydration mismatch)
  useEffect(() => {
    const updateTime = () => {
      const now = dayjs()
      setCurrentTime(`DAY ${now.date().toString().padStart(2, '0')} • ${now.format('hh:mm A')}`)
    }
    // Set initial time immediately on first render
    updateTime()
    // Then update every minute
    const interval = setInterval(updateTime, 60000)
    return () => clearInterval(interval)
  }, [])

  // Incident generation timer - generates new tasks every 3-10 seconds
  useEffect(() => {
    const scheduleNextIncident = () => {
      const delay = getRandomDelay(3000, 10000)
      
      incidentGeneratorRef.current = setTimeout(() => {
        // Only generate if we haven't generated 15 tasks total for the day
        if (gameState.tasksGeneratedToday < 15) {
          const incident = generateRandomIncident(mockEmails, mockPasswords, mockDataClassifications, usedIncidentsRef.current)
          
          if (incident) {
            console.log('[v0] New incident generated:', incident)
            playTaskNotificationSound()
            usedIncidentsRef.current.add(incident.id)
            setGameState((prev) => ({
              ...prev,
              tasksGeneratedToday: prev.tasksGeneratedToday + 1,
              dispatchQueue: [
                ...prev.dispatchQueue,
                {
                  type: incident.type,
                  id: incident.id,
                  timestamp: Date.now(),
                  payload: incident.payload,
                },
              ],
            }))
            
            setNotificationCount((prev) => prev + 1)
          }
        }
        
        // Schedule next incident
        scheduleNextIncident()
      }, delay)
    }
    
    scheduleNextIncident()
    
    return () => {
      if (incidentGeneratorRef.current) {
        clearTimeout(incidentGeneratorRef.current)
      }
    }
  }, [gameState.tasksGeneratedToday])

  // Auto-select first available task when tasks are added or task type changes
  useEffect(() => {
    const emailTasks = gameState.dispatchQueue.filter((item) => item.type === 'email')
    const passwordTasks = gameState.dispatchQueue.filter((item) => item.type === 'password')
    const dataTasks = gameState.dispatchQueue.filter((item) => item.type === 'data-classification')

    setGameState((prev) => {
      let updated = false
      const newState = { ...prev }

      // Auto-select first email if current one doesn't exist in queue
      if (gameState.currentTaskType === 'email' && emailTasks.length > 0) {
        const emailExists = emailTasks.some((item) => item.id === prev.currentEmailId)
        if (!emailExists) {
          newState.currentEmailId = emailTasks[0].id
          updated = true
        }
      }

      // Auto-select first password if current one doesn't exist in queue
      if (gameState.currentTaskType === 'password' && passwordTasks.length > 0) {
        const passwordExists = passwordTasks.some((item) => item.id === prev.currentPasswordId)
        if (!passwordExists) {
          newState.currentPasswordId = passwordTasks[0].id
          updated = true
        }
      }

      // Auto-select first document if current one doesn't exist in queue
      if (gameState.currentTaskType === 'data-classification' && dataTasks.length > 0) {
        const docExists = dataTasks.some((item) => item.id === prev.currentDocumentId)
        if (!docExists) {
          newState.currentDocumentId = dataTasks[0].id
          updated = true
        }
      }

      return updated ? newState : prev
    })
  }, [gameState.dispatchQueue, gameState.currentTaskType])

  // Initialize currentTime with a placeholder to prevent hydration mismatch
  const displayTime = currentTime || 'DAY -- • --:-- --'

  const currentEmail = gameState.dispatchQueue
    .find((item) => item.id === gameState.currentEmailId && item.type === 'email')
    ?.payload as Email | undefined

  const handleSelectEmail = (emailId: string) => {
    setGameState((prev) => ({
      ...prev,
      currentEmailId: emailId,
      investigatedCategories: new Set(),
      decision: null,
    }))
    setInvestigationList((prev) =>
      prev.map((item) => ({
        ...item,
        checked: false,
      }))
    )
    setShowDecisionModal(false)
    setNotificationCount(0) // Reset notification when viewing an incident
  }

  const handleInvestigate = (categoryId: string) => {
    setGameState((prev) => ({
      ...prev,
      investigatedCategories: new Set([...prev.investigatedCategories, categoryId]),
    }))
    setInvestigationList((prev) =>
      prev.map((item) =>
        item.id === categoryId
          ? { ...item, checked: true }
          : item
      )
    )
  }

  const handleCheckboxChange = (categoryId: string) => {
    const isCurrentlyChecked = investigationList.find((item) => item.id === categoryId)?.checked
    
    setInvestigationList((prev) =>
      prev.map((item) =>
        item.id === categoryId
          ? { ...item, checked: !item.checked }
          : item
      )
    )

    // Update investigation tracking based on checkbox state
    if (!isCurrentlyChecked) {
      // Checking: add to investigated categories
      setGameState((prev) => ({
        ...prev,
        investigatedCategories: new Set([...prev.investigatedCategories, categoryId]),
      }))
    } else {
      // Unchecking: remove from investigated categories
      const newInvestigated = new Set(gameState.investigatedCategories)
      newInvestigated.delete(categoryId)
      setGameState((prev) => ({
        ...prev,
        investigatedCategories: newInvestigated,
      }))
    }
  }

  const handleMakeDecision = (decision: 'legitimate' | 'phishing') => {
    let progressIncrease = 0
    
    if (currentEmail) {
      const isCorrect = (decision === 'phishing' && !currentEmail.isLegitimate) ||
                        (decision === 'legitimate' && currentEmail.isLegitimate)
      
      if (isCorrect) {
        playCorrectSound()
        // EXP multiplier based on investigation list completion
        const checkedCount = investigationList.filter((item) => item.checked).length
        const totalCount = investigationList.length
        const completionRatio = checkedCount / totalCount
        
        // Full reward (5%) if 50%+ investigated, reduced if less
        if (completionRatio >= 0.5) {
          progressIncrease = 5
        } else if (completionRatio > 0) {
          progressIncrease = 2
        } else {
          // Guessed without any investigation
          progressIncrease = 1
        }
      } else {
        playWrongSound()
      }
    }
    
    setGameState((prev) => ({
      ...prev,
      decision,
      graduationProgress: Math.min(100, prev.graduationProgress + progressIncrease),
    }))
    
    setLastDecision(decision)
    setShowDecisionModal(false)
    setShowFeedback(true)
  }

  const handleContinueAfterFeedback = () => {
    setShowFeedback(false)
    setLastDecision(null)
    
    // Remove completed email from dispatch queue and increment tasks completed
    const completedEmailId = gameState.currentEmailId
    setGameState((prev) => {
      const updatedQueue = prev.dispatchQueue.filter((item) => item.id !== completedEmailId)
      const remainingEmails = updatedQueue.filter((item) => item.type === 'email')
      const nextEmailId = remainingEmails.length > 0 ? remainingEmails[0].id : null
      
      return {
        ...prev,
        todaysTasksCompleted: prev.todaysTasksCompleted + 1,
        dispatchQueue: updatedQueue,
        currentEmailId: nextEmailId,
      }
    })
  }

  const handleTogglePasswordCharacteristic = (id: string) => {
    setCheckedPasswordCharacteristics((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }
      return newSet
    })
  }

  const handlePasswordDecision = (decision: 'approve' | 'revision' | 'reject') => {
    let progressIncrease = 0
    const currentPassword = mockPasswords.find((p) => p.id === gameState.currentPasswordId)
    
    if (currentPassword) {
      const isCorrect = decision === currentPassword.correctDecision
      if (isCorrect) {
        playCorrectSound()
        progressIncrease = 5
      } else {
        playWrongSound()
      }
    }
    
    setLastPasswordDecision(decision)
    setShowPasswordFeedback(true)
    
    // Update progress immediately
    setGameState((prev) => ({
      ...prev,
      graduationProgress: Math.min(100, prev.graduationProgress + progressIncrease),
    }))
  }

  const handleContinueAfterPasswordFeedback = () => {
    setShowPasswordFeedback(false)
    setLastPasswordDecision(null)
    setCheckedPasswordCharacteristics(new Set())
    
    // Remove completed password from dispatch queue and increment tasks completed
    const completedPasswordId = gameState.currentPasswordId
    setGameState((prev) => {
      const updatedQueue = prev.dispatchQueue.filter((item) => item.id !== completedPasswordId)
      const remainingPasswords = updatedQueue.filter((item) => item.type === 'password')
      
      return {
        ...prev,
        todaysTasksCompleted: prev.todaysTasksCompleted + 1,
        dispatchQueue: updatedQueue,
        currentPasswordId: remainingPasswords.length > 0 ? remainingPasswords[0].id : 'pwd-1',
      }
    })
  }

  const handleDataClassification = (classification: 'public' | 'internal' | 'confidential' | 'restricted') => {
    let progressIncrease = 0
    const currentDocument = mockDataClassifications.find((d) => d.id === gameState.currentDocumentId)
    
    if (currentDocument) {
      const isCorrect = classification === currentDocument.correctClassification
      if (isCorrect) {
        playCorrectSound()
        progressIncrease = 5
      } else {
        playWrongSound()
      }
    }
    
    setLastDataClassificationDecision(classification)
    setShowDataClassificationFeedback(true)
    
    // Update progress immediately
    setGameState((prev) => ({
      ...prev,
      graduationProgress: Math.min(100, prev.graduationProgress + progressIncrease),
    }))
  }

  const handleContinueAfterDataClassificationFeedback = () => {
    setShowDataClassificationFeedback(false)
    setLastDataClassificationDecision(null)
    
    // Remove completed document from dispatch queue and increment tasks completed
    const completedDocumentId = gameState.currentDocumentId
    setGameState((prev) => {
      const updatedQueue = prev.dispatchQueue.filter((item) => item.id !== completedDocumentId)
      const remainingDocuments = updatedQueue.filter((item) => item.type === 'data-classification')
      
      return {
        ...prev,
        todaysTasksCompleted: prev.todaysTasksCompleted + 1,
        dispatchQueue: updatedQueue,
        currentDocumentId: remainingDocuments.length > 0 ? remainingDocuments[0].id : 'doc-1',
      }
    })
  }

  const handleSelectTask = (taskType: 'email' | 'password' | 'data-classification') => {
    setGameState((prev) => ({
      ...prev,
      currentTaskType: taskType,
    }))
    setShowDispatchQueue(false)
  }

  const handleEndDay = () => {
    console.log('[v0] End Day triggered')
    
    // Reset daily state while preserving graduation progress
    setGameState((prev) => ({
      ...prev,
      day: prev.day + 1,
      todaysTasksCompleted: 0,
      tasksGeneratedToday: 0,
      dispatchQueue: [],
      currentEmailId: 'email-1',
      currentPasswordId: 'pwd-1',
      currentDocumentId: 'doc-1',
      investigatedCategories: new Set(),
      decision: null,
    }))
    
    usedIncidentsRef.current.clear()
    setNotificationCount(0)
    
    // Reset investigation list
    setInvestigationList((prev) =>
      prev.map((item) => ({
        ...item,
        checked: false,
      }))
    )
    
    // Reset other state
    setShowFeedback(false)
    setShowDecisionModal(false)
    setLastDecision(null)
    setShowPasswordFeedback(false)
    setLastPasswordDecision(null)
    setShowDataClassificationFeedback(false)
    setLastDataClassificationDecision(null)
    setCheckedPasswordCharacteristics(new Set())
    
    console.log('[v0] New day started')
  }

  return (
    <div className="w-[1920px] h-[1080px] bg-background text-foreground flex flex-col">
      {/* Header - Fixed height */}
      <Header currentTime={displayTime} graduationProgress={gameState.graduationProgress} />

      {/* Main Content - 3 Column Layout: 320px | flexible | 320px with 16px gaps */}
      <div className="flex-1 flex gap-4 p-4 min-h-0">
        {/* Left Sidebar - Fixed 320px width */}
        <div className="w-80 flex flex-col gap-2 flex-shrink-0">
          <CompanyCard 
            companyName="KAKFUNG INDUSTRIES"
            department="OPERATIONS"
            role="Associate"
          />
          <TasksPanel 
            currentTaskType={gameState.currentTaskType} 
            onSelectTask={handleSelectTask}
            dispatchQueue={gameState.dispatchQueue}
          />
          <button
            onClick={() => {
              setShowDispatchQueue(true)
              setGameState(prev => ({ ...prev, currentTaskType: null }))
            }}
            className={`py-3 px-4 rounded font-bold text-base transition-colors uppercase tracking-wider flex-shrink-0 border ${
              showDispatchQueue
                ? 'bg-[#171b1d] border-[#3a3f42] text-muted-foreground hover:opacity-90'
                : 'bg-[#171b1d] border-[#3a3f42] text-muted-foreground hover:opacity-75'
            }`}
          >
            View Queue
          </button>
          <ProgressPanel 
            tasksCompleted={gameState.todaysTasksCompleted}
            tasksTotal={15}
          />
        </div>

        {/* Center Content - Task-specific UI or Dispatch Queue */}
        <div className="flex-1 overflow-hidden">
          {showDispatchQueue ? (
            <DispatchQueueView
              queue={gameState.dispatchQueue}
              selectedQueueId={selectedQueueItemId}
              onSelectQueue={setSelectedQueueItemId}
            />
          ) : gameState.currentTaskType === 'email' ? (
            <EmailInvestigation
              emails={gameState.dispatchQueue
                .filter((item) => item.type === 'email')
                .map((item) => item.payload as Email)
              }
              selectedEmailId={gameState.currentEmailId}
              currentEmail={currentEmail}
              onSelectEmail={handleSelectEmail}
              onInvestigate={handleInvestigate}
              investigatedCategories={gameState.investigatedCategories}
            />
          ) : gameState.currentTaskType === 'password' ? (
            <div className="flex flex-col gap-4 h-full overflow-hidden">
              <PasswordStrengthTask
                password={
                  gameState.dispatchQueue
                    .find((item) => item.id === gameState.currentPasswordId && item.type === 'password')
                    ?.payload as Password | undefined
                }
                checkedCharacteristics={checkedPasswordCharacteristics}
                onToggleCharacteristic={handleTogglePasswordCharacteristic}
              />
              <PasswordDecisionPanel onMakeDecision={handlePasswordDecision} />
            </div>
          ) : gameState.currentTaskType === 'data-classification' ? (
            <DataClassificationTask
              document={
                gameState.dispatchQueue
                  .find((item) => item.id === gameState.currentDocumentId && item.type === 'data-classification')
                  ?.payload as DataClassification | undefined
              }
              onClassify={handleDataClassification}
            />
          ) : null}
        </div>

        {/* Right Sidebar - Fixed 320px width */}
        <div className="w-80 flex-shrink-0 min-h-0">
          {showDispatchQueue ? (
            <TaskDetailsPanel selectedQueueItem={gameState.dispatchQueue.find(q => q.id === selectedQueueItemId) || null} />
          ) : gameState.currentTaskType === 'email' ? (
            <InvestigationPanel
              investigationList={investigationList}
              onMakeDecision={() => setShowDecisionModal(true)}
              onCheckboxChange={handleCheckboxChange}
              onVerify={() => setShowContactModal(true)}
            />
          ) : gameState.currentTaskType === 'password' ? (
            <PasswordPolicyPanel />
          ) : gameState.currentTaskType === 'data-classification' ? (
            <DataClassificationDetailsPanel
              document={
                gameState.dispatchQueue
                  .find((item) => item.id === gameState.currentDocumentId && item.type === 'data-classification')
                  ?.payload as DataClassification | undefined
              }
              onClassify={handleDataClassification}
            />
          ) : null}
        </div>
      </div>

      {/* Bottom - Employee Handbook */}
      {/* {showHandbook && (
        <EmployeeHandbook onClose={() => setShowHandbook(false)} />
      )} */}

      {/* Decision Modal */}
      {showDecisionModal && currentEmail && (
        <DecisionModal
          email={currentEmail}
          onDecide={handleMakeDecision}
          onClose={() => setShowDecisionModal(false)}
        />
      )}

      {/* Feedback Modal */}
      {showFeedback && currentEmail && lastDecision && (
        <FeedbackModal
          email={currentEmail}
          userDecision={lastDecision}
          onContinue={handleContinueAfterFeedback}
        />
      )}

      {/* Password Feedback Modal */}
      {showPasswordFeedback && gameState.currentTaskType === 'password' && lastPasswordDecision && (
        <PasswordFeedbackModal
          password={
            (gameState.dispatchQueue
              .find((item) => item.id === gameState.currentPasswordId && item.type === 'password')
              ?.payload as Password) || mockPasswords[0]
          }
          userDecision={lastPasswordDecision}
          onContinue={handleContinueAfterPasswordFeedback}
        />
      )}

      {/* Data Classification Feedback Modal */}
      {showDataClassificationFeedback && gameState.currentTaskType === 'data-classification' && lastDataClassificationDecision && (
        <DataClassificationFeedbackModal
          document={
            (gameState.dispatchQueue
              .find((item) => item.id === gameState.currentDocumentId && item.type === 'data-classification')
              ?.payload as DataClassification) || mockDataClassifications[0]
          }
          userClassification={lastDataClassificationDecision}
          onContinue={handleContinueAfterDataClassificationFeedback}
        />
      )}

      {/* Contact Modal */}
      {showContactModal && (
        <ContactModal
          contacts={verificationContacts}
          onClose={() => setShowContactModal(false)}
        />
      )}

      {/* Persistent Desk UI */}
      <DeskUI 
        progressPercentage={gameState.graduationProgress} 
        onEndDay={handleEndDay}
        tasksCompleted={gameState.todaysTasksCompleted}
        isMuted={isMuted}
        onToggleMute={toggleMute}
      />
    </div>
  )
}
