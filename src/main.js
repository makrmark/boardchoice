// Surf conditions data and recommendations
const conditions = {
  waveHeight: {
    knee: { ft: '1-2ft', scale: 0.25, name: 'Knee High' },
    waist: { ft: '2-3ft', scale: 0.4, name: 'Waist High' },
    chest: { ft: '3-4ft', scale: 0.55, name: 'Chest High' },
    head: { ft: '4-5ft', scale: 0.7, name: 'Head High' },
    overhead: { ft: '5-7ft', scale: 0.9, name: 'Overhead' },
    double: { ft: '7ft+', scale: 1.1, name: 'Double Overhead+' }
  },
  wavePower: {
    flat: { name: 'Flat / Sloppy', waveShape: 'flat' },
    mushy: { name: 'Mushy / Weak', waveShape: 'mushy' },
    average: { name: 'Average / Medium', waveShape: 'average' },
    powerful: { name: 'Powerful / Steep', waveShape: 'powerful' },
    hollow: { name: 'Hollow / Barrel', waveShape: 'hollow' }
  },
  wind: {
    offshore: { name: 'Offshore (Clean)', icon: '→' },
    light: { name: 'Light / Glassy', icon: '•' },
    cross: { name: 'Cross-shore', icon: '↗' },
    onshore: { name: 'Onshore (Choppy)', icon: '←' },
    strong: { name: 'Strong Wind', icon: '⚡' }
  },
  breakType: {
    beach: { name: 'Beach Break' },
    point: { name: 'Point Break' },
    reef: { name: 'Reef Break' },
    rivermouth: { name: 'River Mouth' }
  },
  surferLevel: {
    beginner: { name: 'Beginner' },
    intermediate: { name: 'Intermediate' },
    advanced: { name: 'Advanced' },
    expert: { name: 'Expert' }
  }
};

// Board recommendations based on conditions
const boardRecommendations = {
  // Small waves
  smallWaves: {
    knee: [
      { name: 'Softboard / Foamie', length: '6\'0" - 7\'0"', volume: '50-70L', description: 'Maximum float for tiny waves' },
      { name: 'Mini Mal', length: '7\'0" - 8\'6"', volume: '60-80L', description: 'Stable and forgiving' }
    ],
    waist: [
      { name: 'Funboard', length: '6\'6" - 7\'0"', volume: '40-55L', description: 'Versatile for small to medium' },
      { name: 'Hybrid', length: '6\'2" - 6\'6"', volume: '35-45L', description: 'Great for small wave performance' }
    ]
  },
  // Medium waves
  chest: [
    { name: 'Shortboard', length: '5\'10" - 6\'4"', volume: '25-35L', description: 'Performance shortboard for carving' },
    { name: 'Hybrid', length: '6\'0" - 6\'6"', volume: '30-40L', description: 'Best of both worlds' }
  ],
  head: [
    { name: 'Shortboard', length: '6\'0" - 6\'6"', volume: '28-35L', description: 'Standard performance shortboard' },
    { name: 'Step-up', length: '6\'6" - 7\'0"', volume: '32-38L', description: 'Extra paddle power for bigger waves' }
  ],
  // Big waves
  overhead: [
    { name: 'Step-up', length: '6\'8" - 7\'2"', volume: '32-40L', description: 'Paddle power for overhead waves' },
    { name: 'Gun', length: '7\'0" - 8\'0"', volume: '30-38L', description: 'Designed for big wave charging' }
  ],
  double: [
    { name: 'Big Wave Gun', length: '7\'6" - 9\'0"', volume: '30-40L', description: 'Built for maximum paddle speed' },
    { name: 'Tow-in Board', length: '6\'0" - 6\'6"', volume: '25-30L', description: 'Used with jet ski assistance' }
  ]
};

