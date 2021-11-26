
function Card(props){
    return(
<div className="invoice__card">
                <p className="invoice__card__id">{props.id}</p>
                <p className="invoice__card__date">{props.date}</p>
                <p className="invoice__card__name">{props.name}</p>
                <p className="invoice__card__price">{props.price}</p>
                <p className="invoice__card__status">{props.status}</p>
                <p className="invoice__card__arrow">--</p>
            </div>
    );
}
export default Card;