import { useState } from 'react'
import { SlideContainer, ActHeader, AnimateIn, Tag, Insight, SlideCount } from './shared'

const C6 = '#7c3aed'

function Act6Slide1() {
  const comparisons = [
    {
      bad:  { label: 'Vague question',   text: 'What is machine learning?' },
      good: { label: 'Setting the scene', text: "I'm a 10-year-old and I've never heard of computers. Explain machine learning using only things I'd see at school." },
      why:  "The model doesn't know who you are. The more context you give, the better it can predict what you actually need.",
    },
    {
      bad:  { label: 'Blank slate',    text: 'Summarise this document.' },
      good: { label: 'Framed request', text: 'You are a senior analyst. Summarise this document in 3 bullet points for an executive who has 30 seconds to read it.' },
      why:  'The model is completing a story. "You are a senior analyst" sets the genre — and the model knows exactly what prose comes next in that story.',
    },
    {
      bad:  { label: 'Hoping for the best', text: 'Is my business idea good?' },
      good: { label: 'Structured prompt',   text: 'Give me 3 genuine reasons this business idea could fail, then 3 reasons it could succeed. Be honest and direct.' },
      why:  'Without structure, the model predicts polite, generic encouragement. Specifying the format forces it down a different, more useful path.',
    },
    {
      bad:  { label: 'No role given',        text: 'Explain climate change.' },
      good: { label: 'With a system prompt', text: '[System: You are a science teacher for 12-year-olds. Be enthusiastic and use simple analogies.] Explain climate change.' },
      why:  "System prompts set the model's role before the conversation begins — invisible to the end user but used by every product built on an LLM. The model treats them as the opening of the story it's completing.",
    },
  ]

  const [sel, setSel] = useState(0)
  const cur = comparisons[sel]

  return (
    <SlideContainer accentColor={C6}>
      <ActHeader actNum="6" actName="Using It Well" color={C6} />
      <div style={{ maxWidth: '720px', width: '90%', zIndex: 10 }}>
        <AnimateIn delay={100}>
          <Tag color={C6}>Prompting intuition</Tag>
          <h1 style={{ fontSize: 'clamp(1.8rem,4vw,3.2rem)', fontWeight: 800, lineHeight: 1.1, margin: '16px 0 12px', color: '#1c1208' }}>
            You're setting the scene, not asking a question
          </h1>
          <p style={{ fontSize: '14px', color: '#6b5642', lineHeight: 1.7, marginBottom: '22px', maxWidth: '560px' }}>
            Remember: the model predicts likely next tokens. Your prompt is the <strong style={{ color: '#1c1208' }}>opening of a story</strong>. A richer opening forces the model into the right genre of response.
          </p>
        </AnimateIn>
        <AnimateIn delay={320}>
          <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
            {comparisons.map((_, i) => (
              <button key={i} onClick={() => setSel(i)} style={{
                flex: 1, padding: '8px', borderRadius: '8px', cursor: 'pointer',
                background: sel === i ? C6 + '20' : 'transparent',
                border: `1px solid ${sel === i ? C6 + '60' : '#e8ddd0'}`,
                color: sel === i ? C6 : '#3a3858',
                fontSize: '13px', fontWeight: 600,
                fontFamily: "'Outfit', sans-serif", transition: 'all 0.2s ease',
              }}>Example {i + 1}</button>
            ))}
          </div>
          <div key={sel} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '14px', animation: 'fadeIn 0.35s ease' }}>
            <div style={{ background: '#fffbf4', border: '1px solid #1e1e3a', borderRadius: '12px', padding: '14px 16px' }}>
              <div style={{ fontSize: '11px', fontWeight: 700, color: '#b09878', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>
                {cur.bad.label}
              </div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '13px', color: '#b09878', lineHeight: 1.65 }}>
                "{cur.bad.text}"
              </div>
            </div>
            <div style={{ background: C6 + '10', border: `1px solid ${C6}30`, borderRadius: '12px', padding: '14px 16px' }}>
              <div style={{ fontSize: '11px', fontWeight: 700, color: C6, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>
                {cur.good.label}
              </div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '13px', color: '#a0a0cc', lineHeight: 1.65 }}>
                "{cur.good.text}"
              </div>
            </div>
          </div>
          <div style={{
            background: '#f0e6d0', border: `1px solid ${C6}20`,
            borderRadius: '10px', padding: '13px 16px',
            fontSize: '13px', color: '#8a7060', lineHeight: 1.65,
          }}>
            <strong style={{ color: C6 }}>Why it works: </strong>{cur.why}
          </div>
        </AnimateIn>
      </div>
      <SlideCount current={0} total={4} color={C6} />
    </SlideContainer>
  )
}

