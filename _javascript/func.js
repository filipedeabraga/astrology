const nav = document.getElementById("nav");
const sticky = navbar.offsetTop;

window.onscroll = function(){
    fixarMenuNoTopo();
}
    function fixarMenuNoTopo() {
    if (window.pageYOffset >= sticky) {
        nav.classList.add("sticky")
  }else {
  nav.classList.remove("sticky");
  }
}