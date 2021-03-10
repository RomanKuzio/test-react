interface IProps {
    className: string
}

const Videoplayer = ({ ...props }: IProps) => {
    return (
        <video className={props.className} autoPlay loop>
            <source src="video/test.mp4" type="video/mp4" />
        </video>
    )
}

export default Videoplayer