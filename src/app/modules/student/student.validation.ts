import { z } from 'zod';

// Guardian Schema
const guardianValidationSchema = z.object({
    fatherName: z.string().nonempty("Father's name is required"),
    fatherOccupation: z.string().nonempty("Father's occupation is required"),
    fatherContactNumber: z.string().nonempty("Father's contact number is required"),
    motherName: z.string().nonempty("Mother's name is required"),
    motherOccupation: z.string().nonempty("Mother's occupation is required"),
    motherContactNumber: z.string().nonempty("Mother's contact number is required"),
});

// Local Guardian Schema
const localGuardianValidationSchema = z.object({
    name: z.string().nonempty("Local guardian's name is required"),
    occupation: z.string().nonempty("Local guardian's occupation is required"),
    contactNo: z.string().nonempty("Local guardian's contact number is required"),
    address: z.string().nonempty("Local guardian's address is required"),
});

// User Name Schema
const userNameValidationSchema = z.object({
    firstName: z.string().nonempty("First name is required"),
    middleName: z.string().optional(),
    lastName: z.string().nonempty("Last name is required"),
});

// Student Schema
const studentValidationSchema = z.object({
    id: z.string().nonempty("ID is required"),
    name: userNameValidationSchema,
    gender: z.enum(['male', 'female'], {
        required_error: "Gender is required",
        invalid_type_error: "Gender must be either 'male' or 'female'",
    }),
    dateOfBirth: z.string().optional(),
    email: z.string().email("Invalid email address").nonempty("Email is required"),
    contactNo: z.string().nonempty("Contact number is required"),
    localGuardian: localGuardianValidationSchema,
    emergencyContactNumber: z.string().nonempty("Emergency contact number is required"),
    bloodGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']).optional(),
    presentAddress: z.string().nonempty("Present address is required"),
    permanentAddress: z.string().nonempty("Permanent address is required"),
    guardian: guardianValidationSchema,
    profileImg: z.string().optional(),
    isActive: z.enum(['active', 'disabled'], {
        required_error: "Status is required",
        invalid_type_error: "Status must be either 'active' or 'disabled'",
    }),
});

export default studentValidationSchema;
