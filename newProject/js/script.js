// Fetch news from the API
async function fetchNews() {
  try {
    const response = await fetch('https://content.newtonschool.co/v1/pr/64e3d1b73321338e9f18e1a1/inshortsnews');
    const data = await response.json();
    displayNews(data);
  } catch (error) {
    console.error('Error fetching news:', error);
  }
}

// Display news on the page
function displayNews(newsArray) {
  const newsContainer = document.getElementById('news-container');
  newsContainer.innerHTML = ''; // Clear existing content

  newsArray.forEach(news => {
    const newsCard = document.createElement('div');
    newsCard.className = 'news-card';

    newsCard.innerHTML = `
      <h3>${news.author}</h3>
      <p>${news.content}</p>
      <a href="${news.url}" target="_blank">Read More</a>
      <button onclick="likeNews(${JSON.stringify(news)})">Like</button>
    `;

    newsContainer.appendChild(newsCard);
  });
}

// Save liked news to localStorage
function likeNews(news) {
  let savedNews = JSON.parse(localStorage.getItem('savedNews')) || [];
  savedNews.push(news);
  localStorage.setItem('savedNews', JSON.stringify(savedNews));
  alert('News saved!');
}

// Call fetchNews to load the news initially
fetchNews();