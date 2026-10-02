/* =========================================================
   Gate Prompting — Data Materi
   Format tiap modul:
   {
     id: "l1-m1",
     level: 1,
     levelName: "Fondasi",
     title: "...",
     tag: "Dasar" | "Teknik" | "Lanjutan" | "Master",
     duration: "±5 menit",
     summary: "...",
     content: `...HTML...`
   }
   ========================================================= */

window.MATERI = [

  /* ================= LEVEL 1 — FONDASI ================= */

  {
    id: "l1-m1",
    level: 1,
    levelName: "Fondasi",
    title: "Apa Itu Prompt & Kenapa Penting",
    tag: "Dasar",
    duration: "±6 menit",
    summary: "Definisi prompt, analogi simpel, dan kenapa kualitas prompt nentuin kualitas output.",
    content: `
      <p>Kalau lu udah pernah pakai ChatGPT, Claude, Gemini, atau AI apapun, lu udah pernah nulis <strong>prompt</strong>. Prompt itu cuma istilah keren buat "instruksi yang lu kasih ke AI".</p>

      <h3>Analogi Simpel</h3>
      <p>Bayangin AI itu kayak asisten super pintar yang baru pertama kali kerja bareng lu. Dia pinter banget, tapi dia <em>nggak bisa baca pikiran</em>. Kalau lu cuma bilang "bikin laporan", dia bakal nebak-nebak: laporan apa? buat siapa? berapa halaman? gaya formal atau santai?</p>
      <p>Semakin jelas instruksi lu, semakin akurat hasilnya. Sesimpel itu.</p>

      <h3>Kenapa Ini Penting?</h3>
      <p>Banyak orang ngira AI itu "kurang pinter" kalau hasilnya jelek. Padahal 90% kasus, masalahnya ada di prompt, bukan di AI-nya. Ini fenomena yang sering disebut <em>garbage in, garbage out</em>.</p>
      <p>Contoh nyata:</p>
      <ul>
        <li><strong>Prompt A:</strong> "Bikin caption Instagram." → hasil generik, klise, nggak nempel.</li>
        <li><strong>Prompt B:</strong> "Bikin 3 caption Instagram buat foto produk skincare lokal, target perempuan 20-30 tahun, tone playful tapi nggak alay, max 2 baris, sertakan 1 pertanyaan biar engagement." → hasil jauh lebih pakai.</li>
      </ul>

      <div class="callout callout-info">
        <strong>Insight:</strong> Prompt yang bagus bukan yang panjang, tapi yang <em>jelas</em>. Panjang tanpa arah = tetap jelek.
      </div>

      <h3>Yang Bakal Lu Pelajari di Gate Prompting</h3>
      <p>Kursus ini dibagi jadi 4 level:</p>
      <ul>
        <li><strong>Level 1 — Fondasi:</strong> komponen dasar prompt & prinsip kejelasan.</li>
        <li><strong>Level 2 — Teknik Dasar:</strong> few-shot, role prompting, constraint, formatting.</li>
        <li><strong>Level 3 — Lanjutan:</strong> Chain of Thought, Tree of Thoughts, prompt chaining.</li>
        <li><strong>Level 4 — Master:</strong> system prompt design, evaluasi, framework sendiri.</li>
      </ul>
      <p>Semua materi <em>general</em> — bisa dipakai di AI apapun, buat task apapun.</p>

      <h3>Takeaway</h3>
      <ul>
        <li>Prompt = instruksi ke AI.</li>
        <li>Kualitas output ≈ kualitas prompt.</li>
        <li>Yang penting bukan panjang, tapi jelas.</li>
      </ul>
    `
  },

  {
    id: "l1-m2",
    level: 1,
    levelName: "Fondasi",
    title: "Anatomi Prompt yang Bagus",
    tag: "Dasar",
    duration: "±8 menit",
    summary: "4 komponen wajib: Role, Task, Context, Format. Plus contoh penerapannya.",
    content: `
      <p>Prompt yang bagus punya struktur. Nggak harus rigid, tapi minimal punya 4 komponen ini.</p>

      <h3>1. Role (Peran)</h3>
      <p>Kasih tahu AI <em>siapa</em> dia dalam konteks ini. Ini ngebantu AI nyesuaiin vocabulary, kedalaman, dan gaya jawaban.</p>
      <pre>Kamu adalah editor profesional dengan 10 tahun pengalaman di penerbitan buku non-fiksi.</pre>
      <p>Bandingkan kalau lu nggak kasih role — AI bakal jawab dengan gaya default yang generik.</p>

      <h3>2. Task (Tugas)</h3>
      <p>Apa yang harus dilakukan? Pakai kata kerja yang spesifik.</p>
      <pre>Tulis ulang paragraf berikut supaya lebih ringkas tanpa mengubah makna.</pre>
      <p>Hindari kata ambigu kayak "bantu", "urus", "benerin". Ganti dengan "rangkum", "terjemahkan", "analisis", "bandingkan".</p>

      <h3>3. Context (Konteks)</h3>
      <p>Siapa audiensnya? Buat apa? Ada batasan apa? Konteks ini yang bikin jawaban <em>nyambung</em>.</p>
      <pre>Target pembaca: mahasiswa semester awal yang belum familiar dengan istilah teknis. Hindari jargon, atau kalau terpaksa pakai, jelaskan dalam tanda kurung.</pre>

      <h3>4. Format (Format Output)</h3>
      <p>Mau hasilnya kayak apa? Bullet points? Tabel? JSON? Paragraf? Kasih tahu eksplisit.</p>
      <pre>Format output:
- Judul (max 8 kata)
- 3 bullet points utama
- 1 paragraf penutup (max 50 kata)</pre>

      <h3>Contoh Lengkap</h3>
      <p>Gabungan keempatnya:</p>
      <pre>Kamu adalah content writer spesialis teknologi.

Tulis artikel 600 kata tentang "AI untuk UMKM".

Konteks: target pembaca adalah pemilik usaha kecil non-teknis,
usia 30-50 tahun, sebagian belum pernah pakai AI.

Format:
- Judul yang menarik
- 4 subjudul
- Setiap subjudul max 150 kata
- Sertakan 3 contoh nyata
- Tutup dengan 1 paragraf kesimpulan</pre>

      <div class="callout callout-tip">
        <strong>Tips:</strong> Urutan Role → Task → Context → Format itu nggak wajib. Yang penting keempatnya ada.
      </div>

      <h3>Takeaway</h3>
      <ul>
        <li><strong>Role</strong> = siapa AI.</li>
        <li><strong>Task</strong> = ngapain.</li>
        <li><strong>Context</strong> = buat siapa & kenapa.</li>
        <li><strong>Format</strong> = hasilnya kayak apa.</li>
      </ul>
    `
  },

  {
    id: "l1-m3",
    level: 1,
    levelName: "Fondasi",
    title: "Prinsip Kejelasan & Spesifisitas",
    tag: "Dasar",
    duration: "±7 menit",
    summary: "Cara ganti kata ambigu jadi spesifik. Prinsip 'be specific, not verbose'.",
    content: `
      <p>Ini prinsip paling penting di seluruh kursus: <strong>spesifik > panjang</strong>. Prompt 100 kata yang spesifik jauh lebih bagus dari prompt 300 kata yang muter-muter.</p>

      <h3>Kata Ambigu vs Spesifik</h3>
      <p>Ada kata-kata yang sering dipakai tapi sebenernya nggak ngasih informasi apapun ke AI:</p>
      <ul>
        <li><strong>"bagus"</strong> → bagus menurut siapa? kriteria apa?</li>
        <li><strong>"menarik"</strong> → menarik buat siapa?</li>
        <li><strong>"profesional"</strong> → formal? teknis? corporate?</li>
        <li><strong>"singkat"</strong> → 10 kata? 50 kata? 1 paragraf?</li>
        <li><strong>"mudah dipahami"</strong> → level pemula? anak SD? orang awam?</li>
      </ul>
      <p>Ganti dengan angka, contoh, atau kriteria konkret.</p>

      <h3>Sebelum vs Sesudah</h3>

      <p><strong>Contoh 1:</strong></p>
      <pre>❌ "Bikin ringkasan yang bagus."
✅ "Ringkas jadi 5 bullet points, tiap poin max 15 kata."</pre>

      <p><strong>Contoh 2:</strong></p>
      <pre>❌ "Tulis dengan gaya profesional."
✅ "Tulis dengan gaya formal, hindari slang, gunakan kalimat pasif
   minimal 30%, tone netral tanpa emosi."</pre>

      <p><strong>Contoh 3:</strong></p>
      <pre>❌ "Jelasin AI ke pemula."
✅ "Jelasin AI ke seseorang yang belum pernah dengar istilah
   'machine learning' atau 'neural network'. Pakai analogi dari
   kehidupan sehari-hari. Max 200 kata."</pre>

      <h3>3 Pertanyaan Ajaib</h3>
      <p>Sebelum kirim prompt, tanya diri sendiri:</p>
      <ol>
        <li><strong>"Kalau gua kasih prompt ini ke 10 orang, apakah mereka semua bakal ngerti maksud gua dengan cara yang sama?"</strong></li>
        <li><strong>"Apakah ada kata yang bisa ditafsirkan beda?"</strong></li>
        <li><strong>"Kalau gua jadi AI, informasi apa yang masih gua butuhin?"</strong></li>
      </ol>

      <div class="callout callout-warn">
        <strong>Hati-hati:</strong> Jangan ketuker antara <em>spesifik</em> dan <em>kaku</em>. Spesifik itu ngasih arah; kaku itu ngunci semua detail sehingga AI nggak bisa improvisasi. Kadang lu cuma perlu kasih 1-2 constraint penting, sisanya biarin AI.
      </div>

      <h3>Takeaway</h3>
      <ul>
        <li>Spesifik > panjang.</li>
        <li>Ganti kata ambigu dengan angka / contoh / kriteria.</li>
        <li>Test: apakah prompt lu bisa ditafsirkan beda oleh orang lain?</li>
      </ul>
    `
  },

  {
    id: "l1-m4",
    level: 1,
    levelName: "Fondasi",
    title: "Kesalahan Umum Pemula",
    tag: "Dasar",
    duration: "±6 menit",
    summary: "7 kesalahan yang paling sering dilakuin & cara fix-nya.",
    content: `
      <p>Ini daftar kesalahan yang paling sering gua lihat. Cek satu-satu, kalau lu ngelakuin salah satunya, fix-nya ada di bawah.</p>

      <h3>1. Prompt Terlalu Pendek</h3>
      <pre>❌ "Bikin artikel."
✅ "Bikin artikel 500 kata tentang X untuk audiens Y dengan format Z."</pre>

      <h3>2. Nggak Kasih Konteks</h3>
      <p>AI nggak tahu lu siapa, buat siapa, dan kenapa. Kasih konteks minimal.</p>
      <pre>❌ "Sarankan buku."
✅ "Sarankan 5 buku non-fiksi buat pemula yang baru mulai belajar
   investasi, bahasa Indonesia, max 300 halaman."</pre>

      <h3>3. Ngasih Banyak Task Sekaligus</h3>
      <pre>❌ "Bikin ringkasan, terus terjemahkan ke Inggris, terus bikin
   versi twitter, terus kasih hashtag."
✅ Pecah jadi 4 prompt terpisah. Atau pakai prompt chaining (Level 3).</pre>

      <h3>4. Nggak Sebutin Format</h3>
      <p>Kalau lu nggak bilang, AI bakal pilih format default-nya — biasanya paragraf panjang yang males dibaca.</p>
      <pre>❌ "Kasih saran bisnis."
✅ "Kasih 5 saran bisnis dalam bentuk tabel:
   | Ide | Modal | Waktu Mulai | Potensi Profit |"</pre>

      <h3>5. Ngarep AI Baca Pikiran</h3>
      <p>AI nggak tahu lu pengen hasilnya formal atau santai, panjang atau pendek, sampai lu bilang.</p>

      <h3>6. Nggak Iterasi</h3>
      <p>Prompt sekali jadi itu mitos. Kalau hasil pertama kurang, jangan langsung nyerah. Tambahin constraint, kasih contoh, atau perjelas.</p>

      <h3>7. Salin Prompt Orang Tanpa Modifikasi</h3>
      <p>Prompt yang works buat orang lain belum tentu works buat lu. Konteksnya beda. Selalu adaptasi.</p>

      <div class="callout callout-info">
        <strong>Pola umum:</strong> Semua kesalahan di atas punya akar yang sama — <em>AI nggak punya konteks yang cukup</em>. Tugas lu sebagai prompt writer adalah ngasih konteks itu.
      </div>

      <h3>Takeaway</h3>
      <ul>
        <li>Cek 7 kesalahan ini tiap kali prompt lu hasilnya jelek.</li>
        <li>Kalau hasil AI generik → hampir pasti konteksnya kurang.</li>
        <li>Iterasi itu normal, bukan tanda gagal.</li>
      </ul>
    `
  },

  {
    id: "l1-m5",
    level: 1,
    levelName: "Fondasi",
    title: "Latihan: Rewrite Prompt Jelek",
    tag: "Dasar",
    duration: "±10 menit",
    summary: "5 latihan praktis nulis ulang prompt jelek jadi bagus. Plus jawaban pembahasan.",
    content: `
      <p>Teori doang nggak cukup. Coba rewrite 5 prompt di bawah ini dulu sebelum lihat jawabannya.</p>

      <div class="latihan">
        <p><strong>Latihan 1:</strong></p>
        <pre>Bikin puisi.</pre>
        <details>
          <summary>Lihat jawaban</summary>
          <pre>Bikin puisi 4 bait (tiap bait 4 baris) tentang rindu
seseorang yang jauh. Gaya bebas, rima ABAB, tone melankolis
tapi nggak lebay. Hindari kata "cinta" dan "hati".</pre>
          <p><strong>Yang diperbaiki:</strong> panjang, tema, gaya, rima, tone, plus constraint negatif biar nggak klise.</p>
        </details>
      </div>

      <div class="latihan">
        <p><strong>Latihan 2:</strong></p>
        <pre>Jelasin blockchain.</pre>
        <details>
          <summary>Lihat jawaban</summary>
          <pre>Jelasin blockchain ke seseorang yang background-nya
desain grafis, belum pernah dengar istilah "crypto",
"distributed ledger", atau "hash". Pakai analogi dari
dunia desain. Max 250 kata. Akhiri dengan 1 kalimat
kesimpulan yang bisa di-quote.</pre>
          <p><strong>Yang diperbaiki:</strong> audiens jelas, larangan jargon, analogi relevan, panjang, format output.</p>
        </details>
      </div>

      <div class="latihan">
        <p><strong>Latihan 3:</strong></p>
        <pre>Kasih ide konten.</pre>
        <details>
          <summary>Lihat jawaban</summary>
          <pre>Kasih 10 ide konten TikTok buat akun personal finance
target Gen Z Indonesia. Tiap ide max 1 baris, sertakan
hook 3 detik pertama. Format: tabel dengan kolom
| No | Ide | Hook |. Hindari topik yang terlalu teknis
kayak saham derivatif atau crypto trading.</pre>
          <p><strong>Yang diperbaiki:</strong> platform, niche, target, jumlah, format, constraint negatif.</p>
        </details>
      </div>

      <div class="latihan">
        <p><strong>Latihan 4:</strong></p>
        <pre>Tolong benerin CV gua.</pre>
        <details>
          <summary>Lihat jawaban</summary>
          <pre>Review CV saya untuk posisi Junior Product Manager di
startup fintech. Fokus ke 3 hal: (1) apakah achievement
sudah terukur dengan angka, (2) apakah bahasa terlalu
pasif, (3) apakah ada bagian yang nggak relevan dan
sebaiknya dihapus. Kasih feedback per bagian dalam
format tabel: Bagian | Masalah | Saran. Jangan rewrite
seluruh CV, cukup tunjuk apa yang perlu diubah.

[tempel CV]</pre>
          <p><strong>Yang diperbaiki:</strong> role target, 3 kriteria review spesifik, format output, batasan (jangan rewrite semua).</p>
        </details>
      </div>

      <div class="latihan">
        <p><strong>Latihan 5:</strong></p>
        <pre>Bikin rencana belajar bahasa Inggris.</pre>
        <details>
          <summary>Lihat jawaban</summary>
          <pre>Bikin rencana belajar bahasa Inggris 30 hari buat saya
yang level intermediate (bisa baca artikel, tapi lemah
speaking). Target: bisa ngobrol santai 10 menit tanpa
gugup. Waktu belajar: 45 menit/hari. Setiap hari ada:
(1) 1 aktivitas utama, (2) 1 aktivitas bonus kalau ada
waktu. Format: tabel dengan kolom | Hari | Fokus |
Aktivitas Utama | Bonus |. Sertakan cara tracking progress
di akhir.</pre>
          <p><strong>Yang diperbaiki:</strong> level awal, target konkret & terukur, waktu, struktur harian, format, tambahan tracking.</p>
        </details>
      </div>

      <div class="callout callout-tip">
        <strong>Cara pakai latihan ini:</strong> Tulis jawaban lu dulu di notes, baru buka jawaban. Bandingkan. Nggak harus sama persis — yang penting lu nangkep <em>pola-nya</em>.
      </div>

      <h3>Takeaway</h3>
      <ul>
        <li>Rewrite = skill. Makin sering latihan, makin cepet.</li>
        <li>Pola umum: tambahin role, task, context, format + 1-2 constraint.</li>
        <li>Kalau stuck, tanya: "AI masih butuh info apa lagi?"</li>
      </ul>
    `
  },

  /* ================= LEVEL 2 — TEKNIK DASAR ================= */

  {
    id: "l2-m1",
    level: 2,
    levelName: "Teknik Dasar",
    title: "Zero-Shot vs Few-Shot Prompting",
    tag: "Teknik",
    duration: "±8 menit",
    summary: "Kapan cukup kasih instruksi, kapan perlu kasih contoh.",
    content: `
      <p>Ini konsep paling fundamental di prompting setelah dasar-dasar.</p>

      <h3>Zero-Shot</h3>
      <p>Lu cuma kasih instruksi, tanpa contoh. AI harus "nebak" dari pemahaman umumnya.</p>
      <pre>Klasifikasikan review berikut sebagai positif, negatif, atau netral:
"Barangnya ok tapi pengiriman lama banget."</pre>
      <p><strong>Kapan pakai:</strong> task simpel, well-defined, dan AI udah paham konvensinya.</p>

      <h3>Few-Shot</h3>
      <p>Lu kasih 2-5 contoh dulu, baru minta AI ngerjain task baru dengan pola yang sama.</p>
      <pre>Klasifikasikan review berikut:

"Produk bagus, pengiriman cepat." → positif
"Barang rusak, saya kecewa." → negatif
"Biasa aja sih." → netral
"Barangnya ok tapi pengiriman lama banget." → ?</pre>
      <p><strong>Kapan pakai:</strong> task dengan format spesifik, klasifikasi custom, atau gaya bahasa tertentu yang susah dijelaskan dengan kata-kata.</p>

      <h3>Kenapa Few-Shot Works?</h3>
      <p>AI itu <em>pattern matcher</em> yang sangat bagus. Kasih pola, dia bakal ngikutin. Bahkan kalau pola-nya susah dijelaskan secara eksplisit.</p>
      <p>Contoh: misalnya lu mau AI nulis caption dengan gaya <em>brand lu</em> yang susah dijelasin. Daripada nulis 3 paragraf deskripsi, cukup kasih 5 contoh caption lama lu — AI bakal nangkep gaya-nya.</p>

      <h3>Berapa Banyak Contoh?</h3>
      <ul>
        <li><strong>2-3 contoh:</strong> cukup buat task simpel dengan pola konsisten.</li>
        <li><strong>4-6 contoh:</strong> buat task dengan variasi (misal beberapa tone berbeda).</li>
        <li><strong>7+ contoh:</strong> jarang perlu. Kalau butuh segini banyak, mungkin task-nya perlu dipecah atau pakai fine-tuning.</li>
      </ul>

      <h3>Contoh Kasus: Ekstraksi Data</h3>
      <p>Task: ekstrak info dari teks bebas jadi format terstruktur.</p>
      <pre>Ekstrak jadi JSON {nama, kota, pekerjaan}:

"Budi tinggal di Bandung, kerja sebagai designer." →
{"nama":"Budi","kota":"Bandung","pekerjaan":"designer"}

"Siti, guru SD dari Surabaya." →
{"nama":"Siti","kota":"Surabaya","pekerjaan":"guru SD"}

"Andi kerja remote dari Bali sebagai programmer." →
?</pre>
      <p>Zero-shot buat task ini sering gagal karena AI nebak-nebak format. Few-shot bikin hasilnya konsisten.</p>

      <div class="callout callout-tip">
        <strong>Tips:</strong> Kalau few-shot hasilnya masih inkonsisten, cek dulu contohnya. Pastikan semua contoh <em>benar</em> dan <em>konsisten</em>. Satu contoh jelek bisa ngerusak seluruh output.
      </div>

      <h3>Takeaway</h3>
      <ul>
        <li>Zero-shot: instruksi aja. Cukup buat task simpel.</li>
        <li>Few-shot: kasih 2-5 contoh. Buat task dengan format/gaya spesifik.</li>
        <li>Konsistensi contoh = konsistensi output.</li>
      </ul>
    `
  },

  {
    id: "l2-m2",
    level: 2,
    levelName: "Teknik Dasar",
    title: "Role Prompting yang Efektif",
    tag: "Teknik",
    duration: "±7 menit",
    summary: "Cara ngasih persona yang beneran ngubah output, bukan cuma bikin AI sok tau.",
    content: `
      <p>Role prompting itu ngasih tahu AI <em>siapa</em> dia. Tapi nggak semua role efektif — banyak yang cuma jadi dekorasi tanpa efek.</p>

      <h3>Role yang Efektif vs Nggak</h3>

      <p><strong>Role nggak efektif:</strong></p>
      <pre>Kamu adalah ahli marketing yang berpengalaman.</pre>
      <p>Masalah: "ahli marketing" itu terlalu luas. AI bakal jawab dengan gaya default-nya — kayak nggak ada role-nya.</p>

      <p><strong>Role efektif:</strong></p>
      <pre>Kamu adalah growth marketer yang 5 tahun terakhir fokus
di B2B SaaS, khususnya strategi outbound untuk startup
seed-stage di Asia Tenggara.</pre>
      <p>Lebih efektif karena: ada spesialisasi (B2B SaaS), ada konteks (startup seed-stage), ada geografi (Asia Tenggara).</p>

      <h3>3 Dimensi Role yang Kuat</h3>
      <ol>
        <li><strong>Spesialisasi:</strong> bukan "dokter", tapi "dokter anak spesialis tumbuh kembang".</li>
        <li><strong>Pengalaman:</strong> bukan "berpengalaman", tapi "10 tahun menangani kasus X".</li>
        <li><strong>Konteks:</strong> bukan "buat startup", tapi "buat startup fintech seri A di Indonesia".</li>
      </ol>

      <h3>Role + Audiens</h3>
      <p>Kombinasi paling powerful: role AI + siapa yang bakal baca output-nya.</p>
      <pre>Kamu adalah penulis sains populer yang biasa nulis untuk
majalah National Geographic versi Indonesia. Audiens lu:
orang dewasa non-ilmiah yang penasaran tapi gampang bosen.

Tulis penjelasan 400 kata tentang "kenapa langit berwarna biru".</pre>
      <p>Role ini ngasih AI: (1) gaya (sains populer), (2) tone (accessible tapi nggak childish), (3) benchmark kualitas (NatGeo).</p>

      <h3>Kapan Role Nggak Perlu</h3>
      <p>Buat task teknis simpel, role kadang malah ngganggu. Contoh:</p>
      <pre>❌ "Kamu adalah ahli linguistik. Terjemahkan 'good morning' ke Indonesia."
✅ "Terjemahkan 'good morning' ke Indonesia."</pre>
      <p>Task ini nggak butuh role karena ada jawaban tunggal yang bener.</p>
      <p>Role paling berguna kalau:</p>
      <ul>
        <li>Ada banyak cara ngejawab task-nya.</li>
        <li>Gaya / tone penting.</li>
        <li>Task butuh domain expertise spesifik.</li>
      </ul>

      <h3>Jebakan: Role yang Bikin AI Sok Tahu</h3>
      <p>Kalau role-nya terlalu "heroik", AI kadang jadi overclaim.</p>
      <pre>❌ "Kamu adalah ahli strategi bisnis terbaik di dunia."
→ hasil: saran generik tapi dikemas dengan percaya diri tinggi.

✅ "Kamu adalah konsultan bisnis yang biasa handle UMKM
   kuliner di Jabodetabek. Fokus ke saran praktis,
   hindari buzzword."
→ hasil: saran konkret dengan constraint jelas.</pre>

      <div class="callout callout-info">
        <strong>Insight:</strong> Role itu bukan buat "ngeshow" AI, tapi buat <em>mempersempit</em> ruang jawaban supaya lebih relevan.
      </div>

      <h3>Takeaway</h3>
      <ul>
        <li>Role efektif = spesifik + konteks + pengalaman jelas.</li>
        <li>Kombinasi role + audiens = powerful.</li>
        <li>Task simpel nggak butuh role.</li>
        <li>Hindari role bombastis yang bikin AI overclaim.</li>
      </ul>
    `
  },

  {
    id: "l2-m3",
    level: 2,
    levelName: "Teknik Dasar",
    title: "Constraint & Guardrail",
    tag: "Teknik",
    duration: "±7 menit",
    summary: "Cara ngunci output biar nggak melebar. Constraint positif vs negatif.",
    content: `
      <p>Constraint itu batasan. Guardrail itu pagar. Dua-duanya ngejaga output tetep di jalur yang lu mau.</p>

      <h3>Constraint Positif vs Negatif</h3>

      <p><strong>Constraint positif</strong> — apa yang HARUS ada:</p>
      <pre>Sertakan minimal 3 contoh nyata.
Pakai minimal 1 statistik dari sumber kredibel.
Akhiri dengan 1 pertanyaan reflektif.</pre>

      <p><strong>Constraint negatif</strong> — apa yang TIDAK BOLEH ada:</p>
      <pre>Jangan pakai jargon teknis.
Hindari kata "sangat" dan "sekali".
Jangan sebut merek kompetitor.</pre>

      <p>Kombinasi keduanya paling efektif.</p>

      <h3>Jenis-Jenis Constraint</h3>

      <p><strong>1. Panjang</strong></p>
      <pre>Max 300 kata.
Tiap paragraf max 4 kalimat.
Minimal 5 bullet points.</pre>

      <p><strong>2. Tone & Gaya</strong></p>
      <pre>Formal tapi nggak kaku.
Hindari emoji.
Gaya storytelling, bukan listicle.</pre>

      <p><strong>3. Struktur</strong></p>
      <pre>Wajib ada: pembuka, 3 poin utama, penutup.
Format JSON dengan key: title, body, tags.
Setiap poin harus diawali dengan verb.</pre>

      <p><strong>4. Konten</strong></p>
      <pre>Sertakan minimal 1 data/statistik.
Jangan sebut nama brand spesifik.
Fokus ke contoh dari Indonesia.</pre>

      <p><strong>5. Batasan Etis / Legal</strong></p>
      <pre>Jangan kasih saran medis spesifik.
Hindari klaim yang nggak bisa diverifikasi.
Kalau nggak yakin, bilang "perlu verifikasi lebih lanjut".</pre>

      <h3>Guardrail: Ngunci Perilaku AI</h3>
      <p>Guardrail itu constraint yang di-set buat seluruh sesi, biasanya ditaruh di awal atau akhir prompt.</p>
      <pre>Aturan main:
1. Kalau ada info yang lu nggak yakin, bilang "saya nggak yakin".
2. Jangan ngarang statistik atau sumber.
3. Kalau prompt saya ambigu, tanya balik dulu sebelum jawab.
4. Selalu sebutkan asumsi yang lu pakai.</pre>

      <h3>Contoh: Prompt dengan Constraint Lengkap</h3>
      <pre>Kamu adalah editor konten blog teknologi.

Task: Review draft artikel berikut dan kasih feedback.

Constraint positif:
- Feedback per paragraf
- Sertakan minimal 1 saran konkret per paragraf
- Sebutkan bagian yang sudah bagus

Constraint negatif:
- Jangan rewrite seluruh artikel
- Jangan komentar soal grammar kecuali fatal
- Hindari saran yang sifatnya preferensi pribadi

Format: tabel dengan kolom | Paragraf | Masalah | Saran |

[tempel draft]</pre>

      <div class="callout callout-warn">
        <strong>Hati-hati:</strong> Terlalu banyak constraint bisa bikin output kaku dan AI "keliatan berusaha". Kalau constraint lu lebih dari 7-8, mungkin task-nya perlu dipecah.
      </div>

      <h3>Takeaway</h3>
      <ul>
        <li>Constraint positif (harus ada) + negatif (jangan ada).</li>
        <li>5 jenis: panjang, tone, struktur, konten, etis.</li>
        <li>Guardrail = constraint global buat seluruh sesi.</li>
        <li>Jangan overload — max 7-8 constraint.</li>
      </ul>
    `
  },

  {
    id: "l2-m4",
    level: 2,
    levelName: "Teknik Dasar",
    title: "Format Output: JSON, Tabel, Markdown",
    tag: "Teknik",
    duration: "±8 menit",
    summary: "Kapan pakai format apa, plus trik biar output konsisten & machine-readable.",
    content: `
      <p>Format output itu senjata yang sering dilupakan. Padahal ini yang nentuin output lu bisa langsung dipakai atau perlu dirapihin dulu.</p>

      <h3>Kapan Pakai Apa</h3>

      <p><strong>Markdown</strong> — buat dokumen yang bakal dibaca manusia:</p>
      <pre>Format: markdown dengan heading level 2 untuk tiap section,
bullet points untuk list, blockquote untuk insight.</pre>
      <p>Cocok buat: artikel, dokumentasi, catatan.</p>

      <p><strong>Tabel</strong> — buat perbandingan atau data terstruktur:</p>
      <pre>Format: tabel dengan kolom | Opsi | Kelebihan | Kekurangan | Harga |</pre>
      <p>Cocok buat: perbandingan, ringkasan data, opsi.</p>

      <p><strong>JSON</strong> — buat data yang bakal diproses program:</p>
      <pre>Format: JSON valid dengan schema:
{
  "title": string,
  "summary": string,
  "tags": string[],
  "difficulty": "easy" | "medium" | "hard"
}</pre>
      <p>Cocok buat: integrasi ke app, API, automation.</p>

      <p><strong>Bullet Points</strong> — buat poin-poin cepet:</p>
      <pre>Format: 5 bullet points, tiap poin max 12 kata.</pre>
      <p>Cocok buat: summary, checklist, tips.</p>

      <p><strong>Numbered List</strong> — buat step-by-step:</p>
      <pre>Format: numbered list 1-10, tiap step max 2 kalimat.</pre>
      <p>Cocok buat: tutorial, resep, SOP.</p>

      <h3>Trik Biar Output Konsisten</h3>

      <p><strong>1. Kasih contoh output</strong></p>
      <pre>Format output harus persis seperti ini:

{
  "produk": "nama produk",
  "rating": 4.5,
  "alasan": "alasan singkat"
}</pre>

      <p><strong>2. Bilang "no markdown fence"</strong> kalau mau output JSON mentah:</p>
      <pre>Output HANYA JSON valid. Jangan pakai \`\`\`json atau teks lain di luar JSON.</pre>

      <p><strong>3. Kalau butuh JSON, pastikan field-nya jelas</strong></p>
      <pre>Schema:
- title: string, max 60 karakter
- tags: array of string, 3-5 item
- score: integer 1-10</pre>

      <p><strong>4. Buat output multi-bagian, pakai delimiter</strong></p>
      <pre>Format output:
--- JUDUL ---
(judul di sini)
--- RINGKASAN ---
(ringkasan di sini)
--- TAGS ---
(tags dipisah koma)</pre>
      <p>Delimiter ini gampang di-parse kalau lu mau automation.</p>

      <h3>Contoh: Dari Prompt ke Output</h3>
      <p><strong>Prompt:</strong></p>
      <pre>Analisis 3 startup fintech Indonesia: GoPay, OVO, Dana.

Output dalam JSON:
{
  "startups": [
    {
      "nama": string,
      "tahun_berdiri": number,
      "fokus_utama": string,
      "kelebihan": string[],
      "tantangan": string[]
    }
  ]
}

Jangan tambah field lain. Jangan tambah penjelasan di luar JSON.</pre>

      <p><strong>Output yang bakal lu dapat:</strong></p>
      <pre>{
  "startups": [
    {
      "nama": "GoPay",
      "tahun_berdiri": 2016,
      "fokus_utama": "dompet digital & payment gateway",
      "kelebihan": ["integrasi Gojek", "user base besar"],
      "tantangan": ["kompetisi ketat", "regulasi"]
    },
    ...
  ]
}</pre>

      <div class="callout callout-tip">
        <strong>Pro tip:</strong> Kalau lu bakal pakai output JSON di code, selalu validasi dengan <code>JSON.parse()</code> dan siapkan fallback. AI kadang nambahin komentar yang bikin JSON invalid.
      </div>

      <h3>Takeaway</h3>
      <ul>
        <li>Format = senjata utama biar output langsung pakai.</li>
        <li>JSON buat machine, tabel buat bandingin, markdown buat baca.</li>
        <li>Kasih schema / contoh output biar konsisten.</li>
        <li>Kalau output JSON, selalu validasi.</li>
      </ul>
    `
  },

  {
    id: "l2-m5",
    level: 2,
    levelName: "Teknik Dasar",
    title: "Iterasi & Refinement",
    tag: "Teknik",
    duration: "±6 menit",
    summary: "Framework 3 iterasi: dari output kasar → output production-ready.",
    content: `
      <p>Prompt sekali jadi itu mitos. Prompt bagus biasanya hasil 3-5 iterasi. Ini framework-nya.</p>

      <h3>Framework 3 Iterasi</h3>

      <p><strong>Iterasi 1 — Draft Cepat</strong></p>
      <p>Kirim prompt kasar. Lihat output. Fokus: apakah arahnya bener?</p>
      <pre>Task: Bikin caption Instagram buat produk skincare.</pre>
      <p>Yang lu cari di iterasi ini: apakah AI nangkep task-nya, atau melenceng total.</p>

      <p><strong>Iterasi 2 — Tambah Konteks</strong></p>
      <p>Berdasarkan output iterasi 1, tambahin konteks yang kurang.</p>
      <pre>Task: Bikin 3 caption Instagram buat produk skincare
lokal (brand "X") target perempuan 22-30 tahun,
kota besar. Tone: hangat, nggak lebay, sedikit humor.
Max 2 baris per caption.</pre>
      <p>Yang lu cari: apakah output lebih relevan dengan audiens?</p>

      <p><strong>Iterasi 3 — Refine Format & Detail</strong></p>
      <p>Final tuning: format, constraint spesifik, contoh.</p>
      <pre>Task: Bikin 3 caption Instagram buat brand skincare "X".

Konteks:
- Target: perempuan 22-30, kota besar, kelas menengah
- Produk: serum vitamin C, harga Rp120rb
- Tone: hangat, sedikit humor, hindari klise "glowing"

Format tiap caption:
- Hook (max 8 kata, harus bikin berhenti scroll)
- Body (max 2 baris, 1 manfaat konkret)
- CTA (soft, nggak jualan hard)
- 3 hashtag

Contoh yang gua suka:
"Kulit kusam bukan takdir. 14 hari, kita buktiin.
Yuk mulai rutin. #skincare #vitaminc #localbrand"</pre>

      <h3>Teknik Refinement Spesifik</h3>

      <p><strong>1. "Regenerate dengan X"</strong></p>
      <pre>Versi sebelumnya terlalu formal. Coba ulang dengan tone
lebih santai, tapi tetap profesional.</pre>

      <p><strong>2. "Bandingkan dengan Y"</strong></p>
      <pre>Versi ini ok, tapi coba bikin versi alternatif yang
lebih pendek 50%.</pre>

      <p><strong>3. "Fokus ke bagian Z"</strong></p>
      <pre>Bagian pembuka udah bagus. Fokus ulang di bagian
penutup — kurang kuat.</pre>

      <p><strong>4. "Kritik output lu sendiri"</strong></p>
      <pre>Lihat output di atas. Kasih 3 kritik jujur tentang
kelemahannya, lalu bikin versi revisi.</pre>
      <p>Teknik ini powerful karena AI jadi <em>self-critical</em>.</p>

      <h3>Kapan Berhenti Iterasi?</h3>
      <p>Kalau:</p>
      <ul>
        <li>Output udah cukup buat dipakai (nggak harus perfect).</li>
        <li>Perubahan antar iterasi udah marginal (nggak signifikan).</li>
        <li>Lu udah iterasi 5+ kali tapi masih jauh — mungkin task-nya perlu dipecah atau ganti pendekatan.</li>
      </ul>

      <div class="callout callout-info">
        <strong>Mindset:</strong> Iterasi bukan tanda lu gagal. Iterasi itu bagian normal dari proses. Bahkan prompt engineer profesional ngiterasi 3-5 kali buat task kompleks.
      </div>

      <h3>Takeaway</h3>
      <ul>
        <li>3 iterasi: draft → konteks → refine.</li>
        <li>Teknik: regenerate, bandingkan, fokus, self-critique.</li>
        <li>Berhenti kalau udah cukup, bukan kalau udah perfect.</li>
      </ul>
    `
  },

     /* ================= LEVEL 3 — LANJUTAN ================= */

  {
    id: "l3-m1",
    level: 3,
    levelName: "Lanjutan",
    title: "Chain of Thought (CoT)",
    tag: "Lanjutan",
    duration: "±9 menit",
    summary: "Bikin AI mikir step by step. Naikin akurasi reasoning drastis.",
    content: `
      <p>Chain of Thought (CoT) itu teknik minta AI <em>nunjukin langkah berpikirnya</em> sebelum kasih jawaban akhir. Simpel, tapi efeknya besar banget buat task yang butuh reasoning.</p>

      <h3>Kenapa CoT Works?</h3>
      <p>AI generatif itu pada dasarnya <em>prediktor kata berikutnya</em>. Kalau lu langsung minta jawaban akhir, dia "lompat" ke kesimpulan — sering kali salah. Kalau lu kasih ruang buat "mikir", dia ngumpulin konteks internal dulu, baru simpulin. Kayak manusia ngerjain soal matematika: nulis di kertas dulu, bukan langsung jawab.</p>

      <h3>Cara Pakai</h3>
      <p>Tambahkan frasa sakti ini ke prompt lu:</p>
      <pre>Pikirkan langkah demi langkah sebelum kasih jawaban akhir.</pre>
      <p>Atau variasi:</p>
      <ul>
        <li>"Tunjukkan proses berpikirmu."</li>
        <li>"Jelaskan reasoning di balik tiap langkah."</li>
        <li>"Kerjakan dulu di dalam kepala, baru simpulkan."</li>
        <li>"Uraikan: (1) apa yang diketahui, (2) apa yang dicari, (3) langkah penyelesaian."</li>
      </ul>

      <h3>Contoh: Tanpa vs Dengan CoT</h3>

      <p><strong>Tanpa CoT:</strong></p>
      <pre>Q: Toko A jual buku Rp45rb dengan diskon 20%,
   lalu kena pajak 10%. Berapa harga akhirnya?

A: Rp39.600</pre>
      <p>(Jawaban bener bisa jadi, tapi AI "nebak".)</p>

      <p><strong>Dengan CoT:</strong></p>
      <pre>Q: Toko A jual buku Rp45rb dengan diskon 20%,
   lalu kena pajak 10%. Berapa harga akhirnya?
   Pikirkan langkah demi langkah.

A: Langkah-langkah:
   1. Harga awal: Rp45.000
   2. Diskon 20%: Rp45.000 × 0.20 = Rp9.000
   3. Harga setelah diskon: Rp45.000 − Rp9.000 = Rp36.000
   4. Pajak 10%: Rp36.000 × 0.10 = Rp3.600
   5. Harga akhir: Rp36.000 + Rp3.600 = Rp39.600

   Jawaban akhir: Rp39.600</pre>
      <p>Lebih lambat, tapi jauh lebih reliable. Dan kalau ada error, lu bisa spot di langkah mana.</p>

      <h3>Kapan CoT Paling Berguna</h3>
      <ul>
        <li><strong>Matematika & logika</strong> — soal cerita, aljabar, statistika.</li>
        <li><strong>Analisis multi-faktor</strong> — "bandingkan 3 opsi ini dari 5 sudut pandang".</li>
        <li><strong>Debugging</strong> — "kenapa code ini error? telusuri step by step."</li>
        <li><strong>Perencanaan</strong> — "bikin rencana X, jelaskan kenapa tiap langkah penting."</li>
        <li><strong>Keputusan kompleks</strong> — "haruskah gua pilih A atau B? pertimbangkan pro-kontra."</li>
      </ul>

      <h3>Kapan CoT Nggak Perlu</h3>
      <p>Buat task simpel & faktual, CoT cuma bikin output panjang tanpa nambah akurasi.</p>
      <pre>❌ "Terjemahkan 'hello' ke Indonesia. Pikirkan step by step."
✅ "Terjemahkan 'hello' ke Indonesia."</pre>

      <h3>Varian: Zero-Shot CoT</h3>
      <p>Nggak perlu kasih contoh CoT dulu. Cukup tempel frasa "let's think step by step" (atau versi Indonesianya). Ini yang bikin teknik ini terkenal — simple banget.</p>

      <div class="callout callout-tip">
        <strong>Pro tip:</strong> Buat task reasoning kompleks, gabungin CoT + few-shot. Kasih 1-2 contoh yang udah ada langkah-langkahnya, terus minta AI ngikutin pola.
      </div>

      <h3>Takeaway</h3>
      <ul>
        <li>CoT = minta AI nunjukin langkah berpikir.</li>
        <li>Frasa sakti: "pikirkan langkah demi langkah".</li>
        <li>Berguna buat reasoning, matematika, analisis, planning.</li>
        <li>Nggak berguna buat task simpel / faktual.</li>
      </ul>
    `
  },

  {
    id: "l3-m2",
    level: 3,
    levelName: "Lanjutan",
    title: "Tree of Thoughts (ToT)",
    tag: "Lanjutan",
    duration: "±10 menit",
    summary: "Eksplorasi beberapa jalur solusi sekaligus, bandingkan, pilih yang terbaik.",
    content: `
      <p>Kalau CoT itu satu jalur berpikir, Tree of Thoughts (ToT) itu <em>beberapa jalur sekaligus</em> — lalu lu bandingin dan pilih yang terbaik.</p>

      <h3>Analogi</h3>
      <p>CoT = jalan tol lurus. ToT = peta dengan banyak cabang, lu telusuri beberapa, baru pilih rute terbaik.</p>

      <h3>Struktur ToT</h3>
      <ol>
        <li><strong>Branch (cabang):</strong> minta AI eksplor beberapa pendekatan berbeda.</li>
        <li><strong>Evaluate (evaluasi):</strong> minta AI nilai tiap pendekatan.</li>
        <li><strong>Select (pilih):</strong> minta AI pilih yang terbaik + alasannya.</li>
        <li><strong>Expand (perdalam):</strong> kembangin pilihan terbaik.</li>
      </ol>

      <h3>Contoh Prompt ToT</h3>
      <pre>Task: Kita mau ningkatin engagement Instagram akun
skincare lokal. Engagement turun 30% dalam 3 bulan terakhir.

Langkah 1: Kasih 3 pendekatan berbeda buat atasi masalah ini.
Pendekatan-pendekatan itu harus fundamentally berbeda satu
sama lain, bukan variasi kecil.

Langkah 2: Buat tiap pendekatan, kasih:
- Kelebihan utama
- Risiko / kelemahan
- Estimasi effort (low / medium / high)
- Estimasi dampak (low / medium / high)

Langkah 3: Pilih 1 pendekatan yang paling worth it.
Jelaskan kenapa lu milih itu, dan kenapa 2 lainnya kalah.

Langkah 4: Buat pendekatan terpilih, breakdown jadi 5 aksi
konkret yang bisa dikerjain dalam 30 hari pertama.</pre>

      <h3>Kenapa ToT Kuat</h3>
      <p>AI punya <em>bias</em> ke jawaban pertama yang kepikiran. Kalau lu cuma minta "1 solusi", dia bakal kasih yang paling obvious — belum tentu paling optimal. ToT maksa dia eksplor ruang solusi lebih luas.</p>

      <h3>ToT vs CoT vs Few-Shot</h3>
      <table>
        <thead>
          <tr><th>Teknik</th><th>Fokus</th><th>Kapan Pakai</th></tr>
        </thead>
        <tbody>
          <tr><td>Few-shot</td><td>Ngikutin pola</td><td>Format / gaya spesifik</td></tr>
          <tr><td>CoT</td><td>1 jalur berpikir</td><td>Reasoning linear</td></tr>
          <tr><td>ToT</td><td>Banyak jalur + evaluasi</td><td>Keputusan kompleks, kreativitas</td></tr>
        </tbody>
      </table>

      <h3>Kapan Pakai ToT</h3>
      <ul>
        <li><strong>Keputusan strategis</strong> — "pilih tech stack buat project X".</li>
        <li><strong>Brainstorming</strong> — "kasih 5 angle konten yang beda total".</li>
        <li><strong>Problem solving</strong> — "cari akar masalah X dengan beberapa hipotesis".</li>
        <li><strong>Kreativitas</strong> — "eksplor 3 gaya visual yang fundamentally beda".</li>
      </ul>

      <h3>Varian Lanjutan: Beam Search</h3>
      <p>Kalau lu mau lebih dalam, lu bisa iterasi ToT 2-3 level:</p>
      <pre>Level 1: 3 pendekatan besar
Level 2: Buat tiap pendekatan, pecah jadi 2 sub-approach
Level 3: Evaluasi 6 sub-approach, pilih top 2
Level 4: Gabungin 2 terbaik jadi 1 hybrid solution</pre>
      <p>Ini powerful, tapi boros token. Pakai buat keputusan yang worth it.</p>

      <div class="callout callout-warn">
        <strong>Hati-hati:</strong> ToT nggak selalu lebih bagus dari CoT. Buat task simpel, ToT cuma bikin output panjang dan bertele-tele. Pakai sesuai kebutuhan.
      </div>

      <h3>Takeaway</h3>
      <ul>
        <li>ToT = eksplor banyak jalur, bandingin, pilih terbaik.</li>
        <li>4 tahap: Branch → Evaluate → Select → Expand.</li>
        <li>Kuat buat keputusan kompleks & brainstorming.</li>
        <li>Boros token, jangan pakai buat task simpel.</li>
      </ul>
    `
  },

  {
    id: "l3-m3",
    level: 3,
    levelName: "Lanjutan",
    title: "Self-Consistency & Verifikasi",
    tag: "Lanjutan",
    duration: "±8 menit",
    summary: "Cross-check output AI dengan dirinya sendiri buat ngurangin halusinasi.",
    content: `
      <p>Self-consistency itu teknik ngejalanin task <em>beberapa kali</em> dengan pendekatan berbeda, terus lihat apakah jawabannya konsisten. Kalau konsisten → kemungkinan besar bener. Kalau beda-beda → ada yang salah.</p>

      <h3>Kenapa Perlu?</h3>
      <p>AI bisa halusinasi dengan sangat percaya diri. Dia nggak "tahu" kalau dia salah. Self-consistency adalah cara lu deteksi ketidakkonsistenan <em>tanpa harus tahu jawaban benernya</em>.</p>

      <h3>Metode 1: Multi-Run Consistency</h3>
      <p>Jalanin prompt yang sama 3-5 kali. Bandingin outputnya.</p>
      <pre>Prompt 1: [task] → jawaban A
Prompt 2: [task] → jawaban A (variasi kecil)
Prompt 3: [task] → jawaban B (beda fundamental!)</pre>
      <p>Kalau ada jawaban B yang beda jauh → curiga. Bisa jadi task-nya ambigu, atau AI-nya nggak yakin.</p>

      <h3>Metode 2: Multi-Perspective Consistency</h3>
      <p>Minta AI jawab dari sudut pandang berbeda.</p>
      <pre>Jawab pertanyaan ini dari 3 sudut pandang:
1. Sebagai optimist
2. Sebagai skeptis
3. Sebagai netral

Pertanyaan: Apakah startup X bakal sukses dalam 5 tahun?</pre>
      <p>Kalau jawaban optimist & netral hampir sama tapi skeptis radikal beda → lu dapat insight dari 3 arah sekaligus.</p>

      <h3>Metode 3: Verification Loop</h3>
      <p>Setelah AI kasih jawaban, minta dia <em>verifikasi dirinya sendiri</em>.</p>
      <pre>Step 1: [minta AI jawab pertanyaan X]

Step 2: Sekarang periksa jawaban lu di atas.
Cek:
- Apakah ada klaim yang lu nggak yakin?
- Apakah ada asumsi tersembunyi?
- Apakah ada info yang lu "karang" karena nggak tahu?
- Kalau lu harus kasih confidence score 1-10, berapa?

Step 3: Revisi jawaban kalau perlu.</pre>

      <h3>Metode 4: Chain Verification</h3>
      <p>Buat task faktual, minta AI kasih sumber di setiap klaim.</p>
      <pre>Jawab pertanyaan ini. Buat setiap klaim faktual,
sebutkan:
- Tingkat keyakinan (tinggi / sedang / rendah)
- Kalau rendah, bilang "perlu verifikasi"

Jangan pernah ngarang sumber. Kalau nggak tahu, bilang nggak tahu.</pre>

      <h3>Teknik "Devil's Advocate"</h3>
      <p>Setelah AI kasih jawaban, minta dia <em>nyerang</em> jawabannya sendiri.</p>
      <pre>Jawaban lu di atas. Sekarang jadi devil's advocate:
kasih 3 argumen kuat kenapa jawaban lu mungkin salah.
Lalu, kasih verdict: apakah jawaban awal tetap valid,
atau perlu direvisi?</pre>
      <p>Ini salah satu teknik paling powerful buat ngurangin bias optimisme AI.</p>

      <div class="callout callout-tip">
        <strong>Pro tip:</strong> Buat keputusan penting, jalanin minimal 2 metode di atas. Contoh: multi-run consistency + verification loop. Hasilnya jauh lebih bisa dipercaya.
      </div>

      <h3>Kapan Perlu Verifikasi</h3>
      <ul>
        <li><strong>Fakta & angka</strong> — statistik, tanggal, nama orang.</li>
        <li><strong>Keputusan penting</strong> — bisnis, karir, kesehatan.</li>
        <li><strong>Task dengan 1 jawaban bener</strong> — matematika, logika.</li>
        <li><strong>Domain yang AI lemah</strong> — peristiwa terbaru, topik niche.</li>
      </ul>

      <h3>Kapan Nggak Perlu</h3>
      <ul>
        <li>Brainstorming ide (nggak ada yang salah / bener).</li>
        <li>Task kreatif (puisi, cerita).</li>
        <li>Task internal yang low-stakes.</li>
      </ul>

      <h3>Takeaway</h3>
      <ul>
        <li>Self-consistency = cross-check jawaban AI dengan AI sendiri.</li>
        <li>4 metode: multi-run, multi-perspective, verification loop, chain verification.</li>
        <li>Devil's advocate paling powerful buat ngelawan bias.</li>
        <li>Pakai buat keputusan penting, skip buat task kreatif.</li>
      </ul>
    `
  },

  {
    id: "l3-m4",
    level: 3,
    levelName: "Lanjutan",
    title: "Prompt Chaining (Multi-Step)",
    tag: "Lanjutan",
    duration: "±9 menit",
    summary: "Pecah task besar jadi rantai prompt kecil. Output prompt N jadi input prompt N+1.",
    content: `
      <p>Prompt chaining itu teknik mecah task kompleks jadi beberapa prompt berurutan, di mana output prompt sebelumnya jadi input prompt berikutnya.</p>

      <h3>Analogi</h3>
      <p>Kayak pabrik perakitan: stasiun 1 bikin komponen, stasiun 2 rakit, stasiun 3 finishing. Tiap stasiun fokus ke satu hal.</p>

      <h3>Kenapa Chaining Works</h3>
      <p>AI punya <em>attention budget</em>. Kalau lu kasih 5 task sekaligus, dia bakal "bocor" — beberapa task dikejain asal-asalan. Kalau dipecah, tiap task dapet fokus penuh.</p>

      <h3>Contoh: Bikin Artikel Blog</h3>

      <p><strong>❌ Cara salah (1 prompt):</strong></p>
      <pre>Riset topik X, bikin outline, tulis artikel 800 kata,
edit, tambahin meta description, kasih hashtag.</pre>
      <p>Hasil: 800 kata asal-asalan, outline tipis, hashtag generic.</p>

      <p><strong>✅ Cara chaining (5 prompt):</strong></p>
      <pre>Prompt 1 — Riset:
Riset topik "AI untuk UMKM" buat artikel blog.
Kasih 5 angle menarik, tiap angle 1 kalimat.

[Output 1: 5 angle]

Prompt 2 — Pilih & outline:
Dari 5 angle di atas, pilih 1 yang paling relevan
buat pembaca pemilik UMKM. Buat outline:
- Judul (3 opsi)
- 4 subjudul
- Poin utama tiap subjudul

[Output 2: outline]

Prompt 3 — Tulis:
Ambil outline di atas. Tulis artikel 800 kata.
Gaya: santai profesional. Target: pemilik UMKM non-teknis.

[Output 3: draft artikel]

Prompt 4 — Edit:
Review draft di atas. Cek:
- Apakah ada jargon teknis yang perlu dijelaskan?
- Apakah paragraf pembuka kuat?
- Apakah ada bagian yang bertele-tele?
Kasih revisi per bagian.

[Output 4: revisi]

Prompt 5 — Metadata:
Dari artikel final, generate:
- Meta description (max 155 karakter)
- 5 hashtag
- 3 alternatif judul A/B testing

[Output 5: metadata]</pre>

      <h3>Pola Chaining Umum</h3>

      <p><strong>1. Research → Draft → Refine</strong></p>
      <p>Buat task yang butuh riset dulu sebelum nulis.</p>

      <p><strong>2. Generate → Evaluate → Improve</strong></p>
      <p>Buat task yang butuh QA. Contoh: generate 3 versi, pilih terbaik, perkecil.</p>

      <p><strong>3. Decompose → Solve → Assemble</strong></p>
      <p>Buat task besar yang bisa dipecah. Contoh: bikin laporan dari 5 section terpisah.</p>

      <p><strong>4. Understand → Translate → Adapt</strong></p>
      <p>Buat task transformasi. Contoh: terjemahin + lokalisasi budaya.</p>

      <h3>Cara Implementasi Tanpa Tools</h3>
      <p>Lu bisa lakuin chaining manual — copy output prompt N ke prompt N+1. Ini paling gampang.</p>
      <p>Atau, kalau lu punya akses API / script, lu bisa automate dengan Python:</p>
      <pre>output1 = call_ai(prompt1)
output2 = call_ai(prompt2 + output1)
output3 = call_ai(prompt3 + output2)
# dst.</pre>

      <h3>Kapan Pakai Chaining</h3>
      <ul>
        <li>Task yang punya <strong>tahap jelas</strong> (riset → tulis → edit).</li>
        <li>Task yang <strong>butuh keputusan di tengah</strong> (pilih angle dulu, baru nulis).</li>
        <li>Task yang <strong>outputnya panjang</strong> (buku, laporan, codebase).</li>
        <li>Task yang <strong>kualitasnya kritis</strong> (production content).</li>
      </ul>

      <h3>Kapan Nggak Perlu</h3>
      <ul>
        <li>Task simpel 1 langkah.</li>
        <li>Task kreatif yang butuh "feel" utuh (puisi pendek).</li>
        <li>Kalau waktu lu mepet & hasil "cukup bagus" udah ok.</li>
      </ul>

      <div class="callout callout-info">
        <strong>Insight:</strong> Chaining itu bukan cuma teknik prompting — ini <em>cara berpikir</em>. Setiap task kompleks, tanya: "bisa dipecah jadi berapa tahap?"
      </div>

      <h3>Takeaway</h3>
      <ul>
        <li>Chaining = pecah task besar jadi rantai prompt kecil.</li>
        <li>Output prompt N = input prompt N+1.</li>
        <li>4 pola: Research→Draft→Refine, Generate→Evaluate→Improve, dll.</li>
        <li>Boros waktu, tapi kualitas jauh lebih tinggi.</li>
      </ul>
    `
  },

  {
    id: "l3-m5",
    level: 3,
    levelName: "Lanjutan",
    title: "Meta-Prompting",
    tag: "Lanjutan",
    duration: "±8 menit",
    summary: "Minta AI nulis prompt buat AI. Recursive prompting yang powerful.",
    content: `
      <p>Meta-prompting itu teknik di mana lu <em>minta AI nulis prompt</em> buat task tertentu, bukan langsung ngerjain task-nya.</p>

      <h3>Kenapa Ini Powerful</h3>
      <p>AI "tahu" pola prompt yang efektif — dia dilatih dari miliaran contoh. Kalau lu minta dia nulis prompt, dia bisa ngehasilin struktur yang lu mungkin nggak kepikiran.</p>
      <p>Bonus: lu belajar dari output-nya. Setelah beberapa kali, lu bakal nangkep pola sendiri.</p>

      <h3>Template Meta-Prompt Dasar</h3>
      <pre>Saya mau [tujuan].

Tolong tulis prompt yang efektif buat task ini.
Prompt harus:
- Punya role, task, context, format yang jelas
- Ada 1-2 constraint penting
- Bisa langsung dipakai

Setelah nulis prompt, jelaskan kenapa lu pilih struktur itu.</pre>

      <h3>Contoh Kasus: Bikin Prompt Buat Sales Email</h3>

      <p><strong>Prompt lu:</strong></p>
      <pre>Saya mau bikin sales email ke CTO startup fintech
di Indonesia, nawarin jasa security audit.

Tolong tulis prompt yang efektif buat task ini.
Prompt harus bisa dipakai buat generate 5 variasi email
dalam sekali jalan. Sertakan constraint tone & panjang.</pre>

      <p><strong>Output AI (yang jadi prompt baru):</strong></p>
      <pre>Kamu adalah sales copywriter B2B dengan pengalaman
di industri cybersecurity.

Task: Tulis 5 variasi cold email ke CTO startup
fintech di Indonesia. Tujuan: nawarin jasa security audit.

Konteks:
- Target: CTO, 30-45 tahun, teknis, sibuk
- Pain point: compliance OJK, risiko data breach
- Produk: security audit, harga 50-150 juta

Constraint tiap email:
- Max 120 kata
- Subject line max 8 kata
- Tone: profesional tapi nggak kaku, no buzzword
- 1 CTA jelas (soft, bukan "beli sekarang")
- Hindari kata: "solusi", "sinergi", "cutting-edge"

Format output: 5 email, tiap email ada
| Subject | Body | CTA |</pre>

      <p>Perhatiin: output ini <em>jauh lebih kaya</em> daripada kalau lu langsung minta "bikin 5 email sales". AI "tahu" elemen apa yang bikin prompt efektif.</p>

      <h3>Varian Lanjutan: Recursive Meta-Prompting</h3>
      <p>Lu bisa minta AI nulis prompt, terus minta AI lain (atau dia sendiri) <em>kritik</em> prompt itu, terus revisi. Loop sampai optimal.</p>
      <pre>Step 1: Tulis prompt buat task X.
Step 2: Kritik prompt itu. Apa yang bisa diperbaiki?
Step 3: Revisi prompt berdasarkan kritik.
Step 4: Ulangi step 2-3 sampai puas.</pre>

      <h3>Meta-Prompt Buat Rewrite Prompt Lu</h3>
      <p>Kalau lu udah punya prompt yang "hampir bener", minta AI upgrade:</p>
      <pre>Ini prompt saya:

[paste prompt lu]

Task: Rewrite prompt ini biar lebih efektif.
- Tambahin role kalau belum ada
- Perjelas context & format
- Tambahin 1-2 constraint penting
- Jangan ubah tujuan utama

Setelah rewrite, jelaskan 3 hal utama yang lu ubah & kenapa.</pre>
      <p>Ini cara belajar paling cepet. Lu liat sendiri apa yang AI "tambahin" ke prompt lu.</p>

      <h3>Meta-Prompt Buat Bikin Framework</h3>
      <pre>Saya sering bikin prompt buat [kategori task, misal:
"nulis caption sosmed"].

Tolong bikin framework prompt reusable yang bisa
saya pakai buat task apapun di kategori ini.

Framework harus punya:
- Slot yang bisa diisi (role, audiens, tone, format)
- Default constraint yang masuk akal
- Contoh pengisian 1x

Format: template dengan placeholder [seperti ini].</pre>

      <h3>Kapan Meta-Prompting Berguna</h3>
      <ul>
        <li><strong>Lu stuck</strong> — nggak tau gimana nulis prompt yang bagus buat task tertentu.</li>
        <li><strong>Lu mau belajar</strong> — pengen liat "cara pikir" prompt engineer.</li>
        <li><strong>Lu mau scale</strong> — bikin template reusable buat tim.</li>
        <li><strong>Task kompleks</strong> — butuh struktur yang lu mungkin kelewat.</li>
      </ul>

      <div class="callout callout-tip">
        <strong>Pro tip:</strong> Simpen meta-prompt favorit lu di notes. Setiap kali ketemu task baru, tinggal tempel + ganti bagian "[tujuan]". Ini jadi "prompt generator" pribadi lu.
      </div>

      <h3>Takeaway</h3>
      <ul>
        <li>Meta-prompting = minta AI nulis prompt.</li>
        <li>Berguna buat belajar & task kompleks.</li>
        <li>Varian: recursive, rewrite, framework builder.</li>
        <li>Simpen meta-prompt favorit buat reuse.</li>
      </ul>
    `
  },

  /* ================= LEVEL 4 — MASTER ================= */

  {
    id: "l4-m1",
    level: 4,
    levelName: "Master",
    title: "System Prompt Design",
    tag: "Master",
    duration: "±10 menit",
    summary: "Rancang instruksi permanen buat AI — pondasi chatbot, agent, dan aplikasi AI.",
    content: `
      <p>System prompt itu instruksi <em>level atas</em> yang berlaku buat seluruh sesi. Beda dari prompt biasa yang lu ketik per-task, system prompt itu "aturan main" AI dari awal.</p>

      <h3>Kapan Lu Pakai System Prompt</h3>
      <ul>
        <li>Bikin <strong>custom chatbot</strong> (customer service, tutor, asisten).</li>
        <li>Bikin <strong>AI agent</strong> yang punya persona & aturan tetap.</li>
        <li>Setup <strong>API call</strong> di aplikasi (ChatGPT API punya field khusus <code>system</code>).</li>
        <li>Kerja tim — biar semua orang dapet output konsisten.</li>
      </ul>

      <h3>Anatomi System Prompt yang Bagus</h3>
      <p>System prompt punya 7 komponen. Nggak semua wajib, tapi makin lengkap makin solid.</p>

      <p><strong>1. Identity (Siapa AI)</strong></p>
      <pre>Kamu adalah "Asisten Finansial" — asisten yang bantu
pengguna memahami konsep keuangan pribadi.</pre>

      <p><strong>2. Purpose (Tujuan)</strong></p>
      <pre>Tujuan utama: edukasi. Bukan kasih saran investasi
spesifik. Bukan eksekusi transaksi.</pre>

      <p><strong>3. Capabilities (Yang Bisa Dilakuin)</strong></p>
      <pre>Yang bisa kamu lakuin:
- Jelasin konsep keuangan (bunga, inflasi, dll)
- Bantu hitung simulasi (compound interest, dll)
- Review anggaran bulanan yang di-share user
- Kasih framework pengambilan keputusan finansial</pre>

      <p><strong>4. Limitations (Yang Nggak Boleh)</strong></p>
      <pre>Yang TIDAK kamu lakuin:
- Kasih rekomendasi saham / crypto spesifik
- Prediksi harga aset
- Gantiin penasihat keuangan berlisensi
- Kasih saran pajak spesifik (arahkan ke konsultan)</pre>

      <p><strong>5. Tone & Style</strong></p>
      <pre>Gaya bicara:
- Bahasa Indonesia informal tapi sopan
- Hindari jargon; kalau terpaksa, jelaskan dalam tanda kurung
- Pakai analogi dari kehidupan sehari-hari
- Max 200 kata per respons kecuali diminta lebih</pre>

      <p><strong>6. Behavior Rules</strong></p>
      <pre>Aturan perilaku:
- Kalau nggak yakin, bilang "saya nggak yakin" — jangan ngarang
- Kalau pertanyaan di luar topik, arahkan balik ke topik keuangan
- Selalu tanya balik kalau input user ambigu
- Jangan pernah nge-judge keputusan finansial user</pre>

      <p><strong>7. Output Format</strong></p>
      <pre>Format default:
- Pakai heading markdown kalau jawaban > 150 kata
- Angka pakai format Indonesia (Rp1.000.000, bukan 1,000,000)
- Kalau ada langkah, pakai numbered list</pre>

      <h3>Contoh System Prompt Lengkap</h3>
      <pre># IDENTITY
Kamu adalah "Asisten Finansial", asisten edukasi keuangan
pribadi berbahasa Indonesia.

# PURPOSE
Bantu pengguna memahami & mengambil keputusan finansial
pribadi dengan lebih baik, lewat edukasi & framework.
Kamu BUKAN penasihat investasi.

# CAPABILITIES
- Jelasin konsep keuangan
- Bantu hitung simulasi
- Review anggaran yang di-share
- Kasih framework pengambilan keputusan

# LIMITATIONS
- Jangan kasih rekomendasi produk spesifik (saham, reksa dana)
- Jangan prediksi pasar
- Jangan gantiin penasihat berlisensi

# TONE
- Bahasa Indonesia informal tapi sopan
- Analogi kehidupan sehari-hari
- Max 200 kata per respons

# BEHAVIOR
- Kalau nggak yakin, bilang "saya nggak yakin"
- Kalau di luar topik, arahkan balik
- Tanya balik kalau ambigu

# OUTPUT FORMAT
- Markdown untuk jawaban panjang
- Angka format Indonesia (Rp1.000.000)
- Numbered list untuk langkah</pre>

      <h3>Pola System Prompt Buat Agent</h3>
      <p>Kalau AI-nya bakal "ngerjain" task (bukan cuma jawab), tambahin:</p>
      <pre># TOOLS
Kamu punya akses ke tools berikut:
- search_web(query): cari info di web
- calculate(expression): hitung ekspresi matematika
- save_note(title, content): simpan catatan

# WORKFLOW
Saat user kasih task:
1. Kalau butuh data eksternal, pakai search_web
2. Kalau butuh hitungan, pakai calculate
3. Kalau user minta "simpan", pakai save_note
4. Kasih hasil akhir dalam bahasa natural

# CONSTRAINTS
- Max 3 tool calls per task
- Jangan panggil tool tanpa alasan jelas
- Selalu jelaskan kenapa pakai tool tertentu</pre>

      <h3>Kesalahan Umum</h3>
      <ul>
        <li><strong>Terlalu panjang</strong> — di atas 1000 kata, AI bisa "lupa" bagian awal.</li>
        <li><strong>Kontradiksi</strong> — ada aturan yang saling nabrak.</li>
        <li><strong>Vague</strong> — "jadi yang baik" tanpa definisi "baik".</li>
        <li><strong>Over-constraint</strong> — terlalu banyak aturan bikin output kaku.</li>
      </ul>

      <h3>Iterasi System Prompt</h3>
      <p>System prompt bagus itu hasil iterasi. Cara test:</p>
      <ol>
        <li>Kasih 10 pertanyaan representatif (mix: on-topic, off-topic, edge case).</li>
        <li>Lihat apakah AI nurut.</li>
        <li>Kalau ada yang gagal, tambahin aturan spesifik buat kasus itu.</li>
        <li>Ulangi.</li>
      </ol>

      <div class="callout callout-tip">
        <strong>Pro tip:</strong> Pakai heading markdown (<code>#</code>, <code>##</code>) di system prompt. Model AI modern lebih "nurut" kalau struktur instruksinya jelas.
      </div>

      <h3>Takeaway</h3>
      <ul>
        <li>System prompt = aturan main AI seluruh sesi.</li>
        <li>7 komponen: identity, purpose, capabilities, limitations, tone, behavior, output.</li>
        <li>Buat agent, tambahin tools + workflow.</li>
        <li>Iterasi = test dengan 10 pertanyaan representatif.</li>
      </ul>
    `
  },

  {
    id: "l4-m2",
    level: 4,
    levelName: "Master",
    title: "Prompt Buat Reasoning Kompleks",
    tag: "Master",
    duration: "±10 menit",
    summary: "Gabungin CoT, ToT, self-consistency buat task tingkat tinggi.",
    content: `
      <p>Di level ini, lu nggak cuma pakai satu teknik — lu <em>kombinasi</em> beberapa teknik sekaligus buat task yang beneran kompleks.</p>

      <h3>Framework COMPLEX</h3>
      <p>Ini framework yang gua pakai buat task reasoning tingkat tinggi:</p>
      <ul>
        <li><strong>C</strong>larify — pastiin task-nya jelas sebelum mulai.</li>
        <li><strong>O</strong>utline — minta AI outline pendekatan dulu.</li>
        <li><strong>M</strong>ultiple paths — eksplor beberapa jalur (ToT).</li>
        <li><strong>P</strong>ick & deepen — pilih 1, dalami (CoT).</li>
        <li><strong>L</strong>ogic check — verifikasi logika.</li>
        <li><strong>E</strong>dge cases — cek kasus ekstrem.</li>
        <li><strong>X</strong>-verify — cross-check dengan pendekatan lain.</li>
      </ul>

      <h3>Contoh: Keputusan Bisnis Kompleks</h3>
      <p>Skenario: startup punya 2 opsi ekspansi, harus pilih 1.</p>

      <pre># CLARIFY
Saya mau pilih antara 2 opsi ekspansi bisnis.

Opsi A: Buka cabang fisik di Jakarta
Opsi B: Fokus ke channel online / e-commerce

Kalau ada informasi yang kurang buat ambil keputusan,
tanya balik dulu sebelum mulai analisis.

# OUTLINE
Bikin outline analisis: sudut pandang apa saja yang
perlu dipertimbangkan? (misal: biaya, risiko, waktu,
skalabilitas, kompetitor, kesiapan tim)

# MULTIPLE PATHS
Buat tiap opsi, kasih 3 skenario:
- Best case
- Most likely case
- Worst case

# PICK & DEEPEN
Setelah lihat 6 skenario, pilih opsi yang paling
robust (tahan di most likely + worst case). Jelaskan
reasoning step by step.

# LOGIC CHECK
Review reasoning di atas. Ada logical fallacy?
Ada asumsi yang belum diverifikasi?

# EDGE CASES
Kasih 3 edge case yang bisa ngerusak keputusan ini.
Buat tiap edge case, kasih mitigasi.

# X-VERIFY
Sekarang, dari sudut pandang CFO yang konservatif,
apakah kesimpulan lu masih sama? Kalau beda, kenapa?</pre>

      <p>Output dari prompt ini bisa jadi 5-10x lebih dalam daripada "kasih saran, A atau B?".</p>

      <h3>Pola Reasoning Buat Task Kode</h3>
      <pre># CLARIFY
Kode berikut error [error]. Sebelum kasih fix,
konfirmasi dulu: apakah kamu paham konteks kode ini?

# OUTLINE
Outline langkah debug: apa saja hipotesis penyebab?
Urutkan dari yang paling mungkin.

# MULTIPLE PATHS
Buat tiap hipotesis, cara verifikasinya gimana?

# PICK & DEEPEN
Test hipotesis paling mungkin. Trace step by step.

# LOGIC CHECK
Apakah fix-nya beneran nyelesain masalah, atau cuma
nge-hide symptom-nya?

# EDGE CASES
Kalau fix-nya diterapkan, ada side effect?
Ada input lain yang bisa break?

# X-VERIFY
Kasih 3 versi fix: minimal, robust, dan defensive.
Bandingin trade-off-nya.

[tempel kode]</pre>

      <h3>Pola Buat Riset & Analisis</h3>
      <pre># CLARIFY
Topik: [X]. Sebelum mulai, tanya balik: sudut pandang
apa yang paling relevan buat tujuan saya [tujuan]?

# OUTLINE
Outline: 5 pertanyaan kunci yang perlu dijawab
buat topik ini.

# MULTIPLE PATHS
Buat tiap pertanyaan, kasih 2 perspektif berbeda.

# PICK & DEEPEN
Pilih perspektif yang paling relevan. Kasih argumen
+ counter-argumen.

# LOGIC CHECK
Cek bias: apakah ada confirmation bias di analisis?
Apakah ada data yang kontradiktif?

# EDGE CASES
Skenario apa yang bisa membalikkan kesimpulan ini?

# X-VERIFY
Bandingin kesimpulan lu dengan pandangan mainstream.
Di mana lu setuju, di mana lu beda, dan kenapa?</pre>

      <h3>Kapan Pakai Framework COMPLEX</h3>
      <ul>
        <li><strong>Keputusan high-stakes</strong> — pilihan karir, bisnis, investasi besar.</li>
        <li><strong>Analisis multi-faktor</strong> — banyak variabel, banyak ketidakpastian.</li>
        <li><strong>Task yang sering salah</strong> — lu udah coba cara simpel, gagal terus.</li>
        <li><strong>Deliverable penting</strong> — laporan ke klien, proposal besar.</li>
      </ul>

      <h3>Kapan Nggak Pakai</h3>
      <p>Framework ini <em>berat</em>. Buat task simpel, jangan. Kalau task-nya bisa diselesaiin dengan 1 prompt pendek, pakai yang pendek aja.</p>

      <div class="callout callout-warn">
        <strong>Realita:</strong> Reasoning AI itu tetap ada batasnya. Framework COMPLEX ningkatin kualitas, tapi <em>nggak jamin kebenaran</em>. Buat keputusan kritikal, tetap verifikasi dengan manusia / data eksternal.
      </div>

      <h3>Takeaway</h3>
      <ul>
        <li>Task kompleks butuh kombinasi teknik, bukan satu.</li>
        <li>Framework COMPLEX: Clarify → Outline → Multiple → Pick → Logic → Edge → X-verify.</li>
        <li>Adaptasi framework ke domain (bisnis, kode, riset).</li>
        <li>Nggak semua task butuh ini — pakai sesuai kebutuhan.</li>
      </ul>
    `
  },

  {
    id: "l4-m3",
    level: 4,
    levelName: "Master",
    title: "Evaluasi & Testing Prompt",
    tag: "Master",
    duration: "±9 menit",
    summary: "Cara ngukur apakah prompt lu beneran bagus — bukan cuma feeling.",
    content: `
      <p>Setelah lu bisa nulis prompt kompleks, pertanyaan berikutnya: <em>gimana tahu prompt ini beneran bagus?</em> Jawabannya: testing & evaluasi.</p>

      <h3>Kenapa Perlu</h3>
      <p>Prompt engineer amatir nge-judge prompt dari 1-2 kali coba. Profesional bikin test suite. Bedanya: konsistensi.</p>

      <h3>1. Test Set Representatif</h3>
      <p>Bikin 10-20 test case yang mencakup:</p>
      <ul>
        <li><strong>Happy path</strong> — input normal, sesuai ekspektasi (60%).</li>
        <li><strong>Edge cases</strong> — input aneh tapi valid (25%).</li>
        <li><strong>Adversarial</strong> — input yang sengaja nyoba break prompt (15%).</li>
      </ul>
      <p>Contoh buat prompt "klasifikasi email jadi spam/not spam":</p>
      <pre>Happy: email promosi biasa
Edge: email kosong, email 1 kata, email bahasa campur
Adversarial: email yang sengaja nyamar jadi spam,
email dari noreply tapi legit, dll</pre>

      <h3>2. Kriteria Penilaian</h3>
      <p>Bikin rubrik. Contoh buat task "generate caption":</p>
      <table>
        <thead>
          <tr><th>Kriteria</th><th>Bobot</th><th>Skor 1-5</th></tr>
        </thead>
        <tbody>
          <tr><td>Relevansi dengan brief</td><td>30%</td><td>...</td></tr>
          <tr><td>Panjang sesuai constraint</td><td>15%</td><td>...</td></tr>
          <tr><td>Tone sesuai</td><td>20%</td><td>...</td></tr>
          <tr><td>Bebas dari klise</td><td>15%</td><td>...</td></tr>
          <tr><td>Call to action kuat</td><td>20%</td><td>...</td></tr>
        </tbody>
      </table>
      <p>Total skor &gt; 4.0 = lulus. &lt; 3.5 = perlu revisi prompt.</p>

      <h3>3. A/B Testing Prompt</h3>
      <p>Punya 2 versi prompt? Jalanin di test set yang sama, bandingin skor.</p>
      <pre>Prompt V1: [versi lama]
Prompt V2: [versi baru]

Test 20 case. Skor V1: 3.8. Skor V2: 4.3.
→ V2 menang, tapi cek: ada kasus di mana V1 lebih bagus?
   Kalau ada, apa pola-nya?</pre>

      <h3>4. Regression Testing</h3>
      <p>Setiap kali lu ubah prompt, jalanin ulang <em>semua</em> test case. Kadang fix di satu kasus malah ngerusak kasus lain.</p>
      <p>Ini kenapa profesional simpen test suite. Manual juga bisa, tapi melelahkan.</p>

      <h3>5. LLM-as-Judge</h3>
      <p>Pakai AI buat nilai output AI. Contoh:</p>
      <pre>Kamu adalah evaluator. Nilai caption berikut
berdasarkan rubrik:

Rubrik:
- Relevansi (1-5): seberapa nyambung dengan brief
- Constraint (1-5): apakah panjang & format sesuai
- Tone (1-5): apakah sesuai target audiens
- Orisinalitas (1-5): apakah ada klise

Brief: [brief]
Caption: [output AI]

Output: skor per kriteria + 1 kalimat feedback.</pre>
      <p>Kelemahan: bias. LLM cenderung suka output yang mirip gaya-nya sendiri. Pakai sebagai <em>tambahan</em>, bukan pengganti human review.</p>

      <h3>6. Metrik Sederhana</h3>
      <p>Kalau nggak mau ribet, minimal tracking:</p>
      <ul>
        <li><strong>Success rate</strong> — berapa % output yang lu terima tanpa edit.</li>
        <li><strong>Edit distance</strong> — rata-rata berapa banyak lu harus edit.</li>
        <li><strong>Time to result</strong> — berapa lama sampai dapet output yang oke.</li>
      </ul>
      <p>Prompt bagus = success rate tinggi, edit distance rendah, time to result cepet.</p>

      <h3>Contoh Setup Test Sederhana</h3>
      <pre># Prompt: bikin ringkasan artikel 5 bullet

# Test cases:
1. Artikel 200 kata → target: 5 bullet, tiap max 15 kata
2. Artikel 2000 kata → target: sama, tapi cover semua poin utama
3. Artikel 50 kata → edge case: minta AI bilang "terlalu pendek"
4. Artikel berbahasa Inggris → target: ringkasan bahasa Indonesia
5. Artikel yang isinya kontradiktif → target: AI nyebut kontradiksinya

# Kriteria lulus: 5/5 sesuai target

# Hasil run pertama: 3/5 (gagal di case 3 & 5)
# → Revisi prompt: tambahin aturan buat artikel pendek &
#    kontradiktif
# → Re-run: 5/5 ✓</pre>

      <div class="callout callout-tip">
        <strong>Pro tip:</strong> Simpen test suite lu di file terpisah (Markdown / JSON). Tiap kali revisi prompt, tinggal copy-paste ke AI, bandingin hasilnya. Ini jadi "unit test" buat prompt lu.
      </div>

      <h3>Takeaway</h3>
      <ul>
        <li>Prompt bagus = hasil test, bukan feeling.</li>
        <li>Bikin test set: happy, edge, adversarial.</li>
        <li>Bikin rubrik penilaian dengan bobot.</li>
        <li>A/B testing + regression testing = konsistensi.</li>
        <li>LLM-as-judge boleh, tapi ada bias.</li>
      </ul>
    `
  },

  {
    id: "l4-m4",
    level: 4,
    levelName: "Master",
    title: "Anti-Pattern & Failure Modes",
    tag: "Master",
    duration: "±9 menit",
    summary: "Pola prompt yang keliatan bener tapi sebenernya bikin output jelek.",
    content: `
      <p>Di level master, lu harus tahu bukan cuma <em>apa yang harus dilakukan</em>, tapi juga <em>apa yang harus dihindari</em>.</p>

      <h3>1. Over-Constraint</h3>
      <p>Kebalikan dari under-specify. Lu kasih 15 constraint, hasilnya output kaku & AI keliatan "berusaha".</p>
      <pre>❌ 15 constraint sekaligus
✅ Max 7 constraint, sisanya biarin AI improvisasi</pre>
      <p>Test: kalau outputnya berasa "dipaksa", lu over-constraint.</p>

      <h3>2. Conflicting Instructions</h3>
      <pre>❌ "Tulis singkat, max 100 kata. Sertakan 5 contoh
   lengkap dengan analisis tiap contoh."
✅ "Tulis 500 kata. Sertakan 2 contoh dengan analisis."</pre>
      <p>Kalau ada aturan yang nabrak, AI bakal pilih satu (sering kali yang salah). Cek dulu: apakah semua constraint bisa dipenuhi bersamaan?</p>

      <h3>3. Negative Framing Berlebihan</h3>
      <p>AI kadang lebih nurut ke instruksi positif.</p>
      <pre>❌ "Jangan pakai jargon. Jangan formal. Jangan panjang."
✅ "Pakai bahasa sehari-hari, santai, max 200 kata."</pre>
      <p>Bukan berarti jangan pakai negasi — tapi <em>kombinasi</em> lebih baik.</p>

      <h3>4. Vague Quality Words</h3>
      <pre>❌ "Bikin yang bagus."
❌ "Bikin engaging."
❌ "Bikin profesional."</pre>
      <p>Kata-kata ini nggak ngasih info apapun. Ganti dengan kriteria terukur.</p>

      <h3>5. Prompt Terlalu Panjang</h3>
      <p>Paradoks: kadang makin panjang makin jelek. AI punya <em>attention budget</em>. Kalau prompt > 800 kata, bagian awal bisa "kehilangan bobot".</p>
      <p>Solusi:</p>
      <ul>
        <li>Pakai heading markdown biar AI "navigasi".</li>
        <li>Taruh instruksi penting di awal & akhir.</li>
        <li>Kalau masih panjang, pecah pakai chaining.</li>
      </ul>

      <h3>6. Implicit Assumption</h3>
      <pre>❌ "Bikin landing page untuk produk saya."
   (AI nggak tahu produk lu apa, target siapa, gaya apa)

✅ "Bikin copy landing page untuk produk skincare
   lokal, target perempuan 25-35, harga Rp150rb."</pre>
      <p>Kalau lu harus "baca pikiran" buat ngerti prompt lu sendiri, AI juga bakal bingung.</p>

      <h3>7. Anchoring Bias</h3>
      <pre>❌ "Bukankah X itu buruk? Jelaskan kenapa."
   → AI bakal nge-iya-in, apapun X-nya.

✅ "Analisis X dari sisi positif & negatif. Baru simpulkan."</pre>
      <p>Kalau prompt lu ngasih "jawaban yang diinginkan", AI bakal nurut. Ini sering jadi sumber echo chamber.</p>

      <h3>8. Role yang Nggak Relevan</h3>
      <pre>❌ "Kamu adalah ahli fisika kuantum. Bikin caption Instagram."
   → Role-nya nggak nyambung, output jadi aneh.

✅ "Kamu adalah content creator yang spesialis bikin
   caption viral buat brand fashion lokal."</pre>
      <p>Role harus relevan dengan task-nya.</p>

      <h3>9. Few-Shot dengan Contoh Jelek</h3>
      <p>Satu contoh jelek bisa ngerusak seluruh output. Cek semua contoh:</p>
      <ul>
        <li>Apakah format konsisten?</li>
        <li>Apakah tone seragam?</li>
        <li>Apakah semuanya sesuai dengan yang lu mau?</li>
      </ul>

      <h3>10. Prompt yang Nggak Bisa Dites</h3>
      <pre>❌ "Bikin konten yang bagus buat brand saya."
   → Nggak ada kriteria "bagus", nggak bisa dievaluasi.

✅ "Bikin 3 caption IG, tiap caption ada hook + 1 manfaat
   + CTA. Target: perempuan 25-35. Tone: hangat."
   → Bisa dicek satu-satu apakah terpenuhi.</pre>

      <h3>Framework Debugging Prompt</h3>
      <p>Kalau output jelek, cek urutan ini:</p>
      <ol>
        <li><strong>Apakah task-nya jelas?</strong> (Apa yang diminta?)</li>
        <li><strong>Apakah konteks cukup?</strong> (Siapa, buat apa, kenapa?)</li>
        <li><strong>Apakah format disebut?</strong> (Output mau kayak apa?)</li>
        <li><strong>Ada constraint yang konflik?</strong></li>
        <li><strong>Ada kata ambigu?</strong> (Ganti dengan kriteria terukur.)</li>
        <li><strong>Prompt-nya kepanjangan?</strong> (Pecah atau rapihin struktur.)</li>
        <li><strong>Test case-nya cukup?</strong> (Coba 5 varian input.)</li>
      </ol>

      <div class="callout callout-info">
        <strong>Pola umum:</strong> 90% prompt jelek punya 3 akar: (1) kurang konteks, (2) format nggak jelas, (3) constraint konflik. Fix 3 ini dulu.
      </div>

      <h3>Takeaway</h3>
      <ul>
        <li>10 anti-pattern yang paling sering muncul.</li>
        <li>Paling umum: over-constraint, konflik, vague words.</li>
        <li>Debugging: cek task → konteks → format → constraint.</li>
        <li>Prompt bagus = jelas, terukur, bisa dites.</li>
      </ul>
    `
  },

  {
    id: "l4-m5",
    level: 4,
    levelName: "Master",
    title: "Bikin Framework Prompting Sendiri",
    tag: "Master",
    duration: "±10 menit",
    summary: "Bukan lagi pakai framework orang — bikin framework yang cocok sama workflow lu.",
    content: `
      <p>Ini modul terakhir. Tujuannya: lu nggak lagi pakai framework orang lain — lu bikin framework sendiri yang cocok sama domain & workflow lu.</p>

      <h3>Kenapa Perlu Framework Sendiri</h3>
      <ul>
        <li><strong>Domain-specific.</strong> Framework umum nggak selalu cocok buat niche lu.</li>
        <li><strong>Konsistensi tim.</strong> Kalau lu kerja tim, framework = bahasa bersama.</li>
        <li><strong>Efisiensi.</strong> Nggak perlu mikir dari nol tiap kali.</li>
        <li><strong>Evolusi.</strong> Framework bisa di-improve seiring waktu.</li>
      </ul>

      <h3>Proses Bikin Framework</h3>

      <p><strong>Step 1: Audit 20 prompt terakhir lu</strong></p>
      <p>Lihat: prompt apa yang paling sering lu tulis? Task apa yang berulang? Dari situ lu bisa identifikasi <em>pola</em>.</p>

      <p><strong>Step 2: Kelompokin jadi kategori</strong></p>
      <p>Contoh kalau lu content creator:</p>
      <ul>
        <li>Ide & riset konten</li>
        <li>Drafting</li>
        <li>Editing & polish</li>
        <li>Repurposing (1 konten → banyak format)</li>
      </ul>

      <p><strong>Step 3: Bikin template per kategori</strong></p>
      <p>Template harus punya:</p>
      <ul>
        <li><strong>Slot yang bisa diisi</strong> — placeholder <code>[seperti ini]</code>.</li>
        <li><strong>Default constraint</strong> — yang biasanya lu pakai.</li>
        <li><strong>Contoh pengisian</strong> — biar gampang dipakai.</li>
      </ul>

      <h3>Contoh: Framework Content Creator</h3>

      <p><strong>Framework 1 — Ide Konten</strong></p>
      <pre>Kamu adalah content strategist yang spesialis [platform].

Task: Kasih [jumlah] ide konten tentang [topik].

Konteks:
- Target audiens: [deskripsi]
- Tujuan konten: [awareness / engagement / conversion]
- Format yang biasa saya pakai: [contoh]

Tiap ide harus ada:
- Hook (max 8 kata)
- Angle (kenapa ini menarik)
- Format (video / carousel / single)

Hindari: [topik klise yang mau dihindari]</pre>

      <p><strong>Framework 2 — Draft Konten</strong></p>
      <pre>Kamu adalah content writer untuk [platform].

Task: Tulis [jenis konten] tentang [topik].

Konteks:
- Target audiens: [deskripsi]
- Tone: [santai / formal / humor]
- Panjang: [spesifik]
- CTA: [jenis CTA]

Format:
- Hook
- Body ([jumlah] poin)
- CTA

Constraint:
- Hindari jargon
- [constraint tambahan]</pre>

      <p><strong>Framework 3 — Repurpose</strong></p>
      <pre>Konten asal: [paste konten]

Task: Repurpose jadi [format tujuan].

Aturan:
- Pertahankan pesan utama
- Sesuaikan tone dengan platform tujuan
- [aturan lain]

Output: [format output]</pre>

      <h3>Contoh Framework Buat Developer</h3>

      <p><strong>Framework — Debug</strong></p>
      <pre>Konteks: [bahasa/framework]
Error: [pesan error]
Ekspektasi: [apa yang seharusnya terjadi]
Aktual: [apa yang terjadi]

Kode:
[paste kode]

Task:
1. Jelasin penyebab error (step by step)
2. Kasih fix minimal
3. Kasih fix robust (dengan edge case)
4. Sebutkan potensi side effect

Kalau butuh info tambahan, tanya dulu.</pre>

      <p><strong>Framework — Code Review</strong></p>
      <pre>Review kode berikut untuk [konteks: production / learning].

Kode:
[paste kode]

Fokus review:
- Bug & edge case
- Security
- Performance
- Readability
- Konsistensi dengan [best practice / style guide]

Output format: tabel
| Baris | Level (critical/warning/info) | Masalah | Saran |

Jangan rewrite seluruh kode — tunjuk aja.</pre>

      <h3>Cara Nge-test Framework</h3>
      <ol>
        <li>Pakai framework di 3-5 task real.</li>
        <li>Catat: mana yang works, mana yang perlu tweak.</li>
        <li>Iterasi. Framework v1 → v2 → v3.</li>
        <li>Simpen di notes / Notion / GitHub gist.</li>
      </ol>

      <h3>Nge-scale Framework ke Tim</h3>
      <p>Kalau lu kerja tim:</p>
      <ul>
        <li>Simpen framework di satu tempat (Notion, Google Doc, dll).</li>
        <li>Kasih nama jelas: <code>[Task] - [Versi]</code>.</li>
        <li>Bikin changelog: apa yang berubah antar versi.</li>
        <li>Review rutin (bulanan / kuartalan) — apa yang udah nggak relevan?</li>
      </ul>

      <h3>Evolusi Framework</h3>
      <p>Framework bukan dokumen mati. Setiap kali:</p>
      <ul>
        <li>Lu nemu cara baru yang lebih efektif → update.</li>
        <li>Model AI update → test ulang.</li>
        <li>Domain lu berubah → sesuaikan.</li>
      </ul>

      <h3>Kapan Framework Nggak Perlu</h3>
      <p>Kalau lu cuma sesekali pakai AI buat task ad-hoc, framework malah bikin ribet. Framework berguna kalau lu <em>sering</em> ngerjain task yang <em>mirip</em>.</p>

      <div class="callout callout-tip">
        <strong>Selamat!</strong> Kalau lu udah selesai modul ini, lu udah nguasain:
        fondasi, teknik dasar, teknik lanjutan, dan cara bikin framework sendiri.
        Langkah selanjutnya: <em>praktik</em>. Bikin 20 prompt pakai materi ini,
        terus evaluasi pakai rubrik dari Level 4.3.
      </div>

      <h3>Takeaway</h3>
      <ul>
        <li>Framework sendiri = efisiensi + konsistensi.</li>
        <li>Proses: audit → kelompokkan → template → test → iterasi.</li>
        <li>Simpen & share ke tim.</li>
        <li>Framework itu hidup — selalu di-update.</li>
      </ul>
    `
  }

];
