import { useState, useEffect } from 'react'
import { SlideContainer, ActHeader, AnimateIn, Tag, Insight, SlideCount } from './shared'

const C3 = '#0891b2'

function Act3Slide1() {
  const tokenColors = ['#6366f1','#22d3ee','#10b981','#f59e0b','#f43f5e','#8b5cf6','#ec4899']
  const examples = [
    { label: 'Hello, world!',         tokens: ['Hello', ',', ' world', '!'] },
    { label: 'ChatGPT is amazing',    tokens: ['Chat', 'G', 'PT', ' is', ' am', 'azing'] },
    { label: 'unhappily ever after',  tokens: ['un', 'happ', 'ily', ' ever', ' after'] },
    { label: '2 + 2 = 4',            tokens: ['2', ' +', ' 2', ' =', ' 4'] },
    { label: 'transformer architecture', tokens: ['trans', 'former', ' architect', 'ure'] },
  ]

  const baseIds = [1024, 312, 995, 28, 7431, 1802, 88, 4429, 601, 3317]
  const [sel, setSel] = useState(0)
  const [animKey, setAnimKey] = useState(0)

  const pick = (i) => { setSel(i); setAnimKey(k => k + 1) }
  const cur = examples[sel]

  return (
    <SlideContainer accentColor={C3}>
      <ActHeader actNum="3" actName="How the Model Thinks" color={C3} />
      <div style={{ maxWidth: '700px', width: '90%', zIndex: 10 }}>
        <AnimateIn delay={100}>
          <Tag color={C3}>Step 1</Tag>
          <h1 style={{ fontSize: 'clamp(1.8rem,4vw,3rem)', fontWeight: 800, lineHeight: 1.1, margin: '16px 0 10px', color: '#1c1208' }}>
            Words become numbers
          </h1>
          <p style={{ fontSize: '15px', color: '#6b5642', lineHeight: 1.7, marginBottom: '20px', maxWidth: '540px' }}>
            Before anything can be processed, text is chopped into <strong style={{ color: '#1c1208' }}>tokens</strong> — sub-word fragments. Each token maps to a unique number the model can work with.
          </p>
        </AnimateIn>
        <AnimateIn delay={320}>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '18px' }}>
            {examples.map((ex, i) => (
              <button key={ex.label} onClick={() => pick(i)} style={{
                background: sel === i ? C3 + '22' : 'transparent',
                border: `1px solid ${sel === i ? C3 + '75' : '#e0d0c0'}`,
                borderRadius: '100px', padding: '6px 14px',
                fontSize: '13px', fontWeight: 500,
                color: sel === i ? C3 : '#4a4868',
                cursor: 'pointer', transition: 'all 0.2s ease',
                fontFamily: "'JetBrains Mono', monospace",
              }}>{ex.label}</button>
            ))}
          </div>
          <div style={{
            background: 'rgba(255,251,244,0.97)', border: '1px solid #1a1a38',
            borderRadius: '14px', padding: '20px 22px', marginBottom: '14px',
          }}>
            <div style={{ fontSize: '11px', color: '#2e2e50', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>
              Original text
            </div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '17px', color: '#1c1208', marginBottom: '16px' }}>
              "{cur.label}"
            </div>
            <div style={{ fontSize: '11px', color: '#2e2e50', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '10px' }}>
              Tokens — {cur.tokens.length} pieces
            </div>
            <div key={animKey} style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '14px' }}>
              {cur.tokens.map((tok, i) => (
                <span key={i} style={{
                  display: 'inline-block',
                  background: tokenColors[i % tokenColors.length] + '1a',
                  border: `1px solid ${tokenColors[i % tokenColors.length]}45`,
                  borderRadius: '7px', padding: '5px 10px',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '15px', color: tokenColors[i % tokenColors.length], fontWeight: 500,
                  animation: `pop 0.35s ease ${i * 75}ms both`,
                }}>
                  {tok === ' ' ? '·' : tok}
                </span>
              ))}
            </div>
            <div style={{ fontSize: '11px', color: '#2e2e50', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '10px' }}>
              Token IDs (what the model actually sees)
            </div>
            <div key={animKey + 'ids'} style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {cur.tokens.map((_, i) => (
                <span key={i} style={{
                  display: 'inline-block', background: '#faf4ec', border: '1px solid #1a1a34',
                  borderRadius: '7px', padding: '5px 10px',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '14px', color: '#b09878',
                  animation: `pop 0.35s ease ${i * 75 + 200}ms both`,
                }}>
                  {baseIds[(sel * 3 + i) % baseIds.length] + i * 7}
                </span>
              ))}
            </div>
          </div>
        </AnimateIn>
        <AnimateIn delay={700}>
          <Insight color={C3}>
            "ChatGPT" is 3 tokens. A rare technical word might be 5. The model sees none of your letters — only the ID numbers, like a language made entirely of integers.
          </Insight>
        </AnimateIn>
      </div>
      <SlideCount current={0} total={4} color={C3} />
    </SlideContainer>
  )
}

