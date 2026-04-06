const messages = [
  "you're doing wonderfully ✨",
  "stay soft, stay focused 🌸",
  "gentle progress is still progress 🐾",
  "the cat believes in you 🐱",
  "breathe easy, you've got this 🌿",
  "cozy focus mode: on ☕",
]

export default function TimerScreen({ timer }) {
  const radius = 90
  const circumference = 2 * Math.PI * radius
  const offset = circumference * (1 - timer.progress)
  const msgIndex = timer.rounds % messages.length

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#fffbef',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '40px 24px 100px',
      fontFamily: "'Nunito', sans-serif",
    }}>

      {/* stars */}
      <div style={{
        alignSelf: 'flex-start',
        fontFamily: "'Caveat', cursive",
        fontSize: '12px', color: '#f5c97e'
      }}>✦</div>
      <div style={{
        alignSelf: 'flex-end',
        fontFamily: "'Caveat', cursive",
        fontSize: '11px', color: '#f9c8d8',
        marginTop: '-16px'
      }}>✦ ✦</div>

      {/* badge */}
      <div style={{
        fontFamily: "'Caveat', cursive",
        fontSize: '14px', fontWeight: '600',
        backgroundColor: '#fce4ef', color: '#b85c78',
        padding: '4px 16px', borderRadius: '20px',
        marginBottom: '24px',
      }}>
        {timer.isBreak ? 'rest time 🌸' : 'focusing ✨'}
      </div>

      {/* ring timer with cat face */}
      <svg width="220" height="220" viewBox="0 0 220 220">
        <circle cx="110" cy="110" r={radius}
          stroke="#fde8b2" strokeWidth="12" fill="none"/>
        <circle cx="110" cy="110" r={radius}
          stroke="#f4a0bc" strokeWidth="12" fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          transform="rotate(-90 110 110)"
          style={{transition: 'stroke-dashoffset 0.8s ease'}}
        />
        <path d="M68 108 Q68 82 85 76 Q110 68 135 76 Q152 82 152 108 Q152 134 132 140 Q110 146 88 140 Q68 134 68 108Z"
          fill="#fce4ef" stroke="#e8879f" strokeWidth="1.4"/>
        <path d="M76 82 Q68 66 82 72 Q84 77 81 84Z"
          fill="#fce4ef" stroke="#e8879f" strokeWidth="1.2"/>
        <path d="M77 82 Q71 68 82 73 Q83 77 81 83Z" fill="#fbbfd4"/>
        <path d="M138 81 Q148 65 134 72 Q132 77 135 83Z"
          fill="#fce4ef" stroke="#e8879f" strokeWidth="1.2"/>
        <path d="M137 81 Q146 67 134 73 Q132 77 135 82Z" fill="#fbbfd4"/>
        <ellipse cx="88" cy="114" rx="8" ry="5" fill="#ffb3cc" opacity="0.5"/>
        <ellipse cx="132" cy="114" rx="8" ry="5" fill="#ffb3cc" opacity="0.5"/>
        {timer.isBreak ? (
          <>
            <path d="M94 104 Q100 100 106 104"
              stroke="#c96a8a" strokeWidth="1.8"
              fill="none" strokeLinecap="round"/>
            <path d="M114 104 Q120 100 126 104"
              stroke="#c96a8a" strokeWidth="1.8"
              fill="none" strokeLinecap="round"/>
          </>
        ) : (
          <>
            <circle cx="100" cy="104" r="5" fill="#c96a8a"/>
            <circle cx="120" cy="104" r="5" fill="#c96a8a"/>
            <circle cx="102" cy="102" r="1.5" fill="#fff"/>
            <circle cx="122" cy="102" r="1.5" fill="#fff"/>
          </>
        )}
        <path d="M108 112 Q110 110 112 112 Q111 114 109 114 Q107 114 108 112Z"
          fill="#e8879f"/>
        <path d="M106 116 Q110 119 114 116"
          stroke="#e8879f" strokeWidth="1.2"
          fill="none" strokeLinecap="round"/>
        <line x1="72" y1="110" x2="92" y2="112"
          stroke="#e8879f" strokeWidth="1" opacity="0.5"/>
        <line x1="72" y1="114" x2="92" y2="114"
          stroke="#e8879f" strokeWidth="1" opacity="0.5"/>
        <line x1="128" y1="112" x2="148" y2="110"
          stroke="#e8879f" strokeWidth="1" opacity="0.5"/>
        <line x1="128" y1="114" x2="148" y2="114"
          stroke="#e8879f" strokeWidth="1" opacity="0.5"/>
        <text x="110" y="138" textAnchor="middle"
          fontFamily="Caveat, cursive"
          fontSize="16" fontWeight="600" fill="#b85c78">
          {timer.formatted}
        </text>
      </svg>

      {/* message */}
      <div style={{
        fontFamily: "'Caveat', cursive",
        fontSize: '18px', fontWeight: '600',
        color: '#b85c78', textAlign: 'center',
        margin: '16px 0',
      }}>
        {messages[msgIndex]}
      </div>

      {/* sound chips */}
      <div style={{display: 'flex', gap: '8px', marginBottom: '24px'}}>
        {[
          ['🌧', 'rain',  '#fce4ef', '#b85c78'],
          ['☕', 'café',  '#fde8b2', '#9c6a1a'],
          ['🌙', 'night', '#ede8fb', '#6b5ab7'],
        ].map(([emoji, label, bg, color]) => (
          <div key={label} style={{
            backgroundColor: bg, borderRadius: '12px',
            padding: '8px 14px', textAlign: 'center',
            border: `1px dashed ${color}`,
          }}>
            <div style={{fontSize: '16px'}}>{emoji}</div>
            <div style={{
              fontFamily: "'Caveat', cursive",
              fontSize: '12px', color,
            }}>{label}</div>
          </div>
        ))}
      </div>

      {/* paw round tracker */}
      <div style={{
        display: 'flex', gap: '6px',
        alignItems: 'center', marginBottom: '24px',
      }}>
        {Array.from({length: timer.totalRounds}).map((_, i) => (
          <span key={i} style={{
            fontSize: '18px',
            opacity: i < timer.rounds ? 1 : 0.25,
          }}>🐾</span>
        ))}
        <span style={{
          fontFamily: "'Caveat', cursive",
          fontSize: '13px', color: '#d4829c',
          marginLeft: '6px',
        }}>
          {timer.rounds} of {timer.totalRounds} rounds
        </span>
      </div>

      {/* controls */}
      <div style={{display: 'flex', gap: '10px', width: '100%'}}>
        {timer.isRunning ? (
          <button onClick={timer.pause} style={{
            flex: 1, padding: '14px',
            borderRadius: '50px', border: 'none',
            backgroundColor: '#fde8b2',
            fontFamily: "'Caveat', cursive",
            fontSize: '18px', fontWeight: '600',
            color: '#9c6a1a', cursor: 'pointer',
          }}>pause 🍵</button>
        ) : (
          <button onClick={timer.start} style={{
            flex: 1, padding: '14px',
            borderRadius: '50px', border: 'none',
            backgroundColor: '#f4a0bc',
            fontFamily: "'Caveat', cursive",
            fontSize: '18px', fontWeight: '600',
            color: '#fff', cursor: 'pointer',
          }}>resume 🌸</button>
        )}
        <button onClick={timer.reset} style={{
          padding: '14px 20px',
          borderRadius: '50px', border: 'none',
          backgroundColor: '#ede8fb',
          fontFamily: "'Caveat', cursive",
          fontSize: '18px', fontWeight: '600',
          color: '#6b5ab7', cursor: 'pointer',
        }}>reset 🐾</button>
      </div>

    </div>
  )
}