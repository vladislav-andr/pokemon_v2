import React, { useState, useEffect } from 'react'
import Header from './Components/Header/Header'
import SideBar from './Components/Sidebar/SideBar'
import Content from './Components/Content/Content'
import { useDispatch } from 'react-redux'
import { getAllList } from './store/asyncActions/getAllList'

const App = () => {
  const [menuStatus, setMenuStatus] = useState(false)
  const dispatch = useDispatch()
  useEffect(() => dispatch(getAllList('https://pokeapi.co/api/v2/pokemon?limit=9999')), [])
  return (
    <div>
      <Header
        setMenuStatus={setMenuStatus}
      />
      <SideBar
        menuStatus={menuStatus}
        setMenuStatus={setMenuStatus}
      />
      <Content />
    </div>
  )
}

export default App;
