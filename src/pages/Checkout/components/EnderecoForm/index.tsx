import { FormContainer, Row, Input } from "./styles";

export function EnderecoForm() {
  return (
    <FormContainer>
      <Row>
        <Input placeholder="CEP" sizeInput={"200px"} />
      </Row>
      <Row>
        <Input placeholder="Rua" />
      </Row>
      <Row>
        <Input placeholder="Número" sizeInput={"200px"} />
        <Input placeholder="Complemento" />
      </Row>
      <Row>
        <Input placeholder="Bairro" sizeInput={"200px"} />
        <Input placeholder="Cidade" />
        <Input placeholder="UF" sizeInput={"60px"} />
      </Row>
    </FormContainer>
  );
}
