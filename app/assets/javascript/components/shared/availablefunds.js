import React, { Component } from 'react';

class AvailableFunds extends Component {
render() {
    return(
    <div id="available_fund_cont" className="clear sectionGap">
               <h3>Available Funds</h3>
                 <div className="row">
                    <div className="col-md-2 col-md-offset-5"><h1>123$</h1></div>
                    <div className="col-md-2 col-md-offset-5"><button type="button" className="btn btn-success payout sharp">Payout</button></div>
                </div>
    </div>
    )   
 }
}
export default AvailableFunds;
