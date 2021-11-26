function EditCard(props){
    return(
        <div className="container__edit">
        <button className="go__back">Go Back</button>
        <div className="edit__header">
            <div className="edit__header__left">
                <p className="edit__header__text details__text">Status</p>
                <div className="edit__header__status">Pending</div>

            </div>
            <div className="edit__header__right">
                <button className="edit__edit">Edit</button>
                <button className="edit__delete">Delete</button>
                <button className="edit__paid">Mark as Paid</button>
            </div>
        </div>

        <div className="edit__body">
            <div className="edit__body__details1">
                <div className="edit__body__details1__left">
                    <p className="details__boldtext">#X45SS1</p>
                    <p className="details__text">Graphic Design</p>
                </div>
                <div className="edit__body__details1__right">
                    <p className="details__text">19 Union Terrace</p>
                    <p className="details__text">London</p>
                    <p className="details__text">E13EZ</p>
                    <p className="details__text">United Kingdom</p>
                </div>
            </div>
            <div className="edit__body__details2">
                <div className="details2__date">
                    <div className="details2__date__data1">
                        <p className="details__text details2__data">Invoice Date</p>
                        <p className="details__boldtext">21 Aug 2021</p>
                    </div>
                    <div className="details2__date__data2">
                        <p className="details__text details2__data">Patment Due</p>
                        <p className="details__boldtext">20 Sep 2021</p>
                    </div>

                </div>
                <div className="details2__bill">
                    <p className="details__text">Billing to</p>
                    <p className="details__boldtext">Alex Grim</p>
                    <p className="details__text">84 Church Way</p>
                    <p className="details__text">Bradford</p>
                    <p className="details__text">8D19PB</p>
                    <p className="details__text">United Kingdom</p>
                </div>
                <div className="details2__email">
                    <p className="details__text">Send to</p>
                    <p className="details__boldtext">alexgrim@mail.com</p>
                </div>
            </div>
            <div className="edit__body__receipt">
                <div className="edit__body__receipt__header">
                <div className="receipt__itemname">
                    <p className="details__text">Item Name</p>
                    <p className="details__boldtext">Banner Design</p>
                    <p className="details__boldtext">Email Design</p>  
                </div>
                <div className="receipt__qty">
                    <p className="details__text">QTY.</p>
                    <p className="details__boldtext">1</p>
                    <p className="details__boldtext">2</p>  
                </div>
                <div className="receipt__price">
                    <p className="details__text">Price</p>
                    <p className="details__boldtext">£ 156.00</p>
                    <p className="details__boldtext">£ 200.00</p>  
                </div>
                <div className="receipt__total">
                    <p className="details__text">Total</p>
                    <p className="details__boldtext">£ 156.00</p>
                    <p className="details__boldtext">£ 400.00</p>  
                </div>
            </div>
            <div className="edit__body__receipt__footer">
                <p className="details__text details__text__footer">Amount Due</p>
                <p className="details__boldtext details__textbold__footer">£ 556.00</p>
            </div>
            </div>



        </div>



    </div>
        
    );
}
export default EditCard;