// Fin recommendations
const finRecommendations = {
  // By wave size
  small: { // knee to waist
    thruster: { name: 'Thruster', description: '3 fins - classic control and release' },
    '2plus1': { name: '2+1', description: 'Center keel + side fins - classic cruisy feel' },
    quad: { name: 'Quad', description: '4 fins - fast and loose in small waves' }
  },
  medium: { // chest to head
    thruster: { name: 'Thruster', description: '3 fins - balanced drive and pivot' },
    'twin': { name: 'Twin Fin', description: '2 fins - super fast and playful' },
    quad: { name: 'Quad', description: '4 fins - speed and hold in steeper waves' }
  },
  large: { // overhead+
    thruster: { name: 'Thruster', description: '3 fins - control in powerful waves' },
    quad: { name: 'Quad', description: '4 fins - extra hold in hollow waves' },
    '2plus1': { name: '2+1', description: 'Stable center tracking' }
  },
  // Special conditions
  mushy: { name: 'Twin Fin or Quad', description: 'More fins = more speed in weak waves' },
  hollow: { name: 'Quad or Thruster', description: 'Extra grip in the barrel' },
  beach: { name: 'Thruster or Quad', description: 'Versatile for beach break power' },
  point: { name: 'Thruster or Twin', description: 'Long walls suit carving fins' },
  reef: { name: 'Thruster', description: 'Control in powerful reef waves' }
};

