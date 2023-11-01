import React, { useEffect, useState } from "react";
import className from "./modal.module.scss";
import API from "@/utils/apiConfig";

export default function List({isOpen,setIsOpen,onPress}) {
    const [data, setdata] = useState([])
    
    const fecthAllUser=async()=>{
        const token=await localStorage.getItem("Token")
        const config = {
            headers: {
            Authorization: `Bearer ${token}`,
            },
        };
        await API.get("/user",config).then((res)=>setdata([...res.data])).catch((err)=>console.log(err))
    }

    useEffect(() => {
      fecthAllUser()
    }, [])
    
  

  return (
    <>
     {isOpen && (
    <div className={className.modal}>
      <div className={`${className.modal_content}`}>
        <div
          style={{
            position: "relative",
          }}
        >
          <div style={{}}>
            <p className="titleheader" style={{color:"#001044",fontWeight:600}}>User List</p>
          </div>
          <div
            style={{
              width: "100%",
              height: "0.1px",
              background: "#676E83",
              opacity: "0.75",
              marginBottom: "2px",
            }}
          ></div>
          {
            data.map((item,index)=>{
                return (
                    <div key={item._id} style={{cursor:'pointer',marginLeft:"5px"}} onClick={()=>{
                      setIsOpen(false)
                      onPress(item._id)

                    }}  >
                    <p key={item.id}>{item.name}</p>
                    <div
            style={{
              width: "100%",
              height: "0.1px",
              background: "#676E83",
              opacity: "0.5",
              marginBottom: "2px",
            }} />
          </div>
                )
            })
          }
         
        </div>
      
      </div>
    </div>)}</>
  );
}
