let students = [
  { id: 1, name: "Anu", mark: 85 },
  { id: 2, name: "Rahul", mark: 90 },
  { id: 3, name: "Meera", mark: 88 }


];
console.log(students[0].name);   // Anu
console.log(students[2].mark);   // 88




for (let i = 0; i < students.length; i++) {
  console.log(students[i].name, students[i].mark);
}

students.push({ id: 4, name: "Arjun", mark: 95 });
console.log(students);

students.pop()
console.log(students);


//pop unshift shift
let highMarks = students.filter(student => student.mark > 85);
console.log(highMarks);

let mapstu=students.map(student=>student.mark)
console.log(mapstu);
