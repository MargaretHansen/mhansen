console.log("Hello from script.js!");
console.log("Hello from script.js!");
const form = document.getElementById('contact-form');
if (form) {
  const successMessage = document.getElementById('form-success');

  form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        form.style.display = 'none';
        successMessage.style.display = 'block';
      } else {
        alert('Something went wrong — please try again.');
      }
    } catch (error) {
      alert('Something went wrong — please try again.');
    }
  });
}