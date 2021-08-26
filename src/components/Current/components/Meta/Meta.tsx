import React from 'react';
import styles from './Meta.module.css';
import Text from '../Text';

interface IMetaProps {
  title: string;
  value: string;
}

const Meta: React.FC<IMetaProps> = ({
  title,
  value,
}) => (
  <div className={styles.meta}>
    <Text className={styles.title}>{title}</Text>
    <br />
    <Text className={styles.value}>{value}</Text>
  </div>
);

export default Meta;
