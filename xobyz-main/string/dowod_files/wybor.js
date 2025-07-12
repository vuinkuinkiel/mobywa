document.body.classList.remove('ovh');
document.getElementById('wybordokumentu').style.display = 'none';
document.getElementById('menu').style.display = 'none';
document.getElementById('danedowodu').style.display = 'none';
document.getElementById('danemdowodu').style.display = 'none';

function wybordokumentumenu() {
    window.scrollTo({ top: 0 });
    document.body.classList.toggle('ovh');

    let wybordokumentu = document.getElementById('wybordokumentu');
    let menu = document.getElementById('menu');
    
    if (wybordokumentu.style.display === 'none' || wybordokumentu.style.display === '') {
        wybordokumentu.style.display = 'block';
        menu.style.display = 'block';
    } else {
        wybordokumentu.style.display = 'none';
        menu.style.display = 'none';
    }
}

function danedowodowe() {
    document.getElementById('wybordokumentu').style.display = 'none';
    document.getElementById('danedowodu').style.display = 'block';
}

function danemdowodowe() {
    document.getElementById('wybordokumentu').style.display = 'none';
    document.getElementById('danemdowodu').style.display = 'block';
    document.getElementById('danedowodowe').style.display = 'block';
}

function zamknij2() {
    document.getElementById('danedowodu').style.display = 'none';
    document.getElementById('danemdowodu').style.display = 'none';
    document.getElementById('menu').style.display = 'none';
    document.getElementById('wybordokumentu').style.display = 'block';
    document.body.classList.remove('ovh');
}

function wroc() {
    document.getElementById('wybordokumentu').style.display = 'block';
    document.getElementById('danedowodu').style.display = 'none';
    document.getElementById('danemdowodu').style.display = 'none';
}

addEventListener('DOMContentLoaded', () => {
})