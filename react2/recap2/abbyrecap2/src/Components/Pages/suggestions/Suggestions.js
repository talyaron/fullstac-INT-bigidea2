import '.Suggestions.css'

import {
    useParams
} from "react-router-dom"

function Suggestions(){
    const {id} = useParams();
    return (
        <h1>suggestions page: {id}</h1>
    )
}

export default Suggestions;