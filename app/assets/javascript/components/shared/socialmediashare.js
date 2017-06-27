import React, { Component } from 'react';
import {
  ShareButtons,
   generateShareIcon  
} from 'react-share';

class SocialMediaShare extends Component {
  render(){
      const {
          FacebookShareButton,
          GooglePlusShareButton,
          LinkedinShareButton,
          TwitterShareButton,
          TelegramShareButton,
          WhatsappShareButton,
          PinterestShareButton,
          VKShareButton,
          OKShareButton
        } = ShareButtons;

      const FacebookIcon = generateShareIcon('facebook');
      const TwitterIcon = generateShareIcon('twitter');
      const GooglePlusIcon = generateShareIcon('google');
      const LinkedinIcon = generateShareIcon('linkedin');
    return (
      <div className="sharetitle clear form-group">
        <label className="col-sm-4 control-label">Share </label>
        <div className="col-sm-6">
          <div className="left col-xs-12 col-md-2">
            <FacebookShareButton
            url={'test'}
            title={'title'}
            className="Demo__some-network__share-button">
            <FacebookIcon
            size={32}
            round />
            </FacebookShareButton>
          </div>
          <div className="left col-xs-12 col-md-2">
            <GooglePlusShareButton
            url={"shareUrl"}
            className="Demo__some-network__share-button">
            <GooglePlusIcon
            size={32}
            round />
            </GooglePlusShareButton>
          </div>
          <div className="left col-xs-12 col-md-2">
            <LinkedinShareButton
            url={"shareUrl"}
            title={"title"}
            windowWidth={750}
            windowHeight={600}
            className="Demo__some-network__share-button">
            <LinkedinIcon
            size={32}
            round />
            </LinkedinShareButton>
          </div>
        </div>
      </div>
      )
  }
}
export default SocialMediaShare;
  