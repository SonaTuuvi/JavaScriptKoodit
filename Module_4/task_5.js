// Fetch a random Chuck Norris joke and log it in the console
document.addEventListener("DOMContentLoaded", async () => {
  try {
    const response = await fetch("https://api.chucknorris.io/jokes/random"); // Make API request
    if (!response.ok) throw new Error("Failed to fetch joke");

    const data = await response.json(); // Parse response as JSON
    console.log(data.value); // Log only the joke text
  } catch (error) {
    console.error("Error fetching Chuck Norris joke:", error.message);
  }
});
