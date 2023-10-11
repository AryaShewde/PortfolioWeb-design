const navbarul = document.querySelector('.navbar nav ul');
const navbarnav = document.querySelector('.navbar nav');
const logo = document.querySelector('.logo');
const navbar = document.querySelector('.navbar');
const cross = document.querySelector('.cross');
const humburger = document.querySelector('.humburger');

humburger.addEventListener('click', show);
cross.addEventListener('click', hide);

function show(){
    humburger.style.display = 'none';
    navbar.style.justifyContent  = "center";
    navbarnav.style.display = 'block';
    navbar.style.flexDirection = "column";
    navbarul.style.flexDirection = "column";
    navbarul.style.alignItems = "center";
    cross.style.display = "block";
    logo.style.display = "flex";
    logo.style.justifyContent = "space-between";
}
function hide(){
    humburger.style.display = 'block';
    navbar.style.flexDirection = "row-reverse";
    navbar.style.justifyContent  = "space-between";
    navbarnav.style.display = "none";
    cross.style.display = "none";
}