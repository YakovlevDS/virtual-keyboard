import { get } from './store';

const bool = get('langEn', 'bool') || true;
export default bool;
