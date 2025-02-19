import React from 'react'
import { useState } from 'react'
function StudentList() {
    const [list , setList] = useState([
      {
        "Name": "วินิจฉัย",
        "Lname": "เอี่ยมสุเมธ",
        "Id": "NT205",
        "Phone": "0894099968"
      },
      {
        "Name": "ฉวีวรรณ",
        "Lname": "แก้วจีน",
        "Id": "TAdmin1",
        "Phone": "0806601660"
      },
      {
        "Name": "ประพจน์",
        "Lname": "เภตรากาศ",
        "Id": "TAdmin3",
        "Phone": "0811744159"
      },
      {
        "Name": "กาญจนา",
        "Lname": "บัวดอก",
        "Id": "TAdmin2",
        "Phone": "0864144522"
      }
    ]
          
           
        )
          
    
  return (
       <>รายชื่อนักเรียน
       { list.map((item)=>
    <li key={item.Id}>{item.Name} : {item.Phone}</li>
    
    )}
       </>
  )
  
}

export default StudentList