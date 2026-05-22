---
theme: seriph
background: https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1920&q=80
title: AI Cho Người Không Làm IT
info: |
  Hiểu đúng về AI — biết dùng AI hiệu quả
  Dành cho nhân viên văn phòng và quản trị nội dung
class: text-center
transition: slide-left
drawings:
  persist: false
comark: true
---

<div class="absolute inset-0 bg-black/50" />

# Ai cũng chọn việc nhẹ nhàng,<br>gian khổ sẽ dành phần AI

Hiểu đúng bản chất AI để áp dụng tốt hơn vào công việc

<!--
Chào mọi người. Chào mừng mọi người đến với buổi chia sẻ về AI. Mình quan sát thấy mọi người đang dùng các công cụ AI rất nhiều trong cuộc sống — từ tra cứu thông tin, làm bài tập, viết content, thiết kế...

[Tương tác: Bạn có dùng AI chưa? Dùng trong cuộc sống như thế nào?]

Thực trạng: dùng nhưng không hiểu bản chất. Quan trọng nhất là hiểu bản chất — từ đó có thể hiểu và áp dụng mọi nguồn hướng dẫn khác.
-->

---
layout: center
---

# Giới Thiệu Bản Thân

<div class="text-left max-w-md mx-auto mt-8">
  <div v-click class="mb-4">
    <span class="font-bold text-primary">Tên:</span> Việt Anh
  </div>
  <div v-click class="mb-4">
    <span class="font-bold text-primary">Vai trò:</span> Software Engineer @Zuehlke Group
  </div>
</div>

<!--
Tự giới thiệu ngắn gọn. Là lập trình viên nên có cơ hội làm việc nhiều với AI, đã tìm hiểu về khía cạnh kỹ thuật.
Cách mà mình dùng AI trong công việc lập trình rất khác so với mọi người
- Không có tạo ảnh, không làm video, không viết nội dung/ bán hàng
Trong quá trình chia sẻ mình có thể dùng từ chuyên ngành / tiếng Anh - hãy hỏi lại nếu khó hiểu
-->

---
layout: default
---

# Agenda

<div class="flex flex-col gap-5 mt-8">
  <div v-click class="flex items-baseline gap-6">
    <div class="text-sm font-semibold text-primary/60 w-14 shrink-0 tracking-widest uppercase">1</div>
    <div class="text-lg">AI đang ở khắp nơi</div>
  </div>
  <div v-click class="flex items-baseline gap-6">
    <div class="text-sm font-semibold text-primary/60 w-14 shrink-0 tracking-widest uppercase">2</div>
    <div class="text-lg">Generative AI là gì?</div>
  </div>
  <div v-click class="flex items-baseline gap-6">
    <div class="text-sm font-semibold text-primary/60 w-14 shrink-0 tracking-widest uppercase">3</div>
    <div class="text-lg">Kỹ năng viết prompt hiệu quả</div>
  </div>
  <div v-click class="flex items-baseline gap-6">
    <div class="text-sm font-semibold text-primary/60 w-14 shrink-0 tracking-widest uppercase">4</div>
    <div class="text-lg">Chọn đúng công cụ cho đúng việc</div>
  </div>
  <div v-click class="flex items-baseline gap-6">
    <div class="text-sm font-semibold text-primary/60 w-14 shrink-0 tracking-widest uppercase">5</div>
    <div class="text-lg">Q&A</div>
  </div>
</div>

<!--
Giới thiệu nhanh 5 phần.
Mặc dù Q&A ở cuối, nhưng nếu mọi người có câu hỏi hay điểm chưa hiểu, cứ giơ tay trong lúc mình nói.
-->

---
layout: section
---

# Phần 1

## AI Đang Ở Khắp Nơi

### Bạn Đã Dùng Mà Không Biết

---

# AI Trong Cuộc Sống Hằng Ngày

<div class="h-72 flex items-center">
  <div class="grid grid-cols-4 gap-4 w-full">
    <div v-click class="flex flex-col items-center text-center gap-3">
      <img src="https://cdn.simpleicons.org/gmail" class="w-10 h-10" />
      <div class="font-semibold text-sm">Gmail lọc spam</div>
      <div class="text-xs opacity-50">Tự động, mỗi giây, miễn phí</div>
      <div class="text-xs text-primary/70 font-mono">Text Classification</div>
    </div>
    <div v-click class="flex flex-col items-center text-center gap-3">
      <img src="https://cdn.simpleicons.org/facebook/1877F2" class="w-10 h-10" />
      <div class="font-semibold text-sm">Facebook gợi ý sản phẩm</div>
      <div class="text-xs opacity-50">Dựa trên dữ liệu hành vi của bạn</div>
      <div class="text-xs text-primary/70 font-mono">Recommendation System</div>
    </div>
    <div v-click class="flex flex-col items-center text-center gap-3">
      <img src="https://cdn.simpleicons.org/tiktok/010101" class="w-10 h-10" />
      <div class="font-semibold text-sm">TikTok biết bạn thích gì</div>
      <div class="text-xs opacity-50">Feed cá nhân hoá từng người</div>
      <div class="text-xs text-primary/70 font-mono">Reinforcement Learning</div>
    </div>
    <div v-click class="flex flex-col items-center text-center gap-3">
      <img src="https://api.iconify.design/mdi:cctv.svg?color=%23374151" class="w-10 h-10" />
      <div class="font-semibold text-sm">Camera nhận dạng biển số xe</div>
      <div class="text-xs opacity-50">Phạt nguội, bãi giữ xe tự động</div>
      <div class="text-xs text-primary/70 font-mono">Computer Vision</div>
    </div>
  </div>
