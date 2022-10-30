import React from "react";
import InfinitScroll from "react-infinite-scroll-component";
import "./users.css";

import { AuthContext } from "../Context/AuthContext";

export const Home = () => {
  const [users, setUsers] = React.useState([]);
  const { isAuth } = React.useContext(AuthContext);
  let count = 15;
  let start = 1;

  const fetchUsers = () => {

    let resolve = fetch(
      `https://randomuser.me/api/?results=${count}&start=${start}`
    );
    resolve.then(function (result) {
      result.json().then((res) => {
        setTimeout(() => {
          setUsers(users.concat(res.results));
        }, 1000);
      });
    });
    start=start+count;
  };

  React.useEffect(() => {
    fetchUsers()
  }, []);

  return (
    <>
      {isAuth ? (    
        <>
        <div id="users">
          <InfinitScroll
            dataLength={users.length}
            next={fetchUsers}
            hasMore={true}
            loader={<h5>loading...</h5>}
          >
            <ul>
              {users.map((item) => {
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

        </div>
        </>

      ) : (
        <div>Please login with username as 'foo' and password as 'bas' </div>
      )}
    </>
  );
};