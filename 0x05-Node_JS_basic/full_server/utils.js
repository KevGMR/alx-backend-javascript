const { readFile } = require('fs');

const readDatabase = (path) => new Promise((resolve, reject) => {
  readFile(path, 'utf8', (err, data) => {
    if (err) {
      reject(err);
    } else {
      const lines = data.trim().split('\n');
      const students = {};

      for (const line of lines) {
        if (line) {
          const row = line.split(',');
          if (!students[row[3]]) {
            students[row[3]] = [];
          }
          students[row[3]].push(row[0]);
        }
      }
      resolve(students);
    }
  });
});

module.exports = readDatabase;
