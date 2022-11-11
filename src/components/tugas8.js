import React from "react"
import { Card } from "flowbite-react"

const Tugas8 = (props) => {
  return (
    <div className='card ml-72 mt-14'>
      <Card className="w-3/4">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Data diri peserta kelas ReactJS</h1>
        <hr/>
        <ul>
          <li>Nama Lengkap: {props.name}</li>
          <li>Email: {props.email}</li>
          <li>Batch Pelatihan: {props.batch}</li>
        </ul>
      </Card>
    </div>
  )
}

export default Tugas8