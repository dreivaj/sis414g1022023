const menu = document.querySelector('.menu');
const men = document.querySelector('.menu-navegacion');

console.log(menu)
console.log(men)

menu.addEventListener('click', ()=>{
    men.classList.toggle("spread")
})
