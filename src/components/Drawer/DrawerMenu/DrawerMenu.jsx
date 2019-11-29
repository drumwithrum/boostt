import React, { useState } from 'react';
import { func } from 'prop-types';
import DrawerMenuItem from './DrawerMenuItem';
import images from './images';
import { routes } from '../../../config/router';
import colors from '../../../config/colors';
import Input from '../../Input';
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
        header
      >
        <Input
          placeholder= "Search"
          name="search"
          value={search}
          color={colors.white}
          backgroundColor="transparent"
          onChange={e => setSearchValue(e.target.value)}
        />
      </DrawerMenuItem>
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
