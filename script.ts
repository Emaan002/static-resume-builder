const toggleButton = document.getElementById('toggleButton');
const skillsSection = document.getElementById('skillsSection');

// Toggle function
toggleButton.addEventListener('click', () => {
    if (skillsSection.style.display === 'none' || skillsSection.style.display === '') {
        skillsSection.style.display = 'block';
        toggleButton.textContent = 'Hide Skills';
        toggleButton.classList.add('active'); // Change button color
    } else {
        skillsSection.style.display = 'none';
        toggleButton.textContent = 'Show Skills';
        toggleButton.classList.remove('active'); // Revert button color
    }
});