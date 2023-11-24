onload = () => {
    // Carrega os dados do banco de dados
    // e preenche o formulário
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    const idPlace = document.getElementById('id') as HTMLSpanElement
    const tituloPlace = document.getElementById('titulo') as HTMLSpanElement
    const textoPlace = document.getElementById('texto') as HTMLSpanElement
    const autorPlace = document.getElementById('autor') as HTMLSpanElement

    console.log("a")
    if(id) {
        idPlace.innerHTML = id;
        fetch(backendAddress + 'forum/pub/public/' + id + '/')
        .then(response => response.json())
        .then(pub => {
            tituloPlace.innerHTML = pub['titulo']
            console.log(pub['titulo'])
            textoPlace.innerHTML = pub['texto']
            autorPlace.innerHTML = pub['autor_username']

        })
        .catch(erro => {
            console.log('Deu erro: ' + erro);
        });
    } else {
         idPlace.innerHTML = 'URL mal formada: ' + window.location;
    }
}