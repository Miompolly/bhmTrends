
import { InfoOutlined, PlayArrow } from "@material-ui/icons"
import PropTypes from "prop-types";
import "./featured.scss"

const Featured = ({ type }) => {
    return (
      <div className="featured">
        {type && (
          <div className="category">
            <span>{type === "song" ? "Songs" : "Album"}</span>
            <select name="genre" id="genre">
              <option>genre</option>
              <option>Pop</option>
              <option>Rock</option>
              <option>Hip-hop/Rap</option>
              <option>R&B</option>
              <option>Country</option>
              <option>Electronic</option>
              <option>Jazz</option>
              <option>Classical</option>
              <option>Folk</option>
              <option>Reggae</option>
              <option>Trap</option>
            </select>
            </div>
        )
    }
    <img 
    width="100%"
    src="https://s.hdnux.com/photos/01/32/54/55/23776101/3/1200x0.jpg"/>
   
    <div className="info">
    <p>No worries by Lil Wayne</p>
    <span className="desc">No Worries is a song by American hip hop recording artist Lil Wayne, released on September 3, 2012, as the lead single from his tenth studio album, I Am Not a Human Being II. It features vocals from Detail and was produced by Detail himself, along with the production team The Order</span>
    <div className="buttons">
   <button className="play">
    <PlayArrow/>
    <span>Play</span>
    </button>
    <button className="more">
 <InfoOutlined/>
 <span>Lyrics</span>

    </button>
    </div>
    </div>
    </div>

  )
}
Featured.propTypes = {
    type: PropTypes.string.isRequired,
  };
export default Featured
