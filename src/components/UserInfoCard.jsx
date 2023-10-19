/*eslint-disable */
const UserInfoCard = ({
    image,
    label,
    children
}) => {
    return (
        <>
            <div className='border-2 rounded-md p-3 shadow-md bg-[#EAEAEA]'>
                {console.log(children, 'betta')}
                <div className="flex">
                    {image}
                    <p className="ml-1">{label}</p>
                </div>
                {/* whitespace-normal break-all   //to break the text rather than have them overflow */}
                {children ? <div className="ml-1 whitespace-normal break-all font-bold">{children}</div>
                    : <p className="ml-1 text-[#7E7E7E] whitespace-normal break-all">NOT FOUND</p>}

            </div>
        </>
    )
}

export default UserInfoCard