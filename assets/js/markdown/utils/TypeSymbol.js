const TYPE_SYMBOL = (typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element')) || 0xeac7;
export default TYPE_SYMBOL;