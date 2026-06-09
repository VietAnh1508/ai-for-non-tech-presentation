import { useState, useEffect } from 'react'
import { SlideContainer, ActHeader, AnimateIn, Tag, Insight, SlideCount, GlowButton } from './shared'

const C2 = '#e07520'

function Act2Slide1() {
  const [revealed, setRevealed] = useState(false)
  useEffect(() => { const t = setTimeout(() => setRevealed(true), 1200); return () => clearTimeout(t) }, [])

  const opts = [
    { word: 'dog', prob: 74, top: true },
    { word: 'cat', prob: 13, top: false },
    { word: 'log', prob:  8, top: false },
    { word: 'fox', prob:  5, top: false },
  ]

  return (
    <SlideContainer accentColor={C2}>
      <ActHeader actNum="2" actName="Learning to Predict" color={C2} />
      <div style={{ maxWidth: '680px', width: '90%', zIndex: 10 }}>
        <AnimateIn delay={120}>
          <Tag color={C2}>The core idea</Tag>
          <h1 style={{ fontSize: 'clamp(1.8rem,4vw,3.2rem)', fontWeight: 800, lineHeight: 1.1, margin: '16px 0 12px', color: '#1c1208' }}>
            The one trick that explains everything
          </h1>
          <p style={{ fontSize: 'clamp(0.95rem,1.4vw,1.05rem)', color: '#6b5642', lineHeight: 1.75, marginBottom: '28px' }}>
            Forget the math for a moment. The entire training objective of an LLM reduces to a single task, repeated trillions of times:
          </p>
        </AnimateIn>
        <AnimateIn delay={400}>
          <div style={{
            background: 'rgba(255,255,255,0.97)', border: '1px solid #2a2a52',
            borderRadius: '16px', padding: '22px 26px', marginBottom: '24px',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 'clamp(1rem,1.9vw,1.25rem)', color: '#1c1208', lineHeight: 1.6,
          }}>
            "The quick brown fox jumps over the lazy{' '}
            <span style={{
              display: 'inline-block', minWidth: '72px', padding: '0 8px',
              height: '1.45em', verticalAlign: 'bottom',
              background: revealed ? C2 + '22' : C2 + '12',
              borderBottom: `2px solid ${C2}`,
              borderRadius: '4px 4px 0 0',
              color: C2, fontWeight: 700,
              transition: 'all 0.4s ease',
            }}>
              {revealed ? 'dog"' : '___"'}
            </span>
          </div>
        </AnimateIn>
        {revealed && (
          <AnimateIn delay={0}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '9px', marginBottom: '24px' }}>
              {opts.map(o => (
                <div key={o.word} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{
                    fontFamily: "'JetBrains Mono', monospace", fontSize: '14px', fontWeight: 600,
                    color: o.top ? C2 : '#3e3c60', width: '52px',
                  }}>"{o.word}"</span>
                  <div style={{ flex: 1, height: '7px', background: '#faf4ec', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{
                      height: '100%', borderRadius: '4px',
                      background: o.top ? `linear-gradient(90deg, ${C2}, #8b5cf6)` : '#232348',
                      animation: 'barFill 0.75s ease forwards',
                      width: `${o.prob}%`,
                    }} />
                  </div>
                  <span style={{ fontSize: '13px', fontWeight: 700, color: o.top ? C2 : '#2e2c48', width: '36px' }}>{o.prob}%</span>
                </div>
              ))}
            </div>
          </AnimateIn>
        )}
        <AnimateIn delay={1500}>
          <Insight color={C2}>
            That's the whole training objective. Predict the next token. Repeat trillions of times. Something remarkable emerges. The model also samples from this distribution — not always picking the top token — which is why the same prompt gives different answers each time.
          </Insight>
        </AnimateIn>
      </div>
      <SlideCount current={0} total={3} color={C2} />
    </SlideContainer>
  )
}

