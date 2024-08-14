document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.tarot-card');
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('card-content');
    const closeBtn = document.querySelector('.close-btn');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            const content = card.getAttribute('data-content');
            modalContent.textContent = content;
            modal.style.display = 'flex';
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});
