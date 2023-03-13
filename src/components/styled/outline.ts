import { ThemeWithProps } from '@ui/interfaces';
import { outlineLinkColor, outlineLinkSize, outlineLiPadding, outlineUlMargin, outlineUlPadding, outlineUlTagColor, outlineUlTagHeight, outlineUlTagRadius, outlineUlTagShow, outlineUlTagTop, outlineUlTagWidth } from 'components/foundation/outline';
import { IOutlineItemProps, IOutlineProps } from 'components/interfaces/outline';
import styled from 'styled-components';

export const OutlineList = styled.ul<ThemeWithProps<IOutlineProps>>`
  width: auto;
  margin-left: ${outlineUlMargin};
  padding-left: ${outlineUlPadding};
  position: relative;
  &::after {
    border-radius: ${outlineUlTagRadius};
    display: ${outlineUlTagShow};
    position: absolute;
    content: '';
    left: 0;
    top: ${outlineUlTagTop};
    width: ${outlineUlTagWidth};
    height: ${outlineUlTagHeight};
    background-color: ${outlineUlTagColor};
    transition: all 0.3s ease 0s;
  }
`;

export const OutlineItem = styled.li<ThemeWithProps<Omit<IOutlineItemProps, 'index'>>>`
  cursor: pointer;
  padding: ${outlineLiPadding};
  box-sizing: border-box;
  & a {
    display: inline-block;
    height: 20px;
    line-height: 20px;
    margin: 5px 0px;
  }
`;

export const OutlineLink = styled.a`
  text-decoration: none;
  font-size: ${outlineLinkSize};
  color: ${outlineLinkColor};
`;