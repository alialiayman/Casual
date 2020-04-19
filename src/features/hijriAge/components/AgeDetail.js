import React from 'react';
import { makeStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Formik } from 'formik';

const useStyles = makeStyles((theme) => ({
    container: {
        width: '80%',
        margin: '25px auto',
        padding: '1em',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
}));

const AgeDetail = ({ onSave }) => {

    const classes = useStyles();
    return (
        <React.Fragment>
            <Formik
                initialValues={{ name: '', birthdate: '' }}
                onSubmit={(values, { setSubmitting }) => {
                    onSave(values);
                    setSubmitting(false);
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                        <Paper elevation={5}>
                            <form onSubmit={handleSubmit} className={classes.container}>
                                <TextField name="name" label="Name" onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.name} />
                                {errors.name && touched.name && errors.name}
                                <TextField
                                    label="Birthday"
                                    name="birthdate"
                                    type="date"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.birthdate}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                                {errors.birthdate && touched.birthdate && errors.birthdate}
                                <Button type="submit" disabled={isSubmitting} variant="contained" color="primary">
                                    Add Birth
                                </Button>
                            </form>
                        </Paper>
                    )}

            </Formik>

        </React.Fragment>
    )
}

export default AgeDetail;