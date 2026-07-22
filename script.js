// =======================================
// Welcome Page
// =======================================


const openBtn = document.getElementById("openBtn");
const welcomeCard = document.getElementById("welcomeCard");


// =======================================
// Message Page
// =======================================

const messagePage = document.getElementById("messagePage");
const messageNextBtn = document.getElementById("messageNextBtn");

// =======================================
// Balloon Page
// =======================================


const journeyPage = document.getElementById("journeyPage");
const journeyNextBtn = document.getElementById("journeyNextBtn");

let popped = 0;

const photoPopup = document.getElementById("photoPopup");
const popupImage = document.getElementById("popupImage");

// =======================================
// Gift Page
// =======================================

const giftPage = document.getElementById("giftPage");
const giftBox = document.getElementById("giftBox");
const giftMessage = document.getElementById("giftMessage");

// =======================================
// Letter Page
// =======================================

const letterPage = document.getElementById("letterPage");
const envelope = document.getElementById("envelope");
const letterPaper = document.getElementById("letterPaper");
const letterNextBtn = document.getElementById("letterNextBtn");

// =======================================
// Cake Page
// =======================================

const cakePage = document.getElementById("cakePage");
const candles = document.getElementById("candles");
const blowBtn = document.getElementById("blowBtn");

// =======================================
// Final Page
// =======================================

const finalPage = document.getElementById("finalPage");
const replayBtn = document.getElementById("replayBtn");


const bgMusic = document.getElementById("bgMusic");
const musicToggle = document.getElementById("musicToggle");

bgMusic.volume = 0.25;


// =======================================
// Welcome → Message
// =======================================

openBtn.addEventListener("click", () => {

    bgMusic.play().catch(() => {});

welcomeCard.style.display = "none";
messagePage.style.display = "flex";

});

musicToggle.addEventListener("click", () => {

    if (bgMusic.paused) {

        bgMusic.play();

musicToggle.innerHTML = "🎵 Music";

    } else {

        bgMusic.pause();

musicToggle.innerHTML = "🔇 Muted";

    }

});


// =======================================
// Message → Balloon
// =======================================

messageNextBtn.addEventListener("click", () => {

   messagePage.style.display = "none";
journeyPage.style.display = "flex";

});



// =======================================
// Gift → Letter
// =======================================

giftBox.addEventListener("click", () => {

    giftBox.style.pointerEvents = "none";

giftBox.innerHTML = "🎀";

    giftMessage.innerHTML = "✨ Opening something special...";


    setTimeout(() => {

giftPage.style.display = "none";
letterPage.style.display = "flex";

    }, 1500);

});


// =======================================
// Open Letter
// =======================================

envelope.addEventListener("click", () => {

    envelope.style.pointerEvents = "none";

    envelope.style.display = "none";

letterPaper.style.display = "block";

setTimeout(() => {
    letterPaper.classList.add("show");
},100);

    letterNextBtn.style.display = "inline-block";

});


// =======================================
// Letter → Cake
// =======================================

letterNextBtn.addEventListener("click", () => {

letterPage.style.display = "none";
cakePage.style.display = "flex";

});


// =======================================
// Cake → Final
// =======================================

let wishDone = false;

blowBtn.addEventListener("click", () => {

    if (!wishDone) {

        wishDone = true;

        candles.innerHTML = "🤲";

blowBtn.innerHTML = "✨ Ameen";

        if (typeof confetti === "function") {

            confetti({
    particleCount:120,
    spread:70,
    origin:{x:0}
});

confetti({
    particleCount:120,
    spread:70,
    origin:{x:1}
});

        }

    } else {

        confetti({
    particleCount:100,
    spread:90,
    origin:{y:0.6}

    }

});

// =======================================
// Replay
// =======================================

replayBtn.addEventListener("click", () => {

    location.reload();

});

// =======================================
// Loading Screen
// =======================================

window.addEventListener("load", () => {

    setTimeout(() => {

        const loader = document.getElementById("loader");

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 800);

    }, 2500);

});

// =======================================
// Floating Hearts
// =======================================

const hearts = document.getElementById("hearts");

function createHeart(){

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "💖";

    heart.style.left = Math.random()*100 + "%";

    heart.style.animationDuration = (5 + Math.random()*4) + "s";

    heart.style.fontSize = (18 + Math.random()*20) + "px";

    hearts.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },9000);

}

setInterval(createHeart,1200);

// Disable Right Click on Images

document.querySelectorAll("img").forEach(img => {

    img.addEventListener("contextmenu", (e) => {

        e.preventDefault();

    });

});

journeyNextBtn.addEventListener("click", () => {

    journeyPage.style.display = "none";
    giftPage.style.display = "flex";

});