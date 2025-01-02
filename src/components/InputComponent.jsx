import { useEffect, useRef } from "react";
import LineComponent from "./LineComponent";
import { useState } from "react";
import { Bounce, toast } from "react-toastify";

const InputComponent = ()=>{
    
    const inputVal = useRef();
    const [list , setList] = useState([]);


    useEffect(()=>{
        const abcd = JSON.parse(localStorage.getItem("ram"))
        if(abcd)setList(abcd)
          
      },[])
    
      useEffect(()=>{
        localStorage.setItem("ram",JSON.stringify(list))
      },[list])
    



    const addList =()=>{
        if(inputVal.current.value === "") {
            toast.error('Kuch Likho To Pahile', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
                });
                return;
        }
        const oldArray = [...list];
        oldArray.push(inputVal.current.value);
        setList(oldArray)
        inputVal.current.value="";

        toast.success('Saman Jor Liya Gayaa hai', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });
    }
    

    return(
        <div className="shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.8)] w-[500px]   flex flex-col py-2 gap-4 justify-center items-center">
            <h1 className="text-center text-3xl ">Grocery Bud</h1>
            <div className="flex gap-4">
                <input ref={inputVal} type="text" className="py-1 px-2 w-[300px] outline-none border-2 "/>
                <button onClick={addList} className="bg-blue-500 outline-none py-1 px-3 rounded-md cursor-pointer hover:bg-blue-400 text-white font-bold">Add Item</button>
            </div>
            <div className="w-[100%] flex flex-col gap-4">
                {list.map((ele , idx)=> <LineComponent key={idx} name={ele} array={list} setArray={setList}/>)}
                
            </div>
        </div>
    )
}
export default InputComponent;