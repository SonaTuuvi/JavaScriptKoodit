// Wait for DOM to be ready
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("joke-form");
  const input = document.getElementById("search");
  const resultsDiv = document.getElementById("results");

  // Handle form submission
  form.addEventListener("submit", async (event) => {
    event.preventDefault(); // Stop normal form submission
    const query = input.value.trim();

    if (query === "") {
      resultsDiv.innerHTML = "<p>Please enter a search term.</p>";
      return;
    }

    const url = `https://api.chucknorris.io/jokes/search?query=${encodeURIComponent(query)}`;

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Failed to fetch jokes");

      const data = await response.json();

      // Clear previous results
      resultsDiv.innerHTML = "";

      // Check if there are jokes
      if (data.result.length === 0) {
        resultsDiv.innerHTML = `<p>No jokes found for "<strong>${query}</strong>".</p>`;
        return;
      }

      // Display each joke in <article><p>...</p></article>
      data.result.forEach((joke) => {
        const article = document.createElement("article");
        const p = document.createElement("p");
        p.textContent = joke.value;
        article.appendChild(p);
        resultsDiv.appendChild(article);
      });

    } catch (error) {
      resultsDiv.innerHTML = `<p>Error: ${error.message}</p>`;
      console.error("Error fetching jokes:", error.message);
    }
  });
});
