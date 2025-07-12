console.log('rozwijka.js');
const lo = document.querySelector('#lo');
const content = document.querySelector('#rogo');
const arrow = document.querySelector('#rotation');

var contentinner = content.innerHTML;
content.innerHTML = '';

lo.addEventListener('click', function () {
    // Sprawdzenie stanu rozwinięcia
    if (lo.style.borderRadius === "12px 12px 0px 0px") {
        lo.style.borderRadius = "12px"; // Resetowanie border-radius
        content.innerHTML = ''; // Zwijanie zawartości
        arrow.style.transform = "rotate(0deg)"; // Ustawianie strzałki
    } else {
        lo.style.borderRadius = "12px 12px 0 0"; // Ustawianie border-radius dla rozwinięcia
        content.innerHTML = contentinner; // Rozwijanie zawartości
        arrow.style.transform = "rotate(-90deg)"; // Ustawianie strzałki
    }
});