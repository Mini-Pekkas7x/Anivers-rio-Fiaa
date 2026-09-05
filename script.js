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
            "Você me disse que Lacta Oreo é o seu doce favorito, então era impossível deixar esse detalhe de fora.\n🍫Afinal, se uma coisinha tão simples consegue deixar seu dia um pouco melhor, ela merece ter um espacinho nesse presente também.\nE, convenhamos… um presente seu sem chocolate não teria a mesma graça, né? ",

        image: "img/foto 1.png"
    },


    2: {
        title: "Seu universo favorito 🧛",

        message:
            "Entre vampiros, romances, dramas e personagens complicados, existe um certo Damon Salvatore que claramente ganhou seu coração. 🧛‍♂️ Então, é claro que ele precisava aparecer por aqui. Afinal, quando alguém gosta tanto de um universo, algumas referências simplesmente deixam o presente mais “a sua cara”.",

        image: "img/foto 2.png"
    },


    3: {
        title: "Uma história especial 🌙",

        message:
            "Quando te perguntei qual era o seu filme favorito, a resposta foi Crepúsculo. 🌙 E uma escolha assim não poderia ficar de fora. Então, entre tantas outras pequenas coisas que fazem parte de você, essa história ganhou um cantinho especial por aqui também.",

        image: "img/foto 3.png"
    },


    4: {
        title: "Um lugar para respirar 🌊",

        message:
            "Quando te perguntei onde você passaria um dia inteiro, você escolheu a praia ou algum lugar com paisagens bonitas. 🌊 Talvez porque existem lugares que fazem a gente desacelerar, respirar fundo e simplesmente aproveitar o momento. E espero que você nunca deixe de encontrar esses lugares — e esses momentos — na sua vida.",

        image: "img/foto 4.png"
    },


    5: {
        title: "Um sonho em outro lugar 🗼",

        message:
            "Paris é um dos lugares que você gostaria de conhecer. 🗼✨ Por enquanto, ela talvez exista só como um sonho, uma vontade ou uma imagem bonita na cabeça. Mas espero que um dia você esteja lá de verdade, olhando para tudo aquilo e pensando: “eu realmente consegui chegar aqui.",

        image: "img/foto 5.png"
    },


    6: {
        title: "Pequenas coisas 🌸",

        message:
            "Quando te perguntei qual flor você escolheria, você respondeu lírios. 🌸 Então eles também precisavam estar aqui. Porque, às vezes, são justamente essas pequenas escolhas que dizem um pouquinho sobre alguém — e eu queria guardar algumas delas nesse presente.",

        image: "img/foto 6.png"
    },


    7: {
        title: "Coisas para guardar 🧸",

        message:
            "Você me contou que gostaria de colecionar livros e ursinhos de pelúcia. 🧸📚 E achei curioso pensar que esse presente também é, de certa forma, uma coleção. Uma coleção de pequenas coisas que você gosta, de lembranças e de detalhes que eu não queria deixar passar.",

        image: "img/foto 7.png"
    },


    8: {
        title: "Algumas músicas ficam 🎵",

        message:
            "Você me falou sobre aquela música que consegue lembrar uma pessoa ou um momento especial. 🎵 E talvez seja justamente isso que torne algumas músicas tão diferentes das outras. Elas deixam de ser apenas músicas e passam a carregar lembranças, sentimentos e momentos que a gente simplesmente não consegue esquecer.",

        image: "img/foto 8.png"
    },


    9: {
        title: "O que realmente importa 💙",

        message:
            "Quando te perguntei o que você gostaria de fazer no seu aniversário, você escolheu algo que talvez diga muito sobre você: estar com seus amigos e sua família. 💙 No fim, talvez seja isso que realmente importa. Não são as coisas enormes ou perfeitas, mas as pessoas que fazem um momento simples se transformar em uma lembrança especial.",

        image: "img/foto 9.png"
    },


    10: {
        title: "Você encontrou tudo ✨",

        message:
            "E finalmente, você chegou até aqui... ✨ Cada foto, cada detalhe e cada pequeno texto escondia alguma coisa que lembra você. Talvez algumas coisas sejam simples, outras sejam bobas, mas todas foram escolhidas porque, de alguma forma, fazem parte da pessoa incrível que você é.",

        image: "img/foto 10.png"
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
        `img/wallpaper ${id}.png`;

    wallpaperFull.src =
        imagePath;

    wallpaperFull.alt =
        `Wallpaper personalizado ${id}`;

    wallpaperDownload.href =
        imagePath;

    wallpaperDownload.download =
        `wallpaper-fia-${id}.png`;

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