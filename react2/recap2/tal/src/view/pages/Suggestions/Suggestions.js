import './Suggestions.css'

import {
    useParams
} from "react-router-dom";

function Suggestions() {

    const { id } = useParams();
    return (
        <h1>This is the Suggestions page: {id}</h1>
    )
}

export default Suggestions;