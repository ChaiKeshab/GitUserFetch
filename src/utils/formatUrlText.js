//removing domains for url display
const formatUrlText = (url) => {
    if (!url) return null;

    let formattedUrl = url.replace(/^(https?:\/\/)?(www\.)?/i, '');

    // Remove anything after the first slash
    const slashIndex = formattedUrl.indexOf('/');
    if (slashIndex !== -1) {
        formattedUrl = formattedUrl.substring(0, slashIndex);
    }

    return formattedUrl;
};

export default formatUrlText