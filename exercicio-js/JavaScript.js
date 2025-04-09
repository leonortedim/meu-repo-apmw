function changeLamp() {
  const img = document.getElementById("luz");
  const button = document.getElementById("switch");
  const body = document.body;

  if (img.src.includes("https://i.postimg.cc/KjK1wL3c/bulb-off.png")) {
    img.src = "https://i.postimg.cc/6QyTynzr/bulb-on.png";
    button.innerHTML = "Turn off";
    body.classList.add("light-on");
    
  } else {
    img.src = "https://i.postimg.cc/KjK1wL3c/bulb-off.png";
    button.innerHTML = "Turn on";
    body.classList.remove("light-on");
  } 
}