function Act3Slide2() {
  const [hover, setHover] = useState(null)
  const [showArrow, setShowArrow] = useState(false)
  useEffect(() => { const t = setTimeout(() => setShowArrow(true), 1400); return () => clearTimeout(t) }, [])

  const clusters = [
    { label: 'Royalty', color: '#f59e0b', words: [
      { w: 'king',     x: 78, y: 18 },
      { w: 'queen',    x: 82, y: 30 },
      { w: 'prince',   x: 88, y: 22 },
      { w: 'princess', x: 90, y: 34 },
      { w: 'man',      x: 72, y: 22 },
      { w: 'woman',    x: 72, y: 32 },
    ]},
    { label: 'Animals', color: '#10b981', words: [
      { w: 'cat',  x: 50, y: 38 },
      { w: 'dog',  x: 56, y: 44 },
      { w: 'bird', x: 44, y: 32 },
      { w: 'fish', x: 52, y: 50 },
    ]},
    { label: 'Technology', color: C3, words: [
      { w: 'code',   x: 62, y: 72 },
      { w: 'data',   x: 68, y: 78 },
      { w: 'neural', x: 72, y: 68 },
      { w: 'model',  x: 76, y: 76 },
    ]},
    { label: 'Feelings', color: '#8b5cf6', words: [
      { w: 'happy', x: 14, y: 32 },
      { w: 'sad',   x: 10, y: 44 },
      { w: 'fear',  x: 18, y: 52 },
      { w: 'joy',   x: 12, y: 26 },
    ]},
  ]

  const all = clusters.flatMap(c => c.words.map(w => ({ ...w, color: c.color, cluster: c.label })))

  return (
    <SlideContainer accentColor={C3}>
      <ActHeader actNum="3" actName="How the Model Thinks" color={C3} />
      <div style={{ maxWidth: '780px', width: '92%', zIndex: 10, display: 'flex', gap: '32px', alignItems: 'center' }}>
        <div style={{ flex: '0 0 auto', width: 'min(320px, 42vw)' }}>
          <AnimateIn delay={120}>
            <Tag color={C3}>Step 2</Tag>
            <h1 style={{ fontSize: 'clamp(1.6rem,3.5vw,2.8rem)', fontWeight: 800, lineHeight: 1.1, margin: '16px 0 12px', color: '#1c1208' }}>
              Numbers become meaning
            </h1>
            <p style={{ fontSize: '14px', color: '#6b5642', lineHeight: 1.7, marginBottom: '18px' }}>
              Each token ID is transformed into a high-dimensional vector — a point in "meaning space". Similar words end up close together.
            </p>
          </AnimateIn>
          <AnimateIn delay={900}>
            <div style={{ background: '#fffbf4', border: '1px solid #1a1a38', borderRadius: '12px', padding: '14px 16px' }}>
              <div style={{ fontSize: '12px', color: '#c0a888', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>Famous analogy</div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '13px', lineHeight: 1.8 }}>
                <span style={{ color: '#f59e0b' }}>king</span>
                <span style={{ color: '#c0a888' }}> − </span>
                <span style={{ color: '#8888aa' }}>man</span>
                <span style={{ color: '#c0a888' }}> + </span>
                <span style={{ color: '#8888aa' }}>woman</span>
                <span style={{ color: '#c0a888' }}> ≈ </span>
                <span style={{ color: '#f59e0b' }}>queen</span>
              </div>
              <div style={{ fontSize: '12px', color: '#b09878', marginTop: '6px', lineHeight: 1.5 }}>
                From the famous word2vec paper (2013) — an illustration of the principle. Modern transformers use the same geometry, though their embedding spaces are far richer and context-dependent.
              </div>
            </div>
          </AnimateIn>
          <AnimateIn delay={1100}>
            <Insight color={C3} style={{ marginTop: '14px' }}>
              The model has never been taught what "royalty" means. It inferred the structure from billions of sentences.
            </Insight>
          </AnimateIn>
        </div>
        <AnimateIn delay={400} style={{ flex: 1 }}>
          <div style={{ position: 'relative' }}>
            <svg viewBox="0 0 100 100" style={{ width: '100%', height: 'auto', display: 'block' }}>
              {clusters.map(c => {
                const xs = c.words.map(w => w.x), ys = c.words.map(w => w.y)
                const cx = xs.reduce((a,b)=>a+b,0)/xs.length
                const cy = ys.reduce((a,b)=>a+b,0)/ys.length
                return (
                  <ellipse key={c.label} cx={cx} cy={cy} rx="13" ry="12"
                    fill={c.color + '10'} stroke={c.color + '30'} strokeWidth="0.3"
                    style={{ transition: 'all 0.3s ease' }}
                  />
                )
              })}
              {showArrow && (
                <g style={{ animation: 'fadeIn 0.6s ease' }}>
                  <line x1="72" y1="22" x2="82" y2="30"
                    stroke="#f59e0b" strokeWidth="0.5" strokeDasharray="1.5,1" opacity="0.6" />
                  <circle cx="82" cy="30" r="2" fill="#f59e0b" opacity="0.8" />
                </g>
              )}
              {all.map(w => (
                <g key={w.w}
                  onMouseEnter={() => setHover(w.cluster)}
                  onMouseLeave={() => setHover(null)}
                  style={{ cursor: 'default' }}>
                  <circle cx={w.x} cy={w.y} r="1.4"
                    fill={hover === w.cluster ? w.color : w.color + '80'}
                    style={{ transition: 'all 0.2s ease' }} />
                  <text x={w.x + 1.8} y={w.y + 0.8}
                    fontSize="3.2" fill={hover === w.cluster ? w.color : w.color + 'aa'}
                    fontFamily="Outfit, sans-serif" fontWeight={hover === w.cluster ? 700 : 400}
                    style={{ transition: 'all 0.2s ease' }}>
                    {w.w}
                  </text>
                </g>
              ))}
            </svg>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '8px' }}>
              {clusters.map(c => (
                <div key={c.label} style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: c.color }} />
                  <span style={{ fontSize: '11px', color: '#b09878' }}>{c.label}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimateIn>
      </div>
      <SlideCount current={1} total={4} color={C3} />
    </SlideContainer>
  )
}

