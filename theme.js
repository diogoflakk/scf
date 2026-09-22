
(function() {
    const temaGuardado = localStorage.getItem('sgcf_theme') || 'dark';
    if (temaGuardado === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
    }
})();


function alternarTema() {
    const actual = document.documentElement.getAttribute('data-theme');
    if (actual === 'light') {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('sgcf_theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('sgcf_theme', 'light');
    }
}
