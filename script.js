// Ai Genrate


const canvas = document.getElementById("heart");
const ctx = canvas.getContext("2d");
const toggle = document.getElementById("toggle");

const W = (canvas.width = 400);
const H = (canvas.height = 400);
const CX = W / 2;
const CY = H / 2 + 20;

function heartPoint(t, scale) {
  const x = 16 * Math.pow(Math.sin(t), 3);
  const y =
    13 * Math.cos(t) -
    5 * Math.cos(2 * t) -
    2 * Math.cos(3 * t) -
    Math.cos(4 * t);
  return { x: CX + x * scale, y: CY - y * scale };
}

let stars = [];
for (let i = 0; i < 120; i++) {
  stars.push({
    x: Math.random() * W,
    y: Math.random() * H,
    r: Math.random() * 1.2,
    tw: Math.random() * Math.PI * 2,
  });
}

let coreParticles = [];
const CORE_COUNT = 260;
for (let i = 0; i < CORE_COUNT; i++) {
  const t = Math.random() * Math.PI * 2;
  coreParticles.push({
    t,
    scale: 8 + Math.random() * 0.6,
    jitter: Math.random() * 3,
    size: Math.random() * 1.8 + 0.6,
    offset: Math.random() * Math.PI * 2,
    hue:
      Math.random() < 0.75 ? 345 + Math.random() * 15 : 35 + Math.random() * 15,
  });
}

let embers = [];
function spawnEmber() {
  const t = Math.random() * Math.PI * 2;
  const p = heartPoint(t, 8);
  embers.push({
    x: p.x,
    y: p.y,
    vx: (Math.random() - 0.5) * 0.4,
    vy: -Math.random() * 1.2 - 0.3,
    life: 1,
    size: Math.random() * 1.6 + 0.5,
    hue: Math.random() < 0.5 ? 350 : 35,
  });
}

let beatClock = 0;
function heartbeatScale(tsec) {
  const cycle = tsec % 1.2;
  let s = 1;
  if (cycle < 0.12) {
    s = 1 + Math.sin((cycle / 0.12) * Math.PI) * 0.14;
  } else if (cycle > 0.22 && cycle < 0.34) {
    s = 1 + Math.sin(((cycle - 0.22) / 0.12) * Math.PI) * 0.09;
  }
  return s;
}

let time = 0;
let running = true;

function draw() {
  ctx.fillStyle = "rgba(5,2,8,0.22)";
  ctx.fillRect(0, 0, W, H);

  time += 0.016;

  stars.forEach((s) => {
    const a = 0.3 + 0.3 * Math.sin(time + s.tw);
    ctx.fillStyle = `rgba(255,255,255,${a})`;
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fill();
  });

  const beat = heartbeatScale(time);

  coreParticles.forEach((p) => {
    const pos = heartPoint(p.t, p.scale * beat);
    const glow = 0.5 + 0.5 * Math.sin(time * 3 + p.offset);
    const alpha = 0.35 + glow * 0.65;

    const grad = ctx.createRadialGradient(
      pos.x,
      pos.y,
      0,
      pos.x,
      pos.y,
      p.size * 5,
    );
    grad.addColorStop(0, `hsla(${p.hue},100%,65%,${alpha})`);
    grad.addColorStop(1, `hsla(${p.hue},100%,50%,0)`);
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, p.size * 5, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = `hsla(${p.hue},100%,85%,${alpha})`;
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, p.size, 0, Math.PI * 2);
    ctx.fill();
  });

  ctx.save();
  ctx.beginPath();
  for (let t = 0; t < Math.PI * 2; t += 0.02) {
    const p = heartPoint(t, 7.6 * beat);
    if (t === 0) ctx.moveTo(p.x, p.y);
    else ctx.lineTo(p.x, p.y);
  }
  ctx.closePath();
  const fillGrad = ctx.createRadialGradient(CX, CY, 0, CX, CY, 90);
  fillGrad.addColorStop(0, "rgba(255,80,90,0.25)");
  fillGrad.addColorStop(1, "rgba(255,80,90,0)");
  ctx.fillStyle = fillGrad;
  ctx.fill();
  ctx.restore();

  if (Math.random() < 0.6) spawnEmber();
  embers.forEach((e) => {
    e.x += e.vx;
    e.y += e.vy;
    e.life -= 0.012;
  });
  embers = embers.filter((e) => e.life > 0);

  embers.forEach((e) => {
    ctx.fillStyle = `hsla(${e.hue},100%,70%,${e.life})`;
    ctx.beginPath();
    ctx.arc(e.x, e.y, e.size, 0, Math.PI * 2);
    ctx.fill();
  });

  if (running) requestAnimationFrame(draw);
}

ctx.fillStyle = "#050208";
ctx.fillRect(0, 0, W, H);
requestAnimationFrame(draw);

toggle.addEventListener("change", () => {
  running = toggle.checked;
  if (running) requestAnimationFrame(draw);
});
