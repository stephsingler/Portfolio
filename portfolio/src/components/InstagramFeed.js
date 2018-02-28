import React from 'react';
//UI
import RaisedButton from 'material-ui/RaisedButton';
import { FaInstagram } from 'react-icons/lib/fa';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//data
import instagram from '../data/instagram';

const InstagramFeed = () => {
  const renderInsta = () => {
    return (
      instagram.map((insta) => {
        return (
          <div className="insta" key={insta.id}>
            <img src={insta.url} className="single-insta" />
          </div>
        );
      })
    );
  }
  return (
    <MuiThemeProvider>
      <div className="insta-button-container">
        <RaisedButton
        className="insta-button"
        href="https://www.instagram.com/stephsingler/"
        target="_blank"
        label="Follow Me on Instagram"
        backgroundColor="thistle"
        icon={<FaInstagram />}
        />
      </div>
      <div className="instagram">
        {renderInsta()}
      </div>
    </MuiThemeProvider>
  );
}
export default InstagramFeed;