</div>

<!--
Hỏi người nghe: "Ai đã dùng Gmail? TikTok? Maps?" — Rồi nói: "Vậy là mọi người đã dùng AI rồi."
Ngành AI đã được nghiên cứu từ lâu và chia thành nhiều nhánh, giải quyết các bài toán khác nhau. Generative AI là 1 nhánh trong số đó, chuyên xử lý ngôn ngữ tự nhiên.
-->

---
layout: center
class: text-center
---

<div class="text-sm font-semibold text-primary/60 tracking-widest uppercase mb-2">Phần 2</div>

# Generative AI Là Gì?

<div class="flex justify-center gap-16 mt-12">
  <div v-click class="flex flex-col items-center gap-3">
    <img src="https://api.iconify.design/simple-icons:openai.svg?color=%2310a37f" class="w-12 h-12" />
    <div class="font-semibold text-sm">ChatGPT</div>
  </div>
  <div v-click class="flex flex-col items-center gap-3">
    <img src="https://cdn.simpleicons.org/googlegemini" class="w-12 h-12" />
    <div class="font-semibold text-sm">Gemini</div>
  </div>
  <div v-click class="flex flex-col items-center gap-3">
    <img src="https://cdn.simpleicons.org/anthropic" class="w-12 h-12" />
    <div class="font-semibold text-sm">Claude</div>
  </div>
</div>

<div v-click class="mt-12 text-center text-sm opacity-70 italic">
  Tất cả đều được xây dựng trên cùng một nền tảng — gọi là <span class="font-semibold not-italic text-primary">Large Language Model</span>.
</div>

<!--
Nếu khán giả hỏi "Generative AI và LLM khác nhau chỗ nào?":

- **Generative AI** là khái niệm rộng — chỉ các hệ thống AI có khả năng *tạo ra nội dung mới* (văn bản, hình ảnh, âm thanh, video...).
- **LLM** (Large Language Model) là một *loại kỹ thuật cụ thể* bên trong Generative AI — chuyên xử lý và sinh ra ngôn ngữ.

Hình dung: Generative AI là "xe hơi", LLM là "động cơ đốt trong" — không phải xe nào cũng dùng động cơ đốt trong, nhưng hầu hết xe phổ biến hiện nay đều dùng.
ChatGPT, Gemini, Claude đều là sản phẩm Generative AI được xây trên nền LLM.
-->

---

# LLM Hoạt Động Như Thế Nào?

<div class="text-center text-2xl font-bold text-primary mt-4 mb-8" v-click>
  "Trò đoán từ tiếp theo — cực kỳ tinh vi"
</div>

<div class="grid grid-cols-3 gap-6">
  <div v-click class="text-center">
    <div class="text-4xl mb-3">📚</div>
    <div class="font-bold mb-1">Học từ văn bản</div>
    <div class="text-sm opacity-50">Hàng tỷ trang web, sách, bài báo</div>
  </div>
  <div v-click class="text-center">
    <div class="text-4xl mb-3">🎯</div>
    <div class="font-bold mb-1">Tính xác suất</div>
    <div class="text-sm opacity-50">y = f(x) — đầu vào là câu, đầu ra là từ tiếp theo</div>
  </div>
  <div v-click class="text-center">
    <div class="text-4xl mb-3">🔄</div>
    <div class="font-bold mb-1">Lặp đi lặp lại</div>
    <div class="text-sm opacity-50">Đoán từ → thêm vào → đoán tiếp</div>
  </div>
</div>

<div v-click class="mt-10 text-center font-semibold text-primary">
  AI không "hiểu" — nó <em>tính xác suất</em>
</div>

<!--
Ẩn dụ tốt: Nếu bạn đọc hàng tỷ câu tiếng Việt, bạn sẽ có cảm giác từ nào "đúng chỗ" ngay cả khi không hiểu nghĩa — đó là cách LLM hoạt động.
Bạn có để ý khi chat với AI, câu trả lời được trả ra theo từng từ một? → Đó chính xác là cách LLM hoạt động: tính xác suất từ tiếp theo dựa trên ngữ cảnh các từ trước.
-->