// Generate SVG wave
function generateWaveSVG(height, power, wind) {
  const heightData = conditions.waveHeight[height];
  const powerData = conditions.wavePower[power];
  const scale = heightData.scale;
  
  // Wave parameters based on power
  let waveHeight = 80 * scale;
  let curlType = powerData.waveShape;
  let breaking = power === 'hollow' || power === 'powerful';
  
  // SVG dimensions
  const width = 400;
  const height2 = 180;
  const waterLevel = height2 - 20;
  
  let wavePath = '';
  let foamPath = '';
  let barrelPath = '';
  
  // Generate wave shape based on power type
  if (curlType === 'flat' || curlType === 'mushy') {
    // Gentle, rolling waves
    wavePath = `
      M 0 ${waterLevel}
      Q 50 ${waterLevel - waveHeight * 0.3} 100 ${waterLevel - waveHeight * 0.5}
      Q 150 ${waterLevel - waveHeight * 0.7} 200 ${waterLevel - waveHeight * 0.9}
      Q 250 ${waterLevel - waveHeight * 0.8} 300 ${waterLevel - waveHeight * 0.6}
      Q 350 ${waterLevel - waveHeight * 0.4} 400 ${waterLevel}
    `;
  } else if (curlType === 'average') {
    // Nice shaping wave - just starting to break
    wavePath = `
      M 0 ${waterLevel}
      C 60 ${waterLevel - waveHeight * 0.3} 100 ${waterLevel - waveHeight * 0.6} 140 ${waterLevel - waveHeight * 0.9}
      C 165 ${waterLevel - waveHeight * 1.2} 180 ${waterLevel - waveHeight * 1.35} 195 ${waterLevel - waveHeight * 1.4}
      L 205 ${waterLevel - waveHeight * 1.45}
      C 215 ${waterLevel - waveHeight * 1.35} 235 ${waterLevel - waveHeight * 1.1} 260 ${waterLevel - waveHeight * 0.7}
      C 310 ${waterLevel - waveHeight * 0.4} 360 ${waterLevel - waveHeight * 0.2} 400 ${waterLevel}
    `;
    // The lip curling over
    foamPath = `
      M 180 ${waterLevel - waveHeight * 1.25}
      C 195 ${waterLevel - waveHeight * 1.4} 205 ${waterLevel - waveHeight * 1.38} 210 ${waterLevel - waveHeight * 1.25}
    `;
  } else if (curlType === 'powerful') {
    // Steep, powerful wave - heavy lip
    wavePath = `
      M 0 ${waterLevel}
      C 50 ${waterLevel - waveHeight * 0.3} 90 ${waterLevel - waveHeight * 0.7} 130 ${waterLevel - waveHeight * 1.1}
      C 155 ${waterLevel - waveHeight * 1.4} 175 ${waterLevel - waveHeight * 1.6} 190 ${waterLevel - waveHeight * 1.65}
      L 200 ${waterLevel - waveHeight * 1.7}
      C 215 ${waterLevel - waveHeight * 1.55} 240 ${waterLevel - waveHeight * 1.2} 270 ${waterLevel - waveHeight * 0.8}
      C 320 ${waterLevel - waveHeight * 0.4} 360 ${waterLevel - waveHeight * 0.2} 400 ${waterLevel}
    `;
    foamPath = `
      M 170 ${waterLevel - waveHeight * 1.45}
      C 185 ${waterLevel - waveHeight * 1.6} 198 ${waterLevel - waveHeight * 1.58} 202 ${waterLevel - waveHeight * 1.4}
    `;
  } else if (curlType === 'hollow') {
    // Barrel wave - hollow and pitching
    wavePath = `
      M 0 ${waterLevel}
      C 40 ${waterLevel - waveHeight * 0.3} 80 ${waterLevel - waveHeight * 0.7} 110 ${waterLevel - waveHeight * 1.2}
      C 135 ${waterLevel - waveHeight * 1.6} 150 ${waterLevel - waveHeight * 1.85} 165 ${waterLevel - waveHeight * 1.9}
      L 175 ${waterLevel - waveHeight * 1.95}
      C 190 ${waterLevel - waveHeight * 1.8} 215 ${waterLevel - waveHeight * 1.4} 245 ${waterLevel - waveHeight * 0.9}
      C 290 ${waterLevel - waveHeight * 0.5} 340 ${waterLevel - waveHeight * 0.25} 400 ${waterLevel}
    `;
    // The barrel opening
    barrelPath = `
      M 155 ${waterLevel - waveHeight * 1.5}
      C 165 ${waterLevel - waveHeight * 1.8} 175 ${waterLevel - waveHeight * 1.75} 180 ${waterLevel - waveHeight * 1.5}
    `;
    foamPath = `
      M 160 ${waterLevel - waveHeight * 1.4}
      C 170 ${waterLevel - waveHeight * 1.7} 180 ${waterLevel - waveHeight * 1.75} 185 ${waterLevel - waveHeight * 1.55}
    `;
  }
  
  // Wind indicator
  const windOffset = wind === 'offshore' ? 30 : wind === 'onshore' ? -30 : 0;
  const windColor = wind === 'offshore' ? '#ff6b6b' : wind === 'onshore' ? '#4ecdc4' : '#888';
  
  return `
    <svg viewBox="0 0 ${width} ${height2}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style="stop-color:#87ceeb;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#b0e0e6;stop-opacity:1" />
        </linearGradient>
        <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style="stop-color:#4a90a4;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#2d5a87;stop-opacity:1" />
        </linearGradient>
        <linearGradient id="foamGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style="stop-color:#ffffff;stop-opacity:0.9" />
          <stop offset="100%" style="stop-color:#e8f4f8;stop-opacity:0.7" />
        </linearGradient>
      </defs>
      
      <!-- Sky -->
      <rect x="0" y="0" width="${width}" height="${waterLevel}" fill="url(#skyGradient)"/>
      
      <!-- Sun -->
      <circle cx="340" cy="40" r="25" fill="#ffd700" opacity="0.8"/>
      
      <!-- Ocean base -->
      <rect x="0" y="${waterLevel}" width="${width}" height="${height2 - waterLevel}" fill="#1a3a5c"/>
      
      <!-- Wave body -->
      <path d="${wavePath}" fill="url(#waveGradient)" stroke="#1a3a5c" stroke-width="2"/>
      
      <!-- Foam -->
      ${foamPath ? `<path d="${foamPath}" fill="none" stroke="url(#foamGradient)" stroke-width="4" stroke-linecap="round"/>` : ''}
      
      ${barrelPath ? `
        <!-- Barrel -->
        <path d="${barrelPath}" fill="none" stroke="#ffd700" stroke-width="2" stroke-dasharray="4,4" opacity="0.8"/>
      ` : ''}
      
      <!-- Wind indicator -->
      ${wind !== 'light' ? `
        <g transform="translate(${350 + windOffset}, ${waterLevel - 60})">
          <line x1="-15" y1="0" x2="15" y2="0" stroke="${windColor}" stroke-width="2" stroke-linecap="round"/>
          <polygon points="15,0 8,-5 8,5" fill="${windColor}"/>
        </g>
      ` : ''}
      
      <!-- Swell lines -->
      <g stroke="#ffffff" stroke-width="0.5" opacity="0.2">
        <path d="M 20 ${waterLevel + 10} Q 60 ${waterLevel + 5} 100 ${waterLevel + 15}" fill="none"/>
        <path d="M 300 ${waterLevel + 20} Q 340 ${waterLevel + 10} 380 ${waterLevel + 25}" fill="none"/>
      </g>
    </svg>
  `;
}

