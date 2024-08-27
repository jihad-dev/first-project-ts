import { z } from "zod";

// Zod schema for UserName
const userNameValidationSchema = z.object({
    firstName: z.string().trim().min(1, 'First name is required').max(20, 'First name must be 20 characters or less'),
    middleName: z.string().optional(),
    lastName: z.string().min(1, 'Last name is required'),
});

// Zod schema for Guardian
const guardianValidationSchema = z.object({
    fatherName: z.string().min(1, 'Father name is required'),
    fatherOccupation: z.string().min(1, 'Father occupation is required'),
    fatherContactNumber: z.string().min(1, 'Father contact number is required'),
    motherName: z.string().min(1, 'Mother name is required'),
    motherOccupation: z.string().min(1, 'Mother occupation is required'),
    motherContactNumber: z.string().min(1, 'Mother contact number is required'),
});

// Zod schema for Student
const studentValidationSchema = z.object({
    id: z.string().min(1, 'ID is required'),
    name: userNameValidationSchema,
    gender: z.enum(['male', 'female']),
    dateOfBirth: z.string().optional(),
    email: z.string().email('Invalid email address').min(1, 'Email is required'),
    contactNo: z.string().min(1, 'Contact number is required'),
    emergencyContactNumber: z.string().min(1, 'Emergency contact number is required'),
    bloodGroup: z.enum(['A+', 'A-', 'AB+', 'B+', 'B-', 'O+', 'O-']).optional(),
    presentAddress: z.string().min(1, 'Present address is required'),
    permanentAddress: z.string().min(1, 'Permanent address is required'),
    guardian: guardianValidationSchema,
    profileImg: z.string().optional(),
    isActive: z.enum(['active', 'disabled']).default('active'),
});

export default studentValidationSchema;