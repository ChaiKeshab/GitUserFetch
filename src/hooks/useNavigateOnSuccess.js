import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import formatUrlText from '../utils/formatUrlText';
import formatUrlTwitter from '../utils/formatUrlTwitter';
import formatDate from '../utils/formatDate';
import formatFollow from '../utils/formatFollow';

function useNavigateOnSuccess(searchData, result) {

    const navigate = useNavigate();

    useEffect(() => {
        // console.log(searchData, 'searchData')
        // console.log(result, 'result')
        // console.log('out route')

        if (Object.keys(result).length !== 0) {
            const queryParams = new URLSearchParams();

            //setting data in url. if the data is null or empty, don't set it
            if (result.avatar_url) queryParams.set('avatar', result.avatar_url);
            if (result.name) queryParams.set('name', result.name);
            if (result.email) queryParams.set('email', result.email);
            if (result.location) queryParams.set('location', result.location);
            if (result.company) queryParams.set('company', result.company);
            if (result.twitter_username) queryParams.set('twitter', result.twitter_username);
            if (result.blog) queryParams.set('blog', result.blog);
            if (result.blog) queryParams.set('blogText', formatUrlText(result.blog));
            if (result.twitter_username) queryParams.set('twitterLink', formatUrlTwitter(result.twitter_username));
            if (result.bio) queryParams.set('bio', result.bio);
            if (result.followers) queryParams.set('followers', formatFollow(result.followers));
            if (result.following) queryParams.set('following', formatFollow(result.following));
            if (result.public_repos) queryParams.set('repoCount', result.public_repos);
            if (result.created_at) queryParams.set('createdDate', formatDate(result.created_at));
            if (result.hireable) queryParams.set('hireable', result.hireable);
            if (result.html_url) queryParams.set('html_url', result.html_url);

            navigate(`/${searchData}?${queryParams}`);

        }

    }, [result, searchData, navigate]);
}

export default useNavigateOnSuccess;
