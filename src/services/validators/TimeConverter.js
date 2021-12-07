export const converToClockTime = time =>
    time === 0 ?
        `12 AM` :
        time < 12 ?
            `${time} AM` :
            time === 12 ?
                `12 PM` :
                    `${time - 12} PM`

export const getTimeSlots = (startTime, endTime) => {

    let timeSlots = []
    for (let time = startTime; time < endTime; time++) {
        timeSlots.push([time, `${converToClockTime(time)} to ${converToClockTime(time + 1)}`])
    }
    return timeSlots
}