/* =========================================================
   Gate Prompting — Library Prompt Data
   24 prompt dalam 6 kategori
   ========================================================= */

window.LIBRARY_CATEGORIES = [
  { id: "all",     label: "Semua",     icon: "📚" },
  { id: "nulis",   label: "Nulis",     icon: "✍️" },
  { id: "coding",  label: "Coding",    icon: "💻" },
  { id: "belajar", label: "Belajar",   icon: "🎓" },
  { id: "bisnis",  label: "Bisnis",    icon: "💼" },
  { id: "kreatif", label: "Kreatif",   icon: "🎨" },
  { id: "analisis",label: "Analisis",  icon: "📊" }
];

window.LIBRARY = [

  /* ================= NULIS ================= */
  {
    id: "n1",
    category: "nulis",
    title: "Artikel Blog 800 Kata",
    desc: "Artikel blog terstruktur dengan judul, subjudul, dan kesimpulan.",
    tags: ["artikel", "blog", "content"],
    prompt: `Kamu adalah content writer spesialis [topik/bidang].

Task: Tulis artikel blog 800 kata tentang "[topik]".

Konteks:
- Target pembaca: [deskripsi audiens, misal "pemilik UMKM non-teknis"]
- Tujuan artikel: [edukasi / awareness / konversi]
- Angle: [sudut pandang, misal "kesalahan umum pemula"]

Format:
- Judul (max 10 kata, bikin penasaran)
- 4 subjudul yang flow-nya logis
- Setiap subjudul: 2-3 paragraf
- Kesimpulan (max 100 kata)
- Sertakan minimal 2 contoh konkret

Constraint:
- Gaya bahasa: [santai / formal / storytelling]
- Hindari jargon teknis, atau jelaskan dalam tanda kurung
- Jangan pakai kata "sangat", "sekali", "banget"`
  },
  {
    id: "n2",
    category: "nulis",
    title: "Caption Instagram",
    desc: "3 caption IG dengan hook, body, CTA, dan hashtag.",
    tags: ["caption", "instagram", "sosmed"],
    prompt: `Kamu adalah social media writer yang biasa bikin caption viral.

Task: Bikin 3 caption Instagram untuk [jenis konten/produk].

Konteks:
- Brand: [nama brand + deskripsi singkat]
- Target: [usia, gender, lokasi, interest]
- Tone: [hangat / humor / inspiring / profesional]
- Tujuan: [engagement / awareness / konversi]

Format tiap caption:
- Hook (max 8 kata, harus bikin berhenti scroll)
- Body (2-3 baris, 1 pesan utama)
- CTA (soft, pertanyaan atau ajakan halus)
- 5 hashtag relevan (mix popular + niche)

Constraint:
- Hindari klise seperti "glowing", "auto cantik"
- Jangan pakai emoji lebih dari 3
- Setiap caption pakai angle berbeda`
  },
  {
    id: "n3",
    category: "nulis",
    title: "Email Profesional",
    desc: "Email formal untuk berbagai keperluan kerja.",
    tags: ["email", "kerja", "formal"],
    prompt: `Kamu adalah profesional communication specialist.

Task: Tulis email ke [penerima] tentang [topik].

Konteks:
- Hubungan dengan penerima: [atasan / klien / rekan kerja / vendor]
- Tujuan email: [minta approval / follow up / komplain / update]
- Konteks situasi: [jelaskan singkat, misal "proyek A delay 3 hari"]

Format:
- Subject line (max 8 kata, jelas & spesifik)
- Salam pembuka
- Isi: 2-3 paragraf
- CTA jelas (apa yang lu mau dari penerima)
- Penutup + signature

Constraint:
- Tone: profesional tapi hangat, tidak kaku
- Hindari bahasa yang menyalahkan
- Max 200 kata total
- Sertakan 1 alternatif subject line`
  },
  {
    id: "n4",
    category: "nulis",
    title: "Rewrite & Perhalus Tulisan",
    desc: "Perbaiki tulisan kasar jadi lebih enak dibaca tanpa ngubah makna.",
    tags: ["edit", "rewrite", "polish"],
    prompt: `Kamu adalah editor profesional dengan 10 tahun pengalaman.

Task: Rewrite teks berikut supaya lebih [tujuan: jelas / ringkas / engaging].

Teks asal:
"""
[tempel teks]
"""

Aturan rewrite:
- Pertahankan makna & fakta asli (jangan nambah info baru)
- Perbaiki flow antar kalimat
- Hilangkan kata mubazir
- Ganti kalimat pasif jadi aktif kalau memungkinkan
- Perbaiki struktur paragraf

Format output:
1. Versi revisi
2. Ringkasan perubahan (max 5 bullet)
3. Bagian yang gua saranin tetep kayak aslinya (kalau ada)

Constraint:
- Tone: [tetap / lebih formal / lebih santai]
- Panjang: [tetap / max X% lebih pendek]`
  },

  /* ================= CODING ================= */
  {
    id: "c1",
    category: "coding",
    title: "Debug Error",
    desc: "Cari penyebab error + fix minimal & robust.",
    tags: ["debug", "error", "troubleshoot"],
    prompt: `Kamu adalah senior [bahasa/framework] engineer.

Konteks:
- Bahasa/framework: [X]
- Error: [paste pesan error persis]
- Ekspektasi: [apa yang seharusnya terjadi]
- Aktual: [apa yang terjadi]

Kode:
"""
[paste kode]
"""

Task:
1. Jelasin penyebab error, step by step
2. Kasih fix minimal (perubahan paling kecil)
3. Kasih fix robust (handle edge case)
4. Sebutkan potensi side effect dari fix-nya
5. Kalau ada info yang kurang, tanya dulu sebelum jawab

Constraint:
- Jangan rewrite seluruh kode, tunjuk bagian yang diubah
- Setiap perubahan harus ada penjelasan kenapa`
  },
  {
    id: "c2",
    category: "coding",
    title: "Code Review",
    desc: "Review kode dari bug, security, perf, dan readability.",
    tags: ["review", "quality", "security"],
    prompt: `Kamu adalah tech lead yang berpengalaman review kode production.

Konteks kode: [production / learning / prototype]

Kode:
"""
[paste kode]
"""

Review dari 5 aspek:
1. Bug & edge case
2. Security (input validation, injection, dll)
3. Performance (kompleksitas, query, render)
4. Readability (naming, struktur, komentar)
5. Konsistensi dengan [style guide / best practice]

Format output: tabel
| Baris | Level | Aspek | Masalah | Saran |

Level: critical / warning / info

Di akhir:
- 3 hal yang udah bagus (biar seimbang)
- 1 rekomendasi refactor prioritas tertinggi

Constraint:
- Jangan rewrite seluruh file
- Kalau nggak yakin, bilang "perlu cek lebih lanjut"`
  },
  {
    id: "c3",
    category: "coding",
    title: "Refactor Code",
    desc: "Rapihin kode berantakan tanpa ngubah behavior.",
    tags: ["refactor", "clean code", "maintainability"],
    prompt: `Kamu adalah software engineer yang specialist clean code.

Kode saat ini:
"""
[paste kode]
"""

Masalah yang gua rasain:
- [misal: fungsi kepanjangan, duplikasi, naming jelek]

Task: Refactor kode ini tanpa ngubah behavior-nya.

Fokus refactor:
- [misal: pecah fungsi jadi lebih kecil]
- [misal: extract constant]
- [misal: perbaiki naming]

Constraint PENTING:
- Behavior output HARUS sama persis
- Jangan tambah fitur baru
- Jangan ubah public API (fungsi/class yang dipakai luar)
- Kalau ada trade-off, jelaskan

Format output:
1. Kode hasil refactor
2. Penjelasan perubahan (per bagian)
3. Alasan di balik tiap keputusan
4. Potensi risiko (kalau ada)`
  },
  {
    id: "c4",
    category: "coding",
    title: "Tulis Unit Test",
    desc: "Generate unit test komprehensif dengan edge case.",
    tags: ["testing", "unit test", "quality"],
    prompt: `Kamu adalah QA engineer yang specialist nulis test.

Kode yang mau ditest:
"""
[paste kode]
"""

Framework test: [Jest / Pytest / Go test / dll]

Task: Tulis unit test komprehensif.

Coverage wajib:
1. Happy path (input normal)
2. Edge case (input kosong, null, boundary)
3. Error case (input invalid → expect error)
4. Integrasi dengan dependency (mock kalau perlu)

Format output:
- Kode test lengkap
- Komentar singkat di tiap test (kenapa test ini penting)
- Setup & teardown kalau perlu

Constraint:
- Test harus isolated (nggak depend ke test lain)
- Nama test deskriptif (baca nama = ngerti apa yang ditest)
- Jangan test implementation detail, test behavior`
  },
  {
    id: "c5",
    category: "coding",
    title: "Jelasin Kode Rumit",
    desc: "Paham kode orang lain atau kode lama lu sendiri.",
    tags: ["explain", "understanding", "documentation"],
    prompt: `Kamu adalah senior engineer yang jago jelasin kode ke orang lain.

Kode:
"""
[paste kode]
"""

Level penjelasan: [pemula / intermediate / advanced]

Task: Jelasin kode ini step by step.

Format:
1. Ringkasan 1 paragraf (kode ini ngapain)
2. Breakdown per bagian / fungsi
3. Data flow (input → proses → output)
4. Bagian yang tricky (kalau ada)
5. Potensi masalah atau smell code (kalau ada)

Constraint:
- Kalau ada istilah teknis, jelaskan singkat
- Pakai analogi kalau membantu
- Jangan cuma baca baris per baris — jelaskan *kenapa*`
  },

  /* ================= BELAJAR ================= */
  {
    id: "b1",
    category: "belajar",
    title: "Jelasin Konsep Susah",
    desc: "Paham konsep kompleks lewat analogi & contoh.",
    tags: ["explain", "learning", "konsep"],
    prompt: `Kamu adalah guru yang spesialis jelasin konsep susah ke pemula.

Task: Jelasin konsep "[konsep]" ke saya yang:
- Background: [misal: marketing, bukan teknis]
- Level: [pemula / menengah]
- Tujuan: [kenapa saya mau belajar ini]

Format:
1. Analogi dari kehidupan sehari-hari (yang relate sama background saya)
2. Definisi simpel (max 3 kalimat)
3. 3 contoh konkret
4. Kesalahan umum / miskonsepsi
5. 1 pertanyaan reflektif buat ngecek pemahaman

Constraint:
- Max 400 kata total
- Hindari jargon, atau jelaskan dalam tanda kurung
- Kalau ada konsep terkait, sebutin 1-2 aja
- Jangan over-simplify sampai salah`
  },
  {
    id: "b2",
    category: "belajar",
    title: "Rencana Belajar 30 Hari",
    desc: "Roadmap belajar terstruktur dengan target harian.",
    tags: ["roadmap", "planning", "skill"],
    prompt: `Kamu adalah learning coach yang spesialis bikin roadmap belajar.

Task: Bikin rencana belajar 30 hari untuk [skill/topik].

Konteks:
- Level awal saya: [pemula / menengah / advanced]
- Waktu tersedia: [X menit/hari]
- Target akhir: [spesifik, misal "bisa bikin CRUD app"]
- Gaya belajar: [video / baca / praktik]

Format tiap hari:
| Hari | Fokus | Aktivitas Utama | Deliverable |

Constraint:
- Minggu 1: fondasi (jangan langsung ke advanced)
- Setiap 7 hari ada review & catch-up day
- Setiap hari ada output konkret (bukan cuma nonton)
- Sertakan 1 sumber belajar per topik utama

Di akhir, tambahin:
- Cara tracking progress
- 3 metrik buat ngukur apakah lu on-track
- Tips kalau ketinggalan`
  },
  {
    id: "b3",
    category: "belajar",
    title: "Feynman Technique",
    desc: "Pahami sesuatu sampai bisa jelasin ke anak 12 tahun.",
    tags: ["feynman", "understanding", "test"],
    prompt: `Kamu adalah Feynman Technique coach.

Task: Bantu saya pahami [topik] lewat 4 tahap Feynman.

Tahap 1: Saya jelasin pemahaman saya sekarang
"""
[tulis pemahaman lu]
"""

Tahap 2: Kamu kritik penjelasan saya
- Bagian mana yang masih kabur?
- Bagian mana yang salah?
- Bagian mana yang cuma hafalan tanpa paham?

Tahap 3: Jelasin ulang ke saya seolah-olah saya anak 12 tahun
- Pakai analogi simpel
- Hindari jargon
- Max 300 kata

Tahap 4: Kasih saya 5 pertanyaan buat nge-test pemahaman
- Mulai dari mudah ke susah
- Sertakan jawaban (biar saya bisa self-check)

Constraint:
- Kalau pemahaman saya salah, jangan di-iyain
- Fokus ke *kenapa*, bukan *apa*`
  },
  {
    id: "b4",
    category: "belajar",
    title: "Bikin Flashcards",
    desc: "Generate flashcards buat spaced repetition.",
    tags: ["flashcard", "anki", "memory"],
    prompt: `Kamu adalah learning specialist yang paham spaced repetition.

Materi:
"""
[paste materi / catatan / artikel]
"""

Task: Bikin flashcards buat Anki / Quizlet.

Aturan bikin kartu:
- 1 kartu = 1 konsep (jangan gabung)
- Front: pertanyaan singkat & spesifik
- Back: jawaban singkat (max 2 kalimat)
- Hindari kartu "yes/no" (nggak ngukur recall)
- Kalau bisa, pakai cloze deletion (____)

Format output:
Kartu 1:
Front: ...
Back: ...

Kartu 2:
Front: ...
Back: ...

Target: [X] kartu, cover semua poin penting dari materi.

Di akhir, kasih saran:
- Urutan belajar optimal
- Kartu mana yang perlu di-review lebih sering`
  },

  /* ================= BISNIS ================= */
  {
    id: "bs1",
    category: "bisnis",
    title: "Analisis Ide Bisnis",
    desc: "Evaluasi ide bisnis dari 6 sudut pandang.",
    tags: ["bisnis", "validasi", "ide"],
    prompt: `Kamu adalah startup advisor yang udah handle 50+ early-stage startup.

Ide bisnis: [deskripsi ide]

Task: Analisis ide ini dari 6 sudut pandang.

1. Problem & solusi
   - Masalah apa yang diselesaiin?
   - Seberapa urgent masalah ini?

2. Target market
   - Siapa target utamanya?
   - Seberapa besar market-nya?

3. Kompetitor
   - Siapa pemain existing?
   - Apa bedanya ide lu?

4. Revenue model
   - Gimana cara monetize?
   - Realistis nggak?

5. Eksekusi
   - Apa 3 tantangan terbesar?
   - Apa yang dibutuhin buat start?

6. Risiko
   - Apa 3 risiko utama?
   - Mitigasinya?

Format: tiap poin max 4 bullet.

Di akhir:
- Verdict: worth it / perlu pivot / skip
- Kalau perlu pivot, arahnya ke mana?

Constraint:
- Jujur, jangan manis-manisin
- Kalau ada asumsi yang gua nggak sebutin, tanya dulu`
  },
  {
    id: "bs2",
    category: "bisnis",
    title: "Strategi Content Marketing",
    desc: "Rencana konten 30 hari dengan tema & format.",
    tags: ["marketing", "content", "strategi"],
    prompt: `Kamu adalah content strategist dengan pengalaman di [industri].

Task: Bikin strategi content marketing 30 hari buat [brand/bisnis].

Konteks:
- Bisnis: [deskripsi singkat]
- Target audiens: [detail]
- Platform utama: [IG / TikTok / LinkedIn / blog / mix]
- Tujuan: [awareness / engagement / konversi]
- Kapasitas produksi: [X konten/minggu]

Output:
1. 3 pilar konten (tema besar yang berulang)
2. Kalender 30 hari (tabel: Hari | Pilar | Format | Judul | CTA)
3. Mix format: [misal 40% edukasi, 30% entertain, 30% promosi]
4. 5 hook yang bisa dipakai berulang
5. Cara ngukur keberhasilan

Constraint:
- Konten harus realistis diproduksi solo (kalau kapasitas kecil)
- Prioritaskan format yang scalable
- Setiap konten punya 1 pesan jelas`
  },
  {
    id: "bs3",
    category: "bisnis",
    title: "Sales Pitch / Proposal",
    desc: "Proposal atau pitch deck yang meyakinkan.",
    tags: ["sales", "pitch", "proposal"],
    prompt: `Kamu adalah sales copywriter B2B dengan track record tinggi.

Task: Bikin [proposal / pitch] untuk [produk/jasa].

Konteks:
- Produk/jasa: [deskripsi]
- Target klien: [perusahaan / role / industri]
- Pain point klien: [masalah yang lu solve]
- Harga: [range]
- Kompetitor utama: [siapa]

Format:
1. Subject / opening hook (bikin klien mau baca lanjut)
2. Problem statement (tunjukin lu paham masalah mereka)
3. Solusi (fokus ke outcome, bukan fitur)
4. Bukti / social proof
5. Penawaran (jelas, tanpa jualan hard)
6. CTA (langkah berikutnya konkret)
7. PS (opsional, 1 kalimat penutup yang nempel)

Constraint:
- Max 500 kata
- Hindari buzzword: "solusi", "sinergi", "cutting-edge"
- Fokus ke *hasil*, bukan *proses*
- Tone: percaya diri tapi nggak sombong`
  },
  {
    id: "bs4",
    category: "bisnis",
    title: "Analisis Kompetitor",
    desc: "Riset kompetitor dari 5 dimensi strategis.",
    tags: ["competitor", "riset", "strategi"],
    prompt: `Kamu adalah business analyst yang specialist competitive intelligence.

Task: Analisis kompetitor [nama kompetitor] untuk bisnis saya di [industri].

Konteks bisnis saya:
- Produk: [deskripsi]
- Target: [audiens]
- Positioning: [how I want to be seen]

Analisis kompetitor dari 5 dimensi:

1. Product / offering
   - Apa yang mereka jual?
   - Fitur / layanan unggulan?

2. Pricing
   - Model pricing mereka?
   - Positioning harga (premium / mid / budget)?

3. Positioning & messaging
   - Mereka bilang apa di marketing?
   - Siapa target mereka?

4. Kekuatan & kelemahan
   - 3 kekuatan utama
   - 3 kelemahan yang bisa saya exploit

5. Strategi yang bisa saya ambil
   - 3 peluang diferensiasi
   - 1 risk kalau saya head-to-head

Format: tiap dimensi max 5 bullet.

Constraint:
- Kalau ada info yang gua nggak kasih & lu nggak yakin, bilang aja
- Jangan ngarang angka / data spesifik`
  },

  /* ================= KREATIF ================= */
  {
    id: "k1",
    category: "kreatif",
    title: "Brainstorm Ide Konten",
    desc: "20 ide konten dengan angle berbeda.",
    tags: ["brainstorm", "ide", "konten"],
    prompt: `Kamu adalah creative director yang jago brainstorming.

Task: Kasih 20 ide [konten / campaign / konten series] tentang [topik].

Konteks:
- Brand / personal: [deskripsi]
- Target audiens: [detail]
- Platform: [IG / TikTok / YouTube / blog]
- Tujuan: [awareness / engagement / edukasi]

Aturan ide:
- Setiap ide harus punya angle BERBEDA (bukan variasi kecil)
- Mix format: [misal 30% edukasi, 30% entertain, 20% story, 20% opinion]
- Setiap ide ada: judul/hook + 1 kalimat kenapa menarik

Setelah 20 ide, kasih:
- Top 5 rekomendasi (yang paling worth it produksi)
- 1 ide yang paling berani (high risk high reward)

Constraint:
- Hindari ide yang generik ("tips & tricks", "5 hal tentang X")
- Setiap ide harus spesifik, bukan template
- Kalau ada ide yang kontroversial tapi menarik, kasih warning`
  },
  {
    id: "k2",
    category: "kreatif",
    title: "Bikin Story / Narasi",
    desc: "Cerita pendek dengan struktur & pesan yang kuat.",
    tags: ["story", "narasi", "writing"],
    prompt: `Kamu adalah storyteller profesional.

Task: Tulis cerita pendek tentang [tema/premis].

Konteks:
- Genre: [slice of life / sci-fi / thriller / dll]
- Target pembaca: [usia / selera]
- Panjang: [misal 500-800 kata]
- Pesan / tema: [apa yang pengen disampaikan]

Struktur:
1. Hook (paragraf pertama harus bikin mau baca lanjut)
2. Setup (perkenalan tokoh + konflik)
3. Rising action (2-3 beat yang naikin tensi)
4. Climax
5. Resolution (jangan preachy, tunjukin lewat aksi)

Constraint:
- Show, don't tell
- Hindari klise: "sekali lagi", "dengan sekuat tenaga"
- Dialog harus punya fungsi (bukan cuma ngobrol)
- Akhir boleh ambiguous, tapi harus satisfy pembaca`
  },
  {
    id: "k3",
    category: "kreatif",
    title: "Bikin Nama Brand",
    desc: "10 opsi nama brand dengan alasan & cek domain.",
    tags: ["branding", "naming", "creative"],
    prompt: `Kamu adalah brand strategist yang jago bikin nama.

Task: Kasih 10 opsi nama brand untuk [bisnis/produk].

Konteks:
- Bisnis: [deskripsi]
- Target audiens: [detail]
- Nilai utama: [misal: playful, premium, eco-friendly]
- Bahasa: [Indonesia / Inggris / mix]
- Constraint: [misal harus bisa diucapin gampang, max 3 suku kata]

Untuk setiap nama, kasih:
- Nama
- Kenapa cocok (1 kalimat)
- Vibe (formal / playful / modern / dll)
- Estimasi domain: [nama].com ada / kemungkinan ada / kemungkinan nggak

Setelah 10 nama, kasih:
- Top 3 rekomendasi
- 1 nama yang paling unik (high risk high reward)

Constraint:
- Jangan pakai nama yang generic (contoh: "ProX", "Xify")
- Cek dulu apakah nama kedengaran aneh kalau diucapin
- Kalau ada nama yang mirip brand existing, kasih warning`
  },

  /* ================= ANALISIS ================= */
  {
    id: "a1",
    category: "analisis",
    title: "Analisis Data / Statistik",
    desc: "Interpretasi data dengan insight actionable.",
    tags: ["data", "analisis", "insight"],
    prompt: `Kamu adalah data analyst yang jago menerjemahin angka jadi insight.

Data:
"""
[paste data — CSV, tabel, atau deskripsi]
"""

Konteks:
- Data tentang: [apa]
- Periode: [waktu]
- Tujuan analisis: [apa yang mau lu tau]

Task: Analisis data ini.

Format output:
1. Ringkasan eksekutif (3 bullet, bahasa non-teknis)
2. 5 insight utama (tiap insight: apa + kenapa penting)
3. Pola / trend yang kelihatan
4. Anomali (kalau ada)
5. Rekomendasi (3 aksi konkret berdasarkan data)

Constraint:
- Bedakan antara korelasi & kausalitas
- Kalau data nggak cukup buat simpulin X, bilang aja
- Sertakan 1 caveat (batasan analisis)
- Hindari jargon statistik kecuali perlu`
  },
  {
    id: "a2",
    category: "analisis",
    title: "SWOT Analysis",
    desc: "Analisis SWOT dengan actionable insight.",
    tags: ["swot", "strategi", "analisis"],
    prompt: `Kamu adalah strategy consultant.

Task: Bikin SWOT analysis untuk [bisnis/proyek/organisasi].

Konteks:
- Entitas: [deskripsi]
- Industri: [X]
- Tujuan analisis: [apa yang mau dicapai]

Format:

STRENGTHS (internal, positif)
- 4-5 poin, tiap poin ada bukti / contoh

WEAKNESSES (internal, negatif)
- 4-5 poin, tiap poin ada bukti / contoh

OPPORTUNITIES (eksternal, positif)
- 4-5 poin, tiap poin ada konteks

THREATS (eksternal, negatif)
- 4-5 poin, tiap poin ada konteks

Setelah SWOT:
- Matriks strategi SO (Strength + Opportunity)
- Matriks strategi WT (Weakness + Threat)
- 3 aksi prioritas berdasarkan analisis

Constraint:
- Jangan cuma list — kasih insight kenapa poin itu penting
- Kalau ada asumsi, sebutin
- Kaitkan dengan tujuan yang udah disebut`
  },
  {
    id: "a3",
    category: "analisis",
    title: "Analisis Keputusan",
    desc: "Bantu ambil keputusan dengan framework multi-kriteria.",
    tags: ["decision", "framework", "analisis"],
    prompt: `Kamu adalah decision coach yang specialist bantu orang ambil keputusan kompleks.

Task: Bantu saya pilih antara [opsi A] dan [opsi B].

Konteks:
- Situasi: [deskripsi]
- Tujuan utama saya: [apa yang paling penting]
- Batasan: [waktu / budget / resource]
- Risk tolerance: [rendah / sedang / tinggi]

Analisis dengan framework:

1. Kriteria keputusan
   - Apa 5 kriteria yang paling penting?
   - Bobot tiap kriteria (%).

2. Skor
   - Skor A dan B per kriteria (1-5).
   - Total skor berbobot.

3. Red team analysis
   - 3 alasan kenapa A mungkin salah.
   - 3 alasan kenapa B mungkin salah.

4. Regret minimization
   - Kalau 10 tahun dari sekarang, mana yang paling nyesel kalau nggak diambil?

5. Rekomendasi
   - Pilihan gua + alasan.
   - 3 langkah mitigasi kalau pilihan ini nggak sesuai ekspektasi.

Constraint:
- Jangan cuma hitung skor — kasih nuansa
- Kalau ada faktor emosional, sebutin
- Kalau info yang gua kasih kurang, tanya dulu`
  }

];
