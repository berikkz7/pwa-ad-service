function loadPage(page) {
    fetch(`pages/${page}.html`)
        .then(response => response.text())
        .then(html => document.getElementById('content').innerHTML = html)
        .catch(error => console.error('Ошибка:', error));
}
window.onload = () => loadPage('home');
