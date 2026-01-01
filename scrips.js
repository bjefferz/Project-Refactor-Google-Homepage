// Get elements
const searchInput = document.getElementById("search-input");
const googleSearchBtn = document.getElementById("google-search");
const luckySearchBtn = document.getElementById("lucky-search");
const searchForm = document.querySelector(".search__form");

// Function to handle search
function handleSearch(event) {
  event.preventDefault();
  const query = searchInput.value.trim();

  if (query === "") {
    alert("Please enter a search query!");
  } else {
    alert(`You searched for: ${query}`);
  }
}

// Event listener for form submission (Google Search button)
searchForm.addEventListener("submit", handleSearch);

// Event listener for I'm Feeling Lucky button
luckySearchBtn.addEventListener("click", function (event) {
  event.preventDefault();
  const query = searchInput.value.trim();

  if (query === "") {
    alert("Please enter a search query!");
  } else {
    alert(`I'm Feeling Lucky search for: ${query}`);
  }
});
