

let search = document.getElementById('search');
let searchShow = document.getElementById('search-show');

search.onclick = function() {
    searchShow.style.background = '#ffffff';  
}

$('.single-item').slick({
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1
});

// $('#slick-slider').on('afterChange', function(event, slick, currentSlide){
//     $('.btn-wrapper').each((i,e)=>{
//         e.removeClass('_slider-selected')
//     });
//     $('.btn-wrapper')[currentSlide].addClass('_slider-selected')

//     if (currentSlide == 5) { console.log('Осуществлён переход к 5му слайду'); }
//   });
