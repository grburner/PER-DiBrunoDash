import miliToDate from '../functions/miliToDate';

function setQueryDate(date) {
    console.log("into query date")
    let dt = new Date()
    let range1start = dt.setDate( dt.getDate() - 1 ); // yesterday
    let range1end = dt.setDate( dt.getDate() - date) // date days ago
    let range2start = dt.setDate( dt.getDate() - 1 ) // date + 1 days ago
    let range2end = dt.setDate( dt.getDate() - date) // date + 1 + date days ago
    return [miliToDate(range1start), miliToDate(range1end), miliToDate(range2start), miliToDate(range2end)]
}

export default setQueryDate;