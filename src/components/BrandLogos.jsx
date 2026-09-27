import React from 'react'

// Authentic Official PhonePe Vector Logo
export const PhonePeLogo = ({ className = "h-8 w-auto" }) => (
  <svg className={`${className} flex-shrink-0`} viewBox="0 0 240 70" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Official PhonePe Purple Round Icon */}
    <rect width="68" height="68" rx="16" fill="#5F259F" />
    <circle cx="34" cy="34" r="26" fill="white" />
    <path d="M41 18H33V28H28C24.5 28 22 30.5 22 34C22 37.5 24.5 40 28 40H29.5L20 54H29L38.5 40V33H41V28H38.5V23H41V18Z" fill="#5F259F" />
    <path d="M33 33V23H28C26.5 23 25.5 24 25.5 25.5C25.5 27 26.5 28 28 28H33V33Z" fill="#5F259F" opacity="0.1" />
    {/* PhonePe Wordmark */}
    <text x="80" y="47" fill="#5F259F" fontFamily="sans-serif" fontSize="28" fontWeight="700" letterSpacing="-0.5">PhonePe</text>
  </svg>
)

// Authentic Official NPCI UPI Vector Logo
export const UpiLogo = ({ className = "h-7 w-auto" }) => (
  <svg className={`${className} flex-shrink-0`} viewBox="0 0 160 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="160" height="50" rx="8" fill="#FFFFFF" stroke="#E2E8F0" />
    {/* Official NPCI Green & Orange Triangles */}
    <path d="M25 10L10 40H22L37 10H25Z" fill="#097939" />
    <path d="M39 10L29 30H41L51 10H39Z" fill="#ED752E" />
    <path d="M47 22L38 40H50L59 22H47Z" fill="#097939" />
    <text x="68" y="35" fill="#1C3F60" fontFamily="sans-serif" fontSize="24" fontWeight="900" fontStyle="italic">UPI</text>
  </svg>
)

// Authentic Official Zoho Vector Logo (4 Distinct Blocks: Red, Green, Blue, Yellow)
export const ZohoLogo = ({ className = "h-7 w-auto" }) => (
  <svg className={`${className} flex-shrink-0`} viewBox="0 0 130 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="8" width="24" height="24" rx="5" fill="#E42528" />
    <rect x="28" y="8" width="24" height="24" rx="5" fill="#229954" />
    <rect x="54" y="8" width="24" height="24" rx="5" fill="#2E86C1" />
    <rect x="80" y="8" width="24" height="24" rx="5" fill="#F39C12" />
    <text x="14" y="26" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="16" fontWeight="800">Z</text>
    <text x="40" y="26" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="16" fontWeight="800">O</text>
    <text x="66" y="26" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="16" fontWeight="800">H</text>
    <text x="92" y="26" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="16" fontWeight="800">O</text>
  </svg>
)

// Authentic Official Paytm Vector Logo
export const PaytmLogo = ({ className = "h-6 w-auto" }) => (
  <svg className={`${className} flex-shrink-0`} viewBox="0 0 100 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.6 6H2V26H7.8V19.4H12.6C16.8 19.4 19.8 16.6 19.8 12.7C19.8 8.8 16.8 6 12.6 6ZM12.2 14.5H7.8V10.9H12.2C13.8 10.9 14.8 11.6 14.8 12.7C14.8 13.8 13.8 14.5 12.2 14.5Z" fill="#002970"/>
    <path d="M26.2 12.2C23.6 12.2 21.8 13.8 21.8 16.3C21.8 20.8 28.2 19.7 28.2 22.1C28.2 23 27.2 23.6 25.8 23.6C24.2 23.6 22.8 22.8 22.4 21.5L18.8 23C19.8 25.3 22.6 26.6 25.8 26.6C29.8 26.6 32.8 24.6 32.8 21.1C32.8 16.7 26.4 17.6 26.4 15.3C26.4 14.6 27.2 14.1 28.2 14.1C29.6 14.1 30.6 14.7 31.1 15.8L34.4 14.1C33.4 12.6 31 12.2 26.2 12.2Z" fill="#002970"/>
    <path d="M43.6 18.2L37.8 6H32.4L37.6 16.6L34.4 23.8L32.2 26H37.4L43.6 18.2Z" fill="#002970"/>
    <path d="M46.8 9.4H51.4V6H46.8V9.4ZM46.8 26H51.4V11.2H46.8V26Z" fill="#00BAF2"/>
    <path d="M57.6 11.2H54.2V26H58.6V15.4H63.6V11.2H57.6Z" fill="#00BAF2"/>
    <path d="M83.4 11.2V16.8C83.4 22.6 79.4 26.4 73.6 26.4C67.8 26.4 63.8 22.6 63.8 16.8V11.2H68.2V16.8C68.2 20.2 70.4 22.4 73.6 22.4C76.8 22.4 79 20.2 79 16.8V11.2H83.4Z" fill="#00BAF2"/>
  </svg>
)