// Generate SVG surfboard
function generateBoardSVG(boardType) {
  let boardPath = '';
  let outlineStyle = '';
  
  // Different board shapes
  const boards = {
    softboard: {
      path: 'M 30 70 Q 50 20 150 15 Q 250 20 270 70 Q 250 130 150 135 Q 50 130 30 70 Z',
      width: 70,
      length: 240
    },
    minimax: {
      path: 'M 40 70 Q 55 25 150 18 Q 245 25 260 70 Q 245 115 150 120 Q 55 115 40 70 Z',
      width: 60,
      length: 220
    },
    funboard: {
      path: 'M 50 70 Q 60 30 150 22 Q 240 30 250 70 Q 240 110 150 115 Q 60 110 50 70 Z',
      width: 55,
      length: 200
    },
    hybrid: {
      path: 'M 60 70 Q 68 35 150 28 Q 232 35 240 70 Q 232 105 150 112 Q 68 105 60 70 Z',
      width: 50,
      length: 180
    },
    shortboard: {
      path: 'M 70 70 Q 75 40 150 35 Q 225 40 230 70 Q 225 100 150 105 Q 75 100 70 70 Z',
      width: 45,
      length: 160
    },
    stepup: {
      path: 'M 60 70 Q 68 32 150 25 Q 232 32 240 70 Q 232 108 150 115 Q 68 108 60 70 Z',
      width: 52,
      length: 180
    },
    gun: {
      path: 'M 50 70 Q 60 25 150 18 Q 240 25 250 70 Q 240 112 150 120 Q 60 112 50 70 Z',
      width: 48,
      length: 200
    },
    biggun: {
      path: 'M 40 70 Q 55 20 150 12 Q 245 20 260 70 Q 245 118 150 128 Q 55 118 40 70 Z',
      width: 55,
      length: 220
    }
  };
  
  const board = boards[boardType] || boards.shortboard;
  
  return `
    <svg viewBox="0 0 300 150" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="boardGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style="stop-color:#f5e6c8;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#d4c4a8;stop-opacity:1" />
        </linearGradient>
        <linearGradient id="stringerGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style="stop-color:#8b4513;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#654321;stop-opacity:1" />
        </linearGradient>
      </defs>
      
      <!-- Board shadow -->
      <ellipse cx="150" cy="145" rx="90" ry="8" fill="#000" opacity="0.15"/>
      
      <!-- Board body -->
      <path d="${board.path}" fill="url(#boardGradient)" stroke="#8b7355" stroke-width="2"/>
      
      <!-- Stringer -->
      <path d="M 150 15 Q 150 75 150 120" stroke="url(#stringerGradient)" stroke-width="2" fill="none"/>
      
      <!-- Outline detail -->
      <path d="${board.path}" fill="none" stroke="#a08060" stroke-width="1" stroke-dasharray="3,3"/>
      
      <!-- Nose detail -->
      <ellipse cx="150" cy="18" rx="8" ry="3" fill="#f5e6c8" stroke="#a08060" stroke-width="1"/>
      
      <!-- Tail detail -->
      <ellipse cx="150" cy="120" rx="12" ry="4" fill="#f5e6c8" stroke="#a08060" stroke-width="1"/>
    </svg>
  `;
}

