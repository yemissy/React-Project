import React from 'react';

// const titles=['The Light Series', 'Engagements Shoots', 'Baby Shower', 'Weddings', 'Birthdays', 'Potraits'];
export default function Categories(props){
  let i= 5-(props.titles.length-1);
  console.log(props.titles[i]);
  const titles =props.titles;
  return (
  <div className="parent">
    {/* <button>Book My Services</button> */}
    {props.coverPics.map(cover => (
      <div className ="categories">
        <img className="coverImgs" src={cover.urls.full}></img>
          {/* {i+=1} */}
      </div>
    ))}
    <div className="titleHead">
        {props.titles.map((title) => (
            <div className="titles">
              <h3>{title.name}</h3>
            </div>
        ))}
    </div>
  </div>
  )
}
