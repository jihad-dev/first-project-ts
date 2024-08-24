

// 1. Create an interface representing a document in MongoDB.

export type Guardian = {
    fatherName: string;
    fatherOccupation: string;
    fatherContactNumber: string;
    motherName: string;
    motherOccupation: string;
    motherContactNumber: string;
}

export type UserName = {
    firstName: string;
    middleName: string;
    lastName: string;
}



export type Student = {
    id: string,
    name: UserName;
    gender: 'male' | 'female';
    dateOfBirth?: string;
    email: string;
    contactNo: string;
    emergencyContactNumber: string;
    bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
    presentAddress: string;
    permanentAddress: string;
    guardian: Guardian;
    profileImg: string;
    isActive: ['active', 'disabled'];

}