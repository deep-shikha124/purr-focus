export default function HomeScreen({ onStart, focusMin, setFocusMin, breakMin, setBreakMin, totalRounds, setTotalRounds }) {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#fff8fb',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '40px 24px 100px',
      fontFamily: "'Nunito', sans-serif",
    }}>

      {/* stars */}
      <div style={{alignSelf: 'flex-start', fontFamily: "'Caveat', cursive", fontSize: '12px', color: '#f7c5d5'}}>✦ ✦</div>

      {/* badge */}
      <div style={{
        fontFamily: "'Caveat', cursive",
        fontSize: '14px', fontWeight: '600',
        backgroundColor: '#fde8b2', color: '#b8761a',
        padding: '4px 16px', borderRadius: '20px',
        marginTop: '8px', marginBottom: '4px',
      }}>night mode ☁</div>

      {/* cat SVG */}
      <svg width="130" height="130" viewBox="0 0 100 98" fill="none">
        <path d="M22 71 Q18 58 25 49 Q31 41 50 40 Q70 39 77 49 Q83 59 79 71 Q75 83 50 84 Q25 85 22 71Z" fill="#f9c8d8" stroke="#e8879f" strokeWidth="1.4" strokeLinecap="round"/>
        <path d="M28 33 Q27 19 39 15 Q51 11 63 17 Q75 22 74 35 Q75 48 61 52 Q50 55 39 51 Q27 47 28 33Z" fill="#f9c8d8" stroke="#e8879f" strokeWidth="1.4" strokeLinecap="round"/>
        <path d="M32 21 Q24 9 36 14 Q38 18 35 23Z" fill="#f9c8d8" stroke="#e8879f" strokeWidth="1.2" strokeLinejoin="round"/>
        <path d="M32 21 Q27 12 35 15 Q37 18 34 22Z" fill="#fbbfd4"/>
        <path d="M64 20 Q73 8 62 14 Q61 18 64 22Z" fill="#f9c8d8" stroke="#e8879f" strokeWidth="1.2" strokeLinejoin="round"/>
        <path d="M63 20 Q70 11 63 15 Q62 18 63 21Z" fill="#fbbfd4"/>
        <ellipse cx="34" cy="44" rx="5" ry="3.5" fill="#ffb3cc" opacity="0.55"/>
        <ellipse cx="65" cy="43" rx="5" ry="3.5" fill="#ffb3cc" opacity="0.55"/>
        <path d="M37 32 Q40 29 43 32" stroke="#c96a8a" strokeWidth="1.6" fill="none" strokeLinecap="round"/>
        <path d="M55 31 Q58 28 61 31" stroke="#c96a8a" strokeWidth="1.6" fill="none" strokeLinecap="round"/>
        <path d="M48 39 Q50 37 52 39 Q51 41 49 41 Q47 41 48 39Z" fill="#e8879f"/>
        <path d="M46 43 Q50 46 54 43" stroke="#e8879f" strokeWidth="1.1" fill="none" strokeLinecap="round"/>
        <line x1="27" y1="39" x2="42" y2="40" stroke="#e8879f" strokeWidth="0.9" opacity="0.6"/>
        <line x1="27" y1="42" x2="42" y2="42" stroke="#e8879f" strokeWidth="0.9" opacity="0.6"/>
        <line x1="57" y1="39" x2="73" y2="38" stroke="#e8879f" strokeWidth="0.9" opacity="0.6"/>
        <line x1="57" y1="42" x2="73" y2="42" stroke="#e8879f" strokeWidth="0.9" opacity="0.6"/>
        <path d="M34 65 Q33 61 38 60 Q50 59 63 60 Q67 61 66 65 Q65 72 62 76 Q57 80 50 80 Q42 80 37 75 Q34 71 34 65Z" fill="#fef3d0" stroke="#f5c97e" strokeWidth="1.3"/>
        <path d="M66 63 Q73 62 73 68 Q73 74 66 74" stroke="#f5c97e" strokeWidth="1.4" fill="none" strokeLinecap="round"/>
        <text x="50" y="73" textAnchor="middle" fontSize="9" fill="#c97d2e" fontFamily="Caveat, cursive">café ☕</text>
        <path d="M42 57 Q44 53 42 49" stroke="#ffc2d4" strokeWidth="1.3" fill="none" strokeLinecap="round" opacity="0.7"/>
        <path d="M50 56 Q52 52 50 48" stroke="#ffc2d4" strokeWidth="1.3" fill="none" strokeLinecap="round" opacity="0.7"/>
        <path d="M58 57 Q60 53 58 49" stroke="#ffc2d4" strokeWidth="1.3" fill="none" strokeLinecap="round" opacity="0.7"/>
      </svg>

      {/* tagline */}
      <div style={{
        fontFamily: "'Caveat', cursive",
        fontSize: '22px', fontWeight: '600',
        color: '#b85c78', textAlign: 'center',
        lineHeight: 1.3, marginBottom: '24px',
      }}>
        let's focus gently<br/>for a while 🌙
      </div>

      {/* session settings */}
      <div style={{
        width: '100%', backgroundColor: '#fff',
        borderRadius: '20px', border: '1.5px dashed #f2b8c6',
        padding: '20px', display: 'flex',
        flexDirection: 'column', gap: '16px',
        marginBottom: '24px',
      }}>

        {/* focus duration */}
        <div>
          <div style={{fontFamily: "'Caveat', cursive", fontSize: '14px', color: '#d4829c', marginBottom: '8px'}}>focus duration</div>
          <div style={{display: 'flex', gap: '8px'}}>
            {[15, 25, 50].map(min => (
              <button key={min} onClick={() => setFocusMin(min)} style={{
                flex: 1, padding: '10px',
                borderRadius: '12px', border: focusMin === min ? '2px solid #f4a0bc' : '1.5px dashed #f2b8c6',
                backgroundColor: focusMin === min ? '#fce4ef' : '#fff',
                fontFamily: "'Caveat', cursive",
                fontSize: '16px', fontWeight: '600',
                color: focusMin === min ? '#b85c78' : '#d4829c',
                cursor: 'pointer',
              }}>
                {min} min
              </button>
            ))}
          </div>
        </div>

        {/* break duration */}
        <div>
          <div style={{fontFamily: "'Caveat', cursive", fontSize: '14px', color: '#d4829c', marginBottom: '8px'}}>break duration</div>
          <div style={{display: 'flex', gap: '8px'}}>
            {[5, 10, 15].map(min => (
              <button key={min} onClick={() => setBreakMin(min)} style={{
                flex: 1, padding: '10px',
                borderRadius: '12px', border: breakMin === min ? '2px solid #f5c97e' : '1.5px dashed #fde8b2',
                backgroundColor: breakMin === min ? '#fef3d0' : '#fff',
                fontFamily: "'Caveat', cursive",
                fontSize: '16px', fontWeight: '600',
                color: breakMin === min ? '#9c6a1a' : '#c9a55a',
                cursor: 'pointer',
              }}>
                {min} min
              </button>
            ))}
          </div>
        </div>

        {/* rounds */}
        <div>
          <div style={{fontFamily: "'Caveat', cursive", fontSize: '14px', color: '#d4829c', marginBottom: '8px'}}>rounds</div>
          <div style={{display: 'flex', gap: '8px'}}>
            {[2, 4, 6].map(r => (
              <button key={r} onClick={() => setTotalRounds(r)} style={{
                flex: 1, padding: '10px',
                borderRadius: '12px', border: totalRounds === r ? '2px solid #c9b8f5' : '1.5px dashed #ede8fb',
                backgroundColor: totalRounds === r ? '#ede8fb' : '#fff',
                fontFamily: "'Caveat', cursive",
                fontSize: '16px', fontWeight: '600',
                color: totalRounds === r ? '#6b5ab7' : '#a99dd4',
                cursor: 'pointer',
              }}>
                {r}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* begin button */}
      <button onClick={onStart} style={{
        width: '100%', padding: '14px',
        borderRadius: '50px', border: 'none',
        backgroundColor: '#f4a0bc', color: '#fff',
        fontFamily: "'Caveat', cursive",
        fontSize: '20px', fontWeight: '600',
        cursor: 'pointer', marginBottom: '12px',
      }}>
        begin softly 🌸
      </button>

      {/* sound vibes */}
      <div style={{fontFamily: "'Caveat', cursive", fontSize: '13px', color: '#d4829c'}}>
        rain · café · night lo-fi
      </div>

    </div>
  )
}