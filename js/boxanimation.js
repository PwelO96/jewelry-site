// Nav Visible/Invisible
const navSlide = () => {
    const burger = document.querySelector('.nav_links_menu');
    const nav = document.querySelector('.nav_links');
    const nava = document.querySelectorAll('.nav_links a');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav_active')
            //Burger Animation
        burger.classList.toggle('toggle')
    })


    //Hidde Menu After Click on Link
    nava.forEach(item => {
        item.addEventListener('click', () => {
            nav.classList.toggle('nav_active')
            burger.classList.toggle('toggle');
        })
    })
}

navSlide();

//Sticky Navbar
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    navbar.classList.toggle('sticky', window.scrollY > 0);
})

//Header Caption Animation
const header_box = document.querySelector('#header_box');
header_box.firstElementChild.classList.remove("header_content");
header_box.firstElementChild.classList.add("header_content2");

const interval = setInterval(() => { header_box.getBoundingClientRect().top <= 200 ? showCaption() : null }, 17);

const showCaption = () => {
    header_box.firstElementChild.classList.remove("header_content2");
    header_box.firstElementChild.classList.add("header_content");
    clearInterval(interval);
}

//Offer Animation
const offer_box = document.querySelector('#offer');

offer_box.lastElementChild.classList.remove("offer_inner");
offer_box.lastElementChild.classList.add("offer_inner2");

const offer_interval = setInterval(() => { offer_box.getBoundingClientRect().top <= 565 ? showOffer() : null }, 17);

const showOffer = () => {
    offer_box.lastElementChild.classList.remove("offer_inner2")
    offer_box.lastElementChild.classList.add("offer_inner")
    clearInterval(offer_interval)
}

//Services Animation
const services_box = document.querySelector('#services');


services_box.lastElementChild.classList.remove("services_inner");
services_box.lastElementChild.classList.add("services_inner2");

const services_interval = setInterval(() => { services_box.getBoundingClientRect().top <= 600 ? showServices() : null }, 17);

const showServices = () => {
    services_box.lastElementChild.classList.remove("services_inner2")
    services_box.lastElementChild.classList.add("services_inner");
    clearInterval(services_interval)
}

//About Us Animation
const aboutusbg_box = document.querySelector('.aboutus_bg');
const aboutus_box = document.querySelector('.aboutus_imgbox');

aboutusbg_box.lastElementChild.classList.remove("aboutus_bg_content");
aboutus_box.classList.remove("aboutus_imgbox");
aboutusbg_box.lastElementChild.classList.add("aboutus_bg_content2");
aboutus_box.classList.add("aboutus_imgbox2");

const aboutus_interval = setInterval(() => { aboutusbg_box.getBoundingClientRect().top <= 650 ? showAboutus() : null }, 17);

const showAboutus = () => {
    aboutus_box.classList.remove("aboutus_imgbox2")
    aboutusbg_box.lastElementChild.classList.remove("aboutus_bg_content2")
    aboutusbg_box.lastElementChild.classList.add("aboutus_bg_content")
    aboutus_box.classList.add("aboutus_imgbox")
    clearInterval(aboutus_interval)
}