var nodeResolve = require('rollup-plugin-node-resolve');
var common = require('./rollup');
module.exports ={
    input: 'src/index.js',
    output: {
        file: 'dist/index.aio.js',
        format: 'umd',
        name: 'clone'
    },
    plugin: [
        nodeResolve({
            main: true,
            extensions: ['.js', '.ts'],
        }),
        common.getCompiler()
    ]
}