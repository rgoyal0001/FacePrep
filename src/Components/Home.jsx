import React from "react";
import InfinitScroll from "react-infinite-scroll-component";
import "./users.css";
import axios from "axios";
import { Component } from "react";
import { AuthContext } from "../Context/AuthContext";

export const Home = () => {
  const [users, setUsers] = React.useState([]);
  const { isAuth, handleAuth } = React.useContext(AuthContext);
  // const [start,setStart]=React.useState(1)
  const count = 25;
  let start = 1;
  // React.useEffect(()=>{
  //   fetchRandomUsers(setUsers,users)
  // },[])
  const fetchRandomUsers = (users, setUsers) => {
    let resolve = fetch(
      `https://randomuser.me/api/?results=${count}&start=${start}`
    );
    resolve.then(function (result) {
      result.json().then((res) => {
        setUsers([...users, ...res.results]);
        start = start + count;
        console.log("res in my", users, start);
      });
    });
  };
  const fetchNextUsers = () => {
    start=start+count
    // console.log(start + count);
    // console.log(users);

    let resolve = fetch(
      `https://randomuser.me/api/?results=${count}&start=${start}`
    );
    resolve.then(function (result) {
      result.json().then((res) => {
        setTimeout(() => {
          setUsers(users.concat(res.results));
        }, 1000);
        console.log("fetch", users);
      });
    });
  };

  React.useEffect(() => {
    fetchRandomUsers(users, setUsers);
  }, []);

  return (
    <>
      {isAuth ? (
        <div id="users">
          <InfinitScroll
            dataLength={users.length}
            next={fetchNextUsers}
            hasMore={true}
            loader={<h5>loading...</h5>}
          >
            <ul>
              {users?.map((item) => {
                const url = item.picture.thumbnail;
                // console.log(url)
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
        </div>
      ) : (
        <div>Please login with username as 'foo' and password as 'bas' </div>
      )}
    </>
  );
};
