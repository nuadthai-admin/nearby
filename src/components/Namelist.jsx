import React from "react";

function Namelist() {
  const list = [
    { fname: "วินิจฉัย", lname: "เอี่ยมสุเมธ", id: 1 },
    { fname: "สุชิน", lname: "สุขสนอง", id: 2 },
  ];
  return (
    <div>
      {list.map((item) => (
        // <li key = {item.id}>
        //     ชื่อ :&nbsp;{item.fname}&nbsp;
        //     นามสกุล :&nbsp;{item.lname}
        //     </li>
        <p key={item.id}>
          {item.fname} {item.lname}
        </p>
      ))}
    </div>
  );
}

export default Namelist;
