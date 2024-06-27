const years = [2022, 2000, 1997, 2010, 2015, 2022]

years.forEach(year) => {
    const p = document.createElement ('p');
    p.textContent = year;
    document.querySelector('section').append(p);
}