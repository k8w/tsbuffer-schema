import { TSBufferSchema } from "./TSBufferSchema";

export interface TSBufferProto {
    /**
     * 于baseDir的文件的相对路径 不带扩展名的
     * 例如 a/b/c/index.ts 的key会是 a/b/c/index 不会是 a/b/c
     * 路径Key/SymbolName
     * 例子：
     *   a/b/c/index.ts 内的 Test类型，其SchemaID为 a/b/c/index/Test
     *   a/b/c/index.ts 内的 NS命名空间下的Test类型，其SchemaID为 a/b/c/index/NS.Test
     */
    [schemaId: string]: TSBufferSchema;
}