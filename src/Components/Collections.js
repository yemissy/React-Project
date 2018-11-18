import React from 'react';
import { Button, Radio, Icon } from 'antd';
import ImageGallery from 'react-image-gallery';

export default function Collections(props){
  const collectionData=[
    {original: props.col.small},
    {thumbnail:props.col.thumb},
  ]
  console.log(collectionData)
  return(
    <div id="collectContain">
      <ImageGallery className="collectionImg" items={collectionData}/>
      <Button.Group size="default">
        <Button type="primary" className="arrowbtn">
          <Icon type="left"/>
        </Button>
        <Button type="primary" className="arrowbtn">
          <Icon type="right"/>
        </Button>
      </Button.Group>
    </div>
  )
}
