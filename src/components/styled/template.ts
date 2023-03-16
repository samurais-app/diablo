import { titleColor, titleFontSize, titleInfoFontSize } from 'components/foundation/template';
import styled from 'styled-components';

export const Title = styled.div`
  font-size: ${titleInfoFontSize};
  line-height: 1.33;
  font-weight: 500;
  letter-spacing: 0.02em;
  color: ${titleColor};
`;
export const TinyTitle = styled.div`
  font-size: ${titleFontSize};
  line-height: 1.2;
  font-weight: 600;
  margin: 16px 0 24px 0;
  color: ${titleColor};
`;