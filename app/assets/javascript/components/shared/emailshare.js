import React, { Component } from 'react';

class EmailShare extends Component {
render() {
    return(
     <div id="contact_cont" className="sectionGap">   
         <div className="clear row form-group">
         <div className="col-md-3 control-label"><label> Import Contacts </label></div>
          <div className="col-md-9">
            <div className="col-xs-12 col-md-4 p-top-bottom5 m-bottom10"><button type="button" className="center-block btn btn-danger sharp width100">Gmail</button></div>   
            <div className="col-xs-12 col-md-4 p-top-bottom5 m-bottom10"><button type="button" className="center-block btn btn-primary sharp width100">Outlook</button></div>   
            <div className="col-xs-12 col-md-4 p-top-bottom5 m-bottom10"><button type="button" className="center-block btn btn-primary sharp width100">Yahoo</button></div>   
          </div>
        </div>

         <div className="clear row form-group">
         <label htmlFor="inputEmail3" className="col-md-3 control-label">Email Contacts </label>
          <div className="col-md-9">
            <div className="col-md-8 p-top-bottom5 m-bottom10"><input type="email" id="inputEmail" placeholder="Email"/></div>
            <div className="col-md-4 p-top-bottom5 m-bottom10"><button type="button" className="btn btn-primary sharp inviteBtn">Invite</button></div>
          </div>
        </div>
    </div>
    )   
 }
}
export default EmailShare;
