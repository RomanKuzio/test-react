interface IProps {
  text: string;
  style?: string;
  action: () => void;
  disabled?: boolean;
}

const Button = ({ ...props }: IProps) => {
  return (
    <button
      className={`${props.style} button`}
      disabled={props.disabled}
      onClick={props.disabled ? null : props.action}
    >
      <p>{props.text}</p>
    </button>
  );
};

export default Button;
