// Simple document-ready script - no interactive features
document.addEventListener('DOMContentLoaded', function() {
    console.log('Computer Networks Assignment webpage loaded - Document submission ready');
    
    // Remove all FontAwesome icons for cleaner document appearance
    const icons = document.querySelectorAll('i.fas, i.fa');
    icons.forEach(icon => {
        icon.style.display = 'none';
    });
    
    // Ensure all elements are visible and properly formatted for document export
    const sections = document.querySelectorAll('.question-section, .assignment-overview, .summary-section');
    sections.forEach(section => {
        section.style.opacity = '1';
        section.style.transform = 'none';
    });
});