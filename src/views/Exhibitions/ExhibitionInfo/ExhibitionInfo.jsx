import React from 'react';
import { date, shape, string, number, arrayOf, func } from 'prop-types';
import { ExhibitionData } from '../../../components';
import { getFormattedDate, getHour } from '../../../config/dateManager';
import ExhibitionDetails from './ExhibitionDetails';
import { withRouter } from 'react-router';
import { routes } from '../../../config/router';
import icons from './images';
import { Wrapper, Content, Thumbnail, Button, Footer } from './ExhibitionInfo.style';

const ExhibitionInfo = ({
  data: {
    title,
    from,
    to,
    type,
    floor,
    timeFrom,
    timeTo,
    addressLine1,
    addressLine2,
  },
  images,
  openModal,
  history,
  ...props
}) => (
  <Wrapper>
    <Thumbnail onClick={openModal} src={images[0].src}/>
    <Content>
      <ExhibitionData
        title={title}
        type={type}
        subtitle={`${getFormattedDate(from)} - ${getFormattedDate(to)}`}
        floor={floor}
        onClick={openModal}
      />
      <Button onClick={() => history.push(routes.TICKETS.url)}>Plan Your Visit</Button>
      <Footer>
        <ExhibitionDetails icon={icons.pin} title={addressLine1} subtitle={addressLine2} iconStyle={{ marginRight: 5 }}/>
        <ExhibitionDetails icon={icons.clock} title="Open today" subtitle={`${getHour(timeFrom)}—${getHour(timeTo)}`} />
      </Footer>
    </Content>
  </Wrapper>
)

ExhibitionInfo.propTypes = {
  data: shape({
    title: string,
    type: string,
    addressLine1: string,
    addressLine2: string,
    to: date,
    from: date,
    timeTo: date,
    timeFrom: date,
    floor: number,
  }),
  images: arrayOf(shape({
    title: string,
    src: string,
    type: string,
    year: string,
  })).isRequired,
  openModal: func.isRequired,
}

ExhibitionInfo.defaultProps = {
}

export default withRouter(ExhibitionInfo);
