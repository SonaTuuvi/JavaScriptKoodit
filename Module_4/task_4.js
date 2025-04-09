// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("tv-form");
  const input = document.getElementById("query");
  const resultsDiv = document.getElementById("results");

  // Handle form submission
  form.addEventListener("submit", async (event) => {
    event.preventDefault(); // Prevent default form submission

    const query = input.value.trim(); // Get the user's input

    if (query === "") {
      resultsDiv.innerHTML = "<p>Please enter a show name.</p>";
      return;
    }

    const url = `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`;

    try {
      const response = await fetch(url); // Fetch data from the API
      if (!response.ok) throw new Error("Network error");

      const data = await response.json(); // Convert response to JSON

      // Clear previous search results
      resultsDiv.innerHTML = "";

      // If no results, show message
      if (data.length === 0) {
        resultsDiv.innerHTML = "<p>No shows found.</p>";
        return;
      }

      // Loop through each show and create HTML elements
      data.forEach((tvShow) => {
        const show = tvShow.show;
        const article = document.createElement("article");

        // Show title
        const title = document.createElement("h2");
        title.textContent = show.name;
        article.appendChild(title);

        // Link to show page
        const link = document.createElement("a");
        link.href = show.url;
        link.textContent = "More details";
        link.target = "_blank";
        article.appendChild(link);

        // Image element with fallback image
        const img = document.createElement("img");
        const imageUrl = show.image && show.image.medium
          ? show.image.medium
          : "https://via.placeholder.com/210x295?text=Not%20Found";
        img.src = imageUrl;
        img.alt = show.name;
        article.appendChild(img);

        // Summary
        const summary = document.createElement("div");
        summary.innerHTML = show.summary || "No summary available.";
        article.appendChild(summary);

        // Append article to the results container
        resultsDiv.appendChild(article);
      });

    } catch (error) {
      // Handle fetch or network errors
      resultsDiv.innerHTML = `<p>Error: ${error.message}</p>`;
    }
  });
});
