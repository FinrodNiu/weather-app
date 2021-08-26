import React from 'react';
import classNames from 'classnames';
import styles from './Text.module.css';

interface ITextProps {
	className: string,
	children: any,
}

const Text: React.FC<ITextProps> = ({
	className,
	children,
}) => (
	<span className={classNames(styles.text, className)}>
		{children}
	</span>
);

export default Text