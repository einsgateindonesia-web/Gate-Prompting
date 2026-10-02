/* =========================================================
   Gate Prompting — Blog Data
   6 artikel pendek tentang prompting
   ========================================================= */

window.BLOG = [
  {
    id: "kenapa-prompt-penting",
    title: "Kenapa Prompt Itu Penting (Lebih dari yang Lu Kira)",
    excerpt: "AI bukan kurang pinter — kebanyakan masalahnya di prompt. Ini kenapa.",
    category: "Fondasi",
    icon: "🎯",
    date: "2025-01-15",
    readTime: "4 menit",
    content: `
      <p>Kalau lu sering denger orang bilang "AI-nya kurang pinter", kemungkinan besar masalahnya bukan di AI. Masalahnya di <strong>prompt</strong>.</p>

      <h2>Analogi Sederhana</h2>
      <p>Bayangin lu punya asisten baru. Dia super pinter, tapi belum kenal lu. Kalau lu bilang "bikin laporan", dia bakal nebak-nebak: laporan apa? buat siapa? berapa halaman? gaya formal atau santai?</p>
      <p>Asisten yang sama, tapi dengan instruksi jelas ("bikin laporan 5 halaman, buat direksi, fokus ke penjualan Q3, tone formal"), bakal ngasih hasil yang jauh lebih pakai.</p>

      <h2>Garbage In, Garbage Out</h2>
      <p>Ini prinsip klasik di dunia komputasi. Input jelek = output jelek. AI bukan pengecualian.</p>
      <p>Sebagian besar orang nulis prompt dalam 5 detik, terus heran kenapa hasilnya generic. Padahal kalau lu invest 30 detik buat mikir konteks, hasilnya bisa 10x lebih bagus.</p>

      <h2>3 Alasan Prompt Penting</h2>
      <ul>
        <li><strong>AI nggak bisa baca pikiran.</strong> Dia cuma tahu apa yang lu kasih.</li>
        <li><strong>Output = cermin input.</strong> Prompt ambigu → output ambigu.</li>
        <li><strong>Iterasi itu murah.</strong> Ganti prompt 5x lebih cepet daripada nunggu output bagus dari prompt jelek.</li>
      </ul>

      <h2>Mulai dari Mana?</h2>
      <p>Kalau lu baru mulai, hafalin 4 komponen ini: <strong>Role, Task, Context, Format</strong>. Pastiin minimal 3 dari 4 ada di setiap prompt lu. Efeknya langsung kerasa.</p>
      <p>Setelah itu, pelajarin teknik-teknik lain di materi Gate Prompting. Progresif, nggak perlu buru-buru.</p>
    `
  },
  {
    id: "kesalahan-prompt-pemula",
    title: "7 Kesalahan Prompt yang Bikin Output AI Jelek",
    excerpt: "Dari prompt terlalu pendek sampai lupa format output. Cek satu-satu.",
    category: "Tips",
    icon: "⚠️",
    date: "2025-01-20",
    readTime: "5 menit",
    content: `
      <p>Setelah ngobrol sama ratusan orang yang pakai AI, gua liat pola kesalahan yang sama berulang. Ini 7 yang paling sering.</p>

      <h2>1. Prompt Terlalu Pendek</h2>
      <p>"Bikin artikel." Itu bukan prompt, itu undangan buat AI nebak. Minimal kasih: topik, audiens, panjang, format.</p>

      <h2>2. Nggak Kasih Konteks</h2>
      <p>AI nggak tahu lu siapa, buat siapa, dan kenapa. Konteks = 80% kualitas output.</p>

      <h2>3. Banyak Task Sekaligus</h2>
      <p>"Ringkas, terjemahin, bikin thread twitter, kasih hashtag." Terlalu banyak. Pecah jadi 4 prompt. Atau pakai prompt chaining.</p>

      <h2>4. Lupa Format Output</h2>
      <p>Kalau lu nggak bilang formatnya, AI bakal pilih default — biasanya paragraf panjang yang males dibaca. Mau bullet? Bilang. Mau tabel? Bilang.</p>

      <h2>5. Ngarep AI Baca Pikiran</h2>
      <p>AI nggak tahu lu pengen hasilnya formal atau santai, panjang atau pendek, sampai lu bilang.</p>

      <h2>6. Nggak Iterasi</h2>
      <p>Prompt sekali jadi itu mitos. Prompt bagus biasanya hasil 3-5 iterasi. Kalau hasil pertama kurang, jangan nyerah — refine.</p>

      <h2>7. Salin Prompt Orang Lain</h2>
      <p>Prompt yang works buat orang lain belum tentu works buat lu. Konteksnya beda. Selalu adaptasi.</p>

      <h2>Pola Umum</h2>
      <p>Semua kesalahan di atas punya akar yang sama: <em>AI nggak punya konteks yang cukup</em>. Tugas lu sebagai prompt writer adalah ngasih konteks itu.</p>
    `
  },
  {
    id: "few-shot-vs-zero-shot",
    title: "Few-Shot vs Zero-Shot: Kapan Pakai yang Mana?",
    excerpt: "Nggak semua task butuh contoh. Tapi beberapa butuh banget.",
    category: "Teknik",
    icon: "🎓",
    date: "2025-01-25",
    readTime: "4 menit",
    content: `
      <p>Ini salah satu pertanyaan paling sering: <em>"kapan gua perlu kasih contoh ke AI?"</em></p>

      <h2>Zero-Shot: Cuma Instruksi</h2>
      <p>Lu kasih instruksi, tanpa contoh. AI nebak dari pemahaman umumnya.</p>
      <p><strong>Cocok buat:</strong> task simpel, well-defined, jawabannya jelas.</p>
      <p><strong>Contoh:</strong> "Terjemahkan ini ke Inggris." "Ringkas jadi 3 bullet."</p>

      <h2>Few-Shot: Kasih 2-5 Contoh</h2>
      <p>Lu kasih contoh dulu, baru minta AI ngerjain task baru dengan pola yang sama.</p>
      <p><strong>Cocok buat:</strong> task dengan format spesifik, klasifikasi custom, atau gaya bahasa tertentu yang susah dijelaskan dengan kata-kata.</p>
      <p><strong>Contoh:</strong> Ekstraksi data dari teks bebas, nulis caption dengan gaya brand tertentu, klasifikasi review.</p>

      <h2>Kenapa Few-Shot Works?</h2>
      <p>AI itu pattern matcher yang sangat bagus. Kasih pola, dia bakal ngikutin. Bahkan kalau pola-nya susah dijelasin secara eksplisit.</p>

      <h2>Berapa Banyak Contoh?</h2>
      <ul>
        <li><strong>2-3:</strong> task simpel dengan pola konsisten.</li>
        <li><strong>4-6:</strong> task dengan variasi (misal tone berbeda).</li>
        <li><strong>7+:</strong> jarang perlu. Kalau butuh banyak, task-nya mungkin perlu dipecah.</li>
      </ul>

      <h2>Tips</h2>
      <p>Konsistensi contoh = konsistensi output. Satu contoh jelek bisa ngerusak seluruh hasil. Cek dulu semua contoh lu.</p>
    `
  },
  {
    id: "chain-of-thought-simpel",
    title: "Chain of Thought: Satu Frasa, Akurasi Naik Drastis",
    excerpt: "Cuma tambahin 'pikirkan langkah demi langkah'. Efeknya besar banget.",
    category: "Teknik",
    icon: "🪜",
    date: "2025-02-01",
    readTime: "5 menit",
    content: `
      <p>Ada satu teknik prompting yang efeknya besar banget, tapi caranya cuma nambahin 1 frasa. Namanya <strong>Chain of Thought</strong> (CoT).</p>

      <h2>Frasa Saktinya</h2>
      <p>Cukup tambahin: <em>"Pikirkan langkah demi langkah sebelum kasih jawaban akhir."</em></p>
      <p>Selesai. Itu doang.</p>

      <h2>Kenapa Works?</h2>
      <p>AI generatif itu pada dasarnya prediktor kata berikutnya. Kalau lu minta jawaban langsung, dia "lompat" ke kesimpulan — sering kali salah. Kalau lu kasih ruang buat "mikir", dia ngumpulin konteks internal dulu, baru simpulin.</p>
      <p>Analoginya kayak lu ngerjain soal matematika. Kalau langsung jawab, sering salah. Kalau nulis di kertas dulu, lebih akurat.</p>

      <h2>Contoh Nyata</h2>
      <p><strong>Tanpa CoT:</strong></p>
      <pre>Q: Toko A jual buku Rp45rb diskon 20%, kena pajak 10%. Harga akhir?
A: Rp39.600</pre>

      <p><strong>Dengan CoT:</strong></p>
      <pre>Q: [sama] + "Pikirkan langkah demi langkah."
A: 
1. Harga awal: Rp45.000
2. Diskon: Rp45.000 × 0.2 = Rp9.000
3. Setelah diskon: Rp45.000 - Rp9.000 = Rp36.000
4. Pajak: Rp36.000 × 0.1 = Rp3.600
5. Harga akhir: Rp36.000 + Rp3.600 = Rp39.600</pre>
      <p>Lebih lambat, tapi jauh lebih reliable. Dan kalau ada error, lu bisa spot di langkah mana.</p>

      <h2>Kapan CoT Berguna</h2>
      <ul>
        <li>Matematika & logika</li>
        <li>Analisis multi-faktor</li>
        <li>Debugging</li>
        <li>Perencanaan</li>
        <li>Keputusan kompleks</li>
      </ul>

      <h2>Kapan Nggak Perlu</h2>
      <p>Buat task simpel / faktual, CoT cuma bikin output panjang tanpa nambah akurasi. "Terjemahkan 'hello'" nggak butuh step by step.</p>
    `
  },
  {
    id: "system-prompt-chatbot",
    title: "Bikin System Prompt Buat Chatbot: Panduan 7 Komponen",
    excerpt: "Kalau lu mau bikin chatbot custom, ini fondasi yang wajib lu kuasain.",
    category: "Lanjutan",
    icon: "🤖",
    date: "2025-02-08",
    readTime: "6 menit",
    content: `
      <p>System prompt itu instruksi level atas yang berlaku buat seluruh sesi. Beda dari prompt biasa yang lu ketik per-task, system prompt itu "aturan main" AI dari awal.</p>

      <h2>Kapan Lu Butuh System Prompt?</h2>
      <ul>
        <li>Bikin custom chatbot (customer service, tutor, asisten)</li>
        <li>Bikin AI agent dengan persona tetap</li>
        <li>Setup API call di aplikasi</li>
        <li>Kerja tim — biar output konsisten</li>
      </ul>

      <h2>7 Komponen Wajib</h2>

      <h3>1. Identity</h3>
      <p>Nama & peran AI. Contoh: "Kamu adalah 'Asisten Finansial', asisten edukasi keuangan pribadi."</p>

      <h3>2. Purpose</h3>
      <p>Tujuan utama. Contoh: "Edukasi, bukan kasih saran investasi spesifik."</p>

      <h3>3. Capabilities</h3>
      <p>Yang bisa dilakukan. Contoh: "Jelasin konsep, bantu hitung simulasi, review anggaran."</p>

      <h3>4. Limitations</h3>
      <p>Yang nggak boleh. Contoh: "Jangan kasih rekomendasi saham spesifik."</p>

      <h3>5. Tone & Style</h3>
      <p>Gaya bicara. Contoh: "Bahasa Indonesia informal tapi sopan, hindari jargon."</p>

      <h3>6. Behavior Rules</h3>
      <p>Aturan perilaku. Contoh: "Kalau nggak yakin, bilang 'saya nggak yakin'."</p>

      <h3>7. Output Format</h3>
      <p>Format default. Contoh: "Markdown, angka format Indonesia (Rp1.000.000)."</p>

      <h2>Iterasi Itu Normal</h2>
      <p>System prompt bagus itu hasil iterasi. Kasih 10 pertanyaan representatif (on-topic, off-topic, edge case), lihat hasilnya, refine.</p>

      <h2>Kesalahan Umum</h2>
      <ul>
        <li>Terlalu panjang (di atas 1000 kata, AI bisa "lupa" bagian awal)</li>
        <li>Kontradiksi antar aturan</li>
        <li>Vague ("jadi yang baik" tanpa definisi)</li>
        <li>Over-constraint (terlalu banyak aturan, output kaku)</li>
      </ul>
    `
  },
  {
    id: "evaluasi-prompt",
    title: "Gimana Tahu Prompt Lu Beneran Bagus?",
    excerpt: "Feeling doang nggak cukup. Ini cara ngukur prompt dengan serius.",
    category: "Master",
    icon: "📊",
    date: "2025-02-15",
    readTime: "5 menit",
    content: `
      <p>Prompt engineer amatir nge-judge prompt dari 1-2 kali coba. Profesional bikin <strong>test suite</strong>. Bedanya: konsistensi.</p>

      <h2>Kenapa Perlu Evaluasi?</h2>
      <p>Prompt yang keliatan bagus di 1 test case bisa gagal total di kasus lain. Tanpa test yang sistematis, lu cuma nebak-nebak.</p>

      <h2>1. Test Set Representatif</h2>
      <p>Bikin 10-20 test case yang mencakup:</p>
      <ul>
        <li><strong>Happy path (60%)</strong> — input normal, sesuai ekspektasi.</li>
        <li><strong>Edge cases (25%)</strong> — input aneh tapi valid.</li>
        <li><strong>Adversarial (15%)</strong> — input yang sengaja nyoba break prompt.</li>
      </ul>

      <h2>2. Rubrik Penilaian</h2>
      <p>Bikin kriteria dengan bobot. Contoh buat task "generate caption":</p>
      <ul>
        <li>Relevansi dengan brief — 30%</li>
        <li>Panjang sesuai constraint — 15%</li>
        <li>Tone sesuai — 20%</li>
        <li>Bebas dari klise — 15%</li>
        <li>Call to action kuat — 20%</li>
      </ul>
      <p>Skor total &gt; 4.0 = lulus. &lt; 3.5 = perlu revisi prompt.</p>

      <h2>3. A/B Testing</h2>
      <p>Punya 2 versi prompt? Jalanin di test set yang sama, bandingin skor. Kadang fix di 1 kasus malah ngerusak kasus lain.</p>

      <h2>4. Regression Testing</h2>
      <p>Setiap kali ubah prompt, jalanin ulang <em>semua</em> test case. Ini kenapa profesional simpen test suite.</p>

      <h2>5. LLM-as-Judge</h2>
      <p>Pakai AI buat nilai output AI. Kelemahan: bias. Pakai sebagai tambahan, bukan pengganti human review.</p>

      <h2>Metrik Sederhana</h2>
      <ul>
        <li><strong>Success rate</strong> — berapa % output yang lu terima tanpa edit.</li>
        <li><strong>Edit distance</strong> — rata-rata berapa banyak lu harus edit.</li>
        <li><strong>Time to result</strong> — berapa lama sampai dapet output yang oke.</li>
      </ul>

      <h2>Kesimpulan</h2>
      <p>Prompt bagus = hasil test, bukan feeling. Mulai dari test set kecil (5-10 case), iterasi dari situ.</p>
    `
  }
];
