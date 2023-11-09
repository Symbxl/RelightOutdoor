import { useForm, Controller } from 'react-hook-form';
import styled from "styled-components"

interface FormData {
  name: string;
  email: string;
  number: string;
  referral: string;
  message: string;
}

const ContactForm = () => {
  const { handleSubmit, control } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data)
    alert("thank you! We will be contacting shortly!")
  };

  return <Container>
    <FormContainer onSubmit={handleSubmit(onSubmit)} id="form">
      <Title>Contact 👋</Title>
      <FormSection>
        <FormControl>
          <Label htmlFor="name">Your Name</Label>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => <Input {...field} type="text" placeholder="Name" id="name" />}
          />
        </FormControl>
        <FormControl>
          <Label htmlFor="email">Your Email</Label>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={{ required: true, pattern: /^\S+@\S+$/i }}
            render={({ field }) => <Input {...field} type="email" placeholder="Email" id="email" />}
          />
        </FormControl>
        <FormControl>
          <Label htmlFor="number">Phone Number</Label>
          <Controller
            name="number"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => (
              <Input {...field} type="text" placeholder="Phone Number" id="phone" />
            )}
          />
        </FormControl>
        <FormControl>
          <Label htmlFor="referral">How did you hear about us?</Label>
          <Controller
            name="referral"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => (
              <Select {...field} id="referral">
                <Option disabled value="">
                  Select Social Media
                </Option>
                <Option>Instagram</Option>
                <Option>Twitter</Option>
                <Option>Threads</Option>
                <Option>Facebook</Option>
                <Option>Other</Option>
              </Select>
            )}
          />
        </FormControl>
        <FormControl>
          <Label htmlFor="message">Message</Label>
          <Controller
            name="message"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => <TextArea {...field} placeholder="Message" id="message" />}
          />
        </FormControl>
      </FormSection>
      <SubmitButton type="submit">Submit</SubmitButton>
    </FormContainer>
  </Container>

};

export default ContactForm;

const Container = styled.section`
  height: auto;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 600px) {
    align-items: flex-start;
  }
  margin: 1rem 0;
`;

const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  align-self: center;
`;

const Label = styled.label`
  font-size: 15px;
  margin-bottom: 8px;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 850px;
  width: 90%;
  margin: 0;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  box-sizing: border-box;

`;

const Title = styled.h2`
  font-size: 35px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (min-width: 850px) {
    flex-direction: row;
    flex-wrap: wrap;
    & > div {
      width: calc(50% - 10px);
    }
  }
`;
const Input = styled.input`
  background-color: #f6f6f6;
  width: 350px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid white;
  font-size: 13px;
  ::placeholder {
  color: #dcdcdc;
}
`;

const Select = styled.select`
  background-color: #f6f6f6;
  width: 375px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid white;
  font-size: 14px;
  appearance: none;
  ::placeholder {
  color: #dcdcdc;
}
`;

const Option = styled.option``;

const TextArea = styled.textarea`
  width: 350px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #dcdcdc;
  font-size: 13px;
  resize: vertical;
  height: 120px;
  ::placeholder {
  color: #dcdcdc;
}
`;

const SubmitButton = styled.button`
  width: 360px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: black;
  align-self: start;
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  margin: 2rem;
  margin-left: 3rem;
  align-self: center;

`;