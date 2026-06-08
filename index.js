console.log('hello world');

function shrinkImg(event) {
    const img = document.querySelector('.main__header--wrapper img');
    img.style.width = '18%';
}
if (window.location.pathname === '/page2') {
    document.body.classList.add('page-2__img--text');
}