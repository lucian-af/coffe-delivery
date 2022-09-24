import { useFormContext } from "react-hook-form";
import { FormContainer, Row, Input, Opcional } from "./styles";

export function EnderecoForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <FormContainer>
      <Row>
        <Input sizeInput={"200px"}>
          <input placeholder="CEP" id="cep" {...register("cep")} />
          <small>{errors.cep?.message?.toString()}</small>
        </Input>
      </Row>
      <Row>
        <Input>
          <input
            placeholder="Rua"
            id="logradouro"
            {...register("logradouro")}
          />
          <small>{errors.logradouro?.message?.toString()}</small>
        </Input>
      </Row>
      <Row>
        <Input sizeInput={"200px"}>
          <input placeholder="Número" id="numero" {...register("numero")} />
          <small>{errors.numero?.message?.toString()}</small>
        </Input>
        <Input>
          <div>
            <input
              placeholder="Complemento"
              id="complemento"
              {...register("complemento")}
            />
            <Opcional hidden={false}>Opcional</Opcional>
          </div>
          <small>{errors.complemento?.message?.toString()}</small>
        </Input>
      </Row>
      <Row>
        <Input sizeInput={"200px"}>
          <input placeholder="Bairro" id="bairro" {...register("bairro")} />
          <small>{errors.bairro?.message?.toString()}</small>
        </Input>
        <Input>
          <input placeholder="Cidade" id="cidade" {...register("cidade")} />
          <small>{errors.cidade?.message?.toString()}</small>
        </Input>

        <Input sizeInput={"60px"}>
          <input placeholder="UF" id="uf" {...register("uf")} />
          <small>{errors.uf?.message?.toString()}</small>
        </Input>
      </Row>
    </FormContainer>
  );
}
