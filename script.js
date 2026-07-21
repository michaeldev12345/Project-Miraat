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


const balloons = document.querySelectorAll(".balloon");
const status = document.getElementById("balloonStatus");
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

        musicToggle.innerHTML = "🔊 Music On";

    } else {

        bgMusic.pause();

        musicToggle.innerHTML = "🔇 Music Off";

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
// Balloon Game
// =======================================

balloons.forEach((balloon) => {

    balloon.addEventListener("click", () => {

        if(balloon.classList.contains("opened")) return;

        balloon.classList.add("opened");

        const emoji = balloon.querySelector(".emoji");
        const photo = balloon.querySelector(".hidden-photo");

        popupImage.src = photo.src;

photoPopup.style.display = "flex";
popupImage.classList.add("show");

setTimeout(() => {

    popupImage.classList.remove("show");

    photoPopup.style.display = "none";

},3000);
        emoji.style.display = "none";


        setTimeout(() => {

            balloon.style.display = "none";

        }, 3000);

        popped++;

        status.textContent = `📸 Photos Found: ${popped}/4`;

        if(popped === 4){

            status.textContent = "🎉 Great Job!";

            nextBtn.style.display = "inline-block";

        }

    });

});


// =======================================
// Balloon → Gift
// =======================================

nextBtn.addEventListener("click", () => {

balloonPage.style.display = "none";
giftPage.style.display = "flex";

});


// =======================================
// Gift → Letter
// =======================================

giftBox.addEventListener("click", () => {

    giftBox.style.pointerEvents = "none";

    giftBox.innerHTML = "📦";

    giftMessage.innerHTML = "✨ Opening Your Surprise...";

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

        candles.innerHTML = "💨 💨 💨";

        blowBtn.innerHTML = "🎉 Wish Made!";

        if (typeof confetti === "function") {

            confetti({

                particleCount: 200,
                spread: 120,
                origin: { y: 0.6 }

            });

        }

    } else {

        cakePage.style.display = "none";

        finalPage.style.display = "flex";

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

setInterval(createHeart,700);

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