import React, { useState } from 'react';
import { func } from 'prop-types';
import DrawerMenuItem from './DrawerMenuItem';
import images from './images';
import { routes } from '../../../config/router';
import { Wrapper } from './DrawerMenu.style';
import { withRouter } from 'react-router';

const items = [{
  icon: images.calendar,
  title: 'Exhibitions & Events',
  url: routes.EXHIBITIONS.url,
}, {
  icon: images.shapes,
  title: 'Artists & Networks',
  url: '#',
}, {
  icon: images.cube,
  title: 'Collections',
  url: routes.COLLECTIONS.url,
}, {
  icon: images.ticket,
  title: 'Plan Your Visit',
  url: routes.TICKETS.url,
}, {
  icon: images.memberCard,
  title: 'Become a Member',
  url: '#',
}, {
  icon: images.shop,
  title: 'Shop',
  url: routes.SHOP.url,
}];

const DrawerMenu = ({ onItemClick, history, ...props }) => {
  const [search, setSearchValue] = useState('');
  return (
    <Wrapper>
      <DrawerMenuItem
        icon={images.search}
        input={{
          placeholder: 'Search',
          name: 'search',
          value: search,
          color: '#FFF',
          backgroundColor: 'transparent',
          onChange: e => setSearchValue(e.target.value),
        }}
        header
      />
      {items.map((item, index) => (
        <DrawerMenuItem
          button
          icon={item.icon}
          title={item.title}
          key={`drawer-menu-${index}`}
          onItemClick={() => history.push(item.url)}
        />
      ))}
    </Wrapper>
  )
}

DrawerMenu.propTypes = {
  onItemClick: func,
}

DrawerMenu.defaultProps = {
}

export default withRouter(DrawerMenu);
