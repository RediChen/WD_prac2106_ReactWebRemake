export default function Logo(props) {
    //input e.g. : size=64 (in px)
    const address = "/favicon/" + props.size + "px_woFrame.png";
    return (
        <img className={`logo logo-${props.size}`} src={(address)}
            alt="心晴診所 Sunshine Clinic logo" />
    );
}