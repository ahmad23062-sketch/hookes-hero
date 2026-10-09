// CONFIGURATIONS & GAME DATA
const CONFIG = {
  COINS_PER_MATERIAL: 50,
  COINS_PER_QUEST: 100,
  MAX_MATERIALS: 7,
  MAX_QUESTS: 10
};

// DATA MATERI AKADEMI
const materialsData = [
  { id: 'm1', title: '1. Dunia Elastisitas', time: '5 Mnt', img: 'assets/ui-dashboard-materi.jpg', summary: 'Pengenalan benda elastis dan plastis.', content: '<p>Benda elastis adalah benda yang dapat kembali ke bentuk semula setelah gaya luar dihilangkan. Contohnya pegas dan karet. Benda plastis tidak dapat kembali ke bentuk semula (misal: tanah liat).</p>' },
  { id: 'm2', title: '2. Mengenal Pegas & Konstanta', time: '5 Mnt', img: 'assets/demonstrasi-hukum-hooke.jpg', summary: 'Konstanta pegas (k) menentukan kekakuan pegas.', content: '<p>Konstanta pegas ($k$) menunjukkan tingkat kekakuan pegas. Semakin besar nilai $k$, semakin kaku pegas tersebut. Satuan $k$ adalah N/m.</p>' },
  { id: 'm3', title: '3. Rahasia Hukum Hooke', time: '7 Mnt', img: 'assets/demonstrasi-hukum-hooke.jpg', summary: 'Persamaan dasar F = k · Δx.', content: '<p>Hukum Hooke menyatakan gaya pemulih sebanding dengan pertambahan panjang pegas:<br><strong>F = k · Δx</strong><br><em>F</em> = gaya (N), <em>k</em> = konstanta (N/m), <em>Δx</em> = pertambahan panjang (m).</p>' },
  { id: 'm4', title: '4. Grafik Gaya vs Pertambahan Panjang', time: '6 Mnt', img: 'assets/ui-dashboard-materi.jpg', summary: 'Membaca gradien grafik F terhadap Δx.', content: '<p>Pada grafik F (sumbu Y) terhadap Δx (sumbu X), kemiringan (gradien) garis mewakili nilai konstanta pegas ($k$). Luas di bawah grafik mewakili Energi Potensial.</p>' },
  { id: 'm5', title: '5. Pegas Seri dan Paralel', time: '8 Mnt', img: 'assets/demonstrasi-hukum-hooke.jpg', summary: 'Rangkaian kombinasi susunan pegas.', content: '<p><strong>Seri:</strong> 1/k_eq = 1/k₁ + 1/k₂ (pegas makin lunak).<br><strong>Paralel:</strong> k_eq = k₁ + k₂ (pegas makin kaku).</p>' },
  { id: 'm6', title: '6. Energi Potensial Pegas', time: '6 Mnt', img: 'assets/ui-dashboard-materi.jpg', summary: 'Formulasi Ep = 1/2 k (Δx)²', content: '<p>Energi potensial pegas ($E_p$) tersimpan saat pegas diregangkan/ditekan:<br><strong>E_p = ½ k (Δx)²</strong></p>' },
  { id: 'm7', title: '7. Aplikasi Hukum Hooke', time: '5 Mnt', img: 'assets/toko-aksesoris.jpg', summary: 'Penerapan pada suspensi kendaraan & trampolin.', content: '<p>Hukum Hooke dimanfaatkan pada sistem shockbreaker kendaraan bermotor, ketapel, trampolin, hingga timbangan pegas.</p>' }
];

