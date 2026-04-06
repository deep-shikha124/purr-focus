import { useState, useEffect, useRef } from 'react'

export default function useTimer(initialMinutes = 25) {
  const [totalSeconds, setTotalSeconds]   = useState(initialMinutes * 60)
  const [remaining, setRemaining]         = useState(initialMinutes * 60)
  const [isRunning, setIsRunning]         = useState(false)
  const [isBreak, setIsBreak]             = useState(false)
  const [rounds, setRounds]               = useState(0)
  const [totalRounds, setTotalRounds]     = useState(4)
  const [breakMinutes, setBreakMinutes]   = useState(5)
  const intervalRef = useRef(null)

  // start or resume
  const start = () => setIsRunning(true)

  // pause
  const pause = () => setIsRunning(false)

  // reset back to beginning
  const reset = () => {
    setIsRunning(false)
    setIsBreak(false)
    setRounds(0)
    setRemaining(totalSeconds)
  }

  // change focus duration
  const setFocusMinutes = (mins) => {
    const secs = mins * 60
    setTotalSeconds(secs)
    setRemaining(secs)
    setIsRunning(false)
    setIsBreak(false)
  }

  // countdown effect
  useEffect(() => {
    if (!isRunning) {
      clearInterval(intervalRef.current)
      return
    }

    intervalRef.current = setInterval(() => {
      setRemaining(prev => {
        if (prev <= 1) {
          clearInterval(intervalRef.current)
          setIsRunning(false)

          if (!isBreak) {
            // focus session done → go to break
            setRounds(r => r + 1)
            setIsBreak(true)
            return breakMinutes * 60
          } else {
            // break done → go back to focus
            setIsBreak(false)
            return totalSeconds
          }
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(intervalRef.current)
  }, [isRunning, isBreak, totalSeconds, breakMinutes])

  // format as MM:SS
  const format = (secs) => {
    const m = Math.floor(secs / 60)
    const s = secs % 60
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
  }

  return {
    remaining,
    formatted: format(remaining),
    isRunning,
    isBreak,
    rounds,
    totalRounds,
    start,
    pause,
    reset,
    setFocusMinutes,
    setBreakMinutes,
    setTotalRounds,
    progress: 1 - remaining / (isBreak ? breakMinutes * 60 : totalSeconds),
  }
}