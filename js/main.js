// (function(){
// 	$('.flex-container').waitForImages(function() {
// 		$('.spinner').fadeOut();
// 	}, $.noop, true);
	
// 	$(".flex-slide").each(function(){
// 		$(this).hover(function(){
// 			$(this).find('.flex-title').css({
// 				transform: 'rotate(0deg)',
// 				top: '10%'
// 			});
// 			$(this).find('.flex-about').css({
// 				opacity: '1'
// 			});
// 		}, function(){
// 			$(this).find('.flex-title').css({
// 				transform: 'rotate(90deg)',
// 				top: '15%'
// 			});
// 			$(this).find('.flex-about').css({
// 				opacity: '0'
// 			});
// 		})
// 	});
// })();

// const imgContent = document.querySelectorAll('.img-content-hover');

// function showImgContent(e) {
//   for(var i = 0; i < imgContent.length; i++) {
//     x = e.pageX;
//     y = e.pageY;
//     imgContent[i].style.transform = `translate3d(${x}, ${y}, 0)`;
//   }
// };

// document.addEventListener('mousemove', showImgContent);


(() => {
    const refs = {
      openModalBtn6: document.querySelector('[data-modal-open6]'),
      closeModalBtn6: document.querySelector('[data-modal-close6]'),

      modal6: document.querySelector('[data-modal6]'),
      };
  
    refs.openModalBtn6.addEventListener('click', toggleModal6);
    refs.closeModalBtn6.addEventListener('click', toggleModal6);
      
    function toggleModal6() {
    refs.modal6.classList.toggle('is-hidden6');
    }
    
    })();
