document.addEventListener("DOMContentLoaded", function () {
    const musicPlayer = document.getElementById("musicPlayer");
    const songInfo = document.getElementById("songInfo");

    function cargarCancion() {
        musicPlayer.play();

        const songTitle = "Especial";
        const songArtist = "Eladio Carrion";

        songInfo.textContent = `${songTitle} - ${songArtist}`;
    }
        
    cargarCancion();
});
