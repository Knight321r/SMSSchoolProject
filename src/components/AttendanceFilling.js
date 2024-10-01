import React, { useState, forwardRef } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaCalendarAlt } from 'react-icons/fa';
import './AttendanceFilling.css'
const CustomInput = forwardRef(({ value, onClick }, ref) => {
    return (
        <div className='input-group'>
            <input
                type='text'
                className='form-control'
                value={value}
                onClick={onClick}
                readOnly
                ref={ref} // Forward the ref here
            />
            <div className='input-group-append'>
                <span className='input-group-text'>
                    <FaCalendarAlt />
                </span>
            </div>
        </div>
    );
});

function AttendanceFilling() {
    const classdata = [
        { class: "Class 1", sections: ["A", "B", "C"] },
        { class: "Class 2", sections: ["A", "B"] },
        { class: "Class 3", sections: ["A", "B", "C", "D"] }
    ];

    const initialstudentdata = [
        { 'sid': 8390, 'rollno': 15, 'name': 'EshJre', 'present': true },
        { 'sid': 5696, 'rollno': 24, 'name': 'FVGGwn', 'present': false },
        { 'sid': 9508, 'rollno': 77, 'name': 'FFMLSt', 'present': true },
        { 'sid': 1997, 'rollno': 41, 'name': 'BDnIek', 'present': false },
        { 'sid': 5954, 'rollno': 55, 'name': 'sjTXRY', 'present': true },
        { 'sid': 6438, 'rollno': 50, 'name': 'PUAHBn', 'present': false },
        { 'sid': 1149, 'rollno': 60, 'name': 'xyLOIw', 'present': true },
        { 'sid': 9486, 'rollno': 14, 'name': 'FdNIIv', 'present': false },
        { 'sid': 3999, 'rollno': 26, 'name': 'jCzKFk', 'present': true },
        { 'sid': 6078, 'rollno': 97, 'name': 'yfATkX', 'present': false }
    ];

    const [classofstudent, setclassofstudent] = useState("");
    const [sectionofstudent, setsectionofstudent] = useState("");
    const [sectionlist, setsectionlist] = useState([]);
    const [selecteddate, setselecteddate] = useState(null);
    const [studentdata, setstudentdata] = useState(initialstudentdata)
    const handleclassofstudent = (e) => {
        const selectedclass = e.target.value;
        setclassofstudent(selectedclass);
        const reqitem = classdata.find((item) => item.class === selectedclass);
        setsectionlist(reqitem ? reqitem.sections : []);
    };

    const handlesectionofstudent = (e) => {
        setsectionofstudent(e.target.value);
    };

    const handlecheckboxchange = (e) => {
        const id = Number(e.target.value)
        setstudentdata((data) => data.map((student) => student.sid === id ? {...student, present : !student.present} : student))
    };

    const handleupdate = (e) => {
        if (!selecteddate) {
            console.error("Date is not selected");
            alert("please select Date")
            return;
        }
        const formatteddate = formatDateForMySQL(selecteddate);
        const finalattendancelist = studentdata.map((student) => ({ids : student.sid, date : formatteddate, status : student.present ? 'present' : 'absent'}))
    };   
   const formatDateForMySQL = (date) => {
    return date.getFullYear() + '-' + 
            String(date.getMonth() + 1).padStart(2, '0') + '-' +
            String(date.getDate()).padStart(2, '0');
    };
    return (
        <div className="attendancefilling">
            <h1 className='center'>Attendance Fillup</h1>
            <div className='attendancefilling-header'>
                <label htmlFor="classofstudent">Class: </label>
                <select id="classofstudent" value={classofstudent} onChange={handleclassofstudent}>
                    <option value="">Select</option>
                    {classdata.map((item, ind) => (
                        <option key={ind} value={item.class}>{item.class}</option>
                    ))}
                </select>
                <label htmlFor="sectionofstudent">Section: </label>
                <select id="sectionofstudent" value={sectionofstudent} disabled={!classofstudent} onChange={handlesectionofstudent}>
                    <option value="">Select</option>
                    {sectionlist.map((item, ind) => (
                        <option key={ind} value={item}>{item}</option>
                    ))}
                </select>
                <label>    
                    <DatePicker 
                        selected={selecteddate} 
                        onChange={(date) => setselecteddate(date)} 
                        customInput={<CustomInput />} />
                </label>
            </div>
            <div className='attendancefilling-bottom'>
    {(classofstudent && sectionofstudent && selecteddate) && 
        <div>
            <h2>Attendance List for {classofstudent} and section {sectionofstudent}</h2>
            <table className='attendancefilling-table'>
                <thead>
                    <tr>
                        <th>Student ID</th>
                        <th>Name</th>
                        <th>Roll No</th>
                        <th>Attendance</th>
                    </tr>
                </thead>
                <tbody>
                    {studentdata.map((item, ind) => (
                        <tr key={ind} className={item.present ? 'present' : 'absent'}>
                            <td>{item.sid}</td>
                            <td>{item.name}</td>
                            <td>{item.rollno}</td>
                            <td>
                                <input 
                                    type="checkbox" 
                                    checked={item.present} 
                                    value={item.sid} 
                                    onChange={handlecheckboxchange}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className='attendancefilling-bottom-bottom-button'>
                <button onClick={handleupdate}>Update</button>
            </div>
        </div>
    }
</div>
        </div>
    );
}

export default AttendanceFilling;
