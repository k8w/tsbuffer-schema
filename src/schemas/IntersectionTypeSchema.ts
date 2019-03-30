import BaseSchema from '../BaseSchema';
import TSTypeSchema from '../TSTypeSchema';

export default interface IntersectionTypeSchema extends BaseSchema {
    type: 'Intersection';
    members: TSTypeSchema[];
}