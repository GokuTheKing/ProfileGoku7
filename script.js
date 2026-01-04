const TELEGRAM_USERNAME = "OG_Goku_God_7";
const TELEGRAM_CHANNEL = "About_Goku_God";
const INSTAGRAM_URL = "https://instagram.com/goku_god_7editz";

function openContact() {
  window.open(`https://t.me/${TELEGRAM_USERNAME}`, "_blank");
}

function followChannel() {
  window.open(`https://t.me/${TELEGRAM_CHANNEL}`, "_blank");
}

function followInstagram() {
  window.open(INSTAGRAM_URL, "_blank");
}

function toggleTheme() {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
}
