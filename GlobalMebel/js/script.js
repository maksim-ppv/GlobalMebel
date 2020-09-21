
const btn = document.querySelector('.menu-button');
const menu = document.querySelector('.mobile__navbar');



const modal = ()=>{
   menu.classList.toggle('hide');
   menu.classList.toggle('show');
   btn.classList.toggle('line_active');
}

menu.addEventListener('click', event => {
   const target = event.target
   if(!target.closest('.menu-mobile__body')){
      modal();
   }
});
btn.addEventListener('click', modal);
;
window.onload = function() {
    setTimeout(function(){
        let preloader = document.getElementById('cube-loader');
        
        if(!preloader.classList.contains('done')){
            preloader.classList.add('done');
        }
    }, 1000);
};;

