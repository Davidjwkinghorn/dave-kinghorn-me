import React from "react";


export default class Wine extends React.Component {
  render() {
    return (
      <>
        <div className="wine-content">
          <img src={process.env.PUBLIC_URL + "/assets/images/Gordons-logo-new-500x164-1.webp"} className="gordons-wine-logo" alt="Gordon's Fine Wine and Liquors Logo"/>
        </div>
      </>
    );
  }
}