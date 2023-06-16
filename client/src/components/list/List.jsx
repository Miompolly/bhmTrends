import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@material-ui/icons"
import { useRef, useState } from "react";
import "./list.scss"
import ListItem from "../listitem/ListItem";

export default function List() {
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
<span className="listTitle">Continue to watch</span>
<div className="wrapper">
<ArrowBackIosOutlined className="slideArrow left" onClick={()=>handleClick("left")}
style={{display:!isMoved && "none"}}
/>
<div className="container" ref={listRef}>
<ListItem index={0} />
<ListItem index={1} />
<ListItem index={2} />
<ListItem index={3} />
<ListItem index={4} />
<ListItem index={5} />
<ListItem index={6} />
<ListItem index={7} />
<ListItem index={8} />
<ListItem index={9} />


</div>

<ArrowForwardIosOutlined className="slideArrow right" onClick={()=>handleClick("right")}
/>
</div>
    </div>
  )
}
