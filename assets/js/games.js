/* Games Hub JavaScript */

document.addEventListener('DOMContentLoaded', function() {
    
    // Game filtering functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const gameCards = document.querySelectorAll('.game-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const selectedGrade = this.dataset.grade;
            
            // Show/hide games based on filter
            gameCards.forEach(card => {
                if (selectedGrade === 'all') {
                    card.classList.remove('hidden');
                    card.style.animation = 'fadeIn 0.5s ease-in';
                } else {
                    const cardGrades = card.dataset.grade.split(',');
                    if (cardGrades.includes(selectedGrade)) {
                        card.classList.remove('hidden');
                        card.style.animation = 'fadeIn 0.5s ease-in';
                    } else {
                        card.classList.add('hidden');
                    }
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
        
        // You can add a count display here if needed
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
    
    // Add click tracking for analytics and handle coming soon games
    gameCards.forEach(card => {
        card.addEventListener('click', function(e) {
            const gameName = card.querySelector('.play-button').textContent.replace('\n(Coming Soon)', '');
            console.log(`Game clicked: ${gameName}`);
            
            // If it's a "Coming Soon" game, show message and prevent navigation
            if (this.classList.contains('coming-soon')) {
                e.preventDefault();
                showComingSoonMessage(gameName);
            }
        });
    });
    
    // Coming soon message function
    function showComingSoonMessage(gameName) {
        // Create a simple modal/alert for coming soon games
        const modal = document.createElement('div');
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
            animation: fadeIn 0.3s ease;
        `;
        
        modal.innerHTML = `
            <div style="
                background: white;
                padding: 3em;
                border-radius: 20px;
                text-align: center;
                max-width: 400px;
                margin: 1em;
                box-shadow: 0 20px 40px rgba(0,0,0,0.3);
            ">
                <h2 style="color: #2c3e50; margin-bottom: 1em;">🚀 ${gameName}</h2>
                <p style="color: #7f8c8d; margin-bottom: 2em; font-size: 1.1em;">
                    This awesome game is coming soon! We're working hard to make it perfect for you.
                </p>
                <button onclick="this.closest('div').remove()" style="
                    background: #3498db;
                    color: white;
                    border: none;
                    padding: 1em 2em;
                    border-radius: 25px;
                    font-weight: bold;
                    cursor: pointer;
                    font-size: 1em;
                ">Got it!</button>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Remove modal when clicking outside
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.remove();
            }
        });
    }
    
    // Add keyboard navigation support
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            // Close any open modals
            const modals = document.querySelectorAll('[style*="position: fixed"]');
            modals.forEach(modal => modal.remove());
        }
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
    
    // Add loading animation for external links
    document.querySelectorAll('a[href^="http"]').forEach(link => {
        link.addEventListener('click', function() {
            this.innerHTML = '<div class="loading"></div> Loading...';
        });
    });
    
});

// CSS animation keyframes (add to CSS if not already there)
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(style);
