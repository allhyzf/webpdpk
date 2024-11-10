// Scroll Reveal Effect
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.scroll-reveal');

    const checkVisibility = () => {
        const windowHeight = window.innerHeight;
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;

            if (sectionTop < windowHeight - 100) {
                section.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Trigger on initial load
});
<script>
    document.addEventListener('DOMContentLoaded', () => {
        // Initialize IntersectionObserver to detect when the hero section comes into view
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);  // Stop observing once it's visible
                }
            });
        }, {
            threshold: 0.1  // Trigger when 10% of the section is in the viewport
        });

        // Target the hero section and observe it
        const heroSection = document.querySelector('.hero');
        observer.observe(heroSection);  // Start observing the section

        // Observe the Mata Kuliah section for smooth scroll reveal
        const mataKuliahSection = document.querySelector('.mata-kuliah');
        observer.observe(mataKuliahSection);
    });

    // Scroll to Mata Kuliah section when the button is clicked
    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
    }

document.querySelectorAll('.team-member .open').forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault(); // Prevents following the link if necessary
        const container = document.querySelector('.team-container');
        container.classList.toggle('active-border');
    });
});
