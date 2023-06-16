import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpOutlined } from "@material-ui/icons"
import "./listitem.scss"
import { useState } from "react"

// eslint-disable-next-line react/prop-types
export default function ListItem({index}) {

  const [isHovered,setIsHovered]=useState(false);
  const trailler ="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";

  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="https://s.hdnux.com/photos/01/32/54/55/23776101/3/1200x0.jpg" 
        alt=""
      />
      {isHovered && (
        <>
          <video src={trailler} autoPlay={true} loop />
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpOutlined className="icon" />
              <ThumbDownAltOutlined className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>1 hour 14 mins</span>
              <span className="limit">+16</span>
              <span>2012</span>
            </div>
            <div className="desc">
            No Worries is a song by American hip hop recording artist Lil Wayne,
            released on September 3, 2012
            </div>
            <div className="genre">Hip Hop</div>
          </div>
        </>
      )}
    </div>
  );
}
