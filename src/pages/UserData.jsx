import { useNavigate, useParams } from 'react-router-dom'
// import './UserData.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { gitApiHit, userSearchData } from '../redux/action/index'
import { useEffect, useRef } from 'react';

import {
    formatDate,
    formatFollow,
    formatLinkNewTab,
    formatUrlText,
    formatUrlTwitter
} from '../utils/index';

import {
    Date,
    Email,
    Location,
    Organization,
    Website,
    Twitter
} from '../assets/SVG/index'

import { UserInfoCard, Button, UserStatsCard } from '../components/index'

const UserData = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const hasDispatchRef = useRef(false)

    const { id } = useParams()
    const result = useSelector(state => state.gitApi.data, shallowEqual)

    // result was being updated on each re-render (2 times) which caused useEffect, dispatch to run two times.
    // to execute the dispatch only once, a new condition is placed using useRef.
    // Since useRef doesn't trigger re-render when it's value is changed, it's the best choice.

    useEffect(() => {
        if (Object.keys(result).length === 0 && hasDispatchRef.current === false) {
            dispatch(gitApiHit(id));
            hasDispatchRef.current = true
        }

    }, [dispatch, id, result])

    const avatar = result.avatar_url
    const name = result.name
    const email = result.email
    const location = result.location
    const company = result.company
    const bio = result.bio
    const hireable = result.hireable
    const html_url = result.html_url
    const blog = result.blog

    const repoCount = result.public_repos
    const twitter = result.twitter_username

    const blogText = formatUrlText(result.blog)
    const twitterLink = formatUrlTwitter(result.twitter_username)
    const followers = formatFollow(result.followers)
    const following = formatFollow(result.following)
    const createdDate = formatDate(result.created_at)


    const handleClick = () => {
        dispatch(userSearchData(''))
        navigate('/', { replace: true });
    }


    return (
        <div className='mx-auto md:px-12 lg:px-24'>


            <div className='TOP flex justify-between px-3 pt-5 pb-20 md:pt-24'>
                <Button
                    onClick={handleClick}
                    label={<FontAwesomeIcon className="h-8 w-8" icon={faArrowLeft} />}
                    className='p-0'
                />

                {hireable &&
                    <a
                        className='bg-primary py-2 px-4 text-white border-none rounded-md 
                        hover:cursor-pointer active:bg-orange-800 md:px-10 '
                        href={html_url} target='_blank' rel='noreferrer'>
                        Hire Me
                    </a>
                }
            </div>




            <div className='MAIN m-3 p-2 relative border-2 border-black rounded-xl'>

                <div className='AVATAR text-center'>

                    <img className='absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full w-24 object-cover
                        md:w-40'
                        src={avatar} alt="avatar" />

                    <h1 className='mt-12 text-bold text-2xl 
                        md:mt-24 md:text-3xl'>
                        <a href={html_url} target='_blank' rel='noreferrer'>
                            {name}
                        </a>
                    </h1>

                    <h2 className='text-bold text-2xl 
                        md:text-3xl'>
                        <a href={twitterLink} target='_blank' rel='noreferrer'>
                            {twitter ? `@${twitter}` : ''}
                        </a>
                    </h2>

                </div>


                <div className='FOLLOW flex w-full flex-wrap justify-center text-center mt-4 
                    md:space-x-4 '>

                    <UserStatsCard
                        number={followers}
                        label='Followers'
                    />

                    <UserStatsCard
                        number={following}
                        label='Following'
                    />

                    <UserStatsCard
                        number={repoCount}
                        label='Repositories'
                    />

                </div>



                <div className='mt-6 w-full flex flex-col flex-wrap
                md:p-10 lg:flex-row lg:justify-evenly'>

                    <div className='INFO p-6 grid grid-cols-1 gap-6 rounded-md border-2 border-[#C4C4C4]
                    md:grid-cols-2 lg:w-[45%]'>

                        <UserInfoCard
                            image={<Email />}
                            label='Email'
                        >
                            {email && <a href={`mailto:${email}`} target='_blank' rel='noreferrer'>{email}</a>}
                        </UserInfoCard>


                        <UserInfoCard
                            image={<Organization />}
                            label='Organization'
                        >
                            {company}
                        </UserInfoCard>


                        <UserInfoCard
                            image={<Location />}
                            label='Location'
                        >
                            {location}
                        </UserInfoCard>


                        <UserInfoCard
                            image={<Date />}
                            label='Joined Date'
                        >
                            {createdDate}
                        </UserInfoCard>


                        <UserInfoCard
                            image={<Twitter />}
                            label='Twitter'
                        >
                            {twitterLink && <a href={twitterLink} target='_blank' rel='noreferrer'>{twitter && `@${twitter}`}</a>}
                        </UserInfoCard>


                        <UserInfoCard
                            image={<Website />}
                            label='Website'
                        >
                            {blog && <a href={blog} className='inline-block w-fit' target='_blank' rel='noreferrer'
                                onClick={() => formatLinkNewTab(blog)}>{blogText}</a>}
                        </UserInfoCard>

                    </div>


                    <div className='BIO mt-4 p-6 rounded-md border-2 border-[#C4C4C4]
                    lg:w-[45%] lg:mt-0'>

                        <h3 className='text-xl font-bold'>Bio</h3>
                        <p className='mt-3'>{bio}</p>
                    </div>

                </div>
            </div>
        </div >
    )
}


export default UserData