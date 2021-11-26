
    function NewInvoice(props){
    return(

<div className="box">
<div className="text_1">
<h1>New Invoice</h1>
<p>Bill Form</p>
<li>Street Address</li>

<input type="text"/>
</div>

<div className="city">
<div className="city1">
<li>City </li>
<input type="text" className="input"/>
</div>
<div className="postal">
<li>Postal Code</li>
<input type="text" className="input"/>
</div>
<div className="country">
<li>Country</li>
<input type="text" className="input"/>

</div>
</div>

<div className="bill">
<p>Bill To</p>
<div className="clientsname">
<div className="gap_1">
<li>Client`s Name</li>
<input type="text" name="" id=""/>
</div>
<div className="gap">
<li>Client`s Email</li>
<input type="text" name="" id=""/>
</div>
<div className="gap_2">
<li>Street Address</li>
<input type="text" name="" id=""/>
</div>
<div className="space city">
<div className="city1">
<li>City </li>
<input type="text"/>
</div>
<div className="postal">
<li>Postal Code</li>
<input type="text"/>
</div>
<div className="country">
<li>Country</li>
<input type="text"/>

</div>
</div>
</div>

<div className="date">
<div className="InvoiceDate">
<div className="Sort">
<li>Invoice Date</li>
<input type="date" name="" id=""/>
</div>
<div className="Sort">
<li>Payment Terms</li>
                                                                    {/* <datalist id="mylist">
                                                                        <option value="Net 1 Day">
                                                                        <option value="Net 7 Days">
                                                                            <option value="Net 14 Days">
                                                                        <option value="Net 30 Days">
                                                                        </option>
                                                                    </datalist> */}
<input type="search" list="mylist"/>
</div>
</div>
<div className="project">
<li>Project Description</li>
<input type="text" name="" id=""/>
</div>
</div>
<div className="ItemList">
<h1>Item List</h1>
<div className="itemName">
<li>Item name</li>
<li>Qty.</li>
<li>Price.</li>
   <li>Total</li>
    </div>
  <button className="add_new_item">+ Add new Item</button>
 </div>
  <div className="discord">
                         
     <li>Discord</li>
   <div className="buttons2">
 <button className="save">Save as draft</button>
  <button className="send">Save & Send</button>
 </div>
   </div>
</div>
</div>

          
            
       
    );
}
export default NewInvoice;