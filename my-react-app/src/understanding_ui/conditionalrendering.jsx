import propTypes from "prop-types"
function Usergretting(props){
    const welcomeMessage = <h2 className="Welcome">Welcome {props.username} </h2>
    const rejectmessage = <h2 className="login">Please login</h2>

    return(
        (props.isLoggedin ? welcomeMessage : rejectmessage)
    )

}
Usergretting.propTypes = {
    isLoggedin:propTypes.bool,
    username: propTypes.string
}
Usergretting.defaultProps = {
    isLoggedin: false,
    username: "Guest"
}
export default Usergretting;

//CSS
// .Welcome{
//     font-family: 'Bebas Neue', cursive;
//     font-size: 3em;
//     color: #333;
//     background-color: #ffee32;
// }
// .login{
//     font-family: 'Bebas Neue', cursive;
//     font-size: 3em;
//     color: #d6d6d6;
//     background-color: #00509d;
// }