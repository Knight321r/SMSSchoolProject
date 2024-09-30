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

    const studentdata = [
        { 'sid': 8390, 'rollno': 15, 'name': 'EshJre' },
        { 'sid': 5696, 'rollno': 24, 'name': 'FVGGwn' },
        { 'sid': 9508, 'rollno': 77, 'name': 'FFMLSt' },
        { 'sid': 1997, 'rollno': 41, 'name': 'BDnIek' },
        { 'sid': 5954, 'rollno': 55, 'name': 'sjTXRY' },
        { 'sid': 6438, 'rollno': 50, 'name': 'PUAHBn' },
        { 'sid': 1149, 'rollno': 60, 'name': 'xyLOIw' },
        { 'sid': 9486, 'rollno': 14, 'name': 'FdNIIv' },
        { 'sid': 3999, 'rollno': 26, 'name': 'jCzKFk' },
        { 'sid': 6078, 'rollno': 97, 'name': 'yfATkX' }
    ];

    const [classofstudent, setclassofstudent] = useState("");
    const [sectionofstudent, setsectionofstudent] = useState("");
    const [sectionlist, setsectionlist] = useState([]);
    const [selecteddate, setselecteddate] = useState(null);

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
        // Logic for checkbox change
        console.log("target:", e.target);
        console.log("target checked:", e.target.checked);
    };

    const handleupdate = (e) => {
        // Update logic here
    };

    return (
        <div className="attendancefilling">
            <h1>Attendance Fillup</h1>
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
            </div>
            <div className='attendancefilling-bottom'>
                {(classofstudent && sectionofstudent) && 
                    <div>
                    <label>
                        <DatePicker 
                            selected={selecteddate} 
                            onChange={(date) => setselecteddate(date)} 
                            customInput={<CustomInput />} />
                    </label>
                        <h2>Attendance List for {classofstudent} and section {sectionofstudent}</h2>
                        <div className='attendancefilling-bottom-bottom'>
                            {studentdata.map((item, ind) => (
                                <div key={ind} className='attendancefilling-bottom-bottom-eachrow'>
                                    <span>{item.sid}</span>
                                    <span>{item.name}</span>
                                    <span>{item.rollno}</span>
                                    <span><input type="checkbox" value={item.name} onChange={handlecheckboxchange}></input></span>
                                </div>
                            ))}
                        </div>
                        <button onClick={handleupdate}>Update</button>
                    </div>
                }
            </div>
        </div>
    );
}

export default AttendanceFilling;
