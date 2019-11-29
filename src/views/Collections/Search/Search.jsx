import React from 'react';
import { func, string } from 'prop-types';
import { Wrapper, Input, Link } from './Search.style';

const Search = ({ value, onChange, ...props }) => (
  <Wrapper>
    <Input
      value={value}
      onChange={e => onChange(e.target.value)}
      color="#FF473A"
      placeholder="Explore The Collection"
      inputProps={{ style: { fontSize: 18, lineHeight: 22 }}}
    />
    <Link>Advanced Search</Link>
  </Wrapper>
)

Search.propTypes = {
  value: string.isRequired,
  onChange: func.isRequired,
}

Search.defaultProps = {
}

export default Search;
