import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, fetchTodos } from '../Redux/slice/CardSlice'


const Home = () => {

  const dispatch = useDispatch();
  const state = useSelector((state) => state.card);
  let items = state.data
  console.log(items);


  useEffect(() => {
    dispatch(fetchTodos())
  }, [])

  if (state.isLoading) {
    return <h1>Loading....</h1>;
  }


  return (
    <>

      <div className="App">
        {items && items.map((item) => (
          <div key={item.id}>
            <li>{item.title}</li>
          </div>
        ))}
      </div>
    </>
  )
}

export default Home