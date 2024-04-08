
function timeToWalk(steps, footprint, speed) {
    let speedInM = (speed * 1000) / 60;
    let distance = steps * footprint;
    let numOfPause = Math.floor(distance / 500);
    let totalMin = (distance / speedInM) + numOfPause;

    let hours = Math.floor(totalMin / 60);
    let minutes = Math.floor(totalMin % 60);
    let seconds = Math.round((totalMin - Math.floor(totalMin)) * 60); 

    console.log(`${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`);
}

timeToWalk(2564, 0.70, 5.5);