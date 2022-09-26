import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { UF } from "../../../../data/data";
import { FormContainer, Row, Input, Opcional } from "./styles";

export function EnderecoForm() {
  const [cep, setCep] = useState("");
  const {
    register,
    formState: { errors },
  } = useFormContext();

  function maskCep(value: string) {
    if (value.length > 8) return;

    value = value.replace(/\D/g, "");
    value = value.replace(/^(\d{5})(\d{3})$/g, "$1-$2");

    setCep(value);
  }

  return (
    <FormContainer>
      <Row>
        <Input sizeInput={"200px"}>
          <input
            type="text"
            placeholder="CEP"
            id="cep"
            value={cep}
            {...register("cep", {
              onChange: (event) => maskCep(event.target.value),
            })}
          />
          <small>{errors.cep?.message?.toString()}</small>
        </Input>
      </Row>
      <Row>
        <Input>
          <input
            placeholder="Rua"
            type="text"
            id="logradouro"
            {...register("logradouro", {
              setValueAs: (value) => (value = value.toString().toUpperCase()),
            })}
          />
          <small>{errors.logradouro?.message?.toString()}</small>
        </Input>
      </Row>
      <Row>
        <Input sizeInput={"200px"}>
          <input
            placeholder="Número"
            type="text"
            id="numero"
            {...register("numero")}
          />
          <small>{errors.numero?.message?.toString()}</small>
        </Input>
        <Input>
          <div>
            <input
              placeholder="Complemento"
              type="text"
              id="complemento"
              {...register("complemento", {
                setValueAs: (value) => (value = value.toString().toUpperCase()),
              })}
            />
            <Opcional hidden={false}>Opcional</Opcional>
          </div>
          <small>{errors.complemento?.message?.toString()}</small>
        </Input>
      </Row>
      <Row>
        <Input sizeInput={"200px"}>
          <input
            placeholder="Bairro"
            type="text"
            id="bairro"
            {...register("bairro", {
              setValueAs: (value) => (value = value.toString().toUpperCase()),
            })}
          />
          <small>{errors.bairro?.message?.toString()}</small>
        </Input>
        <Input>
          <input
            placeholder="Cidade"
            type="text"
            id="cidade"
            {...register("cidade", {
              setValueAs: (value) => (value = value.toString().toUpperCase()),
            })}
          />
          <small>{errors.cidade?.message?.toString()}</small>
        </Input>

        <Input sizeInput={"80px"}>
          <select
            defaultValue={"UF"}
            {...register("uf", {
              setValueAs: (value) => (value = value.toString().toUpperCase()),
            })}
          >
            <option value="UF" disabled>
              UF
            </option>
            {UF.map((uf) => {
              return (
                <option key={uf.sigla} value={uf.sigla}>
                  {uf.sigla}
                </option>
              );
            })}
          </select>
          <small>{errors.uf?.message?.toString()}</small>
        </Input>
      </Row>
    </FormContainer>
  );
}
