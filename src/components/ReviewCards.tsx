import { SmallText, Text } from "../styles/common";
import clientDefault from '../assets/img/client_default.webp';
import { ProfileImgContainer } from "../styles/table";
import styled from 'styled-components';
import React from "react";

interface Review {
  id: number;
  customer_name: string;
  review_date: { text: string };
  comment: string;
  img: string | null;
}

interface ReviewCardsProps {
  data: Review[];
}

const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  gap: 1.5em;
  align-items: center;
  margin-bottom: 2em;
  position: relative;
  height: 100%;
  padding-bottom: 0.5em;
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

export const ReviewCards: React.FC<ReviewCardsProps> = ({ data }) => {
  return (
    <CardsContainer>
      {data.map((review) => (
        <ReviewCard key={"card"+review.id}>
          <Text maxwidth={"350px"}>{review.comment}</Text>
          <BottomContainer>
            <ProfileImgContainer>
              <img 
                src={review.img ? review.img : clientDefault} 
                alt="review profile customer" 
              />
            </ProfileImgContainer>
            <div>
              <Text><strong>{review.customer_name}</strong></Text>
              <SmallText>{review.review_date.text}</SmallText>
            </div>
            <div>
              <button>+</button>
              <button>-</button>
            </div>
          </BottomContainer>
        </ReviewCard> 
      ))}
    </CardsContainer>
  );
};
