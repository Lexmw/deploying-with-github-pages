document.getElementById("changeTextBtn").addEventListener("click", function () {
  document.getElementById("message").textContent = "You clicked the button! 🚀";
});

document
  .getElementById("changeColorBtn")
  .addEventListener("click", function () {
    document.body.style.backgroundColor =
      "#" + Math.floor(Math.random() * 16777215).toString(16); // Generates a random color
  });
