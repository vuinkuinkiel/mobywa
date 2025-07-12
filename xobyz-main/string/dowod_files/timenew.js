const czas = document.querySelector('.czas');

setInterval(() => {
    const now = new Date();
    const hour = now.getHours() < 10 ? `0${now.getHours()}` : now.getHours();
    const minute = now.getMinutes() < 10 ? `0${now.getMinutes()}` : now.getMinutes();
    const second = now.getSeconds() < 10 ? `0${now.getSeconds()}` : now.getSeconds();
    const month = (now.getMonth()+1) < 10 ? `0${now.getMonth()+1}` : now.getMonth()+1;
    const timeString = `Czas: ${hour}:${minute}:${second} ${now.getDate()}.${month}.${now.getFullYear()}`;
    document.querySelector('.czas').innerHTML = timeString;
    czas.innerHTML = timeString;
}, 1000);
