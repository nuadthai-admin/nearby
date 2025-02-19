import React, { useState, useEffect } from 'react';

const DataFetcher = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://script.googleusercontent.com/macros/echo?user_content_key=FDi-sOm3jh7KLIuR3PxtY6M0WhhR5rpaSUrpjHItmrKY9_DL4V7-n2ZsDAW-gP1lC-cz24n52FgWF8EO4rh9enCnPJu9D_uIOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHa_76b23jpu0ahNHo0jgaqRE4JYtzJ1gbE2Jsj9cpjeH3KV_vOB35nNFnak5WctrhA0nubVdLWIfnetyfbSL4vR3oUIQ1A-uk6QtBHn44AOQP9fnK6RNm5-Q&lib=M60ApdNspk6JD12xgoudt7ZgYYRqhh78z")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((result) => setData(result))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false)); // ตั้งค่า loading เป็น false เมื่อโหลดเสร็จ
  }, []);

  return (
    <div>
      <h1>ดึงข้อมูลจาก Google Apps Script API</h1>

      {loading && <p>กำลังโหลดข้อมูล...</p>}
      {error && <p style={{ color: "red" }}>เกิดข้อผิดพลาด: {error}</p>}

      <ul>
        {Array.isArray(data) ? (
          data.map((item) => <li key={item.Id}>{item.Name} : {item.Phone}</li>)
        ) : (
          <p>รอข้อมูล</p>
        )}
      </ul>
    </div> 
    );
      
    
 
}



export default DataFetcher;