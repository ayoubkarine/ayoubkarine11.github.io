/**
 * @Author: Ayoub KARINE
 * @Company: ISEN Yncréa Ouest
 * @Email: ayoub.karine@isen-ouest.yncrea.fr
 * @Created Date: 20-Apr-2021 - 19:42:22
 * @Last Modified: 21-Apr-2021 - 12:53:40
 */
// ----------------- Geolocation API -----------------------
// Latitude
const latitude = document.querySelector('#latitude');
const lat = document.querySelector('#lat');
latitude.addEventListener('click', afficherLatitude);
function afficherLatitude() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position){
    lat.innerHTML = "Latitude : " + position.coords.latitude;
    });
  } else {
    lat.innerHTML = "Geolocation is not supported by this browser.";
  }
}
// Longitude
const longitude = document.querySelector('#longitude');
const long = document.querySelector('#long');
longitude.addEventListener('click', afficherLongitude);
function afficherLongitude() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      long.innerHTML = "Longitude : " + position.coords.longitude;
    });
  } else {
      long.innerHTML = "Geolocation is not supported by this browser.";
  }
}
// ----------------- Web History API -----------------------
const nbpages = document.querySelector('#nbpages');
const reculer = document.querySelector('#reculer');
reculer.addEventListener('click', () => {
  window.history.go(-nbpages.value);
});
// ----------------- Clipboard API -----------------------
const copier = document.querySelector('#copier');
const coller = document.querySelector('#coller');
const input = document.querySelector('#textecopie');
const output = document.querySelector('#textecolle');
// Copier le texte
copier.addEventListener('click', ()=>{
  navigator.clipboard.writeText(input.value).then(() => alert('Copied!'));
});
// Coller le texte
coller.addEventListener('click', () => {
  const texte = navigator.clipboard.readText().then(texte => output.value = texte);
});
