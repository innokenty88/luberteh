const newsItems = document.querySelectorAll('.product__item');
const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');

function clearHighlights() {
    newsItems.forEach(item => {
        const h5 = item.querySelector('h5');
        const h6 = item.querySelector('h6');
        h5.innerHTML = h5.textContent;
        h6.innerHTML = h6.textContent;
        item.style.display = '';
    });
}

function highlightText(element, text) {
    const innerText = element.textContent;
    const regex = new RegExp(`(${text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    const newHTML = innerText.replace(regex, `<mark>$1</mark>`);
    element.innerHTML = newHTML;
}

searchForm.addEventListener('submit', function(e) {
    e.preventDefault(); // чтобы не перезагружать страницу при нажатии кнопки
    const query = searchInput.value.trim();
    if (!query) {
        clearHighlights();
        return;
    }
    newsItems.forEach(item => {
        const h5 = item.querySelector('h5');
        const h6 = item.querySelector('h6');
        const combinedText = h5.textContent + ' ' + h6.textContent;
        if (combinedText.toLowerCase().includes(query.toLowerCase())) {
            item.style.display = '';
            highlightText(h5, query);
            highlightText(h6, query);
        } else {
            item.style.display = 'none';
        }
    });
});
