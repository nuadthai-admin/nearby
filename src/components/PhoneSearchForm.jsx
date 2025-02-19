import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // นำเข้า Bootstrap 5

function PhoneSearchForm({ users }) {
  const [phone, setPhone] = useState(""); // เก็บค่าหมายเลขโทรศัพท์ที่ป้อน
  const [user, setUser] = useState(null); // เก็บข้อมูลของ user ที่ค้นหาเจอ
  const [error, setError] = useState(null); // เก็บ error หากไม่พบข้อมูล

  const handleSearch = () => {
    // ค้นหา user ที่มีหมายเลขโทรศัพท์ตรงกัน
    const foundUser = users.find((item) => item.Phone === phone);
    if (foundUser) {
      setUser(foundUser);
      setError(null); // ล้าง error
    } else {
      setUser(null);
      setError("ไม่พบข้อมูล");
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-3">ค้นหาข้อมูลผู้ใช้ตามเบอร์โทรศัพท์</h2>

      {/* ฟอร์มกรอกเบอร์โทรศัพท์ */}
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="กรอกหมายเลขโทรศัพท์"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleSearch}>
          ค้นหา
        </button>
      </div>

      {/* แสดง error ถ้าไม่พบข้อมูล */}
      {error && <div className="alert alert-danger">{error}</div>}

      {/* ถ้าพบข้อมูล user จะแสดง Card */}
      {user && (
        <div className="card text-bg-info mt-3">
          <div className="card-body">
            <h5 className="card-title">{user.Name} {user.Lname}</h5>
            <p className="card-text">
              <strong>เบอร์โทร:</strong> {user.Phone} <br />
              <strong>เลขประจำตัว:</strong> {user.Id}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default PhoneSearchForm;
