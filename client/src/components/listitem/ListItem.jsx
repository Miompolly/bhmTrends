import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpOutlined } from "@material-ui/icons";
import "./listitem.scss";
import { useState, useEffect } from "react";

export default function ListItem({ index, item }) {
  const [isHovered, setIsHovered] = useState(false);
  const [video, setVideo] = useState({});

  useEffect(() => {
    const getVideos = async () => {
      try {
        const response = await fetch("http://localhost:8800/videos/find/" + item, {
          headers: {
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODI1NDlhYzZjMDFlZmRkMWYyMGNiNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4ODU0NTc4MywiZXhwIjoxNjg4OTc3NzgzfQ.V8ykyrIGhXLfTYygZyQkDJFBicNXWb6QYe-pNgE253Q"
          }
        });
        const data = await response.json();
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };

    getVideos();
  }, [item]);

  return (
    <div
      className="listItem"
      style={{ left: isHovered ? index * 225 - 50 + index * 2.5 : undefined }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={video.img} alt="" />
      {isHovered && (
        <>
          <video src={video.trailer} autoPlay={true} loop />
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpOutlined className="icon" />
              <ThumbDownAltOutlined className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>{video.duration}</span>
              <span className="limit">+{video.limit}</span>
              <span>{video.year}</span>
            </div>
            <div className="desc">{video.desc}</div>
            <div className="genre">{video.genre}</div>
          </div>
        </>
      )}
    </div>
  );
}
