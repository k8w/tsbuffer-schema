import TSTypeId from './TSTypeId';

export default interface BaseSchema {
    type: keyof typeof TSTypeId;
}