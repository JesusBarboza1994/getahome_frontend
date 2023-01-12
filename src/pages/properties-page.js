
import { useAuth } from "../context/auth-context";
import { PropertyCard } from "../components/propertyCard";
import styled from "@emotion/styled";



const ContainerList = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
padding: 132px 184px 132px 184px;
row-gap: 32px;
column-gap: 86px;
justify-items:center;
justify-content:center;

// overflow-y: scroll;
// overflow-x:hidden;
`

export default function PropertiesPage(){
  const {properties}= useAuth();
  
  return(
    <ContainerList>
      {properties.map(property=>{
        return <PropertyCard property={property}/>
      })} 
    </ContainerList>
  
    )


}