---
layout: two-cols
---

# Ví Dụ: Tính Xác Suất

<div class="h-full flex flex-col justify-center pr-4">

<div v-click class="font-mono text-sm bg-primary/10 rounded-lg p-4 mb-6 border border-primary/30 w-full whitespace-nowrap">
  "Trời mưa to nên tôi quyết định ở nhà và ___"
</div>

<div v-click class="text-sm opacity-70 mb-4">AI tính xác suất cho mỗi từ có thể tiếp theo:</div>

<div v-click>
  <table class="text-sm w-full">
    <tbody>
      <tr class="border-b border-white/10">
        <td class="py-1 font-mono font-bold text-primary">ngủ</td>
        <td class="py-1 text-right opacity-70">4.5%</td>
      </tr>
      <tr class="border-b border-white/10">
        <td class="py-1 font-mono">xem phim</td>
        <td class="py-1 text-right opacity-70">3.5%</td>
      </tr>
      <tr class="border-b border-white/10">
        <td class="py-1 font-mono">đọc sách</td>
        <td class="py-1 text-right opacity-70">3.2%</td>
      </tr>
      <tr class="border-b border-white/10">
        <td class="py-1 font-mono">làm việc</td>
        <td class="py-1 text-right opacity-70">3.1%</td>
      </tr>
      <tr>
        <td class="py-1 font-mono">nấu ăn</td>
        <td class="py-1 text-right opacity-70">2.9%</td>
      </tr>
    </tbody>
  </table>
</div>

</div>

::right::

<div class="h-full flex flex-col justify-center pl-4">

<div v-click class="text-sm opacity-70 mb-3">Kết quả được tạo ra từng từ một:</div>

<div v-click class="flex flex-col gap-2 font-mono text-xs">
  <div class="opacity-30">Trời mưa to nên tôi quyết định ở nhà và</div>
  <div class="opacity-45">Trời mưa to nên tôi quyết định ở nhà và <span class="text-primary">ngủ</span></div>
  <div class="opacity-55">Trời mưa to nên tôi quyết định ở nhà và ngủ <span class="text-primary">một</span></div>
  <div class="opacity-70">Trời mưa to nên tôi quyết định ở nhà và ngủ một <span class="text-primary">giấc</span></div>
  <div class="opacity-85">Trời mưa to nên tôi quyết định ở nhà và ngủ một giấc <span class="text-primary">dài.</span></div>
  <div>Trời mưa to nên tôi quyết định ở nhà và ngủ một giấc dài. <span class="text-primary font-bold">Thật...</span></div>
</div>

<div v-click class="mt-6 text-xs text-primary/70 italic">
  → Mỗi từ mới lại trở thành ngữ cảnh để đoán từ tiếp theo
</div>

</div>

<!--
Đây là lý do câu trả lời của AI xuất hiện từng từ một — đó không phải "typing effect" mà là bản chất của cách LLM hoạt động.
-->

---

# Token Là Gì?

<div class="grid grid-cols-2 gap-8 mt-6">

<div v-click>
  <div class="font-bold text-primary mb-3">🔤 Token là gì?</div>
  <div class="text-sm opacity-70 mb-3">LLM không xử lý từng chữ cái hay từng từ — nó chia văn bản thành "token" (mảnh nhỏ hơn từ)</div>
  <div class="font-mono text-xs bg-black/20 rounded p-3">
    "unhappy" → ["un", "happy"]<br>
    "ChatGPT" → ["Chat", "G", "PT"]
  </div>
  <div class="text-xs mt-3 opacity-50">
    Thử trực tiếp: <a href="https://tiktokenizer.vercel.app/" target="_blank" class="text-primary underline opacity-100">tiktokenizer.vercel.app</a>
  </div>
</div>

<div v-click class="flex items-center justify-center">
  <img src="/r-in-strawberry.png" class="w-full object-contain rounded-lg" style="mix-blend-mode: multiply; max-height: 28rem;" />
</div>

</div>

<!--
Token hóa là lý do tại sao AI đôi khi đếm sai số chữ hoặc tách từ kỳ lạ — nó không "thấy" từng ký tự như con người.

Demo trực tiếp tại tiktokenizer.vercel.app: gõ "Xin chào, tôi là người Việt Nam" và cho khán giả thấy câu tiếng Việt bị tách thành nhiều token hơn tiếng Anh tương đương — đây là lý do AI "tốn" hơn khi xử lý tiếng Việt.
-->

---

# Context Window

<div class="mt-4">
  <div class="text-sm opacity-70 mb-6">Hội thoại càng dài → hiệu suất càng giảm. Giống như họp 3 tiếng — càng cuối càng mất tập trung vào đầu buổi</div>
</div>

