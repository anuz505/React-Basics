export default function Toolbar({playsomething,uploadsomething}){
    return(
        <div>
            <Button onClick={playsomething}>
                Play someshit bub.
            </Button>
            <Button onClick={uploadsomething}>
                Upload deadpool.
            </Button>
        </div>
    );
}
function Button({onClick,children}){
    return(
        <button onClick={onClick}>{children}</button>
    )
}
