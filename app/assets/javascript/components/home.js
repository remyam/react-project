import React, { Component } from 'react';
import FaCopy from 'react-icons/lib/fa/copy';
import FaPen from 'react-icons/lib/fa/pencil';
import ScrollableAnchor from 'react-scrollable-anchor';
import { removeHash } from 'react-scrollable-anchor';   
import  SocialMediaShare  from './shared/socialmediashare';
import  EmailShare  from './shared/emailshare';
import  AvailableFunds  from './shared/availablefunds';


class home extends Component {
  render() {
        var handleChange = function(event){
        this.setState({html: event.target.value});
        }.bind(this);

       var scrollIntoViewSection = function(ele,e){
        e.preventDefault();
        document.getElementById(ele).scrollIntoView();   
        }.bind(this);

    return (
      <div id="wrapper">
        <div id="side_wrapper" className="col-md-2 hidden-xs">
          <div className="sidebar">
          <div className="sidebar_links"><a href='#section1' onClick={(e) => scrollIntoViewSection("link_cont",e)}>Your Link </a></div>
          <div className="sidebar_links"><a href='#section1' onClick={(e) => scrollIntoViewSection("available_fund_cont",e)}>Available Funds</a></div>  
          <div className="sidebar_links"><a href='#section1' onClick={(e) => scrollIntoViewSection("stat_cont",e)}>Stats </a></div>  
          </div>
        </div>
        <div id="main_wrapper" className="col-md-10 pull-right">
            <div className="home-container container form-horizontal">
               
                <div className="page-header">     
                  <h1>Something Something, Herbert!</h1>
                  <p>Better you make sure you use the shit out of this cause it'll be  a lot of API work, Herbert!</p>           
                </div>
                
                <div id="link_cont" className="linkAndShareCont sectionGap">
                    <div className="your-link-container">
                      <h3 className="left" >http://ballprk.com/invite/</h3><ContentEditable  html={'affiliate-god.12'} onChange={handleChange} /> 
                      <span className="copyLink"><FaCopy /></span>
                      <span className="copyLink" ><FaPen /></span>
                    </div>
                    < SocialMediaShare />
                </div>
              
              < EmailShare />

              < AvailableFunds /> 

               <div id="stat_cont" className="clear sectionGap">
               <h3>Stats</h3>
               <div className="row">
               <div className="col-md-3"></div>
                 <div  className="col-md-9">
                  <div className="col-xs-12 col-md-4 p-top-bottom5 m-bottom10"><h1>124</h1></div>   
                  <div className="col-xs-12 col-md-4 p-top-bottom5 m-bottom10"><h1>124</h1></div>   
                  <div className="col-xs-12 col-md-4 p-top-bottom5 m-bottom10"><h1>124</h1></div>   
                </div>
                </div>
                <div className="row">
                <div className="col-md-3"></div>
                 <div  className="col-md-9">
                  <div className="col-xs-12 col-md-4 p-top-bottom5 m-bottom10"><h5>Clicks</h5></div>   
                  <div className="col-xs-12 col-md-4 p-top-bottom5 m-bottom10"><h5>Sign Ups</h5></div>   
                  <div className="col-xs-12 col-md-4 p-top-bottom5 m-bottom10"><h5>Finished Sessions</h5></div>   
                </div>
                </div>
              </div>

            </div>
        </div>        
      </div>
    );
  }
}
var ContentEditable = React.createClass({
    render: function(){
        return <h3  className="left contentEdit"
            onInput={this.emitChange} 
            onBlur={this.emitChange}
            contentEditable
            dangerouslySetInnerHTML={{__html: this.props.html}}></h3>;
    },
       emitChange: function(e){
        var html = e.target.innerHTML;
        if(html.length < 15){
        if (this.props.onChange && html !== this.lastHtml) {
            this.props.onChange({
                target: {
                    value: html
                }
            });
          }
        this.lastHtml = html;
        }
    }
});
export default home;
