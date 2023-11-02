import React, { useEffect, useState } from "react";
import className from "./modal.module.scss";
import API from "@/utils/apiConfig";


function Itemcompononet({selectedUser,data,onPress}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: 4,
        border: "2px solid black",
        padding: "4px",
        background:selectedUser==data._id &&  "black",
        borderRadius:"10px",
        margin:"5px",
        justifyContent:'space-around'
      }}
      onClick={onPress}
    >
      <div
        
      >
        <img style={{
          flex: 0.2,
          height: "40px",
          width: "40px",
          justifyContent: "center",
          borderRadius: "100%",
          border: `1px solid black `,
          background: "#FFFF",
        }} src= {"https://thumbs.dreamstime.com/b/flat-male-avatar-image-beard-hairstyle-businessman-profile-icon-vector-179285629.jpg"} />
      </div>
      <div
        style={{
          flex: 0.8,
          display: "flex",
          flexDirection: "column",
          cursor:'pointer',
          justifyContent:"center"
        }}
      >
        <p className="headertitle" style={{color:selectedUser==data._id && "white"}}>{data.name}</p>

        
      </div>
    </div>
  );
}

export default function List({isOpen,setIsOpen,onPress}) {
    const [data, setdata] = useState([])
    const [selectedUser, setselectedUser] = useState(null)
    
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
          <div style={{height:"30px",padding:"10px"}}>
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
            data.map((item,index)=><Itemcompononet key={item._id} data={item} selectedUser={selectedUser} onPress={()=>{
              setselectedUser(item._id)
              setIsOpen(false)
              onPress(item._id)
            }} />)}
         
        </div>
      
      </div>
    </div>)}</>
  );
}
