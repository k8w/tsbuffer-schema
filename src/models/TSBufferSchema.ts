import { BooleanTypeSchema, NumberTypeSchema, StringTypeSchema, ArrayTypeSchema, TupleTypeSchema, EnumTypeSchema, AnyTypeSchema, LiteralTypeSchema, ObjectTypeSchema, InterfaceTypeSchema, BufferTypeSchema, IndexedAccessTypeSchema, ReferenceTypeSchema, UnionTypeSchema, IntersectionTypeSchema, PickTypeSchema, PartialTypeSchema, OmitTypeSchema, OverwriteTypeSchema, NonNullableTypeSchema, DateTypeSchema } from "../index";

export type TSBufferSchema = BooleanTypeSchema
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
	| DateTypeSchema;