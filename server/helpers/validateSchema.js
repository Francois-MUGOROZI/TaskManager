import Joi from '@hapi/joi';

// validating signup
export const signupValidateSchema = Joi.object({
  firstName: Joi.string()
    .min(2)
    .max(40)
    .required(),

  lastName: Joi.string()
    .min(2)
    .max(40)
    .required(),

  email: Joi.string()
    .email({
      minDomainSegments: 2
    })
    .required()
    .error(new Error('Invalid Email')),

  password: Joi.string()
    .pattern(/^[a-zA-Z0-9]{3,30}$/)
    .required()
});
