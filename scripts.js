/* Function to show button to top*/ 

window.addEventListener('scroll', function(){
    const toTop = document.querySelector('.top-btn');
    toTop.classList.toggle("fadeIn", window.scrollY > 120);
});

/* Function to change banners photos */

function changeBanner1(bannerPhoto){
    document.querySelector('.banner').style.background = 'url(./images/banner1.jpg)';
    document.querySelector('.banner').style.backgroundSize = 'cover';
}

function changeBanner2(bannerPhoto){
    document.querySelector('.banner').style.background = 'url(./images/banner2.jpg)';
    document.querySelector('.banner').style.backgroundSize = 'cover';
}

function changeBanner3(bannerPhoto){
    document.querySelector('.banner').style.background = 'url(./images/banner3.jpg)';
    document.querySelector('.banner').style.backgroundSize = 'cover';
    document.querySelector('.banner').style.backgroundPosition = 'top';
}

/* Function to change services photos */

function changePhoto(photo){
  document.getElementById('photo').src = photo;
}

/* Function to change services texts and prices */

function scrub() {
    document.getElementById("serviceTitle").innerHTML = "BODY SCRUB";
    document.getElementById("servicePrice").innerHTML = "€25.00";
}

function waxing() {
    document.getElementById("serviceTitle").innerHTML = "WAXING";
    document.getElementById("servicePrice").innerHTML = "€15.00";
}

function facialCare() {
    document.getElementById("serviceTitle").innerHTML = "FACIAL CARE";
    document.getElementById("servicePrice").innerHTML = "€30.00";
}

function mediSpa() {
    document.getElementById("serviceTitle").innerHTML = "MEDI-SPA";
    document.getElementById("servicePrice").innerHTML = "€40.00";
}

function massages() {
    document.getElementById("serviceTitle").innerHTML = "MASSAGES";
    document.getElementById("servicePrice").innerHTML = "€20.00";
}

function hairCut() {
    document.getElementById("serviceTitle").innerHTML = "HAIR CUT";
    document.getElementById("servicePrice").innerHTML = "€45.00";
}

