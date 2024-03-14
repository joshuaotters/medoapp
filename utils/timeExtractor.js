//TimeExtractor Utility
//This utility extracts independent time values from an ISO type timestamp

function timeExtractor(isoTimestamp) {
    // const isoTimestamp = '2024-03-07T07:44:20.500Z';
    const dateObject = new Date(isoTimestamp);

    // Extract components
    
    const hours = dateObject.getUTCHours().toString().padStart(2, 0);
    const minutes = dateObject.getUTCMinutes().toString().padStart(2, 0);
    
    const time = `${hours}:${minutes}`;
    if(hours >= 12) {
        const time = `${hours}:${minutes} PM`;
        return time;
    } else {
        const time = `${hours}:${minutes} AM`;
        return time;
    }
    
}

export default timeExtractor;
