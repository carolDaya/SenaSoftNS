window.addEventListener("load", function () {
  initTopBar();
});

function initTopBar() {
  const translateElement = document.querySelector(".idioma-icon-barra-superior");
  if (!translateElement) return;
  translateElement.addEventListener("click", translate, false);

  const translations = {
  en: {
    title: "Welcome to .....",
    paragraph: "This is the English version of the site."
  },
  es: {
    title: "Bienvenido a .....",
    paragraph: "Esta es la versión en español del sitio."
  }
};

let currentLang = "es";

function translate() {
  currentLang = currentLang === "es" ? "en" : "es";
  
  // Cambiar contenido
  document.querySelector("h1").textContent = translations[currentLang].title;
  document.querySelector("p").textContent = translations[currentLang].paragraph;

  // Cambiar el texto del botón
  translateElement.textContent = currentLang.toUpperCase();
}

}
