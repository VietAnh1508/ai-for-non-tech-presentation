import { useState } from 'react'
import { SlideContainer, ActHeader, AnimateIn, Tag, Insight, SlideCount } from './shared'

const C5 = '#dc2626'

function Act5Slide1() {
  const [mode, setMode] = useState(null)
  const [typing, setTyping] = useState('')
  const [done, setDone] = useState(false)

  const wrongAnswer = '19,898'
  const rightAnswer = '19,908'
  const steps = [
    '237 × 84 = ?',
    'Hmm, 200 × 84 = 16,800...',
    '37 × 84... let me see... 37 × 80 = 2,960...',
    '37 × 4 = 138, so 37 × 84 = 3,098...',
    '16,800 + 3,098 = ...',
    `= ${wrongAnswer}`,
  ]

  const runPattern = () => {
    if (mode === 'pattern') return
    setMode('pattern'); setTyping(''); setDone(false)
    let i = 0
    const next = () => {
      if (i >= steps.length) { setDone(true); return }
      const step = steps[i]
      setTyping(prev => prev + (prev ? '\n' : '') + step)
      i++
      setTimeout(next, i === steps.length ? 600 : 700)
    }
    setTimeout(next, 300)
  }

  const runTool = () => { setMode('tool'); setTyping(''); setDone(false) }

  return (
    <SlideContainer accentColor={C5}>
      <ActHeader actNum="5" actName="The Limits" color={C5} />
      <div style={{ maxWidth: '720px', width: '92%', zIndex: 10 }}>
        <AnimateIn delay={100}>
          <Tag color={C5}>Limit #1 — Math</Tag>
          <h1 style={{ fontSize: 'clamp(1.8rem,4vw,3.2rem)', fontWeight: 800, lineHeight: 1.1, margin: '16px 0 12px', color: '#1c1208' }}>
            LLMs can't actually compute
          </h1>
          <p style={{ fontSize: '14px', color: '#6b5642', lineHeight: 1.7, marginBottom: '22px', maxWidth: '560px' }}>
            There's no calculator inside. When asked to multiply, the model pattern-matches against millions of math problems it's seen — and often gets it wrong.
          </p>
        </AnimateIn>
        <AnimateIn delay={320}>
          <div style={{
            background: '#fffbf4', border: '1px solid #1e1e3a',
            borderRadius: '16px', padding: '20px 24px', marginBottom: '18px',
          }}>
            <div style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '20px', fontWeight: 700, color: '#1c1208',
              textAlign: 'center', marginBottom: '20px',
              padding: '14px', background: '#f0e6d0', borderRadius: '10px',
            }}>
              What is 237 × 84?
            </div>
            <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
              <button onClick={runPattern} style={{
                flex: 1, padding: '11px', borderRadius: '10px', cursor: 'pointer',
                background: mode === 'pattern' ? C5 + '1e' : 'transparent',
                border: `1.5px solid ${mode === 'pattern' ? C5 + '60' : '#e8ddd0'}`,
                color: mode === 'pattern' ? C5 : '#4a4868',
                fontSize: '13px', fontWeight: 600,
                fontFamily: "'Outfit', sans-serif", transition: 'all 0.25s ease',
              }}>
                Ask the model directly
              </button>
              <button onClick={runTool} style={{
                flex: 1, padding: '11px', borderRadius: '10px', cursor: 'pointer',
                background: mode === 'tool' ? '#10b98120' : 'transparent',
                border: `1.5px solid ${mode === 'tool' ? '#10b98160' : '#e8ddd0'}`,
                color: mode === 'tool' ? '#10b981' : '#4a4868',
                fontSize: '13px', fontWeight: 600,
                fontFamily: "'Outfit', sans-serif", transition: 'all 0.25s ease',
              }}>
                With a calculator tool
              </button>
            </div>

            {mode === 'pattern' && (
              <div style={{
                background: '#f0e6d0', borderRadius: '10px', padding: '14px 16px',
                fontFamily: "'JetBrains Mono', monospace", fontSize: '13px',
                color: '#8a7060', lineHeight: 1.8, minHeight: '130px',
                animation: 'fadeIn 0.3s ease',
              }}>
                {typing.split('\n').map((line, i) => (
                  <div key={i} style={{ animation: 'typeIn 0.3s ease both', animationDelay: `${i * 0.05}s` }}>
                    <span style={{
                      color: line.startsWith('=') ? (done ? C5 : '#9896b8') : '#5e5c80',
                      fontWeight: line.startsWith('=') ? 700 : 400,
                    }}>{line}</span>
                  </div>
                ))}
                {!done && mode === 'pattern' && (
                  <span style={{ animation: 'blink 0.8s ease infinite', color: C5 }}>▋</span>
                )}
                {done && (
                  <div style={{ marginTop: '10px', fontSize: '12px', color: C5 + 'aa', fontStyle: 'italic', animation: 'fadeIn 0.4s ease' }}>
                    Wrong. The real answer is {rightAnswer}. The model "reasoned" step by step — but without computing, it drifted.
                  </div>
                )}
              </div>
            )}

            {mode === 'tool' && (
              <div style={{
                background: '#f0e6d0', borderRadius: '10px', padding: '14px 16px',
                animation: 'fadeIn 0.3s ease',
              }}>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '13px', color: '#c0a888', marginBottom: '10px' }}>
                  {'>'} calculator.compute("237 × 84")
                </div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '22px', fontWeight: 700, color: '#16a34a' }}>
                  = {rightAnswer}
                </div>
                <div style={{ fontSize: '12px', color: '#10b981aa', marginTop: '8px' }}>
                  Instant, exact. The model didn't compute this — a real calculator did.
                </div>
              </div>
            )}
          </div>
        </AnimateIn>
        <AnimateIn delay={700}>
          <Insight color={C5}>
            Modern AI systems (like ChatGPT with Code Interpreter) solve this by giving the model access to real tools. The model decides <em style={{ color: '#1c1208', fontStyle: 'normal' }}>when</em> to use them — it just can't do the arithmetic itself.
          </Insight>
        </AnimateIn>
      </div>
      <SlideCount current={0} total={3} color={C5} />
    </SlideContainer>
  )
}

