import './FoodCard.css';

function FoodCard (props){
    const {food}=props;
    return(
        <div className="foodCard">
            {food}
        </div>
    )
}

export default FoodCard;