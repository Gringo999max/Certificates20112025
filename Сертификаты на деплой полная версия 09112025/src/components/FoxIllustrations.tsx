import React from 'react'

// Иллюстрация лисы дарящей подарок
export function FoxGivingGift() {
  return (
    <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Тело лисы */}
      <ellipse cx="60" cy="85" rx="25" ry="20" fill="#FF6B35"/>
      <ellipse cx="60" cy="85" rx="20" ry="15" fill="#FFB366"/>
      
      {/* Голова */}
      <circle cx="60" cy="50" r="22" fill="#FF6B35"/>
      <circle cx="60" cy="50" r="18" fill="#FFB366"/>
      
      {/* Уши */}
      <ellipse cx="50" cy="35" rx="6" ry="12" fill="#FF6B35" transform="rotate(-20 50 35)"/>
      <ellipse cx="70" cy="35" rx="6" ry="12" fill="#FF6B35" transform="rotate(20 70 35)"/>
      <ellipse cx="50" cy="35" rx="3" ry="8" fill="#FFD4B3" transform="rotate(-20 50 35)"/>
      <ellipse cx="70" cy="35" rx="3" ry="8" fill="#FFD4B3" transform="rotate(20 70 35)"/>
      
      {/* Морда */}
      <ellipse cx="60" cy="55" rx="12" ry="8" fill="#FFD4B3"/>
      
      {/* Глаза */}
      <circle cx="55" cy="48" r="3" fill="#2D3748"/>
      <circle cx="65" cy="48" r="3" fill="#2D3748"/>
      <circle cx="55.5" cy="47" r="1" fill="white"/>
      <circle cx="65.5" cy="47" r="1" fill="white"/>
      
      {/* Нос */}
      <circle cx="60" cy="55" r="2" fill="#2D3748"/>
      
      {/* Рот */}
      <path d="M58 58 Q60 60 62 58" stroke="#2D3748" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      
      {/* Лапы */}
      <ellipse cx="45" cy="95" rx="8" ry="12" fill="#FF6B35"/>
      <ellipse cx="75" cy="95" rx="8" ry="12" fill="#FF6B35"/>
      
      {/* Подарок в лапах */}
      <rect x="52" y="75" width="16" height="12" fill="#10B981" rx="2"/>
      <rect x="58" y="73" width="4" height="16" fill="#34D399"/>
      <rect x="50" y="79" width="20" height="4" fill="#34D399"/>
      <circle cx="60" cy="81" r="3" fill="#FCD34D"/>
      
      {/* Хвост */}
      <ellipse cx="35" cy="80" rx="8" ry="20" fill="#FF6B35" transform="rotate(-30 35 80)"/>
      <ellipse cx="38" cy="75" rx="4" ry="12" fill="#FFB366" transform="rotate(-30 38 75)"/>
    </svg>
  )
}