<div v-click>
  <div class="font-bold mb-3 text-sm">Giới hạn context window của các model hiện tại:</div>
  <div class="grid grid-cols-3 gap-3">
    <div class="text-center p-3 rounded bg-white/5 border border-white/10">
      <div class="font-bold text-primary text-lg">1M</div>
      <div class="text-xs opacity-60">tokens</div>
      <div class="text-xs mt-1">Gemini · GPT-4.1 · Grok 3</div>
      <div class="text-xs opacity-40">~2.000–2.500 trang sách</div>
    </div>
    <div class="text-center p-3 rounded bg-white/5 border border-white/10">
      <div class="font-bold text-primary text-lg">200K</div>
      <div class="text-xs opacity-60">tokens</div>
      <div class="text-xs mt-1">Claude</div>
      <div class="text-xs opacity-40">~500 trang sách</div>
    </div>
    <div class="text-center p-3 rounded bg-white/5 border border-white/10">
      <div class="font-bold text-primary text-lg">128K</div>
      <div class="text-xs opacity-60">tokens</div>
      <div class="text-xs mt-1">GPT-4o</div>
      <div class="text-xs opacity-40">~300 trang sách</div>
    </div>
  </div>
</div>

<div v-click class="mt-6 p-4 rounded-lg bg-primary/10 border border-primary/30 text-sm">
  <div class="font-semibold text-primary mb-2">💼 Trong công việc</div>
  <div class="flex flex-col gap-2 opacity-80">
    <div>→ Giữ các đoạn hội thoại không quá dài — bắt đầu chat mới khi chuyển chủ đề</div>
    <div>→ Tập trung vào <span class="font-semibold">1 task trong 1 đoạn hội thoại</span> để AI không bị "loãng" ngữ cảnh</div>
  </div>
</div>

---

# Hạn Chế Của AI Cần Biết

<div class="grid grid-cols-2 gap-x-10 gap-y-5 mt-4">
  <div v-click class="flex gap-4 items-baseline">
    <div class="text-2xl shrink-0">📅</div>
    <div>
      <div class="font-bold">Knowledge Cut-off</div>
      <div class="text-sm opacity-50 mt-1">Không biết tin tức sau ngày huấn luyện kết thúc</div>
    </div>
  </div>
  <div v-click class="flex gap-4 items-baseline">
    <div class="text-2xl shrink-0">🌐</div>
    <div>
      <div class="font-bold">Không truy cập internet (mặc định)</div>
      <div class="text-sm opacity-50 mt-1">Không lên mạng kiểm tra — trừ khi bật Search</div>
    </div>
  </div>
  <div v-click class="flex gap-4 items-baseline">
    <div class="text-2xl shrink-0">🎭</div>
    <div>
      <div class="font-bold">Hallucination</div>
      <div class="text-sm opacity-50 mt-1">Bịa số liệu, tên người, trích dẫn — mà vẫn rất tự tin</div>
    </div>
  </div>
  <div v-click class="flex gap-4 items-baseline">
    <div class="text-2xl shrink-0">🧮</div>
    <div>
      <div class="font-bold">Không tính toán thật sự</div>
      <div class="text-sm opacity-50 mt-1">LLM thuần tuý "đoán" kết quả toán, không thực sự tính<br><span class="opacity-60">(Các sản phẩm hiện đại đã tích hợp công cụ tính toán bên ngoài)</span></div>
    </div>
  </div>
  <div v-click class="flex gap-4 items-baseline">
    <div class="text-2xl shrink-0">🎲</div>
    <div>
      <div class="font-bold">Kết quả không nhất quán</div>
      <div class="text-sm opacity-50 mt-1">Cùng câu hỏi, hỏi nhiều lần → có thể cho insight khác nhau</div>
    </div>
  </div>
  <div v-click class="flex gap-4 items-baseline">
    <div class="text-2xl shrink-0">🧠</div>
    <div>
      <div class="font-bold">Không có bộ nhớ giữa các cuộc hội thoại</div>
      <div class="text-sm opacity-50 mt-1">Mỗi chat mới = AI quên sạch lịch sử cũ</div>
    </div>
  </div>
</div>

<div v-click class="mt-6 text-sm opacity-60">
  Ví dụ thực tế: <a href="https://share.google/aimode/Kz86R3WIylhAZYEUI" target="_blank" class="text-primary underline opacity-100">share.google/aimode/Kz86R3WIylhAZYEUI</a>
</div>

<!--
Đây là phần quan trọng để tránh dùng AI sai cách. Luôn kiểm chứng lại số liệu, tên người, ngày tháng quan trọng mà AI cung cấp — đặc biệt khi dùng cho nội dung chính thức.
-->

---
---

# Ví Dụ: AI Tự Tin Nói Sai

