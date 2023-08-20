window.onload = () => {
    "use-strict";
    if ("ServiceWorker" in navigator){
        navigator.serviceWorker.register("./sw.js");
    }
};

const pontosEquipe1Element = document.getElementById('pontosEquipe1');
const pontosEquipe2Element = document.getElementById('pontosEquipe2');
const equipe1Mais1Button = document.getElementById('equipe1Mais1');
const equipe1Menos1Button = document.getElementById('equipe1Menos1');
const equipe1Mais3Button = document.getElementById('equipe1Mais3');
const equipe1Mais6Button = document.getElementById('equipe1Mais6');
const equipe1Mais9Button = document.getElementById('equipe1Mais9');
const equipe1Mais12Button = document.getElementById('equipe1Mais12');
const equipe2Mais1Button = document.getElementById('equipe2Mais1');
const equipe2Menos1Button = document.getElementById('equipe2Menos1');
const equipe2Mais3Button = document.getElementById('equipe2Mais3');
const equipe2Mais6Button = document.getElementById('equipe2Mais6');
const equipe2Mais9Button = document.getElementById('equipe2Mais9');
const equipe2Mais12Button = document.getElementById('equipe2Mais12');
const zerarContadorButton = document.getElementById('zerarContador');
const vitoriasEquipe1Element = document.getElementById('vitoriasEquipe1');
const vitoriasEquipe2Element = document.getElementById('vitoriasEquipe2');
const equipe1NameInput = document.getElementById('equipe1Input');
const equipe2NameInput = document.getElementById('equipe2Input');
let pontosEquipe1 = 0;
let pontosEquipe2 = 0;
let vitoriasEquipe1 = 0;
let vitoriasEquipe2 = 0;

function atualizarPontos() {
    pontosEquipe1Element.textContent = pontosEquipe1;
    pontosEquipe2Element.textContent = pontosEquipe2;
}

function atualizarVitorias() {
    vitoriasEquipe1Element.textContent = vitoriasEquipe1;
    vitoriasEquipe2Element.textContent = vitoriasEquipe2;
}

equipe1Mais1Button.addEventListener('click', () => {
    pontosEquipe1++;
    if (pontosEquipe1 >= 12) {
        vitoriasEquipe1++;
        pontosEquipe1 = 0;
        pontosEquipe2 = 0;
        atualizarVitorias();
    }
    atualizarPontos();
});

equipe1Menos1Button.addEventListener('click', () => {
    if (pontosEquipe1 > 0) {
        pontosEquipe1--;
        atualizarPontos();
    }
});

equipe1Mais3Button.addEventListener('click', () => {
    pontosEquipe1 += 3;
    if (pontosEquipe1 >= 12) {
        vitoriasEquipe1++;
        pontosEquipe1 = 0;
        pontosEquipe2 = 0;
        atualizarVitorias();
    }
    atualizarPontos();
});

equipe1Mais6Button.addEventListener('click', () => {
    pontosEquipe1 += 6;
    if (pontosEquipe1 >= 12) {
        vitoriasEquipe1++;
        pontosEquipe1 = 0;
        pontosEquipe2 = 0;
        atualizarVitorias();
    }
    atualizarPontos();
});

equipe1Mais9Button.addEventListener('click', () => {
    pontosEquipe1 += 9;
    if (pontosEquipe1 >= 12) {
        vitoriasEquipe1++;
        pontosEquipe1 = 0;
        pontosEquipe2 = 0;
        atualizarVitorias();
    }
    atualizarPontos();
});

equipe1Mais12Button.addEventListener('click', () => {
    pontosEquipe1 += 12;
    if (pontosEquipe1 >= 12) {
        vitoriasEquipe1++;
        pontosEquipe1 = 0;
        pontosEquipe2 = 0;
        atualizarVitorias();
    }
    atualizarPontos();
});

equipe2Mais1Button.addEventListener('click', () => {
    pontosEquipe2++;
    if (pontosEquipe2 >= 12) {
        vitoriasEquipe2++;
        pontosEquipe1 = 0;
        pontosEquipe2 = 0;
        atualizarVitorias();
    }
    atualizarPontos();
});

equipe2Menos1Button.addEventListener('click', () => {
    if (pontosEquipe2 > 0) {
        pontosEquipe2--;
        atualizarPontos();
    }
});

equipe2Mais3Button.addEventListener('click', () => {
    pontosEquipe2 += 3;
    if (pontosEquipe2 >= 12) {
        vitoriasEquipe2++;
        pontosEquipe1 = 0;
        pontosEquipe2 = 0;
        atualizarVitorias();
    }
    atualizarPontos();
});

equipe2Mais6Button.addEventListener('click', () => {
    pontosEquipe2 += 6;
    if (pontosEquipe2 >= 12) {
        vitoriasEquipe2++;
        pontosEquipe1 = 0;
        pontosEquipe2 = 0;
        atualizarVitorias();
    }
    atualizarPontos();
});

equipe2Mais9Button.addEventListener('click', () => {
    pontosEquipe2 += 9;
    if (pontosEquipe2 >= 12) {
        vitoriasEquipe2++;
        pontosEquipe1 = 0;
        pontosEquipe2 = 0;
        atualizarVitorias();
    }
    atualizarPontos();
});

equipe2Mais12Button.addEventListener('click', () => {
    pontosEquipe2 += 12;
    if (pontosEquipe2 >= 12) {
        vitoriasEquipe2++;
        pontosEquipe1 = 0;
        pontosEquipe2 = 0;
        atualizarVitorias();
    }
    atualizarPontos();
});

zerarContadorButton.addEventListener('click', () => {
    pontosEquipe1 = 0;
    pontosEquipe2 = 0;
    atualizarPontos();
    vitoriasEquipe1 = 0;
    vitoriasEquipe2 = 0;
    atualizarVitorias();
});