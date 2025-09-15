
document.getElementById('contactForm').addEventListener('submit', async function(e) {
  e.preventDefault(); // Prevent form reload

  const formData = new FormData(this);

  try {
    const response = await fetch('submit.php', {
      method: 'POST',
      body: formData
    });

    const result = await response.text();
    alert(result); // Show server response
  } catch (error) {
    console.error('Error:', error);
    alert("Something went wrong!");
  }
});

