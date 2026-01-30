// Script para funcionalidades do site

// Menu hamburguer
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
    
    // Fechar menu ao clicar em um link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
    
    // Animação ao rolar a página
    const observerOptions = {
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Adicionar animação aos elementos
    document.querySelectorAll('.feature-card, .benefit-item, .stats').forEach(el => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Formulário de contato
    const contatoForm = document.getElementById('contatoForm');
    if (contatoForm) {
        contatoForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Pegar valores do formulário
            const formData = new FormData(contatoForm);
            const nome = formData.get('nome');
            const clinica = formData.get('clinica');
            
            // Simular envio
            alert(`Obrigado ${nome}! Recebemos sua mensagem para a clínica ${clinica}. Entraremos em contato em breve.`);
            
            // Resetar formulário
            contatoForm.reset();
        });
    }
    
    // Rolar suavemente para seções
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Efeito de digitação no chat do hero
    simulateChatTyping();
});

// Simular digitação no chat do hero
function simulateChatTyping() {
    const chatContainer = document.querySelector('.chat-container');
    if (!chatContainer) return;
    
    // Adicionar delay para simular resposta do bot
    setTimeout(() => {
        const newMessage = document.createElement('div');
        newMessage.className = 'message outgoing';
        newMessage.innerHTML = '<p>Maravilha! Vou verificar os horários disponíveis...</p>';
        chatContainer.appendChild(newMessage);
        
        // Scroll para a última mensagem
        chatContainer.parentElement.scrollTop = chatContainer.parentElement.scrollHeight;
    }, 3000);
    
    setTimeout(() => {
        const newMessage = document.createElement('div');
        newMessage.className = 'message incoming';
        newMessage.innerHTML = '<p>Ok, posso confirmar</p>';
        chatContainer.appendChild(newMessage);
        
        // Scroll para a última mensagem
        chatContainer.parentElement.scrollTop = chatContainer.parentElement.scrollHeight;
    }, 6000);
    
    setTimeout(() => {
        const newMessage = document.createElement('div');
        newMessage.className = 'message outgoing';
        newMessage.innerHTML = '<p>🎉 Seu agendamento foi confirmado!</p>';
        chatContainer.appendChild(newMessage);
        
        // Scroll para a última mensagem
        chatContainer.parentElement.scrollTop = chatContainer.parentElement.scrollHeight;
    }, 9000);
}

// Função para alternar entre temas (claro/escuro)
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');
    
    // Armazenar preferência do usuário
    const isDark = body.classList.contains('dark-theme');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// Carregar tema salvo
function loadSavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }
}

// Inicializar tema ao carregar
document.addEventListener('DOMContentLoaded', loadSavedTheme);