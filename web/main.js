document.querySelectorAll('.tab-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const target = this.getAttribute('href');
        
        document.querySelectorAll('.tab').forEach(tab => {
            tab.classList.remove('active');
        });
        
        document.querySelectorAll('.tab-links li').forEach(li => {
            li.classList.remove('active');
        });

        this.parentElement.classList.add('active');
        document.querySelector(target).classList.add('active');
    });
});