import "./Food.css";
function Food(props) {
    return (
        <div className='food-box'>
            <div className='food-image'>
                <img src={props.image}/>
            </div>
            <p className='food-name'>{props.name}</p>
            <p className='food-amount'>{props.amount}</p>
        </div>);
}
export default Food;