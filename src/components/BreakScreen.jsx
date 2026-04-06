export default function BreakScreen({ timer }) {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#fef6ff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '40px 24px 100px',
      fontFamily: "'Nunito', sans-serif",
    }}>

      {/* stars */}
      <div style={{
        alignSelf: 'flex-end',
        fontFamily: "'Caveat', cursive",
        fontSize: '11px', color: '#e8b4f0',
      }}>✦ ✦</div>

      {/* badge */}
      <div style={{
        fontFamily: "'Caveat', cursive",
        fontSize: '14px', fontWeight: '600',
        backgroundColor: '#ede8fb', color: '#6b5ab7',
        padding: '4px 16px', borderRadius: '20px',
        marginBottom: '16px',
      }}>rest time 🌸</div>

      {/* sleeping cat */}
      <svg width="200" height="160" viewBox="0 0 128 108" fill="none">
        {/* zzz */}
        <text x="85" y="25" fontFamily="Caveat,cursive"
          fontSize="12" fill="#d4a8f0">z</text>
        <text x="94" y="16" fontFamily="Caveat,cursive"
          fontSize="14" fill="#c78ee8">z</text>
        <text x="104" y="8" fontFamily="Caveat,cursive"
          fontSize="16" fill="#b272d6">z</text>
        {/* pillow */}
        <path d="M14 91 Q15 81 35 79 Q55 77 78 79 Q100 81 101 89 Q103 97 78 99 Q54 103 29 99 Q11 97 14 91Z"
          fill="#fce4ef" stroke="#f2b8c6" strokeWidth="1.2"/>
        {/* body */}
        <path d="M21 75 Q19 59 31 53 Q45 46 61 51 Q77 56 79 67 Q83 79 71 85 Q57 91 39 87 Q23 83 21 75Z"
          fill="#f9c8d8" stroke="#e8879f" strokeWidth="1.3"/>
        {/* tail */}
        <path d="M77 69 Q91 57 89 47 Q87 38 79 41 Q73 45 75 53"
          stroke="#f9c8d8" strokeWidth="9"
          fill="none" strokeLinecap="round"/>
        <path d="M77 69 Q91 57 89 47 Q87 38 79 41 Q73 45 75 53"
          stroke="#e8879f" strokeWidth="1.2"
          fill="none" strokeLinecap="round"/>
        {/* head */}
        <path d="M19 59 Q17 43 29 38 Q41 32 53 37 Q65 42 64 56 Q64 69 51 73 Q37 76 27 69 Q17 63 19 59Z"
          fill="#f9c8d8" stroke="#e8879f" strokeWidth="1.3"/>
        {/* ears */}
        <path d="M23 45 Q16 33 27 37 Q29 41 26 47Z"
          fill="#f9c8d8" stroke="#e8879f" strokeWidth="1.1"/>
        <path d="M24 45 Q18 35 26 38 Q28 41 26 46Z" fill="#fbbfd4"/>
        <path d="M51 41 Q57 29 49 35 Q47 39 49 45Z"
          fill="#f9c8d8" stroke="#e8879f" strokeWidth="1.1"/>
        <path d="M50 41 Q55 32 49 36 Q47 39 49 44Z" fill="#fbbfd4"/>
        {/* sleeping eyes */}
        <path d="M27 57 Q30 54 33 57"
          stroke="#c96a8a" strokeWidth="1.5"
          fill="none" strokeLinecap="round"/>
        <path d="M39 55 Q42 52 45 55"
          stroke="#c96a8a" strokeWidth="1.5"
          fill="none" strokeLinecap="round"/>
        {/* blush */}
        <ellipse cx="23" cy="64" rx="4.5" ry="3"
          fill="#ffb3cc" opacity="0.5"/>
        <ellipse cx="45" cy="64" rx="4.5" ry="3"
          fill="#ffb3cc" opacity="0.5"/>
        {/* nose */}
        <path d="M34 62 Q36 60 38 62 Q37 64 35 64 Q33 64 34 62Z"
          fill="#e8879f"/>
      </svg>

      {/* message */}
      <div style={{
        fontFamily: "'Caveat', cursive",
        fontSize: '20px', fontWeight: '600',
        color: '#9b5cb0', textAlign: 'center',
        lineHeight: 1.4, margin: '8px 0 20px',
      }}>
        you earned this rest,<br/>little star 🌸
      </div>

      {/* countdown */}
      <div style={{
        backgroundColor: '#fce4ef',
        borderRadius: '20px',
        border: '1.5px dashed #f2b8c6',
        padding: '16px 40px',
        textAlign: 'center',
        marginBottom: '20px',
      }}>
        <div style={{
          fontFamily: "'Caveat', cursive",
          fontSize: '48px', fontWeight: '600',
          color: '#b85c78', lineHeight: 1,
        }}>
          {timer.formatted}
        </div>
        <div style={{
          fontFamily: "'Caveat', cursive",
          fontSize: '14px', color: '#d4829c',
          marginTop: '4px',
        }}>soft break</div>
      </div>

      {/* paw rounds */}
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
          fontSize: '13px', color: '#b85c78',
          marginLeft: '4px',
        }}>
          {timer.rounds} of {timer.totalRounds} rounds
        </span>
      </div>

      {/* buttons */}
      <div style={{display: 'flex', gap: '10px', width: '100%'}}>
        {timer.isRunning ? (
          <button onClick={timer.pause} style={{
            flex: 1, padding: '14px',
            borderRadius: '50px', border: 'none',
            backgroundColor: '#d4a8f0',
            fontFamily: "'Caveat', cursive",
            fontSize: '18px', fontWeight: '600',
            color: '#fff', cursor: 'pointer',
          }}>pause break 🌙</button>
        ) : (
          <button onClick={timer.start} style={{
            flex: 1, padding: '14px',
            borderRadius: '50px', border: 'none',
            backgroundColor: '#d4a8f0',
            fontFamily: "'Caveat', cursive",
            fontSize: '18px', fontWeight: '600',
            color: '#fff', cursor: 'pointer',
          }}>keep resting 🌙</button>
        )}
        <button onClick={timer.reset} style={{
          padding: '14px 20px',
          borderRadius: '50px', border: 'none',
          backgroundColor: '#fce4ef',
          fontFamily: "'Caveat', cursive",
          fontSize: '18px', fontWeight: '600',
          color: '#b85c78', cursor: 'pointer',
        }}>reset 🐾</button>
      </div>

    </div>
  )
}