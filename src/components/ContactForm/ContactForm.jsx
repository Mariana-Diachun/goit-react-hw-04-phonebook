import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { Input, FormWrap, Label, Button, Alert } from './ContactForm.styled';
import schema from 'validation/validation';
import { useId } from 'react';

const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = ({ onSubmit }) => {
  const nameID = useId();
  const numberID = useId();
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={onSubmit}
    >
      <FormWrap autoComplete="off">
        <Label htmlFor={nameID}>
          Name
          <Input type="text" name="name" id={nameID} />
        </Label>
        <Alert name="name" compononet="span" />
        <Label htmlFor={numberID}>
          Number
          <Input type="tel" name="number" id={numberID} />
        </Label>
        <Alert name="number" compononet="span" />
        <Button type="submit">Add contact</Button>
      </FormWrap>
    </Formik>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
