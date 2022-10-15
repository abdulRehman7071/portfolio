let login_drop_popup = document.querySelector('.login_pop_up');
let login_button = document.querySelector('#login_btn');

login_button.addEventListener('click', (element) => {

    login_drop_popup.style.display = 'block';

});
let login_close = document.querySelector('#login_close');

login_close.addEventListener('click', (element) => {

    login_drop_popup.style.display = 'none';
})

let search_bar = document.querySelector('.search_bar');
search_bar.addEventListener('click', (e) => {

    console.log('search_bar.addEventListener')

    e.target.style.width = '18rem';
});

let hamberg = document.querySelector('.ham_content');

let hide_hamberg = document.querySelector('#bar2');


hide_hamberg.addEventListener('click', () => {

    console.log('Cancel');

    hide_hamberg.style.display = 'none';

    hamberg.style.display = 'none';

    show_hamberg.style.display = 'block';

});

let show_hamberg = document.querySelector('#bar1');
show_hamberg.addEventListener('click', () => {

    console.log('barsss clicked');

    show_hamberg.style.display = 'none';

    hamberg.style.display = 'block';

    hide_hamberg.style.display = 'block';

});


// -------------------------------------------- image_gallery

let show_all = document.querySelector('#show_all_btn');
let show_app = document.querySelector('#apps_btn');
let show_ecom = document.querySelector('#ecom_btn');



let ecommerce = document.querySelectorAll('.ecommerce')
let apps = document.querySelectorAll('.apps');

show_ecom.addEventListener('click', (e) => {
    apps.forEach(e => {
        e.style.display = 'none';
    })



    ecommerce.forEach(e => {
        e.style.display = 'flex';
    })


    e.target.style.backgroundColor = 'darkgrey';
    e.target.style.color = 'white';
    show_all.style.backgroundColor = 'white';
    show_all.style.color = 'black';
    show_app.style.backgroundColor = 'white';
    show_app.style.color = 'black';
});

show_app.addEventListener('click', (e) => {
    ecommerce.forEach(e => {
        e.style.display = 'none';
    })



    apps.forEach(e => {
        e.style.display = 'flex';
    })
    e.target.style.backgroundColor = 'darkgrey';
    e.target.style.color = 'white';
    show_all.style.backgroundColor = 'white';
    show_all.style.color = 'black';
    show_ecom.style.backgroundColor = 'white';
    show_ecom.style.color = 'black';

});

show_all.addEventListener('click', (e) => {
    ecommerce.forEach(e => {
        e.style.display = 'flex';
    })


    apps.forEach(e => {
        e.style.display = 'flex';
    })
    e.target.style.backgroundColor = 'darkgrey';
    e.target.style.color = 'white';
    show_app.style.backgroundColor = 'white';
    show_app.style.color = 'black';
    show_ecom.style.backgroundColor = 'white';
    show_ecom.style.color = 'black';


});


//_____________________________________________________sliding_img

let item_1 = document.querySelector('.sliding_background_img');
let sliding_img_div = document.querySelector('.sliding_img_div');
let sliding_img = document.getElementById('sliding_img');
let sliding_circle = document.querySelector('.slider_circle');




item_1.addEventListener('mousemove', (e) => {
    let width = e.pageX
    console.log(width);
    let x = width - 111;


    if (x < 0) {
        sliding_circle.style.left = "3%";
    }
    if (x > 0 & x < 299) {
        sliding_circle.style.left = `${x + 14}px`;
        sliding_img_div.style.clip = `rect(0px ${x}px 1000px 0px)`;

    }

    if (x > 280) {
        sliding_circle.style.right = "4%";
    }


})


// let magnifier = document.querySelector('.img_magnifier')
let magnified_img = document.querySelector('#zoomed_image_magnified');
let item_2 = document.querySelector('#item_image_2');
item_2.addEventListener('mousemove', (e) => {
    let x = e.offsetX ;
    let y = e.offsetY;
    // magnifier.style.top = `${y}px`;
    // magnifier.style.left = `${x}px`;
    // magnifier.style.cursor = 'none';
    console.log(x);
    console.log(y);
    if(x>30 && y>30 && x<249 && y<176)  {
    magnified_img.style.clipPath = `circle(12% at ${x}px  ${y}px)`;

    }
   


})
item_2.addEventListener('click', (e) => {
  
})

