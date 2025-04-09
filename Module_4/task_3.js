// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("tv-form");
  const input = document.getElementById("query");
  const resultsDiv = document.getElementById("results");

  // Handle form submission
  form.addEventListener("submit", async (event) => {
    event.preventDefault(); // Prevent default form behavior

    const query = input.value.trim(); // Get and trim input

    if (query === "") {
      resultsDiv.innerHTML = "<p>Please enter a show name.</p>";
      return;
    }

    const url = `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`;

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Network error");

      const data = await response.json();

      // Clear previous results
      resultsDiv.innerHTML = "";

      // Loop through shows
      data.forEach((tvShow) => {
        const show = tvShow.show;

        // Create article element
        const article = document.createElement("article");

        // Create and append h2 for show name
        const title = document.createElement("h2");
        title.textContent = show.name;
        article.appendChild(title);

        // Create and append link to details
        const link = document.createElement("a");
        link.href = show.url;
        link.textContent = "More details";
        link.target = "_blank";
        article.appendChild(link);

        // Create and append image (if available)
        if (show.image?.medium) {
          const img = document.createElement("img");
          img.src = show.image.medium;
          img.alt = show.name;
          article.appendChild(img);
        }

        // Create and append summary (as HTML)
        const summary = document.createElement("div");
        summary.innerHTML = show.summary || "No summary available.";
        article.appendChild(summary);

        // Append article to results
        resultsDiv.appendChild(article);
      });

    } catch (error) {
      resultsDiv.innerHTML = `<p>Error: ${error.message}</p>`;
    }
  });
});
