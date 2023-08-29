document.addEventListener("DOMContentLoaded", function () {
    const searchButton = document.getElementById("searchButton");
    const searchQuery = document.getElementById("searchQuery");
  
    searchButton.addEventListener("click", function () {
      const query = searchQuery.value;
      if (query.trim() !== "") {
        const url = "https://www.google.com/search?q=" + encodeURIComponent(query);
        chrome.tabs.create({ url: url });
      }
    });
  });
  