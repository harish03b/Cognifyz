// JavaScript for toggling the hamburger menu
document.getElementById('hamburger').addEventListener('click', function() {
    var menu = document.getElementById('navbar-links');
    menu.classList.toggle('show');
});
