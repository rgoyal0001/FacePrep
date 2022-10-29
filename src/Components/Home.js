import React from "react";
import { Link } from "react-router-dom";
import InfinitScroll from 'react-infinite-scroll-component'
import './users.css'

export const Home = () => {
  const [users,setUsers]=React.useState([])
  const [start,setStart]=React.useState(1)
  const [count,setCount]=React.useState(20)
  const fetchRandomUsers=()=>{
    let resolve=fetch(`https://randomuser.me/api/?results=${count}&start=${start}`)
    resolve.then(function(result){
      result.json().then((res)=>{
        setUsers(res.results)
        // console.log('res in my',res)
      })
    })
  }
  const fetchNextUsers=()=>{
    setStart(start+count)
    // console.log(start)
    let resolve=fetch(`https://randomuser.me/api/?results=${count}&start=${start}`)
    resolve.then(function(result){
      result.json().then((res)=>{
        setUsers(users.concat(res.results))
        console.log('fetch',users)
      })
    })

  }

  React.useEffect(()=>{
    fetchRandomUsers()


  },[]

  ) 
  return (
    <div id="users">
    <InfinitScroll
      dataLength={100}
      next={fetchNextUsers}
      hasMore={true}
      loader={<h5>loading...</h5>}
    >
      <ul>
      {users?.map((item)=>{
        const url=item.picture.thumbnail
        // console.log(url)
        return (
          <li key={item.phone} id="user">
            <p>{item.name.first}  {item.name.last} </p>
            <img src={url} id='img'></img>
          </li>
        )
      })
    }
    </ul>
    </InfinitScroll>
    </div>
  )
};

