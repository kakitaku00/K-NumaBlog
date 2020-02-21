import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import commonjs from '@rollup/plugin-commonjs';
import svelte from 'rollup-plugin-svelte';
import babel from 'rollup-plugin-babel';
import css from "rollup-plugin-css-only";
import { terser } from 'rollup-plugin-terser';
import config from 'sapper/config/rollup.js';
import pkg from './package.json';
import dotenv from 'dotenv'
import fs from 'fs'
import path from 'path'

dotenv.config()

const fileEnv = '.env'

// // get the env variables from the .env file relative to the current NODE_ENV
// const ENV_VARS = dotenv.parse(fs.readFileSync(path.resolve(__dirname, fileEnv)))
const ENV_VARS = dotenv.config().parsed

console.log(ENV_VARS)

console.log(dotenv.config())
// {
//   parsed: {
//     X_BLOG_API_KEY: 'dbb4fa15-78e4-4586-8d16-be5e6168c584',
//     X_CONTACT_WRITE_API_KEY: '2f4301c7-d004-4f90-8f4c-04c38d7262a9'
//   }
// }


const valuesEnvToReplace = () => {
  return Object.entries(ENV_VARS).reduce((acc, [key, val]) => {
    acc[`process.env.${key}`] = JSON.stringify(val)
    return acc
  }, {})
}

console.log(valuesEnvToReplace())
//  'process.env.X_BLOG_API_KEY': '"***********"',
//  'process.env.X_CONTACT_WRITE_API_KEY': '"2f4301c7-d004-4f90-8f4c-04c38d7262a9"'

const mode = process.env.NODE_ENV;
const dev = mode === 'development';
const legacy = !!process.env.SAPPER_LEGACY_BUILD;

const onwarn = (warning, onwarn) => (warning.code === 'CIRCULAR_DEPENDENCY' && /[/\\]@sapper[/\\]/.test(warning.message)) || onwarn(warning);

export default {
	client: {
		input: config.client.input(),
		output: config.client.output(),
		plugins: [
			replace({
				'process.browser': true,
				'process.env.NODE_ENV': JSON.stringify(mode),
				...valuesEnvToReplace()
			}),
			svelte({
				dev,
				hydratable: true,
				emitCss: true
			}),
			css({
				output: 'static/markdown.css'
			}),
			resolve({
				browser: true,
				dedupe: ['svelte']
			}),
			commonjs(),

			legacy && babel({
				extensions: ['.js', '.mjs', '.html', '.svelte'],
				runtimeHelpers: true,
				exclude: ['node_modules/@babel/**'],
				presets: [
					['@babel/preset-env', {
						targets: '> 0.25%, not dead'
					}]
				],
				plugins: [
					'@babel/plugin-syntax-dynamic-import',
					['@babel/plugin-transform-runtime', {
						useESModules: true
					}]
				]
			}),

			!dev && terser({
				module: true
			})
		],

		onwarn,
	},

	server: {
		input: config.server.input(),
		output: config.server.output(),
		plugins: [
			replace({
				'process.browser': false,
				'process.env.NODE_ENV': JSON.stringify(mode),
				...valuesEnvToReplace()
			}),
			svelte({
				generate: 'ssr',
				dev
			}),
			resolve({
				dedupe: ['svelte']
			}),
			commonjs()
		],
		external: Object.keys(pkg.dependencies).concat(
			require('module').builtinModules || Object.keys(process.binding('natives'))
		),

		onwarn,
	},

	serviceworker: {
		input: config.serviceworker.input(),
		output: config.serviceworker.output(),
		plugins: [
			resolve(),
			replace({
				'process.browser': true,
				'process.env.NODE_ENV': JSON.stringify(mode)
			}),
			commonjs(),
			!dev && terser()
		],

		onwarn,
	}
};
