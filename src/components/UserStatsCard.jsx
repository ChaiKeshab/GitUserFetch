/*eslint-disable */
const UserStatsCard = ({ number, label }) => {
    return (
        <div className='flex w-1/3 min-w-fit py-2 px-4 m-1 bg-[#EAEAEA] rounded-md justify-center
        md:block md:space-y-3 md:w-fit md:bg-white md:p-0 md:m-0'>

            <div className='md:text-4xl mr-1 font-bold md:font-normal'>{number}</div>
            <div className='rounded md:bg-[#EAEAEA]
            md:px-8 md:py-2'>
                {label}
            </div>
        </div>
    )
}

export default UserStatsCard
