/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }


const contentHolders = document.querySelectorAll(".s2-contentHolder");

contentHolders.forEach((holder) => {
    holder.addEventListener("click", function (event) {

        contentHolders.forEach((h) => h.classList.remove("s2-contentHolderClicked"));

        this.classList.add("s2-contentHolderClicked");
    });
});

document.addEventListener("click", function (event) {
    if (!event.target.closest(".s2-contentHolder")) {
        contentHolders.forEach((holder) => holder.classList.remove("s2-contentHolderClicked"));
    }
});
