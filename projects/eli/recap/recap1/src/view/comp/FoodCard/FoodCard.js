import "./FoodCard.css"


function FoodCard(props){
    const {food} = props
    
    return(
        <p className="foodCard">{food}</p>
    )
}

export default FoodCard