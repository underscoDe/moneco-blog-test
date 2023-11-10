import { Mixin } from 'ts-mixer';

import { Auth, LoanRequest } from '@/entities';

class API extends Mixin(Auth, LoanRequest) {}

const api = new API();
export default api;
