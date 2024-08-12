


let showTime =document.getElementById("result");

setInterval(updateTime, 1000)

function updateTime() {
    let date = new Date();
    showTime.innerHTML = formatTime(date);

    function formatTime(date) {
        let hour = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();

        let amOrPm = hour >= 12 ? "pm" : "am";

        hour = (hour % 12) || 12;

        hour = formatZeroes(hour);
        minutes = formatZeroes(minutes);
        seconds = formatZeroes(seconds);

        return `${hour}:${minutes}:${seconds}${amOrPm}`
        function formatZeroes(time) {
            time = time.toString();
            return time.length < 2 ? "0" + time : time;
        }
    }
}