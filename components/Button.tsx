interface ButtonProps {
    text: string;
    className: string;
    handleClick: (type: string) => void
    type: string;
}

const Button = ({text, className, handleClick, type} : ButtonProps) => {
  return (
    <button
        onClick={() => handleClick(type)}
    className={`${className} px-3 rounded`}>{text}</button>
  )
}

export default Button