import { HiArrowLeft } from 'react-icons/hi';
import { StyledLink } from './BackLink.styled';
import PropTypes from 'prop-types';

export const BackLink = ({ to, children }) => {
  // function handleClick() {
  //   window.history.back();
  // }
  return (
    <StyledLink to={to}>
      <HiArrowLeft size="24" />
      {children}
    </StyledLink>
  );
};

BackLink.propTypes = {
  to: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
    search: PropTypes.string.isRequired,
  }),
  children: PropTypes.node.isRequired,
};
