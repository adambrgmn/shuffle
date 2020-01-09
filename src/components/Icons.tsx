import React from 'react';
import styled, { css } from 'styled-components';

export interface IconBaseProps {
  baseline?: boolean;
}

const IconWrapper = styled.span`
  position: relative;
  display: inline-flex;
  align-self: center;
  width: 1em;
  height: 1em;
`;

const IconSvg = styled.svg<{ baseline?: boolean }>`
  width: 1em;
  height: 1em;
  stroke: currentColor;
  fill: none;
  stroke-width: 2px;
  stroke-linejoin: round;
  stroke-linecap: round;

  ${({ baseline }) =>
    baseline &&
    css`
      position: absolute;
      bottom: -0.125em;
    `}
`;

IconSvg.defaultProps = {
  baseline: true,
};

/**
 * This Icon component can be used to wrap a set of svg elements and make them
 * align nicely with the elements around it.
 *
 * The `baseline` prop is useful if the icon is displayed next to text without
 * the use of flex to align elements. In that case the icon gets moved to match
 * the baseline of the text.
 *
 * Inspiration for this implementation is gather from the following link:
 *
 * @link https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4
 *
 * @param props Component base props
 * @param props.baseline The baseline prop will make the icon align well with surrounding/adjacent text without flexbox
 */
export const Icon: React.FC<IconBaseProps> = ({ baseline, children }) => {
  return (
    <IconWrapper>
      <IconSvg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        baseline={baseline}
      >
        {children}
      </IconSvg>
    </IconWrapper>
  );
};

export const ArrowRight: React.FC<IconBaseProps> = ({ baseline }) => {
  return (
    <Icon baseline={baseline}>
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </Icon>
  );
};
