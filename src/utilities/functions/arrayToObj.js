const arrToObj = arr => {
    let retObj = arr.map(row => {
        return {
            product_name: row[0],
            units_sold: row[1],
            revenue: row[2],
            unit_cost: row[3],
            price: row[4],
            vendor: row[5],
            country: row[6],
            type: row[7],
            style: row[8],
            production: row[9]
        }
    })
    return retObj
};

export default arrToObj;

//made this with dynamic row headings