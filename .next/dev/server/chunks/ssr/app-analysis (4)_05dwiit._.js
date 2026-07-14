module.exports = [
"[project]/app-analysis (4)/lib/mockEmails.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mockEmails",
    ()=>mockEmails,
    "verificationContacts",
    ()=>verificationContacts
]);
const mockEmails = [
    {
        id: 'email-1',
        from: 'Microsoft Security Team',
        senderDomain: 'security@microsoft-support.net',
        to: 'you@akfung.com',
        subject: 'Action Required: Verify Your Microsoft Account',
        body: `Dear User,

We detected unusual activity on your Microsoft account. 

To prevent account suspension, please verify your identity within 24 hours.

Click here to verify: [Verify Your Account](http://security-microsoft.net/verify)

If you did not request this, please ignore this email.

Thank you,
Microsoft Security Team`,
        timestamp: '09:15 AM',
        attachments: [
            {
                name: 'Account_Verification_Form.html',
                size: 125,
                type: 'HTML',
                suspicious: true,
                details: 'File contains form requesting login credentials'
            }
        ],
        isLegitimate: false,
        threat: 'phishing',
        clues: {
            senderProfile: 'Domain is suspicious - microsoft-support.net instead of microsoft.com. Legitimate Microsoft uses @microsoft.com domains.',
            linkDetails: [
                'Link points to security-microsoft.net - mimics official domain but slightly different',
                'No tracking or legitimate Microsoft URL patterns found'
            ],
            attachmentAnalysis: 'HTML file requesting login credentials is a major red flag. Microsoft does not send credentials requests via email.',
            languageAnalysis: 'Urgent tone with 24-hour deadline is a common phishing tactic. Grammar is mostly correct but formal tone seems off.',
            contextAnalysis: 'You did not initiate any account activity. The "unusual activity" claim is vague and unspecific.',
            requestAnalysis: 'Requesting account verification credentials via email is never legitimate. Real Microsoft uses secure portals.'
        }
    },
    {
        id: 'email-2',
        from: 'HR Department',
        senderDomain: 'hr@akfung.com',
        to: 'you@akfung.com',
        subject: 'Updated Benefits Information',
        body: `Hi,

We've updated our benefits package for this year. Please review the new information in the attached PDF.

Best regards,
HR Department`,
        timestamp: '08:50 AM',
        attachments: [
            {
                name: 'Benefits_2024.pdf',
                size: 450,
                type: 'PDF',
                suspicious: false,
                details: 'Standard company benefits document'
            }
        ],
        isLegitimate: true,
        threat: 'legitimate',
        clues: {
            senderProfile: 'Sender is from company domain (@akfung.com) and HR is a legitimate department.',
            linkDetails: [],
            attachmentAnalysis: 'PDF file from HR containing expected company benefits information.',
            languageAnalysis: 'Professional and calm tone, appropriate for HR communication.',
            contextAnalysis: 'Benefits updates are a normal annual occurrence. You work for this company.',
            requestAnalysis: 'No request for sensitive information or unusual actions. Just asking to review policy.'
        }
    },
    {
        id: 'email-3',
        from: 'Jason Lee',
        senderDomain: 'jlee@akfung.com',
        to: 'you@akfung.com',
        subject: 'Q3 Marketing Plan',
        body: `Hey,

Can you review the Q3 marketing plan? I've attached the latest draft. Let me know if you have any feedback.

Thanks!
Jason`,
        timestamp: '08:30 AM',
        attachments: [
            {
                name: 'Q3_Marketing_Plan.docx',
                size: 280,
                type: 'Word Document',
                suspicious: false,
                details: 'Company document shared internally'
            }
        ],
        isLegitimate: true,
        threat: 'legitimate',
        clues: {
            senderProfile: 'Jason Lee is a known colleague from marketing department. Email from company domain.',
            linkDetails: [],
            attachmentAnalysis: 'Standard Word document with marketing plan - normal business file.',
            languageAnalysis: 'Casual, friendly tone. Typical of internal colleague communication.',
            contextAnalysis: 'You work in marketing. Q3 planning is an expected business activity.',
            requestAnalysis: 'Simple request for feedback on work document. No suspicious requests.'
        }
    },
    {
        id: 'email-4',
        from: 'PayPal Alert',
        senderDomain: 'alert@paypal-secure.com',
        to: 'you@akfung.com',
        subject: 'Unusual Login Detected - Confirm Your Identity',
        body: `Your PayPal account has experienced an unusual login attempt from an unfamiliar location.

For your account security, we require immediate verification.

[Confirm Identity Now](http://paypal-secure.com/verify-identity)

This link will expire in 1 hour.

PayPal Security Team`,
        timestamp: '07:45 AM',
        attachments: [],
        isLegitimate: false,
        threat: 'phishing',
        clues: {
            senderProfile: 'Domain is alert@paypal-secure.com - real PayPal uses @paypal.com. The fake domain uses a common pattern to appear legitimate.',
            linkDetails: [
                'Link goes to paypal-secure.com instead of paypal.com',
                'No official PayPal branding or secure routing in URL'
            ],
            attachmentAnalysis: 'No attachments, but the verification link is the attack vector.',
            languageAnalysis: 'Creates artificial urgency with "1 hour" deadline. PayPal would never use this tactic.',
            contextAnalysis: 'You may not have PayPal account, or this could be sent to many addresses randomly.',
            requestAnalysis: 'Asking to verify identity via link is a phishing red flag. Real PayPal directs to official site.'
        }
    },
    {
        id: 'email-5',
        from: 'System Notification',
        senderDomain: 'notification@akfung.com',
        to: 'you@akfung.com',
        subject: 'Password will expire soon',
        body: `Your network password will expire in 7 days.

To reset your password securely, please visit:
https://akfung.com/portal/reset-password

Use your employee ID and current password to authenticate.

IT Support`,
        timestamp: 'Yesterday',
        attachments: [],
        isLegitimate: true,
        threat: 'legitimate',
        clues: {
            senderProfile: 'Notification from company notification system using official @akfung.com domain.',
            linkDetails: [
                'Link is to official company domain (akfung.com)',
                'Uses HTTPS for secure connection',
                'Path follows standard company portal naming'
            ],
            attachmentAnalysis: 'No attachments needed for password reset notification.',
            languageAnalysis: 'Professional, clear instructions. Standard security protocol messaging.',
            contextAnalysis: 'Password expiration notifications are normal company security policy.',
            requestAnalysis: 'Legitimate request to reset password through official company portal.'
        }
    },
    {
        id: 'email-6',
        from: 'Amazon Security',
        senderDomain: 'security@amazon-account.com',
        to: 'you@akfung.com',
        subject: 'Confirm Your Amazon Account - Unusual Activity',
        body: `We noticed unusual activity on your Amazon account.

Please confirm your identity immediately to prevent account closure.

[Confirm Account](http://amazon-account.com/security/verify)

Amazon Security Team`,
        timestamp: '06:30 AM',
        attachments: [],
        isLegitimate: false,
        threat: 'phishing',
        clues: {
            senderProfile: 'Domain is amazon-account.com, not amazon.com. Clear phishing indicator.',
            linkDetails: [
                'URL does not match official Amazon domain',
                'Generic verification link'
            ],
            attachmentAnalysis: 'No attachments.',
            languageAnalysis: 'Creates urgency with threat of account closure.',
            contextAnalysis: 'You may not have active Amazon account.',
            requestAnalysis: 'Amazon never requests confirmation via email links.'
        }
    },
    {
        id: 'email-7',
        from: 'IT Department',
        senderDomain: 'it@akfung.com',
        to: 'you@akfung.com',
        subject: 'Software License Renewal',
        body: `Your software licenses are up for renewal next month. Please submit your renewal requests through the IT portal.

https://akfung.com/licenses

Thank you,
IT Department`,
        timestamp: '05:15 AM',
        attachments: [],
        isLegitimate: true,
        threat: 'legitimate',
        clues: {
            senderProfile: 'From company IT department using official domain.',
            linkDetails: [
                'Official company domain with HTTPS'
            ],
            attachmentAnalysis: 'No attachments needed.',
            languageAnalysis: 'Professional and routine.',
            contextAnalysis: 'Software renewal is a normal business process.',
            requestAnalysis: 'Standard request through official channels.'
        }
    },
    {
        id: 'email-8',
        from: 'Bank of America Alert',
        senderDomain: 'alert@bank-of-america-verify.com',
        to: 'you@akfung.com',
        subject: 'Your Account Has Been Limited',
        body: `Your Bank of America account has been temporarily limited due to suspicious activity.

To unlock your account, verify your details here:
[Verify Banking Details](http://bank-of-america-verify.com/unlock)

Bank of America`,
        timestamp: '04:45 AM',
        attachments: [],
        isLegitimate: false,
        threat: 'phishing',
        clues: {
            senderProfile: 'Sender domain is bank-of-america-verify.com, not bankofamerica.com. Phishing domain.',
            linkDetails: [
                'Fake domain mimicking bank name'
            ],
            attachmentAnalysis: 'No attachments.',
            languageAnalysis: 'Creates fear and urgency about account access.',
            contextAnalysis: 'Real banks do not limit accounts via email.',
            requestAnalysis: 'Banks never request account details via email links.'
        }
    },
    {
        id: 'email-9',
        from: 'Finance Team',
        senderDomain: 'finance@akfung.com',
        to: 'you@akfung.com',
        subject: 'Expense Report Review Required',
        body: `Your recent expense report needs clarification on a few items. Please contact me to discuss.

Report ID: EXP-2026-0847

Thanks,
Finance`,
        timestamp: '03:30 AM',
        attachments: [],
        isLegitimate: true,
        threat: 'legitimate',
        clues: {
            senderProfile: 'From internal finance team using company domain.',
            linkDetails: [],
            attachmentAnalysis: 'No attachments.',
            languageAnalysis: 'Professional and straightforward.',
            contextAnalysis: 'Expense report review is normal business procedure.',
            requestAnalysis: 'Simple request for discussion, no suspicious actions.'
        }
    },
    {
        id: 'email-10',
        from: 'Apple ID Team',
        senderDomain: 'noreply@apple-security.com',
        to: 'you@akfung.com',
        subject: 'Verify Your Apple ID - Security Alert',
        body: `Your Apple ID requires verification due to recent sign-in attempts.

Click here to verify: [Verify Apple ID](http://apple-security.com/verify-id)

This link expires in 2 hours.

Apple Security`,
        timestamp: '02:00 AM',
        attachments: [],
        isLegitimate: false,
        threat: 'phishing',
        clues: {
            senderProfile: 'Domain is apple-security.com, not apple.com.',
            linkDetails: [
                'Impersonated Apple security domain'
            ],
            attachmentAnalysis: 'No attachments.',
            languageAnalysis: 'Artificial urgency with expiring link.',
            contextAnalysis: 'You may not have Apple ID associated with work email.',
            requestAnalysis: 'Apple never requests verification via external links.'
        }
    },
    {
        id: 'email-11',
        from: 'Conference Organizers',
        senderDomain: 'events@akfung.com',
        to: 'you@akfung.com',
        subject: 'Tech Conference Registration Confirmation',
        body: `Thank you for registering for the Tech Summit 2026.

Your confirmation details are attached. The event is next month.

Looking forward to seeing you there!

Events Team`,
        timestamp: '01:30 AM',
        attachments: [
            {
                name: 'Registration_Confirmation.pdf',
                size: 200,
                type: 'PDF',
                suspicious: false,
                details: 'Conference registration details'
            }
        ],
        isLegitimate: true,
        threat: 'legitimate',
        clues: {
            senderProfile: 'From company events team using company domain.',
            linkDetails: [],
            attachmentAnalysis: 'Standard PDF confirmation document.',
            languageAnalysis: 'Friendly and professional confirmation message.',
            contextAnalysis: 'Company conference registrations are expected.',
            requestAnalysis: 'No requests for sensitive information.'
        }
    },
    {
        id: 'email-12',
        from: 'Google Account Security',
        senderDomain: 'security@google-verify.net',
        to: 'you@akfung.com',
        subject: 'Unusual Activity Detected on Your Google Account',
        body: `We detected unusual sign-in activity on your Google account from an unknown location.

Secure your account now: [Verify Google Account](http://google-verify.net/account-security)

Google Security Team`,
        timestamp: '12:45 AM',
        attachments: [],
        isLegitimate: false,
        threat: 'phishing',
        clues: {
            senderProfile: 'Domain is google-verify.net, not google.com.',
            linkDetails: [
                'Fake Google security domain'
            ],
            attachmentAnalysis: 'No attachments.',
            languageAnalysis: 'Creates concern about account security.',
            contextAnalysis: 'Phishing targeting common email services.',
            requestAnalysis: 'Google provides in-account security warnings, not email links.'
        }
    },
    {
        id: 'email-13',
        from: 'Project Manager',
        senderDomain: 'pmanager@akfung.com',
        to: 'you@akfung.com',
        subject: 'Q3 Project Timeline Update',
        body: `Hi,

I've updated the Q3 project timeline based on latest milestones. Please review and provide feedback.

Attached is the updated schedule.

Best,
Project Manager`,
        timestamp: '11:30 PM',
        attachments: [
            {
                name: 'Q3_Timeline.xlsx',
                size: 320,
                type: 'Excel',
                suspicious: false,
                details: 'Project timeline spreadsheet'
            }
        ],
        isLegitimate: true,
        threat: 'legitimate',
        clues: {
            senderProfile: 'From internal project manager using company domain.',
            linkDetails: [],
            attachmentAnalysis: 'Standard project timeline document.',
            languageAnalysis: 'Professional project communication.',
            contextAnalysis: 'Project updates are regular business activities.',
            requestAnalysis: 'Standard request for feedback on project timeline.'
        }
    },
    {
        id: 'email-14',
        from: 'Stripe Payment Alerts',
        senderDomain: 'alerts@stripe-secure.io',
        to: 'you@akfung.com',
        subject: 'Suspicious Payment Detected',
        body: `We detected a suspicious payment on your Stripe account.

Review activity: [Check Payment](http://stripe-secure.io/payment-verify)

Stripe Security`,
        timestamp: '10:15 PM',
        attachments: [],
        isLegitimate: false,
        threat: 'phishing',
        clues: {
            senderProfile: 'Domain is stripe-secure.io, not stripe.com.',
            linkDetails: [
                'Impersonated Stripe payment domain'
            ],
            attachmentAnalysis: 'No attachments.',
            languageAnalysis: 'Alert language designed to trigger action.',
            contextAnalysis: 'Stripe alerts are shown in-app, not via email.',
            requestAnalysis: 'Legitimate payment services do not verify via email links.'
        }
    },
    {
        id: 'email-15',
        from: 'Learning & Development',
        senderDomain: 'learning@akfung.com',
        to: 'you@akfung.com',
        subject: 'Compliance Training: Security Awareness 2026',
        body: `All employees must complete the annual security awareness training.

Access the training module: https://akfung.com/learning/security-training

Completion deadline: End of this month.

Thank you,
Learning & Development`,
        timestamp: '09:00 PM',
        attachments: [],
        isLegitimate: true,
        threat: 'legitimate',
        clues: {
            senderProfile: 'From company L&D department using official domain.',
            linkDetails: [
                'Official company training platform link with HTTPS'
            ],
            attachmentAnalysis: 'No attachments needed for training notification.',
            languageAnalysis: 'Professional compliance communication.',
            contextAnalysis: 'Annual security training is standard corporate requirement.',
            requestAnalysis: 'Standard training enrollment request.'
        }
    }
];
const verificationContacts = [
    {
        id: 'it',
        name: 'IT Support',
        role: 'Technical Support',
        canHelp: [
            'Verify if a link is legitimate',
            'Check if attachments are safe',
            'Confirm company domains and email systems',
            'Provide information about phishing indicators'
        ]
    },
    {
        id: 'supervisor',
        name: 'Your Supervisor',
        role: 'Manager',
        canHelp: [
            'Confirm if work is expected from colleagues',
            'Verify company policies and procedures',
            'Provide context about business requests'
        ]
    },
    {
        id: 'hr',
        name: 'HR Department',
        role: 'Human Resources',
        canHelp: [
            'Confirm HR communications and benefits updates',
            'Verify company policies',
            'Confirm personnel-related requests'
        ]
    },
    {
        id: 'finance',
        name: 'Finance Department',
        role: 'Finance',
        canHelp: [
            'Verify payment requests and invoices',
            'Confirm financial communications',
            'Verify account information requests'
        ]
    },
    {
        id: 'sender',
        name: 'Contact Sender Directly',
        role: 'Direct Communication',
        canHelp: [
            'Verify if sender actually sent the email',
            'Confirm requests through alternative channel',
            'Ask about suspicious content directly'
        ]
    }
];
}),
"[project]/app-analysis (4)/lib/mockPasswords.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mockPasswords",
    ()=>mockPasswords
]);
const mockPasswords = [
    {
        id: 'pwd-1',
        employee: 'Jason Lee',
        department: 'Finance',
        submitted: 'P@ssword2025',
        timestamp: '09:12 AM',
        characteristics: [
            {
                id: 'length',
                label: 'Minimum 12 characters',
                description: 'Has 12 characters',
                icon: '📏',
                present: true,
                checked: false,
                weight: 50
            },
            {
                id: 'diversity',
                label: 'Character Diversity',
                description: 'Contains uppercase, lowercase, numbers, and symbols',
                icon: 'Aa',
                present: true,
                checked: false,
                weight: 30
            },
            {
                id: 'dictionary',
                label: 'Dictionary Words',
                description: 'Contains common word "password"',
                icon: '📚',
                present: true,
                checked: false,
                weight: 20
            },
            {
                id: 'sequential',
                label: 'Sequential Numbers',
                description: 'No sequential patterns detected',
                icon: '1️⃣',
                present: false,
                checked: false,
                weight: 25
            },
            {
                id: 'keyboard',
                label: 'Keyboard Patterns',
                description: 'No keyboard patterns detected',
                icon: '⌨️',
                present: false,
                checked: false,
                weight: 25
            },
            {
                id: 'personal',
                label: 'Personal Information',
                description: 'Does not contain employee name or common personal info',
                icon: '👤',
                present: false,
                checked: false,
                weight: 20
            },
            {
                id: 'company',
                label: 'Company Name',
                description: 'Does not contain company name',
                icon: '🏢',
                present: false,
                checked: false,
                weight: 20
            },
            {
                id: 'leaked',
                label: 'Known Leaked Passwords',
                description: 'Not in known breach database',
                icon: '⚠️',
                present: false,
                checked: false,
                weight: 50
            }
        ],
        correctDecision: 'revision'
    },
    {
        id: 'pwd-2',
        employee: 'Sarah Chen',
        department: 'Engineering',
        submitted: 'BlueMountain#847',
        timestamp: '09:45 AM',
        characteristics: [
            {
                id: 'length',
                label: 'Minimum 12 characters',
                description: 'Has 14 characters',
                icon: '📏',
                present: true,
                checked: false,
                weight: 50
            },
            {
                id: 'diversity',
                label: 'Character Diversity',
                description: 'Contains uppercase, lowercase, numbers, and symbols',
                icon: 'Aa',
                present: true,
                checked: false,
                weight: 30
            },
            {
                id: 'dictionary',
                label: 'Dictionary Words',
                description: 'Contains common words "Blue" and "Mountain"',
                icon: '📚',
                present: true,
                checked: false,
                weight: 20
            },
            {
                id: 'sequential',
                label: 'Sequential Numbers',
                description: 'No sequential patterns detected',
                icon: '1️⃣',
                present: false,
                checked: false,
                weight: 25
            },
            {
                id: 'keyboard',
                label: 'Keyboard Patterns',
                description: 'No keyboard patterns detected',
                icon: '⌨️',
                present: false,
                checked: false,
                weight: 25
            },
            {
                id: 'personal',
                label: 'Personal Information',
                description: 'Does not contain employee name',
                icon: '👤',
                present: false,
                checked: false,
                weight: 20
            },
            {
                id: 'company',
                label: 'Company Name',
                description: 'Does not contain company name',
                icon: '🏢',
                present: false,
                checked: false,
                weight: 20
            },
            {
                id: 'leaked',
                label: 'Known Leaked Passwords',
                description: 'Not in known breach database',
                icon: '⚠️',
                present: false,
                checked: false,
                weight: 50
            }
        ],
        correctDecision: 'revision'
    },
    {
        id: 'pwd-3',
        employee: 'Michael Torres',
        department: 'Sales',
        submitted: 'qwerty123456',
        timestamp: '08:30 AM',
        characteristics: [
            {
                id: 'length',
                label: 'Minimum 12 characters',
                description: 'Has 12 characters',
                icon: '📏',
                present: true,
                checked: false,
                weight: 50
            },
            {
                id: 'diversity',
                label: 'Character Diversity',
                description: 'Only contains lowercase and numbers',
                icon: 'Aa',
                present: false,
                checked: false,
                weight: 30
            },
            {
                id: 'dictionary',
                label: 'Dictionary Words',
                description: 'No common dictionary words',
                icon: '📚',
                present: false,
                checked: false,
                weight: 20
            },
            {
                id: 'sequential',
                label: 'Sequential Numbers',
                description: 'Contains sequential pattern "123456"',
                icon: '1️⃣',
                present: true,
                checked: false,
                weight: 25
            },
            {
                id: 'keyboard',
                label: 'Keyboard Patterns',
                description: 'Contains keyboard pattern "qwerty"',
                icon: '⌨️',
                present: true,
                checked: false,
                weight: 25
            },
            {
                id: 'personal',
                label: 'Personal Information',
                description: 'Does not contain employee name',
                icon: '👤',
                present: false,
                checked: false,
                weight: 20
            },
            {
                id: 'company',
                label: 'Company Name',
                description: 'Does not contain company name',
                icon: '🏢',
                present: false,
                checked: false,
                weight: 20
            },
            {
                id: 'leaked',
                label: 'Known Leaked Passwords',
                description: 'Found in common passwords list',
                icon: '⚠️',
                present: true,
                checked: false,
                weight: 50
            }
        ],
        correctDecision: 'reject'
    },
    {
        id: 'pwd-4',
        employee: 'Emily Watson',
        department: 'HR',
        submitted: 'Tr0pic@lSunset#92',
        timestamp: '07:30 AM',
        characteristics: [
            {
                id: 'length',
                label: 'Minimum 12 characters',
                description: 'Has 16 characters',
                icon: '📏',
                present: true,
                checked: false,
                weight: 50
            },
            {
                id: 'diversity',
                label: 'Character Diversity',
                description: 'Contains uppercase, lowercase, numbers, and symbols',
                icon: 'Aa',
                present: true,
                checked: false,
                weight: 30
            },
            {
                id: 'dictionary',
                label: 'Dictionary Words',
                description: 'No common dictionary words',
                icon: '📚',
                present: false,
                checked: false,
                weight: 20
            },
            {
                id: 'sequential',
                label: 'Sequential Numbers',
                description: 'No sequential patterns',
                icon: '1️⃣',
                present: false,
                checked: false,
                weight: 25
            },
            {
                id: 'keyboard',
                label: 'Keyboard Patterns',
                description: 'No keyboard patterns',
                icon: '⌨️',
                present: false,
                checked: false,
                weight: 25
            },
            {
                id: 'personal',
                label: 'Personal Information',
                description: 'Does not contain employee name',
                icon: '👤',
                present: false,
                checked: false,
                weight: 20
            },
            {
                id: 'company',
                label: 'Company Name',
                description: 'Does not contain company name',
                icon: '🏢',
                present: false,
                checked: false,
                weight: 20
            },
            {
                id: 'leaked',
                label: 'Known Leaked Passwords',
                description: 'Not in known breach database',
                icon: '⚠️',
                present: false,
                checked: false,
                weight: 50
            }
        ],
        correctDecision: 'approve'
    },
    {
        id: 'pwd-5',
        employee: 'David Kim',
        department: 'Engineering',
        submitted: 'DavidKim2024!',
        timestamp: '06:45 AM',
        characteristics: [
            {
                id: 'length',
                label: 'Minimum 12 characters',
                description: 'Has 13 characters',
                icon: '📏',
                present: true,
                checked: false,
                weight: 50
            },
            {
                id: 'diversity',
                label: 'Character Diversity',
                description: 'Contains uppercase, lowercase, numbers, and symbols',
                icon: 'Aa',
                present: true,
                checked: false,
                weight: 30
            },
            {
                id: 'dictionary',
                label: 'Dictionary Words',
                description: 'Contains employee name "David" and "Kim"',
                icon: '📚',
                present: true,
                checked: false,
                weight: 20
            },
            {
                id: 'sequential',
                label: 'Sequential Numbers',
                description: 'No sequential patterns',
                icon: '1️⃣',
                present: false,
                checked: false,
                weight: 25
            },
            {
                id: 'keyboard',
                label: 'Keyboard Patterns',
                description: 'No keyboard patterns',
                icon: '⌨️',
                present: false,
                checked: false,
                weight: 25
            },
            {
                id: 'personal',
                label: 'Personal Information',
                description: 'Contains employee name',
                icon: '👤',
                present: true,
                checked: false,
                weight: 20
            },
            {
                id: 'company',
                label: 'Company Name',
                description: 'Does not contain company name',
                icon: '🏢',
                present: false,
                checked: false,
                weight: 20
            },
            {
                id: 'leaked',
                label: 'Known Leaked Passwords',
                description: 'Not in known breach database',
                icon: '⚠️',
                present: false,
                checked: false,
                weight: 50
            }
        ],
        correctDecision: 'revision'
    },
    {
        id: 'pwd-6',
        employee: 'Rachel Green',
        department: 'Marketing',
        submitted: 'X#9kL@mN2pQ$vW',
        timestamp: '05:15 AM',
        characteristics: [
            {
                id: 'length',
                label: 'Minimum 12 characters',
                description: 'Has 14 characters',
                icon: '📏',
                present: true,
                checked: false,
                weight: 50
            },
            {
                id: 'diversity',
                label: 'Character Diversity',
                description: 'Contains uppercase, lowercase, numbers, and symbols',
                icon: 'Aa',
                present: true,
                checked: false,
                weight: 30
            },
            {
                id: 'dictionary',
                label: 'Dictionary Words',
                description: 'No dictionary words',
                icon: '📚',
                present: false,
                checked: false,
                weight: 20
            },
            {
                id: 'sequential',
                label: 'Sequential Numbers',
                description: 'No sequential patterns',
                icon: '1️⃣',
                present: false,
                checked: false,
                weight: 25
            },
            {
                id: 'keyboard',
                label: 'Keyboard Patterns',
                description: 'No keyboard patterns',
                icon: '⌨️',
                present: false,
                checked: false,
                weight: 25
            },
            {
                id: 'personal',
                label: 'Personal Information',
                description: 'Does not contain personal info',
                icon: '👤',
                present: false,
                checked: false,
                weight: 20
            },
            {
                id: 'company',
                label: 'Company Name',
                description: 'Does not contain company name',
                icon: '🏢',
                present: false,
                checked: false,
                weight: 20
            },
            {
                id: 'leaked',
                label: 'Known Leaked Passwords',
                description: 'Not in known breach database',
                icon: '⚠️',
                present: false,
                checked: false,
                weight: 50
            }
        ],
        correctDecision: 'approve'
    },
    {
        id: 'pwd-7',
        employee: 'James Rodriguez',
        department: 'Finance',
        submitted: 'welcome123',
        timestamp: '04:30 AM',
        characteristics: [
            {
                id: 'length',
                label: 'Minimum 12 characters',
                description: 'Has 11 characters',
                icon: '📏',
                present: false,
                checked: false,
                weight: 50
            },
            {
                id: 'diversity',
                label: 'Character Diversity',
                description: 'Only lowercase and numbers',
                icon: 'Aa',
                present: false,
                checked: false,
                weight: 30
            },
            {
                id: 'dictionary',
                label: 'Dictionary Words',
                description: 'Contains dictionary word "welcome"',
                icon: '📚',
                present: true,
                checked: false,
                weight: 20
            },
            {
                id: 'sequential',
                label: 'Sequential Numbers',
                description: 'Contains sequential pattern "123"',
                icon: '1️⃣',
                present: true,
                checked: false,
                weight: 25
            },
            {
                id: 'keyboard',
                label: 'Keyboard Patterns',
                description: 'No keyboard patterns',
                icon: '⌨️',
                present: false,
                checked: false,
                weight: 25
            },
            {
                id: 'personal',
                label: 'Personal Information',
                description: 'Does not contain personal info',
                icon: '👤',
                present: false,
                checked: false,
                weight: 20
            },
            {
                id: 'company',
                label: 'Company Name',
                description: 'Does not contain company name',
                icon: '🏢',
                present: false,
                checked: false,
                weight: 20
            },
            {
                id: 'leaked',
                label: 'Known Leaked Passwords',
                description: 'Found in common passwords list',
                icon: '⚠️',
                present: true,
                checked: false,
                weight: 50
            }
        ],
        correctDecision: 'reject'
    },
    {
        id: 'pwd-8',
        employee: 'Lisa Anderson',
        department: 'Operations',
        submitted: 'Phoenix@2026#Star',
        timestamp: '03:45 AM',
        characteristics: [
            {
                id: 'length',
                label: 'Minimum 12 characters',
                description: 'Has 15 characters',
                icon: '📏',
                present: true,
                checked: false,
                weight: 50
            },
            {
                id: 'diversity',
                label: 'Character Diversity',
                description: 'Contains uppercase, lowercase, numbers, and symbols',
                icon: 'Aa',
                present: true,
                checked: false,
                weight: 30
            },
            {
                id: 'dictionary',
                label: 'Dictionary Words',
                description: 'Contains dictionary word "Phoenix" and "Star"',
                icon: '📚',
                present: true,
                checked: false,
                weight: 20
            },
            {
                id: 'sequential',
                label: 'Sequential Numbers',
                description: 'No sequential patterns',
                icon: '1️⃣',
                present: false,
                checked: false,
                weight: 25
            },
            {
                id: 'keyboard',
                label: 'Keyboard Patterns',
                description: 'No keyboard patterns',
                icon: '⌨️',
                present: false,
                checked: false,
                weight: 25
            },
            {
                id: 'personal',
                label: 'Personal Information',
                description: 'Does not contain employee name',
                icon: '👤',
                present: false,
                checked: false,
                weight: 20
            },
            {
                id: 'company',
                label: 'Company Name',
                description: 'Does not contain company name',
                icon: '🏢',
                present: false,
                checked: false,
                weight: 20
            },
            {
                id: 'leaked',
                label: 'Known Leaked Passwords',
                description: 'Not in known breach database',
                icon: '⚠️',
                present: false,
                checked: false,
                weight: 50
            }
        ],
        correctDecision: 'revision'
    },
    {
        id: 'pwd-9',
        employee: 'Chris Butler',
        department: 'Sales',
        submitted: 'MyP@ssw0rd!Secure',
        timestamp: '02:30 AM',
        characteristics: [
            {
                id: 'length',
                label: 'Minimum 12 characters',
                description: 'Has 17 characters',
                icon: '📏',
                present: true,
                checked: false,
                weight: 50
            },
            {
                id: 'diversity',
                label: 'Character Diversity',
                description: 'Contains uppercase, lowercase, numbers, and symbols',
                icon: 'Aa',
                present: true,
                checked: false,
                weight: 30
            },
            {
                id: 'dictionary',
                label: 'Dictionary Words',
                description: 'Contains "password" and "secure"',
                icon: '📚',
                present: true,
                checked: false,
                weight: 20
            },
            {
                id: 'sequential',
                label: 'Sequential Numbers',
                description: 'No sequential patterns',
                icon: '1️⃣',
                present: false,
                checked: false,
                weight: 25
            },
            {
                id: 'keyboard',
                label: 'Keyboard Patterns',
                description: 'No keyboard patterns',
                icon: '⌨️',
                present: false,
                checked: false,
                weight: 25
            },
            {
                id: 'personal',
                label: 'Personal Information',
                description: 'Does not contain personal info',
                icon: '👤',
                present: false,
                checked: false,
                weight: 20
            },
            {
                id: 'company',
                label: 'Company Name',
                description: 'Does not contain company name',
                icon: '🏢',
                present: false,
                checked: false,
                weight: 20
            },
            {
                id: 'leaked',
                label: 'Known Leaked Passwords',
                description: 'Found in common passwords list',
                icon: '⚠️',
                present: true,
                checked: false,
                weight: 50
            }
        ],
        correctDecision: 'revision'
    },
    {
        id: 'pwd-10',
        employee: 'Nina Patel',
        department: 'Engineering',
        submitted: 'Quantum$Leap#89X',
        timestamp: '01:15 AM',
        characteristics: [
            {
                id: 'length',
                label: 'Minimum 12 characters',
                description: 'Has 15 characters',
                icon: '📏',
                present: true,
                checked: false,
                weight: 50
            },
            {
                id: 'diversity',
                label: 'Character Diversity',
                description: 'Contains uppercase, lowercase, numbers, and symbols',
                icon: 'Aa',
                present: true,
                checked: false,
                weight: 30
            },
            {
                id: 'dictionary',
                label: 'Dictionary Words',
                description: 'Contains words but unique combination',
                icon: '📚',
                present: true,
                checked: false,
                weight: 20
            },
            {
                id: 'sequential',
                label: 'Sequential Numbers',
                description: 'No sequential patterns',
                icon: '1️⃣',
                present: false,
                checked: false,
                weight: 25
            },
            {
                id: 'keyboard',
                label: 'Keyboard Patterns',
                description: 'No keyboard patterns',
                icon: '⌨️',
                present: false,
                checked: false,
                weight: 25
            },
            {
                id: 'personal',
                label: 'Personal Information',
                description: 'Does not contain personal info',
                icon: '👤',
                present: false,
                checked: false,
                weight: 20
            },
            {
                id: 'company',
                label: 'Company Name',
                description: 'Does not contain company name',
                icon: '🏢',
                present: false,
                checked: false,
                weight: 20
            },
            {
                id: 'leaked',
                label: 'Known Leaked Passwords',
                description: 'Not in known breach database',
                icon: '⚠️',
                present: false,
                checked: false,
                weight: 50
            }
        ],
        correctDecision: 'approve'
    },
    {
        id: 'pwd-11',
        employee: 'Marcus Johnson',
        department: 'IT',
        submitted: 'admin123admin',
        timestamp: '12:00 AM',
        characteristics: [
            {
                id: 'length',
                label: 'Minimum 12 characters',
                description: 'Has 13 characters',
                icon: '📏',
                present: true,
                checked: false,
                weight: 50
            },
            {
                id: 'diversity',
                label: 'Character Diversity',
                description: 'Only lowercase and numbers',
                icon: 'Aa',
                present: false,
                checked: false,
                weight: 30
            },
            {
                id: 'dictionary',
                label: 'Dictionary Words',
                description: 'Contains dictionary word "admin"',
                icon: '📚',
                present: true,
                checked: false,
                weight: 20
            },
            {
                id: 'sequential',
                label: 'Sequential Numbers',
                description: 'Contains sequential pattern "123"',
                icon: '1️⃣',
                present: true,
                checked: false,
                weight: 25
            },
            {
                id: 'keyboard',
                label: 'Keyboard Patterns',
                description: 'No keyboard patterns',
                icon: '⌨️',
                present: false,
                checked: false,
                weight: 25
            },
            {
                id: 'personal',
                label: 'Personal Information',
                description: 'Does not contain personal info',
                icon: '👤',
                present: false,
                checked: false,
                weight: 20
            },
            {
                id: 'company',
                label: 'Company Name',
                description: 'Does not contain company name',
                icon: '🏢',
                present: false,
                checked: false,
                weight: 20
            },
            {
                id: 'leaked',
                label: 'Known Leaked Passwords',
                description: 'Found in common passwords list',
                icon: '⚠️',
                present: true,
                checked: false,
                weight: 50
            }
        ],
        correctDecision: 'reject'
    },
    {
        id: 'pwd-12',
        employee: 'Sandra Lee',
        department: 'HR',
        submitted: 'GoldenHour@2026#',
        timestamp: '11:00 PM',
        characteristics: [
            {
                id: 'length',
                label: 'Minimum 12 characters',
                description: 'Has 15 characters',
                icon: '📏',
                present: true,
                checked: false,
                weight: 50
            },
            {
                id: 'diversity',
                label: 'Character Diversity',
                description: 'Contains uppercase, lowercase, numbers, and symbols',
                icon: 'Aa',
                present: true,
                checked: false,
                weight: 30
            },
            {
                id: 'dictionary',
                label: 'Dictionary Words',
                description: 'Contains words "Golden" and "Hour"',
                icon: '📚',
                present: true,
                checked: false,
                weight: 20
            },
            {
                id: 'sequential',
                label: 'Sequential Numbers',
                description: 'No sequential patterns',
                icon: '1️⃣',
                present: false,
                checked: false,
                weight: 25
            },
            {
                id: 'keyboard',
                label: 'Keyboard Patterns',
                description: 'No keyboard patterns',
                icon: '⌨️',
                present: false,
                checked: false,
                weight: 25
            },
            {
                id: 'personal',
                label: 'Personal Information',
                description: 'Does not contain employee name',
                icon: '👤',
                present: false,
                checked: false,
                weight: 20
            },
            {
                id: 'company',
                label: 'Company Name',
                description: 'Does not contain company name',
                icon: '🏢',
                present: false,
                checked: false,
                weight: 20
            },
            {
                id: 'leaked',
                label: 'Known Leaked Passwords',
                description: 'Not in known breach database',
                icon: '⚠️',
                present: false,
                checked: false,
                weight: 50
            }
        ],
        correctDecision: 'revision'
    },
    {
        id: 'pwd-13',
        employee: 'Trevor White',
        department: 'Operations',
        submitted: 'Tr3v0r@White$24',
        timestamp: '10:00 PM',
        characteristics: [
            {
                id: 'length',
                label: 'Minimum 12 characters',
                description: 'Has 15 characters',
                icon: '📏',
                present: true,
                checked: false,
                weight: 50
            },
            {
                id: 'diversity',
                label: 'Character Diversity',
                description: 'Contains uppercase, lowercase, numbers, and symbols',
                icon: 'Aa',
                present: true,
                checked: false,
                weight: 30
            },
            {
                id: 'dictionary',
                label: 'Dictionary Words',
                description: 'Contains employee name parts',
                icon: '📚',
                present: true,
                checked: false,
                weight: 20
            },
            {
                id: 'sequential',
                label: 'Sequential Numbers',
                description: 'No sequential patterns',
                icon: '1️⃣',
                present: false,
                checked: false,
                weight: 25
            },
            {
                id: 'keyboard',
                label: 'Keyboard Patterns',
                description: 'No keyboard patterns',
                icon: '⌨️',
                present: false,
                checked: false,
                weight: 25
            },
            {
                id: 'personal',
                label: 'Personal Information',
                description: 'Contains employee name',
                icon: '👤',
                present: true,
                checked: false,
                weight: 20
            },
            {
                id: 'company',
                label: 'Company Name',
                description: 'Does not contain company name',
                icon: '🏢',
                present: false,
                checked: false,
                weight: 20
            },
            {
                id: 'leaked',
                label: 'Known Leaked Passwords',
                description: 'Not in known breach database',
                icon: '⚠️',
                present: false,
                checked: false,
                weight: 50
            }
        ],
        correctDecision: 'revision'
    },
    {
        id: 'pwd-14',
        employee: 'Olivia Martinez',
        department: 'Finance',
        submitted: 'Cr1mson#Sky@925!',
        timestamp: '09:00 PM',
        characteristics: [
            {
                id: 'length',
                label: 'Minimum 12 characters',
                description: 'Has 16 characters',
                icon: '📏',
                present: true,
                checked: false,
                weight: 50
            },
            {
                id: 'diversity',
                label: 'Character Diversity',
                description: 'Contains uppercase, lowercase, numbers, and symbols',
                icon: 'Aa',
                present: true,
                checked: false,
                weight: 30
            },
            {
                id: 'dictionary',
                label: 'Dictionary Words',
                description: 'Contains words but unique',
                icon: '📚',
                present: true,
                checked: false,
                weight: 20
            },
            {
                id: 'sequential',
                label: 'Sequential Numbers',
                description: 'No sequential patterns',
                icon: '1️⃣',
                present: false,
                checked: false,
                weight: 25
            },
            {
                id: 'keyboard',
                label: 'Keyboard Patterns',
                description: 'No keyboard patterns',
                icon: '⌨️',
                present: false,
                checked: false,
                weight: 25
            },
            {
                id: 'personal',
                label: 'Personal Information',
                description: 'Does not contain personal info',
                icon: '👤',
                present: false,
                checked: false,
                weight: 20
            },
            {
                id: 'company',
                label: 'Company Name',
                description: 'Does not contain company name',
                icon: '🏢',
                present: false,
                checked: false,
                weight: 20
            },
            {
                id: 'leaked',
                label: 'Known Leaked Passwords',
                description: 'Not in known breach database',
                icon: '⚠️',
                present: false,
                checked: false,
                weight: 50
            }
        ],
        correctDecision: 'approve'
    },
    {
        id: 'pwd-15',
        employee: 'Kevin Stewart',
        department: 'Marketing',
        submitted: 'Test@1234pass',
        timestamp: '08:00 PM',
        characteristics: [
            {
                id: 'length',
                label: 'Minimum 12 characters',
                description: 'Has 13 characters',
                icon: '📏',
                present: true,
                checked: false,
                weight: 50
            },
            {
                id: 'diversity',
                label: 'Character Diversity',
                description: 'Contains uppercase, lowercase, numbers, and symbols',
                icon: 'Aa',
                present: true,
                checked: false,
                weight: 30
            },
            {
                id: 'dictionary',
                label: 'Dictionary Words',
                description: 'Contains "Test" and "pass"',
                icon: '📚',
                present: true,
                checked: false,
                weight: 20
            },
            {
                id: 'sequential',
                label: 'Sequential Numbers',
                description: 'Contains sequential pattern "1234"',
                icon: '1️⃣',
                present: true,
                checked: false,
                weight: 25
            },
            {
                id: 'keyboard',
                label: 'Keyboard Patterns',
                description: 'No keyboard patterns',
                icon: '⌨️',
                present: false,
                checked: false,
                weight: 25
            },
            {
                id: 'personal',
                label: 'Personal Information',
                description: 'Does not contain personal info',
                icon: '👤',
                present: false,
                checked: false,
                weight: 20
            },
            {
                id: 'company',
                label: 'Company Name',
                description: 'Does not contain company name',
                icon: '🏢',
                present: false,
                checked: false,
                weight: 20
            },
            {
                id: 'leaked',
                label: 'Known Leaked Passwords',
                description: 'Found in common passwords list',
                icon: '⚠️',
                present: true,
                checked: false,
                weight: 50
            }
        ],
        correctDecision: 'rejection'
    }
];
}),
"[project]/app-analysis (4)/lib/mockDataClassification.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mockDataClassifications",
    ()=>mockDataClassifications
]);
const mockDataClassifications = [
    {
        id: 'doc-1',
        title: 'Q3 Marketing Plan',
        from: 'Marketing Team',
        timestamp: '09:00 AM',
        fileType: 'PDF',
        fileSize: '1.2 MB',
        preview: 'Q3_Marketing_Plan.pdf\n\nThis document contains our quarterly marketing strategy, campaign timelines, and budget allocations for Q3 2026. It outlines our approach to promoting new product launches and market expansion in key regions.',
        sensitivityIndicators: [
            'Strategic business plans',
            'Budget information',
            'Market expansion data',
            'Product launch details'
        ],
        correctClassification: 'internal',
        shouldShareWith: 'External Marketing Agency'
    },
    {
        id: 'doc-2',
        title: 'Employee Handbook',
        from: 'Human Resources',
        timestamp: '08:15 AM',
        fileType: 'DOCX',
        fileSize: '2.5 MB',
        preview: 'Employee_Handbook_2026.docx\n\nCompany policies, code of conduct, benefits information, vacation policies, and general employee guidelines. This document is distributed to all employees on their first day.',
        sensitivityIndicators: [
            'Company policies',
            'Employee guidelines',
            'Publicly distributed document'
        ],
        correctClassification: 'internal',
        shouldShareWith: 'All Employees'
    },
    {
        id: 'doc-3',
        title: 'Customer Database Export',
        from: 'Database Admin',
        timestamp: '07:45 AM',
        fileType: 'CSV',
        fileSize: '45 MB',
        preview: 'customer_database_2026.csv\n\nContains customer names, email addresses, phone numbers, home addresses, purchase history, credit card last 4 digits, and customer lifetime value. Records for 50,000+ customers.',
        sensitivityIndicators: [
            'Personally Identifiable Information (PII)',
            'Customer names and contact information',
            'Customer financial data',
            'Email addresses and phone numbers',
            'Home addresses',
            'Purchase history'
        ],
        correctClassification: 'restricted',
        shouldShareWith: 'Authorized Data Team Members Only'
    },
    {
        id: 'doc-4',
        title: 'API Keys and Credentials',
        from: 'IT Security',
        timestamp: '10:30 AM',
        fileType: 'TXT',
        fileSize: '50 KB',
        preview: 'prod_api_keys_2026.txt\n\nProduction API keys, database passwords, SSH keys, OAuth tokens, and authentication credentials for all company services including AWS, Firebase, and third-party APIs.',
        sensitivityIndicators: [
            'Authentication credentials',
            'API keys and tokens',
            'Database passwords',
            'SSH keys',
            'Production system access',
            'OAuth credentials'
        ],
        correctClassification: 'restricted',
        shouldShareWith: 'System Administrators Only'
    },
    {
        id: 'doc-5',
        title: 'Blog Post: Company Culture',
        from: 'Communications',
        timestamp: '11:00 AM',
        fileType: 'DOCX',
        fileSize: '500 KB',
        preview: 'Blog_Company_Culture.docx\n\nArticle intended for public blog about company culture, team building events, and employee success stories. No sensitive information included. Ready for publication on company website.',
        sensitivityIndicators: [
            'Intended for external publication',
            'Public company information',
            'Employee testimonials (public)'
        ],
        correctClassification: 'public',
        shouldShareWith: 'Public Website'
    },
    {
        id: 'doc-6',
        title: 'Board Meeting Minutes',
        from: 'Executive Office',
        timestamp: '09:30 AM',
        fileType: 'DOCX',
        fileSize: '1.1 MB',
        preview: 'Board_Minutes_Q2_2026.docx\n\nMinutes from quarterly board meeting including financial results, strategic decisions, acquisition discussions, executive compensation, and investor relations updates. Contains forward-looking business strategy.',
        sensitivityIndicators: [
            'Strategic business plans',
            'Financial information',
            'Executive compensation',
            'Acquisition details',
            'Confidential contracts',
            'Board-level decisions'
        ],
        correctClassification: 'confidential',
        shouldShareWith: 'Board Members and Senior Executives Only'
    },
    {
        id: 'doc-7',
        title: 'Press Release - New Product Launch',
        from: 'Communications',
        timestamp: '08:00 AM',
        fileType: 'DOCX',
        fileSize: '350 KB',
        preview: 'Press_Release_Product_Launch.docx\n\nPublic press release announcing our new product launch next quarter. Ready for distribution to media outlets and public announcement.',
        sensitivityIndicators: [
            'Intended for public distribution',
            'Marketing materials'
        ],
        correctClassification: 'public',
        shouldShareWith: 'Media and Public'
    },
    {
        id: 'doc-8',
        title: 'Employee Salary Records',
        from: 'Payroll Department',
        timestamp: '07:30 AM',
        fileType: 'XLSX',
        fileSize: '2.8 MB',
        preview: 'Payroll_Database_Q2_2026.xlsx\n\nComplete employee salary records including names, salary amounts, bonuses, tax withholdings, and direct deposit information for all 200+ employees.',
        sensitivityIndicators: [
            'Employee salary information',
            'Personal financial data',
            'Tax withholding details',
            'Direct deposit accounts',
            'Highly sensitive personal information'
        ],
        correctClassification: 'restricted',
        shouldShareWith: 'HR and Finance Executives Only'
    },
    {
        id: 'doc-9',
        title: 'Company Social Media Policy',
        from: 'HR Department',
        timestamp: '06:45 AM',
        fileType: 'PDF',
        fileSize: '1.5 MB',
        preview: 'Social_Media_Policy_2026.pdf\n\nCompany policy on employee use of social media, distributed to all employees during onboarding. Includes guidelines for posting about company.',
        sensitivityIndicators: [
            'Standard company policy',
            'Distributed to all employees'
        ],
        correctClassification: 'internal',
        shouldShareWith: 'All Employees'
    },
    {
        id: 'doc-10',
        title: 'Client Contract - Tech Solutions Inc',
        from: 'Legal Department',
        timestamp: '05:15 AM',
        fileType: 'PDF',
        fileSize: '850 KB',
        preview: 'Tech_Solutions_Contract_2026.pdf\n\nMulti-year contract with Tech Solutions Inc including pricing, service levels, payment terms, and confidentiality clauses. Contains sensitive commercial terms.',
        sensitivityIndicators: [
            'Client contracts',
            'Pricing information',
            'Service level agreements',
            'Confidential terms'
        ],
        correctClassification: 'confidential',
        shouldShareWith: 'Legal, Finance, and Account Managers Only'
    },
    {
        id: 'doc-11',
        title: 'Annual Sustainability Report',
        from: 'Operations',
        timestamp: '04:30 AM',
        fileType: 'PDF',
        fileSize: '3.2 MB',
        preview: 'Sustainability_Report_2026.pdf\n\nAnnual sustainability and corporate responsibility report with environmental impact metrics, carbon footprint, and company initiatives. Published on company website.',
        sensitivityIndicators: [
            'Public company information',
            'Published externally'
        ],
        correctClassification: 'public',
        shouldShareWith: 'Public Website'
    },
    {
        id: 'doc-12',
        title: 'IT Security Incident Report',
        from: 'IT Security',
        timestamp: '03:45 AM',
        fileType: 'DOCX',
        fileSize: '1.8 MB',
        preview: 'Security_Incident_Report_2026.docx\n\nDetailed analysis of a data breach incident including vulnerability details, compromised systems, affected users, remediation steps, and security recommendations.',
        sensitivityIndicators: [
            'Security vulnerabilities',
            'Breach details',
            'System vulnerabilities',
            'Remediation strategies'
        ],
        correctClassification: 'restricted',
        shouldShareWith: 'Security Team and Executive Leadership Only'
    },
    {
        id: 'doc-13',
        title: 'Monthly Sales Report',
        from: 'Sales Department',
        timestamp: '02:30 AM',
        fileType: 'XLSX',
        fileSize: '1.2 MB',
        preview: 'Sales_Report_June_2026.xlsx\n\nMonthly sales figures, regional breakdown, customer acquisition data, and performance metrics shared within sales department.',
        sensitivityIndicators: [
            'Internal business metrics',
            'Sales performance data'
        ],
        correctClassification: 'internal',
        shouldShareWith: 'Sales Team and Management'
    },
    {
        id: 'doc-14',
        title: 'Vendor Payment Records',
        from: 'Finance',
        timestamp: '01:15 AM',
        fileType: 'XLSX',
        fileSize: '890 KB',
        preview: 'Vendor_Payments_2026.xlsx\n\nComplete vendor payment records including vendor names, addresses, account numbers, payment amounts, and banking information for 150+ vendors.',
        sensitivityIndicators: [
            'Financial information',
            'Vendor banking details',
            'Payment records',
            'Account information'
        ],
        correctClassification: 'restricted',
        shouldShareWith: 'Finance Department Only'
    },
    {
        id: 'doc-15',
        title: 'Industry Conference Brochure',
        from: 'Marketing',
        timestamp: '12:00 AM',
        fileType: 'PDF',
        fileSize: '2.1 MB',
        preview: 'Tech_Conference_2026_Brochure.pdf\n\nMarketing brochure for industry conference highlighting company services, team bios, and booth information. Distributed at conference and online.',
        sensitivityIndicators: [
            'Marketing material',
            'Public distribution'
        ],
        correctClassification: 'public',
        shouldShareWith: 'Conference Attendees and Public'
    }
];
}),
"[project]/app-analysis (4)/lib/gameHelpers.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateRandomIncident",
    ()=>generateRandomIncident,
    "getRandomDelay",
    ()=>getRandomDelay,
    "getUniqueRandomItems",
    ()=>getUniqueRandomItems,
    "selectRandomFromArray",
    ()=>selectRandomFromArray
]);
function selectRandomFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}
function getRandomDelay(min = 7000, max = 15000) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function generateRandomIncident(emails, passwords, documents, usedIncidents = new Set()) {
    if (emails.length === 0 && passwords.length === 0 && documents.length === 0) {
        return null;
    }
    // Get available items for each type
    const availableEmails = emails.filter((e)=>!usedIncidents.has(e.id));
    const availablePasswords = passwords.filter((p)=>!usedIncidents.has(p.id));
    const availableDocuments = documents.filter((d)=>!usedIncidents.has(d.id));
    // Weighted random selection: 65% email, 17.5% password, 17.5% data-classification
    const random = Math.random();
    let selectedType = null;
    if (random < 0.65 && availableEmails.length > 0) {
        selectedType = 'email';
    } else if (random < 0.825 && availablePasswords.length > 0) {
        selectedType = 'password';
    } else if (availableDocuments.length > 0) {
        selectedType = 'data-classification';
    } else if (availableEmails.length > 0) {
        // Fallback to available types if preferred type is unavailable
        selectedType = 'email';
    } else if (availablePasswords.length > 0) {
        selectedType = 'password';
    } else if (availableDocuments.length > 0) {
        selectedType = 'data-classification';
    }
    if (!selectedType) return null;
    switch(selectedType){
        case 'email':
            {
                const availableEmails = emails.filter((e)=>!usedIncidents.has(e.id));
                if (availableEmails.length === 0) return null;
                const email = selectRandomFromArray(availableEmails);
                return {
                    type: 'email',
                    id: email.id,
                    payload: email
                };
            }
        case 'password':
            {
                const availablePasswords = passwords.filter((p)=>!usedIncidents.has(p.id));
                if (availablePasswords.length === 0) return null;
                const password = selectRandomFromArray(availablePasswords);
                return {
                    type: 'password',
                    id: password.id,
                    payload: password
                };
            }
        case 'data-classification':
            {
                const availableDocuments = documents.filter((d)=>!usedIncidents.has(d.id));
                if (availableDocuments.length === 0) return null;
                const document = selectRandomFromArray(availableDocuments);
                return {
                    type: 'data-classification',
                    id: document.id,
                    payload: document
                };
            }
    }
}
function getUniqueRandomItems(array, count) {
    const shuffled = [
        ...array
    ].sort(()=>Math.random() - 0.5);
    return shuffled.slice(0, Math.min(count, array.length));
}
}),
"[project]/app-analysis (4)/lib/useCorrectAnswerSound.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCorrectAnswerSound",
    ()=>useCorrectAnswerSound
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-analysis (4)/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function useCorrectAnswerSound() {
    const audioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const lastPlayTimeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const playCorrectSound = ()=>{
        const now = Date.now();
        if (now - lastPlayTimeRef.current < 50) {
            return;
        }
        lastPlayTimeRef.current = now;
        if (!audioRef.current) {
            audioRef.current = new Audio('/SFX/correct-answer.mp3');
            audioRef.current.volume = 0.4;
        }
        try {
            audioRef.current.currentTime = 0;
            audioRef.current.play().catch(()=>{});
        } catch  {
        // Silently fail if audio can't play
        }
    };
    return playCorrectSound;
}
}),
"[project]/app-analysis (4)/lib/useWrongAnswerSound.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useWrongAnswerSound",
    ()=>useWrongAnswerSound
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-analysis (4)/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function useWrongAnswerSound() {
    const audioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const lastPlayTimeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const playWrongSound = ()=>{
        const now = Date.now();
        if (now - lastPlayTimeRef.current < 50) {
            return;
        }
        lastPlayTimeRef.current = now;
        if (!audioRef.current) {
            audioRef.current = new Audio('/SFX/wrong-answer.mp3');
            audioRef.current.volume = 0.4;
        }
        try {
            audioRef.current.currentTime = 0;
            audioRef.current.play().catch(()=>{});
        } catch  {
        // Silently fail if audio can't play
        }
    };
    return playWrongSound;
}
}),
"[project]/app-analysis (4)/lib/useTaskNotificationSound.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTaskNotificationSound",
    ()=>useTaskNotificationSound
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-analysis (4)/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function useTaskNotificationSound() {
    const audioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const playTaskNotificationSound = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        try {
            // Create audio element if it doesn't exist
            if (!audioRef.current) {
                audioRef.current = new Audio('/SFX/task-notification.mp3');
                audioRef.current.volume = 0.6;
            }
            // Reset and play
            audioRef.current.currentTime = 0;
            const playPromise = audioRef.current.play();
            // Handle browser autoplay restrictions
            if (playPromise !== undefined) {
                playPromise.catch(()=>{
                // Autoplay was prevented
                });
            }
        } catch (error) {
        // Audio playback failed, silently continue
        }
    }, []);
    return playTaskNotificationSound;
}
}),
"[project]/app-analysis (4)/lib/useBackgroundMusic.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useBackgroundMusic",
    ()=>useBackgroundMusic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-analysis (4)/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
