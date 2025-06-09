const supportSymbol = typeof Symbol === 'function' && Symbol.for;

//表示普通的React元素，即通过JSX创建的组件或DOM元素

export const REACT_ELEMENT_TYPE = supportSymbol
	? Symbol.for('react.element')
	: 0xeac7;
