// Gallery Loader for Ink Mirror Landing
// Этот файл будет автоматически загружать галерею из JSON файлов

document.addEventListener('DOMContentLoaded', function() {
    const galleryGrid = document.querySelector('.gallery-grid');
    if (!galleryGrid) return;
    
    // Временные данные для демо
    // В будущем здесь будет загрузка из JSON файлов
    const demoGallery = [
        {
            id: '001',
            title: 'Дракон на спине',
            style: 'Трайбл/Геометрия',
            placement: 'Спина',
            time: '45 сек',
            description: 'Трайбл дракон с геометрическими элементами'
        },
        {
            id: '002',
            title: 'Роза на плече',
            style: 'Реализм',
            placement: 'Плечо',
            time: '52 сек',
            description: 'Реалистичная роза с каплями воды'
        },
        {
            id: '003',
            title: 'Надпись на руке',
            style: 'Минимализм',
            placement: 'Предплечье',
            time: '38 сек',
            description: 'Элегантная надпись тонким шрифтом'
        },
        {
            id: '004',
            title: 'Рукав с волками',
            style: 'Геометрия',
            placement: 'Рука',
            time: '2 мин',
            description: 'Геометрический рукав с волками и лесом'
        }
    ];
    
    // Очищаем существующие демо-элементы
    galleryGrid.innerHTML = '';
    
    // Создаём карточки галереи
    demoGallery.forEach(item => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.setAttribute('data-id', item.id);
        
        galleryItem.innerHTML = `
            <div class="gallery-placeholder">
                <div class="placeholder-text">${item.title}</div>
            </div>
            <div class="gallery-info">
                <h3>${item.title}</h3>
                <p><strong>Стиль:</strong> ${item.style}<br>
                   <strong>Расположение:</strong> ${item.placement}<br>
                   <strong>Время генерации:</strong> ${item.time}</p>
            </div>
        `;
        
        galleryGrid.appendChild(galleryItem);
    });
    
    console.log('Галерея загружена: %d работ', demoGallery.length);
    
    // Функция для загрузки реальных JSON файлов (будущее)
    async function loadRealGallery() {
        try {
            const response = await fetch('gallery/index.json');
            if (!response.ok) throw new Error('Файл галереи не найден');
            
            const galleryData = await response.json();
            console.log('Загружено работ из JSON:', galleryData.length);
            
            // Здесь будет код для отображения реальных данных
            // Пока оставляем демо-данные
        } catch (error) {
            console.log('Используются демо-данные галереи:', error.message);
        }
    }
    
    // Загружаем реальную галерею, если есть
    loadRealGallery();
});