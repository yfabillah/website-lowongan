import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Table } from 'flowbite-react'

const Tugas11 = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get("https://backendexample.sanbercloud.com/api/student-scores")
        .then( (res) => {
            setData([...res.data])
        })
        .catch((error) => {
    
        })
    }, [])

    function handleIndexScore (score) {
      if (score > 80) {
        return("A")
      }
      if(score > 70){
        return("B")
      }
      return("E")

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
                </Table.Row>
              </Table.Body>
            )
          })}
        </Table>
      </div>
    </>
  )
}

export default Tugas11