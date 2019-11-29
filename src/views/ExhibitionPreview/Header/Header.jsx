import React, { useState } from 'react';
import { ExpandPanel } from '../../../components';
import { string, shape } from 'prop-types';
import chevronSrc from './images/chevron.svg';
import { Wrapper, Title, TitleWrapper, Icon, Description, Spacer } from './Header.style';

const Header = ({ data: { title, description }, ...props }) => {
  const [isExpanded, setExpansionState] = useState(false);
  return (
    <Wrapper>
      <TitleWrapper>
        <Title type="hint">
          {title}
        </Title>
        <Icon expanded={isExpanded} src={chevronSrc} onClick={() => setExpansionState(!isExpanded)} />
      </TitleWrapper>
      <ExpandPanel expanded={isExpanded} height={0}>
        <Description type="hint">
          {description}
        </Description>
      </ExpandPanel>
      <Spacer />
    </Wrapper>
  )
}

Header.propTypes = {
  data: shape({
    title: string,
    description: string,
  }).isRequired,
}

Header.defaultProps = {
  data: {
    title: '',
    description: '',
  }
}

export default Header;
