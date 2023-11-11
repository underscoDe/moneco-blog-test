import { Mixin } from 'ts-mixer';

import { Article } from '@/entities';

class API extends Mixin(Article) {}

const api = new API();
export default api;
