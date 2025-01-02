import { useState } from "react";
import { Bounce, toast } from "react-toastify";

const LineComponent=({name , array, setArray})=>{
    const removeList =()=>{
        const modifyArray = array.filter((ele)=> ele !== name);
        setArray(modifyArray);
        toast.success('Saman Hata Liya Gaya hai', {
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
    const [val,setVal] = useState(false);
    const btnCheak =()=>{
        setVal(!val);
    }
    
    
    return(
        <div className="flex justify-between w-[100%] px-12 items-center">
            <div className="flex  gap-4">
                <input onClick={btnCheak} type="checkbox" className="w-[15px] " />
                <p className={`text-lg ${val? "line-through" : "no-underline"}`}>{name}</p>
            </div>
            <button onClick={removeList} className="bg-red-600 outline-none  px-3 rounded-lg cursor-pointer text-white font-bold">Delete</button>
        </div>
    )
}
export default LineComponent;