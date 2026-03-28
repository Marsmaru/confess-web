function closeAll() {
  document.getElementById("musicBox").classList.remove("show");
  document.getElementById("sukaBox").classList.remove("show");
  document.getElementById("kamuBox").classList.remove("show");

  // hapus active glow juga
  document.querySelector(".tag-left").classList.remove("active");
  document.querySelector(".tag-right").classList.remove("active");
  document.querySelector(".tag-bottom").classList.remove("active");
}

let musicStarted = false;

function toggleMusic() {
  let box = document.getElementById("musicBox");
  let btn = document.querySelector(".tag-left");
  let player = document.getElementById("scPlayer");

  let isOpen = box.classList.contains("show");

  closeAll();

  if (!isOpen) {
    box.classList.add("show");
    btn.classList.add("active");

    // 🔥 hanya pertama kali play
    if (!musicStarted) {
      player.src = "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/202272218&auto_play=true";
      musicStarted = true;
    }

  }
}

function toggleSuka() {
  let box = document.getElementById("sukaBox");
  let btn = document.querySelector(".tag-bottom");

  let isOpen = box.classList.contains("show");

  closeAll();

  if (!isOpen) {
    box.classList.add("show");
    btn.classList.add("active");
  }
}

function toggleKamu() {
  let box = document.getElementById("kamuBox");
  let btn = document.querySelector(".tag-right");

  let isOpen = box.classList.contains("show");

  closeAll();

  if (!isOpen) {
    box.classList.add("show");
    btn.classList.add("active");
  }
}

function openImage(src) {
  let modal = document.getElementById("imageModal");
  let img = document.getElementById("modalImg");

  img.src = src;
  modal.style.display = "flex";
}

function closeImage() {
  document.getElementById("imageModal").style.display = "none";
}

setInterval(() => {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "💖";

  // posisi random
  heart.style.left = Math.random() * 100 + "vw";

  // ukuran random
  heart.style.fontSize = (15 + Math.random() * 20) + "px";

  // durasi random
  heart.style.animationDuration = (3 + Math.random() * 3) + "s";

  document.querySelector(".hearts-container").appendChild(heart);

  // hapus setelah selesai
  setTimeout(() => {
    heart.remove();
  }, 6000);
}, 400);

function toggleKamu() {
  let box = document.getElementById("kamuBox");
  let btn = document.querySelector(".tag-right");
  let gfBox = document.getElementById("gfBox");

  let isOpen = box.classList.contains("show");

  closeAll();

  if (!isOpen) {
    box.classList.add("show");
    btn.classList.add("active");

    // 🔥 cinematic timing
    setTimeout(() => {
      gfBox.classList.add("show");
    }, 1800); // timing sweet spot 😭
  }
}

function answerYes() {
  let sound = document.getElementById("boomSound");
  sound.currentTime = 0;
  sound.play();

  // 💖 efek
  let boom = document.createElement("div");
  boom.className = "love-boom";
  boom.innerHTML = "💖 I LOVE YOU 💖";

  document.body.appendChild(boom);

  let msg = document.createElement("div");
  msg.className = "love-message";
  msg.innerHTML = "Selamat kamu resmi jadi pacarkuu 😳💖";

  document.body.appendChild(msg);

  // 💥 heart
  for (let i = 0; i < 25; i++) {
    let heart = document.createElement("div");
    heart.className = "boom-heart";
    heart.innerHTML = "💖";

    heart.style.left = "50%";
    heart.style.top = "50%";

    let x = (Math.random() - 0.5) * 400;
    let y = (Math.random() - 0.5) * 400;

    heart.style.setProperty("--x", x + "px");
    heart.style.setProperty("--y", y + "px");

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 1000);
  }

  // 🔥 scroll balik ke atas (smooth)
  setTimeout(() => {
    document.getElementById("mainCard").scrollIntoView({
      behavior: "smooth"
    });
  }, 800);

  // hapus efek
  setTimeout(() => {
    boom.remove();
    msg.remove();
  }, 3000);
}

document.body.style.background = "#ff6b81";

let moveCount = 0;

function moveNo(btn) {
  moveCount++;

  // pindah posisi random
  let x = Math.random() * 200 - 100; // kiri kanan
  let y = Math.random() * 100 - 50;  // atas bawah

  btn.style.transform = `translate(${x}px, ${y}px)`;

  // setelah beberapa kali → hilang 😈
  if (moveCount > 3) {
    btn.style.opacity = "0";
    btn.style.pointerEvents = "none";
  }
}

setTimeout(() => {
  if (box.classList.contains("show")) {
    gfBox.classList.add("show");
  }
}, 2000);


setTimeout(() => {
  closeAll();
  document.getElementById("mainCard").scrollIntoView({
    behavior: "smooth"
  });
}, 800);
closeAll();