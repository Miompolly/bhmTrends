/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@material-ui/icons"
import { useRef, useState } from "react";
import "./list.scss"
import ListItem from "../listitem/ListItem";

export default function List({list}) {
    const [isMoved,setIsMoved]=useState(false);
const [slideNumber,setSlideNUmber]=useState(0);
    const listRef=useRef();

    const handleClick=(direction)=>{
        setIsMoved(true)
        let distance=listRef.current.getBoundingClientRect().x-50
        if(direction==="left" && slideNumber>0){
            setSlideNUmber(slideNumber-1);
            listRef.current.style.transform=`translate(${230+distance}px)`;
        }
        if(direction==="right"  && slideNumber<5){
            setSlideNUmber(slideNumber+1);
            listRef.current.style.transform=`translate(${-230+distance}px)`;
        }
    }

  return (
    <div className="list">
<span className="listTitle">{list.title}</span>
<div className="wrapper">
<ArrowBackIosOutlined className="slideArrow left" onClick={()=>handleClick("left")}
style={{display:!isMoved && "none"}}
/>
<div className="container" ref={listRef}>
{
    list.content.map((item,i)=>(
        <ListItem index={i} item={item}/>
    )
)
    }

</div>

<ArrowForwardIosOutlined className="slideArrow right" onClick={()=>handleClick("right")}
/>
</div>
    </div>
  )
}
