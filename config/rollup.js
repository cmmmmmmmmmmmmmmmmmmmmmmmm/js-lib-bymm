const babel = require('rollup-plugin-babel')
var pkg = require('../package.json')
var version = pkg.version

var banner = `/*!
* ${pkg.name} v${version}
* (c) ${new Date().getFullYear()} ${pkg.author}
* Released under the ${pkg.license} License.
*/`

exports.banner = banner

function geCompiler(opt) {
    return babel({
        babelrc: false,
        presets: [
            ['@babel/preset-env', {
                targets: {
                    browsers: 'last 2 versions ,>1%,ie>8,Chrome>=45,safari>=10',
                    node: '0.12',
                },
                modules: false,
                loose: true
            }]
        ],
        runtimeHelpers: true,
        plugins: [[
            '@babel/plugin-transform-runtime',
            {
                corejs: 2
            }
        ]],
        exclude: 'node_modules/**',
    })
}

exports.getCompiler = geCompiler