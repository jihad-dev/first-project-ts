import { Request, Response } from "express";
import { StudentServices } from "./student.service";
import studentValidationSchema from "./student.validation";





const createStudent = async (req: Request, res: Response) => {

    try {

        const { student: studentData } = req.body;
        // data validation with zod
        const zodParseData = studentValidationSchema.parse(studentData);
        // const { error } = studentValidationSchema.validate(studentData);
        const result = await StudentServices.createStudentToDB(zodParseData);
        // will cal service func to send this data
        // send response
        res.status(200).json({
            success: true,
            message: "Student created successfully",
            data: result
        })
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: err.message || "Something went wrong",
            err: err,
        })

    }
}

const getAllStudents = async (req: Request, res: Response) => {
    try {
        const result = await StudentServices.getAllStudentsToDB();
        // send response
        res.status(200).json({
            success: true,
            message: "Student data get successfully",
            data: result
        })
    } catch (error) {
        console.log(error);
    }
}
const getSingleStudent = async (req: Request, res: Response) => {
    try {
        const { studentId } = req.params;
        const result = await StudentServices.getSingleStudentToDB(studentId);
        // send response

        res.status(200).json({
            success: true,
            message: "Student single data get successfully",
            data: result
        })

    } catch (err) {
        console.log(err);


    }
}

export const StudentControllers = {
    createStudent,
    getAllStudents,
    getSingleStudent,
}

