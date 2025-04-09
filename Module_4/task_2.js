// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("tv-form");
  const input = document.getElementById("query");

  // Handle form submission
  form.addEventListener("submit", async (event) => {
    event.preventDefault(); // Prevent default form behavior

    const query = input.value.trim(); // Get and trim the input

    if (query === "") {
      console.log("Please enter a TV show name.");
      return;
    }

    const url = `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`;

    try {
      const response = await fetch(url); // Fetch data from the API
      if (!response.ok) throw new Error("Network response was not ok");

      const data = await response.json(); // Parse JSON response

      console.log("Search results for:", query);
      console.log(data); // Log the entire data object

      // Log show names from the response
      data.forEach((item, index) => {
        console.log(`${index + 1}. ${item.show.name}`);
      });

    } catch (error) {
      console.error("Fetch error:", error);
    }
  });
});
