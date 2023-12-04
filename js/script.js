import { calcularImpostos } from "./services/calcularImpostos.js";

const nfseFormElement = document.querySelector("#nfse-form");
const nfseDataDivElement = document.querySelector("#nfse-data");

nfseFormElement.addEventListener("submit", formSubmissionHandler);

function formSubmissionHandler(event) {
  event.preventDefault();

  const prestadorNomeValue = document.querySelector("#prestador-nome").value;
  const prestadorCNPJValue = document.querySelector("#prestador-cnpj").value;
  const prestadorInscricaoValue = document.querySelector("#prestador-inscricao").value;
  const prestadorEnderecoValue = document.querySelector("#prestador-endereco").value;
  const prestadorMunicipioValue = document.querySelector("#prestador-municipio").value;
  const prestadorUFValue = document.querySelector("#prestador-uf").value;
  const prestadorSimplesNacionalValue = getSimplesNacionalValue(document.getElementsByName("simples-nacional"));

  const tomadorNomeValue = document.querySelector("#tomador-nome").value;
  const tomadorCPFCNPJValue = document.querySelector("#tomador-cpf-cnpj").value;
  const tomadorInscricaoValue = document.querySelector("#tomador-inscricao").value;
  const tomadorEnderecoValue = document.querySelector("#tomador-endereco").value;
  const tomadorMunicipioValue = document.querySelector("#tomador-municipio").value;
  const tomadorUFValue = document.querySelector("#tomador-uf").value;

  const servicoDataCompetenciaValue = formatDateInputValueToLocaleDateString(
    document.querySelector("#data-competencia").value
  );
  const servicoValorValue = document.querySelector("#servico-valor").value;
  const servicoMunicipioValue = document.querySelector("#servico-municipio").value;
  const servicoUFValue = document.querySelector("#servico-uf").value;
  const servicoCodigoValue = document.querySelector("#servico-codigo").value;
  const servicoDescricaoValue = document.querySelector("#servico-descricao").value;
  const aliquotaISS = document.querySelector("#aliquota-iss").value;
  const aliquotaCOFINS = document.querySelector("#aliquota-cofins").value;
  const aliquotaCSLL = document.querySelector("#aliquota-csll").value;
  const aliquotaICMS = document.querySelector("#aliquota-icms").value;

  const valoresDosImpostos = calcularImpostos(
    servicoValorValue,
    aliquotaISS,
    aliquotaCOFINS,
    aliquotaCSLL,
    aliquotaICMS
  );

  nfseDataDivElement.innerHTML = `
    <h5>Prestador</h5>
    <p>Nome/razão social: ${prestadorNomeValue}</p>
    <p>CNPJ: ${prestadorCNPJValue}</p>
    <p>Inscrição Municipal: ${prestadorInscricaoValue}</p>
    <p>Endereço: ${prestadorEnderecoValue}</p>
    <p>Município: ${prestadorMunicipioValue}</p>
    <p>UF: ${prestadorUFValue}</p>
    <p>Simples Nacional: ${prestadorSimplesNacionalValue}</p>

    <h5>Tomador</h5>
    <p>Nome/razão social: ${tomadorNomeValue}</p>
    <p>CNPJ: ${tomadorCPFCNPJValue}</p>
    <p>Inscrição Municipal: ${tomadorInscricaoValue}</p>
    <p>Endereço: ${tomadorEnderecoValue}</p>
    <p>Município: ${tomadorMunicipioValue}</p>
    <p>UF: ${tomadorUFValue}</p>

    <h5>Serviço</h5>
    <p>Data de competência: ${servicoDataCompetenciaValue}</p>
    <p>Valor total do serviço: R$ ${servicoValorValue}</p>
    <p>Município: ${servicoMunicipioValue}</p>
    <p>UF: ${servicoUFValue}</p>
    <p>Código do tipo de serviço: ${servicoCodigoValue}</p>
    <p>Descrição do serviço: ${servicoDescricaoValue}</p>
    <p>ISS: R$ ${valoresDosImpostos.ISS}</p>
    <p>COFINS: R$ ${valoresDosImpostos.COFINS}</p>
    <p>CSLL: R$ ${valoresDosImpostos.CSLL}</p>
    <p>ICMS: R$ ${valoresDosImpostos.ICMS}</p>
  `;
}

function getSimplesNacionalValue(radiosGroup) {
  for (let i = 0; i < radiosGroup.length; i++) {
    if (radiosGroup[i].checked) {
      return radiosGroup[i].value;
    }
  }
}

function formatDateInputValueToLocaleDateString(dateInputValue) {
  const formattedDate = new Date(dateInputValue).toLocaleDateString();
  return formattedDate;
}
