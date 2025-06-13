
// Browser compatibility polyfills
import 'core-js/stable';
import 'regenerator-runtime/runtime';

// Additional polyfills for older browsers
if (typeof window !== 'undefined') {
  // Object.assign polyfill
  if (!Object.assign) {
    Object.assign = require('core-js/features/object/assign');
  }

  // Array.from polyfill
  if (!Array.from) {
    Array.from = require('core-js/features/array/from');
  }

  // Promise polyfill
  if (!window.Promise) {
    window.Promise = require('core-js/features/promise');
  }

  // Fetch polyfill
  if (!window.fetch) {
    require('whatwg-fetch');
  }

  // IntersectionObserver polyfill
  if (!window.IntersectionObserver) {
    require('intersection-observer');
  }
}
