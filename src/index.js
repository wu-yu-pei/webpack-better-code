import _ from 'lodash';
import dayjs from 'dayjs';
import $ from 'jquery';

import a from './a';
import b from './b';

console.log('index.js');

console.log($('button'));

console.log(a);
console.log(b);

function add(a, b, c, d) {
  return a + b + c + d;
}
const curryAdd = _.curry(add);
let res = curryAdd(1)(2)(3, 4);
console.log(res);

let result = dayjs().format();
console.log(result);

const button = document.querySelector('button');

// 不使用magic comment
// button.addEventListener('click', () => {
//   import('./Element').then((res) => {
//     console.log(res);
//   });
// });

// 使用magic comment
button.addEventListener('click', () => {
  console.log(111);
  import(
    /* webpackChunkName: 'Element' */
    /* webpackPrefetch: true */
    /* webpackPreload: true */
    './Element'
  ).then((res) => {
    console.log(res);
  });
});
