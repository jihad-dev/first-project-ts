import { TStudent, StudentModel } from "./student.interface";
import { Schema, model } from "mongoose";

const guardianSchema = new Schema({
    fatherName: { type: String, required: true },
    fatherOccupation: { type: String, required: true },
    fatherContactNumber: { type: String, required: true },
    motherName: { type: String, required: true },
    motherOccupation: { type: String, required: true },
    motherContactNumber: { type: String, required: true },
});

const localGuardianSchema = new Schema({
    name: { type: String, required: true },
    occupation: { type: String, required: true },
    contactNo: { type: String, required: true },
    address: { type: String, required: true },
});

const userNameSchema = new Schema({
    firstName: { type: String, required: true },
    middleName: { type: String },
    lastName: { type: String, required: true },
});

const studentSchema = new Schema<TStudent, StudentModel>({
    id: { type: String, required: true },
    name: { type: userNameSchema, required: true },
    gender: { type: String, enum: ['male', 'female'], required: true },
    dateOfBirth: { type: String },
    email: { type: String, required: true },
    contactNo: { type: String, required: true },
    localGuardian: { type: localGuardianSchema, required: true },
    emergencyContactNumber: { type: String, required: true },
    bloodGroup: { type: String, enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'] },
    presentAddress: { type: String, required: true },
    permanentAddress: { type: String, required: true },
    guardian: { type: guardianSchema, required: true },
    profileImg: { type: String },
    isActive: { type: String, enum: ['active', 'disabled'], required: true },
});


// creating a custom instance 


studentSchema.statics.isUserExists = async function (id: string) {
    const existingUser = await Student.findOne({ id });
    return existingUser;

}



// studentSchema.methods.isUserExits = async function (id: string) {
//     const existingUser = await Student.findOne({ id });
//     return existingUser;
// }





export const Student = model<TStudent, StudentModel>('Student', studentSchema);


