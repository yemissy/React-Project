import React from 'react';
import { Button, Radio, Icon } from 'antd';
import ImageGallery from 'react-image-gallery';

export default function Collections(props){
  return(
    <div id="collectContain">
      <button id ="formLoad1" onClick ={ () => props.renderThis('book me')}>Book Services</button>
      {props.collect.map(col => (
        <div className="categories1">
          <img className="collectionImg" src={col.urls.regular}></img>
        </div>
      ))}
      <button id ="back" onClick ={ () => props.renderThis('mainScreen1')}>Go Back</button>
    </div>
  )
}


{/* <Button.Group size="default">
<Button type="primary" className="arrowbtn">
<Icon type="left"/>
</Button>
<Button type="primary" className="arrowbtn">
<Icon type="right"/>
</Button>
</Button.Group> */}
