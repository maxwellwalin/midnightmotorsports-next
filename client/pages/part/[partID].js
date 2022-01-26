import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import Head from "next/head";
import styled from "styled-components";
import AddToCart from "../../components/AddToCart";
import ErrorMessage from "../../components/ErrorMessage";
import OrderStyles from "../../components/styles/OrderStyles";
import formatMoney from "../../lib/formatMoney";

const SINGLE_ITEM_QUERY = gql`
  query SINGLE_PART_QUERY($id: ID!) {
    part(where: { id: $id }) {
      id
      name
      partNumber
      description
      price
      quantity
      images {
        image {
          publicUrlTransformed
        }
      }
      model {
        name
      }
    }
  }
`;

const PartName = styled.h2`
  box-sizing: inherit;
  font-weight: 500;
  line-height: 1.2;
  font-size: 32px;
  font-family: Sora, sans-serif;
  margin: 0px;
  padding: 0px;
  text-align: center;
  padding-bottom: 32px;
`;

const UpperContainer = styled.div`
  box-sizing: inherit;
  font-family: Sora, sans-serif;
  margin: 0px;
  padding: 0px;
  display: flex;
  justify-content: space-between;
  [name="lowerContainer"] {
    margin-top: 5%;
    height: 140px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
  }

  [name="purchaseInfo"] {
    box-sizing: inherit;
    font-family: Sora, sans-serif;
    margin: 0px;
    padding: 0px;
    width: 400px;
    p {
      margin: 0;
      &[name="price"] {
        font-size: 32px;
      }
    }
  }
`;

const PartImage = styled.div`
  box-sizing: inherit;
  font-family: Sora, sans-serif;
  margin: 0px;
  padding: 0px;
  width: 520px;
  height: 400px;
  background-size: cover;
  background-position: center center;
  background-image: url(https://res.cloudinary.com/dtpgzynwd/image/upload/v1641106845/midnight-motorsports/61d14d9c2f6be7575cd6e893.jpg);
`;

export default function PartPage({ query }) {
  const { data, error, loading } = useQuery(SINGLE_ITEM_QUERY, {
    variables: { id: query.partID },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <ErrorMessage error={error} />;
  const { part } = data;
  return (
    <OrderStyles>
      <Head>
        <title>
          Midnight Motorsports | {part.model.name} {part.name}
        </title>
      </Head>
      <PartName>{part.name}</PartName>
      <UpperContainer>
        <PartImage
          name="img"
          style={{
            backgroundImage: `url(${part.images[0].image.publicUrlTransformed})`,
          }}
        >
          {/* <img src={part.images[0].image.publicUrlTransformed} alt={part.images[0].altText} /> */}
        </PartImage>
        <div name="purchaseInfo">
          <p name="price">{formatMoney(part.price)}</p>
          <div>
            <p name="partNumber">{part.partNumber}</p>
            <p name="partName">{part.model.name}</p>
          </div>
          <div name="lowerContainer">
            <p name="quantity">Units left: {part.quantity}</p>
            <AddToCart id={part.id} />
          </div>
        </div>
      </UpperContainer>
      <div name="description">
        <p>{part.description}</p>
      </div>
    </OrderStyles>
  );
}