// Generate SVG fin configurations
function generateFinSVG(finType, color = '#1a3a5c') {
  const fins = {
    thruster: `
      <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="boardGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color:#f5e6c8"/>
            <stop offset="100%" style="stop-color:#d4c4a8"/>
          </linearGradient>
        </defs>
        
        <!-- Board outline (top view) -->
        <ellipse cx="150" cy="100" rx="90" ry="30" fill="url(#boardGrad)" stroke="#8b7355" stroke-width="2"/>
        <line x1="150" y1="70" x2="150" y2="130" stroke="#8b4513" stroke-width="2"/>
        
        <!-- Center fin -->
        <path d="M 150 95 L 150 135 L 145 130 L 145 95 Z" fill="${color}" stroke="#0a1628" stroke-width="1"/>
        
        <!-- Side fins -->
        <path d="M 100 100 L 85 140 L 95 135 L 110 100 Z" fill="${color}" stroke="#0a1628" stroke-width="1" transform="rotate(-15, 100, 100)"/>
        <path d="M 200 100 L 215 140 L 205 135 L 190 100 Z" fill="${color}" stroke="#0a1628" stroke-width="1" transform="rotate(15, 200, 100)"/>
        
        <!-- Labels -->
        <text x="150" y="170" text-anchor="middle" font-size="14" fill="#5a6a7a" font-family="Outfit">Thruster</text>
      </svg>
    `,
    quad: `
      <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="boardGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color:#f5e6c8"/>
            <stop offset="100%" style="stop-color:#d4c4a8"/>
          </linearGradient>
        </defs>
        
        <ellipse cx="150" cy="100" rx="90" ry="30" fill="url(#boardGrad2)" stroke="#8b7355" stroke-width="2"/>
        <line x1="150" y1="70" x2="150" y2="130" stroke="#8b4513" stroke-width="2"/>
        
        <!-- 4 fins -->
        <path d="M 80 95 L 70 135 L 80 130 L 90 95 Z" fill="${color}" stroke="#0a1628" stroke-width="1" transform="rotate(-20, 80, 100)"/>
        <path d="M 110 95 L 105 125 L 112 122 L 115 95 Z" fill="${color}" stroke="#0a1628" stroke-width="1"/>
        
        <path d="M 190 95 L 195 125 L 188 122 L 185 95 Z" fill="${color}" stroke="#0a1628" stroke-width="1"/>
        <path d="M 220 95 L 230 135 L 220 130 L 210 95 Z" fill="${color}" stroke="#0a1628" stroke-width="1" transform="rotate(20, 220, 100)"/>
        
        <text x="150" y="170" text-anchor="middle" font-size="14" fill="#5a6a7a" font-family="Outfit">Quad</text>
      </svg>
    `,
    twin: `
      <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="boardGrad3" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color:#f5e6c8"/>
            <stop offset="100%" style="stop-color:#d4c4a8"/>
          </linearGradient>
        </defs>
        
        <ellipse cx="150" cy="100" rx="90" ry="30" fill="url(#boardGrad3)" stroke="#8b7355" stroke-width="2"/>
        <line x1="150" y1="70" x2="150" y2="130" stroke="#8b4513" stroke-width="2"/>
        
        <!-- 2 fins -->
        <path d="M 95 100 L 80 145 L 90 140 L 105 100 Z" fill="${color}" stroke="#0a1628" stroke-width="1" transform="rotate(-20, 95, 110)"/>
        <path d="M 205 100 L 220 145 L 210 140 L 195 100 Z" fill="${color}" stroke="#0a1628" stroke-width="1" transform="rotate(20, 205, 110)"/>
        
        <text x="150" y="170" text-anchor="middle" font-size="14" fill="#5a6a7a" font-family="Outfit">Twin Fin</text>
      </svg>
    `,
    '2plus1': `
      <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="boardGrad4" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color:#f5e6c8"/>
            <stop offset="100%" style="stop-color:#d4c4a8"/>
          </linearGradient>
        </defs>
        
        <ellipse cx="150" cy="100" rx="90" ry="30" fill="url(#boardGrad4)" stroke="#8b7355" stroke-width="2"/>
        <line x1="150" y1="70" x2="150" y2="130" stroke="#8b4513" stroke-width="2"/>
        
        <!-- Center keel -->
        <path d="M 150 90 L 140 140 L 150 145 L 160 140 L 150 90 Z" fill="${color}" stroke="#0a1628" stroke-width="1"/>
        
        <!-- Side fins -->
        <path d="M 100 100 L 85 135 L 95 130 L 110 100 Z" fill="${color}" stroke="#0a1628" stroke-width="1" transform="rotate(-15, 100, 105)"/>
        <path d="M 200 100 L 215 135 L 205 130 L 190 100 Z" fill="${color}" stroke="#0a1628" stroke-width="1" transform="rotate(15, 200, 105)"/>
        
        <text x="150" y="170" text-anchor="middle" font-size="14" fill="#5a6a7a" font-family="Outfit">2+1</text>
      </svg>
    `
  };
  
  return fins[finType] || fins.thruster;
}

