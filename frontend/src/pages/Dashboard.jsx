import React, { useState } from "react";
import { FaCamera, FaHandHolding } from "react-icons/fa";

const Dashboard = () => {
  const [img, setimg] = useState(null);
  const handleImage = (file) => {
    setimg(URL.createObjectURL(file));
  };
  return (
    <div style={{ margin: 0, background: "#FEFBF6" }}>
      <div
        style={{
          height: "4rem",
          backgroundColor: "#9FC9F3",
          margin: 0,
          boxShadow:
            "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <h2 style={{ marginLeft: "15px" }}>Dashboard</h2>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <input
          id="camera"
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={(e) => {
            handleImage(e.target.files[0]);
          }}
        />

        <label htmlFor="camera" style={{ paddingTop: "5rem" }}>
          {" "}
          <FaCamera style={{ fontSize: "12rem",color:'#A5BECC' }} />
        </label>
      </div>
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {img && (
          <>
            <img
              style={{
                backgroundColor: "transparent",
                width: "12rem",
                height: "15rem",
                borderRadius: "8px",
              }}
              src={img}
              alt="xxx"
            />
            <div
              style={{
                margin: "10px 0 0 22px",
                background: "#808080",
                width: "6rem",
                height: "6rem",
                borderRadius: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "18px",
                color: "#fff",
                fontWeight: 600,
                boxShadow: 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px'
              }}
            >
              <span>
                <div  style={{
                    fontSize: "20px",
                    display: "flex",
                    justifyContent: "center",
                  }}>150</div>
                <div
                  style={{
                    fontSize: "12px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  calories
                </div>
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