function Act5Slide2() {
  const [revealed, setRevealed] = useState(false)

  return (
    <SlideContainer accentColor={C5}>
      <ActHeader actNum="5" actName="The Limits" color={C5} />
      <div style={{ maxWidth: '700px', width: '90%', zIndex: 10 }}>
        <AnimateIn delay={100}>
          <Tag color={C5}>Limit #2 — Hallucination</Tag>
          <h1 style={{ fontSize: 'clamp(1.8rem,4vw,3.2rem)', fontWeight: 800, lineHeight: 1.1, margin: '16px 0 12px', color: '#1c1208' }}>
            Confidently wrong — by design
          </h1>
          <p style={{ fontSize: '14px', color: '#6b5642', lineHeight: 1.7, marginBottom: '22px', maxWidth: '560px' }}>
            Ask the model for a research citation and it will produce one — convincing author names, a plausible journal, a believable year. It may not exist.
          </p>
        </AnimateIn>
        <AnimateIn delay={320}>
          <div style={{
            background: '#fffbf4', border: '1px solid #1e1e3a',
            borderRadius: '16px', padding: '20px 24px', marginBottom: '16px',
          }}>
            <div style={{ fontSize: '13px', color: '#b09878', marginBottom: '12px', fontStyle: 'italic' }}>
              Prompt: "Give me a study on dark chocolate and memory in adults."
            </div>
            <div style={{
              background: '#f0e6d0', borderRadius: '12px', padding: '16px',
              borderLeft: `3px solid ${revealed ? C5 : '#e8ddd0'}`,
              transition: 'border-color 0.4s ease',
            }}>
              <div style={{ fontSize: '13.5px', color: '#5c4e3e', lineHeight: 1.75 }}>
                Tanaka, R., Williams, S., & Osei, K. (2019). "Effects of daily dark chocolate consumption on working memory in adults aged 50–65: A randomised controlled trial." <em>Journal of Cognitive Neuroscience, 31</em>(4), 812–826. DOI: 10.1162/jocn_a_01384
              </div>
              {!revealed && (
                <button onClick={() => setRevealed(true)} style={{
                  marginTop: '12px', background: 'transparent',
                  border: '1px solid #2a2a4a', borderRadius: '8px',
                  padding: '7px 14px', fontSize: '12px', color: '#b09878',
                  cursor: 'pointer', fontFamily: "'Outfit', sans-serif",
                }}>
                  Does this study exist? →
                </button>
              )}
              {revealed && (
                <div style={{
                  marginTop: '12px', padding: '10px 14px',
                  background: C5 + '14', borderRadius: '8px',
                  fontSize: '13px', color: C5,
                  animation: 'pop 0.4s ease',
                }}>
                  This paper does not exist. The authors, journal issue, and DOI are all fabricated — yet they look exactly right.
                </div>
              )}
            </div>
          </div>
        </AnimateIn>
        <AnimateIn delay={600}>
          <div style={{
            background: '#fffbf4', border: '1px solid #1e1e3a',
            borderRadius: '12px', padding: '16px 20px', marginBottom: '14px',
          }}>
            <div style={{ fontSize: '13px', fontWeight: 700, color: '#9a8068', marginBottom: '8px' }}>Why does this happen?</div>
            <div style={{ fontSize: '13px', color: '#8a7060', lineHeight: 1.7 }}>
              The model doesn't "know" facts — it predicts plausible-sounding next tokens. A real academic citation has a very recognisable pattern. The model fills that pattern with plausible-sounding content. There is no truth-checker anywhere in the architecture.
            </div>
          </div>
        </AnimateIn>
        <AnimateIn delay={850}>
          <Insight color={C5}>
            This isn't a bug waiting to be patched. It's structural — a next-token predictor that's very good at sounding right, with no mechanism to distinguish real from invented.
          </Insight>
        </AnimateIn>
      </div>
      <SlideCount current={1} total={3} color={C5} />
    </SlideContainer>
  )
}

