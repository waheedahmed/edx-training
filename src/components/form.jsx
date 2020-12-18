import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import { Input, Button, ValidationFormGroup } from '@edx/paragon';

const schema = Yup.object({
    email: Yup.string().email('Invalid Email').required(),
  });

export const FormikForm = () => {
    return (
        <Formik
        validationSchema={schema}
        onSubmit={console.log}
        initialValues={{
            email: '',
          }}
        >
        {({
            handleSubmit,
            handleChange,
            handleBlur,
            values,
            touched,
            isValid,
            errors,
        }) => (
            <div className="d-flex justify-content-center mt-5">
                <Form onSubmit={handleSubmit}>
                    <div className="d-flex flex-column align-items-start">
                        <ValidationFormGroup
                            className="mb-0"
                            for="email"
                            invalid={!!errors.email}
                            invalidMessage={errors.email}
                        >
                            <label htmlFor="forgot-password-input" className="h6 mr-1">Email</label>
                            <Input
                                name="email"
                                id="forgot-password-input"
                                type="email"
                                placeholder="username@domain.com"
                                value={values.email}
                                onChange={handleChange}
                                style={{ width: '400px' }}
                            />
                        </ValidationFormGroup>
                    </div>
                    <Button className="mt-3 mb-3" type="submit">Submit</Button>
                </Form>
            </div>
        )}
        </Formik>
    );
}
