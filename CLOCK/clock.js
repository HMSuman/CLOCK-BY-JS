function clock() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    const timeFormat = "AM";
    if (hours === 0) {
        hours = 12;
    }
    if (hours > 12) {
        hours = hours - 12;
        timeFormat = "PM";
    }
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    const finalTime = `${hours}:${minutes}:${seconds}`;
    document.querySelector("#time").innerText = finalTime;
    document.querySelector("small").innerText = timeFormat;
    setInterval(clock, 1000);
}
clock();