const { resolve } = require("path");

setTimeout(()=>{
  console.log("Hello I am the first statement");
},5000);
console.log("Hello I am second statement");
console.log("Hello I am the last statement")


createDepartment(dept,(response)=>{
  createClassroom(response,()=>{
    createStudent(response,()=>{

    })
  })
})


createDepartment()
.then(res=>{
  createClassroom(res)
  .then(res =>{
      createStudent(res)
  })
  .catch()
})
.catch();

async createStuff(){
    const department = await createDepartment();
    const classroom = await createClassroom(department);
    const student = await createStudent(classroom);
}





student          classroom                  department

id:               id:                       id:
classroom_id:     department_id:
