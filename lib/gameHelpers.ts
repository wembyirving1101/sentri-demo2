import { Email, Password, DataClassification } from './types'

export function selectRandomFromArray<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)]
}

export function getRandomDelay(min: number = 7000, max: number = 15000): number {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export function generateRandomIncident(
  emails: Email[],
  passwords: Password[],
  documents: DataClassification[],
  usedIncidents: Set<string> = new Set()
): { type: 'email' | 'password' | 'data-classification'; id: string; payload: Email | Password | DataClassification } | null {
  if (emails.length === 0 && passwords.length === 0 && documents.length === 0) {
    return null
  }

  // Get available items for each type
  const availableEmails = emails.filter((e) => !usedIncidents.has(e.id))
  const availablePasswords = passwords.filter((p) => !usedIncidents.has(p.id))
  const availableDocuments = documents.filter((d) => !usedIncidents.has(d.id))

  // Weighted random selection: 65% email, 17.5% password, 17.5% data-classification
  const random = Math.random()
  let selectedType: 'email' | 'password' | 'data-classification' | null = null

  if (random < 0.65 && availableEmails.length > 0) {
    selectedType = 'email'
  } else if (random < 0.825 && availablePasswords.length > 0) {
    selectedType = 'password'
  } else if (availableDocuments.length > 0) {
    selectedType = 'data-classification'
  } else if (availableEmails.length > 0) {
    // Fallback to available types if preferred type is unavailable
    selectedType = 'email'
  } else if (availablePasswords.length > 0) {
    selectedType = 'password'
  } else if (availableDocuments.length > 0) {
    selectedType = 'data-classification'
  }

  if (!selectedType) return null

  switch (selectedType) {
    case 'email': {
      const availableEmails = emails.filter((e) => !usedIncidents.has(e.id))
      if (availableEmails.length === 0) return null
      const email = selectRandomFromArray(availableEmails)
      return { type: 'email', id: email.id, payload: email }
    }
    case 'password': {
      const availablePasswords = passwords.filter((p) => !usedIncidents.has(p.id))
      if (availablePasswords.length === 0) return null
      const password = selectRandomFromArray(availablePasswords)
      return { type: 'password', id: password.id, payload: password }
    }
    case 'data-classification': {
      const availableDocuments = documents.filter((d) => !usedIncidents.has(d.id))
      if (availableDocuments.length === 0) return null
      const document = selectRandomFromArray(availableDocuments)
      return { type: 'data-classification', id: document.id, payload: document }
    }
  }
}

export function getUniqueRandomItems<T>(array: T[], count: number): T[] {
  const shuffled = [...array].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, Math.min(count, array.length))
}
