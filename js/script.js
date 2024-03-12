document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
    const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
    const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
    const header = document.querySelector('.header.container');
    const brandText = document.getElementById('brand-text'); 

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });

    document.addEventListener('scroll', () => {
        var scroll_position = window.scrollY;

        if (scroll_position > 300) {
            header.style.backgroundColor = '#020D43'; 
            brandText.style.display = 'inline'; 
            brandText.style.color = 'white';
			brandText.style.fontSize = '3em';
        } else {
            header.style.backgroundColor = 'transparent'; 
            brandText.style.display = 'none'; 
        }
    });

    menu_item.forEach((item) => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            mobile_menu.classList.toggle('active');
        });
    });
});


// ---------------------------------

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.querySelectorAll(".tab-contents");
function opentab(tabname) {
    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (let tabcontent of tabcontents) {
        tabcontent.style.display = "none";
    }
    event.currentTarget.classList.add("active-link");
    document.querySelectorAll("." + tabname).forEach(tabcontent => {
        tabcontent.style.display = "block";
    });
}
