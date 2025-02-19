import React from "react";
import { useState } from "react";
function MyButton() {
  const [count, setCount] = useState(0);
  const [logo, showLogo] = useState();
  const logoPic = {
    Url: "https://lh3.googleusercontent.com/d/1vTQgNCxzhee-bzsbZ5QQd5s9bHq0k5lO" ,
  };
  function showPic() {
    alert("สวัสดี Hello");
  }
  return (
  <div className="card">
    <button onClick={() => setCount((count) => count + 1)}>
      ปุ่มบวก {count}
    </button>
    <button
      onClick={() => {
        alert("เข้าชมรูป")
        showLogo(
          <div id="logo1">
            <img src={logoPic.Url}></img>
          </div>
        )
      }}
    >
      เข้าชมรูป
    </button>
    <button onClick={showPic}>ทักทาย</button>
    {logo}
  </div>
    )
}


export default MyButton;
