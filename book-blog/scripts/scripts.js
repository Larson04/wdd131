const outputElement = document.querySelector(".articles");

articles.forEach(article => {
  const newArticle = document.createElement('div');
  newArticle.classList.add('articles');

  const template = `
    <div class = "articles">
        <section class="post-info">
        <p class="date">${article.date}</p>
        <p class="genre">${article.genre}</p>
        <p class="age">${article.ages}</p>
        <p class="rating">${article.stars}</p>
        </section>
        <article class="post">
        <h2>${article.title}</h2>
        <img src=${article.imgSrc} alt=${article.imgAlt}>
        <p>${article.description}</p>
        <a href="#" class="read-more">Read More...</a>
        </article>
    </div>
  `;
  
  newArticle.innerHTML = template;
  outputElement.appendChild(newArticle);
});