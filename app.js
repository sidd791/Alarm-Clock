function currentTime() {
    const now = new Date();
    let hours = now.getHours() % 12 || 12;
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const ampm = now.getHours() >= 12 ? "PM" : "AM";
    
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0') + " :";
    document.getElementById('minutes').textContent = minutes + " :";
    document.getElementById('seconds').textContent = seconds + " " + ampm;
}

setInterval(currentTime, 1000);
currentTime();

function createAlarmList() {
    const hrs = document.getElementById('alarm-hours').value;
    const mins = document.getElementById('alarm-minutes').value;   
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

        // Check time periodically
        setInterval(function() {
            const currentTime = new Date();
            const currentHours = currentTime.getHours().toString().padStart(2, '0');
            const currentMinutes = currentTime.getMinutes().toString().padStart(2, '0');
            
            if (currentHours === hrs && currentMinutes === mins) {
                alert(`Alarm at ${hrs.padStart(2,'0')}:${mins.padStart(2,'0')}!`);
            }
        }, 1000); // Check every second (adjust as needed)
    }
}