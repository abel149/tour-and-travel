var readMoreBtn = document.querySelectorAll(".read-more-btn");
var text = document.querySelectorAll(".text");

readMoreBtn.forEach(function (btn, index) {
  // Get the corresponding text element for each button
  var txt = text[index];
  // Add a click event listener to each button
  btn.addEventListener("click", function (e) {
    // Toggle the visibility of the hidden content
    txt.classList.toggle("show-more");
    // Change the text of the button accordingly
    if (btn.innerText === "Read more") {
      btn.innerHTML = "Read less";
    } else {
      btn.innerHTML = "Read more";
    }
  });
});
