/**
 * @summary Reusable BC Gov Header Component
 */
import logo from '/logo-banner.svg';
import { BackNavButton } from '../..';

import {
  HeaderWrapper,
  Banner,
  Image,
  StyledLink,
  BannerLeft,
} from './header.styles';

export default function Header() {
  return (
    <HeaderWrapper>
      <BannerLeft>
        <BackNavButton />
      </BannerLeft>
      <Banner>
        <StyledLink href="/">
          <Image src={logo} alt="Go to the BC Gov Home page" />
        </StyledLink>
      </Banner>
    </HeaderWrapper>
  );
}
