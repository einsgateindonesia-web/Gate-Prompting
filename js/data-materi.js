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
  }

];
