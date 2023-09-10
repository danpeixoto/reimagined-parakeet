"use strict";
function generateFileHeader() {
    const headerArquivo = {
        BancoCodigo: "341",
        Lote: "0000",
        Registro: "0",
        CNAB1: "         ",
        TipoInscricaoEmpresa: "1",
        NumeroInscricaoEmpresa: "12345678901234",
        Convenio: "aaaaaaaaaaaaaaaaaaaa",
        Agencia: "12345",
        DVAgencia: "6",
        Conta: "123456789012",
        DVConta: "7",
        DVAgenciaConta: "8",
        NomeEmpresa: "                              ",
        NomeBanco: "                              ",
        CNAB2: "          ",
        CodigoRemessaRetorno: "1",
        DataGeracaoArquivo: "20230907",
        HoraGeracaoArquivo: "123456",
        NumeroSequencialArquivo: "000001",
        LayoutArquivo: "103",
        DensidadeGravacaoArquivo: "12345",
        ReservadoBanco: "                    ",
        ReservadoEmpresa: "                    ",
        CNAB3: "                             ", // CNAB Uso Exclusivo FEBRABAN/CNAB
    };
    return Object.values(headerArquivo).join('') + '\n';
}
function generateFileTrailer() {
    const trailerArquivo = {
        BancoCodigo: "341",
        Lote: "9999",
        Registro: "9",
        CNAB1: "         ",
        QtdeLotes: "000001",
        QtdeRegistros: "000002",
        QtdeContasConciliacao: "000003",
        CNAB2: "                                                                                                                                                                                                             ", // CNAB Uso Exclusivo FEBRABAN/CNAB
    };
    return Object.values(trailerArquivo).join('') + '\n';
}
function generateBatchHeader() {
    const headerLote = {
        BancoCodigo: "341",
        Lote: "0001",
        Registro: "1",
        Operacao: "R",
        TipoServico: "01",
        CNAB1: "  ",
        LayoutLote: "060",
        CNAB2: " ",
        TipoInscricaoEmpresa: "1",
        NumeroInscricaoEmpresa: "123456789012345",
        Convenio: "aaaaaaaaaaaaaaaaaaaa",
        Agencia: "12345",
        DVC: "6",
        Conta: "123456789012",
        DVConta: "7",
        DVAgenciaConta: "8",
        NomeEmpresa: "                              ",
        Informacao1: "                                        ",
        Informacao2: "                                        ",
        NumeroRemessaRetorno: "00000001",
        DataGravacao: "20230907",
        DataCredito: "20230914",
        CNAB3: "                                 ", // CNAB Uso Exclusivo FEBRABAN/CNAB
    };
    return Object.values(headerLote).join('') + '\n';
}
function generateBatchTrailer() {
    const trailerLote = {
        BancoCodigo: "341",
        Lote: "0001",
        Registro: "5",
        CNAB1: "         ",
        QtdeRegistrosLote: "000010",
        QtdeTitulosCobrancaSimples: "000020",
        ValorTotalTitulosCarteirasSimples: "00000000000000000",
        QtdeTitulosCobrancaVinculada: "000030",
        ValorTotalTitulosCarteirasVinculada: "00000000000000000",
        QtdeTitulosCobrancaCaucionada: "000040",
        QtdeTitulosCarteirasCaucionada: "00000000000000000",
        QtdeTitulosCobrancaDescontada: "000050",
        ValorTotalTitulosCarteirasDescontada: "00000000000000000",
        NumeroAvisoLancamento: "Aviso123",
        CNAB2: "                                                                                                                     ", // CNAB Uso Exclusivo FEBRABAN/CNAB
    };
    return Object.values(trailerLote).join('') + '\n';
}
function generateSegmentP() {
    const segmentoP = {
        BancoCodigo: "341",
        Lote: "0001",
        Registro: "3",
        NRegistro: "00001",
        Segmento: "P",
        Brancos1: " ",
        CodMovimento: "01",
        AgenciaCodigo: "12345",
        AgenciaDV: "6",
        ContaNumero: "000000000000",
        ContaDV: "7",
        AgenciaContaDV: "8",
        NossoNumero: "00000000000000000000",
        Carteira: "1",
        FormaCadastro: "1",
        DocumentoTipo: "C",
        EmissaoBoleto: "1",
        DistribuicaoBoleto: "2",
        NumeroDocumento: "000000000000000",
        Vencimento: "01012024",
        ValorTitulo: "000000000000000",
        AgenciaCobradora: "54321",
        AgenciaCobradoraDV: "9",
        EspecieTitulo: "01",
        Aceite: "N",
        DataEmissao: "01012024",
        JurosMoraCodigo: "1",
        JurosMoraData: "01012024",
        JurosValor: "000000000000000",
        Desconto1Codigo: "1",
        Desconto1Data: "01012024",
        Desconto1Valor: "000000000000000",
        ValorIOF: "000000000000000",
        ValorAbatimento: "000000000000000",
        UsoEmpresaBeneficiario: "aaaaaaaaaaaaaaaaaaaaaaaaa",
        CodigoProtesto: "1",
        PrazoProtesto: "02",
        CodigoBaixaDevolucao: "2",
        PrazoBaixaDevolucao: "005",
        CodigoMoeda: "09",
        NumeroContrato: "1234567890",
        UsoLivre: " ", // Exemplo de uso livre banco/empresa ou autorização de pagamento parcial
    };
    return Object.values(segmentoP).join('') + '\n';
}
function generateSegmentQ() {
    const segmentoQ = {
        BancoCodigo: "341",
        Lote: "0001",
        Registro: "3",
        NRegistro: "00001",
        Segmento: "Q",
        Brancos1: " ",
        CodMovimento: "01",
        TipoInscricao: "1",
        NumeroInscricao: "000000000000000",
        Nome: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        Endereco: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        Bairro: "aaaaaaaaaaaaaaa",
        CEP: "12345",
        SufixoCEP: "678",
        Cidade: "aaaaaaaaaaaaaaa",
        UF: "SP",
        TipoInscricaoSacAval: "1",
        NumeroInscricaoSacAval: "123456789012345",
        NomeSacAval: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        BancoCorrespondente: "001",
        NossoNumeroBancoCorrespondente: "12345678901234567890",
        CNAB2: "        ", // CNAB Uso Exclusivo FEBRABAN/CNAB
    };
    return Object.values(segmentoQ).join('') + '\n';
}
function generateSegmentR() {
    const segmentoR = {
        BancoCodigo: "341",
        Lote: "0001",
        Registro: "3",
        NRegistro: "00001",
        Segmento: "R",
        Brancos: " ",
        CodMovimento: "01",
        CodDesconto2: "1",
        DataDesconto2: "01022024",
        ValorDesconto2: "000000000000000",
        CodDesconto3: "2",
        DataDesconto3: "20230915",
        ValorDesconto3: "000000000000000",
        CodMulta: "A",
        DataMulta: "20230920",
        ValorMulta: "000000000000000",
        InformacaoPagador: "aaaaaaaaaa",
        Informacao3: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        Informacao4: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        CNAB2: "                    ",
        CodOcorPagador: "00000001",
        CodBancoDebito: "001",
        AgenciaDebito: "12345",
        DigitoAgencia: "6",
        ContaCorrenteDebito: "123456789012",
        DigitoConta: "7",
        DigitoVerificadorAgConta: "8",
        IdentEmissaoAvisoDeb: "1",
        CNAB3: "         ", // CNAB Uso Exclusivo FEBRABAN/CNAB
    };
    return Object.values(segmentoR).join('') + '\n';
}
function generateFile() {
    let content = '';
    let operationCount = 10;
    let currentLineNumber = 0;
    const hasSegmentR = true;
    content += generateFileHeader()
        + generateBatchHeader();
    while (operationCount > 0) {
        content += generateSegmentP();
        content += generateSegmentQ();
        if (hasSegmentR) {
            content += generateSegmentR();
        }
        --operationCount;
    }
    content += generateFileTrailer()
        + generateBatchTrailer();
    return content;
}
// generateFile();
// console.log(generateFileHeader());
// console.log(generateBatchHeader());
// console.log(generateSegmentP());
// console.log(generateSegmentP());
// console.log(generateSegmentQ());
// console.log(generateSegmentR());
// console.log(generateFileTrailer());
// console.log(generateBatchTrailer());
// console.log(generateFileHeader().length);
// console.log(generateBatchHeader().length);
// console.log(generateSegmentP().length);
// console.log(generateSegmentP().length);
// console.log(generateSegmentQ().length);
// console.log(generateSegmentR().length);
// console.log(generateFileTrailer().length);
// console.log(generateBatchTrailer().length);
