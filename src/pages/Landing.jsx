import { useState } from "react";
// import { useNavigate } from 'react-router-dom'
import Input from '../components/Input'
import Button from '../components/Button'
import { useDispatch, useSelector } from 'react-redux'
import { gitApiHit } from '../redux/action/gitApiAction'
import { userSearchData } from '../redux/action/searchAction'
import useNavigateOnSuccess from "../hooks/useNavigateOnSuccess";


const Landing = () => {

    const error = useSelector((state) => state.gitApi.error)
    const result = useSelector((state) => state.gitApi.data)

    const dispatch = useDispatch()
    // const navigate = useNavigate()

    const [search, setSearch] = useState('')
    const [userSearch, setUserSearch] = useState('')

    useNavigateOnSuccess(userSearch, result)

    const handleSubmit = async (e) => {
        if (e.key === 'Enter' || e.type === 'click') {
            e.preventDefault();

            dispatch(userSearchData(search.trim()))
            dispatch(gitApiHit(search.trim()))
            setUserSearch(search.trim())
            setSearch('')
        }
    }

    const handleInputChange = (e) => {
        setSearch(e.target.value);
    }

    return (
        <>
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