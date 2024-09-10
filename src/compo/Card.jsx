import React, { useEffect, useState } from 'react'

const Card = ({ obj }) => {

 const name = obj.name
 const userName = obj.userName
 const loc = obj.loc
 const following = obj.following
 const follower = obj.follower
 const repos = obj.repos
 const bio = obj.bio
 const img = obj.img
 const crd = getDate(obj.crd)
 const upd = getDate(obj.upd)
 const url = obj.url


  function getDate(dateStr) {

    const date = new Date(dateStr);

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear()).slice(-2);

    const formattedDate = `${day}-${month}-${year}`;
    return formattedDate
  }


  return (
    <div className='flex flex-col items-center h-[80%] mt-[10%]'>
      <a href={url}><p className='text-3xl text-center font-semibold my-2 hover:underline cursor-pointer'>{userName}<span><i className="ri-external-link-line text-lg text-blue-600"></i></span></p></a>
      <div id="up" className='h-[50%]'>
        <img src={img} alt="" className='h-[90%] outline hover:shadow-xl	' />
      </div>
      <div id="down" className='h-1/2 w-[80%] text-[20px]'>


        <div id="follow" className=' flex justify-evenly'>
          <div className="followers ">
            <span className='text-3xl text-center font-thin  w-full inline-block'>{follower}</span>
            <br />
            <p className='text-xl font-semibold'>Followers</p>
          </div>

          <div className="following">
            <span className='text-3xl text-center font-thin w-full inline-block'>{following}</span>
            <br />
            <p className='text-xl font-semibold'>Following</p>
          </div>



          {/* general Info */}

        </div>
        <div id="generalInfo" className='ml-7 mt-7'>

          <p className="location"><span className='font-semibold'>Name</span> : {name}</p>
          <p className="location"><span className='font-semibold'>Location</span> : {loc}</p>
          <p className="location"><span className='font-semibold'>Repos</span> : {repos}</p>
          <p className="location"><span className='font-semibold'>Bio</span> : {bio || "Nothing is here"}</p>
        </div>

        {/* Created and other details */}
        <div id="follow" className=' flex justify-between mt-[20px]'>
          <div className="followers">
            <span className='text-xl text-center  w-full inline-block'>{crd}</span>
            <br />
            <p className='text-lg hover:underline font-semibold w-full text-center'>Created</p>
          </div>

          <div className="followin">
            <span className='text-xl text-center w-full inline-block'>{upd}</span>
            <br />
            <p className='text-lg hover:underline font-semibold w-full text-center'>Updated</p>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Card