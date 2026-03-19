// 1. БАЗА ДАННЫХ
const videos = [
    {
        title: "ПРОБЛЕМЫ НАЧИНАЮЩИХ ПРОГРАММИСТОВ",
        author: "Honey Montanа",
        views: "1.2 млн просмотров",
        date: "2 дня назад",
        thumbnail: "img/v1.png", 
        category: "IT"
    },
    {
        title: "Разбор техники Учи-мата от Маруямы",
        author: "Judo Master",
        views: "500 тыс. просмотров",
        date: "1 неделю назад",
        thumbnail: "img/v2.jpg",
        category: "Спорт"
    },
     {
        title: "Выбираем лучшее направление в АЙТИ)))",
        author: "Honey Montana",
        views: "986 тыс. просмотров",
        date: "2 недели назад",
        thumbnail: "img/v3.png",
        category: "IT"
    },
     {
        title: "КАК ПРОГРЕССИРОВАТЬ БЫСТРЕЕ ДРУГИХ",
        author: "Okozuko",
        views: "434 тыс. просмотров",
        date: "3 недели назад",
        thumbnail: "img/v4.jpg",
        category: "Спорт"
    },
    {
        title: "Старт во Frontend за 2 недели: Реально ли?",
        author: "Web Coach",
        views: "85 тыс. просмотров",
        date: "5 часов назад",
        thumbnail: "img/v5.jpg",
        category: "IT"
    },
    {
        title: "режим НУЛЕВОЙ ТОЛЕРАНТНОСТИ вызывает УВАЖЕНИЕ и СТРАХ.",
        author: "resistant area",
        views: "34 тыс. просмотров",
        date: "12 часов назад",
        thumbnail: "img/v6.png",
        category: "Спорт"
    },
    {
        title: "Лучшие упражнения для повышения тестостерона и мышечной массы",
        author: "Power Gym",
        views: "250 тыс. просмотров",
        date: "1 месяц назад",
        thumbnail: "img/v7.jpg",
        category: "Спорт"
    },
    {
        title: "УЧИЛСЯ ПРОГРАММИРОВАТЬ 180 ДНЕЙ",
        author: "Honey Montana",
        views: "999 тыс. просмотров",
        date: "3 месяца назад",
        thumbnail: "img/v8.png",
        category: "IT"
    }
];

const grid = document.getElementById('video-grid');

// 2. ОТРИСОВКА (RENDER)
function renderVideos(items) {
    grid.innerHTML = ""; // Очистка сетки
    items.forEach(video => {
        const card = document.createElement('div');
        card.className = 'video-card';
        card.innerHTML = `
            <img src="${video.thumbnail}" alt="">
            <div class="video-info">
                <div class="channel-icon"></div>
                <div class="video-text">
                    <h3>${video.title}</h3>
                    <p>${video.author}</p>
                    <p>${video.views} • ${video.date}</p>
                    <button class="like-btn" onclick="handleLike(this)">❤ Лайк</button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// 3. ЛАЙКИ
function handleLike(btn) {
    btn.classList.toggle('active'); // Вкл/выкл красный цвет
    btn.innerText = btn.classList.contains('active') ? "❤️ Лайкнуто" : "❤ Лайк";
}

// 4. ПОИСК
document.getElementById('search-input').addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = videos.filter(v => v.title.toLowerCase().includes(term));
    renderVideos(filtered);
});

// 5. ЕДИНАЯ ФИЛЬТРАЦИЯ (И меню, и кнопки сверху)
function setupFilters() {
    const allFilters = document.querySelectorAll('.nav-link, .filter-chip');

    allFilters.forEach(el => {
        el.addEventListener('click', () => {
            // Убираем активный класс у всех
            allFilters.forEach(item => item.classList.remove('active'));
            // Добавляем нажатому
            el.classList.add('active');

            const cat = el.getAttribute('data-category');
            
            if (cat === 'all') {
                renderVideos(videos);
            } else if (cat) {
                const filtered = videos.filter(v => v.category === cat);
                renderVideos(filtered);
            }
        });
    });
}

// Запуск функций
renderVideos(videos);
setupFilters();