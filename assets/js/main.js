function getTimeFromSeconds(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    });
}

const relogio = document.querySelector('.relogio');
let timer = null;
let startTime = null;
let elapsed = 0;
let running = false;

function atualizaRelogio() {
    const agora = Date.now();
    const diff = Math.floor((agora - startTime) / 1000) + elapsed;
    relogio.innerHTML = getTimeFromSeconds(diff);
}

document.addEventListener('click', function(e) {
    const el = e.target;

    if (el.classList.contains('INICIAR')) {
        if (!running) {
            startTime = Date.now();
            timer = setInterval(atualizaRelogio, 1000);
            running = true;
        }
        relogio.classList.remove('pausado');
    }

    if (el.classList.contains('PAUSAR')) {
        if (running) {
            clearInterval(timer);
            elapsed += Math.floor((Date.now() - startTime) / 1000);
            running = false;
        }
        relogio.classList.add('pausado');
    }

    if (el.classList.contains('REDEFINIR')) {
        clearInterval(timer);
        relogio.innerHTML = '00:00:00';
        startTime = null;
        elapsed = 0;
        running = false;
        relogio.classList.remove('pausado');
    }
});
