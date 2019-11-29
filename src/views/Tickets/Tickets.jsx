import React, { useState } from 'react';
import { Tabs, TabPanel } from '../../components';
import moment from 'moment';
import PricingBox from './PricingBox';
import DateInfo from './DateInfo';
import Summary from './Summary';
import { getFormattedDate, getHour } from '../../config/dateManager';
import { Wrapper, Title, Subtitle, PricingsWrapper, Button, TitleWrapper } from './Tickets.style';

const items = [{
  title: 'Today',
  date: moment(),
  timeFrom: moment().minute(0).hour(12),
  timeTo: moment().minute(0).hour(19),
}, {
  title: 'Tomorrow',
  date: moment().add(1, 'days'),
  timeFrom: moment().minute(30).hour(10),
  timeTo: moment().minute(30).hour(17),
}, {
  title: 'Other',
}];

const DATE_INFO_FORMAT = 'MMMM D, YYYY';

const basePrice = 10;

const pricings = [{
  title: 'Adults',
  price: basePrice,
}, {
  title: 'Seniors',
  subtitle: '65+ with ID',
  price: basePrice * 0.6,
}, {
  title: 'Students',
  subtitle: 'with ID',
  price: basePrice * 0.8,
}]

const Tickets = ({...props }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [tickets, setTickets] = useState({
    adults: 0,
    seniors: 0,
    students: 0,
  });
  const onChange = (pricing, quantity) => {
    const newTickets = { ...tickets };
    newTickets[pricing] = quantity;
    return setTickets(newTickets);
  }
  const getPrice = () => Object.keys(tickets)
    .reduce((prev, curr) => {
      const price = pricings.find((item) => item.title.toLowerCase() === curr).price;
      return prev + price * tickets[curr];
    }, 0)
  return (
    <Wrapper>
      <TitleWrapper>
        <Title>{'Skip the Line.\nPurchase Tickets.'}</Title>
        <Subtitle>{'All exhibitions, audio tours, and films included in the price of admission.'}</Subtitle>
      </TitleWrapper>
      <Tabs activeTab={activeTab} onTabClick={setActiveTab} titles={items.map(item => item.title)} />
      <TabPanel index={activeTab}>
        {items.map(item => (
          <DateInfo
            title={item.date ? getFormattedDate(item.date, DATE_INFO_FORMAT) : 'No other exhibitions available'}
            subtitle={item.timeFrom && item.timeTo ? `Open ${getHour(item.timeFrom)} - ${getHour(item.timeTo)}` : ''}
          />
          )
        )}
      </TabPanel>
      <PricingsWrapper>
        {pricings.map((pricing, index) => {
          const key = pricing.title.toLowerCase();
          const onItemChange = (quantity) => onChange(key, quantity);
          return <PricingBox key={`pricing-${index}`} quantity={tickets[key]} onChange={onItemChange} title={pricing.title} subtitle={pricing.subtitle} />
        })}
      </PricingsWrapper>
      <Summary quantity={getPrice()} title="Total" />
      <Button>Continue to Payment</Button>
    </Wrapper>
  )
}

export default Tickets;
