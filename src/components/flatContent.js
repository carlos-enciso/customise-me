import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: ${(props) => props.height}px;
`;

function FlatContent(props) {
  const { height } = props;
  return <Container height={height}></Container>;
}
FlatContent.propTypes = {
  height: PropTypes.string.isRequired,
};

export default FlatContent;
