import PropTypes from 'prop-types';
import "./home.scss";
import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import { useEffect, useState } from 'react';
import axios from "axios";

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/api/lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`, {
          headers: {
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODI1NDlhYzZjMDFlZmRkMWYyMGNiNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4NzY4MzMwMywiZXhwIjoxNjg4MTE1MzAzfQ.z4MoCp9zTzh407V_AXF4FM_CM1CPnoCUkC_EVXb9GcE"
          }
        });
        
        setLists(res.data);
        console.log(res);
      } catch (err) {
        console.log(err.res);
      }
    }
    getRandomLists();
  }, [type, genre]);

  return (
    <div className="home">
      <Navbar />
      <Featured type={type} />
      <List />
      <List />
      <List />
      <List />
    </div>
  );
};

Home.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Home;
