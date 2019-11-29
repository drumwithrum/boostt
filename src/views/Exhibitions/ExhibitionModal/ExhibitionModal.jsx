import React from 'react';
import ReactDOM from 'react-dom';
import ExhibitionPreview from '../../../views/ExhibitionPreview';
import { bool, object, func } from 'prop-types';
import { Wrapper } from './ExhibitionModal.style';

const Root = document.getElementById('root');

const ExhibitionModal = ({ open, closeModal, eventInfo, ...props }) => {
  console.log(eventInfo);
  return ReactDOM.createPortal(
    (<Wrapper isOpen={open}>
      <ExhibitionPreview onClose={closeModal} isDrawerOpen={open} data={eventInfo.info} headers={eventInfo.headers} images={eventInfo.images} />
    </Wrapper>),
    Root,
  )
}

ExhibitionModal.propTypes = {
  open: bool,
  eventInfo: object,
  closeModal: func.isRequired,
}

ExhibitionModal.defaultProps = {
  open: false,
}

export default ExhibitionModal;
