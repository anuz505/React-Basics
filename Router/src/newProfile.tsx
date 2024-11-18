import { useParams } from "react-router-dom"

function NewProfile(){
    const params = useParams<{profileId:string}>()
    return(
        <h1>new Profile {params.profileId}</h1>

    )
}
export default NewProfile