// Иллюстрация лисы выбирающей
export function FoxChoosing() {
  return (
    <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Тело лисы */}
      <ellipse cx="60" cy="85" rx="25" ry="20" fill="#FF6B35"/>
      <ellipse cx="60" cy="85" rx="20" ry="15" fill="#FFB366"/>
      
      {/* Голова */}
      <circle cx="60" cy="50" r="22" fill="#FF6B35"/>
      <circle cx="60" cy="50" r="18" fill="#FFB366"/>
      
      {/* Уши */}
      <ellipse cx="50" cy="35" rx="6" ry="12" fill="#FF6B35" transform="rotate(-20 50 35)"/>
      <ellipse cx="70" cy="35" rx="6" ry="12" fill="#FF6B35" transform="rotate(20 70 35)"/>
      <ellipse cx="50" cy="35" rx="3" ry="8" fill="#FFD4B3" transform="rotate(-20 50 35)"/>
      <ellipse cx="70" cy="35" rx="3" ry="8" fill="#FFD4B3" transform="rotate(20 70 35)"/>
      
      {/* Морда */}
      <ellipse cx="60" cy="55" rx="12" ry="8" fill="#FFD4B3"/>
      
      {/* Глаза (задумчивые) */}
      <ellipse cx="55" cy="48" rx="3" ry="2" fill="#2D3748"/>
      <ellipse cx="65" cy="48" rx="3" ry="2" fill="#2D3748"/>
      
      {/* Нос */}
      <circle cx="60" cy="55" r="2" fill="#2D3748"/>
      
      {/* Рот (задумчивый) */}
      <path d="M57 58 Q60 59 63 58" stroke="#2D3748" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      
      {/* Лапы */}
      <ellipse cx="45" cy="95" rx="8" ry="12" fill="#FF6B35"/>
      <ellipse cx="75" cy="95" rx="8" ry="12" fill="#FF6B35"/>
      
      {/* Планшет/телефон */}
      <rect x="45" y="70" width="30" height="20" fill="#374151" rx="3"/>
      <rect x="47" y="72" width="26" height="16" fill="#60A5FA"/>
      
      {/* Иконки глэмпингов на экране */}
      <circle cx="52" cy="77" r="2" fill="white"/>
      <circle cx="58" cy="77" r="2" fill="white"/>
      <circle cx="64" cy="77" r="2" fill="white"/>
      <circle cx="70" cy="77" r="2" fill="white"/>
      
      <circle cx="52" cy="83" r="2" fill="white"/>
      <circle cx="58" cy="83" r="2" fill="#FCD34D"/>
      <circle cx="64" cy="83" r="2" fill="white"/>
      <circle cx="70" cy="83" r="2" fill="white"/>
      
      {/* Хвост */}
      <ellipse cx="85" cy="80" rx="8" ry="20" fill="#FF6B35" transform="rotate(30 85 80)"/>
      <ellipse cx="82" cy="75" rx="4" ry="12" fill="#FFB366" transform="rotate(30 82 75)"/>
      
      {/* Думательные линии */}
      <circle cx="75" cy="35" r="2" fill="#D1D5DB" opacity="0.7"/>
      <circle cx="80" cy="30" r="1.5" fill="#D1D5DB" opacity="0.5"/>
      <circle cx="85" cy="25" r="1" fill="#D1D5DB" opacity="0.3"/>
    </svg>
  )
}

// Иллюстрация лисы бронирующей
export function FoxBooking() {
  return (
    <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Тело лисы */}
      <ellipse cx="60" cy="85" rx="25" ry="20" fill="#FF6B35"/>
      <ellipse cx="60" cy="85" rx="20" ry="15" fill="#FFB366"/>
      
      {/* Голова */}
      <circle cx="60" cy="50" r="22" fill="#FF6B35"/>
      <circle cx="60" cy="50" r="18" fill="#FFB366"/>
      
      {/* Уши */}
      <ellipse cx="50" cy="35" rx="6" ry="12" fill="#FF6B35" transform="rotate(-20 50 35)"/>
      <ellipse cx="70" cy="35" rx="6" ry="12" fill="#FF6B35" transform="rotate(20 70 35)"/>
      <ellipse cx="50" cy="35" rx="3" ry="8" fill="#FFD4B3" transform="rotate(-20 50 35)"/>
      <ellipse cx="70" cy="35" rx="3" ry="8" fill="#FFD4B3" transform="rotate(20 70 35)"/>
      
      {/* Морда */}
      <ellipse cx="60" cy="55" rx="12" ry="8" fill="#FFD4B3"/>
      
      {/* Глаза (сосредоточенные) */}
      <circle cx="55" cy="48" r="3" fill="#2D3748"/>
      <circle cx="65" cy="48" r="3" fill="#2D3748"/>
      <circle cx="55.5" cy="47" r="1" fill="white"/>
      <circle cx="65.5" cy="47" r="1" fill="white"/>
      
      {/* Нос */}
      <circle cx="60" cy="55" r="2" fill="#2D3748"/>
      
      {/* Рот (сосредоточенный) */}
      <path d="M58 59 Q60 60 62 59" stroke="#2D3748" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      
      {/* Лапы */}
      <ellipse cx="45" cy="95" rx="8" ry="12" fill="#FF6B35"/>
      <ellipse cx="75" cy="95" rx="8" ry="12" fill="#FF6B35"/>
      
      {/* Календарь/документы */}
      <rect x="40" y="70" width="20" height="15" fill="white" stroke="#D1D5DB" strokeWidth="1"/>
      <rect x="42" y="68" width="16" height="3" fill="#10B981"/>
      <line x1="44" y1="76" x2="54" y2="76" stroke="#6B7280" strokeWidth="1"/>
      <line x1="44" y1="79" x2="54" y2="79" stroke="#6B7280" strokeWidth="1"/>
      <line x1="44" y1="82" x2="50" y2="82" stroke="#10B981" strokeWidth="2"/>
      
      {/* Телефон */}
      <rect x="65" y="72" width="12" height="18" fill="#374151" rx="2"/>
      <rect x="66" y="74" width="10" height="14" fill="#34D399"/>
      <circle cx="71" cy="89" r="1.5" fill="#D1D5DB"/>
      
      {/* Галочка на экране */}
      <path d="M68 79 L70 81 L74 77" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      
      {/* Хвост */}
      <ellipse cx="85" cy="80" rx="8" ry="20" fill="#FF6B35" transform="rotate(30 85 80)"/>
      <ellipse cx="82" cy="75" rx="4" ry="12" fill="#FFB366" transform="rotate(30 82 75)"/>
    </svg>
  )
}

