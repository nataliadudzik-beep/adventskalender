'use strict';

const K = KALENDER;
const $ = s => document.querySelector(s);

// Vorschau zum Testen: Seite mit ?vorschau am Ende öffnen, dann sind alle Türchen offen.
const PREVIEW = new URLSearchParams(location.search).has('vorschau');

// Feste, gemischte Reihenfolge der Türchen – wie bei einem echten Kalender.
const ORDER = [7, 15, 2, 21, 11, 18, 4, 23, 9, 1, 14, 20, 16, 6, 24, 12, 3, 19, 10, 22, 5, 13, 17, 8];
const COLORS = ['var(--door-1)', 'var(--door-2)', 'var(--door-3)', 'var(--door-4)'];
const ICONS = ['★', '❄', '♥', '✦', '☃', '❦'];

const storeKey = 'advent-' + K.jahr + (PREVIEW ? '-vorschau' : '');
let opened = new Set();
try { opened = new Set(JSON.parse(localStorage.getItem(storeKey) || '[]')); } catch { /* egal */ }
const saveOpened = () => { try { localStorage.setItem(storeKey, JSON.stringify([...opened])); } catch { /* egal */ } };

// Wie viele Türchen dürfen heute auf sein? (0 bis 24, nach lokaler Uhrzeit)
function unlockedUpTo(now = new Date()) {
  if (PREVIEW) return 24;
  const y = now.getFullYear(), m = now.getMonth(), d = now.getDate();
  if (y > K.jahr) return 24;
  if (y < K.jahr || m < 11) return 0;
  return Math.min(24, d);
}

function daysUntil(day, now = new Date()) {
  const target = new Date(K.jahr, 11, day);
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  return Math.round((target - today) / 86400000);
}

function render() {
  const max = unlockedUpTo();
  const cal = $('#calendar');
  cal.innerHTML = '';
  // Farben so verteilen, dass benachbarte Türchen (4 oder 6 pro Reihe) nie gleich sind
  const colorIdx = [];
  ORDER.forEach((_, i) => {
    const taken = [colorIdx[i - 1], colorIdx[i - 4], colorIdx[i - 6]];
    let c = (i * 3) % COLORS.length;
    while (taken.includes(c)) c = (c + 1) % COLORS.length;
    colorIdx.push(c);
  });
  ORDER.forEach((day, i) => {
    const b = document.createElement('button');
    b.className = 'door';
    b.setAttribute('role', 'listitem');
    b.dataset.day = day;
    b.style.setProperty('--c', COLORS[colorIdx[i]]);
    const isOpen = opened.has(day) && day <= max;
    b.classList.toggle('open', isOpen);
    b.classList.toggle('locked', day > max);
    b.classList.toggle('today', !PREVIEW && !isOpen && daysUntil(day) === 0);
    b.setAttribute('aria-label', `Türchen ${day}` + (day > max ? ' (noch verschlossen)' : isOpen ? ' (geöffnet)' : ''));
    b.innerHTML = `
      <span class="inside">${ICONS[day % ICONS.length]}<small>${day}. Dez</small></span>
      <span class="leaf"><span class="num">${day}</span></span>`;
    cal.append(b);
  });
  updateStatus(max);
}

function updateStatus(max) {
  const s = $('#status');
  if (PREVIEW) { s.textContent = 'Vorschau: alle Türchen freigeschaltet'; return; }
  if (max === 0) {
    const n = daysUntil(1);
    s.textContent = n === 1 ? 'Morgen geht das erste Türchen auf' : `Noch ${n} Tage bis zum ersten Türchen`;
  } else if (max < 24) {
    s.textContent = opened.has(max) ? `Bis morgen – dann wartet Türchen ${max + 1}` : `Heute ist Türchen ${max} dran`;
  } else {
    s.textContent = 'Frohe Weihnachten!';
  }
}

function toast(msg) {
  const t = $('#toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => t.classList.remove('show'), 2400);
}

function showContent(day) {
  const entry = (K.tage && K.tage[day]) || {};
  $('#dlgDate').textContent = `${day}. Dezember`;
  $('#dlgTitle').textContent = entry.titel || '';
  $('#dlgText').textContent = (entry.text || '').trim();
  const img = $('#dlgImg');
  if (entry.bild) { img.src = entry.bild; img.hidden = false; } else { img.hidden = true; img.removeAttribute('src'); }
  $('#dlg').showModal();
}

$('#calendar').addEventListener('click', e => {
  const door = e.target.closest('.door');
  if (!door) return;
  const day = Number(door.dataset.day);
  const max = unlockedUpTo();

  if (day > max) {
    door.classList.remove('shake');
    void door.offsetWidth;            // Animation neu starten
    door.classList.add('shake');
    const n = daysUntil(day);
    toast(n === 1 ? 'Dieses Türchen geht morgen auf' : `Noch ${n} Tage Geduld`);
    return;
  }

  if (door.classList.contains('open')) { showContent(day); return; }

  door.classList.add('open');
  door.classList.remove('today');
  opened.add(day);
  saveOpened();
  updateStatus(max);
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  setTimeout(() => showContent(day), reduce ? 0 : 650);
});

// Klick neben das Fenster schließt es
$('#dlg').addEventListener('click', e => { if (e.target === e.currentTarget) e.currentTarget.close(); });

// Schneeflocken
function snow() {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const box = document.querySelector('.snow');
  for (let i = 0; i < 40; i++) {
    const f = document.createElement('span');
    f.className = 'flake';
    f.textContent = Math.random() < .5 ? '•' : '❄';
    f.style.left = Math.random() * 100 + 'vw';
    f.style.fontSize = (6 + Math.random() * 12) + 'px';
    f.style.opacity = (.3 + Math.random() * .6).toFixed(2);
    f.style.setProperty('--drift', (Math.random() * 60 - 30) + 'px');
    f.style.animationDuration = (9 + Math.random() * 12) + 's';
    f.style.animationDelay = (-Math.random() * 20) + 's';
    box.append(f);
  }
}

// Texte aus inhalte.js übernehmen
$('#title').textContent = K.ueberschrift || 'Adventskalender';
document.title = K.ueberschrift || 'Adventskalender';
$('#subtitle').textContent = K.untertitel || '';

render();
snow();

// Um Mitternacht automatisch das neue Türchen freigeben
let lastMax = unlockedUpTo();
setInterval(() => { const m = unlockedUpTo(); if (m !== lastMax) { lastMax = m; render(); } }, 60000);
document.addEventListener('visibilitychange', () => { if (!document.hidden) { const m = unlockedUpTo(); if (m !== lastMax) { lastMax = m; render(); } } });
