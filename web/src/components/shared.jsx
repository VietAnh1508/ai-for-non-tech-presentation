import { useState, useEffect, useRef } from 'react'

export function NeuralBackground({ color = '#d4956a', opacity = 0.18 }) {
  const canvasRef = useRef(null)
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let w = (canvas.width = window.innerWidth)
    let h = (canvas.height = window.innerHeight)
    const nodes = Array.from({ length: 26 }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.28, vy: (Math.random() - 0.5) * 0.28,
    }))
    let raf, last = 0
    const draw = (ts) => {
      if (ts - last < 33) { raf = requestAnimationFrame(draw); return }
      last = ts
      ctx.clearRect(0, 0, w, h)
      nodes.forEach(n => {
        n.x += n.vx; n.y += n.vy
        if (n.x < 0 || n.x > w) n.vx *= -1
        if (n.y < 0 || n.y > h) n.vy *= -1
      })
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x, dy = nodes[i].y - nodes[j].y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < 165) {
            const a = Math.floor((1 - d / 165) * 30).toString(16).padStart(2, '0')
            ctx.beginPath(); ctx.moveTo(nodes[i].x, nodes[i].y); ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.strokeStyle = color + a; ctx.lineWidth = 0.6; ctx.stroke()
          }
        }
      }
      nodes.forEach(n => {
        ctx.beginPath(); ctx.arc(n.x, n.y, 1.8, 0, Math.PI * 2)
        ctx.fillStyle = color + '60'; ctx.fill()
      })
      raf = requestAnimationFrame(draw)
    }
    raf = requestAnimationFrame(draw)
    const onResize = () => { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight }
    window.addEventListener('resize', onResize)
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', onResize) }
  }, [color])
  return <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity, pointerEvents: 'none' }} />
}

export function SlideContainer({ children, accentColor = '#e07520', neural = true }) {
  return (
    <div style={{
      width: '100vw', height: '100vh', position: 'relative', overflow: 'hidden',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      background: '#fffbf4',
    }}>
      <div style={{
        position: 'absolute', top: '-12%', left: '-6%', width: '55%', height: '55%', borderRadius: '50%',
        background: `radial-gradient(ellipse, ${accentColor}12 0%, transparent 65%)`,
        pointerEvents: 'none', animation: 'pulse 9s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute', bottom: '-18%', right: '-6%', width: '42%', height: '42%', borderRadius: '50%',
        background: `radial-gradient(ellipse, ${accentColor}08 0%, transparent 65%)`,
        pointerEvents: 'none', animation: 'pulse 13s ease-in-out infinite reverse',
      }} />
      {neural && <NeuralBackground color={accentColor} opacity={0.15} />}
      {children}
    </div>
  )
}

export function AnimateIn({ children, delay = 0, style = {} }) {
  const [vis, setVis] = useState(false)
  useEffect(() => { const t = setTimeout(() => setVis(true), delay); return () => clearTimeout(t) }, [])
  return (
    <div style={{
      opacity: vis ? 1 : 0, transform: vis ? 'translateY(0)' : 'translateY(22px)',
      transition: 'opacity 0.58s cubic-bezier(0.4,0,0.2,1), transform 0.58s cubic-bezier(0.4,0,0.2,1)',
      ...style,
    }}>
      {children}
    </div>
  )
}

export function GlassCard({ children, style = {}, onClick, accentColor = null }) {
  const [hov, setHov] = useState(false)
  return (
    <div onClick={onClick}
      onMouseEnter={() => onClick && setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: hov ? 'rgba(255,255,255,0.98)' : 'rgba(255,255,255,0.82)',
        border: `1px solid ${hov ? (accentColor ? accentColor + '55' : '#c8b09a') : '#e8ddd0'}`,
        borderRadius: '16px',
        boxShadow: hov ? `0 8px 32px ${accentColor ? accentColor + '20' : 'rgba(180,140,100,0.18)'}` : '0 2px 12px rgba(180,140,100,0.10)',
        transition: 'all 0.25s ease', transform: hov ? 'translateY(-3px)' : 'none',
        cursor: onClick ? 'pointer' : 'default', ...style,
      }}
    >{children}</div>
  )
}

