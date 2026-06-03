const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

const title = document.getElementById("title");
const buttons = document.getElementById("buttons");

const container = document.getElementById("container");

const loadingScreen = document.getElementById("loadingScreen");
const loadingFill = document.getElementById("loadingFill");

const storyScreen = document.getElementById("storyScreen");

const loadingText = document.getElementById("loadingText");
const music = document.getElementById("bgMusic");

/* NO BUTTON */

noBtn.addEventListener("mouseenter", () => {

    const area = document.querySelector(".buttons");

    const maxX = area.clientWidth - noBtn.offsetWidth;
    const maxY = area.clientHeight - noBtn.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";

});

/* YES CLICK */

yesBtn.addEventListener("click", () => {

    /* PLAY MUSIC */

    music.volume = 0.7;

    music.play();

    title.classList.add("hide");
    buttons.classList.add("hide");

    setTimeout(() => {

        container.classList.add("loading");

    }, 200);

    setTimeout(() => {

        loadingScreen.classList.add("show");

        let progress = 0;

        const interval = setInterval(() => {

            progress++;

            /* DYNAMIC TEXT */

                if(progress === 15){

                    loadingText.innerText =
                    "bye bye noyaaaa hahahaha...";
                }

                if(progress === 35){

                    loadingText.innerText =
                    "mulai berwarna...";
                }


                if(progress === 75){

                    loadingText.innerText =
                    "menyiapkan spesial buat mygf...";
                }

                if(progress === 90){

                    loadingText.innerText =
                    "selesai";
                }

            loadingFill.style.width = progress + "%";

            /* COLOR TRANSITION */

            if(progress === 40){

                document.body.classList.add("colorMode");

            }

            /* FINISH */

            if(progress >= 100){

                clearInterval(interval);

                loadingScreen.classList.remove("show");

                setTimeout(() => {

                    container.style.minHeight = "650px";

                    storyScreen.classList.add("show");

                }, 400);

            }

        }, 85);

    }, 700);

});

/* EXPAND CARD */

const timelineCards = document.querySelectorAll(".timelineCard");

timelineCards.forEach(card => {

    card.addEventListener("click", () => {

        card.classList.toggle("active");

    });

});