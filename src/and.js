import curry from './curry';

export default curry((f,g,x) => f(x) && g(x));