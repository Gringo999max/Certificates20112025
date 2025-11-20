export function CustomHowItWorksIllustration() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-8 flex items-center justify-center">
      <svg
        width="600"
        height="300"
        viewBox="0 0 600 300"
        className="w-full h-auto max-w-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background rounded rectangle */}
        <rect width="600" height="300" rx="20" fill="#FFF7ED" />
        
        {/* Step 1: Fox with gift certificate */}
        <g transform="translate(20, 50)">
          {/* Step number circle */}
          <circle cx="30" cy="30" r="20" fill="#F97316" />
          <text x="30" y="37" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">1</text>
          
          {/* Fox body */}
          <ellipse cx="120" cy="160" rx="45" ry="35" fill="#EA580C" />
          
          {/* Fox head */}
          <ellipse cx="120" cy="120" rx="35" ry="30" fill="#EA580C" />
          
          {/* Fox ears */}
          <ellipse cx="100" cy="100" rx="8" ry="15" fill="#EA580C" />
          <ellipse cx="140" cy="100" rx="8" ry="15" fill="#EA580C" />
          <ellipse cx="100" cy="100" rx="4" ry="8" fill="#1F2937" />
          <ellipse cx="140" cy="100" rx="4" ry="8" fill="#1F2937" />
          
          {/* Fox face */}
          <ellipse cx="110" cy="115" rx="3" ry="3" fill="#1F2937" />
          <ellipse cx="130" cy="115" rx="3" ry="3" fill="#1F2937" />
          <ellipse cx="120" cy="125" rx="2" ry="1" fill="#1F2937" />
          <path d="M 120 125 Q 115 130 110 128 Q 120 132 130 128 Q 125 130 120 125" fill="#1F2937" />
          
          {/* Fox tail */}
          <ellipse cx="170" cy="140" rx="15" ry="25" fill="#EA580C" />
          <ellipse cx="175" cy="135" rx="8" ry="15" fill="#FEF3C7" />
          
          {/* Fox arms */}
          <ellipse cx="85" cy="140" rx="12" ry="8" fill="#EA580C" />
          <ellipse cx="155" cy="140" rx="12" ry="8" fill="#EA580C" />
          
          {/* Gift certificate */}
          <rect x="70" y="90" width="40" height="25" rx="3" fill="#FEF3C7" stroke="#D97706" strokeWidth="2" />
          <rect x="74" y="94" width="8" height="3" fill="#D97706" />
          <rect x="74" y="99" width="12" height="2" fill="#D97706" />
          <rect x="74" y="103" width="10" height="2" fill="#D97706" />
          
          {/* Gift bow */}
          <path d="M 90 85 Q 85 80 80 85 Q 85 90 90 85 Q 95 80 100 85 Q 95 90 90 85" fill="#DC2626" />
        </g>

        {/* Step 2: Fox at computer */}
        <g transform="translate(200, 50)">
          {/* Step number circle */}
          <circle cx="30" cy="30" r="20" fill="#F97316" />
          <text x="30" y="37" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">2</text>
          
          {/* Computer monitor */}
          <rect x="80" y="80" width="80" height="50" rx="5" fill="#374151" />
          <rect x="85" y="85" width="70" height="40" rx="3" fill="#60A5FA" />
          
          {/* Computer stand */}
          <rect x="115" y="130" width="10" height="15" fill="#374151" />
          <rect x="105" y="145" width="30" height="5" fill="#374151" />
          
          {/* Screen content - glamping images */}
          <rect x="90" y="90" width="15" height="12" rx="2" fill="#FEF3C7" />
          <rect x="108" y="90" width="15" height="12" rx="2" fill="#FEF3C7" />
          <rect x="126" y="90" width="15" height="12" rx="2" fill="#FEF3C7" />
          
          {/* Small tent icons on screen */}
          <path d="M 97 96 L 90 102 L 104 102 Z" fill="#059669" />
          <path d="M 115 96 L 108 102 L 122 102 Z" fill="#059669" />
          <path d="M 133 96 L 126 102 L 140 102 Z" fill="#059669" />
          
          {/* Fox body */}
          <ellipse cx="50" cy="160" rx="35" ry="25" fill="#EA580C" />
          
          {/* Fox head */}
          <ellipse cx="50" cy="130" rx="25" ry="22" fill="#EA580C" />
          
          {/* Fox ears */}
          <ellipse cx="35" cy="115" rx="6" ry="12" fill="#EA580C" />
          <ellipse cx="65" cy="115" rx="6" ry="12" fill="#EA580C" />
          <ellipse cx="35" cy="115" rx="3" ry="6" fill="#1F2937" />
          <ellipse cx="65" cy="115" rx="3" ry="6" fill="#1F2937" />
          
          {/* Fox face */}
          <ellipse cx="43" cy="125" rx="2" ry="2" fill="#1F2937" />
          <ellipse cx="57" cy="125" rx="2" ry="2" fill="#1F2937" />
          <ellipse cx="50" cy="132" rx="1.5" ry="1" fill="#1F2937" />
          <path d="M 50 132 Q 46 136 43 135 Q 50 138 57 135 Q 54 136 50 132" fill="#1F2937" />
          
          {/* Fox arm pointing to screen */}
          <ellipse cx="75" cy="130" rx="8" ry="6" fill="#EA580C" />
        </g>

        {/* Step 3: Fox with phone and glamping */}
        <g transform="translate(420, 50)">
          {/* Step number circle */}
          <circle cx="30" cy="30" r="20" fill="#059669" />
          <text x="30" y="37" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">3</text>
          
          {/* Background mountains */}
          <path d="M 20 120 L 40 80 L 60 120 Z" fill="#10B981" opacity="0.3" />
          <path d="M 50 120 L 80 70 L 110 120 Z" fill="#10B981" opacity="0.4" />
          <path d="M 90 120 L 120 85 L 150 120 Z" fill="#10B981" opacity="0.3" />
          
          {/* Trees */}
          <ellipse cx="30" cy="110" rx="8" ry="15" fill="#059669" />
          <rect x="28" y="115" width="4" height="10" fill="#92400E" />
          
          <ellipse cx="130" cy="105" rx="10" ry="18" fill="#059669" />
          <rect x="127" y="110" width="6" height="15" fill="#92400E" />
          
          {/* Glamping tents */}
          <path d="M 70 120 L 55 140 L 85 140 Z" fill="#FEF3C7" />
          <path d="M 70 120 L 62 140 L 78 140 Z" fill="#F59E0B" />
          
          <path d="M 100 125 L 90 140 L 110 140 Z" fill="#FEF3C7" />
          <path d="M 100 125 L 95 140 L 105 140 Z" fill="#F59E0B" />
          
          {/* Fox body */}
          <ellipse cx="40" cy="160" rx="35" ry="25" fill="#EA580C" />
          
          {/* Fox head */}
          <ellipse cx="40" cy="130" rx="25" ry="22" fill="#EA580C" />
          
          {/* Fox ears */}
          <ellipse cx="25" cy="115" rx="6" ry="12" fill="#EA580C" />
          <ellipse cx="55" cy="115" rx="6" ry="12" fill="#EA580C" />
          <ellipse cx="25" cy="115" rx="3" ry="6" fill="#1F2937" />
          <ellipse cx="55" cy="115" rx="3" ry="6" fill="#1F2937" />
          
          {/* Fox face */}
          <ellipse cx="33" cy="125" rx="2" ry="2" fill="#1F2937" />
          <ellipse cx="47" cy="125" rx="2" ry="2" fill="#1F2937" />
          <ellipse cx="40" cy="132" rx="1.5" ry="1" fill="#1F2937" />
          <path d="M 40 132 Q 36 136 33 135 Q 40 138 47 135 Q 44 136 40 132" fill="#1F2937" />
          
          {/* Fox tail */}
          <ellipse cx="75" cy="150" rx="12" ry="20" fill="#EA580C" />
          <ellipse cx="78" cy="145" rx="6" ry="12" fill="#FEF3C7" />
          
          {/* Phone in fox's paw */}
          <rect x="15" y="115" width="12" height="20" rx="3" fill="#1F2937" />
          <rect x="17" y="117" width="8" height="12" rx="1" fill="#60A5FA" />
          <circle cx="21" cy="131" r="1.5" fill="#9CA3AF" />
          
          {/* Small checkmark on phone */}
          <path d="M 19 122 L 21 124 L 25 120" stroke="#10B981" strokeWidth="1" fill="none" />
        </g>
        
        {/* Decorative elements */}
        <circle cx="580" cy="40" r="3" fill="#F59E0B" opacity="0.6" />
        <circle cx="560" cy="60" r="2" fill="#10B981" opacity="0.6" />
        <circle cx="40" cy="40" r="2" fill="#DC2626" opacity="0.6" />
        <circle cx="580" cy="260" r="4" fill="#8B5CF6" opacity="0.4" />
      </svg>
    </div>
  )
}