// Get board recommendation based on conditions
function getBoardRecommendation(conditions) {
  const height = conditions.waveHeight;
  const power = conditions.wavePower;
  const level = conditions.surferLevel;
  
  let sizeCategory;
  if (height === 'knee' || height === 'waist') sizeCategory = 'small';
  else if (height === 'chest' || height === 'head') sizeCategory = 'medium';
  else sizeCategory = 'large';
  
  // Determine board shape
  let boardType, boardName, description;
  
  // Adjust based on conditions
  if (sizeCategory === 'small') {
    if (level === 'beginner') {
      boardType = 'softboard';
      boardName = 'Softboard / Foamie';
      description = height === 'knee' 
        ? '6\'0" - 8\'0" with 50-70L for maximum float'
        : '7\'0" - 8\'0" with 40-60L for learning';
    } else if (power === 'mushy' || power === 'flat') {
      boardType = 'minimax';
      boardName = 'Mini Malibu';
      description = '7\'0" - 8\'0" - extra foam for weak waves';
    } else {
      boardType = 'funboard';
      boardName = 'Funboard';
      description = '6\'4" - 6\'10" - versatile for small conditions';
    }
  } else if (sizeCategory === 'medium') {
    if (level === 'beginner' || level === 'intermediate') {
      boardType = 'hybrid';
      boardName = 'Hybrid / Fish';
      description = '5\'10" - 6\'4" - great all-rounder';
    } else {
      boardType = 'shortboard';
      boardName = 'Shortboard';
      description = '5\'10" - 6\'2" - performance machine';
    }
  } else {
    // Large waves
    if (height === 'overhead') {
      boardType = 'stepup';
      boardName = 'Step-up';
      description = '6\'4" - 7\'0" - extra paddle power';
    } else {
      boardType = 'gun';
      boardName = 'Big Wave Gun';
      description = '7\'0" - 8\'0" - built for charging';
    }
  }
  
  return { boardType, boardName, description };
}

// Get fin recommendation based on conditions
function getFinRecommendation(conditions) {
  const height = conditions.waveHeight;
  const power = conditions.wavePower;
  const breakType = conditions.breakType;
  
  let sizeCategory;
  if (height === 'knee' || height === 'waist') sizeCategory = 'small';
  else if (height === 'chest' || height === 'head') sizeCategory = 'medium';
  else sizeCategory = 'large';
  
  let finType;
  
  // Determine fin setup
  if (power === 'mushy' || power === 'flat') {
    finType = 'quad';
  } else if (power === 'hollow' && sizeCategory === 'large') {
    finType = 'quad';
  } else if (sizeCategory === 'small') {
    finType = Math.random() > 0.5 ? 'quad' : '2plus1';
  } else if (breakType === 'point') {
    finType = 'thruster';
  } else if (breakType === 'reef' && sizeCategory === 'large') {
    finType = 'thruster';
  } else {
    finType = 'thruster';
  }
  
  const finData = finRecommendations[sizeCategory] || finRecommendations.medium;
  const selectedFin = finData[finType] || { name: 'Thruster', description: 'Classic 3-fin setup' };
  
  return { finType, ...selectedFin };
}

