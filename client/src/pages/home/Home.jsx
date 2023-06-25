/* eslint-disable react/jsx-key */
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
        const url = "http://localhost:8800/api/lists";
        const res = await axios.get(url, {
          headers: {
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODI1NDlhYzZjMDFlZmRkMWYyMGNiNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4ODU0NTc4MywiZXhwIjoxNjg4OTc3NzgzfQ.V8ykyrIGhXLfTYygZyQkDJFBicNXWb6QYe-pNgE253Q"
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
   {
    lists.map((list)=>(
      <List list={list}/>
    ))
   }

    </div>
  );
};

Home.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Home;