<div class="grid grid-cols-2 gap-6 mt-4">
  <div v-click class="flex flex-col items-center">
    <div class="text-xs font-bold text-red-400 mb-2">❌ Prompt đơn giản → AI trả lời sai</div>
    <img src="/image.png" class="rounded-lg w-full object-contain" />
  </div>
  <div v-click class="flex flex-col items-center">
    <div class="text-xs font-bold text-green-400 mb-2">✅ Hướng dẫn AI tính trước → đúng</div>
    <img src="/image-1.png" class="rounded-lg w-full object-contain" />
  </div>
</div>

<!--
Cùng một câu hỏi, chỉ thay đổi cách prompt: yêu cầu AI tính toán trước rồi mới kết luận → kết quả chính xác hơn. Đây là minh chứng rõ nhất cho việc prompt tốt quan trọng như thế nào.
-->

---

# Phá Vỡ Các Hiểu Lầm

<div class="flex flex-col gap-6 mt-6">
  <div v-click class="flex gap-5 items-baseline">
    <div class="text-2xl shrink-0">❌</div>
    <div>
      <div class="font-bold">"AI có cảm xúc, AI đang buồn / vui"</div>
      <div class="text-sm opacity-50 mt-1">AI <em>mô phỏng</em> ngôn ngữ cảm xúc — không phải cảm nhận thật</div>
    </div>
  </div>
  <div v-click class="flex gap-5 items-baseline">
    <div class="text-2xl shrink-0">❌</div>
    <div>
      <div class="font-bold">"AI đang suy nghĩ như con người"</div>
      <div class="text-sm opacity-50 mt-1">Không có ý thức — chỉ tính xác suất từ nào phù hợp nhất</div>
    </div>
  </div>
  <div v-click class="flex gap-5 items-baseline">
    <div class="text-2xl shrink-0">❌</div>
    <div>
      <div class="font-bold">"AI biết mình đang sai"</div>
      <div class="text-sm opacity-50 mt-1">AI không tự nhận ra lỗi — nó luôn đưa ra câu trả lời "có vẻ đúng nhất"</div>
    </div>
  </div>
  <div v-click class="flex gap-5 items-baseline">
    <div class="text-2xl shrink-0">⚠️</div>
    <div>
      <div class="font-bold">Hallucination — AI tự tin nói sai</div>
      <div class="text-sm opacity-50 mt-1">Bịa số liệu, tên người, trích dẫn... mà vẫn rất tự tin — vì nó chỉ "đoán từ tiếp theo"</div>
    </div>
  </div>
</div>

<!--
Nhấn mạnh: AI là công cụ rất mạnh, nhưng nó không thay thế phán đoán của con người. Hiểu đúng bản chất mới tránh được bẫy tin tưởng AI mù quáng.
-->

---
layout: section
---

# Phần 3

## Dùng AI Đúng Cách

### Kỹ Năng Viết Prompt

---
layout: two-cols
---

# Tại Sao Cùng Câu Hỏi, Kết Quả Khác Nhau?

<div class="h-full flex items-center pr-4">
  <div class="text-center">
    <div v-click class="text-5xl mb-4">🗣️</div>
    <div v-click class="font-bold text-lg mb-2">Nguyên tắc cốt lõi</div>
    <div v-click class="text-sm opacity-75">AI chỉ biết những gì <strong>bạn cung cấp</strong>. Càng rõ ràng → kết quả càng tốt.</div>
  </div>
</div>

::right::

<div class="pl-4 mt-4">

<div v-click class="p-3 rounded-lg bg-red-500/10 border border-red-500/30 mb-4">
  <div class="text-xs font-bold text-red-400 mb-1">PROMPT MƠ HỒ</div>
  <div class="font-mono text-sm">"Viết bài thông báo sự kiện"</div>
  <div class="text-xs opacity-60 mt-2">→ AI không biết sự kiện gì, đăng ở đâu, giọng văn ra sao...</div>
</div>

<div v-click class="p-3 rounded-lg bg-green-500/10 border border-green-500/30">
  <div class="text-xs font-bold text-green-400 mb-1">PROMPT RÕ RÀNG</div>
  <div class="font-mono text-xs">"Viết bài thông báo Thánh lễ Khai mạc Năm Mục vụ 2025 đăng trên trang Công giáo của giáo xứ, giọng văn trang trọng, ngắn gọn dưới 150 chữ, kèm thời gian và địa điểm cụ thể"</div>
  <div class="text-xs opacity-60 mt-2">→ AI có đủ thông tin để tạo nội dung đúng ý</div>
</div>

</div>

<!--
Demo trực tiếp nếu có thể: gõ hai prompt vào ChatGPT và cho mọi người thấy sự khác biệt ngay trên màn hình.
-->

---

# Kỹ Thuật Prompt Cơ Bản

