import { generateDate, padStringLeft, padStringRight, generateHexNumber } from '../../../utils';
export function generateFileHeader(valores) {
    const headerArquivo = {
        BancoCodigo: padStringLeft(valores.codBanco, 3, '0'),
        Lote: "0000",
        Registro: "0",
        CNAB1: "         ",
        TipoInscricaoEmpresa: padStringLeft(valores.tipoInscricao, 1, '0'),
        NumeroInscricaoEmpresa: padStringLeft(valores.numInscricao, 14, '0'),
        Convenio: padStringLeft(valores.convenio, 20, ' '),
        Agencia: padStringLeft(valores.agencia, 5, '0'),
        DVAgencia: padStringLeft(valores.dvAG, 1, '0'),
        Conta: padStringLeft(valores.numConta, 12, '0'),
        DVConta: padStringLeft(valores.dvConta, 1, '0'),
        DVAgenciaConta: " ",
        NomeEmpresa: padStringRight(valores.nomeEmpresa, 30),
        NomeBanco: padStringRight(valores.nomeBanco, 30),
        CNAB2: "          ",
        CodigoRemessaRetorno: "1",
        DataGeracaoArquivo: generateDate(),
        HoraGeracaoArquivo: "010101",
        NumeroSequencialArquivo: "000001",
        LayoutArquivo: "103",
        DensidadeGravacaoArquivo: "12345",
        ReservadoBanco: "                    ",
        ReservadoEmpresa: "                    ",
        CNAB3: "                             ",
    };
    return Object.values(headerArquivo).join('') + '\n';
}
export function generateFileTrailer(valores) {
    const trailerArquivo = {
        BancoCodigo: padStringLeft(valores.codBanco, 3, '0'),
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
export function generateBatchHeader(valores) {
    const headerLote = {
        BancoCodigo: padStringLeft(valores.codBanco, 3, '0'),
        Lote: "0001",
        Registro: "1",
        Operacao: "R",
        TipoServico: "01",
        CNAB1: "  ",
        LayoutLote: "060",
        CNAB2: " ",
        TipoInscricaoEmpresa: padStringLeft(valores.tipoInscricao, 1, '0'),
        NumeroInscricaoEmpresa: padStringLeft(valores.numInscricao, 15, '0'),
        Convenio: padStringLeft(valores.convenio, 20, " "),
        Agencia: padStringLeft(valores.agencia, 5, '0'),
        DVAgencia: padStringLeft(valores.dvAG, 1, '0'),
        Conta: padStringLeft(valores.numConta, 12, '0'),
        DVConta: padStringLeft(valores.dvConta, 1, '0'),
        DVAgenciaConta: ' ',
        NomeEmpresa: padStringRight(valores.nomeEmpresa, 30, ' '),
        Informacao1: "                                        ",
        Informacao2: "                                        ",
        NumeroRemessaRetorno: "00000001",
        DataGravacao: "20230907",
        DataCredito: "20230914",
        CNAB3: "                                 ", // CNAB Uso Exclusivo FEBRABAN/CNAB
    };
    return Object.values(headerLote).join('') + '\n';
}
export function generateBatchTrailer(valores) {
    const trailerLote = {
        BancoCodigo: padStringLeft(valores.codBanco, 3, '0'),
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
export function generateSegmentP(valores) {
    const segmentoP = {
        BancoCodigo: padStringLeft(valores.codBanco, 3, '0'),
        Lote: "0001",
        Registro: "3",
        NRegistro: padStringLeft(valores.currentLineNumber || 0, 5, '0'),
        Segmento: "P",
        Brancos1: " ",
        CodMovimento: "01",
        AgenciaCodigo: padStringLeft(valores.agencia, 5, '0'),
        AgenciaDV: padStringLeft(valores.dvAG, 1, '0'),
        ContaNumero: padStringLeft(valores.numConta, 12, '0'),
        ContaDV: padStringLeft(valores.dvConta, 1, '0'),
        AgenciaContaDV: " ",
        NossoNumero: padStringLeft(`${Math.floor(Math.random() * 1000000)}` + Date.now() + valores.currentLineNumber, 20, '0'),
        Carteira: "1",
        FormaCadastro: "1",
        DocumentoTipo: "1",
        EmissaoBoleto: "1",
        DistribuicaoBoleto: "2",
        NumeroDocumento: padStringLeft(generateHexNumber() + Date.now(), 15, '0'),
        Vencimento: generateDate(100),
        ValorTitulo: "000000000000200",
        AgenciaCobradora: "     ",
        AgenciaCobradoraDV: " ",
        EspecieTitulo: "01",
        Aceite: "N",
        DataEmissao: generateDate(),
        JurosMoraCodigo: "1",
        JurosMoraData: generateDate(101),
        JurosValor: "000000000000100",
        Desconto1Codigo: "1",
        Desconto1Data: generateDate(100),
        Desconto1Valor: "000000000000100",
        ValorIOF: "000000000000000",
        ValorAbatimento: "000000000000000",
        UsoEmpresaBeneficiario: padStringLeft(generateHexNumber() + Date.now(), 25, '0'),
        CodigoProtesto: "1",
        PrazoProtesto: "02",
        CodigoBaixaDevolucao: valores.enableWriteOff ? "1" : "2",
        PrazoBaixaDevolucao: "050",
        CodigoMoeda: "09",
        NumeroContrato: "1234567890",
        UsoLivre: " ", // Exemplo de uso livre banco/empresa ou autorização de pagamento parcial
    };
    return Object.values(segmentoP).join('') + '\n';
}
export function generateSegmentQ(valores) {
    const segmentoQ = {
        BancoCodigo: padStringLeft(valores.codBanco, 3, '0'),
        Lote: "0001",
        Registro: "3",
        NRegistro: padStringLeft(valores.currentLineNumber, 5, '0'),
        Segmento: "Q",
        Brancos1: " ",
        CodMovimento: "01",
        TipoInscricaoEmpresa: padStringLeft(valores.tipoInscricaoPagador, 1, '0'),
        NumeroInscricaoEmpresa: padStringLeft(valores.numInscricaoPagador, 15, '0'),
        Nome: padStringRight(valores.nomePagador, 40),
        Endereco: padStringRight('Rua porto alegre', 40),
        Bairro: padStringRight('Porto alegre', 15),
        CEP: "91420",
        SufixoCEP: "632",
        Cidade: padStringRight('Porto alegre', 15),
        UF: "RS",
        TipoInscricaoSacAval: padStringLeft(valores.tipoInscricaoPagador, 1, '0'),
        NumeroInscricaoSacAval: padStringLeft(valores.numInscricaoPagador, 15, '0'),
        NomeSacAval: padStringRight(valores.nomePagador, 40),
        BancoCorrespondente: padStringLeft(valores.codBanco, 3, '0'),
        NossoNumeroBancoCorrespondente: padStringLeft(generateHexNumber() + Date.now(), 20, '0'),
        CNAB2: "        ", // CNAB Uso Exclusivo FEBRABAN/CNAB
    };
    return Object.values(segmentoQ).join('') + '\n';
}
export function generateSegmentR(valores) {
    const segmentoR = {
        BancoCodigo: padStringLeft(valores.codBanco, 3, '0'),
        Lote: "0001",
        Registro: "3",
        NRegistro: padStringLeft(valores.currentLineNumber, 5, '0'),
        Segmento: "R",
        Brancos: " ",
        CodMovimento: "01",
        CodDesconto2: "1",
        DataDesconto2: generateDate(100),
        ValorDesconto2: "000000000000050",
        CodDesconto3: "1",
        DataDesconto3: generateDate(100),
        ValorDesconto3: "000000000000050",
        CodMulta: "1",
        DataMulta: generateDate(101),
        ValorMulta: "000000000000100",
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
self.onmessage = (event) => {
    console.log(event);
};
