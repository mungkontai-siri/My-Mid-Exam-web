// พนักงานตัวอย่าง
const employees = [
    { emp_id: "001", name: "นพดล", position: "HR", salary: 30000, working_hours: 40 },
    { emp_id: "002", name: "จิราภา", position: "IT", salary: 50000, working_hours: 45 },
    { emp_id: "003", name: "สุนิษา", position: "Accounting", salary: 25000, working_hours: 35 }
];

// ฟังก์ชันเพื่อค้นหาพนักงานจากรหัส
function find_employee_by_id(emp_id) {
    return employees.find(employee => employee.emp_id === emp_id);
}

// ฟังก์ชันเพื่อคำนวณโอทีและแสดงผลลัพธ์
function ask_and_calculate_overtime() {
    let emp_id = prompt("กรุณากรอกรหัสพนักงาน (เช่น 001, 002, 003): ");
    let employee = find_employee_by_id(emp_id);
    
    if (employee) {
        let worked_hours = parseFloat(prompt(`กรุณากรอกจำนวนชั่วโมงทำงานของ ${employee.name} ในสัปดาห์นี้:`));

        let overtime_hours = worked_hours - employee.working_hours;
        let overtime_pay = 0;

        if (overtime_hours > 0) {
            let hourly_rate = employee.salary / (employee.working_hours * 4); // คำนวณเงินเดือนต่อชั่วโมง
            overtime_pay = overtime_hours * hourly_rate * 1.5; // คำนวณค่าโอที
        }
        
        let result = `
            <h3>
                กรุณากรอกรหัสพนักงาน (เช่น 001, 002, 003): ${emp_id}<br><br>
                รหัสพนักงาน: ${employee.emp_id}<br>
                ชื่อ: ${employee.name}<br>
                ตำแหน่ง: ${employee.position}<br>
                เงินเดือน: ${employee.salary} บาท<br>
                เวลาทำงานปกติ: ${employee.working_hours} ชั่วโมง/สัปดาห์<br><br>

                กรุณากรอกจำนวนชั่วโมงทำงานของ ${employee.name} ในสัปดาห์นี้: ${worked_hours}<br>
                ${employee.name} ทำโอที ${overtime_hours} ชั่วโมง และได้รับค่าโอที ${overtime_pay.toFixed(2)} บาท<br>
                เงินเดือนรวมโอที: ${(employee.salary + overtime_pay).toFixed(2)} บาท
            </h3>
        `;
        document.getElementById("result").innerHTML = result;
    } else {
        alert("รหัสพนักงานไม่ถูกต้อง หรือไม่มีข้อมูลในระบบ");
    }
}

