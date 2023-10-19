// EVENT HANDLER FUNCTION
const formatLinkNewTab = (blog) => {
    const url = !blog.startsWith('http://') && !blog.startsWith('https://');

    if (url) {
        const fullURL = `https://${blog}`;
        window.open(fullURL, '_blank');
    } else {
        window.open(blog, '_blank');
    }
    return
};

export default formatLinkNewTab
