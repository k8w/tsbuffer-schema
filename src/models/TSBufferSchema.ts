import { AnyTypeSchema, ArrayTypeSchema, BooleanTypeSchema, BufferTypeSchema, DateTypeSchema, EnumTypeSchema, IndexedAccessTypeSchema, InterfaceTypeSchema, IntersectionTypeSchema, LiteralTypeSchema, ObjectTypeSchema, NumberTypeSchema, OmitTypeSchema, OverwriteTypeSchema, PartialTypeSchema, PickTypeSchema, ReferenceTypeSchema, StringTypeSchema, TupleTypeSchema, UnionTypeSchema } from "../index";
import { CustomTypeSchema } from "../schemas/CustomTypeSchema";
import { NonNullableTypeSchema } from "../schemas/NonNullableTypeSchema";

/**
 * Schema for TypeScript Types
 */
export type TSBufferSchema = (BooleanTypeSchema
	| NumberTypeSchema
	| StringTypeSchema
	| ArrayTypeSchema
	| TupleTypeSchema
	| EnumTypeSchema
	| AnyTypeSchema
	| LiteralTypeSchema
	| ObjectTypeSchema
	| InterfaceTypeSchema
	| BufferTypeSchema
	| IndexedAccessTypeSchema
	| ReferenceTypeSchema
	| UnionTypeSchema
	| IntersectionTypeSchema
	| PickTypeSchema
	| PartialTypeSchema
	| OmitTypeSchema
	| OverwriteTypeSchema
	| NonNullableTypeSchema
	| DateTypeSchema
	| CustomTypeSchema)
	& { comment?: string };