function Act5Slide3() {
  const years = ['2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025']
  const cutoffIdx = 5

  return (
    <SlideContainer accentColor={C5}>
      <ActHeader actNum="5" actName="The Limits" color={C5} />
      <div style={{ maxWidth: '700px', width: '90%', zIndex: 10 }}>
        <AnimateIn delay={100}>
          <Tag color={C5}>Limits #3 & #4</Tag>
          <h1 style={{ fontSize: 'clamp(1.8rem,4vw,3.2rem)', fontWeight: 800, lineHeight: 1.1, margin: '16px 0 12px', color: '#1c1208' }}>
            Frozen in time. Short on memory.
          </h1>
          <p style={{ fontSize: '14px', color: '#6b5642', lineHeight: 1.7, marginBottom: '22px', maxWidth: '560px' }}>
            Two separate limits — one about what the model ever knew, one about what it can hold in mind right now.
          </p>
        </AnimateIn>
        <AnimateIn delay={320}>
          <div style={{
            background: '#fffbf4', border: '1px solid #1e1e3a',
            borderRadius: '14px', padding: '18px 22px', marginBottom: '14px',
          }}>
            <div style={{ fontSize: '12px', fontWeight: 700, color: C5, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px' }}>
              Knowledge cutoff — frozen at training time
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0', marginBottom: '10px' }}>
              {years.map((y, i) => (
                <div key={y} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{
                    width: '100%', height: '6px',
                    background: i <= cutoffIdx ? C5 + 'aa' : '#f0e6d0',
                    borderRadius: i === 0 ? '3px 0 0 3px' : i === years.length - 1 ? '0 3px 3px 0' : '0',
                  }} />
                  <div style={{ fontSize: '10px', color: i <= cutoffIdx ? '#5e5c80' : '#9a94c0', marginTop: '5px', whiteSpace: 'nowrap' }}>
                    {i === cutoffIdx ? <strong style={{ color: C5 }}>{y} ✕</strong> : y}
                  </div>
                </div>
              ))}
            </div>
            <div style={{ fontSize: '13px', color: '#9a8068', lineHeight: 1.6 }}>
              Training stopped at a fixed date. Ask about an event after that date and the model pattern-matches a plausible-sounding answer — which may be wrong.
            </div>
          </div>
        </AnimateIn>
        <AnimateIn delay={600}>
          <div style={{
            background: '#fffbf4', border: '1px solid #1e1e3a',
            borderRadius: '14px', padding: '18px 22px', marginBottom: '14px',
          }}>
            <div style={{ fontSize: '12px', fontWeight: 700, color: '#f59e0b', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px' }}>
              Context window — attention fade
            </div>
            <div style={{ display: 'flex', gap: '4px', marginBottom: '10px' }}>
              {['You told me your name', 'Long back-and-forth...', 'More messages...', 'Even more...', 'Current message'].map((t, i) => (
                <div key={i} style={{
                  flex: 1, padding: '8px 6px', borderRadius: '8px', textAlign: 'center',
                  background: i === 4 ? '#f59e0b1a' : (i === 0 ? '#14143000' : '#0e0e1e'),
                  border: `1px solid ${i === 4 ? '#f59e0b55' : (i === 0 ? 'transparent' : '#f0e6d0')}`,
                  fontSize: '10px',
                  color: i === 4 ? '#f59e0b' : (i === 0 ? '#9a94c0' : '#7878b0'),
                  transition: 'all 0.3s ease',
                }}>
                  {t}
                </div>
              ))}
            </div>
            <div style={{ fontSize: '13px', color: '#9a8068', lineHeight: 1.6 }}>
              Research shows content in the middle of very long contexts gets less attention weight — sometimes called "lost in the middle." The model isn't equally attentive to everything it sees.
            </div>
          </div>
        </AnimateIn>
        <AnimateIn delay={900}>
          <Insight color={C5}>
            Neither limitation is a bug — both are fundamental to how the architecture works. Systems like search-augmented AI address cutoff; larger context windows address forgetting.
          </Insight>
        </AnimateIn>
      </div>
      <SlideCount current={2} total={3} color={C5} />
    </SlideContainer>
  )
}

export const act5Slides = [Act5Slide1, Act5Slide2, Act5Slide3]
