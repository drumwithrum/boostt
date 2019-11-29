import React, { useState } from 'react';
import ExhibitionInfo from './ExhibitionInfo';
import ExhibitionModal from './ExhibitionModal';
import { Wrapper } from './Exhibitions.style';
import events from './mocks';

const Exhibitions = ({...props }) => {
  const [openedExhibitionIndex, setExhibitionIndex] = useState(0);
  const [isModalOpen, setModalOpenState] = useState(false);
  const openModal = (index) => {
    setExhibitionIndex(index);
    setModalOpenState(true);
  };
  const closeModal = () => {
    setModalOpenState(false);
  };
  return(
    <Wrapper>
      <ExhibitionModal closeModal={closeModal} open={isModalOpen} eventInfo={events[openedExhibitionIndex]} />
      {events.map((item, index) => (
        <ExhibitionInfo
          data={item.info}
          key={`event-${index}`}
          images={item.images}
          headers={item.headers}
          openModal={() => openModal(index)}
        />
      ))}
    </Wrapper>
  );
}

export default Exhibitions;
