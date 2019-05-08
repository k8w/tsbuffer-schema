import { TSBufferSchema } from "./TSBufferSchema";

export interface TSBufferProto {
    /**
     * 于baseDir的文件的相对路径 不带扩展名的
     * 例如 a/b/c/index.ts 的key会是 a/b/c/index 不会是 a/b/c
     */
    [path: string]: {
        [symbolName: string]: TSBufferSchema
    };
}