import axios from 'axios';
import React, { useEffect, useState } from 'react'
import List from '../list/List'
import SearchBox from '../searchBox/SearchBox'
import './Screen.css'
const url = 'https://reqres.in/api/users?page=2';
export default function Screen() {
  const [listData, setListData] = useState([]);
  const [originalCopy, setOriginalCopy] = useState([]);
  useEffect(() => {
    axios.get(url).then((res) => {
      // console.log(res)
      setListData(res.data.data);
      setOriginalCopy(res.data.data)

    })
  }, [])
  return (
    <div className='screen'>
      <p className='userlist'>Users List</p>
      <SearchBox className="search_box" listData={listData} setListData={setListData} originalCopy={originalCopy} />
      <List list={listData} />

    </div>
  )
}
