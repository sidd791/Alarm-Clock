function currentTime() {
    const now = new Date();
    let hours = now.getHours() % 12 || 12;
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const ampm = now.getHours() >= 12 ? "PM" : "AM";
    
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0') + " :";
    document.getElementById('minutes').textContent = minutes + " :";
    document.getElementById('seconds').textContent = seconds + " " + ampm;
    checkAlarms();
}

setInterval(currentTime, 1000);
currentTime();


function createAlarmList() {
    const hrs = document.getElementById('alarm-hours').value;
    const mins = document.getElementById('alarm-minutes').value;   
    document.getElementById('alarm-hours').value = ''
    document.getElementById('alarm-minutes').value = ''
    const alarmlist = document.createElement('div');
    const deleteButton = document.createElement('button');
    deleteButton.classList = "border rounded-md mx-8 my-2 text-base hover:bg-slate-400";
    
    alarmlist.textContent = `Alarm set at ${hrs.padStart(2, '0')}:${mins.padStart(2, '0')}`;
    alarmlist.classList = "mx-2 my-2";

    deleteButton.textContent = "Delete";
    deleteButton.onclick = function() {
        alarmlist.remove();
    };

    alarmlist.appendChild(deleteButton);

    if (hrs !== '' && mins !== '') {
        document.getElementById('alarmlist').appendChild(alarmlist);
    
    }
}
function checkAlarms() {
    const alarmElements = document.querySelectorAll('#alarmlist div'); // Select all alarm divs
    
    // Loop through each alarm element and check for matches
    for (const alarmElement of alarmElements) {
        const [alarmHours, alarmMinutes] = alarmElement.textContent.match(/\d{2}/g).map(Number);
        const now = new Date();
        const currentHours = now.getHours() % 12 || 12; // Adjust for 12-hour format
        const currentMinutes = now.getMinutes();

        if (alarmHours === currentHours && alarmMinutes === currentMinutes) {
            let audio = new Audio("aud.mp3")
            audio.play();
            return; 
        }
    }
}