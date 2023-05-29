//Language panel interaction
const languagePanel = document.getElementById("lg-panel");
const getOpenLanguagePanel = document.getElementById("lg-panel-button");
const getExitLanguagePanel = document.getElementById("exit-panel-button");
const openLanguagePanel = () => {
  languagePanel.style.visibility = "visible";
};
const closeLanguagePanel = () => {
  languagePanel.style.visibility = "hidden";
};
getOpenLanguagePanel.addEventListener("click", openLanguagePanel);
getExitLanguagePanel.addEventListener("click", closeLanguagePanel);

//Library interaction
const interactionBaloon = document.getElementById("interactive-component");
const interactionArrow = document.getElementById("interactive-arrow");
const libraryBox = document.getElementById("library-button");
const notNowButton = document.getElementById("ic-not-now-bt");
const openInteractiveInLibrary = () => {
  interactionBaloon.style.visibility = "visible";
  interactionArrow.style.visibility = "visible";
  interactionArrow.style.top = "180px";
  interactionBaloon.style.top = "180px";
  interactionBaloon.style.opacity = "1";
  interactionArrow.style.opacity = "1";
  interactionBaloon.querySelector("h2").textContent =
    "Aproveite a Sua Biblioteca";
  interactionBaloon.querySelector("p").textContent =
    "Faça login para ver os podcasts, músicas, artistas e playlists salvos na Sua Biblioteca.";
};
const closeInteractive = () => {
  interactionBaloon.style.visibility = "hidden";
  interactionArrow.style.visibility = "hidden";
  interactionBaloon.style.opacity = "0";
};
libraryBox.addEventListener("click", openInteractiveInLibrary);
notNowButton.addEventListener("click", closeInteractive);

//create playlist interaction
const createPlaylistButton = document.getElementById("create-playlist-bt");
const openInteractiveInCreate = () => {
  interactionBaloon.style.visibility = "visible";
  interactionArrow.style.visibility = "visible";
  interactionBaloon.style.top = "255px";
  interactionArrow.style.top = "255px";
  interactionBaloon.style.opacity = "1";
  interactionArrow.style.opacity = "1";
  interactionBaloon.querySelector("h2").textContent = "Criar uma playlist";
  interactionBaloon.querySelector("p").textContent =
    "Faça login para criar e compartilhar playlists.";
};
createPlaylistButton.addEventListener("click", openInteractiveInCreate);

//liked songs interaction
const likedSongsButton = document.getElementById("liked-songs-bt");
const openInteractiveInLikedSongs = () => {
  interactionBaloon.style.visibility = "visible";
  interactionArrow.style.visibility = "visible";
  interactionBaloon.style.top = "295px";
  interactionArrow.style.top = "295px";
  interactionBaloon.style.opacity = "1";
  interactionArrow.style.opacity = "1";
  interactionBaloon.querySelector("h2").textContent =
    "Aproveite as suas Músicas Curtidas";
  interactionBaloon.querySelector("p").textContent =
    "Faça login para ver todas as músicas que você curtiu reunidas em uma só playlist.";
};
likedSongsButton.addEventListener("click", openInteractiveInLikedSongs);
