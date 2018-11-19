import React from 'react';
import { Button, Radio, Icon } from 'antd';
import ImageGallery from 'react-image-gallery';

export default function Collections(props){
  return(
    <div id="collectContain">
      {props.collect.map(col => (
        <div className="categories1">
          <img className="collectionImg" src={col.urls.regular}></img>
        </div>
      ))}
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