<div class="grid grid-cols-2 gap-4 mt-4">
  <div v-click class="p-4 rounded-lg border border-primary/30 bg-primary/5">
    <div class="font-bold text-primary mb-2">1. Giao vai trò</div>
    <div class="font-mono text-xs bg-black/20 rounded p-2 mb-2">"Bạn là quản trị viên của một trang mạng xã hội về Công giáo..."</div>
    <div class="text-xs opacity-70">AI điều chỉnh ngôn ngữ và góc nhìn theo vai trò được giao</div>
  </div>
  <div v-click class="p-4 rounded-lg border border-primary/30 bg-primary/5">
    <div class="font-bold text-primary mb-2">2. Cung cấp ngữ cảnh</div>
    <div class="font-mono text-xs bg-black/20 rounded p-2 mb-2">"Sự kiện: Thánh lễ Bổn mạng giáo xứ. Đối tượng: giáo dân mọi lứa tuổi. Mục tiêu: thông báo lịch và kêu gọi tham dự..."</div>
    <div class="text-xs opacity-70">Càng nhiều thông tin liên quan → kết quả càng sát yêu cầu</div>
  </div>
  <div v-click class="p-4 rounded-lg border border-primary/30 bg-primary/5">
    <div class="font-bold text-primary mb-2">3. Chỉ định định dạng</div>
    <div class="font-mono text-xs bg-black/20 rounded p-2 mb-2">"Trả lời dưới dạng danh sách 5 gạch đầu dòng, mỗi ý dưới 20 chữ"</div>
    <div class="text-xs opacity-70">AI sẽ định dạng đúng theo yêu cầu thay vì tự chọn</div>
  </div>
  <div v-click class="p-4 rounded-lg border border-primary/30 bg-primary/5">
    <div class="font-bold text-primary mb-2">4. Chia nhỏ yêu cầu</div>
    <div class="font-mono text-xs bg-black/20 rounded p-2 mb-2">"Trước tiên hãy phân tích đối tượng, sau đó mới viết nội dung"</div>
    <div class="text-xs opacity-70">Yêu cầu phức tạp → chia thành từng bước nhỏ</div>
  </div>
  <div v-click class="p-4 rounded-lg border border-primary/30 bg-primary/5">
    <div class="font-bold text-primary mb-2">5. Dùng delimiter</div>
    <div class="font-mono text-xs bg-black/20 rounded p-2 mb-2">"Tóm tắt đoạn văn sau: """[nội dung cần tóm tắt]""""</div>
    <div class="text-xs opacity-70">Dùng ```, """, --- để phân tách rõ nội dung với hướng dẫn</div>
  </div>
  <div v-click class="p-4 rounded-lg border border-primary/30 bg-primary/5">
    <div class="font-bold text-primary mb-2">6. Few-shot prompting</div>
    <div class="font-mono text-xs bg-black/20 rounded p-2 mb-2">"Ví dụ caption tốt: [mẫu 1], [mẫu 2]. Bây giờ viết caption tương tự cho..."</div>
    <div class="text-xs opacity-70">Thêm ví dụ mẫu để AI hiểu tone và style bạn muốn</div>
  </div>
</div>

<!--
Nên có handout kèm theo với 6 kỹ thuật này. Người nghe có thể mang về và áp dụng ngay.
-->

---

# Prompt Hoàn Chỉnh — Ví Dụ Thực Tế

<div class="mt-4 font-mono text-xs bg-black/30 rounded-xl p-4 leading-6 border border-white/10">
  <span v-click class="bg-violet-400 text-blue-950 rounded px-1">Bạn là quản trị viên trang mạng xã hội của một nhóm Công giáo</span> <span v-click class="bg-blue-400 text-blue-950 rounded px-1">hãy viết một bài thông về sự kiện của nhóm vào cuối tuần, sự kiện cần thông báo như sau:</span>
  <br/><br/>
  <span v-click class="bg-amber-300 text-amber-950 rounded px-1">"""<br/>
  Thứ Bảy 23/05:<br/>
  19h00: Sinh hoạt chủ đề “Ai cũng chọn việc nhẹ nhàng, gian khổ sẽ dành phần AI”
  21h00: Chương trình nấu cháo<br/>
  Chúa nhật 24/05:
  03h00: Đóng hộp và đi phát cho người vô gia cư<br/>
  """</span>
  <br/><br/>
  <span v-click class="bg-emerald-400 text-emerald-950 rounded px-1">Viết bài thông báo đăng Facebook và gửi vào nhóm cộng đồng; chọn từ ngữ vui tươi, thân thiện, hướng tới giới trẻ, nhưng không dùng tiếng Anh vì nhóm có cô chú lớn tuổi</span>
</div>

<div v-click class="flex gap-6 mt-4 text-xs justify-center">
  <span class="bg-violet-400 text-violet-950 rounded px-2 py-1">● Ngữ cảnh</span>
  <span class="bg-blue-400 text-blue-950 rounded px-2 py-1">● Giao vai trò</span>
  <span class="bg-amber-300 text-amber-950 rounded px-2 py-1">● Delimiter</span>
  <span class="bg-emerald-400 text-emerald-950 rounded px-2 py-1">● Yêu cầu format đầu ra</span>
