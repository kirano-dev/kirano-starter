export function passedTime(date, time) {
    const currentTime = new Date();
    const timeDifference = currentTime - date;
    
    return timeDifference >= (time * 1000);
}