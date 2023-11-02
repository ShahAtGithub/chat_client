// components/UserList.js
import Image from "next/image";
import React from "react";

function Itemcompononet(props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: 4,
        border: "2px solid black",
        padding: "4px",
        background:props.selectedUser?.id==props.user.id &&  "black",
        borderRadius:"10px",
        margin:"5px"
      }}
      onClick={() => props.onUserSelect(props.user)}
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
        }} src= {props.user?.isGroupChat ?"https://img.freepik.com/premium-vector/people-group-avatar-character-vector-illustration-design_24877-19936.jpg" :"https://thumbs.dreamstime.com/b/flat-male-avatar-image-beard-hairstyle-businessman-profile-icon-vector-179285629.jpg"} />
      </div>
      <div
        style={{
          flex: 0.8,
          display: "flex",
          flexDirection: "column",
          cursor:'pointer'
        }}
      >
        <p className="headertitle" style={{color:props.selectedUser?.id==props.user.id && "white"}}>{props.user.senderName}</p>

        <p className="headertitletag" style={{color: props.selectedUser?.id==props.user.id && "white"}}>
          {props.user.isNewMessage ? "" : "You:"} {props.user.latestmessages}{" "}
        </p>
      </div>
    </div>
  );
}

const UserList = ({ users, onUserSelect,selectedUser,setisgroupListClick }) => {
  console.log("selectedUser",selectedUser) 
   return (
    <div className="user-list">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2>User List</h2>
        <button onClick={()=>setisgroupListClick(true)} style={{ cursor: "pointer", height: "25px" }}>
          Create a group
        </button>
      </div>
      <div>
        {users.map((user) =>
            <Itemcompononet
              key={user.id}
              user={user}
              onUserSelect={onUserSelect}
              selectedUser={selectedUser}
            />
        )}
      </div>
    </div>
  );
};

export default UserList;
