const miliToDate = (mili) => {
let options = {year: 'numeric', month: 'numeric', day: 'numeric'}

    const dateObj = new Date(mili)
    return dateObj.toLocaleString("en-US", options)
}

export default miliToDate;