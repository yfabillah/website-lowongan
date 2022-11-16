import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const CobaDelete = () => {

  //materi fetching data
  const [data, setData] = useState(null)

  //materi create data
  const [input, setInput] = useState(
    {
      name: ""
    }
  )

  //indikator
  const [fetchStatus, setFetchStatus] = useState(true)

  useEffect(() => {
    //fetch data dengan kondisi
    if (fetchStatus === true) {
      axios.get("http://backendexample.sanbercloud.com/api/contestants")
        .then((res) => {
          setData([...res.data])
        })
        .catch((error) => {
        })
      setFetchStatus(false)
    }

  }, [fetchStatus, setFetchStatus])

  //handling input
  const handleInput = (event) => {
    let name = event.target.name
    let value = event.target.value
    if (name === "name") {
      setInput({ ...input, name: value })
    }

  }

  //handling submit
  const handleSubmit = (event) => {
    event.preventDefault()
    let {
      name
    } = input

    //create data
    axios.post('https://backendexample.sanbercloud.com/api/contestants', { name })
      .then((res) => {
        console.log(res)
        setFetchStatus(true)
      })

    //clear input setelah create data
    setInput(
      {
        name: ""
      }
    )
  }

  console.log(data)

  const handleDelete = (event) => {

    let idData = parseInt(event.target.value)

    axios.delete(`https://backendexample.sanbercloud.com/api/contestants/${idData}`)
    .then((res) => {
      setFetchStatus(true)
    })

  }

  return (

    <>
      <div>
        <ul>
          {data !== null && data.map((res) => {
            return (
              <>
                <li>
                  {res.name} | &nbsp;
                  <button>edit</button>
                  <button onClick={handleDelete} value={res.id}>delete</button>
                </li>
              </>
            )
          })}
        </ul>
      </div>
      <p>FORM DATA</p>
      {/* form data */}
      <form onSubmit={handleSubmit}>
        <span>Nama : </span>
        <input onChange={handleInput} value={input.name} name='name' />
        <input type={'submit'} />
      </form>
    </>
  )

}

export default CobaDelete