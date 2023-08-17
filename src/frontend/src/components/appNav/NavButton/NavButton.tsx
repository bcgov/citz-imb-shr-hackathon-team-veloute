/**
 * @summary A reusable nav button component used for routing to different pages
 * @param path - is the path the Link will route to
 * @param text - is the text displayed on the button
 * @param hex - HexValue for the Nav Button background
 * @param icon - Image to place in Nav Container
 * @type {(path: string, text: string, icon: string, hex: string)}
 * @author Dallas Richmond, LocalNewsTV
 */
import {
  Link,
} from 'react-router-dom';
import {
  ButtonCont,
  TextCont,
} from './navButton.styles';

export type RoutingLinkProps = {
  path: string;
  text: string;
  hex: string;
}

export default function NavButton({
  path,
  text,
  hex,
}: RoutingLinkProps) {
  return (
    <Link to={path} style={{ textDecoration: 'none' }}>
      <ButtonCont hex={hex}>
        <TextCont>
          {text}
        </TextCont>
      </ButtonCont>
    </Link>
  );
}
