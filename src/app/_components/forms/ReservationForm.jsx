'use client';

import { Formik } from 'formik';
import * as Yup from 'yup';
import { sendReservationEmail } from '../../_actions/reservation';

const validationSchema = Yup.object().shape({
  first_name: Yup.string().required('First name is required'),
  last_name: Yup.string().required('Last name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  person: Yup.string()
    .not(['Person'], 'Please select number of people')
    .required('Please select number of people'),
  date: Yup.string().required('Date is required'),
  time: Yup.string()
    .not(['Time'], 'Please select a time')
    .required('Time is required'),
  message: Yup.string().required('Message is required'),
});

const ReservationForm = () => {
  return (
    <Formik
      initialValues={{
        email: '',
        first_name: '',
        last_name: '',
        time: 'Time',
        date: '',
        person: 'Person',
        message: '',
      }}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting, resetForm, setStatus }) => {
        try {
          const formData = new FormData();
          Object.keys(values).forEach(key => {
            formData.append(key, values[key]);
          });

          const result = await sendReservationEmail(formData);

          if (result.success) {
            setStatus({ success: 'Reservation request sent successfully!' });
            resetForm();
          } else {
            setStatus({
              error: 'Failed to send reservation request. Please try again.',
            });
          }
        } catch (error) {
          setStatus({
            error: 'An unexpected error occurred. Please try again.',
          });
        } finally {
          setSubmitting(false);
        }
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
        status,
      }) => (
        <form onSubmit={handleSubmit} className="reservation-form">
          <div className="row">
            <div className="col-6 col-md-4">
              <input
                type="text"
                placeholder="First Name"
                name="first_name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.first_name}
                style={{
                  border:
                    errors.first_name && touched.first_name
                      ? '1px solid red'
                      : '',
                }}
              />
            </div>
            <div className="col-6 col-md-4">
              <input
                type="text"
                placeholder="Last Name"
                name="last_name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.last_name}
                style={{
                  border:
                    errors.last_name && touched.last_name
                      ? '1px solid red'
                      : '',
                }}
              />
            </div>
            <div className="col-6 col-md-4">
              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                style={{
                  border: errors.email && touched.email ? '1px solid red' : '',
                }}
              />
            </div>
            <div className="col-6 col-md-4">
              <select
                name="person"
                className="wide"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.person}
                style={{
                  border:
                    errors.person && touched.person ? '1px solid red' : '',
                }}
              >
                <option value="Person">Person</option>
                <option value="1">1 Person</option>
                <option value="2">2 People</option>
                <option value="3">3 People</option>
                <option value="4">4 People</option>
                <option value="5">5 People</option>
                <option value="6+">6 or more</option>
              </select>
            </div>
            <div className="col-6 col-md-4">
              <input
                type="date"
                name="date"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.date}
                style={{
                  border: errors.date && touched.date ? '1px solid red' : '',
                }}
              />
            </div>
            <div className="col-6 col-md-4">
              <select
                name="time"
                className="wide"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.time}
                style={{
                  border: errors.time && touched.time ? '1px solid red' : '',
                }}
              >
                <option value="Time">Time</option>
                <option value="10:00am">10:00 am</option>
                <option value="11:00am">11:00 am</option>
                <option value="12:00pm">12:00 pm</option>
                <option value="1:00pm">1:00 pm</option>
                <option value="2:00pm">2:00 pm</option>
                <option value="3:00pm">3:00 pm</option>
                <option value="4:00pm">4:00 pm</option>
                <option value="5:00pm">5:00 pm</option>
                <option value="6:00pm">6:00 pm</option>
                <option value="7:00pm">7:00 pm</option>
                <option value="8:00pm">8:00 pm</option>
                <option value="9:00pm">9:00 pm</option>
                <option value="10:00pm">10:00 pm</option>
              </select>
            </div>
            <div className="col-12">
              <textarea
                placeholder="Message"
                name="message"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.message}
                rows="4"
                style={{
                  border:
                    errors.message && touched.message ? '1px solid red' : '',
                }}
              />
            </div>
          </div>

          {status?.success && (
            <div className="success-message">{status.success}</div>
          )}

          {status?.error && <div className="error-message">{status.error}</div>}

          <button className="tst-btn" type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Reserve a table'}
          </button>
        </form>
      )}
    </Formik>
  );
};

export default ReservationForm;
