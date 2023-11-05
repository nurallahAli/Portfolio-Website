document.querySelector(".bars-1").addEventListener("click", () => {
    document.querySelector(".ul-links").classList.toggle("active");
});
const icon = document.querySelector("#icon");
icon.addEventListener("click", () => {
 document.body.classList.toggle('dark-theme');
 if (document.body.classList.contains('dark-theme')){
    icon.src = "./Imgs/sun.png";
 }else{
    icon.src = "./Imgs/moon.png";
 }
})