  /*window.onscroll = function() {scrollFunction()};
  function scrollFunction() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-50px";
    }
  }*/

window.onscroll = function() { 
    scroll() 
}; 

function scroll() { 
    if (document.body.scrollTop > 20 || 
            document.documentElement.scrollTop > 20) { 
        document.getElementById("navbar").style.top = "0"; 
    } 
    else { 
        document.getElementById("navbar").style.top 
                = "-60px"; 
    } 
} 