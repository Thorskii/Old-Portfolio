function openProject(evt, projName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
  tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(projName).style.display = "block";
  evt.currentTarget.className += " active";
}


function dropdownFunction1() {
  document.getElementById("myDropdown1").classList.toggle("show");
  
}

function dropdownFunction2() {
  document.getElementById("myDropdown2").classList.toggle("show");
  
}
function dropdownFunction3() {
  document.getElementById("myDropdown3").classList.toggle("show");
  
}
function dropdownFunction4() {
  document.getElementById("myDropdown4").classList.toggle("show");
  
}
function dropdownFunction5() {
  document.getElementById("myDropdown5").classList.toggle("show");
  
}

function dropdownFunction6() {
    document.getElementById("myDropdown6").classList.toggle("show");
        
}
function dropdownFunction7() {
    document.getElementById("myDropdown7").classList.toggle("show");
        
}


