function currentTime(){
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    hours = hours % 12 || 12 ;
    const ampm = hours >= 12 ? "AM" : "PM";

    document.getElementById('hours').textContent = hours.toString().padStart(2,'0') + " :";
    document.getElementById('minutes').textContent = minutes + " :";
    document.getElementById('seconds').textContent = seconds + " " + ampm
}
setInterval(currentTime,1000)
currentTime()