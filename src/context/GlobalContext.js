import React, { createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext()

export const GlobalProvider = (props) => {

    let navigate = useNavigate()

    const [data, setData] = useState([])

    const [input, setInput] = useState({
      name: "",
      course: "",
      score: ""
    })

    const [currentId, setCurrentId] = useState(-1)

    const [fetchStatus, setFetchStatus] = useState(true)


    const handleIndexScore = (score) => {
        if(score >= 80) {
          return("A")
        }
        if(score >= 70){
          return("B")
        }
        if(score >= 60){
          return("C")
        }
        if(score >= 50){
          return("D")
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
        
        if (currentId === -1){
        axios.post('https://backendexample.sanbercloud.com/api/student-scores', {name, course, score})
            .then((res) => {
              console.log(res)
              setFetchStatus(true)
              navigate('/tugas-12')
            })
          }else {
            axios.put(`https://backendexample.sanbercloud.com/api/student-scores/${currentId}`, {name, course, score})
            .then((res) => {
              console.log(res)
              setFetchStatus(true)
              navigate('/tugas-12')
            })
          }
  
        setCurrentId(-1)
  
        setInput({
          name: "",
          course: "",
          score: ""
        })
      }
  
      const handleDelete = (event) => {
        let idData = parseInt(event.target.value)
        console.log(idData)
  
        axios.delete(`https://backendexample.sanbercloud.com/api/student-scores/${idData}`)
        .then((res) => {
          let newData = data.filter((res) => {return res.id !== idData})
          setData(newData)
          console.log(res)
          setFetchStatus(true)
        })
      }
  
      const handleEdit = (event) => {
        let idData = parseInt(event.target.value)
  
        setCurrentId(idData)
        navigate(`/edit/${idData}`)
  
        
      }

      let fetchData = () => {
        axios.get("https://backendexample.sanbercloud.com/api/student-scores")
        .then( (res) => {
            console.log(res)
            setData([...res.data])
        })
        .catch((error) => {
    
        })
        setFetchStatus(false)
      }
      
    let state = {
        data, setData, 
        input, setInput, 
        currentId, setCurrentId, 
        fetchStatus, setFetchStatus}
    let handlingFunction = {handleIndexScore, handleInput, handleSubmit, handleDelete, handleEdit, fetchData}

    return (
        <GlobalContext.Provider value={
            {
                state,
                handlingFunction
            }
        }>
            {props.children}
        </GlobalContext.Provider>
    )
}