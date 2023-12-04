import { formatBRLToNumber } from "../utils/formatBRLToNumber.js";
import { formatNumberToBRL } from "../utils/formatNumberToBRL.js";
import { formatBRPercentageToNumber } from "../utils/formatBRPercentageToNumber.js";

export function calcularImpostos(valorDoServico, aliquotaISS, aliquotaCOFINS, aliquotaCSLL, aliquotaICMS) {
  const formattedValorDoServico = formatBRLToNumber(valorDoServico);

  const ISSPercentage = formatBRPercentageToNumber(aliquotaISS);
  const COFINSPercentage = formatBRPercentageToNumber(aliquotaCOFINS);
  const CSLLPercentage = formatBRPercentageToNumber(aliquotaCSLL);
  const ICMSPercentage = formatBRPercentageToNumber(aliquotaICMS);

  const ISSValue = formattedValorDoServico * ISSPercentage;
  const COFINSValue = formattedValorDoServico * COFINSPercentage;
  const CSLLValue = formattedValorDoServico * CSLLPercentage;
  const ICMSValue = formattedValorDoServico * ICMSPercentage;

  const valoresDosImpostos = {
    ISS: formatNumberToBRL(ISSValue),
    COFINS: formatNumberToBRL(COFINSValue),
    CSLL: formatNumberToBRL(CSLLValue),
    ICMS: formatNumberToBRL(ICMSValue),
  };

  return valoresDosImpostos;
}
