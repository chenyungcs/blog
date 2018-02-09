/**
 * @flow
 * index.js
 * @author    : yunchen
 * @createdAt : 09/02/2018
 */
import {add} from './util';

add(1, 2);      // => Pass
add(1, 'abc');  // => Error: src/index.js:10
