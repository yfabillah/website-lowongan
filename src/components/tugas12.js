import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Table } from 'flowbite-react'

const Tugas12 = () => {

    const [data, setData] = useState([])

    const [input, setInput] = useState({
      name: "",
      course: "",
      score: ""
    })

    const [fetchStatus, setFetchStatus] = useState(true)

    useEffect(() => {
      if(fetchStatus === true){
        axios.get("https://backendexample.sanbercloud.com/api/student-scores")
        .then( (res) => {
            setData([...res.data])
        })
        .catch((error) => {
    
        })
        setFetchStatus(false)
      }
    }, [fetchStatus, setFetchStatus])

    function handleIndexScore (score) {
      if (score > 80) {
        return("A")
      }
      if(score > 70){
        return("B")
      }
      return("E")

    }

    const handleInput = (event) => {
      let name = event.target.name
      let value = event.target.value

      if (name === "name") {
        setInput({...input, name: value})
      }
      else if(name === "course") {
        setInput({...input, course: value})
      }
      else if(name === "score") {
        setInput({...input, score: value})
      }
    }

    const handleSubmit = (event) => {
      event.preventDefault()

      let {
        name,
        course,
        score
      } = input

      axios.post('https://backendexample.sanbercloud.com/api/student-scores', {name, course, score})
          .then((res) => {
            console.log(res)
            setFetchStatus(true)
          })

      setInput({
        name: "",
        course: "",
        score: ""
      })
    }

    const handleDelete = (event) => {
      let idData = parseInt(event.target.value)
      console.log(idData)

      axios.delete(`https://backendexample.sanbercloud.com/api/contestants/${idData}`)
      .then((res) => {
        console.log(res)
        setFetchStatus(true)
      })
    }
    
  return (
    <>
      <div className='ml-72 mt-14 mr-96'>
        <Table>
          <Table.Head className='bg-gray-50'>
              <Table.HeadCell>ID</Table.HeadCell>
              <Table.HeadCell>Nama</Table.HeadCell>
              <Table.HeadCell>Nilai</Table.HeadCell>
              <Table.HeadCell>Course</Table.HeadCell>
              <Table.HeadCell>Index Nilai</Table.HeadCell>
              <Table.HeadCell>Action</Table.HeadCell>
          </Table.Head>
          { !data !== null && data.map((res, index) => {
            return(
              <Table.Body className='bg-white dark:border-gray-700 dark:bg-gray-800'>
                <Table.Row className='divide-y'>
                  <Table.Cell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'> {index + 1}</Table.Cell>
                  <Table.Cell> {res.name}</Table.Cell>
                  <Table.Cell> {res.score} </Table.Cell>
                  <Table.Cell> {res.course}</Table.Cell>
                  <Table.Cell> {handleIndexScore(res.score)}</Table.Cell>
                  <Table.Cell><button
                href="/tables"
                className="text-white 
                        bg-blue-700 
                        hover:bg-blue-800 
                        focus:ring-4 
                        focus:ring-blue-300 
                        font-medium 
                        rounded-md 
                        text-sm 
                        px-2.5 
                        py-2 
                        mr-4 
                        dark:bg-blue-600 
                        dark:hover:bg-blue-700 
                        focus:outline-none 
                        dark:focus:ring-blue-800"
                >
                Edit
                </button>
                <button
                value={res.id}
                onClick={handleDelete}
                className="focus:outline-none 
                        text-white 
                        bg-red-700 
                        hover:bg-red-800 
                        focus:ring-4 
                        focus:ring-red-300 
                        font-medium 
                        rounded-lg 
                        text-sm 
                        px-2.5 
                        py-2 
                        mr-4 
                        dark:bg-red-600
                        dark:hover:bg-red-700 
                        dark:focus:ring-red-900"
                >
                Delete
                </button></Table.Cell>
                </Table.Row>
              </Table.Body>
            )
          })}
        </Table>

        <p>Form Data</p>

        <form onSubmit={handleSubmit}>
          <span>Nama: </span>
          <input onChange={handleInput} value={input.name} name = 'name' type='text' />
          <span>Mata Kuliah: </span>
          <input onChange={handleInput} value={input.course} name = "course" type='text'/>
          <span>Nilai: </span>
          <input onChange={handleInput} value={input.score} name = "score" type='text' />
          <button type={'submit'}>Kirim</button>
        </form>


      </div>
    </>
  )
}

export default Tugas12