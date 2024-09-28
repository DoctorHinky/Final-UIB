const sound1991 = new Audio("../assets/audio/modem_Sound.mp3");
const sound1995 = new Audio("../assets/audio/win95.mp3");
const sound2000 = new Audio("../assets/audio/win00.mp3");
const sound2005 = new Audio("../assets/audio/winXP.mp3");
const sound2010 = new Audio("../assets/audio/win7.mp3");
const soundToday = new Audio("../assets/audio/win10.mp3");
const soundMorgen = new Audio("../assets/audio/Morgen.mp3");
const soundEnd = new Audio("../assets/audio/end.mp3");

const year1991 = document.getElementById("year1991");
const year1995 = document.getElementById("year1995");
const year2000 = document.getElementById("year2000");
const year2005 = document.getElementById("year2005");
const year2010 = document.getElementById("year2010");
const today = document.getElementById("today");
const morgen = document.getElementById("morgen");
const end = document.getElementById("end");

function spawn1991() {
  const dynamicText = document.getElementById("dynamicText");

  const text = `Tim Berners-Lee stellt 1991 das World Wide Web vor, das auf HTML, HTTP und URLs basiert.
                      Diese Technologie ermöglicht es, Dokumente über Hyperlinks zu verknüpfen und legt den Grundstein für das moderne Internet.
                      Die erste Webseite am CERN ist einfach gestaltet und bietet grundlegende Informationen über das Web.`;
  sound1991.play();
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
}
function spawn1995() {
  year1991.style.display = "none";
  sound1991.pause();
  sound1995.play();

  year1995.style.display = "block";
  year1995.style.opacity = "0";
  year1995.style.transition = "4s";

  setTimeout(() => {
    year1995.style.opacity = "1";
  }, 1000);
}

function spawn2000() {
  year1995.style.display = "none";
  sound1995.pause();
  sound2000.play();

  year2000.style.display = "block";
  year2000.style.opacity = "0";
  year2000.style.transition = "2s";
  year2000.style.transform = "tranlateX(100px)";

  setTimeout(() => {
    year2000.style.opacity = "1";
    year2000.style.transform = "tranlateX(0)";
  }, 600);
}

function spawn2005() {
  year2000.style.display = "none";
  sound2000.pause();
  sound2005.play();

  year2005.style.display = "block";
  year2005.style.transition = "2s";
}

function spawn2010() {
  year2005.style.display = "none";
  sound2005.pause();
  sound2010.play();

  year2010.style.display = "block";
  year2010.style.opacity = "0";
  year2010.style.transition = "2s";
  year2010.style.transform = "tranlateX(100px)";

  setTimeout(() => {
    year2010.style.opacity = "1";
    year2010.style.transform = "tranlateX(0)";
  }, 1000);
}

function spawnToday() {
  year2010.style.display = "none";
  sound2010.pause();
  soundToday.play();

  today.style.display = "block";
  today.style.opacity = "0";
  today.style.transition = "2s";
  today.style.transform = "tranlateX(100px)";

  setTimeout(() => {
    today.style.opacity = "1";
    today.style.transform = "tranlateX(0)";
  }, 1000);
}

function spawnMorgen() {
  soundToday.pause();

  soundMorgen.play();
  today.style.display = "none";
  morgen.style.display = "block";

  morgen.style.opacity = "0";
  morgen.style.transition = "1s";

  setTimeout(() => {
    morgen.style.opacity = "1";
  }, 1000);
}

function spawnEnd() {
  soundMorgen.pause();
  soundEnd.play();
  morgen.style.display = "none";
  end.style.display = "block";

  end.style.opacity = "0";
  end.style.transition = "1s";

  setTimeout(() => {
    end.style.opacity = "1";
  }, 1000);
}

/* button function */

const timeButton = document.getElementById("timeButton");

let buttonIndex = 0;
const buttonClasses = [
  "button1991",
  "button1995",
  "button2000",
  "button2005",
  "button2010",
  "buttonHeute",
  "buttonMorgen",
  "buttonEnd",
];

function callIndex() {
  buttonIndex++;

  if (buttonIndex > 8) {
    buttonIndex = 0;
  }
  console.log(buttonIndex);
  timeTravel();
}

function timeTravel() {
  switch (buttonIndex) {
    case 1:
      spawn1991();
      timeButton.classList.add("button1995");
      timeButton.classList.remove("button1991");
      timeButton.textContent = "Weiter";
      document;
      break;

    case 2:
      spawn1995();
      timeButton.classList.add("button2000");
      timeButton.classList.remove("button1995");
      break;

    case 3:
      spawn2000();
      timeButton.classList.add("button2005");
      timeButton.classList.remove("button2000");
      break;

    case 4:
      spawn2005();
      timeButton.classList.add("button2010");
      timeButton.classList.remove("button2005");
      break;

    case 5:
      spawn2010();
      timeButton.classList.add("buttonHeute");
      timeButton.classList.remove("button2010");
      break;

    case 6:
      spawnToday();
      timeButton.classList.add("buttonMorgen");
      timeButton.classList.remove("buttonHeute");
      break;

    case 7:
      spawnMorgen();
      timeButton.classList.add("buttonEnd");
      timeButton.classList.remove("buttonMorgen");
      break;

    case 8:
      spawnEnd();
      timeButton.textContent = "Das ende deiner Reise";
      timeButton.onclick = () => (window.location.href = "../index.html");
      timeButton.style.bottom = "10%";
      timeButton.style.left = "50%";
      timeButton.style.transform = "translateX(-50%)";
      break;
  }
}

/* ende */

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

function lightOut() {
  year2010.style.opacity = "0";
  year2010.overflow = "hidden";
  document.body.style.backgroundColor = "black";
  document.body.overflow = "hidden";

  setTimeout(() => {
    year2010.style.opacity = "1";
    year2010.overflow = "";
    document.body.style.backgroundColor = "";
    document.body.overflow = "";
  }, 7000);
}

function kaputtMachen() {
  today.style.transform = "scale(0.1)";
  today.style.transition = "transform 1s";

  setTimeout(() => {
    today.style.transform = "scale(5)";
  }, 3000);

  setTimeout(() => {
    today.style.transform = "scale(1)";
  }, 5000);
}
