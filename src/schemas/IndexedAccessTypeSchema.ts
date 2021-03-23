import { InterfaceReference } from '../models/InterfaceReference';
import { InterfaceTypeSchema } from './InterfaceTypeSchema';

/**
 * Reference like XXX['XX']['XX']
 * 注意 A['b' | 'c']不是IndexedAccessType，它们应该作为一个 UnionType被识别
 * 应该等价于 A['b'] | A['c']
 */
export interface IndexedAccessTypeSchema {
    type: 'IndexedAccess';
    objectType: InterfaceTypeSchema | InterfaceReference;
    index: string;
}