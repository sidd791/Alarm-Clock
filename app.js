var audio = new Audio("aud.mp3")
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
    const ampm = document.getElementById('am-pm').value;
    alarmlist.textContent = `Alarm set at ${hrs.padStart(2, '0')}:${mins.padStart(2, '0')} ${ampm}`;
    alarmlist.classList = "mx-2 my-2";

    deleteButton.textContent = "Delete";
    deleteButton.onclick = function() {
        audio.pause()
        alarmlist.remove();
    };

    alarmlist.appendChild(deleteButton);

    if (hrs !== '' && mins !== '') {
        document.getElementById('alarmlist').appendChild(alarmlist);
    
    }
}
function checkAlarms() {
    const alarmElements = document.querySelectorAll('#alarmlist div');

    for (const alarmElement of alarmElements) {
        const match = alarmElement.textContent.match(/(\d{2}):(\d{2})\s([APMapm]{2})/);

        if (match) {
            const [, hours, minutes, ampm] = match;
            const now = new Date();
            const currentHours = now.getHours() % 12 || 12;
            const currentMinutes = now.getMinutes();
            const currentAmpm = now.getHours() >= 12 ? "PM" : "AM";

            // Check if alarm matches current time and AM/PM
            if (parseInt(hours) === currentHours && parseInt(minutes) === currentMinutes && ampm.toUpperCase() === currentAmpm) {
                audio.play();
                return; 
            }
        }
    }
}
