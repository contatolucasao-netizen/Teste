const form = document.getElementById('newsletter-form');
const message = document.getElementById('form-message');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = document.getElementById('email').value.trim();

  if (!email.includes('@') || !email.includes('.')) {
    message.textContent = 'Por favor, informe um e-mail válido.';
    return;
  }

  message.textContent = `Perfeito! ${email} recebeu seu cupom de 10% OFF.`;
  form.reset();
});
