/**
 * @summary Reusable BC Gov Header Component
 * @author Dallas Richmond, LocalNewsTV
 */
import logo from '/logo-banner.svg';

import {
  HeaderWrapper,
  Heading,
  Banner,
  Image,
  StyledLink,
} from './header.styles';

export default function Header() {
  return (
    <HeaderWrapper>
      <Banner>
        <StyledLink href="https://www2.gov.bc.ca/gov/content/home">
          <Image src={logo} alt="Go to the BC Gov Home page" />
        </StyledLink>
        <StyledLink href="https://www2.gov.bc.ca/gov/content/home">
          <Heading>Team Veloute</Heading>
        </StyledLink>
      </Banner>
    </HeaderWrapper>
  );
}
