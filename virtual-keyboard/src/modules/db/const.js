import {get } from './store';
const r = get('langEn', 'bool')
export let bool = r === undefined ? true : r