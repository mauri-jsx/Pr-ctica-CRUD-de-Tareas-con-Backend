import { body, param } from "express-validator";

//VALIDACIONES PARA VER TRAEA POR ID
export const getTaskByIdValidation = [
    param('id')
        .isInt()
        .withMessage('El campo id debe ser un valor numérico entero')
];


//VALDACIONES PARA CREAR TAREAS
export const taskValidation = [
    body('title')
        .isString()
        .withMessage('El campo title debe ser una cadena de texto')
        .notEmpty()
        .withMessage('El campo title no debe estar vacío')
        .isLength({ min: 10 })  
        .withMessage('El campo title no puede tener menos de 10 caracteres'), 

    body('description')
        .isString()
        .withMessage('El campo description debe ser una cadena de texto')
        .notEmpty()
        .withMessage('El campo description no debe estar vacío')
        .isLength({ min: 4 }) 
        .withMessage('El campo description tiene que tener al menos 4 caracteres'),

    body('isComplete')
        .isBoolean()
        .withMessage('El campo isComplete debe ser un valor booleano')
        .notEmpty()
        .withMessage('El campo isComplete no debe estar vacío')
];

//VALDACIONES PARA ACTUALIZAR TAREAS
export const updateTaskValidation = [
    body('title')
        .optional() 
        .isString()
        .withMessage('El campo title debe ser una cadena de texto')
        .isLength({ min: 5 })
        .withMessage('El campo title no puede tener más de 255 caracteres'),

    body('description')
        .isString()
        .withMessage('El campo description debe ser una cadena de texto')
        .notEmpty()
        .withMessage('El campo description no debe estar vacío')
        .isLength({ min: 5 })
        .withMessage('El campo description no puede tener más de 255 caracteres'),

    body('isComplete')
        .isBoolean()
        .withMessage('El campo isComplete debe ser un valor booleano')
        .notEmpty()
        .withMessage('El campo isComplete no debe estar vacío')
]

//VALDACIONES PARA ELIMINAR TAREAS
export const deleteTaskValidation = [
    param('id')
        .isInt()
        .withMessage('El campo id debe ser un valor numérico entero')
];

