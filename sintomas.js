// Definir função
function ResultadoNauseasEVomitos({
    caracteristicaSintomas,
    localizacaoDor,
    fatorPiora,
    diabetesOuIdoso,
    historicoProblemas
  }) {
    let sintomasPositivos = 0;
  
    const sintomasCriticos = [
      "Enjoo constante",
      "Vômito em jato",
      "Vômito com sangue",
      "Vômito com cheiro ou cor estranhos",
      "Incapacidade de segurar líquidos"
    ];
  
    const doresAssociadas = [
      "Dor no estômago (barriga superior)",
      "Dor no peito",
      "Dor de cabeça",
      "Dor nas costas",
      "Dor abdominal intensa"
    ];
  
    const fatoresDePiora = [
      "Alimentação",
      "Movimentos bruscos",
      "Estresse",
      "Odores fortes"
    ];
  
    const sinaisDiabeticosOuIdosos = [
      "Desidratação (boca seca, urina escura)",
      "Confusão mental",
      "Sonolência extrema",
      "Palpitações",
      "Queda de pressão"
    ];
  
    if (sintomasCriticos.includes(caracteristicaSintomas)) sintomasPositivos++;
    if (doresAssociadas.includes(localizacaoDor)) sintomasPositivos++;
    if (fatoresDePiora.includes(fatorPiora)) sintomasPositivos++;
    if (sinaisDiabeticosOuIdosos.includes(diabetesOuIdoso)) sintomasPositivos++;
  
    const historicoCritico = "já tive gastrite, úlcera ou refluxo e é parecido";
    const historicoPositivo = historicoProblemas.toLowerCase() === historicoCritico;
  
    if (sintomasPositivos >= 2 || historicoPositivo) {
      return "PROCURE UM HOSPITAL";
    } else if (sintomasPositivos === 1) {
      return "PROCURE UMA UPA";
    } else {
      return "MONITORE OS SINTOMAS";
    }
  }
  
  const testes = [
    {
      descricao: "Caso com 2 sintomas críticos",
      entrada: {
        caracteristicaSintomas: "Enjoo constante",
        localizacaoDor: "Dor no peito",
        fatorPiora: "Nenhum",
        diabetesOuIdoso: "Não sou diabético ou tenho mais que 65 anos",
        historicoProblemas: "NUNCA TIVE OU OS SINTOMAS SÃO DIFERENTES"
      },
      esperado: "PROCURE UM HOSPITAL"
    },
    {
      descricao: "Caso com apenas 1 sintoma crítico",
      entrada: {
        caracteristicaSintomas: "Vômito em jato",
        localizacaoDor: "Nenhum",
        fatorPiora: "Nenhum",
        diabetesOuIdoso: "Nenhum",
        historicoProblemas: "NUNCA TIVE OU OS SINTOMAS SÃO DIFERENTES"
      },
      esperado: "PROCURE UMA UPA"
    },
    {
      descricao: "Caso com histórico de problemas gástricos",
      entrada: {
        caracteristicaSintomas: "Nenhum",
        localizacaoDor: "Nenhum",
        fatorPiora: "Nenhum",
        diabetesOuIdoso: "Nenhum",
        historicoProblemas: "JÁ TIVE GASTRITE, ÚLCERA OU REFLUXO E É PARECIDO"
      },
      esperado: "PROCURE UM HOSPITAL"
    },
    {
      descricao: "Caso sem sintomas críticos e sem histórico",
      entrada: {
        caracteristicaSintomas: "Nenhum",
        localizacaoDor: "Nenhum",
        fatorPiora: "Nenhum",
        diabetesOuIdoso: "Nenhum",
        historicoProblemas: "NUNCA TIVE OU OS SINTOMAS SÃO DIFERENTES"
      },
      esperado: "MONITORE OS SINTOMAS"
    }
  ];
  
  testes.forEach(({ descricao, entrada, esperado }, index) => {
    const resultado = ResultadoNauseasEVomitos(entrada);
    console.log(`Teste ${index + 1}: ${descricao}`);
    console.log(`Esperado: ${esperado}, Obtido: ${resultado}`);
    console.log(resultado === esperado ? "✓ Sucesso" : "✗ Falha");
    console.log("-------------");
  });
  

  function ResultadoSintomasUrinario({
    frequenciaUrinaria,
    nicturia,
    aspectoUrina,
    dorAoUrinar,
    volumeUrinario,
    sintomasAssociados = []
}) {
    let resultado = "Sem sintomas graves detectados.";

    if (aspectoUrina === "Com sangue" ||
        dorAoUrinar === "intensa" ||
        sintomasAssociados.includes("Febre") ||
        sintomasAssociados.includes("Dor abdominal ou lombar")) {
        resultado = "PROCURE UM HOSPITAL.";
    } else if (
        (dorAoUrinar === "leve ardencia" || frequenciaUrinaria > 7) &&
        !sintomasAssociados.includes("Febre") &&
        !sintomasAssociados.includes("Dor abdominal ou lombar")
    ) {
        resultado = "VÁ PARA UMA UPA.";
    } else if (
        aspectoUrina === "Turva" || dorAoUrinar === "leve ardencia"
    ) {
        resultado = "VÁ A UMA UNIDADE BÁSICA DE SAÚDE (UBS).";
    }

    return resultado;
}


// Testes
const testesSistemasUrinario = [
    {
      descricao: "Caso crítico com sintomas graves para hospital",
      entrada: {
        frequenciaUrinaria: 8,
        nicturia: true,
        aspectoUrina: "Com sangue",
        dorAoUrinar: "intensa",
        volumeUrinario: "Grande quantidade com frequência",
        sintomasAssociados: ["Febre", "Dor abdominal ou lombar"]
      },
      esperado: "PROCURE UM HOSPITAL."
    },
    {
      descricao: "Caso para UPA com ardência leve e alta frequência",
      entrada: {
        frequenciaUrinaria: 8,
        nicturia: false,
        aspectoUrina: "Amarelo claro a escuro",
        dorAoUrinar: "leve ardencia",
        volumeUrinario: "normal",
        sintomasAssociados: []
      },
      esperado: "VÁ PARA UMA UPA."
    },
    {
      descricao: "Caso para UBS com urina turva e sem sintomas graves",
      entrada: {
        frequenciaUrinaria: 5,
        nicturia: false,
        aspectoUrina: "Turva",
        dorAoUrinar: "sem dor",
        volumeUrinario: "normal",
        sintomasAssociados: []
      },
      esperado: "VÁ A UMA UNIDADE BÁSICA DE SAÚDE (UBS)."
    },
    {
      descricao: "Caso sem sintomas graves",
      entrada: {
        frequenciaUrinaria: 6,
        nicturia: false,
        aspectoUrina: "Transparente",
        dorAoUrinar: "sem dor",
        volumeUrinario: "normal",
        sintomasAssociados: []
      },
      esperado: "Sem sintomas graves detectados."
    }
  ];
  
  console.log("\nTestes do sistema urinário:\n");
  
  testesSistemasUrinario.forEach(({ descricao, entrada, esperado }, index) => {
    const resultado = ResultadoSintomasUrinario(entrada);
    console.log(`Teste ${index + 1}: ${descricao}`);
    console.log(`Esperado: ${esperado}, Obtido: ${resultado}`);
    console.log(resultado === esperado ? "✓ Sucesso" : "✗ Falha");
    console.log("-------------");
  });
  