import BaseSchema from '../BaseSchema';

/** 除ArrayBuffer以外的所有 将通过JSON.parse来解析 */
export default interface AnyTypeSchema extends BaseSchema {
    type: 'Any';
}