const fs = require('fs');

function countStudents(fileName) {
  try {
    const contents = fs.readFileSync(fileName, 'utf-8');
    const lines = contents.trim().split('\n');
    const students = {};
    const fields = {};

    for (const line of lines) {
      if (line) {
        const row = line.split(',');

        if (row[3] in students) {
          students[row[3]].push(row[0]);
        } else {
          students[row[3]] = [row[0]];
        }

        fields[row[3]] = (fields[row[3]] || 0) + 1;
      }
    }

    const totalStudents = lines.length - 1;
    console.log(`Number of students: ${totalStudents}`);

    for (const [key, value] of Object.entries(fields)) {
      if (key !== 'field') {
        console.log(`Number of students in ${key}: ${value}. List: ${students[key].join(', ')}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