// Иллюстрация лисы в глэмпинге
export function FoxInGlamping() {
  return (
    <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Палатка/домик */}
      <polygon points="60,20 90,80 30,80" fill="#8B5CF6"/>
      <polygon points="60,20 75,80 45,80" fill="#A78BFA"/>
      <rect x="45" y="80" width="30" height="15" fill="#6B46C1"/>
      
      {/* Дверь */}
      <rect x="55" y="75" width="10" height="20" fill="#4C1D95"/>
      <circle cx="57" cy="85" r="1" fill="#D1D5DB"/>
      
      {/* Окно */}
      <rect x="68" y="75" width="8" height="8" fill="#FCD34D" opacity="0.8"/>
      <line x1="72" y1="75" x2="72" y2="83" stroke="#8B5CF6" strokeWidth="1"/>
      <line x1="68" y1="79" x2="76" y2="79" stroke="#8B5CF6" strokeWidth="1"/>
      
      {/* Лиса внутри (видна в окне) */}
      <circle cx="72" cy="79" r="3" fill="#FF6B35"/>
      <circle cx="71" cy="78" r="1" fill="#2D3748"/>
      <circle cx="73" cy="78" r="1" fill="#2D3748"/>
      
      {/* Деревья */}
      <ellipse cx="25" cy="85" rx="8" ry="15" fill="#10B981"/>
      <rect x="23" y="85" width="4" height="10" fill="#92400E"/>
      
      <ellipse cx="95" cy="90" rx="6" ry="12" fill="#10B981"/>
      <rect x="93" y="90" width="4" height="8" fill="#92400E"/>
      
      {/* Звезды */}
      <polygon points="15,25 16,22 17,25 20,24 17,27 16,30 15,27 12,24" fill="#FCD34D"/>
      <polygon points="100,30 101,28 102,30 104,29 102,32 101,34 100,32 98,29" fill="#FCD34D"/>
      <polygon points="85,15 86,13 87,15 89,14 87,17 86,19 85,17 83,14" fill="#FCD34D"/>
      
      {/* Костер */}
      <ellipse cx="40" cy="95" rx="8" ry="3" fill="#92400E"/>
      <polygon points="40,90 42,85 38,85" fill="#F59E0B"/>
      <polygon points="40,90 44,87 36,87" fill="#EF4444"/>
      <polygon points="40,90 43,88 37,88" fill="#FCD34D"/>
      
      {/* Счастливые эмодзи над глэмпингом */}
      <circle cx="55" cy="15" r="2" fill="#FCD34D"/>
      <circle cx="52" cy="13" r="1" fill="#2D3748"/>
      <circle cx="58" cy="13" r="1" fill="#2D3748"/>
      <path d="M52 16 Q55 18 58 16" stroke="#2D3748" strokeWidth="1" fill="none" strokeLinecap="round"/>
    </svg>
  )
}