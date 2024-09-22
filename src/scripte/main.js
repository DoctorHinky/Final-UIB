/* const btn = document.getElementById("startlink");
const audio = new Audio("../assets/audio/modem_Sound.mp3");
const startlink = document.getElementById("linkContainer");
const year1991 = document.getElementById("year1991");
const dynamicText = document.getElementById("dynamicText");

const text = `Tim Berners-Lee stellt 1991 das World Wide Web vor, das auf HTML, HTTP und URLs basiert.
                    Diese Technologie ermöglicht es, Dokumente über Hyperlinks zu verknüpfen und legt den Grundstein für das moderne Internet.
                    Die erste Webseite am CERN ist einfach gestaltet und bietet grundlegende Informationen über das Web.`;

btn.addEventListener("click", () => {
  audio.play();
  startlink.remove();
  year1991.style.display = "block";

  let index = 0;
  const speed = 15;

  function type() {
    if (index < text.length) {
      dynamicText.textContent += text.charAt(index);
      index++;
      setTimeout(type, speed);
    }
  }
  type();
}); */

function closeMe(index) {
  const popUp = document.getElementById(index);
  popUp.style.display = "none";
}

const pops = document.getElementsByClassName("popups");
console.log(pops);

function openPops() {
  for (let i = 0; i < pops.length; i++) {
    setTimeout(() => {
      pops[i].style.display = "block";
    }, i * 100);
  }
}

/* Bild dunkel machen 2010 */

const button = document.getElementById("darkenButton");
const year2010 = document.getElementById("year2010");

function lightOut() {
  year2010.style.opacity = "0";
  year2010.overflow = "hidden";
  document.body.style.backgroundColor = "black";
  document.body.overflow = "hidden";

  console.log("light out");

  setTimeout(() => {
    year2010.style.opacity = "1";
    year2010.overflow = "";
    document.body.style.backgroundColor = "";
    document.body.overflow = "";
  }, 7000);
}
