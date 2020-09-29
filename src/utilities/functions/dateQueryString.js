const dateToQuery = (dates) => {
    let queryString = ''
    for (const [key, value] of Object.entries(dates)) {
        queryString += key + value.replace(/\//g, '') + '_'
    }
    return queryString
}

export default dateToQuery;