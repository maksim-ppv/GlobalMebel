
const videoOpenAll = document.querySelectorAll('.video-about__block');
  
videoOpenAll.forEach(item=>{
  item.addEventListener('click',()=>{
    const iframe = item.querySelector('iframe');
    const videoOpen = item.querySelector('.video-about__open-video');
    let video = $(iframe).attr("src");

    $(iframe).attr("src", video + "?autoplay=1");
    $(videoOpen).fadeIn();

  })
})




// our-projects 

$(document).ready(function() {
  $(".our-controls__uls").on('click', '.our-controls__li', function() {
      const ourProjectItem = document.querySelectorAll('.our-project__item');
      
      var newImage = $(this).index();
      if(!newImage == 0){
        ourProjectItem.forEach(item=>{
            item.style.display='none';
            let category = $(item).data('category');
            console.log('category: ', category);
            if( newImage == category){
                  item.style.display='';
          };
        });
      }else{
        ourProjectItem.forEach(item=>{
          item.style.display='';
      });
      }

      $(".our-controls__li").removeClass("our-controls__li_active");
      $(this).addClass("our-controls__li_active");
    });
});