function Act3Slide3() {
  const words = ['The','trophy',"didn't",'fit','in','the','suitcase','because','it','was','too','big']
  const attention = {
    1: { 3:0.45, 6:0.2,  8:0.85, 11:0.5  },
    3: { 1:0.45, 2:0.7,  6:0.35           },
    6: { 3:0.5,  1:0.2,  10:0.4           },
    8: { 1:0.85, 6:0.25, 11:0.4           },
    10:{ 11:0.9, 9:0.35,  8:0.2           },
    11:{ 10:0.9, 8:0.6,   1:0.4           },
  }
  const hints = {
    1: '"trophy" strongly attends to "it" — the model links them as the same thing.',
    8: '"it" attends most to "trophy" — this is coreference resolution in action.',
    10:'"too" locks onto "big" — they form a unit of meaning.',
    11:'"big" attends to "too" and "it" — understanding the causal chain.',
    3: '"fit" looks back at "didn\'t" and the object that didn\'t fit.',
    6: '"suitcase" checks whether things fit inside it.',
  }

  const [selected, setSelected] = useState(null)
  const attnMap = selected !== null ? (attention[selected] || {}) : {}

  const getOpacity = (i) => {
    if (selected === null) return 0.7
    if (i === selected) return 1
    const v = attnMap[i]
    return v ? 0.25 + v * 0.75 : 0.18
  }
  const getScale = (i) => {
    if (selected === null) return 1
    if (i === selected) return 1
    const v = attnMap[i]
    return v ? 0.95 + v * 0.05 : 0.9
  }

  return (
    <SlideContainer accentColor={C3}>
      <ActHeader actNum="3" actName="How the Model Thinks" color={C3} />
      <div style={{ maxWidth: '700px', width: '92%', zIndex: 10 }}>
        <AnimateIn delay={100}>
          <Tag color={C3}>Step 3</Tag>
          <h1 style={{ fontSize: 'clamp(1.8rem,4vw,3rem)', fontWeight: 800, lineHeight: 1.1, margin: '16px 0 10px', color: '#1c1208' }}>
            Words talk to each other
          </h1>
          <p style={{ fontSize: '14px', color: '#6b5642', lineHeight: 1.7, marginBottom: '24px', maxWidth: '520px' }}>
            <strong style={{ color: '#1c1208' }}>Attention</strong> lets each token ask: "which other words are relevant to understanding me?" Click any highlighted word below.
          </p>
        </AnimateIn>
        <AnimateIn delay={320}>
          <div style={{
            background: 'rgba(255,251,244,0.97)', border: '1px solid #1a1a38',
            borderRadius: '16px', padding: '24px', marginBottom: '20px',
          }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
              {words.map((w, i) => {
                const isClickable = attention[i] !== undefined
                const isSel = selected === i
                const op = getOpacity(i)
                const sc = getScale(i)
                const str = attnMap[i] || 0
                return (
                  <span key={i} onClick={() => isClickable && setSelected(isSel ? null : i)} style={{
                    display: 'inline-block',
                    background: isSel ? C3 + '2a' : (str > 0.5 ? C3 + '18' : str > 0.2 ? C3 + '0a' : 'transparent'),
                    border: isSel ? `1.5px solid ${C3}80` : `1.5px solid ${str > 0.4 ? C3 + '45' : 'transparent'}`,
                    borderRadius: '8px', padding: '6px 10px',
                    fontFamily: "'JetBrains Mono', monospace", fontSize: '15px',
                    fontWeight: isSel ? 700 : 500,
                    color: isSel ? C3 : (isClickable ? '#c0bddc' : '#9896b8'),
                    cursor: isClickable ? 'pointer' : 'default',
                    opacity: op, transform: `scale(${sc})`,
                    transition: 'all 0.25s ease',
                    boxShadow: isSel ? `0 0 12px ${C3}40` : 'none',
                  }}>
                    {w}
                  </span>
                )
              })}
            </div>
            <div style={{ fontSize: '12px', color: selected !== null ? C3 : '#2e2c4a', transition: 'color 0.3s ease', minHeight: '20px' }}>
              {selected !== null
                ? (hints[selected] || 'Click a highlighted word to see what it attends to.')
                : 'Click a highlighted word to see its attention pattern.'}
            </div>
          </div>
        </AnimateIn>
        <AnimateIn delay={600}>
          <Insight color={C3}>
            This is how the model resolves "it" in a sentence. Not grammar rules — pure learned attention over billions of examples. Try clicking "it" and "trophy".
          </Insight>
        </AnimateIn>
      </div>
      <SlideCount current={2} total={4} color={C3} />
    </SlideContainer>
  )
}

function Act3Slide4() {
  const [winPos, setWinPos] = useState(3)
  useEffect(() => {
    const t = setInterval(() => setWinPos(p => (p >= 5 ? 1 : p + 1)), 1800)
    return () => clearInterval(t)
  }, [])

  const blocks = [
    { id: 0, label: 'Page 1', text: '...months ago, Alice started...' },
    { id: 1, label: 'Page 2', text: '...the garden path wound through...' },
    { id: 2, label: 'Page 3', text: '...she remembered the old key...' },
    { id: 3, label: 'Page 4', text: '...the door creaked open...' },
    { id: 4, label: 'Page 5', text: '...a soft light filled the room...' },
    { id: 5, label: 'Page 6', text: '...Alice gasped and stepped inside...' },
    { id: 6, label: 'Page 7', text: '...something moved in the shadows...' },
    { id: 7, label: 'Page 8', text: '...and the story continued...' },
  ]

  const winSize = 3
  const inWindow = (i) => i >= winPos && i < winPos + winSize

  return (
    <SlideContainer accentColor={C3}>
      <ActHeader actNum="3" actName="How the Model Thinks" color={C3} />
      <div style={{ maxWidth: '700px', width: '92%', zIndex: 10 }}>
        <AnimateIn delay={100}>
          <Tag color={C3}>Step 4</Tag>
          <h1 style={{ fontSize: 'clamp(1.8rem,4vw,3rem)', fontWeight: 800, lineHeight: 1.1, margin: '16px 0 10px', color: '#1c1208' }}>
            The model's working memory
          </h1>
          <p style={{ fontSize: '14px', color: '#6b5642', lineHeight: 1.7, marginBottom: '24px', maxWidth: '520px' }}>
            A model can only consider a limited amount of text at once — its <strong style={{ color: '#1c1208' }}>context window</strong>. Think of it like working memory: rich and detailed inside, invisible outside.
          </p>
        </AnimateIn>
        <AnimateIn delay={350}>
          <div style={{
            background: 'rgba(255,251,244,0.97)', border: '1px solid #1a1a38',
            borderRadius: '16px', padding: '20px 22px', marginBottom: '20px',
          }}>
            <div style={{ fontSize: '12px', color: '#c8b8a0', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '14px' }}>
              A long document — the window slides through it
            </div>
            <div style={{ display: 'flex', gap: '8px', marginBottom: '14px' }}>
              {blocks.map((b, i) => (
                <div key={b.id} style={{
                  flex: 1, borderRadius: '10px', padding: '10px 8px',
                  background: inWindow(i) ? C3 + '1a' : '#f0e6d0',
                  border: `1.5px solid ${inWindow(i) ? C3 + '60' : '#f0e6d0'}`,
                  transition: 'all 0.5s ease',
                  boxShadow: inWindow(i) ? `0 0 14px ${C3}25` : 'none',
                }}>
                  <div style={{ fontSize: '9px', color: inWindow(i) ? C3 : '#282848', fontWeight: 700, letterSpacing: '0.06em', marginBottom: '4px' }}>{b.label}</div>
                  <div style={{ fontSize: '9px', color: inWindow(i) ? '#a0bdcc' : '#18183a', lineHeight: 1.4 }}>{b.text}</div>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px' }}>
              <span style={{ color: '#c8b8a0' }}>← forgotten</span>
              <span style={{ color: C3 + 'aa' }}>active context window</span>
              <span style={{ color: '#c8b8a0' }}>not yet seen →</span>
            </div>
          </div>
        </AnimateIn>
        <AnimateIn delay={700}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px' }}>
            {[
              { label: 'Early models',  tokens: '4,096 tokens',           note: '~3,000 words' },
              { label: 'Modern models', tokens: '128,000–200,000 tokens', note: 'a full novel — or more' },
            ].map(m => (
              <div key={m.label} style={{
                background: '#fffbf4', border: '1px solid #1a1a38',
                borderRadius: '12px', padding: '14px 16px',
              }}>
                <div style={{ fontSize: '13px', fontWeight: 700, color: C3, marginBottom: '4px' }}>{m.label}</div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '13px', color: '#8888aa', marginBottom: '3px' }}>{m.tokens}</div>
                <div style={{ fontSize: '12px', color: '#c0a888' }}>{m.note}</div>
              </div>
            ))}
          </div>
        </AnimateIn>
        <AnimateIn delay={900}>
          <Insight color={C3}>
            What came before the window? Gone. The model has no memory of it — which is why very long conversations sometimes seem to "forget" earlier details.
          </Insight>
        </AnimateIn>
      </div>
      <SlideCount current={3} total={4} color={C3} />
    </SlideContainer>
  )
}

export const act3Slides = [Act3Slide1, Act3Slide2, Act3Slide3, Act3Slide4]
