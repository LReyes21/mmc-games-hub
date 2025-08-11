/* Games Hub JavaScript */

document.addEventListener('DOMContentLoaded', function() {
    
    console.log('Games.js loaded successfully');
    
    // Game filtering functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const gameCards = document.querySelectorAll('.game-card');
    
    console.log('Found', filterButtons.length, 'filter buttons');
    console.log('Found', gameCards.length, 'game cards');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            console.log('Filter button clicked:', this.dataset.grade);
            
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const selectedGrade = this.dataset.grade;
            
            // Show/hide games based on filter
            gameCards.forEach(card => {
                const cardGrade = card.dataset.grade;
                console.log('Checking card with grade:', cardGrade, 'against filter:', selectedGrade);
                
                if (selectedGrade === 'all') {
                    card.classList.remove('hidden');
                    console.log('Showing card (all filter)');
                } else if (cardGrade === selectedGrade || cardGrade === 'all') {
                    card.classList.remove('hidden');
                    console.log('Showing card (matching filter)');
                } else {
                    card.classList.add('hidden');
                    console.log('Hiding card (no match)');
                }
            });
            
            // Update visible count
            updateGameCount();
        });
    });
    
    // Function to update game count
    function updateGameCount() {
        const visibleGames = document.querySelectorAll('.game-card:not(.hidden)').length;
        const activeFilter = document.querySelector('.filter-btn.active').textContent;
        console.log(`Showing ${visibleGames} games for ${activeFilter}`);
    }
    
    // Add hover effects and animations
    gameCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Smooth scroll for any internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Initialize the page
    updateGameCount();
    
});
