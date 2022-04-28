import styled, { css } from 'styled-components';

export const Input = styled.input`
  ${({ theme, type }) => css`
    outline: none;
    padding: ${theme.spacings.xsmall};
    border: 1px solid ${theme.colors.thirdColor};
    border-radius: ${theme.spacings.xsmall};
  `}
`;

export const Label = styled.label`
  ${({ theme }) => css`
    color: ${theme.colors.thirdColor};
    margin-right: ${theme.spacings.xsmall};
  `}
`;