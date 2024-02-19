import { ZodFormattedError, ZodObject, ZodRawShape } from "zod";

export interface ValidationResult<TValue> {
    success: boolean;
    errors: ZodFormattedError<TValue> | null;
}

export const validate = <TZodShape extends ZodRawShape, TValue>(
    schema: ZodObject<TZodShape>,
    value: TValue
): ValidationResult<TValue> => {
    const result = schema.safeParse(value);

    return {
        success: result.success,
        errors: result.success
            ? null
            : (result.error.format() as ZodFormattedError<TValue>),
    };
};
