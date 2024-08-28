

// 1. Create an interface representing a document in MongoDB.

import { Model } from "mongoose";

export type TGuardian = {
    fatherName: string;
    fatherOccupation: string;
    fatherContactNumber: string;
    motherName: string;
    motherOccupation: string;
    motherContactNumber: string;
}

export type TLocalGuardian = {
    name: string;
    occupation: string;
    contactNo: string;
    address: string;
};
export type TUserName = {
    firstName: string;
    middleName?: string;
    lastName: string;
}



export type TStudent = {
    id: string,
    password: string,
    name: TUserName;
    gender: 'male' | 'female';
    dateOfBirth?: string;
    email: string;
    contactNo: string;
    localGuardian: TLocalGuardian,
    emergencyContactNumber: string;
    bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
    presentAddress: string;
    permanentAddress: string;
    guardian: TGuardian;
    profileImg?: string;
    isActive: 'active' | 'disabled'

}

//for creating static
export interface StudentModel extends Model<TStudent> {

    isUserExists(id: string): Promise<TStudent | null>;
}





// for creating instance


// export type StudentMethods = {
//     isUserExits(id: string): Promise<TStudent | null>
// }



// export type StudentModel = Model<TStudent, Record<string, never>, StudentMethods>