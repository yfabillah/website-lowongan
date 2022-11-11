import React from 'react'
import { Table } from 'flowbite-react'

const Tugas10 = () => {
  return (
    <div className='ml-72 mt-14 mr-96'>
    <Table className=''>
        <Table.Head className='bg-purple-700'>
            <Table.HeadCell>
            No
            </Table.HeadCell>
            <Table.HeadCell>
            Nama
            </Table.HeadCell>
            <Table.HeadCell>
            Mata Kuliah
            </Table.HeadCell>
            <Table.HeadCell>
            Nilai
            </Table.HeadCell>
            <Table.HeadCell>
            index Nilai
            </Table.HeadCell>
            <Table.HeadCell>
            Action
            </Table.HeadCell>
            <Table.HeadCell>
            <span className="sr-only">
                Edit
            </span>
            </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                1
            </Table.Cell>
            <Table.Cell>
                Yudith
            </Table.Cell>
            <Table.Cell>
                Algoritma
            </Table.Cell>
            <Table.Cell>
                90
            </Table.Cell>
            <Table.Cell>
                A
            </Table.Cell>
            <Table.Cell>
                <button
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
                href="/tables"
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
                </button>
            </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                2
            </Table.Cell>
            <Table.Cell>
                Fitria
            </Table.Cell>
            <Table.Cell>
                Matematika
            </Table.Cell>
            <Table.Cell>
                88
            </Table.Cell>
            <Table.Cell>
                A
            </Table.Cell>
            <Table.Cell>
                <button
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
                href="/tables"
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
                </button>
            </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                3
            </Table.Cell>
            <Table.Cell>
                Kayla
            </Table.Cell>
            <Table.Cell>
                Kalkulus
            </Table.Cell>
            <Table.Cell>
                85
            </Table.Cell>
            <Table.Cell>
                B
            </Table.Cell>
            <Table.Cell>
                <button
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
                href="/tables"
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
                </button>
                
            </Table.Cell>
            </Table.Row>
        </Table.Body>
    </Table>
    </div>
  )
}

export default Tugas10