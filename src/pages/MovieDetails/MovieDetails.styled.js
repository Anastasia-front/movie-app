import styled from 'styled-components';

export const FirstWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MainInfo = styled.div`
  display: flex;
`;

export const Poster = styled.img`
  max-width: 500px;
  max-height: 400px;
  border-radius: 7px;
`;

export const MainText = styled.div`
  margin-left: 30px;
`;

export const AdditionsUl = styled.ul`
  margin-bottom: 10px;
`;
export const AdditionsLi = styled.li`
  list-style: circle;
  margin-bottom: 10px;
  font-size: 18px;
  a {
    text-decoration: underline dotted;
    color: #7c5400;
  }
`;
export const Genres = styled.ul`
  display: flex;
  gap: 6px;
  padding: 0;
`;
export const Genre = styled.li`
  list-style: none;
  padding: 0 6px 0 0;
  :not(:last-child) {
    border-right: 1px solid grey;
  }
`;
