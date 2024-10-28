// db.js
let db;
const request = indexedDB.open("EmployeeDB", 1);

request.onupgradeneeded = (event) => {
  db = event.target.result;
  db.createObjectStore("employees", { keyPath: "id", autoIncrement: true });
};

request.onsuccess = (event) => {
  db = event.target.result;
};

request.onerror = (event) => {
  console.error("IndexedDB error:", event.target.errorCode);
};

// Function to add an employee
function addEmployee(employee) {
  const transaction = db.transaction("employees", "readwrite");
  const store = transaction.objectStore("employees");
  store.add(employee);
}

// Other functions for update and delete can be added similarly
