import React, {useState, useEffect} from 'react'

const SideEffect = () => {
    const [name, setName] = useState(window.localStorage.getItem('name') || '',)
    useEffect(() => {
        window.localStorage.setItem('name', name)
    })
    const handleChange = event => setName(event.target.value)
  return (
    <div>
        <form>
            <label htmlFor='name'>Name: </label>
            <input value={name} onChange={handleChange} id='name'/>
        </form>
        {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

export default SideEffect