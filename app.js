'use strict';

const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {

    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');

    if (document.body.classList.contains('dark-theme')) {
        btn.textContent = 'Light Theme';
    } else {
        btn.textContent = 'Dark Theme';
    }

});
