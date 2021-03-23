import { AnyTypeSchema, ArrayTypeSchema, BooleanTypeSchema, BufferTypeSchema, DateTypeSchema, EnumTypeSchema, IndexedAccessTypeSchema, InterfaceTypeSchema, IntersectionTypeSchema, LiteralTypeSchema, NonPrimitiveTypeSchema, NumberTypeSchema, OmitTypeSchema, OverwriteTypeSchema, PartialTypeSchema, PickTypeSchema, ReferenceTypeSchema, StringTypeSchema, TupleTypeSchema, UnionTypeSchema } from "../index";
import { NonNullableTypeSchema } from "../schemas/NonNullableTypeSchema";

export type TSBufferSchema = BooleanTypeSchema
	| NumberTypeSchema
	| StringTypeSchema
	| ArrayTypeSchema
	| TupleTypeSchema
	| EnumTypeSchema
	| AnyTypeSchema
	| LiteralTypeSchema
	| NonPrimitiveTypeSchema
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
	| DateTypeSchema;