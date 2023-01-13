import styled from "@emotion/styled";
import buildings from "../../assets/picture.svg";
import { colors, typography } from "../../styles";

import { SearchButton } from "../Button";
import Input from "../Input";

const Section1 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    height: 600px;
    left: 0px;
    top: 1588px;
`;
const TitleContainer = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap:8px;
  color:${colors.gray.dark}
`;
const Section1Title = styled.h1`
  margin: 0px;
  ${typography.head.xl};
`;
const Section1Subtitle = styled.h4`
  margin: 0px;
  ${typography.head.sm};
`;
const FiltersContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  gap: 8px;
  margin-top:64px;
  boder: 1px solid black;

  width: 800px;
  height: 72px;
  left: 320px;
  top: 252px;

  background: ${colors.white};

  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;

  width: 160px;
  height: 56px;
`;
const InputContainer2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;

  width: 304px;
  height: 56px;
`;
const InputLabel = styled.label`
  ${typography.text.xxs};
  color: ${colors.gray.medium}
  margin-left:8px;
`;
const Select = styled.select`
  display: flex;
  justify-content: strech;
  width: 100%;
  ${typography.text.md};
  color: ${colors.gray.dark};
  border: none;
`;
export default function SectionMeetHome (){
    return(
        <Section1 style={{ backgroundImage: `url(${buildings})`, backgroundPosition: 'center' }}>
            <TitleContainer>
                <Section1Title> Meet your new home</Section1Title>
                <Section1Subtitle>The easiest way to find where you belong</Section1Subtitle>
            </TitleContainer>
            <FiltersContainer>
            <InputContainer>
                <InputLabel htmlFor="lookType">I'M LOOKING FOR</InputLabel>

                <Select name="types" id="lookType">
                <option value="apartment">An Apartment</option>
                <option value="house">A House</option>
                </Select>
            </InputContainer>
            <InputContainer>
                <InputLabel htmlFor="wantType">I WANT TO</InputLabel>

                <Select name="types2" id="wantType">
                <option value="rent">Rent</option>
                <option value="sale">Sale</option>
                </Select>
            </InputContainer>
            <InputContainer2>
                <input value={} onChange={handleChange}/>
            </InputContainer2>
            <SearchButton>SEARCH</SearchButton>
            </FiltersContainer>
      </Section1>
    )
}