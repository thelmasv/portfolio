$(window).scroll(function() {
  
  // selectors
  var $window = $(window),
      $body = $('body'),
      $panel = $('.panel');
  
  // Change 33% earlier than scroll position so colour is there when you arrive.
  var scroll = $window.scrollTop() + ($window.height() / 5);
 
  $panel.each(function () {
    var $this = $(this);
    
    // if position is within range of this panel.
    // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
    // Remember we set the scroll to 33% earlier in scroll var.
    if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
          
      // Remove all classes on body with color-
      $body.removeClass(function (index, css) {
        return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
      });
       
      // Add class of currently active div
      $body.addClass('color-' + $(this).data('color'));
    }
  });    
  
}).scroll();



  // Get the modal
  var modals = document.getElementsByClassName("modal");
  // Get the button that opens the modal
  var btns = document.getElementsByClassName("myBtn_mob");
  // Get the <span> element that closes the modal
  var spans = document.getElementsByClassName("close");
/*
  // When the user clicks on <span> (x), close the modal
  spans.onclick = function() {
    modal.style.display = "none";
  }*/
  // When the user clicks anywhere outside of the modal, close it
  /*window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }*/
  for(let i=0;i<btns.length;i++){
     btns[i].onclick = function() {
        modals[i].style.display = "block";
     }
  }
  for(let i=0;i<spans.length;i++){
      spans[i].onclick = function() {
         modals[i].style.display = "none";
      }
   }

  // When the user clicks on the button, open the modal
  //btn.onclick = function() {
    //modal.style.display = "block";
  //}
  // Get the modal
  var modals = document.getElementsByClassName("modal");
  // Get the button that opens the modal
  var btns = document.getElementsByClassName("myBtn_web");
  // Get the <span> element that closes the modal
  var spans = document.getElementsByClassName("close");
  for(let i=0;i<btns.length;i++){
     btns[i].onclick = function() {
        modals[i].style.display = "block";
     }
  }
  for(let i=0;i<spans.length;i++){
      spans[i].onclick = function() {
         modals[i].style.display = "none";
      }
   }


(function() {
  init(); //on page load - show first slide, hidethe rest
  function init() {
    parents = document.getElementsByClassName('slideshow-container');
    for (j = 0; j < parents.length; j++) {
      var slides = parents[j].getElementsByClassName("mySlides");
      var dots = parents[j].getElementsByClassName("dot");
      slides[0].classList.add('active-slide');
      dots[0].classList.add('active');
    }
  }
  dots = document.getElementsByClassName('dot'); //dots functionality
  for (i = 0; i < dots.length; i++) {
    dots[i].onclick = function() {
      slides = this.parentNode.parentNode.getElementsByClassName("mySlides");
      for (j = 0; j < this.parentNode.children.length; j++) {
        this.parentNode.children[j].classList.remove('active');
        slides[j].classList.remove('active-slide');
        if (this.parentNode.children[j] == this) {
          index = j;
        }
      }
      this.classList.add('active');
      slides[index].classList.add('active-slide');
    }
  }
//prev/next functionality
  links = document.querySelectorAll('.slideshow-container a');
  for (i = 0; i < links.length; i++) {
    links[i].onclick = function() {
      current = this.parentNode;
      var slides = current.getElementsByClassName("mySlides");
      var dots = current.getElementsByClassName("dot");
      curr_slide = current.getElementsByClassName('active-slide')[0];
      curr_dot = current.getElementsByClassName('active')[0];
      curr_slide.classList.remove('active-slide');
      curr_dot.classList.remove('active');
      if (this.className == 'next') {
        if (curr_slide.nextElementSibling.classList.contains('mySlides')) {
          curr_slide.nextElementSibling.classList.add('active-slide');
          curr_dot.nextElementSibling.classList.add('active');
        } else {
          slides[0].classList.add('active-slide');
          dots[0].classList.add('active');
        }
      }
      if (this.className == 'prev') {
        if (curr_slide.previousElementSibling) {
          curr_slide.previousElementSibling.classList.add('active-slide');
          curr_dot.previousElementSibling.classList.add('active');
        } else {
          slides[slides.length - 1].classList.add('active-slide');
          dots[slides.length - 1].classList.add('active');
        }
      }
    }
  }
})();
