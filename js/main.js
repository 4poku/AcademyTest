/**
 * Debugger
 * @param {string, number} message 
 * @param {any} value 
 */

function consoleLogDecorator(message, value) {
  console.log("debug::", message, value);
}

// _dbg equal decorator
const _dbg = consoleLogDecorator;

/**
 * For decorator
 * @param {number} deep 
 */
function forDecorator(deep) {
  for (let i = 0; i < deep + 1; i++) {
    _dbg("for-deep:", deep);
  }
}

// _dbg equal decorator
const _for = forDecorator;
