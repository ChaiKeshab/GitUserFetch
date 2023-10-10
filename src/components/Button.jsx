/*eslint-disable */
const Button = ({ onClick,
    label,
    type = 'button'
}) => {
    return (
        <>
            <button
                type={type}
                onClick={onClick}
                className={`py-2 px-16 m-1
                bg-primary text-white
                border-none rounded-md
                hover:cursor-pointer
                active:bg-orange-800`}
            >
                {label}
            </button>
        </>
    )
}

export default Button