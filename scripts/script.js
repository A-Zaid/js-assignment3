
function menuIconToggle(x) {
    x.classList.toggle("change");
    document.getElementById("wrapperId").classList.toggle("active");
  }

  function openForm() {
    document.getElementById("formPopup").style.display = "block";
  }

  window.onclick = function(event) {
    if(event.target.className === "modal") {
      event.target.style.display = "none";
    }
  }