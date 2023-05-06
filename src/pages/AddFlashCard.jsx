import { useState } from 'react'
import * as yup from 'yup';
import { useFormik } from 'formik';
import { AddFlashcard } from '../api/flashcards';
import { FormControl, TextField, Grid, Button, Container, Snackbar, Alert } from '@mui/material';

const validationSchema = yup.object({
    title: yup.string().required('Title is required'),
    description: yup.string().required('Description is required')
})

const AddFlashCard = () => {
    const [open, setOpen] = useState(false);
    const [focus, setFocus] = useState(true);

    const {errors, handleSubmit, handleBlur, handleChange, handleReset, values, touched} = useFormik({
        initialValues: {
            title: '',
            description: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            setOpen(true);
            AddFlashcard(values);
            setFocus(true);
            handleReset();
        }
    })

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpen(false);
    };

  return (
    <>
    <Container maxWidth='md'>
        <FormControl sx={{ padding: '1rem' }} fullWidth variant="outlined">
            <TextField
                id="title"
                name="title"
                label="Title"
                variant="outlined"
                fullWidth
                autoFocus={focus}
                value={values.title}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.title && errors?.title ? true : false}
                helperText={errors.title}
                margin="normal"
            />
            {/* <TextareaAutosize 
                id="description"
                name="description"
                label="Description"
                variant="outlined"
                
                value={values.description}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.description && errors?.description ? true : false}
                helperText={errors.description}
                margin="normal"
                style={{ width: 200 }}
            /> */}
            <TextField
                id="description"
                name="description"
                label="Description"
                variant="outlined"
                fullWidth
                value={values.description}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.description && errors?.description ? true : false}
                helperText={errors.description}
                margin="normal"
                multiline
            />
            <Grid
              container
              directoin="row"
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              paddingTop={2}
            >
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  color="warning"
                  fullWidth
                  onClick={handleReset}
                >
                  Reset
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  color="success"
                  fullWidth
                  onClick={handleSubmit}
                >
                  Voeg toe
                </Button>
              </Grid>
            </Grid>
        </FormControl>
    </Container>
    <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        severity="success"
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Flascard is succesfullt created!
        </Alert>
      </Snackbar>
    </>
  )
}

export default AddFlashCard