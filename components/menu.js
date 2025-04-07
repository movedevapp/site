// Função para inserir o menu em todas as páginas
function insertMenu() {
    // HTML do menu
    const menuHTML = `
    <nav class="uk-navbar-container uk-sticky" uk-sticky="top: 0; animation: uk-animation-slide-top; cls-active: uk-navbar-sticky">
        <div class="uk-container">
            <div class="uk-navbar">
                <div class="uk-navbar-left">
                    <a class="uk-navbar-item uk-logo" href="/">
                        <img src="images/logo_moveape_white.webp" alt="Move Logo" height="36" class="menu-logo">
                    </a>
                </div>
                <div class="uk-navbar-right">
                    <ul class="uk-navbar-nav uk-visible@m">
                        <li><a href="/">Home</a></li>
                        <li><a href="/comprar">Como Comprar</a></li>
                        <li><a href="/movefit">MoveFit</a></li>
                        <li><a href="/cashback">Cashback</a></li>
                        <li><a href="https://moveape.gitbook.io/whitepaper" target="_blank">Whitepaper</a></li>
                        <li class="social-icons">
                            <a href="https://t.me/moveape" target="_blank" class="social-icon">
                                <img src="images/telegram.svg" alt="Telegram" width="24" height="24">
                            </a>
                            <a href="https://x.com/Move_Ape?t=deMkv1NPmjApNOSk2hB3lA&s=09" target="_blank" class="social-icon">
                                <img src="images/twitter.svg" alt="Twitter" width="24" height="24">
                            </a>
                            <a href="https://www.instagram.com/comunidade_move_ape/" target="_blank" class="social-icon">
                                <img src="images/instagram.svg" alt="Instagram" width="24" height="24">
                            </a>
                        </li>
                        <li>
                            <a href="https://pixape.fun/movefit/" target="_blank" class="app-button">
                                <span style="color: #002E00;">Ir para o APP</span>
                            </a>
                        </li>
                    </ul>
                    <a class="uk-navbar-toggle uk-hidden@m" uk-navbar-toggle-icon href="#mobile-menu" uk-toggle></a>
                </div>
            </div>
        </div>
    </nav>

    <!-- Menu Mobile -->
    <div id="mobile-menu" uk-offcanvas="overlay: true">
        <div class="uk-offcanvas-bar">
            <button class="uk-offcanvas-close" type="button" uk-close></button>
            <ul class="uk-nav uk-nav-default">
                <li><a href="/">Home</a></li>
                <li><a href="/comprar">Como Comprar</a></li>
                <li><a href="/movefit">MoveFit</a></li>
                <li><a href="/cashback">Cashback</a></li>
                <li><a href="https://moveape.gitbook.io/whitepaper" target="_blank" >Whitepaper</a></li>
                <li class="app-button-mobile">
                    <a href="https://pixape.fun/movefit/" target="_blank" class="app-button">
                        <span>Ir para o APP</span>
                    </a>
                </li>
                <li class="social-icons-mobile">
                    <a href="https://t.me/moveape" target="_blank" class="social-icon">
                        <img src="images/telegram.svg" alt="Telegram" width="24" height="24">
                    </a>
                    <a href="https://x.com/Move_Ape?t=deMkv1NPmjApNOSk2hB3lA&s=09" target="_blank" class="social-icon">
                        <img src="images/twitter.svg" alt="Twitter" width="24" height="24">
                    </a>
                    <a href="https://www.instagram.com/comunidade_move_ape/" target="_blank" class="social-icon">
                        <img src="images/instagram.svg" alt="Instagram" width="24" height="24">
                    </a>
                </li>
            </ul>
        </div>
    </div>
    `;

    // Inserir o menu no início do body
    document.body.insertAdjacentHTML('afterbegin', menuHTML);

    // Adicionar link para o arquivo CSS
    const linkElement = document.createElement('link');
    linkElement.rel = 'stylesheet';
    linkElement.href = 'components/menu.css';
    document.head.appendChild(linkElement);

    // Destacar o item do menu atual
    const currentPath = window.location.pathname;
    const menuLinks = document.querySelectorAll('.uk-navbar-nav a, .uk-nav-default a');
    
    menuLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        // Remove a barra inicial e compara os caminhos
        const cleanCurrentPath = currentPath.replace(/^\/|\/$/g, '');
        const cleanLinkPath = linkPath.replace(/^\/|\/$/g, '');
        
        if ((cleanCurrentPath === '' && linkPath === '/') || 
            (cleanCurrentPath !== '' && cleanLinkPath === cleanCurrentPath)) {
            link.parentElement.classList.add('uk-active');
        }
    });
}

// Executar quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', insertMenu);