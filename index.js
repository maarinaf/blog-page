// Dados simulados de posts
const posts = [
    {
        titulo: "Bitcoin atinge nova máxima histórica",
        conteudo: "O Bitcoin superou todas as expectativas e atingiu um novo recorde de preço, ultrapassando US$ 73.000. Analistas preveem continuação do movimento de alta.",
        data: "2024-03-20",
        imagem: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=500",
        categoria: "Mercado"
    },
    {
        titulo: "Ethereum 2.0: O que esperar?",
        conteudo: "A atualização do Ethereum promete revolucionar a rede com novos recursos de escalabilidade e sustentabilidade. Staking continua crescendo.",
        data: "2024-03-19",
        imagem: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=500",
        categoria: "Tecnologia"
    },
    {
        titulo: "Guia para iniciantes: Como comprar criptomoedas",
        conteudo: "Aprenda os passos básicos para começar a investir em criptomoedas de forma segura. Dicas essenciais para novos investidores.",
        data: "2024-03-18",
        imagem: "https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?w=500",
        categoria: "Educacional"
    },
    {
        titulo: "Cardano implementa nova atualização",
        conteudo: "A rede Cardano acaba de implementar uma atualização significativa que promete melhorar a velocidade das transações e reduzir taxas.",
        data: "2024-03-17",
        imagem: "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?w=500",
        categoria: "Tecnologia"
    },
    {
        titulo: "NFTs: O futuro do mercado digital de arte",
        conteudo: "Mercado de NFTs mostra sinais de recuperação com novas coleções e integrações com IA gerando interesse renovado dos investidores.",
        data: "2024-03-16",
        imagem: "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?w=500",
        categoria: "NFTs"
    },
    {
        titulo: "Regulamentação Cripto: Novidades no Brasil",
        conteudo: "Banco Central anuncia novas diretrizes para exchanges de criptomoedas operarem no Brasil. Mudanças começam a valer em 2024.",
        data: "2024-03-15",
        imagem: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=500",
        categoria: "Regulamentação"
    },
    {
        titulo: "Solana bate recorde de transações diárias",
        conteudo: "A blockchain Solana registrou mais de 50 milhões de transações em um único dia, demonstrando sua capacidade de escalabilidade e baixo custo operacional.",
        data: "2024-03-14",
        imagem: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=500",
        categoria: "Tecnologia"
    },
    {
        titulo: "Binance anuncia nova plataforma de DeFi",
        conteudo: "A maior exchange do mundo está lançando uma nova plataforma focada em finanças descentralizadas, prometendo revolucionar o setor de DeFi.",
        data: "2024-03-13",
        imagem: "https://images.unsplash.com/photo-1621504450181-5d356f61d307?w=500",
        categoria: "DeFi"
    },
    {
        titulo: "Mining de Bitcoin: China volta ao jogo",
        conteudo: "Após período de proibição, mineradores chineses encontram brechas para voltar à ativa, impactando significativamente o hashrate global.",
        data: "2024-03-12",
        imagem: "https://images.unsplash.com/photo-1631897642056-97a7abff6818?w=500",
        categoria: "Mineração"
    },
    {
        titulo: "Ripple expande operações na América Latina",
        conteudo: "Após vitória contra SEC, Ripple anuncia grande expansão na América Latina com novos corredores de remessa e parcerias bancárias.",
        data: "2024-03-11",
        imagem: "https://images.unsplash.com/photo-1622630998477-20aa696ecb05?w=500",
        categoria: "Negócios"
    },
    {
        titulo: "Metaverso cripto atrai grandes marcas",
        conteudo: "Nike, Adidas e outras gigantes do varejo aumentam investimentos em terrenos virtuais e NFTs, apostando no futuro do metaverso.",
        data: "2024-03-10",
        imagem: "https://images.unsplash.com/photo-1614332287897-cdc485fa562d?w=500",
        categoria: "Metaverso"
    },
    {
        titulo: "Novo fork do Ethereum promete revolucionar gas fees",
        conteudo: "Desenvolvedores propõem atualização que pode reduzir taxas de gas em até 80% na rede Ethereum. Comunidade debate implementação.",
        data: "2024-03-09",
        imagem: "https://images.unsplash.com/photo-1622630998477-20aa696ecb05?w=500",
        categoria: "Tecnologia"
    },
    {
        titulo: "El Salvador lança universidade de Bitcoin",
        conteudo: "Primeiro país a adotar Bitcoin como moeda legal anuncia criação de universidade focada em tecnologia blockchain e criptoeconomia.",
        data: "2024-03-08",
        imagem: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=500",
        categoria: "Educação"
    },
    {
        titulo: "IA e Blockchain: Nova parceria promissora",
        conteudo: "Projetos combinando inteligência artificial e blockchain ganham destaque com aplicações revolucionárias em DeFi e análise de mercado.",
        data: "2024-03-07",
        imagem: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=500",
        categoria: "Inovação"
    }
];

