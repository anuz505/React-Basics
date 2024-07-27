import propTypes from "prop-types"

function Student (props){
    return(
        <div className="student">
            <p>Name: {props.Name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.Student ? "Yes": "No"}</p>
        </div>
    )
}
Student.propTypes = {
    Name : propTypes.string,
    Age : propTypes.number,
    Student : propTypes.bool
}
Student.defaultProps = {
    Name : "Guest",
    Age : 0,
    Student: false
}
export default Student