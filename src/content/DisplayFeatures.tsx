import styled from "styled-components"
import FeaturesCard from "../components/FeaturesCard"
const DisplayFeatures = () => {

  const items = [{ id: 1, icon: "src", title: "Pay monthly at 0% APR", description: "You can pay over time when you choose to check out with Paypal Monthly Installments." }, { id: 2, icon: "src", title: "Worry free installation", description: "desc" }, { id: 3, icon: "src", title: "Get help buying", description: "Have a question? Call a Specialist or chat online. Call (825) 973-7707" }]

  return <>
    <Container>
      <FeaturesCard items={items} />
    </Container>
  </>
}

export default DisplayFeatures;


const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  width: 100vw;
`