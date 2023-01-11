import styled from "@emotion/styled";
import { BiBath, BiArea, BiBed } from "react-icons/bi"
import { FaPaw } from "react-icons/fa"
import { useState, useEffect } from "react";
import { colors, typography } from "../styles";
import { Icons } from "../utils";
import { showProperty } from "../services/properties-service";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 80%;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 80%;
`;

const SliderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 64px;
  gap: 10px;

  width: 830px;
  height: 384px;
`;

const Image = styled.img`
  width: 512px;
  height: 360px;
  border-top:12px solid ${colors.backgroundLight};
  border-bottom: 12px solid ${colors.backgroundLight};
`;

const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 766px;
`;

const Category = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 10px;

  width: 766px;
  height: 76px;
`;

const Address = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  width: 600px;
  height: 76px;
`;

const TotalCost = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  padding: 0px;

  width: 166px;
  height: 76px;
`;

const Price = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0px;
  color: ${colors.gray.dark}

  width: 166px;
  height: 40px;
`;

const Maintenance = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0px;

  width: 166px;
  height: 28px;
`;

const Features = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content:center;
  padding: 0px;
  gap: 16px;

  width: 766px;
  height: 66px;

  border-top: 1px solid ${colors.pink.dark};
  border-bottom: 1px solid ${colors.pink.dark};
`;

const SubFeatures = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  gap: 16px;

  width: 766px;
  height: 32px;
`;

const Feature = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 4px;

`;

const BigAddress = styled.h1`
  ${typography.head.md}
`;
const PriceText = styled.h4`
  ${typography.head.sm}
  color: ${colors.gray.dark}
`;
const MaintenanceText = styled.h6`
  ${typography.head.xs}
  color: ${colors.gray.light}
`;

const FeatureText = styled.h5`
  ${typography.head.sm}
  color: ${colors.gray.medium}
`;

const LeftIcon = styled.div`
  color:${colors.gray.medium};
`;
const RightIcon = styled.div`
  color:${colors.gray.medium};
`;

export default function PropertyPage() {
  // const [property, setProperty] = useState(null);
  // console.log('PROPERTY', property)

  // useEffect(() => {
  //   showProperty(1).then(setProperty);
  // }, []);


  return (
    <Wrapper>
      <InfoContainer>
        <h1>Propery Page</h1>
        <SliderContainer>
          <LeftIcon>
            {Icons.arrowLeft}
          </LeftIcon>
          <Image src={'https://www.musicmundial.com/wp-content/uploads/2023/01/Lee-know-de-Stray-Kids-sorprende-a-sus-fans-estadounidenses-por-su-extrema-belleza.jpg'}></Image>
          <RightIcon>
            {Icons.arrowRight}
          </RightIcon>
        </SliderContainer>
        <InformationContainer>
          <Category>
            <Address>
              <BigAddress>La direccion que bajeee</BigAddress>
            </Address>
            <TotalCost>
              <Price><PriceText>{Icons.dollarCircle} 3000</PriceText></Price>
              <Maintenance><MaintenanceText>+100</MaintenanceText> </Maintenance>
            </TotalCost>
          </Category>
          <Features>
            <SubFeatures>
              <Feature>
                <FeatureText>
                  <BiBed style={{ width: "20px", height: "20px" }} /> 4 bedrooms
                </FeatureText>
              </Feature>
              <Feature>
                <FeatureText>
                  <BiBath style={{ width: "20px", height: "20px" }} /> 4 bathrooms
                </FeatureText>
              </Feature>
              <Feature>
                <FeatureText>
                  <BiArea style={{ width: "20px", height: "20px" }} /> 180 m2
                </FeatureText>
              </Feature>
              <Feature>
                <FeatureText>
                  <FaPaw style={{ width: "20px", height: "20px" }} /> Pets allowed
                </FeatureText>
              </Feature>
            </SubFeatures>
          </Features>
        </InformationContainer>


      </InfoContainer>
      {/* <RightContainer>

      </RightContainer> */}

    </Wrapper>
  )
}