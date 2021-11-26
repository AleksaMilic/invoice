import Card from "./Card"

function InvoiceBody(props){
    return(
        <div className="invoices">
        <div className="invoices__header">
            <div className="invoices__header__left">
                <h1 className="invoices__headline">Invoices</h1>
                <p className="invoices__headline__subtext">There is 4 invoices</p>
            </div>
            <div className="invoices__header__right">
                <p className="invoices__header__droplist">Dorplist</p>
                <button className="invoices__header__add">Add invoice</button>
            </div>
        </div>
        <div className="invoice__body">
        <Card id="#X32SS1" date="Due 20 Dec 2021" name="Nick Summers" price="3211,99$" status="Pending"/>
        <Card id="#F2GG13" date="Due 12 Nov 2022" name="Rich Folds" price="32 211,99$" status="Pending"/>
        <Card />
        </div>
        </div>
      
      
        );
  }
  export default InvoiceBody;