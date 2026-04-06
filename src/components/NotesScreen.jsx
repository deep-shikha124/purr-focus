import { useState, useEffect } from 'react'

export default function NotesScreen() {
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem('purr-checklist')
    return saved ? JSON.parse(saved) : [
      { id: 1, text: 'water the plants 🌿', done: false },
      { id: 2, text: 'read for 20 mins 📖', done: false },
      { id: 3, text: 'give kitty cuddles 🐾', done: false },
    ]
  })

  const [note, setNote] = useState(() => {
    return localStorage.getItem('purr-note') || ''
  })

  const [newItem, setNewItem] = useState('')

  useEffect(() => {
    localStorage.setItem('purr-checklist', JSON.stringify(items))
  }, [items])

  useEffect(() => {
    localStorage.setItem('purr-note', note)
  }, [note])

  const addItem = () => {
    if (!newItem.trim()) return
    setItems(prev => [...prev, {
      id: Date.now(),
      text: newItem.trim(),
      done: false,
    }])
    setNewItem('')
  }

  const toggleItem = (id) => {
    setItems(prev => prev.map(item =>
      item.id === id ? { ...item, done: !item.done } : item
    ))
  }

  const deleteItem = (id) => {
    setItems(prev => prev.filter(item => item.id !== id))
  }

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#fffdf5',
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
        fontSize: '11px', color: '#f5c97e',
      }}>✦</div>
      <div style={{
        alignSelf: 'flex-end',
        fontFamily: "'Caveat', cursive",
        fontSize: '10px', color: '#f9c8d8',
        marginTop: '-16px',
      }}>✦ ✦</div>

      {/* badge */}
      <div style={{
        fontFamily: "'Caveat', cursive",
        fontSize: '14px', fontWeight: '600',
        backgroundColor: '#fde8b2', color: '#9c6a1a',
        padding: '4px 16px', borderRadius: '20px',
        marginBottom: '16px',
      }}>my little notes 🐱</div>

      {/* tiny sitting cat */}
      <svg width="60" height="56" viewBox="0 0 60 56"
        fill="none" style={{alignSelf: 'flex-end', marginBottom: '-8px'}}>
        <path d="M10 38 Q9 28 18 24 Q30 18 42 24 Q50 28 49 38 Q48 46 30 47 Q12 48 10 38Z"
          fill="#f9c8d8" stroke="#e8879f" strokeWidth="1.2"/>
        <path d="M14 25 Q8 15 19 18 Q21 22 18 26Z"
          fill="#f9c8d8" stroke="#e8879f" strokeWidth="1"/>
        <path d="M15 25 Q10 17 19 19 Q20 22 18 25Z" fill="#fbbfd4"/>
        <path d="M40 24 Q47 14 36 18 Q34 22 37 26Z"
          fill="#f9c8d8" stroke="#e8879f" strokeWidth="1"/>
        <path d="M39 24 Q45 15 36 19 Q34 22 37 25Z" fill="#fbbfd4"/>
        <path d="M18 31 Q21 28 24 31"
          stroke="#c96a8a" strokeWidth="1.3"
          fill="none" strokeLinecap="round"/>
        <path d="M30 30 Q33 27 36 30"
          stroke="#c96a8a" strokeWidth="1.3"
          fill="none" strokeLinecap="round"/>
        <ellipse cx="30" cy="34" rx="2" ry="1.5" fill="#e8879f"/>
        <ellipse cx="17" cy="40" rx="5" ry="3.5"
          fill="#fbbfd4" stroke="#e8879f" strokeWidth="0.9"/>
        <ellipse cx="43" cy="40" rx="5" ry="3.5"
          fill="#fbbfd4" stroke="#e8879f" strokeWidth="0.9"/>
      </svg>

      {/* checklist card */}
      <div style={{
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: '16px',
        border: '1.5px dashed #f5c97e',
        padding: '16px',
        marginBottom: '16px',
      }}>
        <div style={{
          fontFamily: "'Caveat', cursive",
          fontSize: '16px', fontWeight: '600',
          color: '#9c6a1a',
          borderBottom: '1px dashed #fde8b2',
          paddingBottom: '8px', marginBottom: '12px',
        }}>today's focus ✏</div>

        {/* items */}
        {items.map(item => (
          <div key={item.id} style={{
            display: 'flex', alignItems: 'center',
            gap: '10px', padding: '6px 0',
            borderBottom: '1px dashed #fde8b2',
          }}>
            {/* checkbox */}
            <div onClick={() => toggleItem(item.id)} style={{
              width: '18px', height: '18px',
              borderRadius: '4px',
              border: '1.8px solid #e8879f',
              backgroundColor: item.done ? '#fce4ef' : '#fff',
              display: 'flex', alignItems: 'center',
              justifyContent: 'center', cursor: 'pointer',
              flexShrink: 0,
            }}>
              {item.done && (
                <svg width="10" height="8" viewBox="0 0 10 8">
                  <path d="M1 4L3.5 6.5L9 1"
                    stroke="#e8879f" strokeWidth="1.5"
                    fill="none" strokeLinecap="round"
                    strokeLinejoin="round"/>
                </svg>
              )}
            </div>

            {/* text */}
            <span style={{
              fontFamily: "'Caveat', cursive",
              fontSize: '15px', flex: 1,
              color: item.done ? '#d4829c' : '#9c6a1a',
              textDecoration: item.done ? 'line-through' : 'none',
              opacity: item.done ? 0.7 : 1,
            }}>{item.text}</span>

            {/* delete */}
            <span onClick={() => deleteItem(item.id)} style={{
              fontSize: '14px', cursor: 'pointer',
              color: '#f2b8c6', fontWeight: '600',
              padding: '0 4px',
            }}>✕</span>
          </div>
        ))}

        {/* add new item */}
        <div style={{
          display: 'flex', gap: '8px',
          marginTop: '12px', alignItems: 'center',
        }}>
          <input
            value={newItem}
            onChange={e => setNewItem(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && addItem()}
            placeholder="add something gentle..."
            style={{
              flex: 1, padding: '8px 12px',
              borderRadius: '12px',
              border: '1.5px dashed #f5c97e',
              fontFamily: "'Caveat', cursive",
              fontSize: '15px', color: '#9c6a1a',
              backgroundColor: '#fffdf5',
              outline: 'none',
            }}
          />
          <button onClick={addItem} style={{
            padding: '8px 16px',
            borderRadius: '12px', border: 'none',
            backgroundColor: '#fde8b2',
            fontFamily: "'Caveat', cursive",
            fontSize: '15px', fontWeight: '600',
            color: '#9c6a1a', cursor: 'pointer',
          }}>+ add</button>
        </div>
      </div>

      {/* sticky note */}
      <div style={{
        width: '100%',
        backgroundColor: '#fef3d0',
        borderRadius: '14px',
        border: '1.5px dashed #f5c97e',
        padding: '14px 16px',
        position: 'relative',
      }}>
        {/* folded corner */}
        <div style={{
          position: 'absolute', top: 0, right: 0,
          width: 0, height: 0, borderStyle: 'solid',
          borderWidth: '0 20px 20px 0',
          borderColor: 'transparent #fde8b2 transparent transparent',
          borderRadius: '0 14px 0 0',
        }}/>
        <div style={{
          fontFamily: "'Caveat', cursive",
          fontSize: '14px', fontWeight: '600',
          color: '#9c6a1a', marginBottom: '8px',
        }}>soft reminder 🌼</div>
        <textarea
          value={note}
          onChange={e => setNote(e.target.value)}
          placeholder="write something kind to yourself..."
          rows={3}
          style={{
            width: '100%',
            fontFamily: "'Caveat', cursive",
            fontSize: '14px', color: '#b8761a',
            backgroundColor: 'transparent',
            border: 'none', outline: 'none',
            resize: 'none', lineHeight: 1.6,
          }}
        />
      </div>

    </div>
  )
}