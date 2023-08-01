document.addEventListener("DOMContentLoaded", function () {
  const spradhaButton = document.getElementById("spradhaButton");
  const locationElement = document.getElementById("location");
  const collegeElement = document.getElementById("college");

  spradhaButton.addEventListener("click", function () {
    const locationInput = prompt("Where are you?");
    const collegeInput = prompt("Which college do you attend?");

    // Validate the user input using the input patterns
    const locationPattern = /^[A-Za-z\s]+$/;
    const collegePattern = /^[A-Za-z\s]+$/;

    if (locationPattern.test(locationInput) && collegePattern.test(collegeInput)) {
      locationElement.textContent = `You are at:  +{locationInput}`;
      collegeElement.textContent = `Your College: ${collegeInput}`;

      const spradhaEvent = new CustomEvent("spradha", { detail: { location: locationInput, college: collegeInput } });
      document.dispatchEvent(spradhaEvent);
    } else {
      ("Invalid input! Please enter a valid location and college name with only alphabets and spaces.");
    }
  });

  document.addEventListener("spradha", function (event) {
    const { location, college } = event.detail;
    
    alert(`Spradha Event !\n\nLocation: ${location}\nCollege: ${college}`);
  });

  

  function isValidMove(selectedTile, emptyTile) {
    const selectedTileIndex = parseInt(selectedTile.dataset.index);
    const emptyTileIndex = parseInt(emptyTile.dataset.index);

    if (selectedTileIndex === emptyTileIndex - 1 && selectedTileIndex % 3 !== 0) {
      return true;
    } else if (selectedTileIndex === emptyTileIndex + 1 && selectedTileIndex % 3 !== 2) {
      return true;
    } else if (selectedTileIndex === emptyTileIndex - 3) {
      return true;
    } else if (selectedTileIndex === emptyTileIndex + 3) {
      return true;
    }

    return false;
  }

  puzzle.addEventListener("click", function (event) {
    const selectedTile = event.target.closest(".puzzle-tile");
    if (selectedTile) {
      swapTiles(selectedTile);
    }
  });

  // Shuffle the puzzle at the start
  shufflePuzzle();
});
// Setting up the Variables
var bars = document.getElementById("nav-action");
var nav = document.getElementById("nav");


//setting up the listener
bars.addEventListener("click", barClicked, false);


//setting up the clicked Effect
function barClicked() {
  bars.classList.toggle('active');
  nav.classList.toggle('visible');
}
