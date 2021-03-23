import { TSBufferSchema } from "../models/TSBufferSchema";

export interface ArrayTypeSchema {
    type: 'Array';
    elementType: TSBufferSchema;
}