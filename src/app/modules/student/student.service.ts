import { Student } from "./student.model";
import { TStudent } from "./student.interface";

const createStudentToDB = async (studentData: TStudent) => {

    // static method

    if (await Student.isUserExists(studentData.id)) {
        throw new Error('User already exists!');
    }
    const result = await Student.create(studentData);

    // const student = new Student(studentData);
    // if (await student.isUserExits(studentData.id))
    //     throw new Error('User already exists!');

    // const result = await student.save();
    return result;
}
const getAllStudentsToDB = async () => {
    const result = await Student.find();
    return result;
}
const getSingleStudentToDB = async (id: string) => {
    const result = await Student.findOne({ id });
    return result;
}

export const StudentServices = {
    createStudentToDB,
    getAllStudentsToDB,
    getSingleStudentToDB,
}