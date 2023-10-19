import { useState, useEffect } from "react";
import Input from '../components/Input'
import Button from '../components/Button'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { gitApiHit } from '../redux/action/gitApiAction'
import { userSearchData } from '../redux/action/searchAction'
import LoadingBar from 'react-top-loading-bar' //package
import { useNavigate } from "react-router-dom";

const Landing = () => {

    const error = useSelector((state) => state.gitApi.error, shallowEqual)
    const result = useSelector((state) => state.gitApi.data, shallowEqual)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [search, setSearch] = useState('')
    const [userSearch, setUserSearch] = useState('')

    //top-loading bar progress
    const [progress, setProgress] = useState(0)


    useEffect(() => {
        if (Object.keys(result).length !== 0) {
            setProgress(100);
            navigate(`${userSearch}`)
        }
        else if (error) setProgress(100)

    }, [navigate, userSearch, result, error])


    const handleSubmit = (e) => {
        if (e.key === 'Enter' || e.type === 'click') {
            e.preventDefault();

            setProgress((prev) => prev + 20)

            dispatch(userSearchData(search.trim()))
            dispatch(gitApiHit(search.trim()))
            setUserSearch(search.trim())

            setProgress((prev) => prev + 70)

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

            <div className='absolute top-1/3 w-full left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center
            md:top-1/2 md:w-3/5 lg:w-2/5'>

                <h1 className='text-3xl font-bold text-center md:text-4xl'>
                    Github Profile</h1>

                <p className="text-slate-800 text-center text-2xl md:text-3xl">Generate your Github Profile</p>

                <div className='flex flex-col items-center w-[90%] flex-wrap mt-3 space-y-3 
                md:flex-row md:w-full md:justify-between'>
                    <Input
                        value={search}
                        onChange={handleInputChange}
                        onKeyDown={handleSubmit}
                        placeholder='Github Username'
                        type="text"
                        name="user"
                        id="user"
                        className='p-2 w-full md:w-2/3'
                    />

                    <Button
                        onClick={handleSubmit}
                        label={'Generate'}
                        className='p-2 w-1/2  bg-primary text-white  
                        active:bg-orange-800 md:w-[28%] '
                    />
                </div>
                {error && <h1 className="mt-4 text-red-700 ">User not found</h1>}
            </div>
        </>
    )
}

export default Landing