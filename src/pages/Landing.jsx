import { useState, useEffect } from "react";
import Input from '../components/Input'
import Button from '../components/Button'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { gitApiHit } from '../redux/action/gitApiAction'
import { userSearchData } from '../redux/action/searchAction'
import useNavigateOnSuccess from "../hooks/useNavigateOnSuccess";
import LoadingBar from 'react-top-loading-bar' //package


const Landing = () => {

    const error = useSelector((state) => state.gitApi.error, shallowEqual)
    const result = useSelector((state) => state.gitApi.data, shallowEqual)

    const dispatch = useDispatch()

    const [search, setSearch] = useState('')
    const [userSearch, setUserSearch] = useState('')

    //top-loading bar progress
    const [progress, setProgress] = useState(0)


    useNavigateOnSuccess(userSearch, result)

    useEffect(() => {
        if (Object.keys(result).length !== 0) {
            // Data has been loaded, set the progress to 100
            setProgress(100);
        }
        else if (error) setProgress(100)

    }, [result, error]);


    const handleSubmit = async (e) => {
        if (e.key === 'Enter' || e.type === 'click') {
            e.preventDefault();

            setProgress((prev) => prev + 20)

            dispatch(userSearchData(search.trim()))
            dispatch(gitApiHit(search.trim()))
            setProgress((prev) => prev + 70)
            setUserSearch(search.trim())
            setSearch('')
        }
    }

    const handleInputChange = (e) => {
        setSearch(e.target.value);
    }

    return (
        <>
            <LoadingBar
                color='#DE5A21'
                progress={progress}
                onLoaderFinished={() => setProgress(0)}
                height='4px'
            />

            <div className='flex flex-col justify-center items-center
            mx-auto mt-44'>

                <h1 className='m-0 text-4xl font-bold'>
                    Github Profile</h1>

                <p className="m-0 text-slate-800 text-3xl">Generate your Github Profile</p>

                <div className='flex sm:flex-wrap md:flex-nowrap mt-4 justify-center items-center'>
                    <Input
                        value={search}
                        onChange={handleInputChange}
                        onKeyDown={handleSubmit}
                        placeholder='Github Username'
                        type="text"
                        name="user"
                        id="user"
                    />

                    <Button
                        onClick={handleSubmit}
                        label={'Generate'}
                    />
                </div>
                {error && <h1 className="m-0 text-slate-800 ">User not found</h1>}
            </div>
        </>
    )
}

export default Landing