function Act6Slide2() {
  const [examples, setExamples] = useState(0)

  const task = 'The sunset was absolutely breathtaking.'
  const shots = [
    { input: '"I loved every minute of it!"',    output: 'POSITIVE' },
    { input: '"The food was cold and tasteless."', output: 'NEGATIVE' },
  ]
  const outputs = [
    'The statement "The sunset was absolutely breathtaking" expresses a strong positive sentiment, conveying admiration and awe toward a natural phenomenon. The word "absolutely" intensifies...',
    'POSITIVE',
    'POSITIVE',
  ]
  const outputNotes = [
    "Without examples, the model doesn't know the format. It writes an essay.",
    'One example teaches the format. Clean output.',
    'Two examples lock in the pattern. Perfect every time.',
  ]

  return (
    <SlideContainer accentColor={C6}>
      <ActHeader actNum="6" actName="Using It Well" color={C6} />
      <div style={{ maxWidth: '700px', width: '90%', zIndex: 10 }}>
        <AnimateIn delay={100}>
          <Tag color={C6}>Few-shot learning</Tag>
          <h1 style={{ fontSize: 'clamp(1.8rem,4vw,3.2rem)', fontWeight: 800, lineHeight: 1.1, margin: '16px 0 12px', color: '#1c1208' }}>
            Show, don't just tell
          </h1>
          <p style={{ fontSize: '14px', color: '#6b5642', lineHeight: 1.7, marginBottom: '22px', maxWidth: '540px' }}>
            A next-token predictor is powerful at <strong style={{ color: '#1c1208' }}>pattern completion</strong>. Give it 1–2 examples of the format you want, and it instantly infers the rule.
          </p>
        </AnimateIn>
        <AnimateIn delay={320}>
          <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
            {['0 examples', '1 example', '2 examples'].map((l, i) => (
              <button key={l} onClick={() => setExamples(i)} style={{
                flex: 1, padding: '9px', borderRadius: '8px', cursor: 'pointer',
                background: examples === i ? C6 + '20' : 'transparent',
                border: `1px solid ${examples === i ? C6 + '60' : '#e8ddd0'}`,
                color: examples === i ? C6 : '#3a3858',
                fontSize: '13px', fontWeight: 600,
                fontFamily: "'Outfit', sans-serif", transition: 'all 0.2s ease',
              }}>{l}</button>
            ))}
          </div>

          <div style={{
            background: '#f0e6d0', border: '1px solid #1a1a38',
            borderRadius: '14px', padding: '16px 18px', marginBottom: '12px',
            fontFamily: "'JetBrains Mono', monospace", fontSize: '13px', lineHeight: 1.75,
          }}>
            <div style={{ color: '#c8b8a0', marginBottom: '8px' }}>// Prompt sent to model:</div>
            <div style={{ color: '#9a8068' }}>
              Classify as POSITIVE or NEGATIVE:
            </div>
            {examples >= 1 && (
              <div style={{ color: '#6b5642', animation: 'fadeIn 0.35s ease' }}>
                <br />{shots[0].input} → {shots[0].output}
              </div>
            )}
            {examples >= 2 && (
              <div style={{ color: '#6b5642', animation: 'fadeIn 0.35s ease' }}>
                {shots[1].input} → {shots[1].output}
              </div>
            )}
            <div style={{ color: '#1c1208' }}>
              <br />"{task}" →
            </div>
          </div>

          <div key={examples} style={{
            background: examples > 0 ? C6 + '10' : '#0a0a1e',
            border: `1px solid ${examples > 0 ? C6 + '40' : '#e0d0c0'}`,
            borderRadius: '12px', padding: '14px 16px',
            animation: 'pop 0.3s ease',
          }}>
            <div style={{ fontSize: '11px', fontWeight: 700, color: examples > 0 ? C6 : '#7878b0', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>
              Model output
            </div>
            <div style={{
              fontFamily: examples > 0 ? "'JetBrains Mono', monospace" : 'inherit',
              fontSize: examples > 0 ? '18px' : '13px', fontWeight: examples > 0 ? 700 : 400,
              color: examples > 0 ? C6 : '#7878b0', lineHeight: 1.65,
            }}>
              {outputs[examples]}
            </div>
            <div style={{ fontSize: '12px', color: examples > 0 ? C6 + 'aa' : '#7878b0', marginTop: '8px', fontStyle: 'italic' }}>
              {outputNotes[examples]}
            </div>
          </div>
        </AnimateIn>
      </div>
      <SlideCount current={1} total={4} color={C6} />
    </SlideContainer>
  )
}

function Act6Slide3() {
  const [mode, setMode] = useState('direct')

  const directAnswer = '"6 children."'
  const cotSteps = [
    'John has 3 daughters.',
    'Each daughter has 1 brother.',
    'Wait — are these 3 different brothers, or the same one?',
    'Daughters of the same father share the same brother.',
    'So there is just 1 brother in total.',
    'Answer: 4 children (3 daughters + 1 son).',
  ]

  return (
    <SlideContainer accentColor={C6}>
      <ActHeader actNum="6" actName="Using It Well" color={C6} />
      <div style={{ maxWidth: '720px', width: '90%', zIndex: 10 }}>
        <AnimateIn delay={100}>
          <Tag color={C6}>Chain-of-thought</Tag>
          <h1 style={{ fontSize: 'clamp(1.8rem,4vw,3.2rem)', fontWeight: 800, lineHeight: 1.1, margin: '16px 0 12px', color: '#1c1208' }}>
            "Think step by step" actually works
          </h1>
          <p style={{ fontSize: '14px', color: '#6b5642', lineHeight: 1.7, marginBottom: '22px', maxWidth: '560px' }}>
            When asked for an immediate answer, the model rushes. When asked to reason out loud, it generates intermediate tokens that act as scratchpad memory — and dramatically improves accuracy.
          </p>
        </AnimateIn>
        <AnimateIn delay={320}>
          <div style={{
            background: '#fffbf4', border: '1px solid #1e1e3a',
            borderRadius: '14px', padding: '16px 20px', marginBottom: '14px',
          }}>
            <div style={{
              fontFamily: "'JetBrains Mono', monospace", fontSize: '14px',
              color: '#1c1208', lineHeight: 1.7, marginBottom: '16px',
              padding: '12px 14px', background: '#f0e6d0', borderRadius: '10px',
            }}>
              "John has 3 daughters, each of whom has 1 brother. How many children does John have?"
            </div>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '16px' }}>
              <button onClick={() => setMode('direct')} style={{
                flex: 1, padding: '10px', borderRadius: '8px', cursor: 'pointer',
                background: mode === 'direct' ? '#dc262618' : 'transparent',
                border: `1px solid ${mode === 'direct' ? '#dc262650' : '#e8ddd0'}`,
                color: mode === 'direct' ? '#f43f5e' : '#3a3858',
                fontSize: '13px', fontWeight: 600, fontFamily: "'Outfit', sans-serif", transition: 'all 0.2s ease',
              }}>Direct answer</button>
              <button onClick={() => setMode('cot')} style={{
                flex: 1, padding: '10px', borderRadius: '8px', cursor: 'pointer',
                background: mode === 'cot' ? C6 + '20' : 'transparent',
                border: `1px solid ${mode === 'cot' ? C6 + '60' : '#e8ddd0'}`,
                color: mode === 'cot' ? C6 : '#3a3858',
                fontSize: '13px', fontWeight: 600, fontFamily: "'Outfit', sans-serif", transition: 'all 0.2s ease',
              }}>Think step by step</button>
            </div>
            {mode === 'direct' && (
              <div key="direct" style={{ animation: 'fadeIn 0.3s ease' }}>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '20px', fontWeight: 700, color: '#dc2626', marginBottom: '8px' }}>
                  {directAnswer}
                </div>
                <div style={{ fontSize: '12px', color: '#f43f5eaa', fontStyle: 'italic' }}>
                  Wrong. The model assumed 3 separate brothers — one per daughter — because that's the most locally plausible completion.
                </div>
              </div>
            )}
            {mode === 'cot' && (
              <div key="cot" style={{ animation: 'fadeIn 0.3s ease' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '10px' }}>
                  {cotSteps.map((s, i) => (
                    <div key={i} style={{
                      display: 'flex', gap: '10px', alignItems: 'flex-start',
                      animation: `fadeIn 0.3s ease ${i * 80}ms both`,
                    }}>
                      <span style={{ color: C6 + '60', fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', marginTop: '2px', flexShrink: 0 }}>{i + 1}.</span>
                      <span style={{ fontSize: '13px', color: i === cotSteps.length - 1 ? C6 : '#7875a3', fontWeight: i === cotSteps.length - 1 ? 700 : 400, lineHeight: 1.55 }}>
                        {s}
                      </span>
                    </div>
                  ))}
                </div>
                <div style={{ fontSize: '12px', color: C6 + 'aa', fontStyle: 'italic' }}>
                  Correct. The intermediate reasoning tokens gave the model "space to think" before committing to an answer.
                </div>
              </div>
            )}
          </div>
        </AnimateIn>
        <AnimateIn delay={700}>
          <Insight color={C6}>
            "Think step by step" works because each generated token becomes context for the next. More thinking tokens = more chances to self-correct before the final answer.
          </Insight>
        </AnimateIn>
      </div>
      <SlideCount current={2} total={4} color={C6} />
    </SlideContainer>
  )
}

