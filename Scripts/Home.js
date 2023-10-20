function showLoading() {
    var loadingGif = document.getElementById('loadingGif');
    var loadingSound = new Audio('Sounds/HomeSound.mp3'); // Substitua pelo caminho real do seu áudio
    loadingGif.style.display = 'block'; // Mostra o GIF
    loadingSound.play(); // Toca o som

    setTimeout(function() {
        window.location.href = 'index.html'; // Redireciona após alguns segundos (1000ms = 1 segundo)
    }, 8000); // Aguarde 3 segundos antes de redirecionar (ajuste conforme necessário)
}