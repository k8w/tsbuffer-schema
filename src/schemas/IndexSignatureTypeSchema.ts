import BaseSchema from '../BaseSchema';
import TSTypeSchema from '../TSTypeSchema';

export default interface IndexSignatureTypeSchema extends BaseSchema {
    type: 'IndexSignature';
    valueType: TSTypeSchema;
}