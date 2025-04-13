const accordionButtons = document.querySelectorAll('.accordion-button');

accordionButtons.forEach(button => {
    button.addEventListener('click', () => {
        const isExpanded = button.getAttribute('aria-expanded') === 'true';
        const content = button.nextElementSibling;

        // Закриваємо всі акордеони
        accordionButtons.forEach(btn => {
            btn.setAttribute('aria-expanded', false);
            btn.nextElementSibling.classList.remove('open');
            btn.nextElementSibling.style.maxHeight = null;
        });

        // Якщо поточний був закритий — відкриваємо
        if (!isExpanded) {
            button.setAttribute('aria-expanded', true);
            content.classList.add('open');
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
});


Fancybox.bind("[data-fancybox='gallery']", {
    // опції за бажанням
});