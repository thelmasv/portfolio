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