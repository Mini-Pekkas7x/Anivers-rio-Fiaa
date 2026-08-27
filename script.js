/* =========================================================
   CONFIGURAÇÕES
========================================================= */

const TOTAL_MEMORIES = 10;


/* =========================================================
   ELEMENTOS
========================================================= */

const homePage = document.getElementById("home");
const giftsPage = document.getElementById("gifts-page");
const letterPage = document.getElementById("letter-page");

const memories = document.querySelectorAll(".memory");

const memoryModal = document.getElementById("memory-modal");
const modalImage = document.getElementById("modal-image");
const modalNumber = document.getElementById("modal-number");
const modalTitle = document.getElementById("modal-title");
const modalMessage = document.getElementById("modal-message");

const closeMemoryButton =
    document.getElementById("close-memory");

const memoryCount =
    document.getElementById("memory-count");

const memoryTotal =
    document.getElementById("memory-total");

const progress =
    document.getElementById("progress");

const finalUnlock =
    document.getElementById("final-unlock");

const giftsButton =
    document.getElementById("gifts-button");

const wallpaperModal =
    document.getElementById("wallpaper-modal");

const wallpaperFull =
    document.getElementById("wallpaper-full");

const wallpaperDownload =
    document.getElementById("wallpaper-download");

const closeWallpaperButton =
    document.getElementById("close-wallpaper");

const letterButton =
    document.getElementById("letter-button");


/* =========================================================
   MEMÓRIAS
========================================================= */

const memoryData = {

    1: {
        title: "Um pequeno detalhe 🍫",

        message:
            "Você disse que Lacta Oreo é seu doce favorito. Então é claro que alguma referência a ele precisava aparecer por aqui. Afinal, se um docinho consegue melhorar seu dia, ele merece um lugar nesse presente.",

        image: "img/foto1.jpg"
    },


    2: {
        title: "Seu universo favorito 🧛",

        message:
            "Entre vampiros, dramas e personagens complicados, existe um certo Damon Salvatore que conquistou um lugar especial. Então essa lembrança também precisava aparecer por aqui.",

        image: "img/foto2.jpg"
    },


    3: {
        title: "Uma história especial 🌙",

        message:
            "Crepúsculo foi a sua escolha quando perguntamos sobre seu filme favorito. Então essa história também ganhou um pequeno espaço dentro da sua própria história.",

        image: "img/foto3.jpg"
    },


    4: {
        title: "Um lugar para respirar 🌊",

        message:
            "Você disse que passaria um dia inteiro na praia ou em algum lugar com paisagens maravilhosas. Talvez porque alguns lugares simplesmente fazem a gente esquecer um pouco da correria e aproveitar o momento.",

        image: "img/foto4.jpg"
    },


    5: {
        title: "Um sonho em outro lugar 🗼",

        message:
            "Paris é um dos lugares que você gostaria de conhecer. Espero que algum dia você consiga estar lá de verdade, olhando para uma paisagem que antes existia apenas como um sonho.",

        image: "img/foto5.jpg"
    },


    6: {
        title: "Pequenas coisas 🌸",

        message:
            "Você escolheu os lírios quando perguntamos sobre flores. Então eles também precisavam estar aqui. Algumas coisas são bonitas justamente porque não precisam de muita explicação.",

        image: "img/foto6.jpg"
    },


    7: {
        title: "Coisas para guardar 🧸",

        message:
            "Livros e ursinhos de pelúcia estão entre as coisas que você gostaria de colecionar. E, curiosamente, esse presente também é uma forma de guardar algumas coisas que eu não queria deixar passar.",

        image: "img/foto7.jpg"
    },


    8: {
        title: "Algumas músicas ficam 🎵",

        message:
            "Você falou de uma música que lembra uma pessoa ou um momento especial. Algumas músicas acabam carregando memórias junto delas, e talvez seja justamente isso que faz certas músicas serem impossíveis de esquecer.",

        image: "img/foto8.jpg"
    },


    9: {
        title: "O que realmente importa 💙",

        message:
            "Quando perguntaram o que você escolheria fazer no seu aniversário, você respondeu que queria ficar com seus amigos e sua família. No fim, talvez os melhores presentes sejam justamente as pessoas que tornam os momentos especiais.",

        image: "img/foto9.jpg"
    },


    10: {
        title: "Você encontrou tudo ✨",

        message:
            "Cada uma dessas pequenas coisas representa um pedacinho de você. E agora que você abriu todas, tem uma última parte desse presente esperando para ser descoberta.",

        image: "img/foto10.jpg"
    }

};


/* =========================================================
   MEMÓRIAS ABERTAS
========================================================= */

const openedMemories = new Set();


/* =========================================================
   CONTADOR INICIAL
========================================================= */

memoryTotal.textContent = TOTAL_MEMORIES;

updateProgress();


/* =========================================================
   ABRIR MEMÓRIA
========================================================= */

memories.forEach(memory => {

    memory.addEventListener("click", () => {

        const id =
            Number(memory.dataset.memory);

        openMemory(id);

    });

});


