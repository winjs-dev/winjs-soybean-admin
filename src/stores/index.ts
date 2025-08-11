import { usePiniaStore } from 'winjs';
import { resetSetupStore } from './plugins';

const store = usePiniaStore();
store.use(resetSetupStore);
