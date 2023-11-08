import styled from "styled-components";
import { MouseEventHandler } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  width?: string;
  height?: string;
  padding?: string;
  margin?: string;
  children: string;
}

const StyledButton = styled.button<Props>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  color: white;
  background-color: #007fff;
  border: none;
  border-radius: 5px;
`;

const Button = ({ width, height, padding, margin, children }: Props) => {
  const navigate = useNavigate();
  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    navigate("/contact");
  };

  return (
    <StyledButton width={width} height={height} padding={padding} margin={margin} onClick={handleClick}>
      {children}
    </StyledButton>
  );
};

export default Button;





