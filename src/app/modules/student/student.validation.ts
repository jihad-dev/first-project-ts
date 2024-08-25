import Joi from 'joi';


// Joi schema for UserName
const userNameSchema = Joi.object({
    firstName: Joi.string()
        .trim()
        .required()
        .max(20)
        .regex(/^[A-Z][a-z]*$/)
        .messages({
            "string.pattern.base": "{#label} must be capitalized",
        }),
    middleName: Joi.string().optional(),
    lastName: Joi.string()
        .required()
        .pattern(/^[A-Za-z]+$/)
        .messages({
            "string.pattern.base": "{#label} must be alphabetic",
        }),
});

// Joi schema for Guardian
const guardianSchema = Joi.object({
    fatherName: Joi.string().required(),
    fatherOccupation: Joi.string().required(),
    fatherContactNumber: Joi.string().required(),
    motherName: Joi.string().required(),
    motherOccupation: Joi.string().required(),
    motherContactNumber: Joi.string().required(),
});

// Joi schema for Student
const studentValidationSchema = Joi.object({
    id: Joi.string().required(),
    name: userNameSchema.required(),
    gender: Joi.string()
        .valid('male', 'female')
        .required()
        .messages({
            "any.only": "The gender field can only be one of the following: 'male', 'female'",
        }),
    dateOfBirth: Joi.string().optional(),
    email: Joi.string()
        .email()
        .required()
        .messages({
            "string.email": "{#label} must be a valid email address",
        }),
    contactNo: Joi.string().required(),
    emergencyContactNumber: Joi.string().required(),
    bloodGroup: Joi.string()
        .valid('A+', 'A-', 'AB+', 'B+', 'B-', 'O+', 'O-')
        .optional(),
    presentAddress: Joi.string().required(),
    permanentAddress: Joi.string().required(),
    guardian: guardianSchema.required(),
    profileImg: Joi.string().optional(),
    isActive: Joi.string()
        .valid('active', 'disabled')
        .default('active')
        .required(),
});


export default studentValidationSchema;