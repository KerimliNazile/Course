import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios'
const Formikk = ({ getData }) => {
    async function AddMenu(values) {
        const res = await axios.post("http://localhost:3000/datas", values)
        getData()
    }
    return (
        <Formik
            initialValues={{ image: '', text: '', imagetwo: '', price: '' }}
            validationSchema={Yup.object({
                image: Yup.string()
                    .max(15, 'Must be 15 characters or less')
                    .required('Required'),
                text: Yup.string()
                    .max(20, 'Must be 20 characters or less')
                    .required('Required'),
                imagetwo: Yup.string()
                    .max(20, 'Must be 20 characters or less')
                    .required('Required'),
                price: Yup.number()
                    .max(20, 'Must be 20 characters or less')
                    .required('Required'),
            })}
            onSubmit={(values, { resetForm }) => {
                AddMenu(values)
                resetForm()
            }}
        >
            <Form>
                <label htmlFor="image">Image</label>
                <Field name="image" type="text" />
                <ErrorMessage name="image" />

                <label htmlFor="text">Text</label>
                <Field name="text" type="text" />
                <ErrorMessage name="text" />

                <label htmlFor="imagetwo">Image two</label>
                <Field name="imagetwo" type="text" />
                <ErrorMessage name="imagetwo" />

                <label htmlFor="price">price</label>
                <Field name="price" type="number" />
                <ErrorMessage name="price" />
                <button type="submit">Submit</button>
            </Form>
        </Formik>
    );
};
export default Formikk