</div>

---

# Một Số Mẹo Thực Tế

<div class="flex flex-col gap-8 mt-8">
  <div v-click class="flex gap-5 items-start">
    <div class="text-3xl shrink-0">✏️</div>
    <div>
      <div class="font-bold text-lg mb-1">Chỉnh sửa câu hỏi thay vì hỏi tiếp nối</div>
      <div class="text-sm opacity-60">Thay vì hỏi tiếp "Viết ngắn hơn" hay "Thêm ví dụ" — hãy chỉnh sửa lại câu hỏi ban đầu để bổ sung ngữ cảnh đó. AI sẽ có bức tranh đầy đủ hơn.</div>
    </div>
  </div>
  <div v-click class="flex gap-5 items-start">
    <div class="text-3xl shrink-0">🔄</div>
    <div>
      <div class="font-bold text-lg mb-1">Đảo ngược vai trò — biến AI thành người phản biện</div>
      <div class="text-sm opacity-60">Trong học thuật hay nghiên cứu: yêu cầu AI đặt câu hỏi và phản biện, bạn là người tìm câu trả lời. Cách này giúp bạn kiểm tra lại suy nghĩ của mình.</div>
    </div>
  </div>
</div>

<!--
Mẹo 1 rất thực tế cho người mới: thay vì "hỏi thêm", hãy cải thiện câu hỏi gốc.
Mẹo 2 hữu ích cho sinh viên, nghiên cứu viên, hoặc ai cần tư duy phản biện.
-->

---
layout: section
---

# Phần 4

## Chọn Đúng Công Cụ Cho Đúng Việc

---
clicks: 3
---

# Tổng Quan Các Nhà Cung Cấp Lớn

<div class="mt-4 text-sm flex flex-col gap-5">

  <div v-click class="rounded-lg border border-primary/30 bg-primary/5 p-4">
    <div class="text-xs font-semibold text-primary tracking-widest uppercase mb-3">Các nhà cung cấp lớn</div>
    <div class="grid grid-cols-2 gap-x-8 gap-y-2">
      <div class="flex gap-3 items-baseline">
        <div class="shrink-0">🇺🇸</div>
        <div><span class="font-bold">OpenAI</span><span class="opacity-50 ml-2">ChatGPT · DALL·E · Sora · Whisper</span></div>
      </div>
      <div class="flex gap-3 items-baseline">
        <div class="shrink-0">🇺🇸</div>
        <div><span class="font-bold">Anthropic</span><span class="opacity-50 ml-2">Claude.ai · Claude Code · Claude in Chrome</span></div>
      </div>
      <div class="flex gap-3 items-baseline">
        <div class="shrink-0">🇺🇸</div>
        <div><span class="font-bold">Google</span><span class="opacity-50 ml-2">Gemini · NotebookLM · Gemini for Workspace</span></div>
      </div>
      <div class="flex gap-3 items-baseline">
        <div class="shrink-0">🇺🇸</div>
        <div><span class="font-bold">Meta</span><span class="opacity-50 ml-2">Meta AI (WhatsApp, Instagram) · Llama (open-weight)</span></div>
      </div>
      <div class="flex gap-3 items-baseline">
        <div class="shrink-0">🇺🇸</div>
        <div><span class="font-bold">xAI</span><span class="opacity-50 ml-2">Grok · tích hợp X/Twitter · real-time web</span></div>
      </div>
    </div>
  </div>

  <div v-click class="rounded-lg border border-black/15 bg-black/5 p-4">
    <div class="text-xs font-semibold text-primary/50 tracking-widest uppercase mb-3">Các công ty khác</div>
    <div class="grid grid-cols-2 gap-x-8 gap-y-2">
      <div class="flex gap-3 items-baseline">
        <div class="shrink-0">🇺🇸</div>
        <div><span class="font-bold">Perplexity</span><span class="opacity-50 ml-2">AI Answer Engine · Deep Research · Pages</span></div>
      </div>
      <div class="flex gap-3 items-baseline">
        <div class="shrink-0">🇺🇸</div>
        <div><span class="font-bold">Microsoft</span><span class="opacity-50 ml-2">Microsoft 365 Copilot · GitHub Copilot · Bing AI</span></div>
      </div>
      <div class="flex gap-3 items-baseline">
        <div class="shrink-0">🇨🇳</div>
        <div><span class="font-bold">DeepSeek</span><span class="opacity-50 ml-2">DeepSeek Chat · R1 (open-weight, miễn phí tự host)</span></div>
      </div>
      <div class="flex gap-3 items-baseline">
        <div class="shrink-0">🇨🇳</div>
        <div><span class="font-bold">Alibaba (Qwen)</span><span class="opacity-50 ml-2">Qwen Chat · Tongyi enterprise suite</span></div>
      </div>
      <div class="flex gap-3 items-baseline">
        <div class="shrink-0">🇫🇷</div>
        <div><span class="font-bold">Mistral AI</span><span class="opacity-50 ml-2">Le Chat · open-weight models</span></div>
      </div>
    </div>
  </div>

