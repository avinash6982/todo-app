export const bookingDataResolver = (data, userId, mentorId) => {

    let date = data.date
    date.setHours(data.time)
    date.setMinutes(0)
    date.setSeconds(0)
    return {
        userId: userId,
        mentorId: mentorId,
        date: date
    }
}

export const updateAdminDataResolver = data => {

    const urlToFile = pic =>
        fetch(`process.env.REACT_APP_API_URL}${pic}`)
            .then(res => res.arrayBuffer())
            .then(buf => new File([buf], "imagee", { type: 'image/png' }))

    const picFileResolver = new Promise(
        () => typeof (data.pic) === "string" ?
            urlToFile(data.pic) :
            data.pic)

    return picFileResolver
        .then(res => {
            console.log(res)
            return res
        })
}