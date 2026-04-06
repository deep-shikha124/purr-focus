import { useState } from 'react'
import HomeScreen from './components/HomeScreen'
import TimerScreen from './components/TimerScreen'
import BreakScreen from './components/BreakScreen'
import NotesScreen from './components/NotesScreen'
import useTimer from './hooks/useTimer'

const navItems = [
  { id: 'home',  label: 'home',  emoji: '🏠' },
  { id: 'timer', label: 'timer', emoji: '🌸' },
  { id: 'break', label: 'break', emoji: '😴' },
  { id: 'notes', label: 'notes', emoji: '📝' },
]

export default function App() {
  const [screen, setScreen] = useState('home')
  const [focusMin, setFocusMin] = useState(25)
  const [breakMin, setBreakMin] = useState(5)
  const [totalRounds, setTotalRounds] = useState(4)

  const timer = useTimer(focusMin)

  const handleStart = () => {
    timer.setFocusMinutes(focusMin)
    timer.setBreakMinutes(breakMin)
    timer.setTotalRounds(totalRounds)
    timer.start()
    setScreen('timer')
  }

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#fff8fb',
      display: 'flex',
      flexDirection: 'column',
      maxWidth: '480px',
      margin: '0 auto',
      position: 'relative',
    }}>
      <div style={{flex: 1, paddingBottom: '80px'}}>
        {screen === 'home' && (
          <HomeScreen
            onStart={handleStart}
            focusMin={focusMin}
            setFocusMin={setFocusMin}
            breakMin={breakMin}
            setBreakMin={setBreakMin}
            totalRounds={totalRounds}
            setTotalRounds={setTotalRounds}
          />
        )}
        {screen === 'timer' && <TimerScreen timer={timer} />}
        {screen === 'break' && <BreakScreen timer={timer} />}
        {screen === 'notes' && <NotesScreen />}
      </div>

      {/* bottom nav */}
      <div style={{
        position: 'fixed', bottom: 0,
        left: '50%', transform: 'translateX(-50%)',
        width: '100%', maxWidth: '480px',
        backgroundColor: '#fff0f5',
        borderTop: '1.5px dashed #f2b8c6',
        display: 'flex', justifyContent: 'space-around',
        padding: '10px 0 16px', zIndex: 100,
      }}>
        {navItems.map(item => (
          <button key={item.id} onClick={() => setScreen(item.id)} style={{
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', gap: '3px',
            background: 'none', border: 'none', cursor: 'pointer',
            padding: '4px 12px', borderRadius: '12px',
            backgroundColor: screen === item.id ? '#fce4ef' : 'transparent',
            transition: 'background-color 0.2s',
          }}>
            <span style={{fontSize: '20px'}}>{item.emoji}</span>
            <span style={{
              fontFamily: "'Caveat', cursive", fontSize: '13px',
              color: screen === item.id ? '#b85c78' : '#d4829c',
              fontWeight: screen === item.id ? '600' : '400',
            }}>{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}