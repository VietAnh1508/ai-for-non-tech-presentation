import { useState, useEffect } from 'react'
import { SlideContainer, ActHeader, AnimateIn, Tag, Insight, SlideCount } from './shared'

const C4 = '#16a34a'

function Act4Slide1() {
  const [showRight, setShowRight] = useState(false)
  useEffect(() => { const t = setTimeout(() => setShowRight(true), 1000); return () => clearTimeout(t) }, [])

  return (
    <SlideContainer accentColor={C4}>
      <ActHeader actNum="4" actName="From Raw to Useful" color={C4} />
      <div style={{ maxWidth: '820px', width: '92%', zIndex: 10 }}>
        <AnimateIn delay={100}>
          <Tag color={C4}>The transformation</Tag>
          <h1 style={{ fontSize: 'clamp(1.8rem,4vw,3.2rem)', fontWeight: 800, lineHeight: 1.1, margin: '16px 0 12px', color: '#1c1208' }}>
            A trained model isn't enough
          </h1>
          <p style={{ fontSize: '14px', color: '#6b5642', lineHeight: 1.7, marginBottom: '24px', maxWidth: '580px' }}>
            After training, a "base model" just predicts likely continuations of text — it doesn't know how to be helpful. Same prompt, wildly different outputs.
          </p>
        </AnimateIn>
        <AnimateIn delay={350}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div style={{
              background: '#fffbf4', border: '1px solid #1e1e3a',
              borderRadius: '14px', padding: '18px', overflow: 'hidden',
            }}>
              <div style={{ fontSize: '12px', fontWeight: 700, color: '#b09878', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>
                Base model — raw predictor
              </div>
              <div style={{
                background: '#f0e6d0', borderRadius: '8px', padding: '12px',
                fontFamily: "'JetBrains Mono', monospace", fontSize: '13px',
                color: '#9a8068', lineHeight: 1.6, marginBottom: '10px',
              }}>
                <span style={{ color: '#c0a888' }}>Prompt: </span>Write me a poem about autumn
              </div>
              <div style={{
                fontFamily: "'JetBrains Mono', monospace", fontSize: '12.5px',
                color: '#b09878', lineHeight: 1.65,
              }}>
                ...about autumn, about the season of change and the harvest. Autumn poems have long been a staple of English literature — Keats wrote "To Autumn" in 1819, and it remains one of the finest odes in the language. The poem begins: "Season of mists and mellow fruitfulness..."
              </div>
              <div style={{ marginTop: '10px', fontSize: '12px', color: '#c8b8a0', fontStyle: 'italic' }}>
                It continued the text as written — no instruction-following, just pattern completion.
              </div>
            </div>
            <div style={{
              background: C4 + '0c', border: `1px solid ${C4}30`,
              borderRadius: '14px', padding: '18px',
              opacity: showRight ? 1 : 0, transform: showRight ? 'translateX(0)' : 'translateX(20px)',
              transition: 'all 0.6s ease',
            }}>
              <div style={{ fontSize: '12px', fontWeight: 700, color: C4, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>
                Assistant — same model, RLHF-tuned
              </div>
              <div style={{
                background: '#f0e6d0', borderRadius: '8px', padding: '12px',
                fontFamily: "'JetBrains Mono', monospace", fontSize: '13px',
                color: '#9a8068', lineHeight: 1.6, marginBottom: '10px',
              }}>
                <span style={{ color: '#c0a888' }}>Prompt: </span>Write me a poem about autumn
              </div>
              <div style={{ fontSize: '13px', color: '#b0cdbc', lineHeight: 1.7, fontStyle: 'italic' }}>
                The maples shed their copper light,<br />
                Each leaf a letter, slow in flight—<br />
                The year grows quiet, warm, and right,<br />
                As autumn writes its last goodnight.
              </div>
              <div style={{ marginTop: '10px', fontSize: '12px', color: C4 + 'aa', fontStyle: 'italic' }}>
                It understood the intent and responded helpfully.
              </div>
            </div>
          </div>
        </AnimateIn>
        <AnimateIn delay={1200}>
          <Insight color={C4} style={{ marginTop: '16px' }}>
            The weights are nearly identical. What changed is the <strong style={{ color: C4, fontStyle: 'normal' }}>objective</strong> — from "predict likely text" to "be helpful to a human."
          </Insight>
        </AnimateIn>
      </div>
      <SlideCount current={0} total={3} color={C4} />
    </SlideContainer>
  )
}

function Act4Slide2() {
  const [phase, setPhase] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setPhase(p => (p + 1) % 4), 1400)
    return () => clearInterval(t)
  }, [])

  const steps = [
    { label: 'Model generates', desc: 'Multiple responses to the same prompt',                           color: C4 },
    { label: 'Humans rank',     desc: 'Raters order responses; a reward model learns their preferences', color: '#22d3ee' },
    { label: 'Reward model',    desc: 'Scores new outputs automatically — no human needed each round',   color: '#8b5cf6' },
    { label: 'Model improves',  desc: 'Weights update toward higher-scored outputs via RL',              color: '#f59e0b' },
  ]

  return (
    <SlideContainer accentColor={C4}>
      <ActHeader actNum="4" actName="From Raw to Useful" color={C4} />
      <div style={{ maxWidth: '700px', width: '90%', zIndex: 10 }}>
        <AnimateIn delay={100}>
          <Tag color={C4}>RLHF</Tag>
          <h1 style={{ fontSize: 'clamp(1.8rem,4vw,3.2rem)', fontWeight: 800, lineHeight: 1.1, margin: '16px 0 12px', color: '#1c1208' }}>
            Human feedback shapes the personality
          </h1>
          <p style={{ fontSize: '14px', color: '#6b5642', lineHeight: 1.7, marginBottom: '28px', maxWidth: '540px' }}>
            <strong style={{ color: '#1c1208' }}>Reinforcement Learning from Human Feedback</strong> — a loop where human preferences teach the model what "good" looks like.
          </p>
        </AnimateIn>
        <AnimateIn delay={380}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0', marginBottom: '24px' }}>
            {steps.map((s, i) => (
              <div key={s.label} style={{ display: 'flex', alignItems: 'center', flex: i < steps.length - 1 ? '1 1 auto' : '1 1 auto' }}>
                <div style={{
                  flex: 1, padding: '16px 12px', borderRadius: '12px', textAlign: 'center',
                  background: phase === i ? s.color + '1e' : '#0a0a1e',
                  border: `1.5px solid ${phase === i ? s.color + '60' : '#141430'}`,
                  transition: 'all 0.4s ease',
                  boxShadow: phase === i ? `0 4px 20px ${s.color}28` : 'none',
                }}>
                  <div style={{
                    width: '36px', height: '36px', borderRadius: '50%',
                    background: phase === i ? s.color + '28' : '#0e0e22',
                    border: `2px solid ${phase === i ? s.color : '#e8ddd0'}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 8px',
                    fontSize: '16px', fontWeight: 800,
                    color: phase === i ? s.color : '#6868a0',
                    transition: 'all 0.4s ease',
                  }}>
                    {i + 1}
                  </div>
                  <div style={{ fontSize: '12px', fontWeight: 700, color: phase === i ? s.color : '#7878b0', marginBottom: '4px', transition: 'color 0.4s ease' }}>
                    {s.label}
                  </div>
                  <div style={{ fontSize: '11px', color: phase === i ? '#8888aa' : '#e8ddd0', lineHeight: 1.4, transition: 'color 0.4s ease' }}>
                    {s.desc}
                  </div>
                </div>
                {i < steps.length - 1 && (
                  <div style={{
                    width: '24px', flexShrink: 0, textAlign: 'center',
                    fontSize: '16px', color: (phase === i || phase === i + 1) ? '#4a4868' : '#1a1a30',
                    transition: 'color 0.4s ease',
                  }}>→</div>
                )}
              </div>
            ))}
          </div>
          <div style={{
            textAlign: 'center', fontSize: '13px', color: '#c8b8a0',
            borderTop: '1px solid #141428', paddingTop: '14px',
            fontStyle: 'italic',
          }}>
            ↑ Repeat thousands of times — then millions of user conversations further refine it ↑
          </div>
        </AnimateIn>
        <AnimateIn delay={900}>
          <Insight color={C4} style={{ marginTop: '18px' }}>
            RLHF is why the same underlying model can feel polite, cautious, creative, or assertive — it all depends on whose preferences shaped the reward signal.
          </Insight>
        </AnimateIn>
      </div>
      <SlideCount current={1} total={3} color={C4} />
    </SlideContainer>
  )
}

function Act4Slide3() {
  const variants = [
    { name: 'Medical assistant',   style: 'Clinical & precise',      example: '"Based on the presented symptoms, a differential diagnosis would include..."',  color: C4 },
    { name: 'Creative writer',     style: 'Vivid & imaginative',     example: '"The storm arrived like an old argument — familiar, inevitable, destructive."',  color: '#8b5cf6' },
    { name: 'Coding assistant',    style: 'Structured & literal',    example: '"Here\'s a Python function that achieves this with O(n log n) complexity:"',    color: '#22d3ee' },
    { name: 'Customer support',    style: 'Warm & solution-focused', example: '"I completely understand the frustration — let\'s get this sorted for you!"',   color: '#f59e0b' },
  ]

  const [active, setActive] = useState(0)
  useEffect(() => { const t = setInterval(() => setActive(a => (a + 1) % variants.length), 2200); return () => clearInterval(t) }, [])

  return (
    <SlideContainer accentColor={C4}>
      <ActHeader actNum="4" actName="From Raw to Useful" color={C4} />
      <div style={{ maxWidth: '720px', width: '90%', zIndex: 10 }}>
        <AnimateIn delay={100}>
          <Tag color={C4}>Fine-tuning</Tag>
          <h1 style={{ fontSize: 'clamp(1.8rem,4vw,3.2rem)', fontWeight: 800, lineHeight: 1.1, margin: '16px 0 12px', color: '#1c1208' }}>
            The same model, endless personalities
          </h1>
          <p style={{ fontSize: '14px', color: '#6b5642', lineHeight: 1.7, marginBottom: '24px', maxWidth: '560px' }}>
            After RLHF, labs (and developers) can continue training on domain-specific examples. This <strong style={{ color: '#1c1208' }}>fine-tuning</strong> gives the model a specialist role — same knowledge base, very different voice.
          </p>
        </AnimateIn>
        <AnimateIn delay={350}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
            {variants.map((v, i) => (
              <div key={v.name} onClick={() => setActive(i)} style={{
                display: 'flex', gap: '14px', alignItems: 'flex-start',
                background: active === i ? v.color + '14' : '#0a0a1e',
                border: `1.5px solid ${active === i ? v.color + '50' : '#141430'}`,
                borderRadius: '12px', padding: '14px 16px',
                cursor: 'pointer', transition: 'all 0.3s ease',
              }}>
                <div style={{ flexShrink: 0 }}>
                  <div style={{
                    width: '10px', height: '10px', borderRadius: '50%',
                    background: active === i ? v.color : '#e8ddd0',
                    marginTop: '5px', transition: 'background 0.3s ease',
                  }} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '4px' }}>
                    <span style={{ fontSize: '14px', fontWeight: 700, color: active === i ? v.color : '#7878b0' }}>{v.name}</span>
                    <span style={{ fontSize: '11px', color: active === i ? v.color + 'aa' : '#ddd0c0' }}>{v.style}</span>
                  </div>
                  {active === i && (
                    <div style={{
                      fontSize: '13px', color: '#6b5642',
                      fontStyle: 'italic', lineHeight: 1.6,
                      animation: 'fadeIn 0.4s ease',
                    }}>
                      {v.example}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </AnimateIn>
        <AnimateIn delay={900}>
          <Insight color={C4}>
            The underlying "world knowledge" is identical. Fine-tuning doesn't add facts — it reshapes how the model communicates and what it prioritises. Newer methods like DPO achieve similar results with less complexity than the full RL loop.
          </Insight>
        </AnimateIn>
      </div>
      <SlideCount current={2} total={3} color={C4} />
    </SlideContainer>
  )
}

export const act4Slides = [Act4Slide1, Act4Slide2, Act4Slide3]
