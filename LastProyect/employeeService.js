angular
.module("employeeApp")
.factory("EmployeeService", EmployeeService)
function EmployeeService(){
var oEmployee = {};
oEmployee.getEmployees = getEmployees;
oEmployee.addEmployee = addEmployee;
oEmployee.editEmployee = editEmployee;
oEmployee.deleteEmployee = deleteEmployee;
oEmployee.maxId = maxId;
var employees = [{
    id: 1,
    name: 'Daniel Smith',
    address: 'Franklin ',
    designation: "Software Developer",
    mobile: '252-458-7899'
    },
    {
    id: 2,
    name: 'Edward Davies',
    address: 'Greenville',
    designation: "Operations Executive",
    mobile: '212-456-7890'
    },
    {
    id: 3,
    name: 'Laura Johnson',
    address: 'zurich',
    designation: "Frontend Developer",
    mobile: '202-456-7640'
    },
    {
    id: 4,
    name: 'Jennifer Roy',
    address: 'Chicago',
    designation: "Backend Developer",
    mobile: '200-456-9111'
    },
    {
    id: 5,
    name: 'Stephen Hardy',
    address: 'Seattle',
    designation: "Full stack Developer",
    mobile: '252-466-7880'
    },
    {
    id: 6,
    name: 'Michelle Williams',
    address: 'Lexington',
    designation: "HR Recruiter",
    mobile: '265-405-7600'
    },
    {
        id: 7,
        name: 'Sarah Wilson',
        address: 'Bern',
        designation: "HR Executive",
        mobile: '212-346-7790'
        }];
        function getEmployees(){
        return employees;
        }
        function addEmployee(employee){
        employees.push(employee);
        }
        function editEmployee(employee){
        debugger;
        for(var i = 0; i< employees.length; i++){
        if(employees[i].id == employee.id){
        employees[i].name = employee.name;
        employees[i].address = employee.address;
        employees[i].designation = employee.designation;
        employees[i].mobile = employee.mobile;
        break;
        }
        }
        }
        function deleteEmployee(eid){
        for(var i = 0; i< employees.length; i++){
        if(employees[i].id == eid){
        var deleteUser = employees[i].name;
        var isconfirm = confirm("Are you sure to delete " +
        deleteUser);
        if(isconfirm){
        employees.splice(i, 1);
        alert(deleteUser +" has been deleted successfully");
        }
        break;
        }
        }
        }
        function maxId(){
            // var max = Math.max(...employees.id);
            var max = 0;
            for(var i = 0; i< employees.length; i++){
            if(employees[i].id > max){
            max = employees[i].id;
            }
            }
            return max;
            }
            return oEmployee;
            }