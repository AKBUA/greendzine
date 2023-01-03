

import React from 'react'
import './SearchBox.css'

export default function SearchBox({ listData, setListData, originalCopy }) {

  function handleChange(event) {
    const serachTerm = event.target.value.toLowerCase()
    const filterData = listData.filter((e) => {
      return e.first_name.toLowerCase().includes(serachTerm) || e.last_name.toLowerCase().includes(serachTerm);
    })

    setListData(filterData);

    if (event.target.value.length === 0) {
      setListData(originalCopy)
    }

  }
  return (
    <>
      <div className='searchBar'>

        <input className='input_box' type="text" onChange={handleChange} placeholder="Search User" />

      </div>
    </>
  )
}
