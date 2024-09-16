/**
 * Define Student Interface
 */
interface Student{
  firstName: string,
  lastName: string,
  age: number,
  location: string,
}

/**
 * Create two sudents that adhere to interface
 */

const student1: Student = {
  firstName: "Kev",
  lastName: 'In',
  age: 20,
  location: "string",
}

const student2: Student = {
  firstName: "Kev",
  lastName: 'In',
  age: 20,
  location: "string",
}

/**
 * Array of Students, also follows interface
 */
const studentList: Student[] = [student1, student2]

const table = document.createElement("table")

studentList.forEach((student) => {
  const row = table.insertRow()
  const firstNameCell = row.insertCell()
  const locationCell = row.insertCell()

  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;
})

document.body.appendChild(table)