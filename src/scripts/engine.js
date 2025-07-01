const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input");
const keysCheck = document.querySelector(".keys-check input");

const volumeValue = document.getElementById("volume-value");
const toggleKeys  = document.getElementById("toggle-keys");

toggleKeys.addEventListener("change", () => {
  const ligado = toggleKeys.checked;
  toggleKeys.title = ligado ? "Ligado" : "Desligado";
  keysStatus.textContent = ligado ? "Ligado" : "Desligado";
});


let mapedKeys = [];
let audio = new Audio("/src/tunes/a.wav");

const playTune = (key) => {
    audio.src = `./src/tunes/${key}.wav`;
    audio.play();

    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active");
    setTimeout(() => {
        clickedKey.classList.remove("active");
    }, 150);
};


pianoKeys.forEach((key) => {
    key.addEventListener("click", () => playTune (key.dataset.key));
    mapedKeys.push(key.dataset.key);

});

document.addEventListener("keydown", (e) => {
    if (mapedKeys.includes(e.key)) {
        playTune(e.key);
    }
    
});

const handVolume = (e) => {
    audio.volume = e.target.value;

    if (volumeValue) {
        volumeValue.textContent = Math.round(e.target.value * 100);
    }
}

const showHideKeys = () => {
    pianoKeys.forEach(key => key.classList.toggle("hide"));
}

volumeSlider.addEventListener("input", handVolume);

keysCheck.addEventListener("click", showHideKeys)
