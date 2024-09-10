import React, { useRef, useState } from 'react'
import Card from './compo/Card'
import Just from './compo/Just'

const App = () => {

  const ref = useRef(null)
  const [obj, setObj] = useState({})
  const [render, setRender] = useState(false)
  const fetchData = () => {
    (async (obj) => {

      const raw = await fetch("https://api.github.com/users/" + ref.current.value)
      const result = await raw.json()

      setObj({
        userName: result.login,
        name: result.name,
        loc: result.location,
        follower: result.followers,
        following: result.following,
        repos: result.public_repos,
        bio: result.bio,
        img: result.avatar_url,
        url: result.url,
        crd: result.created_at,
        upd: result.updated_at
      })
    })(obj).then(res => setRender(true))
  }



  // 

  return (
    <div id='main'>
      <h1 className='heading text-7xl left-1/2 translate-x-[-50%] absolute w-full text-center '><span className='text-white' >Github  </span> Profile</h1>
      <div className="content w-full h-screen flex">
        <div id="left" className='w-1/2 h-full bg-black pl-[5%] text-white pt-[92px] flex items-center justify-center'>



          <div>

            <p id="intro" className='w-[90%] text-justify text-[18px]'>
              Find GitHub accounts with ease using our powerful search tool. Discover new collaborators, connect with fellow developers, and expand your network. Search by username, email, or location to find the perfect match. Unlock new opportunities and take your projects to the next level.
            </p>

            <img src="https://www.analyticsvidhya.com/wp-content/uploads/2015/07/github_logo.png" alt="" className='invert w-[30%] my-6' />

            <div className="search mt-[3%] text-xl text-black w-[70%]">
              <label htmlFor="search" className='text-white font-semibold'>Enter userName</label>
              <div className="wrapperSearchBar bg-white px-3 rounded-full flex justify-between items-center">

                <i className="ri-search-line"></i>
                <input ref={ref} id='search' type="text" placeholder='Enter User Name' className='pl-3 py-2 flex-1 flex-shrink-0 caret-[red] ' />
                <button className='bg-blue-600 px-2 transform-gpu w-[60px] h-full text-white' onClick={fetchData}>Go</button>
              </div>
            </div>
          </div>
        </div>
        <div id="right" className='w-1/2 h-full'>
          {(!render) ? <Just /> : <Card obj={obj} />}
        </div>

      </div>
    </div>
  )
}

export default App