// DATA QUEST
const questsData = [
  { id: 'q1', title: '1. Awakening of Elasticity', desc: 'Konsep dasar elastisitas benda.', q: 'Manakah benda berikut yang tergolong benda elastis?', opt: ['Tanah Liat', 'Pegas Baja', 'Plastisin', 'Kaca'], ans: 1, exp: 'Pegas baja kembali ke bentuk semula setelah diberi gaya.' },
  { id: 'q2', title: '2. The Spring Guardian', desc: 'Konstanta pegas dan tingkat kekakuan.', q: 'Satuan Standar Internasional (SI) untuk konstanta pegas (k) adalah...', opt: ['N·m', 'N/m', 'kg/m', 'Joule'], ans: 1, exp: 'Konstanta pegas diukur dalam Newton per meter (N/m).' },
  { id: 'q3', title: '3. Force Unleashed', desc: 'Perhitungan dasar F = k · Δx.', q: 'Pegas dengan k = 200 N/m ditarik hingga bertambah panjang 0,1 m. Berapa gaya F?', opt: ['20 N', '200 N', '2 N', '0.2 N'], ans: 0, exp: 'F = k · Δx = 200 × 0.1 = 20 N.' },
  { id: 'q4', title: '4. The Graph Decoder', desc: 'Gradien grafik F vs Δx.', q: 'Kemiringan/gradien garis pada grafik F-Δx menyatakan...', opt: ['Energi Potensial', 'Konstanta Pegas (k)', 'Massa Beban', 'Kecepatan'], ans: 1, exp: 'Gradien sumbu Y/X (F/Δx) mewakili nilai k.' },
  { id: 'q5', title: '5. Twin Springs', desc: 'Perhitungan susunan pegas seri.', q: 'Dua pegas identik (k = 100 N/m) disusun Seri. Berapa konstanta penggantinya?', opt: ['200 N/m', '100 N/m', '50 N/m', '25 N/m'], ans: 2, exp: '1/k_eq = 1/100 + 1/100 = 2/100 -> k_eq = 50 N/m.' },
  { id: 'q6', title: '6. Parallel Power', desc: 'Perhitungan susunan pegas paralel.', q: 'Dua pegas identik (k = 100 N/m) disusun Paralel. Berapa konstanta penggantinya?', opt: ['200 N/m', '50 N/m', '100 N/m', '400 N/m'], ans: 0, exp: 'k_eq = k1 + k2 = 100 + 100 = 200 N/m.' },
  { id: 'q7', title: '7. Energy Awakening', desc: 'Hitung Energi Potensial Pegas.', q: 'Jika k = 100 N/m dan Δx = 0.2 m, berapa Energi Potensialnya (Ep)?', opt: ['2 Joule', '4 Joule', '20 Joule', '0.4 Joule'], ans: 0, exp: 'Ep = 1/2 × 100 × (0.2)² = 50 × 0.04 = 2 Joule.' },
  { id: 'q8', title: '8. The Trampoline Mission', desc: 'Aplikasi energi pegas.', q: 'Saat melompat di trampolin, energi apakah yang dimanfaatkan untuk melontarkan tubuh?', opt: ['Energi Listrik', 'Energi Potensial Pegas', 'Energi Kimia', 'Energi Nuklir'], ans: 1, exp: 'Regangan trampolin menyimpan Energi Potensial Pegas.' },
  { id: 'q9', title: '9. Energy Converter', desc: 'Analisis gaya, Δx, dan Ep.', q: 'Jika gaya ditarik 2 kali lebih jauh, Energi Potensial Pegas menjadi...', opt: ['2 kali semula', '4 kali semula', 'Tetap', 'Half semula'], ans: 1, exp: 'Ep berbanding lurus dengan kuadrat Δx, jadi (2)² = 4 kali.' },
  { id: 'q10', title: '10. Ultimate Hooke Boss', desc: 'Tantangan gabungan Hukum Hooke.', q: 'Dua pegas paralel (k=200 N/m) ditarik gaya 80 N. Berapa Δx totalnya?', opt: ['0.1 m', '0.2 m', '0.4 m', '0.8 m'], ans: 0, exp: 'k_paralel = 400 N/m. Δx = F / k = 80 / 400 = 0.2 m... (Cek: 80/400 = 0.2 m).' }
];

// DATA TOKO AKSESORI
const shopItems = [
  { id: 'acc_hat', name: 'Topi Pahlawan 🧢', price: 100, icon: '🧢' },
  { id: 'acc_glasses', name: 'Kacamata Sains 🕶️', price: 150, icon: '🕶️' },
  { id: 'acc_crown', name: 'Mahkota Pegas 👑', price: 300, icon: '👑' }
];

// PLAYER STATE
let gameState = {
  name: '',
  gender: 'boy',
  coins: 0,
  maxLevelUnlocked: 1,
  readMaterials: [],
  claimedMaterials: [],
  completedQuests: [],
  claimedQuests: [],
  inventory: [],
  equippedAcc: null
};

// INITIALIZATION
window.onload = function() {
  loadFromLocalStorage();
  if (gameState.name) {
    showMainApp();
  } else {
    document.getElementById('view-landing').classList.remove('hidden');
  }
};

function saveToLocalStorage() {
  localStorage.setItem('hookes_hero_data', JSON.stringify(gameState));
  updateUI();
}

function loadFromLocalStorage() {
  const saved = localStorage.getItem('hookes_hero_data');
  if (saved) {
    gameState = JSON.parse(saved);
  }
}

// REGISTRASI & AVATAR
function selectAvatar(gender, el) {
  gameState.gender = gender;
  document.querySelectorAll('.avatar-option').forEach(opt => opt.classList.remove('selected'));
  el.classList.add('selected');
}

function startGame() {
  const nameInput = document.getElementById('player-name-input').value.trim();
  if (!nameInput) {
    alert('Masukkan nama kamu terlebih dahulu!');
    return;
  }
  gameState.name = nameInput;
  saveToLocalStorage();
  showMainApp();
}

