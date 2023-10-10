
//[DD MMM, YYYY] date format
function formatDate(createdDate) {
    const date = new Date(createdDate);
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();

    return `${day} ${month}, ${year}`;
}

export default formatDate