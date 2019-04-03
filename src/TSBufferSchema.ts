import BooleanTypeSchema from "./schemas/BooleanTypeSchema";
import NumberTypeSchema from "./schemas/NumberTypeSchema";
import StringTypeSchema from "./schemas/StringTypeSchema";
import ArrayTypeSchema from "./schemas/ArrayTypeSchema";
import TupleTypeSchema from "./schemas/TupleTypeSchema";
import EnumTypeSchema from "./schemas/EnumTypeSchema";
import AnyTypeSchema from "./schemas/AnyTypeSchema";
import LiteralTypeSchema from "./schemas/LiteralTypeSchema";
import NonPrimitiveTypeSchema from "./schemas/NonPrimitiveTypeSchema";
import ArrayBufferTypeSchema from "./schemas/ArrayBufferTypeSchema";
import IndexedAccessTypeSchema from "./schemas/IndexedAccessTypeSchema";
import ReferenceTypeSchema from "./schemas/ReferenceTypeSchema";
import UnionTypeSchema from "./schemas/UnionTypeSchema";
import IntersectionTypeSchema from "./schemas/IntersectionTypeSchema";
import PickTypeSchema from "./schemas/PickTypeSchema";
import PartialTypeSchema from "./schemas/PartialTypeSchema";
import OmitTypeSchema from "./schemas/OmitTypeSchema";
import OverwriteTypeSchema from "./schemas/OverwriteTypeSchema";
import InterfaceTypeSchema from './schemas/InterfaceTypeSchema';

type TSBufferSchema = BooleanTypeSchema
	| NumberTypeSchema
	| StringTypeSchema
	| ArrayTypeSchema
	| TupleTypeSchema
	| EnumTypeSchema
	| AnyTypeSchema
	| LiteralTypeSchema
	| NonPrimitiveTypeSchema
	| InterfaceTypeSchema
	| ArrayBufferTypeSchema
	| IndexedAccessTypeSchema
	| ReferenceTypeSchema
	| UnionTypeSchema
	| IntersectionTypeSchema
	| PickTypeSchema
	| PartialTypeSchema
	| OmitTypeSchema
	| OverwriteTypeSchema;
export default TSBufferSchema;