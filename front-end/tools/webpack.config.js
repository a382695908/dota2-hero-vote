/**
 * Created by yyj on 23/11/2016.
 */

import path from 'path';
import webpack from 'webpack';
import extend from 'extend';
import AssetsPlugin from 'assets-webpack-plugin';

const isDebug = !process.argv.includes('--release');
const isVerbose = process.argv.includes('--v');

const root = path.resolve(__dirname, '../src');

const config = {
  
};

const clientConfig = extend(true, {}, config,{
  
});

export default [clientConfig];