function openMemory(id) {

    const data = memoryData[id];

    if (!data) {
        return;
    }


    /* -----------------------------------------
       Preenche o modal
    ----------------------------------------- */

    modalImage.src = data.image;
    modalImage.alt = data.title;

    modalNumber.textContent =
        String(id).padStart(2, "0");

    modalTitle.textContent =
        data.title;

    modalMessage.textContent =
        data.message;


    /* -----------------------------------------
       Abre modal
    ----------------------------------------- */

    memoryModal.classList.add("open");

    memoryModal.setAttribute(
        "aria-hidden",
        "false"
    );


    /* -----------------------------------------
       Registra memória
    ----------------------------------------- */

    if (!openedMemories.has(id)) {

        openedMemories.add(id);

        const memoryElement =
            document.querySelector(
                `.memory[data-memory="${id}"]`
            );

        if (memoryElement) {
            memoryElement.classList.add("seen");
        }

        updateProgress();

    }

}


/* =========================================================
   ATUALIZAR PROGRESSO
========================================================= */

function updateProgress() {

    const amount =
        openedMemories.size;


    memoryCount.textContent =
        amount;


    const percentage =
        (amount / TOTAL_MEMORIES) * 100;


    progress.style.width =
        `${percentage}%`;


    /* -----------------------------------------
       Todas abertas
    ----------------------------------------- */

    if (amount === TOTAL_MEMORIES) {

        unlockFinalGifts();

    }

}


/* =========================================================
   DESBLOQUEAR PRESENTES
========================================================= */

function unlockFinalGifts() {

    finalUnlock.classList.add("unlocked");


    setTimeout(() => {

        finalUnlock.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }, 500);

}


/* =========================================================
   FECHAR MODAL DE MEMÓRIA
========================================================= */

closeMemoryButton.addEventListener(
    "click",
    closeMemory
);


memoryModal
    .querySelector(".modal-overlay")
    .addEventListener(
        "click",
        closeMemory
    );


function closeMemory() {

    memoryModal.classList.remove("open");

    memoryModal.setAttribute(
        "aria-hidden",
        "true"
    );

}


/* =========================================================
   ESC FECHA MODAIS
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (event.key !== "Escape") {
            return;
        }


        if (
            memoryModal.classList.contains("open")
        ) {

            closeMemory();

        }


        if (
            wallpaperModal.classList.contains("open")
        ) {

            closeWallpaper();

        }

    }
);


/* =========================================================
   NAVEGAÇÃO ENTRE PÁGINAS
========================================================= */

function showPage(page) {

    document
        .querySelectorAll(".page")
        .forEach(element => {

            element.classList.remove("active");

        });


    page.classList.add("active");


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================================
   IR PARA PRESENTES
========================================================= */

giftsButton.addEventListener(
    "click",
    () => {

        /* Segurança:
           só permite se todas foram abertas */

        if (
            openedMemories.size !==
            TOTAL_MEMORIES
        ) {
            return;
        }


        showPage(giftsPage);

    }
);


/* =========================================================
   WALLPAPERS
========================================================= */

const wallpaperButtons =
    document.querySelectorAll(
        ".wallpaper-button"
    );


wallpaperButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            const id =
                button.dataset.wallpaper;

            openWallpaper(id);

        }
    );

});


function openWallpaper(id) {

    const imagePath =
        `img/wallpaper${id}.jpg`;


    wallpaperFull.src =
        imagePath;

    wallpaperFull.alt =
        `Wallpaper personalizado ${id}`;


    wallpaperDownload.href =
        imagePath;


    wallpaperDownload.download =
        `wallpaper-fia-${id}.jpg`;


    wallpaperModal.classList.add("open");

    wallpaperModal.setAttribute(
        "aria-hidden",
        "false"
    );

}


/* =========================================================
   FECHAR WALLPAPER
========================================================= */

closeWallpaperButton.addEventListener(
    "click",
    closeWallpaper
);


wallpaperModal
    .querySelector(".modal-overlay")
    .addEventListener(
        "click",
        closeWallpaper
    );


function closeWallpaper() {

    wallpaperModal.classList.remove("open");

    wallpaperModal.setAttribute(
        "aria-hidden",
        "true"
    );

}


/* =========================================================
   IR PARA CARTA
========================================================= */

letterButton.addEventListener(
    "click",
    () => {

        showPage(letterPage);

    }
);


/* =========================================================
   ANIMAÇÃO EXTRA:
   PEQUENAS PARTÍCULAS AO DESBLOQUEAR
========================================================= */

function createParticles() {

    const amount = 35;


    for (let i = 0; i < amount; i++) {

        const particle =
            document.createElement("span");


        particle.classList.add(
            "unlock-particle"
        );


        particle.style.left =
            `${Math.random() * 100}%`;

        particle.style.top =
            `${Math.random() * 100}%`;

        particle.style.animationDelay =
            `${Math.random() * 1.5}s`;


        finalUnlock.appendChild(
            particle
        );


        setTimeout(() => {

            particle.remove();

        }, 3000);

    }

}


/* =========================================================
   OBSERVA DESBLOQUEIO
========================================================= */

const unlockObserver =
    new MutationObserver(() => {

        if (
            finalUnlock.classList.contains(
                "unlocked"
            )
        ) {

            createParticles();

        }

    });


unlockObserver.observe(
    finalUnlock,
    {
        attributes: true,
        attributeFilter: ["class"]
    }
);


/* =========================================================
   PREVENIR ARRASTO DAS IMAGENS
========================================================= */

document
    .querySelectorAll("img")
    .forEach(image => {

        image.addEventListener(
            "dragstart",
            event => {
                event.preventDefault();
            }
        );

    });


/* =========================================================
   LOG
========================================================= */

console.log(
    "💙 Site da Fia carregado."
);

console.log(
    "Memórias encontradas:",
    TOTAL_MEMORIES
);