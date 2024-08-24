import { Request, Response } from "express";
import { StudentServices } from "./student.service";

const createStudent = async (req: Request, res: Response) => {

    try {
        const { student: studentData } = req.body;

        // will cal service func to send this data
        const result = await StudentServices.createStudentToDB(studentData);
        // send response

        res.status(200).json({
            success: true,
            message: "Student created successfully",
            data: result
        })
    } catch (error) {
        console.log(error);

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

    } catch (error) {
        console.log(error);

    }
}

export const StudentControllers = {
    createStudent,
    getAllStudents,
    getSingleStudent,
}