export function GlowButton({ children, onClick, color = '#e07520', size = 'md', disabled = false, style = {} }) {
  const [hov, setHov] = useState(false)
  const [press, setPress] = useState(false)
  const sizes = { sm: { padding: '7px 16px', fontSize: '13px' }, md: { padding: '11px 28px', fontSize: '15px' }, lg: { padding: '15px 42px', fontSize: '18px', fontWeight: 700 } }
  return (
    <button onClick={!disabled ? onClick : undefined}
      onMouseEnter={() => !disabled && setHov(true)}
      onMouseLeave={() => { setHov(false); setPress(false) }}
      onMouseDown={() => !disabled && setPress(true)}
      onMouseUp={() => setPress(false)}
      style={{
        background: hov && !disabled ? color : (disabled ? '#f0e8d8' : 'transparent'),
        border: `1.5px solid ${disabled ? '#d8c8b0' : color}`,
        borderRadius: '100px', color: disabled ? '#c0a888' : (hov ? '#fff' : color),
        fontFamily: "'Outfit', sans-serif", fontWeight: 600,
        cursor: disabled ? 'not-allowed' : 'pointer', transition: 'all 0.2s ease',
        transform: press ? 'scale(0.97)' : hov ? 'scale(1.02)' : 'scale(1)',
        boxShadow: hov && !disabled ? `0 4px 20px ${color}40` : 'none',
        ...sizes[size], ...style,
      }}
    >{children}</button>
  )
}

export function Tag({ children, color = '#e07520' }) {
  return (
    <span style={{
      display: 'inline-block', background: color + '18', border: `1px solid ${color}35`,
      borderRadius: '100px', padding: '3px 11px', fontSize: '11px', fontWeight: 700, color,
      letterSpacing: '0.08em', textTransform: 'uppercase',
    }}>{children}</span>
  )
}

export function ActHeader({ actNum, actName, color = '#e07520' }) {
  return (
    <div style={{ position: 'absolute', top: '8px', left: '14px', display: 'flex', alignItems: 'center', gap: '10px', zIndex: 20 }}>
      <Tag color={color}>Act {actNum}</Tag>
      <span style={{ color: '#b09878', fontSize: '13px', fontWeight: 500 }}>{actName}</span>
    </div>
  )
}

export function SlideCount({ current, total, color = '#e07520' }) {
  return (
    <div style={{
      position: 'absolute', bottom: '28px', left: '50%', transform: 'translateX(-50%)',
      display: 'flex', gap: '8px', alignItems: 'center', zIndex: 20,
    }}>
      {Array.from({ length: total }).map((_, i) => (
        <div key={i} style={{ width: i === current ? '22px' : '7px', height: '7px', borderRadius: '3.5px', background: i === current ? color : '#e0d0c0', transition: 'all 0.3s ease' }} />
      ))}
    </div>
  )
}

export function TokenPill({ text, color }) {
  return (
    <span style={{
      display: 'inline-block', background: color + '18', border: `1px solid ${color}45`,
      borderRadius: '6px', padding: '4px 10px', margin: '3px 4px',
      fontFamily: "'JetBrains Mono', monospace", fontSize: '15px', color, fontWeight: 500,
    }}>{text}</span>
  )
}

export function Insight({ children, color = '#e07520', style = {} }) {
  return (
    <div style={{
      background: color + '0d', border: `1px solid ${color}22`,
      borderLeft: `3px solid ${color}`, borderRadius: '0 12px 12px 0',
      padding: '13px 18px', fontSize: '14px', lineHeight: 1.65,
      color: '#6b5642', fontStyle: 'italic', ...style,
    }}>{children}</div>
  )
}
