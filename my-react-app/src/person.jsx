const person = {
    name: 'Josh',
    theme: {
        backgroundColor: 'black',
        color: 'pink'
    }
}

export default function TodoList(){
    return(
        <div style={person.theme}>
            <h1>{person.name}'s Todo's </h1>
            <img className="avatar" src="https://i.imgur.com/7vQD0fPs.jpg" alt="Gregorio Y. Zara"></img>
            <ul>
                <li>Learn React</li>
                <li>Learn JSX</li>
                <li>Learn Components</li>
            </ul>

        </div>
    )
}