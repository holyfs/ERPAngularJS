var app = angular.module("employeeApp");
app.directive("employeeSearch", employeeSearch);
app.directive("employeeDisplay", employeeDisplay);
app.directive("addEmployee", addEmployee);
function employeeSearch(){
return {
templateUrl: "employeesearch.htm"
};
}
function employeeDisplay(){
return {
templateUrl: "employeedisplay.htm"
};
}
function addEmployee(){
return {
templateUrl: "addEmployee.htm"
};
}