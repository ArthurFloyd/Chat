import { useDispatch, useSelector } from 'react-redux';
import { Modal, FormGroup, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useRollbar } from '@rollbar/react';
import { changeChannel } from '../../store/slices/app.js';
import { useRemoveChannelMutation, useGetChannelsQuery } from '../../api/homeChannelsApi.js';
import handleError from '../../utils/handleError.js';
import useAuthContext from '../../hooks/useAuthContext.js';
import showSuccess from '../../utils/showSuccess.js';

const RemoveChannel = ({ handleCloseModal }) => {
  const { currentChannelId, editChannelId } = useSelector((state) => state.app);
  const { t } = useTranslation();
  const rollbar = useRollbar();
  const { logOut } = useAuthContext();

  const [removeChannel] = useRemoveChannelMutation();
  const { status } = useGetChannelsQuery();
  const dispatch = useDispatch();
  const defaultChannel = { name: 'general', id: '1' };

  const handleRemoveChannel = async () => {
    const channelRemovalResult = await removeChannel({ id: editChannelId });

    handleCloseModal();
    if (channelRemovalResult?.error) {
      handleError({
        error: channelRemovalResult.error,
        filePath: 'Remove Channel',
        translate: t,
        logOut,
        rollbar,
      });

      return;
    }
    if (currentChannelId === editChannelId) {
      dispatch(changeChannel(defaultChannel));
    }

    showSuccess({
      successMessage: 'removeChannel',
      translate: t,
    });
  };

  return (
    <Modal show centered onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>{t('homePage.modals.deleteChannelHeader')}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p className="lead">{t('homePage.modals.deleteChannelBody')}</p>
        <FormGroup className="d-flex justify-content-end">
          <Button variant="secondary" type="button" className="me-2" onClick={handleCloseModal}>
            {t('homePage.modals.declineButton')}
          </Button>
          <Button variant="danger" type="submit" onClick={handleRemoveChannel} disabled={status === 'pending'}>
            {t('homePage.modals.deleteButton')}
          </Button>
        </FormGroup>
      </Modal.Body>
    </Modal>
  );
};

export default RemoveChannel;
