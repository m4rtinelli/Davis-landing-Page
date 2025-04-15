const footer = document.querySelector('footer')

window.addEventListener('wheel', function() {
    console.log('rolou')
    footer.classList.add('visible');  
});


let touchStartY = 0;

document.addEventListener('touchstart', function(event) {
  touchStartY = event.changedTouches[0].screenY;
});

document.addEventListener('touchend', function(event) {
  let touchEndY = event.changedTouches[0].screenY;
  let deltaY = touchEndY - touchStartY;

  if (deltaY < 0) { 
    document.querySelector('footer').classList.add('.visible');
  }

});