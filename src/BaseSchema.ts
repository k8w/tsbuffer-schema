import TSBufferTypeId from './TSBufferTypeId';

export default interface BaseSchema {
    type: keyof typeof TSBufferTypeId;
}