import styled from 'styled-components';

const Separator = styled.div`
  width: 70px;
  border-top: 3px solid var(--primary);
  margin: 10px 0;

  @media(max-width: 900px) {
    width: 50px;
    border-top-width: 2px;
  }
`;

export default Separator;
