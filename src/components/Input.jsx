/*eslint-disable*/
const Input = ({
    id = null,
    label = null,
    type = 'text',
    placeholder = null,
    value,
    onChange,
    onKeyDown,
    className
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
                className={`${className} outline-none bg-slate-100 text-base border border-black rounded-md`}
            />
        </>)
}

export default Input