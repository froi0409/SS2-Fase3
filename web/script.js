function cargarPagina(pagina) {
    // Simula la carga de contenido dinámico usando AJAX
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById('contenido').innerHTML = xhr.responseText;
        }
    };
    xhr.open('GET', pagina + '.html', true);
    xhr.send();
}
