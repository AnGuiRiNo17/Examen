// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Add animation to nav items
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('show');
        }, 100 * index);
    });

    // Update year in the footer
    document.getElementById('year').textContent = new Date().getFullYear();
});