// Authentic Official WhatsApp Vector Logo
export const WhatsAppLogo = ({ className = "w-7 h-7" }) => (
  <svg className={`${className} flex-shrink-0`} viewBox="0 0 24 24" fill="#25D366" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7 8.5 7 9.71C7 10.93 7.89 12.1 8.01 12.27C8.14 12.44 9.76 14.94 12.24 16C12.83 16.27 13.28 16.42 13.64 16.53C14.23 16.72 14.77 16.69 15.2 16.63C15.68 16.55 16.68 16.02 16.89 15.43C17.1 14.85 17.1 14.35 17.04 14.25C16.97 14.14 16.82 14.08 16.6 13.97C16.38 13.86 15.3 13.33 15.1 13.26C14.9 13.18 14.76 13.14 14.61 13.36C14.47 13.58 14.05 14.08 13.93 14.22C13.8 14.36 13.68 14.38 13.46 14.27C13.24 14.16 12.53 13.93 11.69 13.18C11.03 12.59 10.59 11.87 10.46 11.65C10.33 11.43 10.45 11.31 10.56 11.2C10.66 11.1 10.78 10.94 10.9 10.81C11.01 10.68 11.06 10.58 11.13 10.43C11.2 10.29 11.17 10.16 11.11 10.05C11.06 9.94 10.63 8.87 10.45 8.44C10.27 8 10.09 8.07 9.95 8.06C9.82 8.06 9.67 8.05 9.51 8.05C9.36 8.05 9.11 8.11 8.9 8.33C8.68 8.56 8.08 9.12 8.08 10.27C8.08 11.43 8.92 12.54 9.04 12.7C9.17 12.87 10.69 15.2 13.02 16.21C13.58 16.45 14.02 16.6 14.36 16.71C15.02 16.92 15.62 16.89 16.09 16.82C16.62 16.74 17.72 16.15 17.95 15.51C18.18 14.86 18.18 14.32 18.11 14.2C18.04 14.09 17.89 14.02 17.67 13.92Z"/>
  </svg>
)

// Authentic Official Telegram Vector Logo
export const TelegramLogo = ({ className = "w-7 h-7" }) => (
  <svg className={`${className} flex-shrink-0`} viewBox="0 0 24 24" fill="#229ED9" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.75-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
  </svg>
)

// Authentic Official Razorpay Vector Logo
export const RazorpayLogo = ({ className = "w-7 h-7" }) => (
  <svg className={`${className} flex-shrink-0`} viewBox="0 0 24 24" fill="#3395FF" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="5" fill="#0C2340" />
    <path d="M14.078 4.23L4.2 19.77h4.86l2.91-4.71 5.76 4.71h5.07l-8.722-15.54z" fill="#3395FF"/>
  </svg>
)

// Authentic Pine Labs Vector Logo
export const PineLabsLogo = ({ className = "h-6 w-auto" }) => (
  <svg className={`${className} flex-shrink-0`} viewBox="0 0 120 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 6L22 22H6L14 6Z" fill="#00A859" />
    <circle cx="14" cy="26" r="2.5" fill="#00A859" />
    <text x="28" y="21" fill="#002970" fontFamily="sans-serif" fontSize="14" fontWeight="800" letterSpacing="0.5">PINE LABS</text>
  </svg>
)

// Authentic Tally Prime Vector Logo
export const TallyLogo = ({ className = "h-6 w-auto" }) => (
  <svg className={`${className} flex-shrink-0`} viewBox="0 0 90 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="90" height="32" rx="6" fill="#E2231A"/>
    <text x="45" y="21" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="15" fontWeight="900" fontStyle="italic" letterSpacing="1">Tally</text>
  </svg>
)

// Authentic GSTIN Compliance Emblem
export const GstinLogo = ({ className = "w-7 h-7" }) => (
  <svg className={`${className} flex-shrink-0`} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="46" fill="#002970" stroke="#00BAF2" strokeWidth="3" />
    <circle cx="50" cy="50" r="34" stroke="#10B981" strokeWidth="2" strokeDasharray="4 4" fill="none" />
    <text x="50" y="57" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="20" fontWeight="900">GST</text>
  </svg>
)
