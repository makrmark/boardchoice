(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const t of a.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&l(t)}).observe(document,{childList:!0,subtree:!0});function i(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function l(r){if(r.ep)return;r.ep=!0;const a=i(r);fetch(r.href,a)}})();const w={waveHeight:{knee:{ft:"1-2ft",scale:.25,name:"Knee High"},waist:{ft:"2-3ft",scale:.4,name:"Waist High"},chest:{ft:"3-4ft",scale:.55,name:"Chest High"},head:{ft:"4-5ft",scale:.7,name:"Head High"},overhead:{ft:"5-7ft",scale:.9,name:"Overhead"},double:{ft:"7ft+",scale:1.1,name:"Double Overhead+"}},wavePower:{flat:{name:"Flat / Sloppy",waveShape:"flat"},mushy:{name:"Mushy / Weak",waveShape:"mushy"},average:{name:"Average / Medium",waveShape:"average"},powerful:{name:"Powerful / Steep",waveShape:"powerful"},hollow:{name:"Hollow / Barrel",waveShape:"hollow"}}},m={small:{thruster:{name:"Thruster",description:"3 fins - classic control and release"},"2plus1":{name:"2+1",description:"Center keel + side fins - classic cruisy feel"},quad:{name:"Quad",description:"4 fins - fast and loose in small waves"}},medium:{thruster:{name:"Thruster",description:"3 fins - balanced drive and pivot"},twin:{name:"Twin Fin",description:"2 fins - super fast and playful"},quad:{name:"Quad",description:"4 fins - speed and hold in steeper waves"}},large:{thruster:{name:"Thruster",description:"3 fins - control in powerful waves"},quad:{name:"Quad",description:"4 fins - extra hold in hollow waves"},"2plus1":{name:"2+1",description:"Stable center tracking"}},mushy:{name:"Twin Fin or Quad",description:"More fins = more speed in weak waves"},hollow:{name:"Quad or Thruster",description:"Extra grip in the barrel"},beach:{name:"Thruster or Quad",description:"Versatile for beach break power"},point:{name:"Thruster or Twin",description:"Long walls suit carving fins"},reef:{name:"Thruster",description:"Control in powerful reef waves"}};function v(s,o,i){const l=w.waveHeight[s],r=w.wavePower[o];let t=80*l.scale,n=r.waveShape;const h=400,f=180,e=f-20;let d="",c="",p="";n==="flat"||n==="mushy"?d=`
      M 0 ${e}
      Q 50 ${e-t*.3} 100 ${e-t*.5}
      Q 150 ${e-t*.7} 200 ${e-t*.9}
      Q 250 ${e-t*.8} 300 ${e-t*.6}
      Q 350 ${e-t*.4} 400 ${e}
    `:n==="average"?(d=`
      M 0 ${e}
      Q 60 ${e-t*.4} 120 ${e-t*.7}
      Q 180 ${e-t*1} 220 ${e-t*1.2}
      Q 260 ${e-t*1.1} 300 ${e-t*.8}
      Q 360 ${e-t*.5} 400 ${e}
    `,c=`
      M 100 ${e-t*.5}
      Q 150 ${e-t*.8} 200 ${e-t*1}
      Q 250 ${e-t*.9} 280 ${e-t*.7}
    `):n==="powerful"?(d=`
      M 0 ${e}
      Q 80 ${e-t*.5} 140 ${e-t*.9}
      Q 180 ${e-t*1.3} 210 ${e-t*1.5}
      Q 240 ${e-t*1.4} 280 ${e-t*1}
      Q 340 ${e-t*.6} 400 ${e}
    `,c=`
      M 150 ${e-t*.8}
      Q 180 ${e-t*1.2} 200 ${e-t*1.35}
      Q 230 ${e-t*1.2} 260 ${e-t*.8}
    `):n==="hollow"&&(d=`
      M 0 ${e}
      Q 60 ${e-t*.4} 100 ${e-t*.8}
      Q 130 ${e-t*1.2} 150 ${e-t*1.5}
      Q 170 ${e-t*1.6} 190 ${e-t*1.5}
      Q 210 ${e-t*1.3} 240 ${e-t*.9}
      Q 300 ${e-t*.5} 400 ${e}
    `,p=`
      M 140 ${e-t*.9}
      Q 160 ${e-t*1.4} 180 ${e-t*1.3}
      Q 200 ${e-t*1} 190 ${e-t*.6}
    `,c=`
      M 130 ${e-t*.7}
      Q 150 ${e-t*1.2} 180 ${e-t*1.35}
      Q 210 ${e-t*1.2} 230 ${e-t*.7}
    `);const g=i==="offshore"?30:i==="onshore"?-30:0,u=i==="offshore"?"#ff6b6b":i==="onshore"?"#4ecdc4":"#888";return`
    <svg viewBox="0 0 ${h} ${f}" xmlns="http://www.w3.org/2000/svg">
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
      <rect x="0" y="0" width="${h}" height="${e}" fill="url(#skyGradient)"/>
      
      <!-- Sun -->
      <circle cx="340" cy="40" r="25" fill="#ffd700" opacity="0.8"/>
      
      <!-- Ocean base -->
      <rect x="0" y="${e}" width="${h}" height="${f-e}" fill="#1a3a5c"/>
      
      <!-- Wave body -->
      <path d="${d}" fill="url(#waveGradient)" stroke="#1a3a5c" stroke-width="2"/>
      
      <!-- Foam -->
      ${c?`<path d="${c}" fill="none" stroke="url(#foamGradient)" stroke-width="4" stroke-linecap="round"/>`:""}
      
      ${p?`
        <!-- Barrel -->
        <path d="${p}" fill="none" stroke="#ffd700" stroke-width="2" stroke-dasharray="4,4" opacity="0.8"/>
      `:""}
      
      <!-- Wind indicator -->
      ${i!=="light"?`
        <g transform="translate(${350+g}, ${e-60})">
          <line x1="-15" y1="0" x2="15" y2="0" stroke="${u}" stroke-width="2" stroke-linecap="round"/>
          <polygon points="15,0 8,-5 8,5" fill="${u}"/>
        </g>
      `:""}
      
      <!-- Swell lines -->
      <g stroke="#ffffff" stroke-width="0.5" opacity="0.2">
        <path d="M 20 ${e+10} Q 60 ${e+5} 100 ${e+15}" fill="none"/>
        <path d="M 300 ${e+20} Q 340 ${e+10} 380 ${e+25}" fill="none"/>
      </g>
    </svg>
  `}function b(s){const o={softboard:{path:"M 30 70 Q 50 20 150 15 Q 250 20 270 70 Q 250 130 150 135 Q 50 130 30 70 Z",width:70,length:240},minimax:{path:"M 40 70 Q 55 25 150 18 Q 245 25 260 70 Q 245 115 150 120 Q 55 115 40 70 Z",width:60,length:220},funboard:{path:"M 50 70 Q 60 30 150 22 Q 240 30 250 70 Q 240 110 150 115 Q 60 110 50 70 Z",width:55,length:200},hybrid:{path:"M 60 70 Q 68 35 150 28 Q 232 35 240 70 Q 232 105 150 112 Q 68 105 60 70 Z",width:50,length:180},shortboard:{path:"M 70 70 Q 75 40 150 35 Q 225 40 230 70 Q 225 100 150 105 Q 75 100 70 70 Z",width:45,length:160},stepup:{path:"M 60 70 Q 68 32 150 25 Q 232 32 240 70 Q 232 108 150 115 Q 68 108 60 70 Z",width:52,length:180},gun:{path:"M 50 70 Q 60 25 150 18 Q 240 25 250 70 Q 240 112 150 120 Q 60 112 50 70 Z",width:48,length:200},biggun:{path:"M 40 70 Q 55 20 150 12 Q 245 20 260 70 Q 245 118 150 128 Q 55 118 40 70 Z",width:55,length:220}},i=o[s]||o.shortboard;return`
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
      <path d="${i.path}" fill="url(#boardGradient)" stroke="#8b7355" stroke-width="2"/>
      
      <!-- Stringer -->
      <path d="M 150 15 Q 150 75 150 120" stroke="url(#stringerGradient)" stroke-width="2" fill="none"/>
      
      <!-- Outline detail -->
      <path d="${i.path}" fill="none" stroke="#a08060" stroke-width="1" stroke-dasharray="3,3"/>
      
      <!-- Nose detail -->
      <ellipse cx="150" cy="18" rx="8" ry="3" fill="#f5e6c8" stroke="#a08060" stroke-width="1"/>
      
      <!-- Tail detail -->
      <ellipse cx="150" cy="120" rx="12" ry="4" fill="#f5e6c8" stroke="#a08060" stroke-width="1"/>
    </svg>
  `}function $(s,o="#1a3a5c"){const i={thruster:`
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
        <path d="M 150 95 L 150 135 L 145 130 L 145 95 Z" fill="${o}" stroke="#0a1628" stroke-width="1"/>
        
        <!-- Side fins -->
        <path d="M 100 100 L 85 140 L 95 135 L 110 100 Z" fill="${o}" stroke="#0a1628" stroke-width="1" transform="rotate(-15, 100, 100)"/>
        <path d="M 200 100 L 215 140 L 205 135 L 190 100 Z" fill="${o}" stroke="#0a1628" stroke-width="1" transform="rotate(15, 200, 100)"/>
        
        <!-- Labels -->
        <text x="150" y="170" text-anchor="middle" font-size="14" fill="#5a6a7a" font-family="Outfit">Thruster</text>
      </svg>
    `,quad:`
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
        <path d="M 80 95 L 70 135 L 80 130 L 90 95 Z" fill="${o}" stroke="#0a1628" stroke-width="1" transform="rotate(-20, 80, 100)"/>
        <path d="M 110 95 L 105 125 L 112 122 L 115 95 Z" fill="${o}" stroke="#0a1628" stroke-width="1"/>
        
        <path d="M 190 95 L 195 125 L 188 122 L 185 95 Z" fill="${o}" stroke="#0a1628" stroke-width="1"/>
        <path d="M 220 95 L 230 135 L 220 130 L 210 95 Z" fill="${o}" stroke="#0a1628" stroke-width="1" transform="rotate(20, 220, 100)"/>
        
        <text x="150" y="170" text-anchor="middle" font-size="14" fill="#5a6a7a" font-family="Outfit">Quad</text>
      </svg>
    `,twin:`
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
        <path d="M 95 100 L 80 145 L 90 140 L 105 100 Z" fill="${o}" stroke="#0a1628" stroke-width="1" transform="rotate(-20, 95, 110)"/>
        <path d="M 205 100 L 220 145 L 210 140 L 195 100 Z" fill="${o}" stroke="#0a1628" stroke-width="1" transform="rotate(20, 205, 110)"/>
        
        <text x="150" y="170" text-anchor="middle" font-size="14" fill="#5a6a7a" font-family="Outfit">Twin Fin</text>
      </svg>
    `,"2plus1":`
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
        <path d="M 150 90 L 140 140 L 150 145 L 160 140 L 150 90 Z" fill="${o}" stroke="#0a1628" stroke-width="1"/>
        
        <!-- Side fins -->
        <path d="M 100 100 L 85 135 L 95 130 L 110 100 Z" fill="${o}" stroke="#0a1628" stroke-width="1" transform="rotate(-15, 100, 105)"/>
        <path d="M 200 100 L 215 135 L 205 130 L 190 100 Z" fill="${o}" stroke="#0a1628" stroke-width="1" transform="rotate(15, 200, 105)"/>
        
        <text x="150" y="170" text-anchor="middle" font-size="14" fill="#5a6a7a" font-family="Outfit">2+1</text>
      </svg>
    `};return i[s]||i.thruster}function k(s){const o=s.waveHeight,i=s.wavePower,l=s.surferLevel;let r;o==="knee"||o==="waist"?r="small":o==="chest"||o==="head"?r="medium":r="large";let a,t,n;return r==="small"?l==="beginner"?(a="softboard",t="Softboard / Foamie",n=o==="knee"?`6'0" - 8'0" with 50-70L for maximum float`:`7'0" - 8'0" with 40-60L for learning`):i==="mushy"||i==="flat"?(a="minimax",t="Mini Malibu",n=`7'0" - 8'0" - extra foam for weak waves`):(a="funboard",t="Funboard",n=`6'4" - 6'10" - versatile for small conditions`):r==="medium"?l==="beginner"||l==="intermediate"?(a="hybrid",t="Hybrid / Fish",n=`5'10" - 6'4" - great all-rounder`):(a="shortboard",t="Shortboard",n=`5'10" - 6'2" - performance machine`):o==="overhead"?(a="stepup",t="Step-up",n=`6'4" - 7'0" - extra paddle power`):(a="gun",t="Big Wave Gun",n=`7'0" - 8'0" - built for charging`),{boardType:a,boardName:t,description:n}}function x(s){const o=s.waveHeight,i=s.wavePower,l=s.breakType;let r;o==="knee"||o==="waist"?r="small":o==="chest"||o==="head"?r="medium":r="large";let a;i==="mushy"||i==="flat"||i==="hollow"&&r==="large"?a="quad":r==="small"?a=Math.random()>.5?"quad":"2plus1":a="thruster";const n=(m[r]||m.medium)[a]||{name:"Thruster",description:"Classic 3-fin setup"};return{finType:a,...n}}function Q(s){const o=[],{waveHeight:i,wavePower:l,wind:r,breakType:a,surferLevel:t}=s;return(i==="knee"||i==="waist")&&(o.push("More volume = more fun in small waves. Go for a wider, thicker board."),o.push("Paddle into every wave you can - they're few and far between!")),(i==="overhead"||i==="double")&&(o.push("Paddle hard! You'll need maximum paddle power to catch the wave."),o.push("Don't blow your first wave - wait for the right one.")),l==="hollow"&&(o.push("Get in early for the barrel, but be ready to generate speed on the face."),o.push("A quad setup or thruster will give you extra hold in the pocket.")),l==="mushy"&&(o.push("Pump for speed - there's no free speed in weak waves."),o.push("A twin or quad fin setup helps generate momentum.")),r==="offshore"&&(o.push("Perfect groomed faces - this is the dream conditions!"),o.push("Watch for sections closing out as the wind pushes the wave from behind.")),r==="onshore"&&(o.push("Expect choppy conditions - look for sections that are more organized."),o.push("A lower aspect ratio board will handle the messy conditions better.")),a==="reef"&&(o.push("Respect the reef - technique is key in powerful reef waves."),o.push("A thruster gives you maximum control in hollow reef breaks.")),a==="beach"&&(o.push("Watch for shifting sandbanks - conditions can change daily."),o.push("A hybrid or fish works great in beach break punchy waves.")),t==="beginner"&&(o.push("Start small and work your way up - there's no shame in knee-high waves!"),o.push("A longer, thicker board will make learning much easier.")),t==="expert"&&i==="double"&&(o.push("Big wave charging requires mental preparation as much as physical."),o.push("Consider your tow-in options for waves beyond your paddle ability.")),o.length<3&&(o.push("Always check the buoy reports before heading out."),o.push("The best surfer out there is the one having the most fun!")),o.slice(0,5)}function y(){var f,e;const s={waveHeight:document.getElementById("waveHeight").value,wavePower:document.getElementById("wavePower").value,wind:document.getElementById("wind").value,breakType:document.getElementById("breakType").value,surferLevel:document.getElementById("surferLevel").value},o=v(s.waveHeight,s.wavePower,s.wind);document.getElementById("waveDisplay").innerHTML=o;const i=((f=s.waveHeight[s.waveHeight])==null?void 0:f.name)||s.waveHeight,l=((e=s.wavePower[s.wavePower])==null?void 0:e.name)||s.wavePower;document.getElementById("waveDescription").textContent=`${i} waves with ${l.toLowerCase()} conditions`;const r=k(s),a=x(s);document.getElementById("boardDisplay").innerHTML=b(r.boardType),document.getElementById("boardName").textContent=r.boardName,document.getElementById("boardDescription").textContent=r.description;const t=s.wavePower==="hollow"?"#ff6b6b":s.wavePower==="powerful"?"#4ecdc4":"#1a3a5c";document.getElementById("finDisplay").innerHTML=$(a.finType,t),document.getElementById("finName").textContent=a.name,document.getElementById("finDescription").textContent=a.description;const n=Q(s),h=document.getElementById("tipsList");h.innerHTML=n.map(d=>`<li>${d}</li>`).join("")}document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll("select").forEach(o=>{o.addEventListener("change",y)}),y()});
//# sourceMappingURL=index-JnXgs_sX.js.map
