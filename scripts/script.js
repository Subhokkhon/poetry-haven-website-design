// Functionality for Log In, Create Account, and Subscribe Now buttons
document.getElementById("loginButton").addEventListener("click", () => {
  console.log("Log In button clicked");
  alert("Log In functionality coming soon!");
});

document.getElementById("createAccountButton").addEventListener("click", () => {
  console.log("Create Account button clicked");
  alert("Create Account functionality coming soon!");
});

document.getElementById("subscribeButton").addEventListener("click", () => {
  console.log("Subscribe Now button clicked");
  alert("Subscribe Now functionality coming soon!");
});

// Functionality for Search Poet feature
const searchInput = document.getElementById("searchPoet");
const searchResults = document.getElementById("searchResults");

const poets = [
  "William Wordsworth",
  "Emily Dickinson",
  "Robert Frost",
  "Maya Angelou",
  "Pablo Neruda",
  "Sylvia Plath",
];

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  searchResults.innerHTML = ""; // Clear previous results
  if (query) {
    const filteredPoets = poets.filter((poet) =>
      poet.toLowerCase().includes(query)
    );
    filteredPoets.forEach((poet) => {
      const poetItem = document.createElement("div");
      poetItem.classList.add("poet-item");
      poetItem.textContent = poet;
      searchResults.appendChild(poetItem);
    });
    searchResults.style.display = "block"; // Show search results
  } else {
    searchResults.style.display = "none"; // Hide search results when input is cleared
  }
});

// Optional: Hide search results when clicking outside
document.addEventListener("click", (event) => {
  if (
    !searchInput.contains(event.target) &&
    !searchResults.contains(event.target)
  ) {
    searchResults.style.display = "none";
  }
});
