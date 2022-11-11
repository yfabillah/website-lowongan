import React, { useState } from 'react';
import { Card } from 'flowbite-react'

function Tugas9() {
    const [count, setCount] = useState(0);

    return (
        <div className='card ml-72 mt-14'>
            <Card className='w-3/4'>
                <p className='count text-center'>{count}</p>
                <div className='tambah text-center'>
                    <button 
                    type="button" 
                    class="text-blue-700 
                        hover:text-white 
                        border 
                        border-blue-700 
                        hover:bg-blue-800 
                        focus:ring-4 
                        focus:outline-none 
                        focus:ring-blue-300 
                        font-medium rounded-lg 
                        text-sm 
                        px-5 
                        py-2.5 
                        text-center 
                        mr-2 
                        mb-2 
                        dark:border-blue-500 
                        dark:text-blue-500
                        dark:hover:text-white 
                        dark:hover:bg-blue-600 
                        dark:focus:ring-blue-800
                        w-3/4" 
                        onClick={() => setCount(count + 1)}>
                        Tambah
                    </button>
                </div>
            </Card>
        </div>
    );
}

export default Tugas9