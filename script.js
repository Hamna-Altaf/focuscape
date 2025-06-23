
// function increaseFocusTime() {
//     console.log("button clicked");
//     let focus_time = document.getElementById("focus-time")
//     let focus_time_value = parseInt(focus_time.innerHTML);
//     focus_time_value += 5;
//     focus_time.innerHTML = focus_time_value.toString();

// }

let total_seconds = 25 * 60;
let count_down_interval;


function updateDisplay() {
    let minutes = Math.floor(total_seconds/60);
    let seconds = total_seconds % 60;

    let formatted_minutes = minutes < 10 ? '0' + minutes: minutes;
    let formatted_seconds = seconds < 10 ? '0' + seconds: seconds;

    document.getElementById("countdown").textContent = `${formatted_minutes}:${formatted_seconds}`;

}
function startCountDown() {
    clearInterval(count_down_interval);
    

    count_down_interval = setInterval(() => {
       
       
    if (total_seconds <=0) {
        clearInterval(count_down_interval);
        document.getElementById("countdown").textContent = "Time's Up!";
        return;
    }

    total_seconds--;
    updateDisplay();

    }, 1000);

    

}

function resetCountDown() {
    clearInterval(count_down_interval);
    total_seconds = 25*60;
    updateDisplay();
}

function setBreak(minutes) {
    clearInterval(count_down_interval);
    total_seconds = minutes * 60;
    updateDisplay();
}

let themes =  [
    {
        name: 'Rain',
        image:  'https://i.pinimg.com/736x/9f/55/98/9f5598e7d0fcdf6c767c8c7e81d18ae8.jpg',
        audio: 'https://cdn.pixabay.com/download/audio/2025/05/05/audio_f58cb40be0.mp3?filename=gentle-rain-for-relaxation-and-sleep-337279.mp3'
    },
    {
        name: 'Library',
        image: 'https://i.pinimg.com/736x/63/7a/b0/637ab05f678af728ab98baa70071a410.jpg',
        audio: 'https://raw.githubusercontent.com/Hamna-Altaf/focuscape-audios/main/Fire-Crackle-and-Flames-1(chosic.com).mp3'
    },
    {
        name: 'Summer',
        image: 'https://i.pinimg.com/736x/f2/41/02/f24102b3419fd712d1931ada77b556d9.jpg',
        audio: 'https://raw.githubusercontent.com/Hamna-Altaf/focuscape-audios/main/nature-birds-singing-217212.mp3'
    }
]

let currentThemeIndex = 0;
let isPlaying = false;

function updateTheme() {
    const theme = themes[currentThemeIndex];
    document.body.style.backgroundImage = `url('${theme.image}')`;

    if (currentAudio) {
        currentAudio.pause();
        currentAudio = null;
    }
    
}


function toggleAudio() {
    const theme = themes[currentThemeIndex];
   
    if(!theme.audio) {
        return;
    }
        if (!isPlaying) {
            currentAudio = new Audio(theme.audio);
            currentAudio.loop = true;
            currentAudio.volume = 0.4;
            currentAudio.play();
            isPlaying = true;
             document.getElementById("playPauseIcon").className = "fas fa-pause";
        } else {
            currentAudio.pause();
            isPlaying = false;
            document.getElementById("playPauseIcon").className = "fas fa-play";
    }
}


function nextTheme() {
    currentThemeIndex = (currentThemeIndex + 1) % themes.length;
    updateTheme();
}

function prevTheme() {
    currentThemeIndex = (currentThemeIndex - 1 + themes.length) % themes.length;
    updateTheme();
}

window.onload = () => {
    updateTheme();
};


