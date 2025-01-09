document.getElementById("quoteForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const mobile = document.getElementById("mobile").value.trim();
  const company = document.getElementById("company").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name && email && mobile && message) {
    alert("Form submitted successfully!");
    this.reset();
  } else {
    alert("Please fill in all required fields.");
  }
});
