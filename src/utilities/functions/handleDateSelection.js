import mtd from '../../utilities/functions/miliToDate';

const handleDateSelection = dateArr => {
    setDates({
        range1s: mtd(dateArr[0]),
        range1e: mtd(dateArr[1]),
        range2s: mtd(dateArr[2]),
        range2e: mtd(dateArr[3]),
    })
}

export default handleDateSelection;
