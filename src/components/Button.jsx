/*eslint-disable */
const Button = ({ onClick,
    label,
    type = 'button',
    className
}) => {
    return (
        <>
            <button
                type={type}
                onClick={onClick}
                className={`${className} border-none rounded-md hover:cursor-pointer `}
            >
                {label}
            </button>
        </>
    )
}

export default Button