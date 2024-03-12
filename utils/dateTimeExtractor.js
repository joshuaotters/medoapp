//DateTimeExtractor Utility
//This utility extracts independent date and time values from an ISO type timestamp

function dateTimeExtractor(isoTimestamp) {
    // const isoTimestamp = '2024-03-07T07:44:20.500Z';
    const dateObject = new Date(isoTimestamp);

    // Extract components
    const year = dateObject.getUTCFullYear();
    const month = dateObject.getUTCMonth() + 1; // Months are zero-based (0 = January)
    const day = dateObject.getUTCDate();
    const hours = dateObject.getUTCHours();
    const minutes = dateObject.getUTCMinutes();
    const seconds = dateObject.getUTCSeconds();
    const milliseconds = dateObject.getUTCMilliseconds();

    const date = `${year}-${month}-${day}`;
    const time = `${hours}:${minutes}:${seconds}.${milliseconds}`;
    return {date, time};
}

export default dateTimeExtractor;
