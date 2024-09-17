// const mongoose = require('mongoose')
const Student = require('../models/student')
async function addStudent(req,res){
    try{
        console.log(req.body,'req.body')
        let student = new Student(req.body);
        await student.save();
        console.log("data saved successfully")
        res.end("Added")
    }
    catch(err){
        console.log(err)
    }
}
async function getStudents(req,res){
    try{
        let students = await Student.find({});
            console.log(students,'student');
            res.send(students)

        }
    catch(err){

    }
}
async function getStudentByRollNo(req,res){
    try{
        let rollNo = parseInt(req.params.rollNo);
        console.log(rollNo,'rollNo')
        let student = await Student.findone({rollNo:r});
            console.log(student,'student');
            res.send(student)

        }
    catch(err){
        console.log(err,'err')
    }
}
module.exports = {
    addStudent,
    getStudents,
    getStudentByRollNo
}