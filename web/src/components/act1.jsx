import { useState, useEffect } from 'react'
import { SlideContainer, ActHeader, AnimateIn, Tag, Insight, SlideCount } from './shared'

const C1 = '#d97706'

function Act1Slide1() {
  const [filled, setFilled] = useState(false)
  useEffect(() => { const t = setTimeout(() => setFilled(true), 600); return () => clearTimeout(t) }, [])

  const sources = [
    { name: 'Web pages',      pct: 45, color: '#d97706' },
    { name: 'Source code',    pct: 20, color: '#22d3ee' },
    { name: 'Books & papers', pct: 17, color: '#f59e0b' },
    { name: 'Wikipedia',      pct:  8, color: '#10b981' },
    { name: 'Other text',     pct: 10, color: '#8b5cf6' },
  ]

  return (
    <SlideContainer accentColor={C1}>
      <ActHeader actNum="1" actName="The Raw Material" color={C1} />
      <div style={{ maxWidth: '700px', width: '90%', zIndex: 10 }}>
        <AnimateIn delay={120}>
          <Tag color={C1}>Where it all begins</Tag>
          <h1 style={{ fontSize: 'clamp(2rem,4.5vw,3.6rem)', fontWeight: 800, lineHeight: 1.08, margin: '16px 0 12px', color: '#1c1208' }}>
            First, a giant library
          </h1>
          <p style={{ fontSize: 'clamp(0.95rem,1.4vw,1.1rem)', color: '#6b5642', lineHeight: 1.75, marginBottom: '36px', maxWidth: '540px' }}>
            LLMs are trained on vast amounts of human-written text. Labs crawl and capture it from across the open internet — books, forums, code repositories, everything.
          </p>
        </AnimateIn>
        <AnimateIn delay={450}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '13px' }}>
            {sources.map((s, i) => (
              <div key={s.name} style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <span style={{ color: '#555370', fontSize: '13px', fontWeight: 600, width: '130px', textAlign: 'right', flexShrink: 0 }}>{s.name}</span>
                <div style={{ flex: 1, height: '9px', background: '#faf4ec', borderRadius: '5px', overflow: 'hidden' }}>
                  <div style={{
                    height: '100%', borderRadius: '5px',
                    background: `linear-gradient(90deg, ${s.color}cc, ${s.color}88)`,
                    width: filled ? `${s.pct * 2}%` : '0%',
                    transition: `width 1.1s cubic-bezier(0.4,0,0.2,1) ${350 + i * 120}ms`,
                  }} />
                </div>
                <span style={{ color: s.color, fontSize: '13px', fontWeight: 700, width: '34px' }}>{s.pct}%</span>
              </div>
            ))}
          </div>
        </AnimateIn>
        <AnimateIn delay={1050}>
          <Insight color={C1} style={{ marginTop: '28px' }}>
            The exact mix varies by lab and changes with every new training run. But the core idea is constant: absorb as much high-quality human text as possible.
          </Insight>
        </AnimateIn>
      </div>
      <SlideCount current={0} total={3} color={C1} />
    </SlideContainer>
  )
}

function Act1Slide2() {
  const [step, setStep] = useState(0)
  useEffect(() => {
    const ts = [
      setTimeout(() => setStep(1), 500),
      setTimeout(() => setStep(2), 1050),
      setTimeout(() => setStep(3), 1600),
    ]
    return () => ts.forEach(clearTimeout)
  }, [])

  const filters = [
    { label: 'Heuristic quality filter', desc: 'Too short? Too many links? Mostly punctuation? Removed.', color: '#d97706' },
    { label: 'Deduplication',            desc: 'Same content appearing across many sites? Keep it once.',  color: '#22d3ee' },
    { label: 'Safety filtering',         desc: 'Toxic, illegal, or harmful content? Out.',                 color: '#10b981' },
  ]

  return (
    <SlideContainer accentColor={C1}>
      <ActHeader actNum="1" actName="The Raw Material" color={C1} />
      <div style={{ maxWidth: '680px', width: '90%', zIndex: 10 }}>
        <AnimateIn delay={120}>
          <Tag color={C1}>Quality over quantity</Tag>
          <h1 style={{ fontSize: 'clamp(1.8rem,4vw,3.2rem)', fontWeight: 800, lineHeight: 1.1, margin: '16px 0 12px', color: '#1c1208' }}>
            Not everything makes it in
          </h1>
          <p style={{ fontSize: 'clamp(0.95rem,1.4vw,1.05rem)', color: '#6b5642', lineHeight: 1.75, marginBottom: '32px' }}>
            The raw web is mostly noise — spam, duplicates, broken pages. Before a single word reaches the model, it runs a strict gauntlet.
          </p>
        </AnimateIn>
        <AnimateIn delay={350}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ padding: '11px 22px', background: '#f0e6d0', border: '1px solid #252548', borderRadius: '10px', fontSize: '14px', color: '#9a8068', textAlign: 'center', width: '300px' }}>
              Raw web text — petabytes of it
            </div>
            {filters.map((f, i) => (
              <div key={f.label}>
                <div style={{ width: '2px', height: '24px', background: step > i ? f.color + 'aa' : '#ecddd0', transition: 'background 0.4s ease', position: 'relative', margin: '0 auto' }}>
                  {step > i && (
                    <div style={{ position: 'absolute', bottom: -1, left: '50%', transform: 'translateX(-50%)',
                      width: 0, height: 0, borderLeft: '5px solid transparent', borderRight: '5px solid transparent', borderTop: `6px solid ${f.color}aa` }} />
                  )}
                </div>
                <div style={{
                  padding: '13px 22px', width: '300px', borderRadius: '12px', textAlign: 'center',
                  background: step > i ? f.color + '16' : '#0d0d20',
                  border: `1px solid ${step > i ? f.color + '45' : '#ecddd0'}`,
                  transition: 'all 0.45s ease',
                }}>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: step > i ? f.color : '#2e2e50' }}>{f.label}</div>
                  {step > i && (
                    <div style={{ fontSize: '12px', color: '#6e6c90', marginTop: '5px', animation: 'fadeIn 0.4s ease' }}>{f.desc}</div>
                  )}
                </div>
              </div>
            ))}
            <div style={{ width: '2px', height: '24px', background: step >= 3 ? '#10b981aa' : '#ecddd0', transition: 'background 0.4s ease 200ms', position: 'relative', margin: '0 auto' }}>
              {step >= 3 && (
                <div style={{ position: 'absolute', bottom: -1, left: '50%', transform: 'translateX(-50%)',
                  width: 0, height: 0, borderLeft: '5px solid transparent', borderRight: '5px solid transparent', borderTop: '6px solid #10b981aa' }} />
              )}
            </div>
            <div style={{
              padding: '11px 22px', width: '300px', borderRadius: '10px', textAlign: 'center',
              background: step >= 3 ? '#10b98114' : '#0d0d20',
              border: `1px solid ${step >= 3 ? '#10b98145' : '#ecddd0'}`,
              transition: 'all 0.45s ease',
              fontSize: '14px', fontWeight: 700,
              color: step >= 3 ? '#10b981' : '#2e2e50',
            }}>
              {step >= 3 ? '✓ Clean training data (~terabytes)' : '...'}
            </div>
          </div>
        </AnimateIn>
        <AnimateIn delay={2000}>
          <Insight color={C1} style={{ marginTop: '24px' }}>
            Only a tiny fraction of the crawled web survives. Quality filters are ruthless — and that ruthlessness is what makes the model coherent.
          </Insight>
        </AnimateIn>
      </div>
      <SlideCount current={1} total={3} color={C1} />
    </SlideContainer>
  )
}

function Act1Slide3() {
  const [lit, setLit] = useState(false)
  useEffect(() => { const t = setTimeout(() => setLit(true), 400); return () => clearTimeout(t) }, [])

  const analogies = [
    { text: 'At 1 word/second, reading it all takes over 300,000 years' },
    { text: 'Every Wikipedia article — read over 100,000 times' },
    { text: 'More words than all books ever printed, combined — many times over' },
  ]

  return (
    <SlideContainer accentColor={C1}>
      <ActHeader actNum="1" actName="The Raw Material" color={C1} />
      <div style={{ maxWidth: '700px', width: '90%', zIndex: 10, textAlign: 'center' }}>
        <AnimateIn delay={120}><Tag color={C1}>The scale</Tag></AnimateIn>
        <AnimateIn delay={300}>
          <div style={{ margin: '24px 0 8px' }}>
            <div style={{
              fontSize: 'clamp(2.4rem,5.5vw,5rem)', fontWeight: 900,
              fontFamily: "'JetBrains Mono', monospace",
              letterSpacing: '-0.03em', lineHeight: 1,
              color: lit ? C1 : '#e8ddd0',
              transition: 'color 1.4s ease',
              textShadow: lit ? `0 0 60px ${C1}55` : 'none',
            }}>
              15,000,000,000,000
            </div>
            <div style={{ fontSize: 'clamp(1.1rem,2vw,1.5rem)', color: '#6b5642', marginTop: '12px', fontWeight: 600 }}>
              tokens. Around <em style={{ color: C1, fontStyle: 'normal' }}>fifteen trillion</em>.
            </div>
          </div>
        </AnimateIn>
        <AnimateIn delay={750}>
          <p style={{ fontSize: '14px', color: '#9a8068', marginBottom: '28px' }}>
            A "token" is roughly ¾ of a word. Modern frontier models train at this scale — some train on even more.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', textAlign: 'left' }}>
            {analogies.map((a, i) => (
              <AnimateIn key={a.text} delay={950 + i * 200}>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '14px',
                  background: 'rgba(255,255,255,0.92)', border: '1px solid #1c1c38',
                  borderRadius: '12px', padding: '14px 18px',
                }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: C1, flexShrink: 0 }} />
                  <span style={{ fontSize: '15px', color: '#5c4e3e' }}>{a.text}</span>
                </div>
              </AnimateIn>
            ))}
          </div>
        </AnimateIn>
        <AnimateIn delay={1600}>
          <Insight color={C1} style={{ marginTop: '24px', textAlign: 'left' }}>
            The model never "thought" about any of it. It absorbed the statistical fingerprints of all of it — patterns of patterns of patterns.
          </Insight>
        </AnimateIn>
      </div>
      <SlideCount current={2} total={3} color={C1} />
    </SlideContainer>
  )
}

export const act1Slides = [Act1Slide1, Act1Slide2, Act1Slide3]
