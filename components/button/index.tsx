interface IProps {
    text: string,
    style?: string,
    action: () => void
}

const Button = ({ ...props }: IProps) => {
    return (
        <button className={`${props.style} button`} onClick={props.action}>
            <p>{props.text}</p>
        </button>
    )
}

export default Button;