function showMainApp() {
  document.getElementById('view-landing').classList.add('hidden');
  document.getElementById('main-header').classList.remove('hidden');
  document.getElementById('main-nav').classList.remove('hidden');
  switchTab('dashboard');
}

// NAVIGATION
function switchTab(tabId) {
  document.querySelectorAll('.view').forEach(v => v.classList.add('hidden'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  
  document.getElementById(`view-${tabId}`).classList.remove('hidden');
  
  if (tabId === 'akademi') renderAkademi();
  if (tabId === 'peta') renderPeta();
  if (tabId === 'toko') renderToko();
  if (tabId === 'profil') renderProfil();
  
  updateUI();
}

// UPDATE UI GLOBAL
function updateUI() {
  const avatarSymbol = gameState.gender === 'boy' ? '👦' : '👧';
  document.getElementById('coin-count').innerText = gameState.coins;
  document.getElementById('header-username').innerText = gameState.name;
  document.getElementById('header-avatar').innerText = avatarSymbol;
  
  // Dashboard Update
  document.getElementById('dash-username').innerText = gameState.name;
  document.getElementById('dash-avatar').innerText = avatarSymbol;
  document.getElementById('dash-max-level').innerText = gameState.maxLevelUnlocked;
  document.getElementById('dash-coins').innerText = gameState.coins;
  document.getElementById('dash-materials-done').innerText = `${gameState.claimedMaterials.length}/${CONFIG.MAX_MATERIALS}`;
  document.getElementById('dash-quests-done').innerText = `${gameState.completedQuests.length}/${CONFIG.MAX_QUESTS}`;
  
  const accSymbol = gameState.equippedAcc ? shopItems.find(i => i.id === gameState.equippedAcc)?.icon || '' : '';
  document.getElementById('equipped-acc-layer').innerText = accSymbol;
  document.getElementById('shop-equipped-acc').innerText = accSymbol;
  document.getElementById('shop-avatar').innerText = avatarSymbol;
}

// AKADEMI PEGAS
function renderAkademi() {
  const container = document.getElementById('materials-list');
  container.innerHTML = '';
  
  materialsData.forEach(mat => {
    const isDone = gameState.claimedMaterials.includes(mat.id);
    const card = document.createElement('div');
    card.className = 'card-item';
    card.innerHTML = `
      <div>
        <img src="${mat.img}" alt="${mat.title}" onerror="this.src='https://via.placeholder.com/300x140?text=Hooke%27s+Hero'">
        <h3>${mat.title}</h3>
        <p style="font-size:0.8rem; color:#64748b; margin: 5px 0;">⏱️ ${mat.time}</p>
        <p style="font-size:0.9rem;">${mat.summary}</p>
      </div>
      <button class="btn-secondary" style="margin-top:10px;" onclick="openMaterial('${mat.id}')">
        ${isDone ? '✅ Selesai (Baca Ulang)' : '📖 Baca Materi'}
      </button>
    `;
    container.appendChild(card);
  });
}

function openMaterial(id) {
  const mat = materialsData.find(m => m.id === id);
  if (!mat) return;
  
  document.getElementById('mat-modal-title').innerText = mat.title;
  document.getElementById('mat-modal-body').innerHTML = mat.content;
  
  const claimBtn = document.getElementById('claim-mat-btn');
  const isClaimed = gameState.claimedMaterials.includes(id);
  
  if (isClaimed) {
    claimBtn.innerText = 'SELESAI DIBACA (HADIAH SUDAH DIKLAIM)';
    claimBtn.disabled = true;
    claimBtn.onclick = null;
  } else {
    claimBtn.innerText = 'TANDAI SELESAI & KLAIM 50 KOIN 🪙';
    claimBtn.disabled = false;
    claimBtn.onclick = function() {
      gameState.claimedMaterials.push(id);
      gameState.coins += CONFIG.COINS_PER_MATERIAL;
      saveToLocalStorage();
      alert('Selamat! Kamu mendapatkan +50 Koin 🪙');
      closeMaterialModal();
      renderAkademi();
    };
  }
  
  document.getElementById('material-modal').classList.remove('hidden');
}

function closeMaterialModal() {
  document.getElementById('material-modal').classList.add('hidden');
}

// PETA QUEST
function renderPeta() {
  const container = document.getElementById('quest-nodes-container');
  container.innerHTML = '';
  
  questsData.forEach((q, idx) => {
    const levelNum = idx + 1;
    const isUnlocked = levelNum <= gameState.maxLevelUnlocked;
    const isCompleted = gameState.completedQuests.includes(q.id);
    
    const node = document.createElement('div');
    node.className = `quest-node ${!isUnlocked ? 'locked' : ''} ${isCompleted ? 'completed' : ''}`;
    node.innerHTML = `
      <h3>${isUnlocked ? (isCompleted ? '⭐ ' : '⚔️ ') : '🔒 '}${q.title}</h3>
      <p style="font-size:0.8rem; margin-top:5px;">${q.desc}</p>
    `;
    if (isUnlocked) {
      node.onclick = () => openQuest(q.id);
    }
    container.appendChild(node);
  });
}

function openQuest(id) {
  const q = questsData.find(item => item.id === id);
  if (!q) return;
  
  document.getElementById('quest-modal-title').innerText = q.title;
  document.getElementById('quest-intro-text').innerText = q.desc;
  document.getElementById('quiz-question').innerText = q.q;
  
  const optionsBox = document.getElementById('quiz-options');
  optionsBox.innerHTML = '';
  document.getElementById('quiz-feedback').className = 'feedback-box hidden';
  document.getElementById('next-quest-btn').classList.add('hidden');
  
  q.opt.forEach((optText, oIdx) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerText = optText;
    btn.onclick = () => checkAnswer(q, oIdx);
    optionsBox.appendChild(btn);
  });
  
  document.getElementById('quest-modal').classList.remove('hidden');
}

function checkAnswer(quest, selectedIdx) {
  const feedback = document.getElementById('quiz-feedback');
  feedback.classList.remove('hidden');
  
  if (selectedIdx === quest.ans) {
    feedback.className = 'feedback-box correct';
    feedback.innerText = `🎉 Benar! ${quest.exp}`;
    
    if (!gameState.completedQuests.includes(quest.id)) {
      gameState.completedQuests.push(quest.id);
      gameState.coins += CONFIG.COINS_PER_QUEST;
      
      const currentLevel = questsData.findIndex(q => q.id === quest.id) + 1;
      if (currentLevel >= gameState.maxLevelUnlocked && gameState.maxLevelUnlocked < CONFIG.MAX_QUESTS) {
        gameState.maxLevelUnlocked = currentLevel + 1;
      }
      saveToLocalStorage();
    }
    document.getElementById('next-quest-btn').classList.remove('hidden');
  } else {
    feedback.className = 'feedback-box wrong';
    feedback.innerText = '❌ Jawaban kurang tepat. Coba lagi!';
  }
}

function closeQuestModal() {
  document.getElementById('quest-modal').classList.add('hidden');
  renderPeta();
}

// TOKO AKSESORI
function renderToko() {
  const grid = document.getElementById('shop-items-grid');
  grid.innerHTML = '';
  
  shopItems.forEach(item => {
    const isOwned = gameState.inventory.includes(item.id);
    const isEquipped = gameState.equippedAcc === item.id;
    
    const card = document.createElement('div');
    card.className = 'card-item';
    card.style.textAlign = 'center';
    card.innerHTML = `
      <div style="font-size:3rem;">${item.icon}</div>
      <h3>${item.name}</h3>
      <p style="color:#b45309; font-weight:bold; margin:5px 0;">🪙 ${item.price} Koin</p>
      <div id="btn-area-${item.id}"></div>
    `;
    
    grid.appendChild(card);
    const btnArea = document.getElementById(`btn-area-${item.id}`);
    
    if (!isOwned) {
      const buyBtn = document.createElement('button');
      buyBtn.className = 'btn-primary';
      buyBtn.innerText = 'BELI';
      buyBtn.onclick = () => buyItem(item);
      btnArea.appendChild(buyBtn);
    } else if (isEquipped) {
      const unequipBtn = document.createElement('button');
      unequipBtn.className = 'btn-secondary';
      unequipBtn.innerText = 'LEPAS';
      unequipBtn.onclick = () => equipItem(null);
      btnArea.appendChild(unequipBtn);
    } else {
      const equipBtn = document.createElement('button');
      equipBtn.className = 'btn-primary';
      equipBtn.innerText = 'GUNAKAN';
      equipBtn.onclick = () => equipItem(item.id);
      btnArea.appendChild(equipBtn);
    }
  });
}

function buyItem(item) {
  if (gameState.coins < item.price) {
    alert('Koin kamu tidak cukup!');
    return;
  }
  gameState.coins -= item.price;
  gameState.inventory.push(item.id);
  gameState.equippedAcc = item.id;
  saveToLocalStorage();
  renderToko();
}

function equipItem(accId) {
  gameState.equippedAcc = accId;
  saveToLocalStorage();
  renderToko();
}

// PROFIL & RESET
function renderProfil() {
  document.getElementById('prof-name').innerText = gameState.name;
  document.getElementById('prof-gender').innerText = gameState.gender === 'boy' ? 'Laki-laki' : 'Perempuan';
  document.getElementById('prof-coins').innerText = gameState.coins;
}

function resetGameProgress() {
  if (confirm('Apakah kamu yakin ingin menghapus seluruh progres game? Koin dan level akan kembali ke nol.')) {
    localStorage.removeItem('hookes_hero_data');
    location.reload();
  }
}
