import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MyButton from "./components/myButton";
import Namelist from "./components/namelist";
import Home from "./pages/Home";
import PhoneSearchForm from "./components/PhoneSearchForm";
import DataFetcher from "./api/DataFetcher";
import StudentList from "./api/StudentList";
import axios from "axios";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://script.googleusercontent.com/macros/echo?user_content_key=FDi-sOm3jh7KLIuR3PxtY6M0WhhR5rpaSUrpjHItmrKY9_DL4V7-n2ZsDAW-gP1lC-cz24n52FgWF8EO4rh9enCnPJu9D_uIOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHa_76b23jpu0ahNHo0jgaqRE4JYtzJ1gbE2Jsj9cpjeH3KV_vOB35nNFnak5WctrhA0nubVdLWIfnetyfbSL4vR3oUIQ1A-uk6QtBHn44AOQP9fnK6RNm5-Q&lib=M60ApdNspk6JD12xgoudt7ZgYYRqhh78z"
      )
      .then((response) => setData(response.data))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <div>
        <Home />
      </div>

      <div className="container mt-4">
      <h1 className="text-center">ค้นหาข้อมูลผู้ใช้</h1>

      {loading && <p>กำลังโหลดข้อมูล...</p>}
      {error && <p style={{ color: "red" }}>เกิดข้อผิดพลาด: {error}</p>}

      {!loading && !error && <PhoneSearchForm users={data} />}
    </div>
    </>
  );
}

export default App;
