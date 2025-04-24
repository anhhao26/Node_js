import Joi from 'joi';

const schema = Joi.object({
  name:    Joi.string().min(3).max(50).required(),
  age:     Joi.number().integer().min(1).max(120).required(),
  email:   Joi.string().email().required(),
  hobbies: Joi.array().items(Joi.string())
});

export function validateUser(req, res, next) {
  const { error } = schema.validate(req.body, { abortEarly: false });
  if (error) {
    return res.status(400).json({
      errors: error.details.map(d => d.message)
    });
  }
  next();
}