// Função para criar cards de posts
function criarPosts() {
    const postContainer = document.getElementById('postContainer');
    
    posts.forEach(post => {
        const postCard = document.createElement('div');
        postCard.className = 'post-card';
        
        postCard.innerHTML = `
            <div class="post-image">
                <img src="${post.imagem}" alt="${post.titulo}">
                <span class="categoria-tag">${post.categoria}</span>
            </div>
            <div class="post-content">
                <h3>${post.titulo}</h3>
                <p>${post.conteudo}</p>
                <div class="post-footer">
                    <small class="data">${post.data}</small>
                    <button class="ler-mais">Ler mais</button>
                </div>
            </div>
        `;
        
        postContainer.appendChild(postCard);
    });
}

// Função para filtrar posts por categoria
function filtrarPosts(categoria) {
    const postContainer = document.getElementById('postContainer');
    const tituloSecao = document.querySelector('.featured-post h2');
    
    // Limpa os posts existentes
    postContainer.innerHTML = '';
    
    // Filtra os posts
    let postsParaMostrar = posts;
    if (categoria !== 'home') {
        postsParaMostrar = posts.filter(post => post.categoria.toLowerCase() === categoria);
        tituloSecao.textContent = `Notícias sobre ${categoria}`;
    } else {
        tituloSecao.textContent = 'Últimas Notícias do Mercado Cripto';
    }
    
    // Cria os cards com os posts filtrados
    postsParaMostrar.forEach(post => {
        const postCard = document.createElement('div');
        postCard.className = 'post-card';
        
        postCard.innerHTML = `
            <div class="post-image">
                <img src="${post.imagem}" alt="${post.titulo}">
                <span class="categoria-tag">${post.categoria}</span>
            </div>
            <div class="post-content">
                <h3>${post.titulo}</h3>
                <p>${post.conteudo}</p>
                <div class="post-footer">
                    <small class="data">${post.data}</small>
                    <button class="ler-mais">Ler mais</button>
                </div>
            </div>
        `;
        
        postContainer.appendChild(postCard);
    });
}

// Função para inicializar os eventos de navegação
function inicializarNavegacao() {
    const links = document.querySelectorAll('.nav-menu a');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove a classe ativa de todos os links
            links.forEach(l => l.classList.remove('active'));
            // Adiciona a classe ativa ao link clicado
            link.classList.add('active');
            
            // Obtém a categoria do href do link
            const categoria = link.getAttribute('href').replace('#', '');
            
            // Filtra os posts
            filtrarPosts(categoria);
            
            // Atualiza a URL sem recarregar a página
            history.pushState(null, '', `#${categoria}`);
        });
    });
}

// Inicializar o blog quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
    // Verifica se há uma categoria na URL
    const categoriaInicial = window.location.hash.replace('#', '') || 'home';
    filtrarPosts(categoriaInicial);
    inicializarNavegacao();
    
    // Adiciona classe active ao link inicial
    const linkAtivo = document.querySelector(`.nav-menu a[href="#${categoriaInicial}"]`);
    if (linkAtivo) {
        linkAtivo.classList.add('active');
    }
});
