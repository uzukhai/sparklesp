const bgVideo = document.getElementById("bg-video");

const targets = {
      cd1: new Date("2026-01-28T10:00:00+08:00").getTime(),
      cd2: new Date("2025-12-02T12:00:00+08:00").getTime()
    };

function updateCountdown(id, targetDate) {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const d = Math.max(0, Math.floor(distance / (1000 * 60 * 60 * 24)));
    const h = Math.max(0, Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const m = Math.max(0, Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
    const s = Math.max(0, Math.floor((distance % (1000 * 60)) / 1000));

    document.getElementById("days" + id.slice(-1)).textContent = String(d).padStart(2, '0');
    document.getElementById("hours" + id.slice(-1)).textContent = String(h).padStart(2, '0');
    document.getElementById("minutes" + id.slice(-1)).textContent = String(m).padStart(2, '0');
    document.getElementById("seconds" + id.slice(-1)).textContent = String(s).padStart(2, '0');
}

setInterval(() => {
    updateCountdown("cd1", targets.cd1);
    updateCountdown("cd2", targets.cd2);
}, 1000);

function showCountdown(id) {
    document.querySelectorAll(".countdown-container").forEach(el => el.classList.remove("active"));
    document.querySelectorAll(".tab").forEach(tab => tab.classList.remove("active"));
    document.getElementById(id).classList.add("active");
    event.target.classList.add("active");

    if (id === 'live') {
        bgVideo.querySelector('source').src = "image/background.mp4";
    } else if (id === 'drip') {
        bgVideo.querySelector('source').src = "image/background2.mp4";
    }

    // Reload the video source
    bgVideo.load();
    bgVideo.play();
}

