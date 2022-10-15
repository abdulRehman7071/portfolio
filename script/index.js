let show_ham = document.querySelector('#show_ham');
let close_ham = document.querySelector('#close_ham');
let header__hamberg = document.querySelector('#header__hamberg');

show_ham.addEventListener('click', (e) => {
    show_ham.style.display = 'none';
    close_ham.style.display = 'block';
    header__hamberg.style.display = 'block';
})


close_ham.addEventListener('click', (e) => {
    close_ham.style.display = 'none'
    show_ham.style.display = 'block'
    console.log('hi')
    header__hamberg.style.display = 'none';
})