/* =========================================================
   Gate Prompting — Quiz Data
   5 level kuis: Level 1, 2, 3, 4, dan Final Test
   ========================================================= */

window.QUIZ_LEVELS = [
  {
    id: "level-1",
    level: 1,
    label: "Level 1 — Fondasi",
    desc: "Uji pemahaman dasar: apa itu prompt, anatomi, kejelasan, kesalahan umum.",
    icon: "🌱"
  },
  {
    id: "level-2",
    level: 2,
    label: "Level 2 — Teknik Dasar",
    desc: "Few-shot, role prompting, constraint, format output, iterasi.",
    icon: "🧩"
  },
  {
    id: "level-3",
    level: 3,
    label: "Level 3 — Lanjutan",
    desc: "Chain of Thought, Tree of Thoughts, self-consistency, chaining, meta-prompting.",
    icon: "🪜"
  },
  {
    id: "level-4",
    level: 4,
    label: "Level 4 — Master",
    desc: "System prompt design, reasoning kompleks, evaluasi, anti-pattern, framework sendiri.",
    icon: "👑"
  },
  {
    id: "final",
    level: 5,
    label: "Final Test",
    desc: "Campuran semua level. 10 soal. Buktiin lu udah master.",
    icon: "🏆"
  }
];

window.QUIZ_DATA = {

  /* ---------- LEVEL 1 ---------- */
  "level-1": [
    {
      q: "Apa definisi paling tepat dari 'prompt'?",
      options: [
        "Pertanyaan yang harus dijawab AI dengan benar",
        "Instruksi atau input yang dikasih ke AI buat menghasilkan output",
        "Kode program yang dipakai buat training AI",
        "Nama lain dari AI itu sendiri"
      ],
      answer: 1,
      explain: "Prompt = instruksi / input yang lu kasih ke AI. Kualitas prompt nentuin kualitas output."
    },
    {
      q: "Komponen 'Context' di dalam prompt berfungsi buat...",
      options: [
        "Ngasih tahu AI siapa dirinya",
        "Ngasih tahu AI siapa audiens / situasi / batasan",
        "Nentuin format output",
        "Nambahin panjang prompt biar keliatan serius"
      ],
      answer: 1,
      explain: "Context = siapa audiensnya, buat apa, ada batasan apa. Ini yang bikin jawaban AI nyambung."
    },
    {
      q: "Mana prompt yang paling spesifik?",
      options: [
        "Bikin artikel yang bagus.",
        "Bikin artikel 600 kata tentang AI untuk UMKM, target pemilik usaha kecil non-teknis, gaya santai, format judul + 4 subjudul.",
        "Tolong bikin artikel dong.",
        "Bikin artikel tentang teknologi."
      ],
      answer: 1,
      explain: "Prompt B punya panjang spesifik, audiens jelas, gaya jelas, dan format output jelas. Ini yang disebut spesifik."
    },
    {
      q: "Kesalahan paling umum yang bikin output AI generik adalah...",
      options: [
        "Prompt terlalu panjang",
        "Kurang konteks (siapa, buat apa, kenapa)",
        "Pakai bahasa Inggris",
        "Nggak pakai emoji"
      ],
      answer: 1,
      explain: "90% output generik terjadi karena konteks kurang. AI nebak-nebak, hasilnya pun generik."
    },
    {
      q: "Prinsip 'spesifik > panjang' artinya...",
      options: [
        "Prompt harus selalu pendek",
        "Prompt yang jelas & terukur lebih baik daripada prompt panjang yang muter-muter",
        "Panjang prompt nggak ngaruh sama sekali",
        "Prompt harus selalu pakai angka"
      ],
      answer: 1,
      explain: "Yang penting bukan panjangnya, tapi kejelasannya. Prompt 100 kata yang spesifik > prompt 300 kata yang ambigu."
    },
    {
      q: "Kalau output AI jelek, langkah pertama yang paling masuk akal?",
      options: [
        "Ganti AI lain",
        "Nyerah, AI-nya emang nggak bisa",
        "Cek prompt: apakah task, konteks, format, constraint-nya udah jelas?",
        "Ketik ulang prompt persis sama berulang-ulang"
      ],
      answer: 2,
      explain: "Sebelum nyalahin AI, cek prompt dulu. 90% kasus masalahnya di prompt, bukan di AI."
    }
  ],

  /* ---------- LEVEL 2 ---------- */
  "level-2": [
    {
      q: "Few-shot prompting artinya...",
      options: [
        "Nulis prompt sependek mungkin",
        "Kasih 2-5 contoh dulu sebelum minta AI ngerjain task",
        "Nanya AI beberapa kali",
        "Pakai bahasa gaul"
      ],
      answer: 1,
      explain: "Few-shot = kasih beberapa contoh pola. AI bakal ngikutin pola yang lu kasih."
    },
    {
      q: "Kapan role prompting paling berguna?",
      options: [
        "Buat task simpel yang jawabannya tunggal",
        "Buat task yang punya banyak cara ngejawab & butuh gaya/tone spesifik",
        "Selalu, di semua task",
        "Nggak pernah, role itu cuma dekorasi"
      ],
      answer: 1,
      explain: "Role berguna kalau ada banyak cara jawab task-nya, atau kalau gaya/tone penting. Task simpel nggak butuh role."
    },
    {
      q: "Mana role yang PALING efektif?",
      options: [
        "Kamu adalah ahli marketing.",
        "Kamu adalah growth marketer yang 5 tahun terakhir fokus di B2B SaaS untuk startup seed-stage Asia Tenggara.",
        "Kamu adalah orang pintar.",
        "Kamu adalah AI yang membantu."
      ],
      answer: 1,
      explain: "Role yang efektif = spesifik + konteks jelas. 'Ahli marketing' terlalu luas, efeknya nggak kerasa."
    },
    {
      q: "Constraint 'negatif' contohnya adalah...",
      options: [
        "Sertakan minimal 3 contoh",
        "Pakai tone formal",
        "Hindari jargon teknis",
        "Akhiri dengan pertanyaan"
      ],
      answer: 2,
      explain: "Constraint negatif = apa yang TIDAK BOLEH ada. Contoh: 'hindari jargon', 'jangan pakai emoji'."
    },
    {
      q: "Berapa jumlah constraint yang ideal?",
      options: [
        "Sebanyak mungkin, biar output presisi",
        "Max 7-8 constraint",
        "Cuma 1",
        "Nggak perlu constraint"
      ],
      answer: 1,
      explain: "Terlalu banyak constraint bikin output kaku. Max 7-8, dan pastiin nggak ada yang konflik."
    },
    {
      q: "Format output yang paling cocok buat integrasi ke aplikasi / automation adalah...",
      options: [
        "Paragraf panjang",
        "Bullet points",
        "JSON valid",
        "Emoji"
      ],
      answer: 2,
      explain: "JSON = machine-readable. Kalau outputnya bakal diproses code, minta AI kasih JSON valid."
    }
  ],

  /* ---------- LEVEL 3 ---------- */
  "level-3": [
    {
      q: "Chain of Thought (CoT) paling berguna buat...",
      options: [
        "Nulis caption Instagram",
        "Soal matematika / logika kompleks",
        "Nyari nama domain",
        "Bikin warna"
      ],
      answer: 1,
      explain: "CoT bikin AI nunjukin langkah berpikir, ningkatin akurasi buat reasoning kompleks."
    },
    {
      q: "Frasa sakti buat ngaktifin CoT adalah...",
      options: [
        "\"Jawab secepat mungkin\"",
        "\"Pikirkan langkah demi langkah\"",
        "\"Bikin yang bagus\"",
        "\"Pakai bahasa formal\""
      ],
      answer: 1,
      explain: "\"Pikirkan langkah demi langkah\" (let's think step by step) adalah frasa kunci CoT."
    },
    {
      q: "Beda utama ToT (Tree of Thoughts) dan CoT adalah...",
      options: [
        "ToT pakai bahasa Inggris, CoT bahasa Indonesia",
        "ToT eksplor beberapa jalur solusi & bandingin, CoT satu jalur linear",
        "CoT lebih rumit dari ToT",
        "Nggak ada bedanya"
      ],
      answer: 1,
      explain: "ToT = banyak jalur + evaluasi. CoT = satu jalur berpikir linear."
    },
    {
      q: "Self-consistency itu teknik...",
      options: [
        "Minta AI ngulang jawaban sampai bener",
        "Cross-check output AI dengan AI sendiri (multi-run / multi-perspective)",
        "Ngebandingin AI A vs AI B",
        "Nanya AI 2x buat mastiin"
      ],
      answer: 1,
      explain: "Self-consistency = jalanin task beberapa kali / sudut pandang berbeda, lihat apakah konsisten."
    },
    {
      q: "Prompt chaining artinya...",
      options: [
        "Nulis 1 prompt super panjang",
        "Pecah task jadi rantai prompt kecil (output N jadi input N+1)",
        "Copy prompt orang lain",
        "Spam prompt yang sama"
      ],
      answer: 1,
      explain: "Chaining = pecah task besar jadi beberapa prompt berurutan. Tiap prompt fokus 1 langkah."
    },
    {
      q: "Meta-prompting adalah teknik di mana...",
      options: [
        "Lu nulis prompt buat AI lain",
        "Lu minta AI nulis prompt buat task tertentu",
        "Lu copy prompt dari internet",
        "Lu nge-test prompt"
      ],
      answer: 1,
      explain: "Meta-prompting = minta AI nulis prompt. AI 'tahu' pola prompt yang efektif, jadi bisa bantu lu nulis."
    }
  ],

  /* ---------- LEVEL 4 ---------- */
  "level-4": [
    {
      q: "System prompt itu...",
      options: [
        "Prompt pertama yang lu ketik",
        "Instruksi level atas yang berlaku buat seluruh sesi",
        "Prompt yang paling panjang",
        "Prompt yang nggak penting"
      ],
      answer: 1,
      explain: "System prompt = 'aturan main' AI sepanjang sesi. Beda dari prompt biasa yang per-task."
    },
    {
      q: "Komponen berikut yang BUKAN bagian dari system prompt yang bagus adalah...",
      options: [
        "Identity (siapa AI)",
        "Limitations (yang nggak boleh)",
        "Emoji di setiap baris",
        "Output format"
      ],
      answer: 2,
      explain: "Emoji bukan komponen system prompt. 7 komponen: identity, purpose, capabilities, limitations, tone, behavior, output."
    },
    {
      q: "Framework COMPLEX buat reasoning kompleks, huruf 'M' artinya...",
      options: [
        "Monitor output",
        "Multiple paths (eksplor beberapa jalur)",
        "Minimize token",
        "Mock input"
      ],
      answer: 1,
      explain: "COMPLEX: Clarify, Outline, Multiple paths, Pick & deepen, Logic check, Edge cases, X-verify."
    },
    {
      q: "Anti-pattern prompt berikut yang PALING sering bikin output jelek...",
      options: [
        "Kurang konteks & format nggak jelas",
        "Pakai emoji",
        "Prompt dalam bahasa Indonesia",
        "Pakai role"
      ],
      answer: 0,
      explain: "Kurang konteks & format nggak jelas = 2 dari 3 akar prompt jelek. (Yang ketiga: constraint konflik.)"
    },
    {
      q: "Kalau prompt punya banyak constraint yang saling bertentangan, apa yang terjadi?",
      options: [
        "AI bakal nurut semua",
        "AI bakal pilih satu (sering yang salah) atau output jadi kacau",
        "AI bakal error",
        "Nggak ada efek"
      ],
      answer: 1,
      explain: "Konflik constraint bikin AI milih satu sisi, sering kali bukan yang lu maksud. Selalu cek konsistensi."
    },
    {
      q: "Cara paling tepat ngukur apakah prompt lu beneran bagus adalah...",
      options: [
        "Coba sekali, kalau hasilnya enak diliat berarti bagus",
        "Bikin test set & rubrik penilaian, jalanin berkali-kali",
        "Tanya teman",
        "Lihat panjang prompt"
      ],
      answer: 1,
      explain: "Prompt engineer profesional pakai test set + rubrik. Test: happy path, edge case, adversarial."
    }
  ],

  /* ---------- FINAL TEST ---------- */
  "final": [
    {
      q: "Prompt lu hasilnya generic. Langkah PALING efektif?",
      options: [
        "Tambahin role bombastis",
        "Tambahin konteks: siapa audiens, buat apa, format apa",
        "Ulangi prompt 5x",
        "Ganti ke AI lain"
      ],
      answer: 1,
      explain: "Kurang konteks = akar output generik. Fix konteks dulu."
    },
    {
      q: "Kapan lu pakai few-shot dibanding zero-shot?",
      options: [
        "Selalu pakai few-shot",
        "Saat task punya format / gaya spesifik yang susah dijelaskan dengan kata-kata",
        "Saat mau hemat token",
        "Kapan aja, sama aja"
      ],
      answer: 1,
      explain: "Few-shot powerful saat format/gaya task spesifik. Task simpel cukup zero-shot."
    },
    {
      q: "CoT + self-consistency = kombinasi yang bagus buat...",
      options: [
        "Nulis puisi pendek",
        "Task reasoning kompleks yang butuh akurasi tinggi",
        "Nge-hemat token",
        "Bikin caption"
      ],
      answer: 1,
      explain: "CoT = reasoning step by step. Self-consistency = cross-check. Kombinasi ini powerful buat task high-stakes."
    },
    {
      q: "Prompt chaining PALING cocok buat...",
      options: [
        "Task simpel 1 langkah",
        "Task kompleks dengan tahap jelas (riset → tulis → edit)",
        "Nulis tweet",
        "Nanya cuaca"
      ],
      answer: 1,
      explain: "Chaining = pecah task besar jadi rantai. Cocok buat task yang punya tahap berurutan."
    },
    {
      q: "Meta-prompting itu...",
      options: [
        "Nanya AI tentang AI",
        "Minta AI nulis prompt buat task tertentu",
        "Prompt yang nggak dipakai",
        "Prompt buat image generator"
      ],
      answer: 1,
      explain: "Meta-prompting = minta AI nulis prompt. Berguna buat belajar & task kompleks."
    },
    {
      q: "System prompt yang bagus sebaiknya...",
      options: [
        "Se-pendek mungkin",
        "Punya 7 komponen: identity, purpose, capabilities, limitations, tone, behavior, output",
        "Cuma identity + task",
        "Pakai bahasa Inggris"
      ],
      answer: 1,
      explain: "7 komponen ini fondasi system prompt yang solid buat chatbot / agent."
    },
    {
      q: "Anti-pattern 'over-constraint' ditandai dengan...",
      options: [
        "Output AI kaku & keliatan 'berusaha'",
        "Output AI terlalu panjang",
        "Output AI error",
        "AI nolak jawab"
      ],
      answer: 0,
      explain: "Kalau outputnya berasa 'dipaksa', lu over-constraint. Max 7-8 constraint, sisanya biarin AI improvisasi."
    },
    {
      q: "Cara paling tepat nge-test prompt itu...",
      options: [
        "Coba sekali, hasilnya bagus berarti OK",
        "Bikin test set (happy, edge, adversarial) + rubrik penilaian",
        "Tanya ke teman",
        "Lihat panjang prompt"
      ],
      answer: 1,
      explain: "Prompt bagus = hasil test, bukan feeling. Test set + rubrik = cara profesional."
    },
    {
      q: "Kapan lu NGGAK perlu pakai framework COMPLEX (Clarify, Outline, Multiple paths, dst)?",
      options: [
        "Buat task simpel 1 langkah yang bisa diselesaiin dengan prompt pendek",
        "Buat keputusan high-stakes",
        "Buat analisis multi-faktor",
        "Selalu perlu"
      ],
      answer: 0,
      explain: "COMPLEX itu berat. Buat task simpel, malah overkill. Pakai sesuai kebutuhan."
    },
    {
      q: "Framework prompting sendiri paling berguna kalau...",
      options: [
        "Lu sesekali pakai AI buat task ad-hoc",
        "Lu sering ngerjain task yang mirip & butuh konsistensi",
        "Lu baru pertama pakai AI",
        "Lu nggak suka nulis"
      ],
      answer: 1,
      explain: "Framework sendiri = efisiensi + konsistensi. Berguna kalau task-nya repetitif."
    }
  ]
};
