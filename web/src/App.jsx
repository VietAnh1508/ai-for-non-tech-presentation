import { useState, useEffect, useRef } from 'react'
import './index.css'
import { SlideContainer, AnimateIn, GlowButton } from './components/shared'
import { act1Slides } from './components/act1'
import { act2Slides } from './components/act2'
import { act3Slides } from './components/act3'
import { act4Slides } from './components/act4'
import { act5Slides } from './components/act5'
import { act6Slides } from './components/act6'

function CoverSlide({ onBegin }) {
  return (
    <SlideContainer accentColor="#e07520">
      <div style={{ zIndex: 10, textAlign: 'center', maxWidth: '700px', width: '90%' }}>
        <AnimateIn delay={200}>
          <div style={{ fontSize: '12px', fontWeight: 700, color: '#b09878', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '28px' }}>
            A visual journey through the machine
          </div>
        </AnimateIn>
        <AnimateIn delay={400}>
          <h1 style={{ fontSize: 'clamp(2.4rem,5.5vw,5rem)', fontWeight: 900, lineHeight: 1.06, color: '#1c1208', marginBottom: '20px', letterSpacing: '-0.02em' }}>
            How does an AI mind<br />
            <span style={{ background: 'linear-gradient(90deg, #e07520, #f59e0b, #d97706)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>get built?</span>
          </h1>
        </AnimateIn>
        <AnimateIn delay={650}>
          <p style={{ fontSize: 'clamp(1rem,1.8vw,1.2rem)', color: '#9a8068', lineHeight: 1.7, marginBottom: '40px' }}>
            Told simply. No maths required. Fully interactive.
          </p>
        </AnimateIn>
        <AnimateIn delay={900}>
          <GlowButton onClick={onBegin} color="#e07520" size="lg">Begin the journey →</GlowButton>
        </AnimateIn>
        <AnimateIn delay={1100}>
          <div style={{ display: 'flex', gap: '28px', justifyContent: 'center', marginTop: '36px' }}>
            {['6 chapters', '~10 minutes', 'interactive demos'].map(t => (
              <span key={t} style={{ fontSize: '13px', color: '#c8b8a0', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#d4b898', display: 'inline-block' }} />
                {t}
              </span>
            ))}
          </div>
        </AnimateIn>
      </div>
    </SlideContainer>
  )
}

function FinalSlide({ onRestart }) {
  const CFL = '#d97706'
  const takeaways = [
    { act: 1, text: 'LLMs train on trillions of tokens of human-written text' },
    { act: 2, text: 'The core task: predict the next word — everything else emerges' },
    { act: 3, text: 'Tokens → embeddings → attention → context window' },
    { act: 4, text: 'RLHF transforms a raw predictor into a helpful assistant' },
    { act: 5, text: 'Hallucination is structural — there is no truth-checker inside' },
    { act: 6, text: 'Prompting is about setting a scene, not asking a question' },
  ]
  const actColors = ['#d97706','#e07520','#0891b2','#16a34a','#dc2626','#7c3aed']
  return (
    <SlideContainer accentColor={CFL}>
      <div style={{ zIndex: 10, maxWidth: '680px', width: '90%', textAlign: 'center' }}>
        <AnimateIn delay={150}>
          <div style={{ fontSize: '52px', marginBottom: '12px', animation: 'float 3s ease-in-out infinite' }}>⚡</div>
          <h1 style={{ fontSize: 'clamp(2rem,4.5vw,3.8rem)', fontWeight: 900, color: '#1c1208', lineHeight: 1.08, marginBottom: '8px' }}>You made it.</h1>
          <p style={{ fontSize: '16px', color: '#8a7060', marginBottom: '28px' }}>Here's what you now understand:</p>
        </AnimateIn>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '9px', marginBottom: '32px', textAlign: 'left' }}>
          {takeaways.map((t, i) => (
            <AnimateIn key={t.act} delay={350 + i * 120}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center', background: 'rgba(255,250,242,0.95)', border: '1px solid #e8ddd0', borderRadius: '10px', padding: '11px 16px', boxShadow: '0 1px 6px rgba(180,140,100,0.10)' }}>
                <div style={{ width: '22px', height: '22px', borderRadius: '50%', flexShrink: 0, background: actColors[i] + '22', border: `1.5px solid ${actColors[i]}55`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 800, color: actColors[i] }}>{t.act}</div>
                <span style={{ fontSize: '14px', color: '#5c4e3e', lineHeight: 1.5 }}>{t.text}</span>
              </div>
            </AnimateIn>
          ))}
        </div>
        <AnimateIn delay={1200}>
          <GlowButton onClick={onRestart} color={CFL} size="md">↺ Start over</GlowButton>
        </AnimateIn>
      </div>
    </SlideContainer>
  )
}

function ChapterMap({ currentAct, idxInAct, onJump, onClose }) {
  const chapters = [
    { act: 0, name: 'Introduction',        color: '#e07520', first: 0,  slides: 1, icon: '★' },
    { act: 1, name: 'The Raw Material',     color: '#d97706', first: 1,  slides: 3 },
    { act: 2, name: 'Learning to Predict',  color: '#e07520', first: 4,  slides: 3 },
    { act: 3, name: 'How the Model Thinks', color: '#0891b2', first: 7,  slides: 4 },
    { act: 4, name: 'From Raw to Useful',   color: '#16a34a', first: 11, slides: 3 },
    { act: 5, name: 'The Limits',           color: '#dc2626', first: 14, slides: 3 },
    { act: 6, name: 'Using It Well',        color: '#7c3aed', first: 17, slides: 3 },
    { act: 7, name: 'Summary',              color: '#d97706', first: 20, slides: 1, icon: '✓' },
  ]

  const [hov, setHov] = useState(null)

  return (
    <div onClick={onClose} style={{
      position: 'fixed', inset: 0, zIndex: 150,
      background: 'rgba(255,251,244,0.72)', backdropFilter: 'blur(14px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      animation: 'fadeIn 0.18s ease',
    }}>
      <div onClick={e => e.stopPropagation()} style={{
        background: '#fff', border: '1px solid #e8ddd0',
        borderRadius: '20px', padding: '26px 22px',
        maxWidth: '440px', width: '92%',
        boxShadow: '0 20px 60px rgba(180,140,100,0.22)',
        animation: 'pop 0.22s ease',
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, color: '#c0a888', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
            Chapters
          </div>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#c0a888', fontSize: '18px', lineHeight: 1, padding: '0 2px' }}>×</button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
          {chapters.map(ch => {
            const isActive = currentAct === ch.act
            const isHov = hov === ch.act
            return (
              <div key={ch.act}
                onClick={() => onJump(ch.first)}
                onMouseEnter={() => setHov(ch.act)}
                onMouseLeave={() => setHov(null)}
                style={{
                  display: 'flex', alignItems: 'center', gap: '12px',
                  padding: '10px 12px', borderRadius: '10px', cursor: 'pointer',
                  background: isActive ? ch.color + '12' : isHov ? '#f8f3ed' : 'transparent',
                  border: `1px solid ${isActive ? ch.color + '35' : 'transparent'}`,
                  transition: 'all 0.15s ease',
                }}>
                <div style={{
                  width: '26px', height: '26px', borderRadius: '50%', flexShrink: 0,
                  background: ch.color + '18', border: `1.5px solid ${ch.color}50`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '11px', fontWeight: 800, color: ch.color,
                }}>
                  {ch.icon || ch.act}
                </div>
                <span style={{ flex: 1, fontSize: '14px', fontWeight: isActive ? 700 : 400, color: isActive ? '#1c1208' : '#6b5642', lineHeight: 1.3 }}>
                  {ch.name}
                  {ch.act > 0 && ch.act < 7 && (
                    <span style={{ fontSize: '11px', color: '#c0a888', marginLeft: '6px' }}>Act {ch.act}</span>
                  )}
                </span>
                {ch.slides > 1 && (
                  <div style={{ display: 'flex', gap: '4px', flexShrink: 0 }}>
                    {Array.from({ length: ch.slides }).map((_, i) => (
                      <div key={i} style={{
                        width: '6px', height: '6px', borderRadius: '50%',
                        background: (isActive && idxInAct === i) ? ch.color : ch.color + '35',
                        transition: 'background 0.2s ease',
                      }} />
                    ))}
                  </div>
                )}
                {isActive && (
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: ch.color, flexShrink: 0 }} />
                )}
              </div>
            )
          })}
        </div>

        <div style={{ marginTop: '16px', paddingTop: '14px', borderTop: '1px solid #f0e8de', fontSize: '12px', color: '#c8b8a0', textAlign: 'center' }}>
          Press Esc or click outside to close
        </div>
      </div>
    </div>
  )
}

export default function App() {
  const structure = [
    { slides: [CoverSlide], act: 0, actName: '',                    color: '#e07520' },
    { slides: act1Slides,   act: 1, actName: 'The Raw Material',     color: '#d97706' },
    { slides: act2Slides,   act: 2, actName: 'Learning to Predict',  color: '#e07520' },
    { slides: act3Slides,   act: 3, actName: 'How the Model Thinks', color: '#0891b2' },
    { slides: act4Slides,   act: 4, actName: 'From Raw to Useful',   color: '#16a34a' },
    { slides: act5Slides,   act: 5, actName: 'The Limits',           color: '#dc2626' },
    { slides: act6Slides,   act: 6, actName: 'Using It Well',        color: '#7c3aed' },
    { slides: [FinalSlide], act: 7, actName: '',                    color: '#d97706' },
  ]

  const manifest = []
  structure.forEach(grp => {
    grp.slides.forEach((S, i) => {
      manifest.push({ Component: S, act: grp.act, actName: grp.actName, color: grp.color, idxInAct: i, totalInAct: grp.slides.length })
    })
  })
  const total = manifest.length

  const [cur, setCur] = useState(() => {
    const s = localStorage.getItem('llm-explainer-slide')
    const n = s ? parseInt(s, 10) : 0
    return (n >= 0 && n < total) ? n : 0
  })
  const [animKey, setAnimKey] = useState(0)
  const [dir, setDir] = useState(1)
  const [showMap, setShowMap] = useState(false)
  const touchStart = useRef(null)

  useEffect(() => { localStorage.setItem('llm-explainer-slide', String(cur)) }, [cur])

  const go = (delta) => {
    const next = cur + delta
    if (next < 0 || next >= total) return
    setDir(delta); setAnimKey(k => k + 1); setCur(next)
  }

  const jumpTo = (idx) => {
    if (idx < 0 || idx >= total) return
    setDir(idx >= cur ? 1 : -1)
    setAnimKey(k => k + 1)
    setCur(idx)
    setShowMap(false)
  }

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') { setShowMap(false); return }
      if (showMap) return
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') go(1)
      if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')   go(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [cur, showMap])

  const onTouchStart = (e) => { touchStart.current = e.touches[0].clientX }
  const onTouchEnd   = (e) => {
    if (touchStart.current === null) return
    const dx = e.changedTouches[0].clientX - touchStart.current
    if (Math.abs(dx) > 48) go(dx > 0 ? -1 : 1)
    touchStart.current = null
  }

  const { Component, color, act, idxInAct } = manifest[cur]
  const pct = (cur / (total - 1)) * 100
  const anim = dir > 0 ? 'slideFromRight 0.45s cubic-bezier(0.4,0,0.2,1) forwards'
                       : 'slideFromLeft 0.45s cubic-bezier(0.4,0,0.2,1) forwards'
  const isFirst = cur === 0, isLast = cur === total - 1

  const slideProps = {}
  if (isFirst) slideProps.onBegin = () => go(1)
  if (isLast)  slideProps.onRestart = () => { setDir(-1); setAnimKey(k=>k+1); setCur(0) }

  const navBtn = (label, onClick, side) => (
    <button onClick={onClick} style={{
      position: 'fixed', bottom: '24px', [side]: '32px', zIndex: 50,
      background: 'rgba(255,255,255,0.92)', border: '1px solid #e8ddd0',
      borderRadius: '100px', padding: '9px 18px',
      color: '#b09878', fontSize: '14px', fontWeight: 600,
      cursor: 'pointer', transition: 'all 0.2s ease',
      fontFamily: "'Outfit', sans-serif",
      boxShadow: '0 2px 8px rgba(180,140,100,0.12)',
    }}
      onMouseEnter={e => { e.currentTarget.style.color = color; e.currentTarget.style.borderColor = color + '80' }}
      onMouseLeave={e => { e.currentTarget.style.color = '#b09878'; e.currentTarget.style.borderColor = '#e8ddd0' }}>
      {label}
    </button>
  )

  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative', overflow: 'hidden', background: '#fffbf4' }}
      onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>

      {/* Progress bar */}
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, height: '3px', background: '#e8ddd0', zIndex: 100 }}>
        <div style={{ height: '100%', background: color, width: `${pct}%`, transition: 'width 0.4s ease, background 0.6s ease', boxShadow: `0 0 6px ${color}50` }} />
      </div>

      {/* Chapter map button */}
      <button onClick={() => setShowMap(s => !s)} title="Jump to chapter" style={{
        position: 'fixed', top: '44px', left: '14px', zIndex: 100,
        background: showMap ? color + '15' : 'rgba(255,255,255,0.9)',
        border: `1px solid ${showMap ? color + '50' : '#e8ddd0'}`,
        borderRadius: '8px', width: '32px', height: '32px',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        cursor: 'pointer', transition: 'all 0.2s ease',
        boxShadow: '0 1px 4px rgba(180,140,100,0.14)',
      }}>
        <svg width="14" height="11" viewBox="0 0 14 11" fill="none">
          <rect width="14" height="2" rx="1" fill={showMap ? color : '#b09878'}/>
          <rect y="4.5" width="10" height="2" rx="1" fill={showMap ? color : '#b09878'}/>
          <rect y="9" width="12" height="2" rx="1" fill={showMap ? color : '#b09878'}/>
        </svg>
      </button>

      {/* Slide counter */}
      <div style={{ position: 'fixed', top: '16px', right: '32px', zIndex: 50, fontSize: '12px', color: '#c8b8a0', fontWeight: 600, fontFamily: "'JetBrains Mono', monospace" }}>
        {cur}/{total - 1}
      </div>

      {/* Slide */}
      <div key={animKey} style={{ width: '100%', height: '100%', animation: animKey > 0 ? anim : 'none' }}>
        <Component {...slideProps} />
      </div>

      {/* Navigation */}
      {!isFirst && navBtn('← prev', () => go(-1), 'left')}
      {!isLast  && navBtn('next →', () => go(1),  'right')}

      {/* Chapter map overlay */}
      {showMap && (
        <ChapterMap
          currentAct={act}
          idxInAct={idxInAct}
          onJump={jumpTo}
          onClose={() => setShowMap(false)}
        />
      )}
    </div>
  )
}
