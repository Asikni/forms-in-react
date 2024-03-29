import { useState } from "react";


function TagSelector2(){
    const[fillList, setFillList] = useState([])
    const[value, setValue] = useState("")
    
    const handleChange = (e) =>{
        setValue(e.target.value)
    }

    const handleEnterKey = (e) => {
        if (e.key === "Enter" && value.trim() !== ""){
        setFillList([...fillList, value.trim()] )
        setValue("")
    }
    }

    const handleCross = (tagToRemove) => {
        setFillList(fillList.filter((tag) => tag !== tagToRemove))
    }
    return(
        <div>
            <div className="">
                {fillList.map((tag) =>(
                    <div>
                    <span>{tag}</span>
                    <button onClick={() => handleCross(tag)}>&times;</button>
                    </div>
                ))}
            </div>
            <input type="text" placeholder="Enter your text" onChange={handleChange} onKeyDown={handleEnterKey} value={value}/>
        </div>
    )
}

export default TagSelector2;