import React, { FC } from 'react';

// styles
import styles from './component.module.scss';

export const Component: FC<{}> = () => (
  <div className={styles.component}>Component</div>
);

export default Component;
