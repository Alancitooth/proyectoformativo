import { Schema } from "zod";

export const validateSchema = (schema) => (requese, response, next) => {
    try {
        schema.parse(requese.body);
    } catch (error) {
        return response.status(400)
        .json(error.errors.map((error)  => error.message));
    }
}