// Get tips based on conditions
function getTips(conditions) {
  const tips = [];
  const { waveHeight, wavePower, wind, breakType, surferLevel } = conditions;
  
  // Height tips
  if (waveHeight === 'knee' || waveHeight === 'waist') {
    tips.push('More volume = more fun in small waves. Go for a wider, thicker board.');
    tips.push('Paddle into every wave you can - they\'re few and far between!');
  }
  
  if (waveHeight === 'overhead' || waveHeight === 'double') {
    tips.push('Paddle hard! You\'ll need maximum paddle power to catch the wave.');
    tips.push('Don\'t blow your first wave - wait for the right one.');
  }
  
  // Power tips
  if (wavePower === 'hollow') {
    tips.push('Get in early for the barrel, but be ready to generate speed on the face.');
    tips.push('A quad setup or thruster will give you extra hold in the pocket.');
  }
  
  if (wavePower === 'mushy') {
    tips.push('Pump for speed - there\'s no free speed in weak waves.');
    tips.push('A twin or quad fin setup helps generate momentum.');
  }
  
  // Wind tips
  if (wind === 'offshore') {
    tips.push('Perfect groomed faces - this is the dream conditions!');
    tips.push('Watch for sections closing out as the wind pushes the wave from behind.');
  }
  
  if (wind === 'onshore') {
    tips.push('Expect choppy conditions - look for sections that are more organized.');
    tips.push('A lower aspect ratio board will handle the messy conditions better.');
  }
  
  // Break type tips
  if (breakType === 'reef') {
    tips.push('Respect the reef - technique is key in powerful reef waves.');
    tips.push('A thruster gives you maximum control in hollow reef breaks.');
  }
  
  if (breakType === 'beach') {
    tips.push('Watch for shifting sandbanks - conditions can change daily.');
    tips.push('A hybrid or fish works great in beach break punchy waves.');
  }
  
  // Level tips
  if (surferLevel === 'beginner') {
    tips.push('Start small and work your way up - there\'s no shame in knee-high waves!');
    tips.push('A longer, thicker board will make learning much easier.');
  }
  
  if (surferLevel === 'expert' && waveHeight === 'double') {
    tips.push('Big wave charging requires mental preparation as much as physical.');
    tips.push('Consider your tow-in options for waves beyond your paddle ability.');
  }
  
  // Add general tip if we don't have enough
  if (tips.length < 3) {
    tips.push('Always check the buoy reports before heading out.');
    tips.push('The best surfer out there is the one having the most fun!');
  }
  
  return tips.slice(0, 5);
}

// Update the UI
function updateUI() {
  const conditions = {
    waveHeight: document.getElementById('waveHeight').value,
    wavePower: document.getElementById('wavePower').value,
    wind: document.getElementById('wind').value,
    breakType: document.getElementById('breakType').value,
    surferLevel: document.getElementById('surferLevel').value
  };
  
  // Update wave display
  const waveSVG = generateWaveSVG(conditions.waveHeight, conditions.wavePower, conditions.wind);
  document.getElementById('waveDisplay').innerHTML = waveSVG;
  
  // Update wave description
  const heightName = conditions.waveHeight[conditions.waveHeight]?.name || conditions.waveHeight;
  const powerName = conditions.wavePower[conditions.wavePower]?.name || conditions.wavePower;
  document.getElementById('waveDescription').textContent = 
    `${heightName} waves with ${powerName.toLowerCase()} conditions`;
  
  // Get recommendations
  const boardRec = getBoardRecommendation(conditions);
  const finRec = getFinRecommendation(conditions);
  
  // Update board display
  document.getElementById('boardDisplay').innerHTML = generateBoardSVG(boardRec.boardType);
  document.getElementById('boardName').textContent = boardRec.boardName;
  document.getElementById('boardDescription').textContent = boardRec.description;
  
  // Update fin display
  const finColor = conditions.wavePower === 'hollow' ? '#ff6b6b' : 
                   conditions.wavePower === 'powerful' ? '#4ecdc4' : '#1a3a5c';
  document.getElementById('finDisplay').innerHTML = generateFinSVG(finRec.finType, finColor);
  document.getElementById('finName').textContent = finRec.name;
  document.getElementById('finDescription').textContent = finRec.description;
  
  // Update tips
  const tips = getTips(conditions);
  const tipsList = document.getElementById('tipsList');
  tipsList.innerHTML = tips.map(tip => `<li>${tip}</li>`).join('');
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  // Add event listeners to all selects
  const selects = document.querySelectorAll('select');
  selects.forEach(select => {
    select.addEventListener('change', updateUI);
  });
  
  // Initial render
  updateUI();
});