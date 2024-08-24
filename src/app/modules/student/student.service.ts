import { StudentModel } from "../student.model";
import { Student } from "./student.interface";

const createStudentToDB = async (student: Student) => {

    const result = await StudentModel.create(student);
    return result;
}
const getAllStudentsToDB = async () => {
    const result = await StudentModel.find();
    return result;
}
const getSingleStudentToDB = async (id: string) => {
    const result = await StudentModel.findOne({ id });
    return result;
}

export const StudentServices = {
    createStudentToDB,
    getAllStudentsToDB,
    getSingleStudentToDB,
}