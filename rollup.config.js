import dts from "rollup-plugin-dts";
import typescript from 'rollup-plugin-typescript2';

export default [
    {
        input: './src/index.ts',
        output: [{
            format: 'cjs',
            file: './dist/index.cjs',
        }, {
            format: 'es',
            file: './dist/index.mjs'
        }],
        plugins: [
            typescript({
                tsconfigOverride: {
                    compilerOptions: {
                        module: "esnext"
                    }
                }
            })
        ]
    },
    {
        input: './src/index.ts',
        output: [{
            file: './dist/index.d.ts',
            format: 'es'
        }],
        plugins: [dts()]
    }
]