function useBackgroundMusic() {
    const audioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isMuted, setIsMuted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Create audio element if it doesn't exist
        if (!audioRef.current) {
            const audio = new Audio('/music/gameplay-ost.mp3');
            audio.loop = true;
            audio.volume = 0.3; // Set to 30% volume
            audioRef.current = audio;
            // Start playing on mount
            audio.play().catch((err)=>console.log('[v0] Could not auto-play music:', err));
        }
        return ()=>{
            // Cleanup on unmount
            if (audioRef.current) {
                audioRef.current.pause();
            }
        };
    }, []);
    const toggleMute = ()=>{
        if (audioRef.current) {
            if (isMuted) {
                audioRef.current.play().catch((err)=>console.log('[v0] Could not resume music:', err));
            } else {
                audioRef.current.pause();
            }
            setIsMuted(!isMuted);
        }
    };
    return {
        isMuted,
        toggleMute
    };
}
}),
"[project]/app-analysis (4)/components/Header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-analysis (4)/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/app-analysis (4)/node_modules/lucide-react/dist/esm/icons/settings.mjs [app-ssr] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$question$2d$mark$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__ = __turbopack_context__.i("[project]/app-analysis (4)/node_modules/lucide-react/dist/esm/icons/circle-question-mark.mjs [app-ssr] (ecmascript) <export default as HelpCircle>");
;
;
function Header({ currentTime, graduationProgress }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "border-b border-border bg-card px-8 py-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-2xl font-black tracking-widest text-foreground",
                            children: "SENTRI DISPATCH CONSOLE"
                        }, void 0, false, {
                            fileName: "[project]/app-analysis (4)/components/Header.tsx",
                            lineNumber: 14,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-mono text-base font-bold text-muted-foreground",
                            suppressHydrationWarning: true,
                            children: currentTime
                        }, void 0, false, {
                            fileName: "[project]/app-analysis (4)/components/Header.tsx",
                            lineNumber: 17,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app-analysis (4)/components/Header.tsx",
                    lineNumber: 13,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 mx-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-secondary rounded h-8 overflow-hidden border border-border",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-success h-full transition-all duration-300",
                                        style: {
                                            width: `${graduationProgress}%`
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/app-analysis (4)/components/Header.tsx",
                                        lineNumber: 27,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app-analysis (4)/components/Header.tsx",
                                    lineNumber: 26,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app-analysis (4)/components/Header.tsx",
                                lineNumber: 25,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-mono text-base font-black text-success min-w-12",
                                children: [
                                    graduationProgress,
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app-analysis (4)/components/Header.tsx",
                                lineNumber: 33,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app-analysis (4)/components/Header.tsx",
                        lineNumber: 24,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app-analysis (4)/components/Header.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "p-2 hover:bg-secondary rounded transition-colors",
                            title: "Settings",
                            "aria-label": "Settings",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                size: 24,
                                className: "text-muted-foreground hover:text-foreground"
                            }, void 0, false, {
                                fileName: "[project]/app-analysis (4)/components/Header.tsx",
                                lineNumber: 46,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app-analysis (4)/components/Header.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "p-2 hover:bg-secondary rounded transition-colors",
                            title: "Help",
                            "aria-label": "Help",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$question$2d$mark$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__["HelpCircle"], {
                                size: 24,
                                className: "text-muted-foreground hover:text-foreground"
                            }, void 0, false, {
                                fileName: "[project]/app-analysis (4)/components/Header.tsx",
                                lineNumber: 53,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app-analysis (4)/components/Header.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app-analysis (4)/components/Header.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app-analysis (4)/components/Header.tsx",
            lineNumber: 11,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app-analysis (4)/components/Header.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
}),
"[project]/app-analysis (4)/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-analysis (4)/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-analysis (4)/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/app-analysis (4)/lib/borderVariants.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "borderVariants",
    ()=>borderVariants,
    "getBorderClass",
    ()=>getBorderClass
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-analysis (4)/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-analysis (4)/lib/utils.ts [app-ssr] (ecmascript)");
;
;
const borderVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])('border', {
    variants: {
        variant: {
            // Subtle divider - low visual weight for separators and dividing lines
            divider: 'border-border/40',
            // Default/primary - standard borders for most components (cards, panels)
            default: 'border-border',
            // Emphasis - thicker, more prominent borders for important containers (2px)
            emphasis: 'border-2 border-border',
            // Strong emphasis - thickest border for the most prominent elements (4px)
            strongEmphasis: 'border-4 border-border',
            // Active/focus - indicates interactive or selected state
            active: 'border-2 border-accent',
            // Interactive - subtle interactive state with transition
            interactive: 'border-border hover:border-accent/80 transition-colors duration-200',
            // Error/danger - indicates error or destructive state
            error: 'border-destructive',
            // Success - indicates successful or valid state
            success: 'border-success',
            // Ring/focus - outline-style focus indicator
            ring: 'border-2 border-ring',
            // None - explicitly no border
            none: 'border-0'
        }
    },
    defaultVariants: {
        variant: 'default'
    }
});
function getBorderClass(variant, additionalClasses) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(borderVariants({
        variant
    }), additionalClasses);
}
}),
"[project]/app-analysis (4)/components/CompanyCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CompanyCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-analysis (4)/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/app-analysis (4)/node_modules/lucide-react/dist/esm/icons/building-2.mjs [app-ssr] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$borderVariants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-analysis (4)/lib/borderVariants.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-analysis (4)/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
function CompanyCard({ companyName, department, role }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('bg-card rounded p-4', (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$borderVariants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["borderVariants"])({
            variant: 'emphasis'
        })),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-xs font-bold tracking-widest text-muted-foreground uppercase mb-3",
                children: "COMPANY"
            }, void 0, false, {
                fileName: "[project]/app-analysis (4)/components/CompanyCard.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-3 items-start",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('w-10 h-10 bg-secondary rounded flex items-center justify-center flex-shrink-0', (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$borderVariants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["borderVariants"])({
                            variant: 'divider'
                        })),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
                            size: 20,
                            className: "text-accent"
                        }, void 0, false, {
                            fileName: "[project]/app-analysis (4)/components/CompanyCard.tsx",
                            lineNumber: 20,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app-analysis (4)/components/CompanyCard.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm font-bold text-foreground uppercase tracking-wide leading-tight",
                                children: companyName
                            }, void 0, false, {
                                fileName: "[project]/app-analysis (4)/components/CompanyCard.tsx",
                                lineNumber: 24,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-muted-foreground mt-1",
                                children: role.toUpperCase()
                            }, void 0, false, {
                                fileName: "[project]/app-analysis (4)/components/CompanyCard.tsx",
                                lineNumber: 27,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('text-xs text-muted-foreground mt-2 pt-2', (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$borderVariants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["borderVariants"])({
                                    variant: 'divider'
                                }), 'border-t'),
                                children: department
                            }, void 0, false, {
                                fileName: "[project]/app-analysis (4)/components/CompanyCard.tsx",
                                lineNumber: 30,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app-analysis (4)/components/CompanyCard.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app-analysis (4)/components/CompanyCard.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app-analysis (4)/components/CompanyCard.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
}),
"[project]/app-analysis (4)/lib/useClickSound.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useClickSound",
    ()=>useClickSound
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-analysis (4)/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function useClickSound() {
    const audioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const lastPlayTimeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const playClickSound = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        // Prevent overlapping sounds (debounce to 50ms)
        const now = Date.now();
        if (now - lastPlayTimeRef.current < 50) {
            return;
        }
        lastPlayTimeRef.current = now;
        try {
            // Create audio element if it doesn't exist
            if (!audioRef.current) {
                audioRef.current = new Audio('/SFX/click.mp3');
                audioRef.current.volume = 0.4;
            }
            // Reset and play
            audioRef.current.currentTime = 0;
            const playPromise = audioRef.current.play();
            // Handle browser autoplay restrictions
            if (playPromise !== undefined) {
                playPromise.catch(()=>{
                // Autoplay was prevented, user hasn't interacted with page yet
                // Silently fail - this is expected behavior
                });
            }
        } catch (error) {
            // Audio playback failed, silently continue
            console.log('[v0] Click sound failed to play (expected on some browsers)');
        }
    }, []);
    return playClickSound;
}
}),
"[project]/app-analysis (4)/components/TasksPanel.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TasksPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-analysis (4)/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/app-analysis (4)/node_modules/lucide-react/dist/esm/icons/mail.mjs [app-ssr] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/app-analysis (4)/node_modules/lucide-react/dist/esm/icons/shield.mjs [app-ssr] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__ = __turbopack_context__.i("[project]/app-analysis (4)/node_modules/lucide-react/dist/esm/icons/database.mjs [app-ssr] (ecmascript) <export default as Database>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$borderVariants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-analysis (4)/lib/borderVariants.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-analysis (4)/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$useClickSound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-analysis (4)/lib/useClickSound.ts [app-ssr] (ecmascript)");
;
;
;
;
;
function TasksPanel({ currentTaskType, onSelectTask, dispatchQueue }) {
    const playClickSound = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$useClickSound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useClickSound"])();
    const emailCount = dispatchQueue.filter((item)=>item.type === 'email').length;
    const passwordCount = dispatchQueue.filter((item)=>item.type === 'password').length;
    const dataClassificationCount = dispatchQueue.filter((item)=>item.type === 'data-classification').length;
    const tasks = [
        {
            id: 'email',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"],
            label: 'Email Investigation',
            active: currentTaskType === 'email',
            count: emailCount
        },
        {
            id: 'password',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"],
            label: 'Password Strength',
            active: currentTaskType === 'password',
            count: passwordCount
        },
        {
            id: 'data-classification',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__["Database"],
            label: 'Data Classification',
            active: currentTaskType === 'data-classification',
            count: dataClassificationCount
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('bg-card rounded p-4 flex-1 flex flex-col', (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$borderVariants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["borderVariants"])({
            variant: 'emphasis'
        })),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-xs font-bold tracking-widest text-muted-foreground uppercase mb-3",
                children: "TASKS"
            }, void 0, false, {
                fileName: "[project]/app-analysis (4)/components/TasksPanel.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2 flex-1",
                children: tasks.map((task)=>{
                    const Icon = task.icon;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            playClickSound();
                            onSelectTask(task.id);
                        },
                        className: `w-full flex items-center gap-2 px-4 py-3 rounded text-base font-bold transition-colors ${task.active ? 'bg-success text-success-foreground hover:opacity-90' : 'bg-secondary text-foreground hover:bg-opacity-75'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                size: 20
                            }, void 0, false, {
                                fileName: "[project]/app-analysis (4)/components/TasksPanel.tsx",
                                lineNumber: 65,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex-1 text-left font-bold",
                                children: task.label
                            }, void 0, false, {
                                fileName: "[project]/app-analysis (4)/components/TasksPanel.tsx",
                                lineNumber: 66,
                                columnNumber: 15
                            }, this),
                            task.count > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "ml-2 px-2 py-1 bg-destructive text-destructive-foreground rounded text-xs font-bold",
                                children: task.count
                            }, void 0, false, {
                                fileName: "[project]/app-analysis (4)/components/TasksPanel.tsx",
                                lineNumber: 68,
                                columnNumber: 17
                            }, this)
                        ]
                    }, task.id, true, {
                        fileName: "[project]/app-analysis (4)/components/TasksPanel.tsx",
                        lineNumber: 53,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/app-analysis (4)/components/TasksPanel.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app-analysis (4)/components/TasksPanel.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
}),
"[project]/app-analysis (4)/components/ProgressPanel.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProgressPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-analysis (4)/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__ = __turbopack_context__.i("[project]/app-analysis (4)/node_modules/lucide-react/dist/esm/icons/bot.mjs [app-ssr] (ecmascript) <export default as Bot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$borderVariants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-analysis (4)/lib/borderVariants.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-analysis (4)/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
function ProgressPanel({ tasksCompleted = 2, tasksTotal = 4 }) {
    const progressPercentage = tasksCompleted / tasksTotal * 100;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('bg-card rounded p-4 flex-1 flex flex-col', (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$borderVariants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["borderVariants"])({
            variant: 'emphasis'
        })),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4 flex-1",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xs font-bold tracking-widest text-muted-foreground mb-3 uppercase",
                            children: "PROGRESS"
                        }, void 0, false, {
                            fileName: "[project]/app-analysis (4)/components/ProgressPanel.tsx",
                            lineNumber: 18,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs text-muted-foreground",
                                            children: "TODAY'S TASKS"
                                        }, void 0, false, {
                                            fileName: "[project]/app-analysis (4)/components/ProgressPanel.tsx",
                                            lineNumber: 23,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-mono text-sm font-bold text-accent",
                                            children: [
                                                tasksCompleted,
                                                "/",
                                                tasksTotal
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app-analysis (4)/components/ProgressPanel.tsx",
                                            lineNumber: 24,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app-analysis (4)/components/ProgressPanel.tsx",
                                    lineNumber: 22,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('bg-secondary rounded h-4 overflow-hidden', (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$borderVariants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["borderVariants"])({
                                        variant: 'divider'
                                    })),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-success h-full transition-all duration-300",
                                        style: {
                                            width: `${progressPercentage}%`
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/app-analysis (4)/components/ProgressPanel.tsx",
                                        lineNumber: 27,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app-analysis (4)/components/ProgressPanel.tsx",
                                    lineNumber: 26,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app-analysis (4)/components/ProgressPanel.tsx",
                            lineNumber: 21,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app-analysis (4)/components/ProgressPanel.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app-analysis (4)/components/ProgressPanel.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('pt-4 mt-4', (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$borderVariants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["borderVariants"])({
                    variant: 'divider'
                }), 'border-t'),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('w-12 h-12 bg-secondary rounded flex items-center justify-center flex-shrink-0', (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$borderVariants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["borderVariants"])({
                                variant: 'divider'
                            })),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {
                                size: 24,
                                className: "text-accent"
                            }, void 0, false, {
                                fileName: "[project]/app-analysis (4)/components/ProgressPanel.tsx",
                                lineNumber: 40,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app-analysis (4)/components/ProgressPanel.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs font-bold text-foreground uppercase tracking-wide",
                                    children: "SENTRI"
                                }, void 0, false, {
                                    fileName: "[project]/app-analysis (4)/components/ProgressPanel.tsx",
                                    lineNumber: 43,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-muted-foreground leading-tight mt-1",
                                    children: "Investigate carefully. Collect evidence before you decide."
                                }, void 0, false, {
                                    fileName: "[project]/app-analysis (4)/components/ProgressPanel.tsx",
                                    lineNumber: 44,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app-analysis (4)/components/ProgressPanel.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app-analysis (4)/components/ProgressPanel.tsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app-analysis (4)/components/ProgressPanel.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app-analysis (4)/components/ProgressPanel.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
}),
"[project]/app-analysis (4)/components/DispatchQueueView.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DispatchQueueView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-analysis (4)/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-analysis (4)/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/app-analysis (4)/node_modules/lucide-react/dist/esm/icons/mail.mjs [app-ssr] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/app-analysis (4)/node_modules/lucide-react/dist/esm/icons/lock.mjs [app-ssr] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/app-analysis (4)/node_modules/lucide-react/dist/esm/icons/shield.mjs [app-ssr] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__ = __turbopack_context__.i("[project]/app-analysis (4)/node_modules/lucide-react/dist/esm/icons/database.mjs [app-ssr] (ecmascript) <export default as Database>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$mockEmails$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-analysis (4)/lib/mockEmails.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$mockDataClassification$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-analysis (4)/lib/mockDataClassification.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$useClickSound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-analysis (4)/lib/useClickSound.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$borderVariants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-analysis (4)/lib/borderVariants.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-analysis (4)/lib/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
function DispatchQueueView({ queue, selectedQueueId, onSelectQueue }) {
    const playClickSound = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$useClickSound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useClickSound"])();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('all');
    const tabs = [
        {
            id: 'all',
            label: 'ALL',
            count: queue.length
        },
        {
            id: 'email',
            label: 'EMAIL',
            count: queue.filter((q)=>q.type === 'email').length
        },
        {
            id: 'password',
            label: 'PASSWORD',
            count: queue.filter((q)=>q.type === 'password').length
        },
        {
            id: 'strength',
            label: 'STRENGTH',
            count: queue.filter((q)=>q.type === 'password-strength').length
        },
        {
            id: 'data',
            label: 'DATA',
            count: queue.filter((q)=>q.type === 'data-classification').length
        }
    ];
    const getFilteredQueue = ()=>{
        if (activeTab === 'all') return queue;
        if (activeTab === 'email') return queue.filter((q)=>q.type === 'email');
        if (activeTab === 'password') return queue.filter((q)=>q.type === 'password');
        if (activeTab === 'strength') return queue.filter((q)=>q.type === 'password-strength');
        if (activeTab === 'data') return queue.filter((q)=>q.type === 'data-classification');
        return queue;
    };
    const getTaskTypeIcon = (type)=>{
        switch(type){
            case 'email':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                    size: 16
                }, void 0, false, {
                    fileName: "[project]/app-analysis (4)/components/DispatchQueueView.tsx",
                    lineNumber: 42,
                    columnNumber: 16
                }, this);
            case 'password':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                    size: 16
                }, void 0, false, {
                    fileName: "[project]/app-analysis (4)/components/DispatchQueueView.tsx",
                    lineNumber: 44,
                    columnNumber: 16
                }, this);
            case 'password-strength':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                    size: 16
                }, void 0, false, {
                    fileName: "[project]/app-analysis (4)/components/DispatchQueueView.tsx",
                    lineNumber: 46,
                    columnNumber: 16
                }, this);
            case 'data-classification':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__["Database"], {
                    size: 16
                }, void 0, false, {
                    fileName: "[project]/app-analysis (4)/components/DispatchQueueView.tsx",
                    lineNumber: 48,
                    columnNumber: 16
                }, this);
            default:
                return null;
        }
    };
    const getTaskDescription = (queueItem)=>{
        if (queueItem.type === 'email') {
            const email = __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$mockEmails$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockEmails"].find((e)=>e.id === queueItem.id);
            return email?.subject || 'Unknown email';
        } else if (queueItem.type === 'password') {
            return 'New password submission';
        } else if (queueItem.type === 'password-strength') {
            return 'Password strength check';
        } else if (queueItem.type === 'data-classification') {
            const doc = __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$mockDataClassification$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockDataClassifications"].find((d)=>d.id === queueItem.id);
            return doc?.name || 'Unknown document';
        }
        return 'Unknown task';
    };
    const getTaskSource = (queueItem)=>{
        if (queueItem.type === 'email') {
            const email = __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$mockEmails$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockEmails"].find((e)=>e.id === queueItem.id);
            return email?.from || 'Unknown';
        } else if (queueItem.type === 'data-classification') {
            const doc = __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$mockDataClassification$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockDataClassifications"].find((d)=>d.id === queueItem.id);
            return doc?.from || 'Unknown';
        }
        return 'System';
    };
    const getTaskTime = (queueItem)=>{
        if (queueItem.type === 'email') {
            const email = __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$mockEmails$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockEmails"].find((e)=>e.id === queueItem.id);
            return email?.timestamp || '--:--';
        }
        return 'Now';
    };
    const getPriority = (queueItem)=>{
        if (queueItem.type === 'email') {
            const email = __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$mockEmails$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockEmails"].find((e)=>e.id === queueItem.id);
            return email?.priority || 'MEDIUM';
        } else if (queueItem.type === 'data-classification') {
            const doc = __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$mockDataClassification$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockDataClassifications"].find((d)=>d.id === queueItem.id);
            return doc?.priority || 'MEDIUM';
        }
        return 'MEDIUM';
    };
    const getPriorityColor = (priority)=>{
        if (priority === 'HIGH') return 'bg-[#d8b8b8] border-2 border-[#c89898] text-[#000000]';
        if (priority === 'MEDIUM') return 'bg-[#d4c5a9] border-2 border-[#c4b599] text-[#000000]';
        return 'bg-[#a8d5a8] border-2 border-[#7fb87f] text-[#000000]';
    };
    const typeLabel = {
        email: 'Email',
        password: 'Password',
        'password-strength': 'Strength',
        'data-classification': 'Data'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('h-full flex flex-col bg-[#171b1d]', (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$borderVariants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["borderVariants"])({
            variant: 'emphasis'
        })),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('px-6 py-4 bg-[#171b1d]', (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$borderVariants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["borderVariants"])({
                    variant: 'divider'
                }), 'border-b'),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-lg font-bold tracking-widest text-foreground",
                    children: "DISPATCH QUEUE"
                }, void 0, false, {
                    fileName: "[project]/app-analysis (4)/components/DispatchQueueView.tsx",
                    lineNumber: 116,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app-analysis (4)/components/DispatchQueueView.tsx",
                lineNumber: 115,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex-1 flex flex-col overflow-hidden m-1 rounded bg-[#d3cdc1]'),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-0",
                        children: tabs.map((tab, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    playClickSound();
                                    setActiveTab(tab.id);
                                },
                                className: `flex-1 px-3 py-3 text-xs font-bold tracking-widest uppercase transition-all ${activeTab === tab.id ? 'bg-[#171b1d] text-[#d3cdc1] border-b-4 border-b-[#4CAF50] shadow-md' : 'bg-[#d3cdc1] text-[#000000] border-b-2 border-b-[#a89a8a] hover:bg-[#cbc0b5]'}`,
                                children: [
                                    tab.label,
                                    " (",
                                    tab.count,
                                    ")"
                                ]
                            }, tab.id, true, {
                                fileName: "[project]/app-analysis (4)/components/DispatchQueueView.tsx",
                                lineNumber: 124,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app-analysis (4)/components/DispatchQueueView.tsx",
                        lineNumber: 122,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-y-auto px-6 pt-4 pb-6",
                        children: getFilteredQueue().length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center text-[#5a5a5a] text-sm py-8",
                            children: "No tasks in queue"
                        }, void 0, false, {
                            fileName: "[project]/app-analysis (4)/components/DispatchQueueView.tsx",
                            lineNumber: 144,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-12 gap-2 px-3 py-2 bg-[#c1b5a8] rounded-t sticky top-0 text-sm font-bold text-[#5a5a5a] uppercase tracking-wider border-b-2 border-[#a89a8a]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "col-span-2",
                                            children: "TYPE"
                                        }, void 0, false, {
                                            fileName: "[project]/app-analysis (4)/components/DispatchQueueView.tsx",
                                            lineNumber: 151,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "col-span-4",
                                            children: "TASK"
                                        }, void 0, false, {
                                            fileName: "[project]/app-analysis (4)/components/DispatchQueueView.tsx",
                                            lineNumber: 152,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "col-span-2",
                                            children: "FROM"
                                        }, void 0, false, {
                                            fileName: "[project]/app-analysis (4)/components/DispatchQueueView.tsx",
                                            lineNumber: 153,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "col-span-2",
                                            children: "TIME"
                                        }, void 0, false, {
                                            fileName: "[project]/app-analysis (4)/components/DispatchQueueView.tsx",
                                            lineNumber: 154,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "col-span-2",
                                            children: "PRIORITY"
                                        }, void 0, false, {
                                            fileName: "[project]/app-analysis (4)/components/DispatchQueueView.tsx",
                                            lineNumber: 155,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app-analysis (4)/components/DispatchQueueView.tsx",
                                    lineNumber: 150,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "divide-y divide-[#a89a8a]",
                                    children: getFilteredQueue().map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                playClickSound();
                                                onSelectQueue(item.id);
                                            },
                                            className: `w-full grid grid-cols-12 gap-2 px-3 py-3 text-left text-base font-semibold transition-colors hover:bg-[#c1b5a8] rounded ${selectedQueueId === item.id ? 'bg-[#a8d5a8] bg-opacity-40 border-l-4 border-l-[#7fb87f]' : ''}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "col-span-2 flex items-center gap-2 text-[#000000] font-bold",
                                                    children: getTaskTypeIcon(item.type)
                                                }, void 0, false, {
                                                    fileName: "[project]/app-analysis (4)/components/DispatchQueueView.tsx",
                                                    lineNumber: 171,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "col-span-4 text-[#000000] font-bold truncate",
                                                    children: getTaskDescription(item)
                                                }, void 0, false, {
                                                    fileName: "[project]/app-analysis (4)/components/DispatchQueueView.tsx",
                                                    lineNumber: 174,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "col-span-2 text-[#5a5a5a] text-sm font-semibold truncate",
                                                    children: getTaskSource(item)
                                                }, void 0, false, {
                                                    fileName: "[project]/app-analysis (4)/components/DispatchQueueView.tsx",
                                                    lineNumber: 177,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "col-span-2 text-[#5a5a5a] text-sm font-semibold",
                                                    children: getTaskTime(item)
                                                }, void 0, false, {
                                                    fileName: "[project]/app-analysis (4)/components/DispatchQueueView.tsx",
                                                    lineNumber: 180,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "col-span-2 flex justify-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `px-4 py-2 rounded text-sm font-bold ${getPriorityColor(getPriority(item))}`,
                                                        children: getPriority(item)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app-analysis (4)/components/DispatchQueueView.tsx",
                                                        lineNumber: 184,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app-analysis (4)/components/DispatchQueueView.tsx",
                                                    lineNumber: 183,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, item.id, true, {
                                            fileName: "[project]/app-analysis (4)/components/DispatchQueueView.tsx",
                                            lineNumber: 161,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app-analysis (4)/components/DispatchQueueView.tsx",
                                    lineNumber: 159,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app-analysis (4)/components/DispatchQueueView.tsx",
                            lineNumber: 148,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app-analysis (4)/components/DispatchQueueView.tsx",
                        lineNumber: 142,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app-analysis (4)/components/DispatchQueueView.tsx",
                lineNumber: 120,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app-analysis (4)/components/DispatchQueueView.tsx",
        lineNumber: 113,
        columnNumber: 5
    }, this);
}
}),
"[project]/app-analysis (4)/components/TaskDetailsPanel.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TaskDetailsPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-analysis (4)/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/app-analysis (4)/node_modules/lucide-react/dist/esm/icons/mail.mjs [app-ssr] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/app-analysis (4)/node_modules/lucide-react/dist/esm/icons/lock.mjs [app-ssr] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/app-analysis (4)/node_modules/lucide-react/dist/esm/icons/shield.mjs [app-ssr] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__ = __turbopack_context__.i("[project]/app-analysis (4)/node_modules/lucide-react/dist/esm/icons/database.mjs [app-ssr] (ecmascript) <export default as Database>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/app-analysis (4)/node_modules/lucide-react/dist/esm/icons/file-text.mjs [app-ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$mockEmails$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-analysis (4)/lib/mockEmails.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$mockPasswords$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-analysis (4)/lib/mockPasswords.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$mockDataClassification$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-analysis (4)/lib/mockDataClassification.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$borderVariants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-analysis (4)/lib/borderVariants.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-analysis (4)/lib/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
function TaskDetailsPanel({ selectedQueueItem }) {
    if (!selectedQueueItem) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('bg-[#171b1d] rounded h-full flex flex-col overflow-hidden', (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$borderVariants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["borderVariants"])({
                variant: 'emphasis'
            })),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('px-6 py-4 bg-[#171b1d]', (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$borderVariants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["borderVariants"])({
                        variant: 'divider'
                    }), 'border-b'),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-lg font-bold tracking-widest text-foreground",
                        children: "TASK DETAILS"
                    }, void 0, false, {
                        fileName: "[project]/app-analysis (4)/components/TaskDetailsPanel.tsx",
                        lineNumber: 21,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app-analysis (4)/components/TaskDetailsPanel.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex-1 flex items-center justify-center m-1 rounded bg-[#d3cdc1]'),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center text-[#5a5a5a]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm",
                            children: "Select a task from the queue to view details"
                        }, void 0, false, {
                            fileName: "[project]/app-analysis (4)/components/TaskDetailsPanel.tsx",
                            lineNumber: 26,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app-analysis (4)/components/TaskDetailsPanel.tsx",
                        lineNumber: 25,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app-analysis (4)/components/TaskDetailsPanel.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app-analysis (4)/components/TaskDetailsPanel.tsx",
            lineNumber: 18,
            columnNumber: 7
        }, this);
    }
    const getEmailDetails = ()=>{
        const email = __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$mockEmails$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockEmails"].find((e)=>e.id === selectedQueueItem.id);
        if (!email) return null;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-sm font-bold text-[#5a5a5a] uppercase tracking-wider mb-2",
                        children: "EMAIL DETAILS"
                    }, void 0, false, {
                        fileName: "[project]/app-analysis (4)/components/TaskDetailsPanel.tsx",
                        lineNumber: 40,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-sm text-[#5a5a5a] font-semibold",
                                        children: "From"
                                    }, void 0, false, {
                                        fileName: "[project]/app-analysis (4)/components/TaskDetailsPanel.tsx",
                                        lineNumber: 45,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-base text-[#000000] font-bold",
                                        children: email.from
                                    }, void 0, false, {
                                        fileName: "[project]/app-analysis (4)/components/TaskDetailsPanel.tsx",
                                        lineNumber: 46,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app-analysis (4)/components/TaskDetailsPanel.tsx",
                                lineNumber: 44,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-sm text-[#5a5a5a] font-semibold",
                                        children: "Subject"
                                    }, void 0, false, {
                                        fileName: "[project]/app-analysis (4)/components/TaskDetailsPanel.tsx",
                                        lineNumber: 49,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-base text-[#000000] font-semibold",
                                        children: email.subject
                                    }, void 0, false, {
                                        fileName: "[project]/app-analysis (4)/components/TaskDetailsPanel.tsx",
                                        lineNumber: 50,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app-analysis (4)/components/TaskDetailsPanel.tsx",
                                lineNumber: 48,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-sm text-[#5a5a5a] font-semibold",
                                        children: "Time"
                                    }, void 0, false, {
                                        fileName: "[project]/app-analysis (4)/components/TaskDetailsPanel.tsx",
                                        lineNumber: 53,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-base text-[#000000] font-semibold",
                                        children: email.timestamp
                                    }, void 0, false, {
                                        fileName: "[project]/app-analysis (4)/components/TaskDetailsPanel.tsx",
                                        lineNumber: 54,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app-analysis (4)/components/TaskDetailsPanel.tsx",
                                lineNumber: 52,
                                columnNumber: 13
                            }, this),
                            email.attachments && email.attachments.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-xs text-muted-foreground",
                                        children: "Attachments"
                                    }, void 0, false, {
                                        fileName: "[project]/app-analysis (4)/components/TaskDetailsPanel.tsx",
                                        lineNumber: 58,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-1 mt-1",
                                        children: email.attachments.map((att, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 p-2 bg-secondary rounded text-xs",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                        size: 14
                                                    }, void 0, false, {
                                                        fileName: "[project]/app-analysis (4)/components/TaskDetailsPanel.tsx",
                                                        lineNumber: 62,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            att.name,
                                                            " (",
                                                            att.size,
                                                            "KB)"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app-analysis (4)/components/TaskDetailsPanel.tsx",
                                                        lineNumber: 63,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, idx, true, {
                                                fileName: "[project]/app-analysis (4)/components/TaskDetailsPanel.tsx",
                                                lineNumber: 61,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app-analysis (4)/components/TaskDetailsPanel.tsx",
                                        lineNumber: 59,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app-analysis (4)/components/TaskDetailsPanel.tsx",
                                lineNumber: 57,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app-analysis (4)/components/TaskDetailsPanel.tsx",
                        lineNumber: 43,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app-analysis (4)/components/TaskDetailsPanel.tsx",
                lineNumber: 39,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app-analysis (4)/components/TaskDetailsPanel.tsx",
            lineNumber: 38,
            columnNumber: 7
        }, this);
    };
    const getPasswordDetails = ()=>{
        const password = __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$mockPasswords$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockPasswords"].find((p)=>p.id === selectedQueueItem.id);
        if (!password) return null;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-sm font-bold text-[#5a5a5a] uppercase tracking-wider mb-2",
                        children: "PASSWORD DETAILS"
                    }, void 0, false, {
                        fileName: "[project]/app-analysis (4)/components/TaskDetailsPanel.tsx",
                        lineNumber: 82,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-sm text-[#5a5a5a] font-semibold",
                                        children: "Submitted by"
                                    }, void 0, false, {
                                        fileName: "[project]/app-analysis (4)/components/TaskDetailsPanel.tsx",
                                        lineNumber: 87,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-base text-[#000000] font-bold",
                                        children: password.submittedBy
                                    }, void 0, false, {
                                        fileName: "[project]/app-analysis (4)/components/TaskDetailsPanel.tsx",
                                        lineNumber: 88,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app-analysis (4)/components/TaskDetailsPanel.tsx",
                                lineNumber: 86,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-sm text-[#5a5a5a] font-semibold",
                                        children: "Purpose"
                                    }, void 0, false, {
                                        fileName: "[project]/app-analysis (4)/components/TaskDetailsPanel.tsx",
                                        lineNumber: 91,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-base text-[#000000] font-semibold",
                                        children: password.purpose
                                    }, void 0, false, {
                                        fileName: "[project]/app-analysis (4)/components/TaskDetailsPanel.tsx",
                                        lineNumber: 92,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app-analysis (4)/components/TaskDetailsPanel.tsx",
                                lineNumber: 90,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-sm text-[#5a5a5a] font-semibold",
                                        children: "Characteristics"
                                    }, void 0, false, {
                                        fileName: "[project]/app-analysis (4)/components/TaskDetailsPanel.tsx",
                                        lineNumber: 95,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-1 mt-1",
                                        children: password.characteristics.map((char, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "bg-[#c1b5a8] text-xs px-2 py-1 rounded text-[#000000]",
                                                children: char
                                            }, idx, false, {
                                                fileName: "[project]/app-analysis (4)/components/TaskDetailsPanel.tsx",
                                                lineNumber: 98,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app-analysis (4)/components/TaskDetailsPanel.tsx",
                                        lineNumber: 96,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app-analysis (4)/components/TaskDetailsPanel.tsx",
                                lineNumber: 94,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app-analysis (4)/components/TaskDetailsPanel.tsx",
                        lineNumber: 85,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app-analysis (4)/components/TaskDetailsPanel.tsx",
                lineNumber: 81,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app-analysis (4)/components/TaskDetailsPanel.tsx",
            lineNumber: 80,
            columnNumber: 7
        }, this);
    };
    const getDataClassificationDetails = ()=>{
        const doc = __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$mockDataClassification$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockDataClassifications"].find((d)=>d.id === selectedQueueItem.id);
        if (!doc) return null;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-sm font-bold text-[#5a5a5a] uppercase tracking-wider mb-2",
                        children: "DATA CLASSIFICATION"
                    }, void 0, false, {
                        fileName: "[project]/app-analysis (4)/components/TaskDetailsPanel.tsx",
                        lineNumber: 117,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-sm text-[#5a5a5a] font-semibold",
                                        children: "Document"
                                    }, void 0, false, {
                                        fileName: "[project]/app-analysis (4)/components/TaskDetailsPanel.tsx",
                                        lineNumber: 122,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-base text-[#000000] font-bold",
                                        children: doc.name
                                    }, void 0, false, {
                                        fileName: "[project]/app-analysis (4)/components/TaskDetailsPanel.tsx",
                                        lineNumber: 123,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app-analysis (4)/components/TaskDetailsPanel.tsx",
                                lineNumber: 121,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-sm text-[#5a5a5a] font-semibold",
                                        children: "From"
                                    }, void 0, false, {
                                        fileName: "[project]/app-analysis (4)/components/TaskDetailsPanel.tsx",
                                        lineNumber: 126,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-base text-[#000000] font-semibold",
                                        children: doc.from
                                    }, void 0, false, {
                                        fileName: "[project]/app-analysis (4)/components/TaskDetailsPanel.tsx",
                                        lineNumber: 127,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app-analysis (4)/components/TaskDetailsPanel.tsx",
                                lineNumber: 125,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-sm text-[#5a5a5a] font-semibold",
                                        children: "Time"
                                    }, void 0, false, {
                                        fileName: "[project]/app-analysis (4)/components/TaskDetailsPanel.tsx",
                                        lineNumber: 130,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-base text-[#000000] font-semibold",
                                        children: doc.timestamp
                                    }, void 0, false, {
                                        fileName: "[project]/app-analysis (4)/components/TaskDetailsPanel.tsx",
                                        lineNumber: 131,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app-analysis (4)/components/TaskDetailsPanel.tsx",
                                lineNumber: 129,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-sm text-[#5a5a5a] font-semibold",
                                        children: "Current Classification"
                                    }, void 0, false, {
                                        fileName: "[project]/app-analysis (4)/components/TaskDetailsPanel.tsx",
                                        lineNumber: 134,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-base text-[#000000] font-bold",
                                        children: doc.currentClassification
                                    }, void 0, false, {
                                        fileName: "[project]/app-analysis (4)/components/TaskDetailsPanel.tsx",
                                        lineNumber: 135,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app-analysis (4)/components/TaskDetailsPanel.tsx",
                                lineNumber: 133,
                                columnNumber: 13
                            }, this),
                            doc.sharingInfo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-sm text-[#5a5a5a] font-semibold",
                                        children: "Sharing With"
                                    }, void 0, false, {
                                        fileName: "[project]/app-analysis (4)/components/TaskDetailsPanel.tsx",
                                        lineNumber: 139,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-[#000000]",
                                        children: doc.sharingInfo
                                    }, void 0, false, {
                                        fileName: "[project]/app-analysis (4)/components/TaskDetailsPanel.tsx",
                                        lineNumber: 140,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app-analysis (4)/components/TaskDetailsPanel.tsx",
                                lineNumber: 138,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app-analysis (4)/components/TaskDetailsPanel.tsx",
                        lineNumber: 120,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app-analysis (4)/components/TaskDetailsPanel.tsx",
                lineNumber: 116,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app-analysis (4)/components/TaskDetailsPanel.tsx",
            lineNumber: 115,
            columnNumber: 7
        }, this);
    };
    const getTaskTypeIcon = ()=>{
        switch(selectedQueueItem.type){
            case 'email':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                    size: 20,
                    className: "text-accent"
                }, void 0, false, {
                    fileName: "[project]/app-analysis (4)/components/TaskDetailsPanel.tsx",
                    lineNumber: 152,
                    columnNumber: 16
                }, this);
            case 'password':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                    size: 20,
                    className: "text-accent"
                }, void 0, false, {
                    fileName: "[project]/app-analysis (4)/components/TaskDetailsPanel.tsx",
                    lineNumber: 154,
                    columnNumber: 16
                }, this);
            case 'password-strength':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                    size: 20,
                    className: "text-accent"
                }, void 0, false, {
                    fileName: "[project]/app-analysis (4)/components/TaskDetailsPanel.tsx",
                    lineNumber: 156,
                    columnNumber: 16
                }, this);
            case 'data-classification':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__["Database"], {
                    size: 20,
                    className: "text-accent"
                }, void 0, false, {
                    fileName: "[project]/app-analysis (4)/components/TaskDetailsPanel.tsx",
                    lineNumber: 158,
                    columnNumber: 16
                }, this);
            default:
                return null;
        }
    };
    const getTaskTypeLabel = ()=>{
        switch(selectedQueueItem.type){
            case 'email':
                return 'Email Investigation';
            case 'password':
                return 'Password Review';
            case 'password-strength':
                return 'Password Strength';
            case 'data-classification':
                return 'Data Classification';
            default:
                return 'Unknown Task';
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('bg-[#171b1d] rounded h-full flex flex-col overflow-hidden', (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$borderVariants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["borderVariants"])({
            variant: 'emphasis'
        })),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('px-6 py-4 bg-[#171b1d]', (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$borderVariants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["borderVariants"])({
                    variant: 'divider'
                }), 'border-b'),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-lg font-bold tracking-widest text-foreground",
                    children: "TASK DETAILS"
                }, void 0, false, {
                    fileName: "[project]/app-analysis (4)/components/TaskDetailsPanel.tsx",
                    lineNumber: 183,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app-analysis (4)/components/TaskDetailsPanel.tsx",
                lineNumber: 182,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex-1 flex flex-col m-1 rounded bg-[#d3cdc1] p-6 overflow-hidden'),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex items-center gap-3 mb-4 pb-4', (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$borderVariants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["borderVariants"])({
                            variant: 'divider'
                        }), 'border-b border-[#a89a8a]'),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('w-10 h-10 bg-[#c1b5a8] rounded flex items-center justify-center flex-shrink-0 border border-[#a89a8a]'),
                                children: getTaskTypeIcon()
                            }, void 0, false, {
                                fileName: "[project]/app-analysis (4)/components/TaskDetailsPanel.tsx",
                                lineNumber: 190,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-sm font-bold text-[#000000] uppercase tracking-wide",
                                    children: getTaskTypeLabel()
                                }, void 0, false, {
                                    fileName: "[project]/app-analysis (4)/components/TaskDetailsPanel.tsx",
                                    lineNumber: 194,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app-analysis (4)/components/TaskDetailsPanel.tsx",
                                lineNumber: 193,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app-analysis (4)/components/TaskDetailsPanel.tsx",
                        lineNumber: 189,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-y-auto",
                        children: [
                            selectedQueueItem.type === 'email' && getEmailDetails(),
                            selectedQueueItem.type === 'password' && getPasswordDetails(),
                            selectedQueueItem.type === 'data-classification' && getDataClassificationDetails()
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app-analysis (4)/components/TaskDetailsPanel.tsx",
                        lineNumber: 201,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('pt-4 mt-4', (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$borderVariants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["borderVariants"])({
                            variant: 'divider'
                        }), 'border-t border-[#a89a8a]'),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "w-full bg-[#7a7a7a] hover:bg-[#6a6a6a] text-white py-2 rounded font-medium text-sm transition-colors uppercase tracking-wider",
                            children: "Review Task"
                        }, void 0, false, {
                            fileName: "[project]/app-analysis (4)/components/TaskDetailsPanel.tsx",
                            lineNumber: 209,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app-analysis (4)/components/TaskDetailsPanel.tsx",
                        lineNumber: 208,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app-analysis (4)/components/TaskDetailsPanel.tsx",
                lineNumber: 187,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app-analysis (4)/components/TaskDetailsPanel.tsx",
        lineNumber: 180,
        columnNumber: 5
    }, this);
}
}),
"[project]/app-analysis (4)/components/EmailViewer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EmailViewer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-analysis (4)/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-analysis (4)/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/app-analysis (4)/node_modules/lucide-react/dist/esm/icons/chevron-left.mjs [app-ssr] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/app-analysis (4)/node_modules/lucide-react/dist/esm/icons/chevron-right.mjs [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2d$vertical$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreVertical$3e$__ = __turbopack_context__.i("[project]/app-analysis (4)/node_modules/lucide-react/dist/esm/icons/ellipsis-vertical.mjs [app-ssr] (ecmascript) <export default as MoreVertical>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/app-analysis (4)/node_modules/lucide-react/dist/esm/icons/file-text.mjs [app-ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$borderVariants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-analysis (4)/lib/borderVariants.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-analysis (4)/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$useClickSound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-analysis (4)/lib/useClickSound.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
function EmailViewer({ email, onInvestigate, investigatedCategories, isEmbedded = false }) {
    const playClickSound = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$useClickSound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useClickSound"])();
    const [showInvestigationPanel, setShowInvestigationPanel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    // Generate avatar color based on sender name
    const getAvatarColor = (name)=>{
        const colors = [
            '#FF6B6B',
            '#4ECDC4',
            '#45B7D1',
            '#FFA07A',
            '#98D8C8',
            '#F7DC6F'
        ];
        const hash = name.split('').reduce((acc, char)=>acc + char.charCodeAt(0), 0);
        return colors[hash % colors.length];
    };
    // Get initials from sender name
    const getInitials = (name)=>{
        return name.split(' ').map((n)=>n[0]).join('').toUpperCase().slice(0, 2);
    };
    const investigationButtons = [
        {
            id: 'profile',
            label: 'PROFILE',
            icon: '👤'
        },
        {
            id: 'link',
            label: 'LINK',
            icon: '🔗'
        },
        {
            id: 'file',
            label: 'FILE',
            icon: '📄'
        },
        {
            id: 'language',
            label: 'LANGUAGE',
            icon: '💬'
        },
        {
            id: 'context',
            label: 'CONTEXT',
            icon: '🔍'
        },
        {
            id: 'request',
            label: 'REQUEST',
            icon: '⚠️'
        }
    ];
    const handleInvestigate = (categoryId)=>{
        onInvestigate(categoryId);
    };
    const senderInitials = getInitials(email.from);
    const avatarColor = getAvatarColor(email.from);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex-1 flex flex-col overflow-hidden', isEmbedded ? 'bg-[#d3cdc1] text-[#000000]' : (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('bg-card rounded', (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$borderVariants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["borderVariants"])({
            variant: 'emphasis'
        }))),
        children: [
            !isEmbedded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-b border-border px-4 py-3 flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xs font-bold tracking-widest text-muted-foreground uppercase mb-1",
                                    children: "EMAIL INVESTIGATION"
                                }, void 0, false, {
                                    fileName: "[project]/app-analysis (4)/components/EmailViewer.tsx",
                                    lineNumber: 66,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app-analysis (4)/components/EmailViewer.tsx",
                                lineNumber: 65,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: playClickSound,
                                        className: "p-2 hover:bg-secondary rounded transition-colors",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                            size: 18,
                                            className: "text-muted-foreground"
                                        }, void 0, false, {
                                            fileName: "[project]/app-analysis (4)/components/EmailViewer.tsx",
                                            lineNumber: 74,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app-analysis (4)/components/EmailViewer.tsx",
                                        lineNumber: 71,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: playClickSound,
                                        className: "p-2 hover:bg-secondary rounded transition-colors",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                            size: 18,
                                            className: "text-muted-foreground"
                                        }, void 0, false, {
                                            fileName: "[project]/app-analysis (4)/components/EmailViewer.tsx",
                                            lineNumber: 79,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app-analysis (4)/components/EmailViewer.tsx",
                                        lineNumber: 76,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: playClickSound,
                                        className: "p-2 hover:bg-secondary rounded transition-colors",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2d$vertical$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreVertical$3e$__["MoreVertical"], {
                                            size: 18,
                                            className: "text-muted-foreground"
                                        }, void 0, false, {
                                            fileName: "[project]/app-analysis (4)/components/EmailViewer.tsx",
                                            lineNumber: 84,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app-analysis (4)/components/EmailViewer.tsx",
                                        lineNumber: 81,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app-analysis (4)/components/EmailViewer.tsx",
                                lineNumber: 70,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app-analysis (4)/components/EmailViewer.tsx",
                        lineNumber: 64,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-b border-border bg-secondary px-4 flex gap-4 text-xs font-medium text-muted-foreground",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "py-3 border-b-2 border-accent text-accent",
                                children: "INBOX (5)"
                            }, void 0, false, {
                                fileName: "[project]/app-analysis (4)/components/EmailViewer.tsx",
                                lineNumber: 91,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "py-3 border-b-2 border-transparent hover:text-foreground",
                                children: "SENT"
                            }, void 0, false, {
                                fileName: "[project]/app-analysis (4)/components/EmailViewer.tsx",
                                lineNumber: 94,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app-analysis (4)/components/EmailViewer.tsx",
                        lineNumber: 90,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: isEmbedded ? 'bg-[#d3cdc1]' : 'bg-background',
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `border-b px-6 py-4 ${isEmbedded ? 'border-[#c5b8a8] bg-[#d3cdc1]' : 'border-border bg-card'}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: `text-xl font-bold ${isEmbedded ? 'text-[#000000]' : 'text-foreground'}`,
                                children: email.subject
                            }, void 0, false, {
                                fileName: "[project]/app-analysis (4)/components/EmailViewer.tsx",
                                lineNumber: 106,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app-analysis (4)/components/EmailViewer.tsx",
                            lineNumber: 105,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `border-b px-6 py-5 flex items-start justify-between ${isEmbedded ? 'border-[#c5b8a8] bg-[#d3cdc1]' : 'border-border bg-card'}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0",
                                            style: {
                                                backgroundColor: avatarColor
                                            },
                                            children: senderInitials
                                        }, void 0, false, {
                                            fileName: "[project]/app-analysis (4)/components/EmailViewer.tsx",
                                            lineNumber: 113,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 min-w-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: `font-bold text-sm ${isEmbedded ? 'text-[#000000]' : 'text-foreground'}`,
                                                    children: email.from
                                                }, void 0, false, {
                                                    fileName: "[project]/app-analysis (4)/components/EmailViewer.tsx",
                                                    lineNumber: 122,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: `text-xs ${isEmbedded ? 'text-[#000000] opacity-70' : 'text-muted-foreground'}`,
                                                    children: email.senderDomain
                                                }, void 0, false, {
                                                    fileName: "[project]/app-analysis (4)/components/EmailViewer.tsx",
                                                    lineNumber: 123,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: `text-xs ${isEmbedded ? 'text-[#000000] opacity-70' : 'text-muted-foreground'}`,
                                                    children: [
                                                        "to: ",
                                                        email.to
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app-analysis (4)/components/EmailViewer.tsx",
                                                    lineNumber: 124,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app-analysis (4)/components/EmailViewer.tsx",
                                            lineNumber: 121,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app-analysis (4)/components/EmailViewer.tsx",
                                    lineNumber: 111,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `text-xs font-mono flex-shrink-0 ml-4 ${isEmbedded ? 'text-[#000000] opacity-70' : 'text-muted-foreground'}`,
                                    children: email.timestamp
                                }, void 0, false, {
                                    fileName: "[project]/app-analysis (4)/components/EmailViewer.tsx",
                                    lineNumber: 129,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app-analysis (4)/components/EmailViewer.tsx",
                            lineNumber: 110,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `px-6 py-6 text-sm leading-relaxed whitespace-pre-wrap ${isEmbedded ? 'text-[#000000]' : 'text-foreground'}`,
                            children: email.body
                        }, void 0, false, {
                            fileName: "[project]/app-analysis (4)/components/EmailViewer.tsx",
                            lineNumber: 135,
                            columnNumber: 11
                        }, this),
                        email.attachments.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `border-t px-6 py-6 ${isEmbedded ? 'border-[#c5b8a8]' : 'border-border'}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: email.attachments.map((attachment, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `flex items-center gap-3 p-3 rounded cursor-pointer transition-colors ${isEmbedded ? 'border border-[#c5b8a8] bg-[#d3cdc1] hover:bg-[#cbc0b5] text-[#000000]' : 'border border-border bg-secondary hover:bg-opacity-75 text-foreground'}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                size: 20,
                                                className: isEmbedded ? 'text-[#000000] opacity-70 flex-shrink-0' : 'text-muted-foreground flex-shrink-0'
                                            }, void 0, false, {
                                                fileName: "[project]/app-analysis (4)/components/EmailViewer.tsx",
                                                lineNumber: 152,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 min-w-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: `text-sm font-medium ${isEmbedded ? 'text-[#000000]' : 'text-foreground'}`,
                                                        children: attachment.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/app-analysis (4)/components/EmailViewer.tsx",
                                                        lineNumber: 154,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: `text-xs ${isEmbedded ? 'text-[#000000] opacity-70' : 'text-muted-foreground'}`,
                                                        children: [
                                                            attachment.size,
                                                            " KB"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app-analysis (4)/components/EmailViewer.tsx",
                                                        lineNumber: 155,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app-analysis (4)/components/EmailViewer.tsx",
                                                lineNumber: 153,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, idx, true, {
                                        fileName: "[project]/app-analysis (4)/components/EmailViewer.tsx",
                                        lineNumber: 144,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app-analysis (4)/components/EmailViewer.tsx",
                                lineNumber: 142,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app-analysis (4)/components/EmailViewer.tsx",
                            lineNumber: 141,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app-analysis (4)/components/EmailViewer.tsx",
                    lineNumber: 103,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app-analysis (4)/components/EmailViewer.tsx",
                lineNumber: 102,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app-analysis (4)/components/EmailViewer.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, this);
}
}),
"[project]/app-analysis (4)/components/EmailInvestigation.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EmailInvestigation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-analysis (4)/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/app-analysis (4)/node_modules/lucide-react/dist/esm/icons/mail.mjs [app-ssr] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$components$2f$EmailViewer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-analysis (4)/components/EmailViewer.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
function EmailInvestigation({ emails, selectedEmailId, currentEmail, onSelectEmail, onInvestigate, investigatedCategories }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex-1 h-full bg-[#171b1d] border border-[#3a3f42] rounded flex flex-col overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sticky top-0 bg-[#171b1d] border-b border-[#3a3f42] px-4 py-5 z-10 flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                        size: 24,
                        className: "text-muted-foreground flex-shrink-0"
                    }, void 0, false, {
                        fileName: "[project]/app-analysis (4)/components/EmailInvestigation.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-sm font-bold tracking-widest text-muted-foreground uppercase",
                        children: "EMAIL INVESTIGATION"
                    }, void 0, false, {
                        fileName: "[project]/app-analysis (4)/components/EmailInvestigation.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app-analysis (4)/components/EmailInvestigation.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex overflow-hidden bg-[#d3cdc1] m-1 rounded",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-80 flex flex-col overflow-hidden bg-[#d3cdc1] border-r border-[#c5b8a8] p-2 gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-[#d3cdc1] rounded border border-[#c5b8a8] px-2 py-1 text-xs font-medium text-[#000000]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "uppercase",
                                    children: [
                                        "Inbox (",
                                        emails.length,
                                        ")"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app-analysis (4)/components/EmailInvestigation.tsx",
                                    lineNumber: 40,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app-analysis (4)/components/EmailInvestigation.tsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 overflow-y-auto space-y-2",
                                children: emails.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-center h-full",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[#666666] text-sm text-center",
                                        children: "No email tasks available"
                                    }, void 0, false, {
                                        fileName: "[project]/app-analysis (4)/components/EmailInvestigation.tsx",
                                        lineNumber: 45,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app-analysis (4)/components/EmailInvestigation.tsx",
                                    lineNumber: 44,
                                    columnNumber: 15
                                }, this) : emails.map((email)=>{
                                    const isSelected = selectedEmailId === email.id;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>onSelectEmail(email.id),
                                        className: `w-full text-left px-3 py-3 rounded border transition-colors ${isSelected ? 'bg-success text-[#000000] border-success' : 'bg-[#d3cdc1] text-[#000000] border-[#c5b8a8] hover:bg-[#cbc0b5] hover:text-[#000000]'}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start justify-between gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1 min-w-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm font-medium truncate",
                                                            children: email.from
                                                        }, void 0, false, {
                                                            fileName: "[project]/app-analysis (4)/components/EmailInvestigation.tsx",
                                                            lineNumber: 64,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs opacity-70 truncate",
                                                            children: email.subject
                                                        }, void 0, false, {
                                                            fileName: "[project]/app-analysis (4)/components/EmailInvestigation.tsx",
                                                            lineNumber: 67,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app-analysis (4)/components/EmailInvestigation.tsx",
                                                    lineNumber: 63,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs opacity-70 flex-shrink-0",
                                                    children: email.timestamp
                                                }, void 0, false, {
                                                    fileName: "[project]/app-analysis (4)/components/EmailInvestigation.tsx",
                                                    lineNumber: 73,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app-analysis (4)/components/EmailInvestigation.tsx",
                                            lineNumber: 61,
                                            columnNumber: 21
                                        }, this)
                                    }, email.id, false, {
                                        fileName: "[project]/app-analysis (4)/components/EmailInvestigation.tsx",
                                        lineNumber: 52,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/app-analysis (4)/components/EmailInvestigation.tsx",
                                lineNumber: 42,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app-analysis (4)/components/EmailInvestigation.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this),
                    currentEmail ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$components$2f$EmailViewer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        email: currentEmail,
                        onInvestigate: onInvestigate,
                        investigatedCategories: investigatedCategories,
                        isEmbedded: true
                    }, void 0, false, {
                        fileName: "[project]/app-analysis (4)/components/EmailInvestigation.tsx",
                        lineNumber: 86,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 bg-[#d3cdc1] flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[#666666] text-center",
                            children: emails.length === 0 ? 'No email tasks available' : 'Select an email to view'
                        }, void 0, false, {
                            fileName: "[project]/app-analysis (4)/components/EmailInvestigation.tsx",
                            lineNumber: 94,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app-analysis (4)/components/EmailInvestigation.tsx",
                        lineNumber: 93,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app-analysis (4)/components/EmailInvestigation.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app-analysis (4)/components/EmailInvestigation.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
}),
"[project]/app-analysis (4)/components/InvestigationPanel.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>InvestigationPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-analysis (4)/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/app-analysis (4)/node_modules/lucide-react/dist/esm/icons/triangle-alert.mjs [app-ssr] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/app-analysis (4)/node_modules/lucide-react/dist/esm/icons/user.mjs [app-ssr] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2d$2$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Link2$3e$__ = __turbopack_context__.i("[project]/app-analysis (4)/node_modules/lucide-react/dist/esm/icons/link-2.mjs [app-ssr] (ecmascript) <export default as Link2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/app-analysis (4)/node_modules/lucide-react/dist/esm/icons/file-text.mjs [app-ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/app-analysis (4)/node_modules/lucide-react/dist/esm/icons/message-circle.mjs [app-ssr] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__ = __turbopack_context__.i("[project]/app-analysis (4)/node_modules/lucide-react/dist/esm/icons/share-2.mjs [app-ssr] (ecmascript) <export default as Share2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$borderVariants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-analysis (4)/lib/borderVariants.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-analysis (4)/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$useClickSound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-analysis (4)/lib/useClickSound.ts [app-ssr] (ecmascript)");
;
;
;
;
;
function InvestigationPanel({ investigationList, onMakeDecision, onCheckboxChange, onVerify }) {
    const playClickSound = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$useClickSound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useClickSound"])();
    const checkedCount = investigationList.filter((item)=>item.checked).length;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('w-80 h-full bg-[#171b1d] rounded flex flex-col overflow-hidden', (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$borderVariants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["borderVariants"])({
            variant: 'emphasis'
        })),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('sticky top-0 bg-[#171b1d] px-4 py-5 flex items-center justify-between z-10', (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$borderVariants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["borderVariants"])({
                    variant: 'divider'
                }), 'border-b'),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                size: 20,
                                className: "text-destructive flex-shrink-0"
                            }, void 0, false, {
                                fileName: "[project]/app-analysis (4)/components/InvestigationPanel.tsx",
                                lineNumber: 28,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-sm font-bold tracking-widest text-muted-foreground uppercase",
                                children: "INVESTIGATION LIST"
                            }, void 0, false, {
                                fileName: "[project]/app-analysis (4)/components/InvestigationPanel.tsx",
                                lineNumber: 29,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app-analysis (4)/components/InvestigationPanel.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-muted-foreground font-bold",
                        children: [
                            checkedCount,
                            "/",
                            investigationList.length
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app-analysis (4)/components/InvestigationPanel.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app-analysis (4)/components/InvestigationPanel.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex flex-col overflow-hidden bg-[#d3cdc1] m-1 rounded",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-y-auto",
                        children: investigationList.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center h-full",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[#666666] text-center",
                                children: "No email tasks available"
                            }, void 0, false, {
                                fileName: "[project]/app-analysis (4)/components/InvestigationPanel.tsx",
                                lineNumber: 44,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app-analysis (4)/components/InvestigationPanel.tsx",
                            lineNumber: 43,
                            columnNumber: 13
                        }, this) : investigationList.map((item, index)=>{
                            const iconMap = {
                                profile: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                    size: 40,
                                    className: "text-[#999] flex-shrink-0",
                                    strokeWidth: 1.5
                                }, void 0, false, {
                                    fileName: "[project]/app-analysis (4)/components/InvestigationPanel.tsx",
                                    lineNumber: 49,
                                    columnNumber: 24
                                }, this),
                                link: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2d$2$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Link2$3e$__["Link2"], {
                                    size: 40,
                                    className: "text-[#999] flex-shrink-0",
                                    strokeWidth: 1.5
                                }, void 0, false, {
                                    fileName: "[project]/app-analysis (4)/components/InvestigationPanel.tsx",
                                    lineNumber: 50,
                                    columnNumber: 21
                                }, this),
                                file: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                    size: 40,
                                    className: "text-[#999] flex-shrink-0",
                                    strokeWidth: 1.5
                                }, void 0, false, {
                                    fileName: "[project]/app-analysis (4)/components/InvestigationPanel.tsx",
                                    lineNumber: 51,
                                    columnNumber: 21
                                }, this),
                                language: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                    size: 40,
                                    className: "text-[#999] flex-shrink-0",
                                    strokeWidth: 1.5
                                }, void 0, false, {
                                    fileName: "[project]/app-analysis (4)/components/InvestigationPanel.tsx",
                                    lineNumber: 52,
                                    columnNumber: 25
                                }, this),
                                context: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__["Share2"], {
                                    size: 40,
                                    className: "text-[#999] flex-shrink-0",
                                    strokeWidth: 1.5
                                }, void 0, false, {
                                    fileName: "[project]/app-analysis (4)/components/InvestigationPanel.tsx",
                                    lineNumber: 53,
                                    columnNumber: 24
                                }, this),
                                request: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__["Share2"], {
                                    size: 40,
                                    className: "text-[#999] flex-shrink-0",
                                    strokeWidth: 1.5
                                }, void 0, false, {
                                    fileName: "[project]/app-analysis (4)/components/InvestigationPanel.tsx",
                                    lineNumber: 54,
                                    columnNumber: 24
                                }, this)
                            };
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('bg-[#d3cdc1] p-4 flex items-start justify-between gap-4', index !== investigationList.length - 1 ? 'border-b-2 border-[#c5b8a8]' : ''),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-4 flex-1 min-w-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-shrink-0",
                                                children: iconMap[item.id]
                                            }, void 0, false, {
                                                fileName: "[project]/app-analysis (4)/components/InvestigationPanel.tsx",
                                                lineNumber: 63,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 min-w-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-base font-bold text-[#000000] mb-1",
                                                        children: item.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/app-analysis (4)/components/InvestigationPanel.tsx",
                                                        lineNumber: 67,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-[#5a5a5a] mb-2",
                                                        children: item.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/app-analysis (4)/components/InvestigationPanel.tsx",
                                                        lineNumber: 68,
                                                        columnNumber: 21
                                                    }, this),
                                                    item.hasEvidence && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm font-semibold text-[#7a9d6d]",
                                                        children: "✓ Evidence collected"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app-analysis (4)/components/InvestigationPanel.tsx",
                                                        lineNumber: 70,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app-analysis (4)/components/InvestigationPanel.tsx",
                                                lineNumber: 66,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app-analysis (4)/components/InvestigationPanel.tsx",
                                        lineNumber: 62,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-shrink-0",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "checkbox",
                                            checked: item.checked,
                                            onChange: ()=>{
                                                playClickSound();
                                                onCheckboxChange?.(item.id);
                                            },
                                            className: "w-6 h-6 cursor-pointer border-2 border-[#a89a8a] rounded",
                                            style: {
                                                backgroundColor: '#c1b5a8',
                                                accentColor: '#c1b5a8'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/app-analysis (4)/components/InvestigationPanel.tsx",
                                            lineNumber: 75,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app-analysis (4)/components/InvestigationPanel.tsx",
                                        lineNumber: 74,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, item.id, true, {
                                fileName: "[project]/app-analysis (4)/components/InvestigationPanel.tsx",
                                lineNumber: 58,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/app-analysis (4)/components/InvestigationPanel.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    onVerify && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$borderVariants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["borderVariants"])({
                            variant: 'divider'
                        }), 'border-t px-3 py-3'),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                playClickSound();
                                onVerify();
                            },
                            className: "w-full py-2 px-3 rounded font-bold text-xs uppercase tracking-wide transition-colors bg-[#c1b5a8] text-[#000000] hover:bg-[#b5a89a]",
                            children: "Contact People"
                        }, void 0, false, {
                            fileName: "[project]/app-analysis (4)/components/InvestigationPanel.tsx",
                            lineNumber: 98,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app-analysis (4)/components/InvestigationPanel.tsx",
                        lineNumber: 97,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$borderVariants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["borderVariants"])({
                            variant: 'divider'
                        }), 'border-t px-3 py-3'),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs font-bold text-[#000000] uppercase mb-2",
                                children: "Evidence Collected"
                            }, void 0, false, {
                                fileName: "[project]/app-analysis (4)/components/InvestigationPanel.tsx",
                                lineNumber: 112,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-[#000000] mb-3",
                                children: "Review the clues you've found to build your case."
                            }, void 0, false, {
                                fileName: "[project]/app-analysis (4)/components/InvestigationPanel.tsx",
                                lineNumber: 115,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app-analysis (4)/components/InvestigationPanel.tsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$borderVariants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["borderVariants"])({
                            variant: 'divider'
                        }), 'border-t px-3 py-3'),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                playClickSound();
                                onMakeDecision();
                            },
                            className: "w-full py-3 rounded font-bold text-sm uppercase tracking-wide transition-colors bg-[#282c2f] text-white hover:bg-[#323539]",
                            children: "Make a Decision"
                        }, void 0, false, {
                            fileName: "[project]/app-analysis (4)/components/InvestigationPanel.tsx",
                            lineNumber: 122,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app-analysis (4)/components/InvestigationPanel.tsx",
                        lineNumber: 121,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app-analysis (4)/components/InvestigationPanel.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app-analysis (4)/components/InvestigationPanel.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
}),
"[project]/app-analysis (4)/components/DecisionModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DecisionModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-analysis (4)/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/app-analysis (4)/node_modules/lucide-react/dist/esm/icons/x.mjs [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$useClickSound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-analysis (4)/lib/useClickSound.ts [app-ssr] (ecmascript)");
;
;
;
function DecisionModal({ email, onDecide, onClose }) {
    const playClickSound = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$useClickSound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useClickSound"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-card border-2 border-accent rounded-lg shadow-2xl w-full max-w-md max-h-96 flex flex-col overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border-b border-accent px-6 py-4 flex items-center justify-between bg-secondary",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-lg font-bold text-foreground uppercase tracking-wide",
                            children: "Make Your Decision"
                        }, void 0, false, {
                            fileName: "[project]/app-analysis (4)/components/DecisionModal.tsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                playClickSound();
                                onClose();
                            },
                            className: "p-1 hover:bg-border rounded transition-colors",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 20,
                                className: "text-muted-foreground"
                            }, void 0, false, {
                                fileName: "[project]/app-analysis (4)/components/DecisionModal.tsx",
                                lineNumber: 32,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app-analysis (4)/components/DecisionModal.tsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app-analysis (4)/components/DecisionModal.tsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 overflow-y-auto px-6 py-4 space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-xs font-bold text-muted-foreground uppercase block mb-1",
                                    children: "From"
                                }, void 0, false, {
                                    fileName: "[project]/app-analysis (4)/components/DecisionModal.tsx",
                                    lineNumber: 39,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-foreground font-medium",
                                    children: email.from
                                }, void 0, false, {
                                    fileName: "[project]/app-analysis (4)/components/DecisionModal.tsx",
                                    lineNumber: 42,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-muted-foreground",
                                    children: email.senderDomain
                                }, void 0, false, {
                                    fileName: "[project]/app-analysis (4)/components/DecisionModal.tsx",
                                    lineNumber: 43,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app-analysis (4)/components/DecisionModal.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border-t border-border pt-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-xs font-bold text-muted-foreground uppercase block mb-1",
                                    children: "Subject"
                                }, void 0, false, {
                                    fileName: "[project]/app-analysis (4)/components/DecisionModal.tsx",
                                    lineNumber: 47,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-foreground",
                                    children: email.subject
                                }, void 0, false, {
                                    fileName: "[project]/app-analysis (4)/components/DecisionModal.tsx",
                                    lineNumber: 50,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app-analysis (4)/components/DecisionModal.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border-t border-border pt-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-xs font-bold text-muted-foreground uppercase block mb-2",
                                    children: "Your Determination"
                                }, void 0, false, {
                                    fileName: "[project]/app-analysis (4)/components/DecisionModal.tsx",
                                    lineNumber: 54,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-muted-foreground mb-3",
                                    children: "Based on your investigation, is this email legitimate or phishing?"
                                }, void 0, false, {
                                    fileName: "[project]/app-analysis (4)/components/DecisionModal.tsx",
                                    lineNumber: 57,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app-analysis (4)/components/DecisionModal.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app-analysis (4)/components/DecisionModal.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border-t border-border px-6 py-4 bg-secondary flex gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                playClickSound();
                                onDecide('phishing');
                            },
                            className: "flex-1 py-3 px-4 bg-destructive text-white font-bold text-sm rounded uppercase hover:opacity-90 transition-opacity",
                            children: "Phishing"
                        }, void 0, false, {
                            fileName: "[project]/app-analysis (4)/components/DecisionModal.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                playClickSound();
                                onDecide('legitimate');
                            },
                            className: "flex-1 py-3 px-4 bg-accent text-accent-foreground font-bold text-sm rounded uppercase hover:opacity-90 transition-opacity",
                            children: "Legitimate"
                        }, void 0, false, {
                            fileName: "[project]/app-analysis (4)/components/DecisionModal.tsx",
                            lineNumber: 74,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app-analysis (4)/components/DecisionModal.tsx",
                    lineNumber: 64,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app-analysis (4)/components/DecisionModal.tsx",
            lineNumber: 19,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app-analysis (4)/components/DecisionModal.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
}),
"[project]/app-analysis (4)/components/FeedbackModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FeedbackModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-analysis (4)/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/app-analysis (4)/node_modules/lucide-react/dist/esm/icons/circle-check-big.mjs [app-ssr] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/app-analysis (4)/node_modules/lucide-react/dist/esm/icons/circle-x.mjs [app-ssr] (ecmascript) <export default as XCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$useClickSound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-analysis (4)/lib/useClickSound.ts [app-ssr] (ecmascript)");
;
;
;
function FeedbackModal({ email, userDecision, onContinue }) {
    const playClickSound = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$useClickSound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useClickSound"])();
    const isCorrect = userDecision === 'phishing' && !email.isLegitimate || userDecision === 'legitimate' && email.isLegitimate;
    const correctAnswer = email.isLegitimate ? 'legitimate' : 'phishing';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `bg-card border-2 rounded-lg shadow-2xl w-full max-w-md flex flex-col overflow-hidden ${isCorrect ? 'border-green-500' : 'border-destructive'}`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `px-6 py-4 flex items-center justify-center gap-3 ${isCorrect ? 'bg-green-900 bg-opacity-20' : 'bg-destructive bg-opacity-20'}`,
                    children: isCorrect ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                size: 28,
                                className: "text-green-500"
                            }, void 0, false, {
                                fileName: "[project]/app-analysis (4)/components/FeedbackModal.tsx",
                                lineNumber: 33,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-bold text-green-400 uppercase tracking-wide",
                                children: "Correct!"
                            }, void 0, false, {
                                fileName: "[project]/app-analysis (4)/components/FeedbackModal.tsx",
                                lineNumber: 34,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                                size: 28,
                                className: "text-destructive"
                            }, void 0, false, {
                                fileName: "[project]/app-analysis (4)/components/FeedbackModal.tsx",
                                lineNumber: 40,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-bold text-destructive uppercase tracking-wide",
                                children: "Incorrect"
                            }, void 0, false, {
                                fileName: "[project]/app-analysis (4)/components/FeedbackModal.tsx",
                                lineNumber: 41,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true)
                }, void 0, false, {
                    fileName: "[project]/app-analysis (4)/components/FeedbackModal.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-6 py-6 space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-xs font-bold text-muted-foreground uppercase block mb-2",
                                    children: "Your Decision"
                                }, void 0, false, {
                                    fileName: "[project]/app-analysis (4)/components/FeedbackModal.tsx",
                                    lineNumber: 52,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `p-3 rounded border-l-4 ${isCorrect ? 'bg-green-900 bg-opacity-20 border-green-500' : 'bg-destructive bg-opacity-20 border-destructive'}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-bold uppercase tracking-wide text-foreground",
                                        children: userDecision === 'phishing' ? '🚩 Phishing' : '✓ Legitimate'
                                    }, void 0, false, {
                                        fileName: "[project]/app-analysis (4)/components/FeedbackModal.tsx",
                                        lineNumber: 60,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app-analysis (4)/components/FeedbackModal.tsx",
                                    lineNumber: 55,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app-analysis (4)/components/FeedbackModal.tsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this),
                        !isCorrect && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-xs font-bold text-green-400 uppercase block mb-2",
                                    children: "Correct Answer"
                                }, void 0, false, {
                                    fileName: "[project]/app-analysis (4)/components/FeedbackModal.tsx",
                                    lineNumber: 69,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-3 rounded border-l-4 bg-green-900 bg-opacity-20 border-green-500",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-bold uppercase tracking-wide text-green-400",
                                        children: correctAnswer === 'phishing' ? '🚩 Phishing' : '✓ Legitimate'
                                    }, void 0, false, {
                                        fileName: "[project]/app-analysis (4)/components/FeedbackModal.tsx",
                                        lineNumber: 73,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app-analysis (4)/components/FeedbackModal.tsx",
                                    lineNumber: 72,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app-analysis (4)/components/FeedbackModal.tsx",
                            lineNumber: 68,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border-t border-border pt-4 space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-xs font-bold text-muted-foreground uppercase block mb-1",
                                            children: "From"
                                        }, void 0, false, {
                                            fileName: "[project]/app-analysis (4)/components/FeedbackModal.tsx",
                                            lineNumber: 83,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-foreground font-medium",
                                            children: email.from
                                        }, void 0, false, {
                                            fileName: "[project]/app-analysis (4)/components/FeedbackModal.tsx",
                                            lineNumber: 86,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-muted-foreground",
                                            children: email.senderDomain
                                        }, void 0, false, {
                                            fileName: "[project]/app-analysis (4)/components/FeedbackModal.tsx",
                                            lineNumber: 87,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app-analysis (4)/components/FeedbackModal.tsx",
                                    lineNumber: 82,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-xs font-bold text-muted-foreground uppercase block mb-1",
                                            children: "Subject"
                                        }, void 0, false, {
                                            fileName: "[project]/app-analysis (4)/components/FeedbackModal.tsx",
                                            lineNumber: 90,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-foreground",
                                            children: email.subject
                                        }, void 0, false, {
                                            fileName: "[project]/app-analysis (4)/components/FeedbackModal.tsx",
                                            lineNumber: 93,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app-analysis (4)/components/FeedbackModal.tsx",
                                    lineNumber: 89,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app-analysis (4)/components/FeedbackModal.tsx",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this),
                        !isCorrect && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border-t border-border pt-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-xs font-bold text-muted-foreground uppercase block mb-2",
                                    children: "Red Flags"
                                }, void 0, false, {
                                    fileName: "[project]/app-analysis (4)/components/FeedbackModal.tsx",
                                    lineNumber: 100,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-1 text-xs",
                                    children: email.redFlags && email.redFlags.map((flag, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "text-muted-foreground flex gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-destructive",
                                                    children: "▸"
                                                }, void 0, false, {
                                                    fileName: "[project]/app-analysis (4)/components/FeedbackModal.tsx",
                                                    lineNumber: 106,
                                                    columnNumber: 21
                                                }, this),
                                                flag
                                            ]
                                        }, idx, true, {
                                            fileName: "[project]/app-analysis (4)/components/FeedbackModal.tsx",
                                            lineNumber: 105,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app-analysis (4)/components/FeedbackModal.tsx",
                                    lineNumber: 103,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app-analysis (4)/components/FeedbackModal.tsx",
                            lineNumber: 99,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app-analysis (4)/components/FeedbackModal.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border-t border-border px-6 py-4 bg-secondary",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            playClickSound();
                            onContinue();
                        },
                        className: "w-full py-3 px-4 bg-accent text-accent-foreground font-bold text-sm rounded uppercase hover:opacity-90 transition-opacity",
                        children: "Continue to Next Case"
                    }, void 0, false, {
                        fileName: "[project]/app-analysis (4)/components/FeedbackModal.tsx",
                        lineNumber: 117,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app-analysis (4)/components/FeedbackModal.tsx",
                    lineNumber: 116,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app-analysis (4)/components/FeedbackModal.tsx",
            lineNumber: 24,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app-analysis (4)/components/FeedbackModal.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
}),
"[project]/app-analysis (4)/components/PasswordFeedbackModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PasswordFeedbackModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-analysis (4)/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/app-analysis (4)/node_modules/lucide-react/dist/esm/icons/check.mjs [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/app-analysis (4)/node_modules/lucide-react/dist/esm/icons/x.mjs [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$useClickSound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-analysis (4)/lib/useClickSound.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
function PasswordFeedbackModal({ password, userDecision, onContinue }) {
    const playClickSound = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$useClickSound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useClickSound"])();
    const isCorrect = userDecision === password.correctDecision;
    const getCorrectDecisionLabel = ()=>{
        switch(password.correctDecision){
            case 'approve':
                return 'APPROVE';
            case 'revision':
                return 'REQUIRE REVISION';
            case 'reject':
                return 'REJECT';
        }
    };
    const getUserDecisionLabel = ()=>{
        switch(userDecision){
            case 'approve':
                return 'APPROVE';
            case 'revision':
                return 'REQUIRE REVISION';
            case 'reject':
                return 'REJECT';
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black/50 flex items-center justify-center z-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `w-full max-w-2xl mx-4 rounded border-2 overflow-hidden bg-card ${isCorrect ? 'border-green-600' : 'border-red-600'}`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `px-6 py-4 flex items-center gap-3 ${isCorrect ? 'bg-green-900/50' : 'bg-red-900/50'}`,
                    children: isCorrect ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                size: 28,
                                className: "text-green-500"
                            }, void 0, false, {
                                fileName: "[project]/app-analysis (4)/components/PasswordFeedbackModal.tsx",
                                lineNumber: 54,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-bold tracking-widest text-foreground",
                                children: "CORRECT!"
                            }, void 0, false, {
                                fileName: "[project]/app-analysis (4)/components/PasswordFeedbackModal.tsx",
                                lineNumber: 55,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 28,
                                className: "text-red-500"
                            }, void 0, false, {
                                fileName: "[project]/app-analysis (4)/components/PasswordFeedbackModal.tsx",
                                lineNumber: 59,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-bold tracking-widest text-foreground",
                                children: "INCORRECT"
                            }, void 0, false, {
                                fileName: "[project]/app-analysis (4)/components/PasswordFeedbackModal.tsx",
                                lineNumber: 60,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true)
                }, void 0, false, {
                    fileName: "[project]/app-analysis (4)/components/PasswordFeedbackModal.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-6 py-6 space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3 text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-muted-foreground uppercase text-xs font-bold",
                                            children: "Employee"
                                        }, void 0, false, {
                                            fileName: "[project]/app-analysis (4)/components/PasswordFeedbackModal.tsx",
                                            lineNumber: 70,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-foreground font-bold mt-1",
                                            children: [
                                                password.employee,
                                                " • ",
                                                password.department
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app-analysis (4)/components/PasswordFeedbackModal.tsx",
                                            lineNumber: 71,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app-analysis (4)/components/PasswordFeedbackModal.tsx",
                                    lineNumber: 69,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-muted-foreground uppercase text-xs font-bold",
                                            children: "Submitted Password"
                                        }, void 0, false, {
                                            fileName: "[project]/app-analysis (4)/components/PasswordFeedbackModal.tsx",
                                            lineNumber: 74,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-foreground font-mono font-bold mt-1 tracking-wider",
                                            children: password.submitted
                                        }, void 0, false, {
                                            fileName: "[project]/app-analysis (4)/components/PasswordFeedbackModal.tsx",
                                            lineNumber: 75,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app-analysis (4)/components/PasswordFeedbackModal.tsx",
                                    lineNumber: 73,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app-analysis (4)/components/PasswordFeedbackModal.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `p-4 rounded border-2 ${isCorrect ? 'bg-green-900/30 border-green-600' : 'bg-red-900/30 border-red-600'}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-muted-foreground uppercase text-xs font-bold mb-2",
                                            children: "Your Decision"
                                        }, void 0, false, {
                                            fileName: "[project]/app-analysis (4)/components/PasswordFeedbackModal.tsx",
                                            lineNumber: 84,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: `font-bold text-lg ${isCorrect ? 'text-green-400' : 'text-red-400'}`,
                                            children: [
                                                isCorrect ? '✓' : '✗',
                                                " ",
                                                getUserDecisionLabel()
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app-analysis (4)/components/PasswordFeedbackModal.tsx",
                                            lineNumber: 85,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app-analysis (4)/components/PasswordFeedbackModal.tsx",
                                    lineNumber: 81,
                                    columnNumber: 13
                                }, this),
                                !isCorrect && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-4 rounded border-2 bg-green-900/30 border-green-600",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-muted-foreground uppercase text-xs font-bold mb-2",
                                            children: "Correct Answer"
                                        }, void 0, false, {
                                            fileName: "[project]/app-analysis (4)/components/PasswordFeedbackModal.tsx",
                                            lineNumber: 92,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-bold text-lg text-green-400",
                                            children: [
                                                "✓ ",
                                                getCorrectDecisionLabel()
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app-analysis (4)/components/PasswordFeedbackModal.tsx",
                                            lineNumber: 93,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app-analysis (4)/components/PasswordFeedbackModal.tsx",
                                    lineNumber: 91,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app-analysis (4)/components/PasswordFeedbackModal.tsx",
                            lineNumber: 80,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-muted-foreground uppercase text-xs font-bold",
                                    children: "Analysis"
                                }, void 0, false, {
                                    fileName: "[project]/app-analysis (4)/components/PasswordFeedbackModal.tsx",
                                    lineNumber: 100,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-secondary rounded p-3 space-y-2 text-sm",
                                    children: password.characteristics.map((char)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start gap-3",
                                            children: [
                                                char.present ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-green-500 font-bold mt-0.5",
                                                    children: "✓"
                                                }, void 0, false, {
                                                    fileName: "[project]/app-analysis (4)/components/PasswordFeedbackModal.tsx",
                                                    lineNumber: 105,
                                                    columnNumber: 21
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-red-500 font-bold mt-0.5",
                                                    children: "✗"
                                                }, void 0, false, {
                                                    fileName: "[project]/app-analysis (4)/components/PasswordFeedbackModal.tsx",
                                                    lineNumber: 107,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "font-bold text-foreground",
                                                            children: char.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/app-analysis (4)/components/PasswordFeedbackModal.tsx",
                                                            lineNumber: 110,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-muted-foreground text-xs",
                                                            children: char.description
                                                        }, void 0, false, {
                                                            fileName: "[project]/app-analysis (4)/components/PasswordFeedbackModal.tsx",
                                                            lineNumber: 111,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app-analysis (4)/components/PasswordFeedbackModal.tsx",
                                                    lineNumber: 109,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, char.id, true, {
                                            fileName: "[project]/app-analysis (4)/components/PasswordFeedbackModal.tsx",
                                            lineNumber: 103,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app-analysis (4)/components/PasswordFeedbackModal.tsx",
                                    lineNumber: 101,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app-analysis (4)/components/PasswordFeedbackModal.tsx",
                            lineNumber: 99,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app-analysis (4)/components/PasswordFeedbackModal.tsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border-t border-border px-6 py-4 flex justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            playClickSound();
                            onContinue();
                        },
                        className: "px-8 py-3 bg-accent hover:opacity-90 text-accent-foreground font-bold rounded transition-colors",
                        children: "Continue to Next Case"
                    }, void 0, false, {
                        fileName: "[project]/app-analysis (4)/components/PasswordFeedbackModal.tsx",
                        lineNumber: 121,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app-analysis (4)/components/PasswordFeedbackModal.tsx",
                    lineNumber: 120,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app-analysis (4)/components/PasswordFeedbackModal.tsx",
            lineNumber: 45,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app-analysis (4)/components/PasswordFeedbackModal.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
}),
"[project]/app-analysis (4)/components/DataClassificationFeedbackModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DataClassificationFeedbackModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-analysis (4)/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/app-analysis (4)/node_modules/lucide-react/dist/esm/icons/check.mjs [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/app-analysis (4)/node_modules/lucide-react/dist/esm/icons/x.mjs [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/app-analysis (4)/node_modules/lucide-react/dist/esm/icons/globe.mjs [app-ssr] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/app-analysis (4)/node_modules/lucide-react/dist/esm/icons/building-2.mjs [app-ssr] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/app-analysis (4)/node_modules/lucide-react/dist/esm/icons/lock.mjs [app-ssr] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$useClickSound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-analysis (4)/lib/useClickSound.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
function DataClassificationFeedbackModal({ document, userClassification, onContinue }) {
    const playClickSound = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$useClickSound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useClickSound"])();
    const isCorrect = userClassification === document.correctClassification;
    const getClassificationLabel = (classification)=>{
        const labels = {
            public: 'PUBLIC',
            internal: 'INTERNAL',
            confidential: 'CONFIDENTIAL',
            restricted: 'RESTRICTED'
        };
        return labels[classification] || classification;
    };
    const getClassificationIcon = (classification)=>{
        switch(classification){
            case 'public':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                    size: 24
                }, void 0, false, {
                    fileName: "[project]/app-analysis (4)/components/DataClassificationFeedbackModal.tsx",
                    lineNumber: 34,
                    columnNumber: 16
                }, this);
            case 'internal':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
                    size: 24
                }, void 0, false, {
                    fileName: "[project]/app-analysis (4)/components/DataClassificationFeedbackModal.tsx",
                    lineNumber: 36,
                    columnNumber: 16
                }, this);
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                    size: 24
                }, void 0, false, {
                    fileName: "[project]/app-analysis (4)/components/DataClassificationFeedbackModal.tsx",
                    lineNumber: 38,
                    columnNumber: 16
                }, this);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black/50 flex items-center justify-center z-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `w-full max-w-2xl mx-4 rounded border-2 overflow-hidden bg-card ${isCorrect ? 'border-green-600' : 'border-red-600'}`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `px-6 py-4 flex items-center gap-3 ${isCorrect ? 'bg-green-900/50' : 'bg-red-900/50'}`,
                    children: isCorrect ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                size: 28,
                                className: "text-green-500"
                            }, void 0, false, {
                                fileName: "[project]/app-analysis (4)/components/DataClassificationFeedbackModal.tsx",
                                lineNumber: 53,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-bold tracking-widest text-foreground",
                                children: "CORRECT!"
                            }, void 0, false, {
                                fileName: "[project]/app-analysis (4)/components/DataClassificationFeedbackModal.tsx",
                                lineNumber: 54,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 28,
                                className: "text-red-500"
                            }, void 0, false, {
                                fileName: "[project]/app-analysis (4)/components/DataClassificationFeedbackModal.tsx",
                                lineNumber: 58,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-bold tracking-widest text-foreground",
                                children: "INCORRECT"
                            }, void 0, false, {
                                fileName: "[project]/app-analysis (4)/components/DataClassificationFeedbackModal.tsx",
                                lineNumber: 59,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true)
                }, void 0, false, {
                    fileName: "[project]/app-analysis (4)/components/DataClassificationFeedbackModal.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-6 py-6 space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3 text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-muted-foreground uppercase text-xs font-bold",
                                            children: "Document"
                                        }, void 0, false, {
                                            fileName: "[project]/app-analysis (4)/components/DataClassificationFeedbackModal.tsx",
                                            lineNumber: 69,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-foreground font-bold mt-1",
                                            children: document.title
                                        }, void 0, false, {
                                            fileName: "[project]/app-analysis (4)/components/DataClassificationFeedbackModal.tsx",
                                            lineNumber: 70,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app-analysis (4)/components/DataClassificationFeedbackModal.tsx",
                                    lineNumber: 68,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-muted-foreground uppercase text-xs font-bold",
                                            children: "From"
                                        }, void 0, false, {
                                            fileName: "[project]/app-analysis (4)/components/DataClassificationFeedbackModal.tsx",
                                            lineNumber: 73,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-foreground font-bold mt-1",
                                            children: document.from
                                        }, void 0, false, {
                                            fileName: "[project]/app-analysis (4)/components/DataClassificationFeedbackModal.tsx",
                                            lineNumber: 74,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app-analysis (4)/components/DataClassificationFeedbackModal.tsx",
                                    lineNumber: 72,
                                    columnNumber: 13
                                }, this),
                                document.shouldShareWith && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-muted-foreground uppercase text-xs font-bold",
                                            children: "Intended Recipient"
                                        }, void 0, false, {
                                            fileName: "[project]/app-analysis (4)/components/DataClassificationFeedbackModal.tsx",
                                            lineNumber: 78,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-foreground font-bold mt-1",
                                            children: document.shouldShareWith
                                        }, void 0, false, {
                                            fileName: "[project]/app-analysis (4)/components/DataClassificationFeedbackModal.tsx",
                                            lineNumber: 79,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app-analysis (4)/components/DataClassificationFeedbackModal.tsx",
                                    lineNumber: 77,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app-analysis (4)/components/DataClassificationFeedbackModal.tsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `p-4 rounded border-2 flex items-center gap-3 ${isCorrect ? 'bg-green-900/30 border-green-600' : 'bg-red-900/30 border-red-600'}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `flex-shrink-0 ${isCorrect ? 'text-green-400' : 'text-red-400'}`,
                                            children: isCorrect ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                size: 24
                                            }, void 0, false, {
                                                fileName: "[project]/app-analysis (4)/components/DataClassificationFeedbackModal.tsx",
                                                lineNumber: 90,
                                                columnNumber: 30
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                size: 24
                                            }, void 0, false, {
                                                fileName: "[project]/app-analysis (4)/components/DataClassificationFeedbackModal.tsx",
                                                lineNumber: 90,
                                                columnNumber: 52
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app-analysis (4)/components/DataClassificationFeedbackModal.tsx",
                                            lineNumber: 89,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-muted-foreground uppercase text-xs font-bold mb-1",
                                                    children: "Your Decision"
                                                }, void 0, false, {
                                                    fileName: "[project]/app-analysis (4)/components/DataClassificationFeedbackModal.tsx",
                                                    lineNumber: 93,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: `font-bold text-lg ${isCorrect ? 'text-green-400' : 'text-red-400'}`,
                                                    children: getClassificationLabel(userClassification)
                                                }, void 0, false, {
                                                    fileName: "[project]/app-analysis (4)/components/DataClassificationFeedbackModal.tsx",
                                                    lineNumber: 94,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app-analysis (4)/components/DataClassificationFeedbackModal.tsx",
                                            lineNumber: 92,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app-analysis (4)/components/DataClassificationFeedbackModal.tsx",
                                    lineNumber: 86,
                                    columnNumber: 13
                                }, this),
                                !isCorrect && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-4 rounded border-2 bg-green-900/30 border-green-600 flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-shrink-0 text-green-400",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                size: 24
                                            }, void 0, false, {
                                                fileName: "[project]/app-analysis (4)/components/DataClassificationFeedbackModal.tsx",
                                                lineNumber: 103,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app-analysis (4)/components/DataClassificationFeedbackModal.tsx",
                                            lineNumber: 102,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-muted-foreground uppercase text-xs font-bold mb-1",
                                                    children: "Correct Answer"
                                                }, void 0, false, {
                                                    fileName: "[project]/app-analysis (4)/components/DataClassificationFeedbackModal.tsx",
                                                    lineNumber: 106,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-bold text-lg text-green-400",
                                                    children: getClassificationLabel(document.correctClassification)
                                                }, void 0, false, {
                                                    fileName: "[project]/app-analysis (4)/components/DataClassificationFeedbackModal.tsx",
                                                    lineNumber: 107,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app-analysis (4)/components/DataClassificationFeedbackModal.tsx",
                                            lineNumber: 105,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app-analysis (4)/components/DataClassificationFeedbackModal.tsx",
                                    lineNumber: 101,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app-analysis (4)/components/DataClassificationFeedbackModal.tsx",
                            lineNumber: 85,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-muted-foreground uppercase text-xs font-bold",
                                    children: "Content Analysis"
                                }, void 0, false, {
                                    fileName: "[project]/app-analysis (4)/components/DataClassificationFeedbackModal.tsx",
                                    lineNumber: 117,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-secondary rounded p-3 space-y-2 text-sm",
                                    children: document.sensitivityIndicators && document.sensitivityIndicators.length > 0 ? document.sensitivityIndicators.map((indicator, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-accent font-bold mt-0.5",
                                                    children: "•"
                                                }, void 0, false, {
                                                    fileName: "[project]/app-analysis (4)/components/DataClassificationFeedbackModal.tsx",
                                                    lineNumber: 122,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-foreground",
                                                    children: indicator
                                                }, void 0, false, {
                                                    fileName: "[project]/app-analysis (4)/components/DataClassificationFeedbackModal.tsx",
                                                    lineNumber: 123,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, idx, true, {
                                            fileName: "[project]/app-analysis (4)/components/DataClassificationFeedbackModal.tsx",
                                            lineNumber: 121,
                                            columnNumber: 19
                                        }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-muted-foreground",
                                        children: "No sensitive indicators found"
                                    }, void 0, false, {
                                        fileName: "[project]/app-analysis (4)/components/DataClassificationFeedbackModal.tsx",
                                        lineNumber: 127,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app-analysis (4)/components/DataClassificationFeedbackModal.tsx",
                                    lineNumber: 118,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app-analysis (4)/components/DataClassificationFeedbackModal.tsx",
                            lineNumber: 116,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app-analysis (4)/components/DataClassificationFeedbackModal.tsx",
                    lineNumber: 65,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border-t border-border px-6 py-4 flex justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            playClickSound();
                            onContinue();
                        },
                        className: "px-8 py-3 bg-accent hover:opacity-90 text-accent-foreground font-bold rounded transition-colors",
                        children: "Continue to Next Case"
                    }, void 0, false, {
                        fileName: "[project]/app-analysis (4)/components/DataClassificationFeedbackModal.tsx",
                        lineNumber: 135,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app-analysis (4)/components/DataClassificationFeedbackModal.tsx",
                    lineNumber: 134,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app-analysis (4)/components/DataClassificationFeedbackModal.tsx",
            lineNumber: 44,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app-analysis (4)/components/DataClassificationFeedbackModal.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
}),
"[project]/app-analysis (4)/components/PasswordStrengthTask.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PasswordStrengthTask
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-analysis (4)/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/app-analysis (4)/node_modules/lucide-react/dist/esm/icons/check.mjs [app-ssr] (ecmascript) <export default as Check>");
'use client';
;
;
function PasswordStrengthTask({ password, checkedCharacteristics, onToggleCharacteristic }) {
    if (!password) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 h-full bg-[#171b1d] border border-[#3a3f42] rounded flex flex-col overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "sticky top-0 bg-[#171b1d] border-b border-[#3a3f42] px-4 py-5 z-10 flex items-center gap-3",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-sm font-bold tracking-widest text-muted-foreground uppercase",
                        children: "PASSWORD STRENGTH ASSESSMENT"
                    }, void 0, false, {
                        fileName: "[project]/app-analysis (4)/components/PasswordStrengthTask.tsx",
                        lineNumber: 22,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app-analysis (4)/components/PasswordStrengthTask.tsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 flex items-center justify-center bg-[#d3cdc1] m-1 rounded",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[#666666] text-center",
                        children: "No password tasks available"
                    }, void 0, false, {
                        fileName: "[project]/app-analysis (4)/components/PasswordStrengthTask.tsx",
                        lineNumber: 29,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app-analysis (4)/components/PasswordStrengthTask.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app-analysis (4)/components/PasswordStrengthTask.tsx",
            lineNumber: 19,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex-1 h-full bg-[#171b1d] border border-[#3a3f42] rounded flex flex-col overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sticky top-0 bg-[#171b1d] border-b border-[#3a3f42] px-4 py-5 z-10 flex items-center gap-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-sm font-bold tracking-widest text-muted-foreground uppercase",
                    children: "PASSWORD STRENGTH ASSESSMENT"
                }, void 0, false, {
                    fileName: "[project]/app-analysis (4)/components/PasswordStrengthTask.tsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app-analysis (4)/components/PasswordStrengthTask.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex overflow-hidden bg-[#d3cdc1] m-1 rounded",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 flex flex-col gap-2 overflow-y-auto p-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-[#d3cdc1] rounded border border-[#c5b8a8] p-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-12 h-12 bg-[#c5b8a8] rounded-full flex items-center justify-center text-lg flex-shrink-0",
                                        children: "👤"
                                    }, void 0, false, {
                                        fileName: "[project]/app-analysis (4)/components/PasswordStrengthTask.tsx",
                                        lineNumber: 51,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 gap-3 text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[#666666] uppercase text-xs font-bold",
                                                            children: "EMPLOYEE"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app-analysis (4)/components/PasswordStrengthTask.tsx",
                                                            lineNumber: 55,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[#000000] font-bold mt-1",
                                                            children: password.employee
                                                        }, void 0, false, {
                                                            fileName: "[project]/app-analysis (4)/components/PasswordStrengthTask.tsx",
                                                            lineNumber: 56,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app-analysis (4)/components/PasswordStrengthTask.tsx",
                                                    lineNumber: 54,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[#666666] uppercase text-xs font-bold",
                                                            children: "DEPARTMENT"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app-analysis (4)/components/PasswordStrengthTask.tsx",
                                                            lineNumber: 59,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[#000000] font-bold mt-1",
                                                            children: password.department
                                                        }, void 0, false, {
                                                            fileName: "[project]/app-analysis (4)/components/PasswordStrengthTask.tsx",
                                                            lineNumber: 60,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app-analysis (4)/components/PasswordStrengthTask.tsx",
                                                    lineNumber: 58,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "col-span-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[#666666] uppercase text-xs font-bold",
                                                            children: "SUBMITTED"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app-analysis (4)/components/PasswordStrengthTask.tsx",
                                                            lineNumber: 63,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[#000000] font-bold mt-1",
                                                            children: password.timestamp
                                                        }, void 0, false, {
                                                            fileName: "[project]/app-analysis (4)/components/PasswordStrengthTask.tsx",
                                                            lineNumber: 64,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app-analysis (4)/components/PasswordStrengthTask.tsx",
                                                    lineNumber: 62,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app-analysis (4)/components/PasswordStrengthTask.tsx",
                                            lineNumber: 53,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app-analysis (4)/components/PasswordStrengthTask.tsx",
                                        lineNumber: 52,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app-analysis (4)/components/PasswordStrengthTask.tsx",
                                lineNumber: 50,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app-analysis (4)/components/PasswordStrengthTask.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-[#d3cdc1] rounded border border-[#c5b8a8] p-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[#666666] uppercase text-xs font-bold block mb-1",
                                    children: "SUBMITTED PASSWORD"
                                }, void 0, false, {
                                    fileName: "[project]/app-analysis (4)/components/PasswordStrengthTask.tsx",
                                    lineNumber: 73,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-[#d3cdc1] rounded border border-[#c5b8a8] p-2 font-mono text-[#000000] text-base tracking-widest",
                                    children: password.submitted
                                }, void 0, false, {
                                    fileName: "[project]/app-analysis (4)/components/PasswordStrengthTask.tsx",
                                    lineNumber: 74,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app-analysis (4)/components/PasswordStrengthTask.tsx",
                            lineNumber: 72,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-[#d3cdc1] rounded border border-[#c5b8a8] p-2 flex-1 overflow-y-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[#666666] uppercase text-xs font-bold block mb-2",
                                    children: "PASSWORD CHARACTERISTICS"
                                }, void 0, false, {
                                    fileName: "[project]/app-analysis (4)/components/PasswordStrengthTask.tsx",
                                    lineNumber: 81,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: password.characteristics.map((char)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "flex items-start gap-3 p-2 rounded hover:bg-[#c5b8a8] cursor-pointer transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "checkbox",
                                                    checked: checkedCharacteristics.has(char.id),
                                                    onChange: ()=>onToggleCharacteristic(char.id),
                                                    className: "w-4 h-4 mt-1 cursor-pointer flex-shrink-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/app-analysis (4)/components/PasswordStrengthTask.tsx",
                                                    lineNumber: 88,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1 min-w-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "font-bold text-[#000000] text-sm",
                                                            children: char.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/app-analysis (4)/components/PasswordStrengthTask.tsx",
                                                            lineNumber: 95,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[#666666] text-xs mt-0.5",
                                                            children: char.description
                                                        }, void 0, false, {
                                                            fileName: "[project]/app-analysis (4)/components/PasswordStrengthTask.tsx",
                                                            lineNumber: 96,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app-analysis (4)/components/PasswordStrengthTask.tsx",
                                                    lineNumber: 94,
                                                    columnNumber: 19
                                                }, this),
                                                char.present && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-shrink-0 text-[#000000]",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                        size: 16
                                                    }, void 0, false, {
                                                        fileName: "[project]/app-analysis (4)/components/PasswordStrengthTask.tsx",
                                                        lineNumber: 100,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app-analysis (4)/components/PasswordStrengthTask.tsx",
                                                    lineNumber: 99,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, char.id, true, {
                                            fileName: "[project]/app-analysis (4)/components/PasswordStrengthTask.tsx",
                                            lineNumber: 84,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app-analysis (4)/components/PasswordStrengthTask.tsx",
                                    lineNumber: 82,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app-analysis (4)/components/PasswordStrengthTask.tsx",
                            lineNumber: 80,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app-analysis (4)/components/PasswordStrengthTask.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app-analysis (4)/components/PasswordStrengthTask.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app-analysis (4)/components/PasswordStrengthTask.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
}),
"[project]/app-analysis (4)/components/PasswordDecisionPanel.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PasswordDecisionPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-analysis (4)/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/app-analysis (4)/node_modules/lucide-react/dist/esm/icons/check.mjs [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/app-analysis (4)/node_modules/lucide-react/dist/esm/icons/x.mjs [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/app-analysis (4)/node_modules/lucide-react/dist/esm/icons/circle-alert.mjs [app-ssr] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$useClickSound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-analysis (4)/lib/useClickSound.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
function PasswordDecisionPanel({ onMakeDecision }) {
    const playClickSound = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$useClickSound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useClickSound"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-16 bg-[#171b1d] border border-[#3a3f42] rounded flex items-center justify-center gap-6 px-6 py-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-sm font-bold tracking-widest text-muted-foreground uppercase mr-2",
                children: "DECISION"
            }, void 0, false, {
                fileName: "[project]/app-analysis (4)/components/PasswordDecisionPanel.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>{
                    playClickSound();
                    onMakeDecision('approve');
                },
                className: "px-8 py-3 bg-green-700 hover:bg-green-600 text-white font-bold rounded transition-colors flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                        size: 18
                    }, void 0, false, {
                        fileName: "[project]/app-analysis (4)/components/PasswordDecisionPanel.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    "APPROVE"
                ]
            }, void 0, true, {
                fileName: "[project]/app-analysis (4)/components/PasswordDecisionPanel.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>{
                    playClickSound();
                    onMakeDecision('revision');
                },
                className: "px-8 py-3 bg-yellow-700 hover:bg-yellow-600 text-white font-bold rounded transition-colors flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                        size: 18
                    }, void 0, false, {
                        fileName: "[project]/app-analysis (4)/components/PasswordDecisionPanel.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    "REQUIRE REVISION"
                ]
            }, void 0, true, {
                fileName: "[project]/app-analysis (4)/components/PasswordDecisionPanel.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>{
                    playClickSound();
                    onMakeDecision('reject');
                },
                className: "px-8 py-3 bg-red-700 hover:bg-red-600 text-white font-bold rounded transition-colors flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                        size: 18
                    }, void 0, false, {
                        fileName: "[project]/app-analysis (4)/components/PasswordDecisionPanel.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    "REJECT"
                ]
            }, void 0, true, {
                fileName: "[project]/app-analysis (4)/components/PasswordDecisionPanel.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app-analysis (4)/components/PasswordDecisionPanel.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
}),
"[project]/app-analysis (4)/components/DataClassificationTask.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DataClassificationTask
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-analysis (4)/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/app-analysis (4)/node_modules/lucide-react/dist/esm/icons/file-text.mjs [app-ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$borderVariants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-analysis (4)/lib/borderVariants.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-analysis (4)/lib/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function DataClassificationTask({ document }) {
    if (!document) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex-1 flex flex-col h-full overflow-hidden bg-[#171b1d]', (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$borderVariants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["borderVariants"])({
                variant: 'emphasis'
            })),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('px-6 py-4 bg-[#171b1d]', (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$borderVariants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["borderVariants"])({
                        variant: 'divider'
                    }), 'border-b'),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-lg font-bold tracking-widest text-foreground",
                        children: "TASK: DATA CLASSIFICATION"
                    }, void 0, false, {
                        fileName: "[project]/app-analysis (4)/components/DataClassificationTask.tsx",
                        lineNumber: 20,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app-analysis (4)/components/DataClassificationTask.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex-1 flex items-center justify-center m-1 rounded bg-[#d3cdc1]'),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[#666666] text-center",
                        children: "No data classification tasks available"
                    }, void 0, false, {
                        fileName: "[project]/app-analysis (4)/components/DataClassificationTask.tsx",
                        lineNumber: 25,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app-analysis (4)/components/DataClassificationTask.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app-analysis (4)/components/DataClassificationTask.tsx",
            lineNumber: 17,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex-1 flex flex-col h-full overflow-hidden bg-[#171b1d]', (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$borderVariants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["borderVariants"])({
            variant: 'emphasis'
        })),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('px-6 py-4 bg-[#171b1d]', (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$borderVariants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["borderVariants"])({
                    variant: 'divider'
                }), 'border-b'),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-lg font-bold tracking-widest text-foreground",
                    children: "TASK: DATA CLASSIFICATION"
                }, void 0, false, {
                    fileName: "[project]/app-analysis (4)/components/DataClassificationTask.tsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app-analysis (4)/components/DataClassificationTask.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex-1 flex gap-6 overflow-hidden m-1 rounded bg-[#d3cdc1]'),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 flex flex-col gap-6 overflow-hidden p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-[#d3cdc1] rounded p-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                        size: 24,
                                        className: "text-[#000000]"
                                    }, void 0, false, {
                                        fileName: "[project]/app-analysis (4)/components/DataClassificationTask.tsx",
                                        lineNumber: 45,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[#5a5a5a] uppercase text-xs font-bold",
                                                children: [
                                                    "From: ",
                                                    document.from
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app-analysis (4)/components/DataClassificationTask.tsx",
                                                lineNumber: 47,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[#5a5a5a] uppercase text-xs font-bold",
                                                children: [
                                                    "Time: ",
                                                    document.timestamp
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app-analysis (4)/components/DataClassificationTask.tsx",
                                                lineNumber: 48,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app-analysis (4)/components/DataClassificationTask.tsx",
                                        lineNumber: 46,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app-analysis (4)/components/DataClassificationTask.tsx",
                                lineNumber: 44,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app-analysis (4)/components/DataClassificationTask.tsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-[#d3cdc1] rounded p-4 flex-1 flex flex-col overflow-hidden",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[#5a5a5a] uppercase text-xs font-bold block mb-3",
                                    children: "DOCUMENT PREVIEW"
                                }, void 0, false, {
                                    fileName: "[project]/app-analysis (4)/components/DataClassificationTask.tsx",
                                    lineNumber: 55,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 flex flex-col gap-3 overflow-y-auto",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-[#c1b5a8] rounded p-3 flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                    size: 32,
                                                    className: "text-[#000000] flex-shrink-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/app-analysis (4)/components/DataClassificationTask.tsx",
                                                    lineNumber: 58,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "font-bold text-[#000000]",
                                                            children: document.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/app-analysis (4)/components/DataClassificationTask.tsx",
                                                            lineNumber: 60,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[#5a5a5a] text-xs",
                                                            children: document.fileSize
                                                        }, void 0, false, {
                                                            fileName: "[project]/app-analysis (4)/components/DataClassificationTask.tsx",
                                                            lineNumber: 61,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app-analysis (4)/components/DataClassificationTask.tsx",
                                                    lineNumber: 59,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app-analysis (4)/components/DataClassificationTask.tsx",
                                            lineNumber: 57,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-[#c1b5a8] rounded p-4 flex-1 overflow-y-auto",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[#000000] text-sm whitespace-pre-wrap",
                                                children: document.preview
                                            }, void 0, false, {
                                                fileName: "[project]/app-analysis (4)/components/DataClassificationTask.tsx",
                                                lineNumber: 65,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app-analysis (4)/components/DataClassificationTask.tsx",
                                            lineNumber: 64,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app-analysis (4)/components/DataClassificationTask.tsx",
                                    lineNumber: 56,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app-analysis (4)/components/DataClassificationTask.tsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app-analysis (4)/components/DataClassificationTask.tsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app-analysis (4)/components/DataClassificationTask.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app-analysis (4)/components/DataClassificationTask.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
}),
"[project]/app-analysis (4)/components/PasswordPolicyPanel.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PasswordPolicyPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-analysis (4)/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function PasswordPolicyPanel() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex-1 h-full bg-[#171b1d] border border-[#3a3f42] rounded flex flex-col overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sticky top-0 bg-[#171b1d] border-b border-[#3a3f42] px-4 py-5 z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-sm font-bold tracking-widest text-muted-foreground uppercase",
                    children: "PASSWORD POLICY"
                }, void 0, false, {
                    fileName: "[project]/app-analysis (4)/components/PasswordPolicyPanel.tsx",
                    lineNumber: 6,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app-analysis (4)/components/PasswordPolicyPanel.tsx",
                lineNumber: 5,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex overflow-hidden bg-[#d3cdc1] m-1 rounded",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 flex flex-col overflow-y-auto p-3 gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-[#d3cdc1] rounded border border-[#c5b8a8] p-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-bold text-[#000000] text-sm",
                                    children: "📏 Minimum 12 characters"
                                }, void 0, false, {
                                    fileName: "[project]/app-analysis (4)/components/PasswordPolicyPanel.tsx",
                                    lineNumber: 14,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[#666666] text-xs mt-1",
                                    children: "Longer passwords are harder to crack"
                                }, void 0, false, {
                                    fileName: "[project]/app-analysis (4)/components/PasswordPolicyPanel.tsx",
                                    lineNumber: 15,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app-analysis (4)/components/PasswordPolicyPanel.tsx",
                            lineNumber: 13,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-[#d3cdc1] rounded border border-[#c5b8a8] p-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-bold text-[#000000] text-sm",
                                    children: "Aa Include uppercase and lowercase letters"
                                }, void 0, false, {
                                    fileName: "[project]/app-analysis (4)/components/PasswordPolicyPanel.tsx",
                                    lineNumber: 18,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[#666666] text-xs mt-1",
                                    children: "Mix character types for complexity"
                                }, void 0, false, {
                                    fileName: "[project]/app-analysis (4)/components/PasswordPolicyPanel.tsx",
                                    lineNumber: 19,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app-analysis (4)/components/PasswordPolicyPanel.tsx",
                            lineNumber: 17,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-[#d3cdc1] rounded border border-[#c5b8a8] p-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-bold text-[#000000] text-sm",
                                    children: "123 Include at least one number"
                                }, void 0, false, {
                                    fileName: "[project]/app-analysis (4)/components/PasswordPolicyPanel.tsx",
                                    lineNumber: 22,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[#666666] text-xs mt-1",
                                    children: "Numbers increase entropy"
                                }, void 0, false, {
                                    fileName: "[project]/app-analysis (4)/components/PasswordPolicyPanel.tsx",
                                    lineNumber: 23,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app-analysis (4)/components/PasswordPolicyPanel.tsx",
                            lineNumber: 21,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-[#d3cdc1] rounded border border-[#c5b8a8] p-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-bold text-[#000000] text-sm",
                                    children: "!@# Include at least one special character"
                                }, void 0, false, {
                                    fileName: "[project]/app-analysis (4)/components/PasswordPolicyPanel.tsx",
                                    lineNumber: 26,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[#666666] text-xs mt-1",
                                    children: "Symbols make passwords stronger"
                                }, void 0, false, {
                                    fileName: "[project]/app-analysis (4)/components/PasswordPolicyPanel.tsx",
                                    lineNumber: 27,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app-analysis (4)/components/PasswordPolicyPanel.tsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-[#d3cdc1] rounded border border-[#c5b8a8] p-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-bold text-[#000000] text-sm",
                                    children: "📚 Avoid dictionary words"
                                }, void 0, false, {
                                    fileName: "[project]/app-analysis (4)/components/PasswordPolicyPanel.tsx",
                                    lineNumber: 30,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[#666666] text-xs mt-1",
                                    children: "Common words are easy to guess"
                                }, void 0, false, {
                                    fileName: "[project]/app-analysis (4)/components/PasswordPolicyPanel.tsx",
                                    lineNumber: 31,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app-analysis (4)/components/PasswordPolicyPanel.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-[#d3cdc1] rounded border border-[#c5b8a8] p-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-bold text-[#000000] text-sm",
                                    children: "👤 Avoid personal or company information"
                                }, void 0, false, {
                                    fileName: "[project]/app-analysis (4)/components/PasswordPolicyPanel.tsx",
                                    lineNumber: 34,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[#666666] text-xs mt-1",
                                    children: "Don't use names, birthdates, or usernames"
                                }, void 0, false, {
                                    fileName: "[project]/app-analysis (4)/components/PasswordPolicyPanel.tsx",
                                    lineNumber: 35,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app-analysis (4)/components/PasswordPolicyPanel.tsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-[#d3cdc1] rounded border border-[#c5b8a8] p-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-bold text-[#000000] text-sm",
                                    children: "1️⃣ Avoid sequential characters"
                                }, void 0, false, {
                                    fileName: "[project]/app-analysis (4)/components/PasswordPolicyPanel.tsx",
                                    lineNumber: 38,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[#666666] text-xs mt-1",
                                    children: "e.g., 123456, abcdef"
                                }, void 0, false, {
                                    fileName: "[project]/app-analysis (4)/components/PasswordPolicyPanel.tsx",
                                    lineNumber: 39,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app-analysis (4)/components/PasswordPolicyPanel.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-[#d3cdc1] rounded border border-[#c5b8a8] p-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-bold text-[#000000] text-sm",
                                    children: "⌨️ Avoid keyboard patterns"
                                }, void 0, false, {
                                    fileName: "[project]/app-analysis (4)/components/PasswordPolicyPanel.tsx",
                                    lineNumber: 42,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[#666666] text-xs mt-1",
                                    children: "e.g., qwerty, asdfgh"
                                }, void 0, false, {
                                    fileName: "[project]/app-analysis (4)/components/PasswordPolicyPanel.tsx",
                                    lineNumber: 43,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app-analysis (4)/components/PasswordPolicyPanel.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-[#d3cdc1] rounded border border-[#c5b8a8] p-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-bold text-[#000000] text-sm",
                                    children: "↻ Do not reuse old passwords"
                                }, void 0, false, {
                                    fileName: "[project]/app-analysis (4)/components/PasswordPolicyPanel.tsx",
                                    lineNumber: 46,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[#666666] text-xs mt-1",
                                    children: "Create unique passwords for each account"
                                }, void 0, false, {
                                    fileName: "[project]/app-analysis (4)/components/PasswordPolicyPanel.tsx",
                                    lineNumber: 47,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app-analysis (4)/components/PasswordPolicyPanel.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-[#d3cdc1] rounded border border-[#c5b8a8] p-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-bold text-[#000000] text-sm",
                                    children: "⚠️ Do not use leaked or common passwords"
                                }, void 0, false, {
                                    fileName: "[project]/app-analysis (4)/components/PasswordPolicyPanel.tsx",
                                    lineNumber: 50,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[#666666] text-xs mt-1",
                                    children: "Check against known breach databases"
                                }, void 0, false, {
                                    fileName: "[project]/app-analysis (4)/components/PasswordPolicyPanel.tsx",
                                    lineNumber: 51,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app-analysis (4)/components/PasswordPolicyPanel.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app-analysis (4)/components/PasswordPolicyPanel.tsx",
                    lineNumber: 12,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app-analysis (4)/components/PasswordPolicyPanel.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app-analysis (4)/components/PasswordPolicyPanel.tsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
}),
"[project]/app-analysis (4)/components/Panel.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Panel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-analysis (4)/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$borderVariants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-analysis (4)/lib/borderVariants.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-analysis (4)/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
function Panel({ children, className = '', border = 'emphasis' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('bg-panel text-panel-foreground rounded flex flex-col overflow-hidden', (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$borderVariants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["borderVariants"])({
            variant: border
        }), className),
        children: children
    }, void 0, false, {
        fileName: "[project]/app-analysis (4)/components/Panel.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
}),
"[project]/app-analysis (4)/components/DataClassificationDetailsPanel.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DataClassificationDetailsPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-analysis (4)/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/app-analysis (4)/node_modules/lucide-react/dist/esm/icons/file-text.mjs [app-ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/app-analysis (4)/node_modules/lucide-react/dist/esm/icons/lock.mjs [app-ssr] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/app-analysis (4)/node_modules/lucide-react/dist/esm/icons/building-2.mjs [app-ssr] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/app-analysis (4)/node_modules/lucide-react/dist/esm/icons/globe.mjs [app-ssr] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$components$2f$Panel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-analysis (4)/components/Panel.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$useClickSound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-analysis (4)/lib/useClickSound.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$borderVariants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-analysis (4)/lib/borderVariants.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-analysis (4)/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
;
;
function DataClassificationDetailsPanel({ document, onClassify }) {
    const playClickSound = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$useClickSound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useClickSound"])();
    if (!document) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex flex-col h-full overflow-hidden bg-[#171b1d]', (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$borderVariants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["borderVariants"])({
                variant: 'emphasis'
            })),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('px-6 py-4 bg-[#171b1d]', (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$borderVariants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["borderVariants"])({
                        variant: 'divider'
                    }), 'border-b'),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                size: 20,
                                className: "text-[#d3cdc1]"
                            }, void 0, false, {
                                fileName: "[project]/app-analysis (4)/components/DataClassificationDetailsPanel.tsx",
                                lineNumber: 25,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-lg font-bold tracking-widest text-foreground",
                                children: "CLASSIFICATION"
                            }, void 0, false, {
                                fileName: "[project]/app-analysis (4)/components/DataClassificationDetailsPanel.tsx",
                                lineNumber: 26,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app-analysis (4)/components/DataClassificationDetailsPanel.tsx",
                        lineNumber: 24,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app-analysis (4)/components/DataClassificationDetailsPanel.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex-1 flex items-center justify-center m-1 rounded bg-[#d3cdc1]'),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[#666666] text-center",
                        children: "No data classification tasks available"
                    }, void 0, false, {
                        fileName: "[project]/app-analysis (4)/components/DataClassificationDetailsPanel.tsx",
                        lineNumber: 32,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app-analysis (4)/components/DataClassificationDetailsPanel.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app-analysis (4)/components/DataClassificationDetailsPanel.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, this);
    }
    const classifications = [
        {
            id: 'public',
            label: 'PUBLIC',
            description: 'Safe to share with anyone.',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                size: 24,
                className: "text-white"
            }, void 0, false, {
                fileName: "[project]/app-analysis (4)/components/DataClassificationDetailsPanel.tsx",
                lineNumber: 43,
                columnNumber: 13
            }, this),
            color: 'bg-[#4CAF50]',
            borderColor: 'border-[#45a049]',
            textColor: 'text-white'
        },
        {
            id: 'internal',
            label: 'INTERNAL',
            description: 'For internal use only.',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
                size: 24,
                className: "text-white"
            }, void 0, false, {
                fileName: "[project]/app-analysis (4)/components/DataClassificationDetailsPanel.tsx",
                lineNumber: 52,
                columnNumber: 13
            }, this),
            color: 'bg-[#2196F3]',
            borderColor: 'border-[#0b7dda]',
            textColor: 'text-white'
        },
        {
            id: 'confidential',
            label: 'CONFIDENTIAL',
            description: 'Share only with authorized individuals.',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                size: 24,
                className: "text-white"
            }, void 0, false, {
                fileName: "[project]/app-analysis (4)/components/DataClassificationDetailsPanel.tsx",
                lineNumber: 61,
                columnNumber: 13
            }, this),
            color: 'bg-[#FF9800]',
            borderColor: 'border-[#e68900]',
            textColor: 'text-white'
        },
        {
            id: 'restricted',
            label: 'RESTRICTED',
            description: 'Highly sensitive. Limited access only.',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                size: 24,
                className: "text-white"
            }, void 0, false, {
                fileName: "[project]/app-analysis (4)/components/DataClassificationDetailsPanel.tsx",
                lineNumber: 70,
                columnNumber: 13
            }, this),
            color: 'bg-[#F44336]',
            borderColor: 'border-[#da190b]',
            textColor: 'text-white'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex flex-col h-full overflow-hidden bg-[#171b1d]', (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$borderVariants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["borderVariants"])({
            variant: 'emphasis'
        })),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('px-6 py-4 bg-[#171b1d]', (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$borderVariants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["borderVariants"])({
                    variant: 'divider'
                }), 'border-b'),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                            size: 20,
                            className: "text-[#d3cdc1]"
                        }, void 0, false, {
                            fileName: "[project]/app-analysis (4)/components/DataClassificationDetailsPanel.tsx",
                            lineNumber: 82,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-lg font-bold tracking-widest text-foreground",
                            children: "CLASSIFICATION"
                        }, void 0, false, {
                            fileName: "[project]/app-analysis (4)/components/DataClassificationDetailsPanel.tsx",
                            lineNumber: 83,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app-analysis (4)/components/DataClassificationDetailsPanel.tsx",
                    lineNumber: 81,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app-analysis (4)/components/DataClassificationDetailsPanel.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex-1 flex flex-col gap-4 overflow-y-auto m-1 rounded bg-[#d3cdc1] p-6'),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$components$2f$Panel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        className: "p-4 bg-[#d3cdc1] text-[#000000]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                        size: 20,
                                        className: "text-[#000000]"
                                    }, void 0, false, {
                                        fileName: "[project]/app-analysis (4)/components/DataClassificationDetailsPanel.tsx",
                                        lineNumber: 92,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[#5a5a5a] uppercase text-xs font-bold",
                                        children: "TASK DETAILS"
                                    }, void 0, false, {
                                        fileName: "[project]/app-analysis (4)/components/DataClassificationDetailsPanel.tsx",
                                        lineNumber: 93,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app-analysis (4)/components/DataClassificationDetailsPanel.tsx",
                                lineNumber: 91,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3 text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[#5a5a5a] uppercase text-xs font-bold",
                                                children: "Document"
                                            }, void 0, false, {
                                                fileName: "[project]/app-analysis (4)/components/DataClassificationDetailsPanel.tsx",
                                                lineNumber: 97,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[#000000] font-bold mt-1",
                                                children: document.title
                                            }, void 0, false, {
                                                fileName: "[project]/app-analysis (4)/components/DataClassificationDetailsPanel.tsx",
                                                lineNumber: 98,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app-analysis (4)/components/DataClassificationDetailsPanel.tsx",
                                        lineNumber: 96,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[#5a5a5a] uppercase text-xs font-bold",
                                                children: "From"
                                            }, void 0, false, {
                                                fileName: "[project]/app-analysis (4)/components/DataClassificationDetailsPanel.tsx",
                                                lineNumber: 101,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[#000000] font-bold mt-1",
                                                children: document.from
                                            }, void 0, false, {
                                                fileName: "[project]/app-analysis (4)/components/DataClassificationDetailsPanel.tsx",
                                                lineNumber: 102,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app-analysis (4)/components/DataClassificationDetailsPanel.tsx",
                                        lineNumber: 100,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[#5a5a5a] uppercase text-xs font-bold",
                                                children: "Type"
                                            }, void 0, false, {
                                                fileName: "[project]/app-analysis (4)/components/DataClassificationDetailsPanel.tsx",
                                                lineNumber: 105,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[#000000] font-bold mt-1",
                                                children: [
                                                    document.fileType,
                                                    " • ",
                                                    document.fileSize
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app-analysis (4)/components/DataClassificationDetailsPanel.tsx",
                                                lineNumber: 106,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app-analysis (4)/components/DataClassificationDetailsPanel.tsx",
                                        lineNumber: 104,
                                        columnNumber: 13
                                    }, this),
                                    document.shouldShareWith && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[#5a5a5a] uppercase text-xs font-bold",
                                                children: "Intended Recipient"
                                            }, void 0, false, {
                                                fileName: "[project]/app-analysis (4)/components/DataClassificationDetailsPanel.tsx",
                                                lineNumber: 110,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[#000000] font-bold mt-1",
                                                children: document.shouldShareWith
                                            }, void 0, false, {
                                                fileName: "[project]/app-analysis (4)/components/DataClassificationDetailsPanel.tsx",
                                                lineNumber: 111,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app-analysis (4)/components/DataClassificationDetailsPanel.tsx",
                                        lineNumber: 109,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app-analysis (4)/components/DataClassificationDetailsPanel.tsx",
                                lineNumber: 95,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app-analysis (4)/components/DataClassificationDetailsPanel.tsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-3 flex-1 overflow-y-auto",
                        children: classifications.map((classification)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    playClickSound();
                                    onClassify(classification.id);
                                },
                                className: `${classification.color} ${classification.borderColor} border-2 p-4 rounded transition-all flex items-start gap-3 text-left hover:opacity-90 active:scale-95 shadow-md hover:shadow-lg`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-shrink-0 mt-1",
                                        children: classification.icon
                                    }, void 0, false, {
                                        fileName: "[project]/app-analysis (4)/components/DataClassificationDetailsPanel.tsx",
                                        lineNumber: 128,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: `font-bold ${classification.textColor}`,
                                                children: classification.label
                                            }, void 0, false, {
                                                fileName: "[project]/app-analysis (4)/components/DataClassificationDetailsPanel.tsx",
                                                lineNumber: 130,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: `text-sm ${classification.textColor} opacity-90`,
                                                children: classification.description
                                            }, void 0, false, {
                                                fileName: "[project]/app-analysis (4)/components/DataClassificationDetailsPanel.tsx",
                                                lineNumber: 131,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app-analysis (4)/components/DataClassificationDetailsPanel.tsx",
                                        lineNumber: 129,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, classification.id, true, {
                                fileName: "[project]/app-analysis (4)/components/DataClassificationDetailsPanel.tsx",
                                lineNumber: 120,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app-analysis (4)/components/DataClassificationDetailsPanel.tsx",
                        lineNumber: 118,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app-analysis (4)/components/DataClassificationDetailsPanel.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app-analysis (4)/components/DataClassificationDetailsPanel.tsx",
        lineNumber: 78,
        columnNumber: 5
    }, this);
}
}),
"[project]/app-analysis (4)/components/DeskUI.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DeskUI
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-analysis (4)/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-analysis (4)/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/app-analysis (4)/node_modules/lucide-react/dist/esm/icons/message-square.mjs [app-ssr] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/app-analysis (4)/node_modules/lucide-react/dist/esm/icons/file-text.mjs [app-ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/app-analysis (4)/node_modules/lucide-react/dist/esm/icons/log-out.mjs [app-ssr] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__ = __turbopack_context__.i("[project]/app-analysis (4)/node_modules/lucide-react/dist/esm/icons/volume-2.mjs [app-ssr] (ecmascript) <export default as Volume2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__VolumeX$3e$__ = __turbopack_context__.i("[project]/app-analysis (4)/node_modules/lucide-react/dist/esm/icons/volume-x.mjs [app-ssr] (ecmascript) <export default as VolumeX>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$borderVariants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-analysis (4)/lib/borderVariants.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-analysis (4)/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$useClickSound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-analysis (4)/lib/useClickSound.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
function DeskUI({ progressPercentage, onEndDay, tasksCompleted = 0, isMuted = false, onToggleMute }) {
    const playClickSound = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$useClickSound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useClickSound"])();
    const [showHandbookModal, setShowHandbookModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showMessagesModal, setShowMessagesModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showNotesModal, setShowNotesModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#171b1d] to-[#1f1f1f] border-t border-[#444444] px-6 py-4 flex items-end justify-between gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    playClickSound();
                                    setShowHandbookModal(true);
                                },
                                className: "flex flex-col items-center gap-2 hover:opacity-80 transition-opacity",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative w-16 h-20 bg-[#c9a96e] rounded-sm border-2 border-[#8b7355] shadow-lg hover:shadow-xl transition-shadow",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 p-2 flex flex-col items-center justify-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-[10px] font-bold text-[#5d4e37] text-center leading-tight ui-font",
                                                    children: "EMPLOYEE"
                                                }, void 0, false, {
                                                    fileName: "[project]/app-analysis (4)/components/DeskUI.tsx",
                                                    lineNumber: 40,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-[9px] text-[#5d4e37] mt-1 ui-font",
                                                    children: "HANDBOOK"
                                                }, void 0, false, {
                                                    fileName: "[project]/app-analysis (4)/components/DeskUI.tsx",
                                                    lineNumber: 43,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-2 text-[20px]",
                                                    children: "📗"
                                                }, void 0, false, {
                                                    fileName: "[project]/app-analysis (4)/components/DeskUI.tsx",
                                                    lineNumber: 46,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app-analysis (4)/components/DeskUI.tsx",
                                            lineNumber: 39,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app-analysis (4)/components/DeskUI.tsx",
                                        lineNumber: 37,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[11px] text-muted-foreground ui-font whitespace-nowrap",
                                        children: "HANDBOOK"
                                    }, void 0, false, {
                                        fileName: "[project]/app-analysis (4)/components/DeskUI.tsx",
                                        lineNumber: 49,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app-analysis (4)/components/DeskUI.tsx",
                                lineNumber: 30,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-56 h-28 bg-[#171b1d] border border-[#444444] rounded-sm p-3 shadow-lg flex flex-col justify-between overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[10px] font-bold text-primary uppercase tracking-wider mb-2 ui-font",
                                                children: "Company Password Policy"
                                            }, void 0, false, {
                                                fileName: "[project]/app-analysis (4)/components/DeskUI.tsx",
                                                lineNumber: 57,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[8px] text-muted-foreground space-y-0.5 ui-font",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "line-clamp-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-primary",
                                                                children: "▸"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app-analysis (4)/components/DeskUI.tsx",
                                                                lineNumber: 62,
                                                                columnNumber: 19
                                                            }, this),
                                                            " Strong passwords are the first line of defense."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app-analysis (4)/components/DeskUI.tsx",
                                                        lineNumber: 61,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "line-clamp-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-primary",
                                                                children: "▸"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app-analysis (4)/components/DeskUI.tsx",
                                                                lineNumber: 65,
                                                                columnNumber: 19
                                                            }, this),
                                                            " Never approve weak or reused passwords."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app-analysis (4)/components/DeskUI.tsx",
                                                        lineNumber: 64,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app-analysis (4)/components/DeskUI.tsx",
                                                lineNumber: 60,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app-analysis (4)/components/DeskUI.tsx",
                                        lineNumber: 56,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "text-[10px] text-primary hover:underline ui-font uppercase tracking-wider text-left",
                                        children: "VIEW POLICY"
                                    }, void 0, false, {
                                        fileName: "[project]/app-analysis (4)/components/DeskUI.tsx",
                                        lineNumber: 69,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app-analysis (4)/components/DeskUI.tsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app-analysis (4)/components/DeskUI.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    playClickSound();
                                    setShowMessagesModal(true);
                                },
                                className: "relative flex flex-col items-center gap-1 px-4 py-2 bg-[#333333] border border-[#444444] rounded hover:bg-[#3a3a3a] transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/app-analysis (4)/components/DeskUI.tsx",
                                        lineNumber: 85,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] ui-font uppercase",
                                        children: "Messages"
                                    }, void 0, false, {
                                        fileName: "[project]/app-analysis (4)/components/DeskUI.tsx",
                                        lineNumber: 86,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "absolute -top-2 -right-2 w-5 h-5 bg-destructive rounded-full flex items-center justify-center text-[10px] font-bold",
                                        children: "2"
                                    }, void 0, false, {
                                        fileName: "[project]/app-analysis (4)/components/DeskUI.tsx",
                                        lineNumber: 87,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app-analysis (4)/components/DeskUI.tsx",
                                lineNumber: 78,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    playClickSound();
                                    setShowNotesModal(true);
                                },
                                className: "relative flex flex-col items-center gap-1 px-4 py-2 bg-[#333333] border border-[#444444] rounded hover:bg-[#3a3a3a] transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/app-analysis (4)/components/DeskUI.tsx",
                                        lineNumber: 100,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] ui-font uppercase",
                                        children: "Notes"
                                    }, void 0, false, {
                                        fileName: "[project]/app-analysis (4)/components/DeskUI.tsx",
                                        lineNumber: 101,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "absolute -top-2 -right-2 w-5 h-5 bg-muted rounded-full flex items-center justify-center text-[10px] font-bold text-background",
                                        children: "1"
                                    }, void 0, false, {
                                        fileName: "[project]/app-analysis (4)/components/DeskUI.tsx",
                                        lineNumber: 102,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app-analysis (4)/components/DeskUI.tsx",
                                lineNumber: 93,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app-analysis (4)/components/DeskUI.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-6 items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-4xl",
                                        children: "☕"
                                    }, void 0, false, {
                                        fileName: "[project]/app-analysis (4)/components/DeskUI.tsx",
                                        lineNumber: 112,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[9px] text-muted-foreground ui-font text-center",
                                        children: [
                                            "KAFKUNG",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/app-analysis (4)/components/DeskUI.tsx",
                                                lineNumber: 114,
                                                columnNumber: 22
                                            }, this),
                                            "IND."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app-analysis (4)/components/DeskUI.tsx",
                                        lineNumber: 113,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app-analysis (4)/components/DeskUI.tsx",
                                lineNumber: 111,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    playClickSound();
                                    onToggleMute?.();
                                },
                                className: "flex flex-col items-center gap-2 px-4 py-2 bg-[#333333] border border-[#444444] rounded hover:bg-[#3a3a3a] transition-colors",
                                children: [
                                    isMuted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__VolumeX$3e$__["VolumeX"], {
                                        className: "w-5 h-5 text-destructive"
                                    }, void 0, false, {
                                        fileName: "[project]/app-analysis (4)/components/DeskUI.tsx",
                                        lineNumber: 127,
                                        columnNumber: 15
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/app-analysis (4)/components/DeskUI.tsx",
                                        lineNumber: 129,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] ui-font uppercase",
                                        children: isMuted ? 'Muted' : 'Music'
                                    }, void 0, false, {
                                        fileName: "[project]/app-analysis (4)/components/DeskUI.tsx",
                                        lineNumber: 131,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app-analysis (4)/components/DeskUI.tsx",
                                lineNumber: 119,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    playClickSound();
                                    onEndDay?.();
                                },
                                className: "flex flex-col items-center gap-2 px-6 py-2 bg-gradient-to-b from-[#c9a96e] to-[#b8956e] text-[#171b1d] rounded hover:from-[#d4b896] hover:to-[#c9a96e] transition-all font-bold shadow-lg hover:shadow-xl border border-[#8b7355]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/app-analysis (4)/components/DeskUI.tsx",
                                        lineNumber: 142,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] ui-font uppercase tracking-wider",
                                        children: "End Day"
                                    }, void 0, false, {
                                        fileName: "[project]/app-analysis (4)/components/DeskUI.tsx",
                                        lineNumber: 143,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[9px] ui-font text-opacity-80",
                                        children: [
                                            tasksCompleted,
                                            "/4 TASKS"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app-analysis (4)/components/DeskUI.tsx",
                                        lineNumber: 144,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app-analysis (4)/components/DeskUI.tsx",
                                lineNumber: 135,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app-analysis (4)/components/DeskUI.tsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app-analysis (4)/components/DeskUI.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            showHandbookModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/50 flex items-center justify-center z-50 backdrop-blur-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('bg-card rounded-lg p-6 w-96 max-h-96 overflow-y-auto', (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$borderVariants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["borderVariants"])({
                        variant: 'emphasis'
                    })),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-center mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-lg font-bold",
                                    children: "Employee Handbook"
                                }, void 0, false, {
                                    fileName: "[project]/app-analysis (4)/components/DeskUI.tsx",
                                    lineNumber: 156,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        playClickSound();
                                        setShowHandbookModal(false);
                                    },
                                    className: "text-muted-foreground hover:text-foreground",
                                    children: "✕"
                                }, void 0, false, {
                                    fileName: "[project]/app-analysis (4)/components/DeskUI.tsx",
                                    lineNumber: 157,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app-analysis (4)/components/DeskUI.tsx",
                            lineNumber: 155,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-sm text-muted-foreground space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Company Policies:"
                                        }, void 0, false, {
                                            fileName: "[project]/app-analysis (4)/components/DeskUI.tsx",
                                            lineNumber: 169,
                                            columnNumber: 17
                                        }, this),
                                        " Review all company policies and security guidelines."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app-analysis (4)/components/DeskUI.tsx",
                                    lineNumber: 168,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Password Security:"
                                        }, void 0, false, {
                                            fileName: "[project]/app-analysis (4)/components/DeskUI.tsx",
                                            lineNumber: 172,
                                            columnNumber: 17
                                        }, this),
                                        " Maintain strong password standards across the organization."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app-analysis (4)/components/DeskUI.tsx",
                                    lineNumber: 171,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Email Safety:"
                                        }, void 0, false, {
                                            fileName: "[project]/app-analysis (4)/components/DeskUI.tsx",
                                            lineNumber: 175,
                                            columnNumber: 17
                                        }, this),
                                        " Always verify sender identity and be cautious with suspicious emails."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app-analysis (4)/components/DeskUI.tsx",
                                    lineNumber: 174,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Data Protection:"
                                        }, void 0, false, {
                                            fileName: "[project]/app-analysis (4)/components/DeskUI.tsx",
                                            lineNumber: 178,
                                            columnNumber: 17
                                        }, this),
                                        " Handle all data according to classification levels and compliance requirements."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app-analysis (4)/components/DeskUI.tsx",
                                    lineNumber: 177,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app-analysis (4)/components/DeskUI.tsx",
                            lineNumber: 167,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app-analysis (4)/components/DeskUI.tsx",
                    lineNumber: 154,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app-analysis (4)/components/DeskUI.tsx",
                lineNumber: 153,
                columnNumber: 9
            }, this),
            showMessagesModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/50 flex items-center justify-center z-50 backdrop-blur-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('bg-card rounded-lg p-6 w-96 max-h-96 overflow-y-auto', (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$borderVariants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["borderVariants"])({
                        variant: 'emphasis'
                    })),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-center mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-lg font-bold",
                                    children: "Messages"
                                }, void 0, false, {
                                    fileName: "[project]/app-analysis (4)/components/DeskUI.tsx",
                                    lineNumber: 189,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        playClickSound();
                                        setShowMessagesModal(false);
                                    },
                                    className: "text-muted-foreground hover:text-foreground",
                                    children: "✕"
                                }, void 0, false, {
                                    fileName: "[project]/app-analysis (4)/components/DeskUI.tsx",
                                    lineNumber: 190,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app-analysis (4)/components/DeskUI.tsx",
                            lineNumber: 188,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('p-3 bg-secondary/50 rounded', (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$borderVariants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["borderVariants"])({
                                        variant: 'divider'
                                    })),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-semibold",
                                            children: "Security Alert"
                                        }, void 0, false, {
                                            fileName: "[project]/app-analysis (4)/components/DeskUI.tsx",
                                            lineNumber: 202,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-muted-foreground mt-1",
                                            children: "New suspicious activity detected in today's email batch."
                                        }, void 0, false, {
                                            fileName: "[project]/app-analysis (4)/components/DeskUI.tsx",
                                            lineNumber: 203,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app-analysis (4)/components/DeskUI.tsx",
                                    lineNumber: 201,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('p-3 bg-secondary/50 rounded', (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$borderVariants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["borderVariants"])({
                                        variant: 'divider'
                                    })),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-semibold",
                                            children: "Task Update"
                                        }, void 0, false, {
                                            fileName: "[project]/app-analysis (4)/components/DeskUI.tsx",
                                            lineNumber: 208,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-muted-foreground mt-1",
                                            children: "You have 1 more password strength assessment to complete."
                                        }, void 0, false, {
                                            fileName: "[project]/app-analysis (4)/components/DeskUI.tsx",
                                            lineNumber: 209,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app-analysis (4)/components/DeskUI.tsx",
                                    lineNumber: 207,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app-analysis (4)/components/DeskUI.tsx",
                            lineNumber: 200,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app-analysis (4)/components/DeskUI.tsx",
                    lineNumber: 187,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app-analysis (4)/components/DeskUI.tsx",
                lineNumber: 186,
                columnNumber: 9
            }, this),
            showNotesModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/50 flex items-center justify-center z-50 backdrop-blur-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('bg-card rounded-lg p-6 w-96 max-h-96 overflow-y-auto', (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$borderVariants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["borderVariants"])({
                        variant: 'emphasis'
                    })),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-center mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-lg font-bold",
                                    children: "Notes"
                                }, void 0, false, {
                                    fileName: "[project]/app-analysis (4)/components/DeskUI.tsx",
                                    lineNumber: 222,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        playClickSound();
                                        setShowNotesModal(false);
                                    },
                                    className: "text-muted-foreground hover:text-foreground",
                                    children: "✕"
                                }, void 0, false, {
                                    fileName: "[project]/app-analysis (4)/components/DeskUI.tsx",
                                    lineNumber: 223,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app-analysis (4)/components/DeskUI.tsx",
                            lineNumber: 221,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3 bg-secondary/50 rounded border border-border",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-muted-foreground",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Investigation Tip:"
                                        }, void 0, false, {
                                            fileName: "[project]/app-analysis (4)/components/DeskUI.tsx",
                                            lineNumber: 236,
                                            columnNumber: 19
                                        }, this),
                                        " Always verify sender email address and check for subtle phishing indicators."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app-analysis (4)/components/DeskUI.tsx",
                                    lineNumber: 235,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app-analysis (4)/components/DeskUI.tsx",
                                lineNumber: 234,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app-analysis (4)/components/DeskUI.tsx",
                            lineNumber: 233,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app-analysis (4)/components/DeskUI.tsx",
                    lineNumber: 220,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app-analysis (4)/components/DeskUI.tsx",
                lineNumber: 219,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/app-analysis (4)/lib/useChatSound.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useChatSound",
    ()=>useChatSound
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-analysis (4)/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
function useChatSound() {
    const audioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        try {
            if (!audioRef.current) {
                audioRef.current = new Audio('/SFX/chat-bubble.mp3');
                audioRef.current.volume = 0.4;
            }
            // Reset and play
            audioRef.current.currentTime = 0;
            audioRef.current.play().catch(()=>{
            // Silently fail if autoplay is restricted
            });
        } catch (error) {
        // Silently fail
        }
    }, []);
}
}),
"[project]/app-analysis (4)/components/ContactModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ContactModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-analysis (4)/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-analysis (4)/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/app-analysis (4)/node_modules/lucide-react/dist/esm/icons/x.mjs [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$useClickSound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-analysis (4)/lib/useClickSound.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$useChatSound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-analysis (4)/lib/useChatSound.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$borderVariants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-analysis (4)/lib/borderVariants.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-analysis (4)/lib/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
function ContactModal({ contacts, onClose }) {
    const playClickSound = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$useClickSound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useClickSound"])();
    const playChatSound = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$useChatSound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useChatSound"])();
    const [selectedContactId, setSelectedContactId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isContactTyping, setIsContactTyping] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const messagesEndRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const selectedContact = contacts.find((c)=>c.id === selectedContactId);
    const scrollToBottom = ()=>{
        messagesEndRef.current?.scrollIntoView({
            behavior: 'smooth'
        });
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        scrollToBottom();
    }, [
        messages,
        isContactTyping
    ]);
    const getIconForContact = (id)=>{
        switch(id){
            case 'it':
                return '💻';
            case 'supervisor':
                return '👤';
            case 'hr':
                return '💼';
            case 'finance':
                return '$';
            case 'sender':
                return '📞';
            default:
                return '📞';
        }
    };
    const getResponseMessage = (contact)=>{
        const responses = {
            it: `We haven't received any suspicious links or attachments reported today. All systems are running normally. If you need further assistance with email security, please submit a ticket with details about the suspicious message.`,
            supervisor: `I don't recall authorizing any unusual work requests today. If you've received a request asking you to handle something outside your normal duties, please verify it with me directly before proceeding.`,
            hr: `We have not sent any urgent communications today. If you received an email claiming to be from HR asking for personal information or passwords, please disregard it and report it to our security team immediately.`,
            finance: `We haven't requested any invoice payments today. If you received a payment request claiming to be from Finance, verify it through our official system before processing anything.`,
            sender: `Unable to reach the sender at this time. If you're unable to verify the sender through alternative channels, the email should be treated as suspicious.`
        };
        return responses[contact.id] || 'Contact was unable to provide information at this time.';
    };
    const handleSelectContact = (contactId)=>{
        setSelectedContactId(contactId);
        setMessages([]);
    };
    const handleVerifyClick = async ()=>{
        if (!selectedContact) return;
        // Add user's verify message
        const userMessage = {
            role: 'user',
            content: 'Verify'
        };
        setMessages((prev)=>[
                ...prev,
                userMessage
            ]);
        // Show typing animation
        setIsContactTyping(true);
        // Simulate typing delay
        await new Promise((resolve)=>setTimeout(resolve, 1500));
        // Add contact response
        const contactResponse = {
            role: 'contact',
            content: getResponseMessage(selectedContact)
        };
        setMessages((prev)=>[
                ...prev,
                contactResponse
            ]);
        playChatSound();
        setIsContactTyping(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black/70 flex items-center justify-center z-40 backdrop-blur-sm",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('bg-[#1a1e21] border-2 border-[#2d3139] rounded-lg w-11/12 max-w-4xl h-3/4 flex flex-col overflow-hidden', (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$borderVariants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["borderVariants"])({
                variant: 'emphasis'
            })),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('bg-[#1a1e21] border-b border-[#2d3139] px-6 py-4 flex items-center justify-between', (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$borderVariants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["borderVariants"])({
                        variant: 'divider'
                    })),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-xl font-bold text-muted-foreground tracking-wider uppercase",
                            children: "Contact"
                        }, void 0, false, {
                            fileName: "[project]/app-analysis (4)/components/ContactModal.tsx",
                            lineNumber: 104,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                playClickSound();
                                onClose();
                            },
                            className: "text-muted-foreground hover:text-foreground transition-colors",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 24
                            }, void 0, false, {
                                fileName: "[project]/app-analysis (4)/components/ContactModal.tsx",
                                lineNumber: 114,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app-analysis (4)/components/ContactModal.tsx",
                            lineNumber: 107,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app-analysis (4)/components/ContactModal.tsx",
                    lineNumber: 103,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex flex-1 overflow-hidden m-1 rounded bg-[#0f1215]'),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-1/3 border-r border-r-[#2d3139] bg-[#1a1e21] overflow-y-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-4 border-b border-b-[#2d3139] sticky top-0 bg-[#1a1e21] z-10",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xs font-bold text-[#8b96a6] tracking-widest uppercase",
                                        children: "Trusted Contacts"
                                    }, void 0, false, {
                                        fileName: "[project]/app-analysis (4)/components/ContactModal.tsx",
                                        lineNumber: 123,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app-analysis (4)/components/ContactModal.tsx",
                                    lineNumber: 122,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-2 space-y-2",
                                    children: contacts.map((contact)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                playClickSound();
                                                handleSelectContact(contact.id);
                                            },
                                            className: `w-full flex items-center gap-3 p-3 rounded transition-colors text-left ${selectedContactId === contact.id ? 'bg-[#2a3038] border border-[#4a5568]' : 'bg-[#1f2329] border border-[#2d3139] hover:bg-[#252c34]'}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xl",
                                                    children: getIconForContact(contact.id)
                                                }, void 0, false, {
                                                    fileName: "[project]/app-analysis (4)/components/ContactModal.tsx",
                                                    lineNumber: 141,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "min-w-0 flex-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm font-medium text-[#e0e4eb] truncate",
                                                            children: contact.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/app-analysis (4)/components/ContactModal.tsx",
                                                            lineNumber: 143,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-[#8b96a6] truncate",
                                                            children: contact.role
                                                        }, void 0, false, {
                                                            fileName: "[project]/app-analysis (4)/components/ContactModal.tsx",
                                                            lineNumber: 146,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app-analysis (4)/components/ContactModal.tsx",
                                                    lineNumber: 142,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, contact.id, true, {
                                            fileName: "[project]/app-analysis (4)/components/ContactModal.tsx",
                                            lineNumber: 129,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app-analysis (4)/components/ContactModal.tsx",
                                    lineNumber: 127,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app-analysis (4)/components/ContactModal.tsx",
                            lineNumber: 121,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-2/3 bg-[#0f1215] flex flex-col overflow-hidden",
                            children: selectedContact ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border-b border-b-[#2d3139] p-4 bg-[#1a1e21]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-sm font-bold text-[#e0e4eb] tracking-widest uppercase",
                                            children: selectedContact.name
                                        }, void 0, false, {
                                            fileName: "[project]/app-analysis (4)/components/ContactModal.tsx",
                                            lineNumber: 161,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app-analysis (4)/components/ContactModal.tsx",
                                        lineNumber: 160,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 overflow-y-auto p-4 space-y-4",
                                        children: [
                                            messages.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-center h-full",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-[#8b96a6] text-center",
                                                    children: "Select a contact and click verify to start chatting"
                                                }, void 0, false, {
                                                    fileName: "[project]/app-analysis (4)/components/ContactModal.tsx",
                                                    lineNumber: 170,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app-analysis (4)/components/ContactModal.tsx",
                                                lineNumber: 169,
                                                columnNumber: 21
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    messages.map((msg, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `max-w-xs px-4 py-2 rounded-lg ${msg.role === 'user' ? 'bg-[#4CAF50] text-white' : 'bg-[#2a3038] text-[#e0e4eb] border border-[#3d4655]'}`,
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm leading-relaxed",
                                                                    children: msg.content
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app-analysis (4)/components/ContactModal.tsx",
                                                                    lineNumber: 190,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app-analysis (4)/components/ContactModal.tsx",
                                                                lineNumber: 183,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, idx, false, {
                                                            fileName: "[project]/app-analysis (4)/components/ContactModal.tsx",
                                                            lineNumber: 177,
                                                            columnNumber: 25
                                                        }, this)),
                                                    isContactTyping && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-start",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-[#2a3038] text-[#e0e4eb] px-4 py-2 rounded-lg border border-[#3d4655]",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "w-2 h-2 bg-[#8b96a6] rounded-full animate-bounce"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app-analysis (4)/components/ContactModal.tsx",
                                                                        lineNumber: 198,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "w-2 h-2 bg-[#8b96a6] rounded-full animate-bounce delay-100"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app-analysis (4)/components/ContactModal.tsx",
                                                                        lineNumber: 199,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "w-2 h-2 bg-[#8b96a6] rounded-full animate-bounce delay-200"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app-analysis (4)/components/ContactModal.tsx",
                                                                        lineNumber: 200,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app-analysis (4)/components/ContactModal.tsx",
                                                                lineNumber: 197,
                                                                columnNumber: 29
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app-analysis (4)/components/ContactModal.tsx",
                                                            lineNumber: 196,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app-analysis (4)/components/ContactModal.tsx",
                                                        lineNumber: 195,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                ref: messagesEndRef
                                            }, void 0, false, {
                                                fileName: "[project]/app-analysis (4)/components/ContactModal.tsx",
                                                lineNumber: 207,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app-analysis (4)/components/ContactModal.tsx",
                                        lineNumber: 167,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border-t border-t-[#2d3139] p-4 bg-[#1a1e21]",
                                        children: messages.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                playClickSound();
                                                handleVerifyClick();
                                            },
                                            className: "w-full py-3 px-4 rounded font-bold text-sm uppercase tracking-wide transition-all bg-[#4CAF50] text-white hover:bg-[#45a049] active:scale-95",
                                            children: "Verify"
                                        }, void 0, false, {
                                            fileName: "[project]/app-analysis (4)/components/ContactModal.tsx",
                                            lineNumber: 213,
                                            columnNumber: 21
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-[#8b96a6] text-center",
                                            children: [
                                                "Conversation with ",
                                                selectedContact.name
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app-analysis (4)/components/ContactModal.tsx",
                                            lineNumber: 223,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app-analysis (4)/components/ContactModal.tsx",
                                        lineNumber: 211,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-[#8b96a6]",
                                    children: "Select a contact to start chatting"
                                }, void 0, false, {
                                    fileName: "[project]/app-analysis (4)/components/ContactModal.tsx",
                                    lineNumber: 231,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app-analysis (4)/components/ContactModal.tsx",
                                lineNumber: 230,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app-analysis (4)/components/ContactModal.tsx",
                            lineNumber: 156,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app-analysis (4)/components/ContactModal.tsx",
                    lineNumber: 119,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app-analysis (4)/components/ContactModal.tsx",
            lineNumber: 101,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app-analysis (4)/components/ContactModal.tsx",
        lineNumber: 100,
        columnNumber: 5
    }, this);
}
}),
"[project]/app-analysis (4)/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-analysis (4)/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-analysis (4)/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-analysis (4)/node_modules/dayjs/dayjs.min.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$mockEmails$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-analysis (4)/lib/mockEmails.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$mockPasswords$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-analysis (4)/lib/mockPasswords.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$mockDataClassification$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-analysis (4)/lib/mockDataClassification.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$gameHelpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-analysis (4)/lib/gameHelpers.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$useCorrectAnswerSound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-analysis (4)/lib/useCorrectAnswerSound.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$useWrongAnswerSound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-analysis (4)/lib/useWrongAnswerSound.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$useTaskNotificationSound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-analysis (4)/lib/useTaskNotificationSound.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$useBackgroundMusic$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-analysis (4)/lib/useBackgroundMusic.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$components$2f$Header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-analysis (4)/components/Header.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$components$2f$CompanyCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-analysis (4)/components/CompanyCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$components$2f$TasksPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-analysis (4)/components/TasksPanel.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$components$2f$ProgressPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-analysis (4)/components/ProgressPanel.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$components$2f$DispatchQueueView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-analysis (4)/components/DispatchQueueView.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$components$2f$TaskDetailsPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-analysis (4)/components/TaskDetailsPanel.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$components$2f$EmailInvestigation$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-analysis (4)/components/EmailInvestigation.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$components$2f$InvestigationPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-analysis (4)/components/InvestigationPanel.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$components$2f$DecisionModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-analysis (4)/components/DecisionModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$components$2f$FeedbackModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-analysis (4)/components/FeedbackModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$components$2f$PasswordFeedbackModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-analysis (4)/components/PasswordFeedbackModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$components$2f$DataClassificationFeedbackModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-analysis (4)/components/DataClassificationFeedbackModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$components$2f$PasswordStrengthTask$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-analysis (4)/components/PasswordStrengthTask.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$components$2f$PasswordDecisionPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-analysis (4)/components/PasswordDecisionPanel.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$components$2f$DataClassificationTask$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-analysis (4)/components/DataClassificationTask.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$components$2f$PasswordPolicyPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-analysis (4)/components/PasswordPolicyPanel.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$components$2f$DataClassificationDetailsPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-analysis (4)/components/DataClassificationDetailsPanel.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$components$2f$DeskUI$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-analysis (4)/components/DeskUI.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$components$2f$ContactModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-analysis (4)/components/ContactModal.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function Home() {
    const playCorrectSound = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$useCorrectAnswerSound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCorrectAnswerSound"])();
    const playWrongSound = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$useWrongAnswerSound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWrongAnswerSound"])();
    const playTaskNotificationSound = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$useTaskNotificationSound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTaskNotificationSound"])();
    const { isMuted, toggleMute } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$useBackgroundMusic$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBackgroundMusic"])();
    const [currentTime, setCurrentTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [gameState, setGameState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
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
        dispatchQueue: []
    });
    const [checkedPasswordCharacteristics, setCheckedPasswordCharacteristics] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [showHandbook, setShowHandbook] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [investigationList, setInvestigationList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([
        {
            id: 'profile',
            label: 'Profile',
            description: 'Verify sender identity and domain legitimacy',
            checked: false,
            hasEvidence: true
        },
        {
            id: 'link',
            label: 'Link',
            description: 'Analyze URLs and check for suspicious redirects',
            checked: false,
            hasEvidence: true
        },
        {
            id: 'file',
            label: 'File',
            description: 'Examine attachments for malware and threats',
            checked: false,
            hasEvidence: true
        },
        {
            id: 'language',
            label: 'Language',
            description: 'Detect unusual grammar and phishing patterns',
            checked: false,
            hasEvidence: true
        },
        {
            id: 'context',
            label: 'Context',
            description: 'Review urgency and legitimacy of request',
            checked: false,
            hasEvidence: true
        },
        {
            id: 'request',
            label: 'Request',
            description: 'Evaluate unusual access or permission demands',
            checked: false,
            hasEvidence: true
        }
    ]);
    const [showDecisionModal, setShowDecisionModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showFeedback, setShowFeedback] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [lastDecision, setLastDecision] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showPasswordFeedback, setShowPasswordFeedback] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [lastPasswordDecision, setLastPasswordDecision] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showDataClassificationFeedback, setShowDataClassificationFeedback] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [lastDataClassificationDecision, setLastDataClassificationDecision] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showContactModal, setShowContactModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [notificationCount, setNotificationCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [showDispatchQueue, setShowDispatchQueue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedQueueItemId, setSelectedQueueItemId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const incidentGeneratorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const usedIncidentsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(new Set());
    // Update time every minute (client-side only to avoid hydration mismatch)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const updateTime = ()=>{
            const now = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
            setCurrentTime(`DAY ${now.date().toString().padStart(2, '0')} • ${now.format('hh:mm A')}`);
        };
        // Set initial time immediately on first render
        updateTime();
        // Then update every minute
        const interval = setInterval(updateTime, 60000);
        return ()=>clearInterval(interval);
    }, []);
    // Incident generation timer - generates new tasks every 3-10 seconds
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const scheduleNextIncident = ()=>{
            const delay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$gameHelpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRandomDelay"])(3000, 10000);
            incidentGeneratorRef.current = setTimeout(()=>{
                // Only generate if we haven't generated 15 tasks total for the day
                if (gameState.tasksGeneratedToday < 15) {
                    const incident = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$gameHelpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateRandomIncident"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$mockEmails$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockEmails"], __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$mockPasswords$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockPasswords"], __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$mockDataClassification$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockDataClassifications"], usedIncidentsRef.current);
                    if (incident) {
                        console.log('[v0] New incident generated:', incident);
                        playTaskNotificationSound();
                        usedIncidentsRef.current.add(incident.id);
                        setGameState((prev)=>({
                                ...prev,
                                tasksGeneratedToday: prev.tasksGeneratedToday + 1,
                                dispatchQueue: [
                                    ...prev.dispatchQueue,
                                    {
                                        type: incident.type,
                                        id: incident.id,
                                        timestamp: Date.now(),
                                        payload: incident.payload
                                    }
                                ]
                            }));
                        setNotificationCount((prev)=>prev + 1);
                    }
                }
                // Schedule next incident
                scheduleNextIncident();
            }, delay);
        };
        scheduleNextIncident();
        return ()=>{
            if (incidentGeneratorRef.current) {
                clearTimeout(incidentGeneratorRef.current);
            }
        };
    }, [
        gameState.tasksGeneratedToday
    ]);
    // Auto-select first available task when tasks are added or task type changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const emailTasks = gameState.dispatchQueue.filter((item)=>item.type === 'email');
        const passwordTasks = gameState.dispatchQueue.filter((item)=>item.type === 'password');
        const dataTasks = gameState.dispatchQueue.filter((item)=>item.type === 'data-classification');
        setGameState((prev)=>{
            let updated = false;
            const newState = {
                ...prev
            };
            // Auto-select first email if current one doesn't exist in queue
            if (gameState.currentTaskType === 'email' && emailTasks.length > 0) {
                const emailExists = emailTasks.some((item)=>item.id === prev.currentEmailId);
                if (!emailExists) {
                    newState.currentEmailId = emailTasks[0].id;
                    updated = true;
                }
            }
            // Auto-select first password if current one doesn't exist in queue
            if (gameState.currentTaskType === 'password' && passwordTasks.length > 0) {
                const passwordExists = passwordTasks.some((item)=>item.id === prev.currentPasswordId);
                if (!passwordExists) {
                    newState.currentPasswordId = passwordTasks[0].id;
                    updated = true;
                }
            }
            // Auto-select first document if current one doesn't exist in queue
            if (gameState.currentTaskType === 'data-classification' && dataTasks.length > 0) {
                const docExists = dataTasks.some((item)=>item.id === prev.currentDocumentId);
                if (!docExists) {
                    newState.currentDocumentId = dataTasks[0].id;
                    updated = true;
                }
            }
            return updated ? newState : prev;
        });
    }, [
        gameState.dispatchQueue,
        gameState.currentTaskType
    ]);
    // Initialize currentTime with a placeholder to prevent hydration mismatch
    const displayTime = currentTime || 'DAY -- • --:-- --';
    const currentEmail = gameState.dispatchQueue.find((item)=>item.id === gameState.currentEmailId && item.type === 'email')?.payload;
    const handleSelectEmail = (emailId)=>{
        setGameState((prev)=>({
                ...prev,
                currentEmailId: emailId,
                investigatedCategories: new Set(),
                decision: null
            }));
        setInvestigationList((prev)=>prev.map((item)=>({
                    ...item,
                    checked: false
                })));
        setShowDecisionModal(false);
        setNotificationCount(0); // Reset notification when viewing an incident
    };
    const handleInvestigate = (categoryId)=>{
        setGameState((prev)=>({
                ...prev,
                investigatedCategories: new Set([
                    ...prev.investigatedCategories,
                    categoryId
                ])
            }));
        setInvestigationList((prev)=>prev.map((item)=>item.id === categoryId ? {
                    ...item,
                    checked: true
                } : item));
    };
    const handleCheckboxChange = (categoryId)=>{
        const isCurrentlyChecked = investigationList.find((item)=>item.id === categoryId)?.checked;
        setInvestigationList((prev)=>prev.map((item)=>item.id === categoryId ? {
                    ...item,
                    checked: !item.checked
                } : item));
        // Update investigation tracking based on checkbox state
        if (!isCurrentlyChecked) {
            // Checking: add to investigated categories
            setGameState((prev)=>({
                    ...prev,
                    investigatedCategories: new Set([
                        ...prev.investigatedCategories,
                        categoryId
                    ])
                }));
        } else {
            // Unchecking: remove from investigated categories
            const newInvestigated = new Set(gameState.investigatedCategories);
            newInvestigated.delete(categoryId);
            setGameState((prev)=>({
                    ...prev,
                    investigatedCategories: newInvestigated
                }));
        }
    };
    const handleMakeDecision = (decision)=>{
        let progressIncrease = 0;
        if (currentEmail) {
            const isCorrect = decision === 'phishing' && !currentEmail.isLegitimate || decision === 'legitimate' && currentEmail.isLegitimate;
            if (isCorrect) {
                playCorrectSound();
                // EXP multiplier based on investigation list completion
                const checkedCount = investigationList.filter((item)=>item.checked).length;
                const totalCount = investigationList.length;
                const completionRatio = checkedCount / totalCount;
                // Full reward (5%) if 50%+ investigated, reduced if less
                if (completionRatio >= 0.5) {
                    progressIncrease = 5;
                } else if (completionRatio > 0) {
                    progressIncrease = 2;
                } else {
                    // Guessed without any investigation
                    progressIncrease = 1;
                }
            } else {
                playWrongSound();
            }
        }
        setGameState((prev)=>({
                ...prev,
                decision,
                graduationProgress: Math.min(100, prev.graduationProgress + progressIncrease)
            }));
        setLastDecision(decision);
        setShowDecisionModal(false);
        setShowFeedback(true);
    };
    const handleContinueAfterFeedback = ()=>{
        setShowFeedback(false);
        setLastDecision(null);
        // Remove completed email from dispatch queue and increment tasks completed
        const completedEmailId = gameState.currentEmailId;
        setGameState((prev)=>{
            const updatedQueue = prev.dispatchQueue.filter((item)=>item.id !== completedEmailId);
            const remainingEmails = updatedQueue.filter((item)=>item.type === 'email');
            const nextEmailId = remainingEmails.length > 0 ? remainingEmails[0].id : null;
            return {
                ...prev,
                todaysTasksCompleted: prev.todaysTasksCompleted + 1,
                dispatchQueue: updatedQueue,
                currentEmailId: nextEmailId
            };
        });
    };
    const handleTogglePasswordCharacteristic = (id)=>{
        setCheckedPasswordCharacteristics((prev)=>{
            const newSet = new Set(prev);
            if (newSet.has(id)) {
                newSet.delete(id);
            } else {
                newSet.add(id);
            }
            return newSet;
        });
    };
    const handlePasswordDecision = (decision)=>{
        let progressIncrease = 0;
        const currentPassword = __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$mockPasswords$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockPasswords"].find((p)=>p.id === gameState.currentPasswordId);
        if (currentPassword) {
            const isCorrect = decision === currentPassword.correctDecision;
            if (isCorrect) {
                playCorrectSound();
                progressIncrease = 5;
            } else {
                playWrongSound();
            }
        }
        setLastPasswordDecision(decision);
        setShowPasswordFeedback(true);
        // Update progress immediately
        setGameState((prev)=>({
                ...prev,
                graduationProgress: Math.min(100, prev.graduationProgress + progressIncrease)
            }));
    };
    const handleContinueAfterPasswordFeedback = ()=>{
        setShowPasswordFeedback(false);
        setLastPasswordDecision(null);
        setCheckedPasswordCharacteristics(new Set());
        // Remove completed password from dispatch queue and increment tasks completed
        const completedPasswordId = gameState.currentPasswordId;
        setGameState((prev)=>{
            const updatedQueue = prev.dispatchQueue.filter((item)=>item.id !== completedPasswordId);
            const remainingPasswords = updatedQueue.filter((item)=>item.type === 'password');
            return {
                ...prev,
                todaysTasksCompleted: prev.todaysTasksCompleted + 1,
                dispatchQueue: updatedQueue,
                currentPasswordId: remainingPasswords.length > 0 ? remainingPasswords[0].id : 'pwd-1'
            };
        });
    };
    const handleDataClassification = (classification)=>{
        let progressIncrease = 0;
        const currentDocument = __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$mockDataClassification$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockDataClassifications"].find((d)=>d.id === gameState.currentDocumentId);
        if (currentDocument) {
            const isCorrect = classification === currentDocument.correctClassification;
            if (isCorrect) {
                playCorrectSound();
                progressIncrease = 5;
            } else {
                playWrongSound();
            }
        }
        setLastDataClassificationDecision(classification);
        setShowDataClassificationFeedback(true);
        // Update progress immediately
        setGameState((prev)=>({
                ...prev,
                graduationProgress: Math.min(100, prev.graduationProgress + progressIncrease)
            }));
    };
    const handleContinueAfterDataClassificationFeedback = ()=>{
        setShowDataClassificationFeedback(false);
        setLastDataClassificationDecision(null);
        // Remove completed document from dispatch queue and increment tasks completed
        const completedDocumentId = gameState.currentDocumentId;
        setGameState((prev)=>{
            const updatedQueue = prev.dispatchQueue.filter((item)=>item.id !== completedDocumentId);
            const remainingDocuments = updatedQueue.filter((item)=>item.type === 'data-classification');
            return {
                ...prev,
                todaysTasksCompleted: prev.todaysTasksCompleted + 1,
                dispatchQueue: updatedQueue,
                currentDocumentId: remainingDocuments.length > 0 ? remainingDocuments[0].id : 'doc-1'
            };
        });
    };
    const handleSelectTask = (taskType)=>{
        setGameState((prev)=>({
                ...prev,
                currentTaskType: taskType
            }));
        setShowDispatchQueue(false);
    };
    const handleEndDay = ()=>{
        console.log('[v0] End Day triggered');
        // Reset daily state while preserving graduation progress
        setGameState((prev)=>({
                ...prev,
                day: prev.day + 1,
                todaysTasksCompleted: 0,
                tasksGeneratedToday: 0,
                dispatchQueue: [],
                currentEmailId: 'email-1',
                currentPasswordId: 'pwd-1',
                currentDocumentId: 'doc-1',
                investigatedCategories: new Set(),
                decision: null
            }));
        usedIncidentsRef.current.clear();
        setNotificationCount(0);
        // Reset investigation list
        setInvestigationList((prev)=>prev.map((item)=>({
                    ...item,
                    checked: false
                })));
        // Reset other state
        setShowFeedback(false);
        setShowDecisionModal(false);
        setLastDecision(null);
        setShowPasswordFeedback(false);
        setLastPasswordDecision(null);
        setShowDataClassificationFeedback(false);
        setLastDataClassificationDecision(null);
        setCheckedPasswordCharacteristics(new Set());
        console.log('[v0] New day started');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-screen bg-background text-foreground flex flex-col overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$components$2f$Header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                currentTime: displayTime,
                graduationProgress: gameState.graduationProgress
            }, void 0, false, {
                fileName: "[project]/app-analysis (4)/app/page.tsx",
                lineNumber: 455,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex gap-2 p-4 pb-44 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-72 flex flex-col gap-2 flex-shrink-0 overflow-y-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$components$2f$CompanyCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                companyName: "KAKFUNG INDUSTRIES",
                                department: "OPERATIONS",
                                role: "Associate"
                            }, void 0, false, {
                                fileName: "[project]/app-analysis (4)/app/page.tsx",
                                lineNumber: 461,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$components$2f$TasksPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                currentTaskType: gameState.currentTaskType,
                                onSelectTask: handleSelectTask,
                                dispatchQueue: gameState.dispatchQueue
                            }, void 0, false, {
                                fileName: "[project]/app-analysis (4)/app/page.tsx",
                                lineNumber: 466,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setShowDispatchQueue(true);
                                    setGameState((prev)=>({
                                            ...prev,
                                            currentTaskType: null
                                        }));
                                },
                                className: `py-3 px-4 rounded font-bold text-base transition-colors uppercase tracking-wider flex-shrink-0 border ${showDispatchQueue ? 'bg-[#171b1d] border-[#3a3f42] text-muted-foreground hover:opacity-90' : 'bg-[#171b1d] border-[#3a3f42] text-muted-foreground hover:opacity-75'}`,
                                children: "View Queue"
                            }, void 0, false, {
                                fileName: "[project]/app-analysis (4)/app/page.tsx",
                                lineNumber: 471,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$components$2f$ProgressPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                tasksCompleted: gameState.todaysTasksCompleted,
                                tasksTotal: 15
                            }, void 0, false, {
                                fileName: "[project]/app-analysis (4)/app/page.tsx",
                                lineNumber: 484,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app-analysis (4)/app/page.tsx",
                        lineNumber: 460,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-hidden",
                        children: showDispatchQueue ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$components$2f$DispatchQueueView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            queue: gameState.dispatchQueue,
                            selectedQueueId: selectedQueueItemId,
                            onSelectQueue: setSelectedQueueItemId
                        }, void 0, false, {
                            fileName: "[project]/app-analysis (4)/app/page.tsx",
                            lineNumber: 493,
                            columnNumber: 13
                        }, this) : gameState.currentTaskType === 'email' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$components$2f$EmailInvestigation$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            emails: gameState.dispatchQueue.filter((item)=>item.type === 'email').map((item)=>item.payload),
                            selectedEmailId: gameState.currentEmailId,
                            currentEmail: currentEmail,
                            onSelectEmail: handleSelectEmail,
                            onInvestigate: handleInvestigate,
                            investigatedCategories: gameState.investigatedCategories
                        }, void 0, false, {
                            fileName: "[project]/app-analysis (4)/app/page.tsx",
                            lineNumber: 499,
                            columnNumber: 13
                        }, this) : gameState.currentTaskType === 'password' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-4 h-full overflow-hidden",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$components$2f$PasswordStrengthTask$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    password: gameState.dispatchQueue.find((item)=>item.id === gameState.currentPasswordId && item.type === 'password')?.payload,
                                    checkedCharacteristics: checkedPasswordCharacteristics,
                                    onToggleCharacteristic: handleTogglePasswordCharacteristic
                                }, void 0, false, {
                                    fileName: "[project]/app-analysis (4)/app/page.tsx",
                                    lineNumber: 512,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$components$2f$PasswordDecisionPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    onMakeDecision: handlePasswordDecision
                                }, void 0, false, {
                                    fileName: "[project]/app-analysis (4)/app/page.tsx",
                                    lineNumber: 521,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app-analysis (4)/app/page.tsx",
                            lineNumber: 511,
                            columnNumber: 13
                        }, this) : gameState.currentTaskType === 'data-classification' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$components$2f$DataClassificationTask$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            document: gameState.dispatchQueue.find((item)=>item.id === gameState.currentDocumentId && item.type === 'data-classification')?.payload,
                            onClassify: handleDataClassification
                        }, void 0, false, {
                            fileName: "[project]/app-analysis (4)/app/page.tsx",
                            lineNumber: 524,
                            columnNumber: 13
                        }, this) : null
                    }, void 0, false, {
                        fileName: "[project]/app-analysis (4)/app/page.tsx",
                        lineNumber: 491,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-80 overflow-y-auto flex-shrink-0",
                        children: showDispatchQueue ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$components$2f$TaskDetailsPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            selectedQueueItem: gameState.dispatchQueue.find((q)=>q.id === selectedQueueItemId) || null
                        }, void 0, false, {
                            fileName: "[project]/app-analysis (4)/app/page.tsx",
                            lineNumber: 538,
                            columnNumber: 13
                        }, this) : gameState.currentTaskType === 'email' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$components$2f$InvestigationPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            investigationList: investigationList,
                            onMakeDecision: ()=>setShowDecisionModal(true),
                            onCheckboxChange: handleCheckboxChange,
                            onVerify: ()=>setShowContactModal(true)
                        }, void 0, false, {
                            fileName: "[project]/app-analysis (4)/app/page.tsx",
                            lineNumber: 540,
                            columnNumber: 13
                        }, this) : gameState.currentTaskType === 'password' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$components$2f$PasswordPolicyPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/app-analysis (4)/app/page.tsx",
                            lineNumber: 547,
                            columnNumber: 13
                        }, this) : gameState.currentTaskType === 'data-classification' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$components$2f$DataClassificationDetailsPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            document: gameState.dispatchQueue.find((item)=>item.id === gameState.currentDocumentId && item.type === 'data-classification')?.payload,
                            onClassify: handleDataClassification
                        }, void 0, false, {
                            fileName: "[project]/app-analysis (4)/app/page.tsx",
                            lineNumber: 549,
                            columnNumber: 13
                        }, this) : null
                    }, void 0, false, {
                        fileName: "[project]/app-analysis (4)/app/page.tsx",
                        lineNumber: 536,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app-analysis (4)/app/page.tsx",
                lineNumber: 458,
                columnNumber: 7
            }, this),
            showDecisionModal && currentEmail && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$components$2f$DecisionModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                email: currentEmail,
                onDecide: handleMakeDecision,
                onClose: ()=>setShowDecisionModal(false)
            }, void 0, false, {
                fileName: "[project]/app-analysis (4)/app/page.tsx",
                lineNumber: 568,
                columnNumber: 9
            }, this),
            showFeedback && currentEmail && lastDecision && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$components$2f$FeedbackModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                email: currentEmail,
                userDecision: lastDecision,
                onContinue: handleContinueAfterFeedback
            }, void 0, false, {
                fileName: "[project]/app-analysis (4)/app/page.tsx",
                lineNumber: 577,
                columnNumber: 9
            }, this),
            showPasswordFeedback && gameState.currentTaskType === 'password' && lastPasswordDecision && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$components$2f$PasswordFeedbackModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                password: gameState.dispatchQueue.find((item)=>item.id === gameState.currentPasswordId && item.type === 'password')?.payload || __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$mockPasswords$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockPasswords"][0],
                userDecision: lastPasswordDecision,
                onContinue: handleContinueAfterPasswordFeedback
            }, void 0, false, {
                fileName: "[project]/app-analysis (4)/app/page.tsx",
                lineNumber: 586,
                columnNumber: 9
            }, this),
            showDataClassificationFeedback && gameState.currentTaskType === 'data-classification' && lastDataClassificationDecision && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$components$2f$DataClassificationFeedbackModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                document: gameState.dispatchQueue.find((item)=>item.id === gameState.currentDocumentId && item.type === 'data-classification')?.payload || __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$mockDataClassification$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockDataClassifications"][0],
                userClassification: lastDataClassificationDecision,
                onContinue: handleContinueAfterDataClassificationFeedback
            }, void 0, false, {
                fileName: "[project]/app-analysis (4)/app/page.tsx",
                lineNumber: 599,
                columnNumber: 9
            }, this),
            showContactModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$components$2f$ContactModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                contacts: __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$lib$2f$mockEmails$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verificationContacts"],
                onClose: ()=>setShowContactModal(false)
            }, void 0, false, {
                fileName: "[project]/app-analysis (4)/app/page.tsx",
                lineNumber: 612,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$analysis__$28$4$292f$components$2f$DeskUI$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                progressPercentage: gameState.graduationProgress,
                onEndDay: handleEndDay,
                tasksCompleted: gameState.todaysTasksCompleted,
                isMuted: isMuted,
                onToggleMute: toggleMute
            }, void 0, false, {
                fileName: "[project]/app-analysis (4)/app/page.tsx",
                lineNumber: 619,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app-analysis (4)/app/page.tsx",
        lineNumber: 453,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=app-analysis%20%284%29_05dwiit._.js.map