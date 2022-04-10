import styled from 'styled-components';

/* eslint-disable-next-line */
export interface HeaderProps {}

const StyledHeader = styled.div`
  color: red;
`;

export function Header(props: HeaderProps) {
  return (
    <StyledHeader>
      <h1>This is Header!</h1>
    </StyledHeader>
  );
}

export default Header;
