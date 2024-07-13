import { Formik, Form } from 'formik';
import { useSelector } from 'react-redux';
import { useRef, useEffect } from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import filter from 'leo-profanity';
import { toast } from 'react-toastify';
import { useRollbar } from '@rollbar/react';
import { useAddMessageMutation } from '../../api/homeMessagesApi.js';

const NewMessage = () => {
  const [addMessage, { data, error }] = useAddMessageMutation();
  const { currentChannelId } = useSelector((state) => state.app);
  const { username } = useSelector((state) => state.auth);
  const { t } = useTranslation();
  const inputRef = useRef();
  const rollbar = useRollbar();

  useEffect(() => {
    inputRef.current.focus();
  }, [currentChannelId, data]);

  const handleAddMessage = async (body, resetForm) => {
    if (error) {
      toast.error(t('homePage.errors.noConnection'));
      rollbar.error('NewMessage', error);
    }

    const filteredMessage = filter.clean(body);

    await addMessage({ body: filteredMessage, channelId: currentChannelId, username });
    resetForm();
  };

  return (
    <FormGroup className="mt-auto px-5 py-3">
      <Formik initialValues={{ body: '' }} onSubmit={({ body }, { resetForm }) => handleAddMessage(body, resetForm)}>
        {({
          values, handleChange, isSubmitting,
        }) => (
          <Form noValidate className="py-1 border rounded-2">
            <FormGroup className={`input-group ${values.body ? '' : 'has-validation'}`}>
              <FormControl
                type="text"
                name="body"
                value={values.body}
                onChange={handleChange}
                aria-label={t('homePage.newMessageInput')}
                placeholder={t('homePage.newMessagePlaceholder')}
                className="border-0 p-0 ps-2 form-control"
                ref={inputRef}
                disabled={isSubmitting}
              />
              <button type="submit" className="btn btn-group-vertical" disabled={!values.body.trim() || isSubmitting}>
                <svg xmlns="http://www.w3.org/2000/svg" alt={t('homePage.sendMessageButton')} viewBox="0 0 16 16" width="20" height="20" fill="currentColor">
                  <path fillRule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                </svg>
              </button>
            </FormGroup>
          </Form>
        )}
      </Formik>
    </FormGroup>
  );
};

export default NewMessage;
