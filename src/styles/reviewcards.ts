import styled from 'styled-components';

const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  gap: 1.5em;
  align-items: center;
  position: relative;
  height: 100%;
  padding-bottom: 0.5em;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: left;
  justify-content:left;
`;
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content:left;
`;

const ReviewCard = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.colors.white};
  padding: 1em;
  border-radius: 0.4em;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  min-height: 11em;
  height: 100%;
  min-width: 19em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const BottomContainer = styled.div`
  margin-top: 2em;
  display: flex;
  flex-direction: row;
  gap: 1em;
  justify-content: space-between;
  align-items: center;
`;

export { CardsContainer, ReviewCard, BottomContainer, InfoContainer, ProfileContainer };