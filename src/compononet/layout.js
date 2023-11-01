import React from 'react'

export default function Layout({title,children }) {
  return (
    <div
      style={{
        boxShadow: "0px 0px 10px 0px #E2E6FF",
        display: "flex",
        flexDirection:'column',
        width: "98%",
        margin: "10px",
        marginRight: "15px",
        borderRadius: "5px",
        minHeight: "90vh",
        overflowy: "auto",
        overflowX: "hidden",
        padding: "5px",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          cursor: "pointer",
          flexDirection: "row",
          alignItems: "center",
          height: "50px",
          gap: "10px",
          justifyContent: "space-between",
          borderBottom:"2px solid rgba(103, 110, 131, 0.25) "
        }}
      >
        <div>
          <p
            style={{
              fontWeight: "700",
              color: "#001044",
              paddingLeft: "4px",
            }}
          >
            {title}
          </p>
        </div>
        
      </div>
      { children }
      
     
    </div>
  )
}
