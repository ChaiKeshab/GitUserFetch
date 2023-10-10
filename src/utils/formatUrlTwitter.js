//creating twittere url
const formatUrlTwitter = (url) => {
    if (!url) return null;
    else {
        const http = 'https://twitter.com/@';
        return http.concat(url);
    }
};

export default formatUrlTwitter