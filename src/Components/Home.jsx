import React from "react";
import InfinitScroll from "react-infinite-scroll-component";
import "./users.css";
// import axios from "axios";
// import { Component } from "react";
import { AuthContext } from "../Context/AuthContext";
import header from '../header.png'
import footer from '../footer.png'
export const Home = () => {
  const [users, setUsers] = React.useState([]);
  const { isAuth } = React.useContext(AuthContext);
  const count = 25;
  let start = 1;

  const fetchRandomUsers = (users, setUsers) => {
    let resolve = fetch(
      `https://randomuser.me/api/?results=${count}&start=${start}`
    );
    resolve.then(function (result) {
      result.json().then((res) => {
        setUsers([...users, ...res.results]);
        start = start + count;
        // console.log("res in my", users, start);
      });
    });
  };
  const fetchNextUsers = () => {
    // start=start+count

    let resolve = fetch(
      `https://randomuser.me/api/?results=${count}&start=${start}`
    );
    resolve.then(function (result) {
      result.json().then((res) => {
        setTimeout(() => {
          setUsers(users.concat(res.results));
        }, 1000);
        // console.log("fetch", users);
      });
    });
  };

  React.useEffect(() => {
    fetchRandomUsers(users, setUsers);
    fetchNextUsers()
  }, []);

  return (
    <>
      {isAuth ? (    
        <>
        <div id="users">
        <img style={{height:'75px',width:'320px',position:'fixed',left:'608px'}} src={header} alt="" />
          <InfinitScroll
            dataLength={users.length}
            next={()=>{fetchNextUsers()}}
            hasMore={true}
            loader={<h5>loading...</h5>}
          >
            <ul>
              {users?.map((item) => {
                const url = item.picture.thumbnail;
                return (
                  <li key={item.phone} id="user">
                    <p>
                      {item.name.first} {item.name.last}{" "}
                    </p>
                    <img src={url} alt="profile" id="img"></img>
                  </li>
                );
              })}
            </ul>
          </InfinitScroll>
          <img style={{height:'75px',width:'320px',position:'fixed',left:'608px'}} src={footer} alt="" />

        </div>
        <img style={{height:'35px',width:'322px',position:'fixed',left:'607px'}} src={footer} alt="" />
        </>

      ) : (
        <div>Please login with username as 'foo' and password as 'bas' </div>
      )}
    </>
  );
};