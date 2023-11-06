import styled from "styled-components"

interface Props {
  width?: string;
  height?: string;
  padding?: string;
  margin?: string;
  children: string;
}

const Button = ({ width, height, padding, margin, children }: Props) => {
  const Button = styled.button`
    width: ${width};
    height: ${height};
    padding: ${padding};
    margin: ${margin};
    color: white;
    background-color: #007FFF;
    border: none;
    border-radius: 5px;
  `
  return <Button>{children}</Button>
}

export default Button;