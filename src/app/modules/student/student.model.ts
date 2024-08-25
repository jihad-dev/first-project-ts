import { Schema, model } from 'mongoose';
import { Guardian, Student, UserName } from './student.interface';
// import validator from 'validator';
const userNameSchema = new Schema<UserName>({
    firstName: {
        type: String,
        trim: true,
        required: [true, 'First name is required'],
        unique: true,
        // maxlength: [20, 'first name more then 20 '],
        // validate: {
        //     validator: function (value: string) {
        //         const FirstNameStr = value.charAt(0).toUpperCase() + value.slice(1);
        //         return FirstNameStr === value;
        //     },
        //     message: '{VALUE} is not capitalized format'
        // }

    },
    middleName: { type: String },
    lastName: {
        type: String, required: true,
        // validate: {
        //     validator: (value: string) => validator.isAlpha(value),
        //     message: '{VALUE} is not a valid'
        // },


    },
})

const guardianSchema = new Schema<Guardian>({
    fatherName: { type: String, required: true },
    fatherOccupation: { type: String, required: true },
    fatherContactNumber: { type: String, required: true },
    motherName: { type: String, required: true },
    motherOccupation: { type: String, required: true },
    motherContactNumber: { type: String, required: true },
})

const studentSchema = new Schema<Student>({
    id: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: userNameSchema,
        required: true,
    },
    gender: {
        type: String,
        enum: {
            values: ['male', 'female'],
            message: "the gender field can only be one following : 'male' ,'female'"
        },
        required: true
    },
    dateOfBirth: { type: String },
    email: {
         type: String,
          required: true, 
          unique: true ,
        //   validate:{
        //     validator: (value:string) =>validator.isEmail(value),
        //     message:'{VALUE} is not a valid email'
        //   }

    },
    contactNo: { type: String, required: true },
    emergencyContactNumber: { type: String, required: true },
    bloodGroup: {
        type: String,
        enum: ['A+', 'A-', 'AB+', 'B+', 'B-', 'O+', 'O-'],

    },
    presentAddress: { type: String, required: true },
    permanentAddress: { type: String, required: true },
    guardian: {
        type: guardianSchema,
        required: true,
    },
    profileImg: { type: String },
    isActive: {
        type: String,
        required: true,
        enum: ['active', 'disabled'],
        default: "active",
    }
})



// create a  model

export const StudentModel = model<Student>('Student', studentSchema)