function Act2Slide2() {
  const skills = [
    { name: 'Grammar & syntax',   desc: 'To predict "she runs", it must know that verbs agree with subjects.',        color: C2,        delay: 300 },
    { name: 'World knowledge',    desc: 'To predict "the Eiffel Tower is in Paris", it must know geography.',         color: '#8b5cf6', delay: 500 },
    { name: 'Reasoning patterns', desc: 'To complete logical arguments, it absorbs the structure of logic.',           color: '#22d3ee', delay: 700 },
    { name: 'Writing styles',     desc: 'To predict Shakespeare, it internalises Elizabethan prose rhythms.',          color: '#16a34a', delay: 900 },
    { name: 'Code & math',        desc: "Code is just text with very strict patterns — the model absorbs those too.",  color: '#d97706', delay: 1100 },
  ]

  return (
    <SlideContainer accentColor={C2}>
      <ActHeader actNum="2" actName="Learning to Predict" color={C2} />
      <div style={{ maxWidth: '720px', width: '90%', zIndex: 10 }}>
        <AnimateIn delay={120}>
          <Tag color={C2}>Emergent intelligence</Tag>
          <h1 style={{ fontSize: 'clamp(1.8rem,4vw,3.2rem)', fontWeight: 800, lineHeight: 1.1, margin: '16px 0 12px', color: '#1c1208' }}>
            From one trick, everything emerges
          </h1>
          <p style={{ fontSize: 'clamp(0.95rem,1.4vw,1.05rem)', color: '#6b5642', lineHeight: 1.75, marginBottom: '28px', maxWidth: '560px' }}>
            To predict the next word <em style={{ color: '#1c1208', fontStyle: 'normal', fontWeight: 600 }}>well</em>, the model must implicitly understand everything about the text — and the world it describes.
          </p>
        </AnimateIn>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {skills.map(s => (
            <AnimateIn key={s.name} delay={s.delay} style={{ width: '100%' }}>
              <div style={{
                display: 'flex', alignItems: 'flex-start', gap: '14px',
                background: s.color + '0c', border: `1px solid ${s.color}22`,
                borderRadius: '12px', padding: '14px 18px',
              }}>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: s.color, marginTop: '7px', flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: s.color, marginBottom: '4px' }}>{s.name}</div>
                  <div style={{ fontSize: '13px', color: '#8a7060', lineHeight: 1.55 }}>{s.desc}</div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
        <AnimateIn delay={1400}>
          <Insight color={C2} style={{ marginTop: '16px' }}>
            None of this was programmed in. It all <strong style={{ color: C2, fontStyle: 'normal' }}>emerged</strong> from the pressure of prediction — the same way you learned grammar by hearing it, not studying rules.
          </Insight>
        </AnimateIn>
      </div>
      <SlideCount current={1} total={3} color={C2} />
    </SlideContainer>
  )
}

function Act2Slide3() {
  const sentences = [
    { prefix: 'She packed her bags and headed to the',
      opts: [{ w: 'airport', p: 42 }, { w: 'beach', p: 25 }, { w: 'hotel', p: 18 }, { w: 'market', p: 15 }] },
    { prefix: "The email opened with 'Dear",
      opts: [{ w: 'Sir,', p: 35 }, { w: 'Team,', p: 30 }, { w: 'John,', p: 20 }, { w: 'All,', p: 15 }] },
    { prefix: 'He opened the fridge and grabbed a cold',
      opts: [{ w: 'beer', p: 32 }, { w: 'drink', p: 28 }, { w: 'water', p: 22 }, { w: 'soda', p: 18 }] },
    { prefix: 'The bug caused the program to unexpectedly',
      opts: [{ w: 'crash', p: 45 }, { w: 'stop', p: 28 }, { w: 'fail', p: 15 }, { w: 'freeze', p: 12 }] },
  ]

  const [idx, setIdx] = useState(0)
  const [selected, setSelected] = useState(null)
  const [revealed, setRevealed] = useState(false)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)

  const cur = sentences[idx]
  const topWord = cur.opts[0].w

  const pick = (w) => {
    if (revealed) return
    setSelected(w)
    setRevealed(true)
    if (w === topWord) setScore(s => s + 1)
  }

  const next = () => {
    if (idx >= sentences.length - 1) { setFinished(true); return }
    setIdx(i => i + 1); setSelected(null); setRevealed(false)
  }

  const reset = () => { setIdx(0); setSelected(null); setRevealed(false); setScore(0); setFinished(false) }

  if (finished) {
    const msgs = ['', 'Not bad — the model often surprises even experts.', 'Good instincts — you think like a language model!', "Great match — you're basically a transformer.", 'Perfect — you think like a language model!']
    return (
      <SlideContainer accentColor={C2}>
        <ActHeader actNum="2" actName="Learning to Predict" color={C2} />
        <div style={{ textAlign: 'center', zIndex: 10, maxWidth: '500px', width: '90%' }}>
          <div style={{ fontSize: '64px', marginBottom: '16px', animation: 'pop 0.5s ease' }}>
            {score >= 3 ? '⚡' : '💡'}
          </div>
          <div style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 800, color: '#1c1208', marginBottom: '8px' }}>
            {score} / 4
          </div>
          <div style={{ fontSize: '18px', fontWeight: 600, color: C2, marginBottom: '12px' }}>
            {msgs[score] || msgs[1]}
          </div>
          <p style={{ fontSize: '14px', color: '#8a7060', lineHeight: 1.7, marginBottom: '28px' }}>
            The model has absorbed so much text that its probability estimates match — and often exceed — human intuition for what comes next.
          </p>
          <GlowButton onClick={reset} color={C2}>Try again</GlowButton>
        </div>
        <SlideCount current={2} total={3} color={C2} />
      </SlideContainer>
    )
  }

  return (
    <SlideContainer accentColor={C2}>
      <ActHeader actNum="2" actName="Learning to Predict" color={C2} />
      <div style={{ position: 'absolute', top: '24px', right: '32px', zIndex: 20 }}>
        <span style={{ fontSize: '13px', color: '#3a3860', fontWeight: 600 }}>{idx > 0 ? `${score} / ${idx} correct` : "Match the model's top pick"}</span>
      </div>
      <div style={{ maxWidth: '620px', width: '90%', zIndex: 10 }}>
        <AnimateIn delay={80}>
          <Tag color={C2}>Try it yourself</Tag>
          <h2 style={{ fontSize: 'clamp(1.5rem,3vw,2.2rem)', fontWeight: 800, color: '#1c1208', margin: '12px 0 6px' }}>
            What comes next?
          </h2>
          <p style={{ fontSize: '13px', color: '#9a8068', marginBottom: '22px' }}>
            Sentence {idx + 1} of {sentences.length} — pick the word you think the model predicts most.
          </p>
        </AnimateIn>
        <AnimateIn delay={280}>
          <div style={{
            background: 'rgba(255,255,255,0.97)', border: '1px solid #2a2a50',
            borderRadius: '14px', padding: '20px 24px', marginBottom: '18px',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 'clamp(0.9rem,1.7vw,1.1rem)', color: '#1c1208', lineHeight: 1.65,
          }}>
            {cur.prefix}{' '}
            <span style={{
              display: 'inline-block', minWidth: '70px', padding: '0 8px',
              height: '1.4em', verticalAlign: 'bottom',
              background: revealed ? C2 + '22' : C2 + '10',
              borderBottom: `2px solid ${C2}`, borderRadius: '4px 4px 0 0',
              color: C2, fontWeight: 700, transition: 'all 0.35s ease',
            }}>
              {revealed ? topWord : '???'}
            </span>
          </div>
        </AnimateIn>
        <AnimateIn delay={450}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '18px' }}>
            {cur.opts.map(o => {
              const isSel = selected === o.w
              const isTop = o.w === topWord
              return (
                <div key={o.w} onClick={() => pick(o.w)} style={{
                  background: revealed ? (isTop ? C2 + '22' : isSel ? '#f43f5e14' : '#0c0c1e') : '#0e0e22',
                  border: `1.5px solid ${revealed ? (isTop ? C2 + '80' : isSel ? '#f43f5e55' : '#ecddd0') : (isSel ? C2 + '70' : '#ecddd0')}`,
                  borderRadius: '12px', padding: '14px 16px',
                  cursor: revealed ? 'default' : 'pointer', transition: 'all 0.25s ease',
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: revealed ? '8px' : '0' }}>
                    <span style={{
                      fontFamily: "'JetBrains Mono', monospace", fontSize: '15px', fontWeight: 600,
                      color: revealed ? (isTop ? C2 : isSel ? '#f43f5e' : '#363558') : '#b0adcc',
                    }}>"{o.w}"</span>
                    {revealed && <span style={{ fontSize: '13px', fontWeight: 700, color: isTop ? C2 : '#2e2c48' }}>{o.p}%</span>}
                  </div>
                  {revealed && (
                    <div style={{ height: '4px', background: '#f5ede0', borderRadius: '2px', overflow: 'hidden' }}>
                      <div style={{ height: '100%', borderRadius: '2px', background: isTop ? C2 : '#ddd0c0', width: `${o.p}%`, animation: 'barFill 0.6s ease forwards' }} />
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </AnimateIn>
        {revealed && (
          <AnimateIn delay={0}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '14px', color: selected === topWord ? '#10b981' : '#f59e0b' }}>
                {selected === topWord ? '✓ You matched the model!' : `Model's top pick: "${topWord}" at ${cur.opts[0].p}%`}
              </span>
              <GlowButton onClick={next} color={C2} size="sm">
                {idx >= sentences.length - 1 ? 'See score →' : 'Next →'}
              </GlowButton>
            </div>
          </AnimateIn>
        )}
      </div>
      <SlideCount current={2} total={3} color={C2} />
    </SlideContainer>
  )
}

export const act2Slides = [Act2Slide1, Act2Slide2, Act2Slide3]
