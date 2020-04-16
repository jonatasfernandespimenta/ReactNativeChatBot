import styled, {css} from 'styled-components/native';

export const Container = styled.View`
  border-radius: 20px;
  background-color: #cdf4f7;
  padding: 8px 16px;
  ${({ received }) => css`
    align-self: ${received ? 'flex-start': 'flex-end'};
    background: ${received ? '#cdf4f7': '#b5f3f7'};
  `};
  margin: 5px;
`;

export const Text = styled.Text`
  font-size: ${({ size }) => size ? size + 'px' : '16px'};
  color: ${({ color }) => color || '#000'};
`;

export const Author = styled.View`
  flex-direction: row;
  justify-content: ${({ received }) => received ? 'flex-start' : 'flex-end'};
`;

export const Message = styled.View`
  flex-direction: row;
  justify-content: ${({ received }) => received ? 'flex-start' : 'flex-end'};
`;

// Mensagem enviada -> #b5f3f7
