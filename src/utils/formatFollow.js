const formatFollow = (data) => {
    if (data == null) return null;

    if (data < 1000) {
        return data.toString();
    } else if (data < 1000000) {
        const formatted = (data / 1000).toFixed(1);
        return `${formatted}K`;
    } else if (data < 1000000000) { // Changed condition to check for billion
        const formatted = (data / 1000000).toFixed(1);
        return `${formatted}M`;
    } else if (data < 1000000000000) { // Added condition to check for trillion
        const formatted = (data / 1000000000).toFixed(1);
        console.log(formatted, 'lol')
        return `${formatted}B`;
    } else {
        return data; // Specify a default return value for very large numsbers
    }
};

export default formatFollow
