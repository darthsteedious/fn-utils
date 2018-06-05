import compose from './compose';
import not from './not';

export default (f) => compose(not, not)(f);