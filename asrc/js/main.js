
  $('.video-about__open').click(function () {
    $("#myModal iframe").attr("src", "https://www.youtube.com/embed/Joq6QU9Fm3Y" + "?autoplay=1");
    $('.video-about__open-video').fadeIn();

});




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