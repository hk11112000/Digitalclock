// Setting Interval of 1 sec
setInterval(() => {
    const date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    const day = date.getDay();
    let d = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    // Getting the 12 Hours Format date
    let hr = (date.getHours() % 12);

    // Condition Checking for 12 Hours Format date
    if (hr == 00) {
        hr = 12
    }

    // Adding 0 if value is less then 10
    if (hr < 10) {
        hr = '0' + hr
    }
    if (min < 10) {
        min = '0' + min
    }
    if (sec < 10) {
        sec = '0' + sec
    }
    if (d < 10) {
        d = '0' + d
    }
    if (hour < 10) {
        hour = '0' + hour
    }



    // Setting AM PM
    const amPM = (() => {
        const ampm = hour >= 12 ? 'PM' : 'AM';
        return ampm;
    })

    // Setting Day Convertor Function from number to day name
    const DayCon = (() => {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        let dName = days[day];
        return dName;
    })

    // Setting Month Convertor Function from number to month name
    const monthCon = (() => {
        const months = ["January", "February", "March", "April", "May", "June", "July",
            "August", "September", "October", "November", "December"];
        let mName = months[month];
        return mName;
    })

    // DOM to display values in HTML
    document.querySelector('.hours').innerHTML = hour;
    document.querySelector('.minutes').innerHTML = min;
    document.querySelector('.seconds').innerHTML = sec;
    document.querySelector('.dayDate').innerHTML = `${DayCon()} | ${d} - ${monthCon()} - ${year}`;
    document.querySelector('.amPm').innerHTML = amPM();
    document.querySelector('.hr').innerHTML = hr;
}, 1000)

// Toggle icon javascript
// 1. Delcaring the variable
const toggle = document.getElementById('toggleBtn');
const thFormatChanger = document.querySelector('.th');
const tdFormatChanger = document.querySelector('.td');
const hrDiv = document.querySelector('.hr');
const hourDiv = document.querySelector('.hours');
const twelveON = document.querySelector('.on');
const twelveOFF = document.querySelector('.off');
let format_localStorage = localStorage.getItem("format");
function formatChanger(){
    toggle.classList.toggle('bi-toggle-on')
    thFormatChanger.classList.toggle("displayContent")
    tdFormatChanger.classList.toggle("hideContent")
    hrDiv.classList.toggle("displayContent")
    hourDiv.classList.toggle("hideContent")
    twelveON.classList.toggle("displayContent")
    twelveOFF.classList.toggle("hideContent")
}
// Local storage condition functions
// Storing the Value function
function formatChanger_localStorage(){
    toggle.classList.add('bi-toggle-on')
    thFormatChanger.classList.add("displayContent")
    tdFormatChanger.classList.add("hideContent")
    hrDiv.classList.add("displayContent")
    hourDiv.classList.add("hideContent")
    twelveON.classList.add("displayContent")
    twelveOFF.classList.add("hideContent")
}

if(format_localStorage && format_localStorage === "th"){
    formatChanger_localStorage()  
}
// EventListner to add ON class in toggle button and run the Convertor function
toggle.addEventListener('click', () => {
    // Toggle 24 Hours div change to 12 Hours
    formatChanger()
    if(!toggle.classList.contains('bi-toggle-on') ||
    !thFormatChanger.classList.contains("displayContent") ||
    !tdFormatChanger.classList.contains("hideContent") ||
   !hrDiv.classList.contains("displayContent") ||
    !hourDiv.classList.contains("hideContent") ||
    !twelveON.classList.contains("displayContent") ||
    !twelveOFF.classList.contains("hideContent")){
        return localStorage.setItem("format","td")
    }
    localStorage.setItem("format","th") 
})

// Dark Mode Js Starts
const light = document.getElementById('sun');
const body = document.querySelector('.body');
const format = document.querySelector('.format');
const clock = document.querySelector('.clock');
const hth = document.querySelector('.th');
const digic = document.querySelector('.digic');
const hours = document.querySelector('.hours');
const hrs = document.querySelector('.hr');
const mins = document.querySelector('.minutes');
const secs = document.querySelector('.seconds');
const dCon = document.querySelector('.d');
let setMode = localStorage.getItem("mode")
// Creating a Function for all the Class toggling 
function darkChange() {
    light.classList.toggle("bi-toggle-on");
    body.classList.toggle('bodyActive');
    format.classList.toggle('formatActive');
    clock.classList.toggle('clockActive');
    hth.classList.toggle('formatActive');
    digic.classList.toggle('formatActive');
    hours.classList.toggle('formatActive');
    hrs.classList.toggle('formatActive');
    mins.classList.toggle('formatActive');
    secs.classList.toggle('formatActive');
    dCon.classList.toggle('formatActive');
}
function darkChange_localstorage() {
    light.classList.add("bi-toggle-on");
    body.classList.add('bodyActive');
    format.classList.add('formatActive');
    clock.classList.add('clockActive');
    hth.classList.add('formatActive');
    digic.classList.add('formatActive');
    hours.classList.add('formatActive');
    hrs.classList.add('formatActive');
    mins.classList.add('formatActive');
    secs.classList.add('formatActive');
    dCon.classList.add('formatActive');
}
if(setMode && setMode === "dark"){
    darkChange_localstorage()
}
// Creating toggle function for icon and tags with localStorage
light.addEventListener('click', () => {
    darkChange()

    if(!light.classList.contains("bi-toggle-on") ||
    !body.classList.contains('bodyActive') ||
    !format.classList.contains('formatActive') ||
    !clock.classList.contains('clockActive') ||
    !hth.classList.contains('formatActive') ||
    !digic.classList.contains('formatActive') ||
    !hours.classList.contains('formatActive') ||
    !hrs.classList.contains('formatActive') ||
    !mins.classList.contains('formatActive') ||
    !secs.classList.contains('formatActive')){
        return localStorage.setItem("mode","light")

    }
    localStorage.setItem("mode","dark")
})
// Dark Mode JS Ends
