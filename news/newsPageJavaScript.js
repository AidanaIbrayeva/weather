console.log("Aidana");

const apiKey = '384e155a49954f6caf57ed2e0c760bd7';
// const country = localStorage.getItem('country'); // Commented this line
const city = localStorage.getItem('localCity');
console.log('City:', city);

async function getNews(cityName) {
    const apiUrl = `https://newsapi.org/v2/top-headlines?q=${cityName}&apiKey=${apiKey}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Обработка полученных данных
        displayNews(data.articles);
    } catch (error) {
        console.error('Error fetching news:', error);
    }
}

// Функция для отображения новостей
function displayNews(articles) {
    const newsContainer = document.createElement('div');

    articles.forEach(article => {
        const articleElement = document.createElement('div');
        articleElement.classList.add('articles');
        articleElement.innerHTML = `
            <h2>${article.title}</h2>
            <p>${article.description}</p>
            <a href="${article.url}" target="_blank">Read more</a>
            <hr>
        `;
        newsContainer.appendChild(articleElement);
    });

    document.body.appendChild(newsContainer);
}

// Вызов функции для получения новостей при загрузке страницы
// Provide the city you want to get news for
window.onload = () => getNews(city);
