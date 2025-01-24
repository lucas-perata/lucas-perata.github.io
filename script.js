document.getElementById('subscribeForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const form = e.target;
    
    const emailInput = form.querySelector('.subscribe__input');
    const submitButton = form.querySelector('.subscribe__button');
    const email = emailInput.value;

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showToast('❌ Correo inválido', 'error');
        emailInput.focus();
        return;
    }

    submitButton.innerHTML = `
        <div class="subscribe__button-spinner"></div>
    `;
    submitButton.disabled = true;

    setTimeout(() => {
        showToast('🎉 ¡Suscrito correctamente!', 'success');
        submitButton.textContent = 'SUBSCRIBE';
        submitButton.disabled = false;
        triggerConfetti();
        emailInput.value = '';
    }, 1500);
});

function showToast(message, type) {
    const toast = document.createElement('div');
    toast.className = `subscribe__toast subscribe__toast--${type}`;
    toast.textContent = message;
    document.querySelector('.subscribe').appendChild(toast);
    
    setTimeout(() => toast.remove(), 3000);
}