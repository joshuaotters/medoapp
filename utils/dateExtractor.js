//DateExtractor Utility
//This utility extracts independent date from an ISO type timestamp

function dateExtractor(isoTimestamp) {
    // const isoTimestamp = '2024-03-07T07:44:20.500Z';
    const dateObject = new Date(isoTimestamp);

    // Extract components
    const year = dateObject.getUTCFullYear();
    const month = dateObject.getUTCMonth() + 1; // Months are zero-based (0 = January)
    const day = dateObject.getUTCDate();

    const date = `${day}-${month}-${year}`;
    return date;
}

export default dateExtractor;