</div>

<!--
Lưu ý: Model mới ra liên tục. Quan trọng hơn là biết cách chọn đúng loại cho đúng việc.
Có thể giới thiệu thêm NotebookLM
-->

---

# Các Mode Phổ Biến — Dùng Khi Nào?

<div class="flex flex-col gap-5 mt-6">
  <div v-click class="flex items-baseline gap-5">
    <div class="text-2xl shrink-0">⚡</div>
    <div>
      <span class="font-bold">Fast</span>
      <span class="text-sm opacity-50 ml-3">Tác vụ đơn giản hằng ngày — email, tóm tắt, trả lời nhanh</span>
    </div>
  </div>
  <div v-click class="flex items-baseline gap-5">
    <div class="text-2xl shrink-0">🧠</div>
    <div>
      <span class="font-bold">Thinking / Reasoning</span>
      <span class="text-sm opacity-50 ml-3">Phân tích, lập luận, so sánh chiến lược</span>
    </div>
  </div>
  <div v-click class="flex items-baseline gap-5">
    <div class="text-2xl shrink-0">🔍</div>
    <div>
      <span class="font-bold">Deep Research</span>
      <span class="text-sm opacity-50 ml-3">Tổng hợp nhiều nguồn — thị trường, đối thủ, báo cáo</span>
    </div>
  </div>
  <div v-click class="flex items-baseline gap-5">
    <div class="text-2xl shrink-0">📋</div>
    <div>
      <span class="font-bold">Planning</span>
      <span class="text-sm opacity-50 ml-3">Chia nhỏ và thực thi nhiệm vụ lớn</span>
    </div>
  </div>
</div>

---

# Gợi Ý Thực Tế Cho Từng Nhu Cầu

<div class="mt-4">
  <table class="w-full text-sm">
    <thead>
      <tr class="border-b border-primary/30">
        <th class="text-left py-2 font-bold text-primary">Nhu cầu</th>
        <th class="text-left py-2 font-bold text-primary">Mode gợi ý</th>
        <th class="text-left py-2 font-bold text-primary">Tool gợi ý</th>
      </tr>
    </thead>
    <tbody>
      <tr v-click class="border-b border-gray/10">
        <td class="py-3">Viết content fanpage</td>
        <td class="py-3"><span class="px-2 py-1 rounded bg-blue-500/20 text-blue-300 text-xs">Fast</span></td>
        <td class="py-3 opacity-70">ChatGPT / Claude + vai trò & ngữ cảnh</td>
      </tr>
      <tr v-click class="border-b border-gray/10">
        <td class="py-3">Phân tích đối thủ cạnh tranh</td>
        <td class="py-3"><span class="px-2 py-1 rounded bg-green-500/20 text-green-300 text-xs">Deep Research</span></td>
        <td class="py-3 opacity-70">ChatGPT / Gemini có bật Search</td>
      </tr>
      <tr v-click class="border-b border-gray/10">
        <td class="py-3">Lên kế hoạch chiến dịch</td>
        <td class="py-3"><span class="px-2 py-1 rounded bg-amber-500/20 text-amber-300 text-xs">Planning</span></td>
        <td class="py-3 opacity-70">ChatGPT o3 / Claude Opus</td>
      </tr>
      <tr v-click>
        <td class="py-3">Soạn email, báo cáo</td>
        <td class="py-3"><span class="px-2 py-1 rounded bg-blue-500/20 text-blue-300 text-xs">Fast</span></td>
        <td class="py-3 opacity-70">Bất kỳ tool nào bạn đang dùng</td>
      </tr>
    </tbody>
  </table>
</div>

<!--
Khuyến khích người nghe thử một trong các use case này ngay sau buổi hôm nay. Đừng chờ hoàn hảo — cứ thử và điều chỉnh.
-->

---
layout: center
class: text-center
---

# Q&A

<div class="text-6xl my-8">🙋</div>

<div v-click class="text-lg opacity-75 mb-4">
  Bạn đang dùng AI cho việc gì?
</div>
<div v-click class="text-lg opacity-75">
  Gặp khó khăn gì khi dùng AI?
</div>

<!--
Mở sàn câu hỏi. Nếu không có câu hỏi ngay, có thể hỏi ngược lại: "Ai đã thử dùng ChatGPT? Kết quả như thế nào?"
-->

---
layout: center
class: text-center
---

# Cảm Ơn

<!--
Kết thúc bằng lời động viên: AI đang phát triển rất nhanh. Người bắt đầu học và thử sớm sẽ có lợi thế. Không cần biết code — chỉ cần biết hỏi đúng cách.
-->

