document.getElementById("businessForm")?.addEventListener("submit", async function(e){
  e.preventDefault();
  const data = {
    name: this.name.value,
    city: this.city.value,
    category: this.category.value,
    years: this.years.value,
    reviews: this.reviews.value
  };

  // Placeholder AI call
  const resultsDiv = document.getElementById("results");
  resultsDiv.textContent = "AI is analyzing your business data...";
  setTimeout(() => {
    resultsDiv.textContent = `AI Suggestions for ${data.name} in ${data.city} (${data.category})`;
  }, 1500);

  // Redirect to payment
  window.location.href = "payment.html";
});