function Act6Slide4() {
  const pillars = [
    { label: 'Trained on vast text',  desc: 'Trillions of tokens of human-written language',      color: '#d97706' },
    { label: 'Learns by predicting',  desc: 'Next-token prediction — one objective, done at scale', color: '#e07520' },
    { label: 'Thinks in vectors',     desc: 'Tokens → embeddings → attention → output',            color: '#0891b2' },
    { label: 'Shaped by humans',      desc: 'RLHF and fine-tuning align it to be useful',           color: '#16a34a' },
    { label: 'Has real limits',       desc: "Can't compute, hallucinates, frozen in time",          color: '#dc2626' },
    { label: 'Prompt is context',     desc: 'Richer opening → better, more targeted generation',   color: '#7c3aed' },
  ]

  return (
    <SlideContainer accentColor={C6}>
      <ActHeader actNum="6" actName="Using It Well" color={C6} />
      <div style={{ maxWidth: '720px', width: '90%', zIndex: 10 }}>
        <AnimateIn delay={100}>
          <Tag color={C6}>The full picture</Tag>
          <h1 style={{ fontSize: 'clamp(1.8rem,4vw,3.2rem)', fontWeight: 800, lineHeight: 1.1, margin: '16px 0 12px', color: '#1c1208' }}>
            Now you know how it works
          </h1>
          <p style={{ fontSize: '14px', color: '#6b5642', lineHeight: 1.7, marginBottom: '22px', maxWidth: '560px' }}>
            An LLM is not magic, not a database, and not a search engine. It's a statistical pattern-completer trained to be useful — and now you understand what that means.
          </p>
        </AnimateIn>
        <AnimateIn delay={320}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', marginBottom: '20px' }}>
            {pillars.map((p, i) => (
              <AnimateIn key={p.label} delay={400 + i * 100}>
                <div style={{
                  background: p.color + '0d', border: `1px solid ${p.color}25`,
                  borderRadius: '12px', padding: '14px',
                }}>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: p.color, marginBottom: '4px' }}>{p.label}</div>
                  <div style={{ fontSize: '12px', color: '#8a7060', lineHeight: 1.5 }}>{p.desc}</div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </AnimateIn>
        <AnimateIn delay={1100}>
          <Insight color={C6}>
            The same model that writes poetry, debugs code, and explains quantum physics learned one thing: what text tends to follow other text. The rest is compression of human knowledge at scale.
          </Insight>
        </AnimateIn>
      </div>
      <SlideCount current={3} total={4} color={C6} />
    </SlideContainer>
  )
}

export const act6Slides = [Act6Slide1, Act6Slide2, Act6Slide3, Act6Slide4]
