'use strict'
const btn = document.querySelector('.btn');
btn.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');

    if (document.body.classList.contains('dark-theme')) {
        this.textContent = "Light Theme";
    } else {
        this.textContent = "Dark Theme";
    }
    console.log('current class name: ' + document.body.className);
});