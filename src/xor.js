import curry from './curry';
import and from './and';
import not from './not';
import or from './or';


export default curry((f, g) => or(and(f, not(g)), and(not(f), g)));