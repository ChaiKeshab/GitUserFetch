/*eslint-disable*/
const Input = ({
    id = null,
    label = null,
    type = 'text',
    placeholder = null,
    value,
    onChange,
    onKeyDown
}) => {
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input
                id={id}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                onKeyDown={onKeyDown}
                className="outline-none
                    sm:w-full
                    bg-slate-100 
                    text-base
                    border border-black rounded-md 
                    p-2 m-1 w-min-1/2"
            />
        </>)
}

export default Input