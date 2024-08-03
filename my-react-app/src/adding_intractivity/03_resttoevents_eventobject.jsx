export default function Profilepic() {
    const imgsrc = "https://i.imgur.com/Mx7dA2Y.jpg";

    const handleClick = (event) => event.target.style.display = "none";

    return(
        <img src={imgsrc} alt="image" onDoubleClick={handleClick} />
    )
}