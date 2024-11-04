'use client';

import { Formik } from 'formik';
import * as Yup from 'yup';
import { sendContactEmail } from '../../_actions/contact';

const validationSchema = Yup.object().shape({
  first_name: Yup.string().required('First name is required'),
  last_name: Yup.string().required('Last name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.string().required('Phone number is required'),
  message: Yup.string().required('Message is required'),
});

const ContactForm = () => {
  return (
    <Formik
      initialValues={{
        email: '',
        phone: '',
        first_name: '',
        last_name: '',
        message: '',
      }}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting, resetForm, setStatus }) => {
        try {
          const formData = new FormData();
          Object.keys(values).forEach(key => {
            formData.append(key, values[key]);
          });

          const result = await sendContactEmail(formData);

          if (result.success) {
            setStatus({ success: 'Message sent successfully!' });
            resetForm();
          } else {
            setStatus({
              error: 'Failed to send message. Please try again.',
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
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="row">
            <div className="col-lg-6">
              <div className="form-group">
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
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                {console.log(errors)}
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
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <input
                  type="tel"
                  placeholder="Phone"
                  name="phone"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.phone}
                  style={{
                    border:
                      errors.phone && touched.phone ? '1px solid red' : '',
                  }}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  style={{
                    border:
                      errors.email && touched.email ? '1px solid red' : '',
                  }}
                />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="form-group">
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
          </div>

          {status?.success && (
            <div className="success-message">
              <i className="fas fa-check-circle"></i> {status.success}
            </div>
          )}

          {status?.error && (
            <div className="error-message">
              <i className="fas fa-exclamation-triangle"></i> {status.error}
            </div>
          )}

          <button className="tst-btn" type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send a message'}
          </button>
        </form>
      )}
    </Formik>
  );
};

export default ContactForm;
