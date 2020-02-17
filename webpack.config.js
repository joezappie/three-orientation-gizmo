const path = require('path');

module.exports = {
	entry: './src/OrientationGizmo.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'OrientationGizmo.js',
		library: 'OrientationGizmo',
		libraryTarget: 'umd',
	},
	externals: {
		three: {
			commonjs: 'three',
			commonjs2: 'three',
			amd: 'three',
			root: 'THREE',
		},
	},
	mode: "development",
};