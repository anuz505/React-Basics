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