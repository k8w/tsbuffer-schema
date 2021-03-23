export interface EnumTypeSchema {
    type: 'Enum';
    members: {
        /** 序列化用 */
        id: number,
        value: string | number
    }[];
}