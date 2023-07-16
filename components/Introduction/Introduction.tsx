import { ReactNode } from 'react';
import classes from './Introduction.module.scss';

const Introduction = (): ReactNode => {
  return (
    <section className={classes.introduction}>
      <h1>Forms Validation REST API Documentation</h1>
      <p>
        You don&lsquo;t have to worry about form validation anymore, and write boilerplate code 😩.
        This API handles validation out-of-the-box 📦! It&lsquo;s as simple as that.
      </p>
    </section>
  );
};

export default Introduction;
