import styled from 'styled-components';

/* eslint-disable-next-line */
export interface FooterProps {}

const StyledFooter = styled.div`
  color: blue;
`;

export function Footer(props: FooterProps) {
  return (
    <StyledFooter>
      <h1>This is Footer!</h1>
    </StyledFooter>
  );
}

export default Footer;
