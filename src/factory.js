function Developer(name) {
    this.name = name;
    this.type = "developer";
}

function Tester(name) {
    this.name = name;
    this.type = "tester";
}

function EmployeeFactory() {
    this.create = (name,type) => {
        switch (type) {
            case 1:
                return new Developer(name, "Developer");
                break;
            case 2: 
                return new Tester(name, "Developer");
                break;
        }
    }
}

const employeeFactory = new EmployeeFactory();
const employees = [];
employees.push(employeeFactory.create("Emplyee1", 1));
employees.push(employeeFactory.create("Emplyee2", 2));
console.log(employees.length) // 2