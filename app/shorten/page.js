"use client"

import React from 'react'
import { useState } from 'react'
import Link from 'next/link'

const Shorten = () => {
  const [url, setUrl] = useState("")
  const [shortURL, setshortURL] = useState("")
  const [generated, setGenerated] = useState("")

  const generate = (params) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "url": url,
      "shorturl": shortURL
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        // setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shortURL}`)
        setGenerated(`${shortURL}`)
        setUrl("")
        setshortURL("")

        console.log(result)
        alert(result.message)
      })
      .catch((error) => console.error(error));
  }


  const handleChange = (params) => {

  }

  return (
    <div className='mx-auto max-w-lg bg-purple-100 my-16 p-8 rounded-lg flex flex-col gap-4 h-[80vh]'>
      <h1 className='font-bold text-2xl text-center'>Generate your short URLs</h1>
      <div className='flex flex-col gap-2'>
        <input value={url} className='bg-white py-2 text-center' type="text" placeholder='Enter your URL' onChange={e => { setUrl(e.target.value) }} />
        <input value={shortURL} className='text-center py-2 focus:outline-purple-600 rounded-md bg-white' type="text" placeholder='Enter your preferred URL text' onChange={e => { setshortURL(e.target.value) }} />
        <button onClick={generate} className='bg-purple-500 rounded-lg shadow-lg p-3 py-2 font-bold text-white my-3'>Generate</button>
      </div>
      {generated && <><span className='text-lg font-bold'>Your Link</span><code><Link target="_blank" href={generated}>LinkUp/{generated}</Link></code></>}
    </div>
  )
}

export default Shorten
