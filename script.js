const toggleBtn = document.querySelector(".toggle-switch");
const ball = document.getElementById("switch-label");
let container = document.querySelector('.container');
let navbar = document.querySelector(".navbar");
let section = document.querySelectorAll('.section');

let progressbar = document.getElementById('slider');
let clickme = document.querySelector('.clickme');
let clutter = true;
let hidemenu = document.getElementById('hide');

let switchCheck = true; // Added switchCheck variable and initialized it

function switchBtn() {
    if (switchCheck) {
        ball.style.transform = `translate(100%, -50%)`;
        container.style.backgroundColor = '#fff';
        container.style.color = "#000";
        navbar.style.backgroundColor = "#fff";
        switchCheck = false;
    } else {
        ball.style.transform = `translate(0, -50%)`;
        container.style.backgroundColor = '#000';
        container.style.color = "#fff";
        navbar.style.backgroundColor = "#000";
        switchCheck = true;
    }
}

function updateprogressbar() {
    const { scrollTop, scrollHeight } = document.documentElement;
    const scrollPercent = `${(scrollTop / (scrollHeight - window.innerHeight)) * 100}%`;
    progressbar.style.width = scrollPercent;
}

document.addEventListener('scroll', updateprogressbar);

document.addEventListener('scroll', () => {
    var reveals = document.querySelectorAll('.section');
    for (var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
});

(function () {
    let logoImg = document.getElementById('logoImg');
    let time = new Date();
    let currTime = time.getHours();
    if (currTime >= 6 && currTime < 18) {
        container.style.backgroundColor = '#fff';
        container.style.color = "#000";
        navbar.style.backgroundColor = "#fff";
        logoImg.setAttribute('src', "./images/logo dark.png");
    } else {
        container.style.backgroundColor = '#000';
        container.style.color = "#fff";
        navbar.style.backgroundColor = "#000";
        logoImg.setAttribute('src', "./images/tel logo.png");
    }
})();

function showhide() {
    if (clutter) {
        hidemenu.style.transform = 'translateX(0%)';
        clutter = false;
    } else {
        hidemenu.style.transform = 'translateX(100%)';
        clutter = true;
    }
}

clickme.addEventListener('click', showhide);
