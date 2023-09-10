function generateFileHeader() {
    const headerArquivo = {
        BancoCodigo: "341", // Exemplo de código de banco
        Lote: "0000", // Exemplo de lote de serviço
        Registro: "0",
        CNAB1: "         ", // CNAB Uso Exclusivo FEBRABAN/CNAB
        TipoInscricaoEmpresa: "1", // Exemplo de tipo de inscrição da empresa
        NumeroInscricaoEmpresa: "12345678901234", // Exemplo de número de inscrição da empresa
        Convenio: "aaaaaaaaaaaaaaaaaaaa", // Exemplo de código do convênio no banco
        Agencia: "12345", // Exemplo de código da agência mantenedora da conta
        DVAgencia: "6", // Exemplo de dígito verificador da agência
        Conta: "123456789012", // Exemplo de número da conta corrente
        DVConta: "7", // Exemplo de dígito verificador da conta
        DVAgenciaConta: "8", // Exemplo de dígito verificador da agência/conta
        NomeEmpresa: "                              ", // Exemplo de nome da empresa
        NomeBanco: "                              ", // Exemplo de nome do banco
        CNAB2: "          ", // CNAB Uso Exclusivo FEBRABAN/CNAB
        CodigoRemessaRetorno: "1", // Exemplo de código de remessa/retorno
        DataGeracaoArquivo: "20230907", // Exemplo de data de geração do arquivo
        HoraGeracaoArquivo: "123456", // Exemplo de hora de geração do arquivo
        NumeroSequencialArquivo: "000001", // Exemplo de número sequencial do arquivo
        LayoutArquivo: "103", // Exemplo de número da versão do layout do arquivo
        DensidadeGravacaoArquivo: "12345", // Exemplo de densidade de gravação do arquivo
        ReservadoBanco: "                    ", // Exemplo de uso reservado do banco
        ReservadoEmpresa: "                    ", // Exemplo de uso reservado da empresa
        CNAB3: "                             ", // CNAB Uso Exclusivo FEBRABAN/CNAB
    };

    return Object.values(headerArquivo).join('') + '\n';
}

function generateFileTrailer() {
    const trailerArquivo = {
        BancoCodigo: "341", // Exemplo de código de banco
        Lote: "9999", // Exemplo de lote de serviço
        Registro: "9",
        CNAB1: "         ", // CNAB Uso Exclusivo FEBRABAN/CNAB
        QtdeLotes: "000001", // Exemplo de quantidade de lotes do arquivo
        QtdeRegistros: "000002", // Exemplo de quantidade de registros do arquivo
        QtdeContasConciliacao: "000003", // Exemplo de quantidade de contas para conciliação (Lotes)
        CNAB2: "                                                                                                                                                                                                             ", // CNAB Uso Exclusivo FEBRABAN/CNAB
    };

    return Object.values(trailerArquivo).join('') + '\n';
}

function generateBatchHeader() {
    const headerLote = {
        BancoCodigo: "341", // Exemplo de código de banco
        Lote: "0001", // Exemplo de lote de serviço
        Registro: "1",
        Operacao: "R", // Exemplo de tipo de operação
        TipoServico: "01", // Exemplo de tipo de serviço
        CNAB1: "  ", // CNAB Uso Exclusivo FEBRABAN/CNAB
        LayoutLote: "060", // Exemplo de número da versão do layout do lote
        CNAB2: " ", // CNAB Uso Exclusivo FEBRABAN/CNAB
        TipoInscricaoEmpresa: "1", // Exemplo de tipo de inscrição da empresa
        NumeroInscricaoEmpresa: "123456789012345", // Exemplo de número de inscrição da empresa
        Convenio: "aaaaaaaaaaaaaaaaaaaa", // Exemplo de código do convênio no banco
        Agencia: "12345", // Exemplo de código da agência mantenedora da conta
        DVC: "6", // Exemplo de dígito verificador da conta
        Conta: "123456789012", // Exemplo de número da conta corrente
        DVConta: "7", // Exemplo de dígito verificador da conta
        DVAgenciaConta: "8", // Exemplo de dígito verificador da agência/conta
        NomeEmpresa: "                              ", // Exemplo de nome da empresa
        Informacao1: "                                        ", // Exemplo de mensagem 1
        Informacao2: "                                        ", // Exemplo de mensagem 2
        NumeroRemessaRetorno: "00000001", // Exemplo de número remessa/retorno
        DataGravacao: "20230907", // Exemplo de data de gravação remessa/retorno
        DataCredito: "20230914", // Exemplo de data do crédito
        CNAB3: "                                 ", // CNAB Uso Exclusivo FEBRABAN/CNAB
    };

    return Object.values(headerLote).join('') + '\n';
}

function generateBatchTrailer() {
    const trailerLote = {
        BancoCodigo: "341", // Exemplo de código de banco
        Lote: "0001", // Exemplo de lote de serviço
        Registro: "5",
        CNAB1: "         ", // CNAB Uso Exclusivo FEBRABAN/CNAB
        QtdeRegistrosLote: "000010", // Exemplo de quantidade de registros no lote
        QtdeTitulosCobrancaSimples: "000020", // Exemplo de quantidade de títulos em cobrança simples
        ValorTotalTitulosCarteirasSimples: "00000000000000000", // Exemplo de valor total dos títulos em carteiras simples
        QtdeTitulosCobrancaVinculada: "000030", // Exemplo de quantidade de títulos em cobrança vinculada
        ValorTotalTitulosCarteirasVinculada: "00000000000000000", // Exemplo de valor total dos títulos em carteiras vinculada
        QtdeTitulosCobrancaCaucionada: "000040", // Exemplo de quantidade de títulos em cobrança caucionada
        QtdeTitulosCarteirasCaucionada: "00000000000000000", // Exemplo de quantidade de títulos em carteiras caucionada
        QtdeTitulosCobrancaDescontada: "000050", // Exemplo de quantidade de títulos em cobrança descontada
        ValorTotalTitulosCarteirasDescontada: "00000000000000000", // Exemplo de valor total dos títulos em carteiras descontada
        NumeroAvisoLancamento: "Aviso123", // Exemplo de número do aviso de lançamento
        CNAB2: "                                                                                                                     ", // CNAB Uso Exclusivo FEBRABAN/CNAB
    };

    return Object.values(trailerLote).join('') + '\n';
}

function generateSegmentP() {
    const segmentoP = {
        BancoCodigo: "341", // Exemplo de código de banco
        Lote: "0001", // Exemplo de lote de serviço
        Registro: "3",
        NRegistro: "00001", // Exemplo de número sequencial
        Segmento: "P",
        Brancos1: " ", // CNAB Uso Exclusivo FEBRABAN/CNAB
        CodMovimento: "01", // Exemplo de código de movimento
        AgenciaCodigo: "12345", // Exemplo de código da agência
        AgenciaDV: "6", // Exemplo de dígito verificador da agência
        ContaNumero: "000000000000", // Exemplo de número da conta corrente
        ContaDV: "7", // Exemplo de dígito verificador da conta
        AgenciaContaDV: "8", // Exemplo de dígito verificador da agência/conta
        NossoNumero: "00000000000000000000", // Exemplo de nosso número
        Carteira: "1", // Exemplo de código da carteira
        FormaCadastro: "1", // Exemplo de forma de cadastro do título no banco
        DocumentoTipo: "C", // Exemplo de tipo de documento
        EmissaoBoleto: "1", // Exemplo de identificação da emissão do boleto de pagamento
        DistribuicaoBoleto: "2", // Exemplo de identificação da distribuição
        NumeroDocumento: "000000000000000", // Exemplo de número do documento de cobrança
        Vencimento: "01012024", // Exemplo de data de vencimento do título
        ValorTitulo: "000000000000000", // Exemplo de valor nominal do título
        AgenciaCobradora: "54321", // Exemplo de código da agência cobradora
        AgenciaCobradoraDV: "9", // Exemplo de dígito verificador da agência cobradora
        EspecieTitulo: "01", // Exemplo de espécie do título
        Aceite: "N", // Exemplo de identificação de título aceito/não aceito
        DataEmissao: "01012024", // Exemplo de data de emissão do título
        JurosMoraCodigo: "1", // Exemplo de código de juros de mora
        JurosMoraData: "01012024", // Exemplo de data de juros de mora
        JurosValor: "000000000000000", // Exemplo de juros de mora por dia/taxa
        Desconto1Codigo: "1", // Exemplo de código do desconto 1
        Desconto1Data: "01012024", // Exemplo de data do desconto 1
        Desconto1Valor: "000000000000000", // Exemplo de valor/percentual a ser concedido para o desconto 1
        ValorIOF: "000000000000000", // Exemplo de valor do IOF a ser recolhido
        ValorAbatimento: "000000000000000", // Exemplo de valor do abatimento
        UsoEmpresaBeneficiario: "aaaaaaaaaaaaaaaaaaaaaaaaa", // Exemplo de identificação do título na empresa
        CodigoProtesto: "1", // Exemplo de código para protesto
        PrazoProtesto: "02", // Exemplo de número de dias para protesto
        CodigoBaixaDevolucao: "2", // Exemplo de código para baixa/devolução
        PrazoBaixaDevolucao: "005", // Exemplo de número de dias para baixa/devolução
        CodigoMoeda: "09", // Exemplo de código da moeda
        NumeroContrato: "1234567890", // Exemplo de número do contrato da operação de crédito
        UsoLivre: " ", // Exemplo de uso livre banco/empresa ou autorização de pagamento parcial
    };

    return Object.values(segmentoP).join('') + '\n';
}

function generateSegmentQ() {
    const segmentoQ = {
        BancoCodigo: "341", // Exemplo de código de banco
        Lote: "0001", // Exemplo de lote de serviço
        Registro: "3",
        NRegistro: "00001", // Exemplo de número sequencial
        Segmento: "Q",
        Brancos1: " ", // CNAB Uso Exclusivo FEBRABAN/CNAB
        CodMovimento: "01", // Exemplo de código de movimento
        TipoInscricao: "1", // Exemplo de tipo de inscrição
        NumeroInscricao: "000000000000000", // Exemplo de número de inscrição
        Nome: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", // Exemplo de nome
        Endereco: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", // Exemplo de endereço
        Bairro: "aaaaaaaaaaaaaaa", // Exemplo de bairro
        CEP: "12345", // Exemplo de CEP
        SufixoCEP: "678", // Exemplo de sufixo do CEP
        Cidade: "aaaaaaaaaaaaaaa", // Exemplo de cidade
        UF: "SP", // Exemplo de unidade da federação
        TipoInscricaoSacAval: "1", // Exemplo de tipo de inscrição do sacador/avalista
        NumeroInscricaoSacAval: "123456789012345", // Exemplo de número de inscrição do sacador/avalista
        NomeSacAval: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", // Exemplo de nome do sacador/avalista
        BancoCorrespondente: "001", // Exemplo de código do banco correspondente
        NossoNumeroBancoCorrespondente: "12345678901234567890", // Exemplo de nosso número no banco correspondente
        CNAB2: "        ", // CNAB Uso Exclusivo FEBRABAN/CNAB
    };

    return Object.values(segmentoQ).join('') + '\n';
}

function generateSegmentR() {
    const segmentoR = {
        BancoCodigo: "341", // Exemplo de código de banco
        Lote: "0001", // Exemplo de lote de serviço
        Registro: "3",
        NRegistro: "00001", // Exemplo de número sequencial
        Segmento: "R",
        Brancos: " ", // CNAB Uso Exclusivo FEBRABAN/CNAB
        CodMovimento: "01", // Exemplo de código de movimento
        CodDesconto2: "1", // Exemplo de código do desconto 2
        DataDesconto2: "01022024", // Exemplo de data do desconto 2
        ValorDesconto2: "000000000000000", // Exemplo de valor/percentual a ser concedido para o desconto 2
        CodDesconto3: "2", // Exemplo de código do desconto 3
        DataDesconto3: "20230915", // Exemplo de data do desconto 3
        ValorDesconto3: "000000000000000", // Exemplo de valor/percentual a ser concedido para o desconto 3
        CodMulta: "A", // Exemplo de código da multa
        DataMulta: "20230920", // Exemplo de data da multa
        ValorMulta: "000000000000000", // Exemplo de valor/percentual a ser aplicado da multa
        InformacaoPagador: "aaaaaaaaaa", // Exemplo de informação ao pagador
        Informacao3: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", // Exemplo de mensagem 3
        Informacao4: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", // Exemplo de mensagem 4
        CNAB2: "                    ", // CNAB Uso Exclusivo FEBRABAN/CNAB
        CodOcorPagador: "00000001", // Exemplo de código de ocorrência do pagador
        CodBancoDebito: "001", // Exemplo de código de banco na conta de débito
        AgenciaDebito: "12345", // Exemplo de código de agência do débito
        DigitoAgencia: "6", // Exemplo de dígito verificador da agência
        ContaCorrenteDebito: "123456789012", // Exemplo de conta corrente para débito
        DigitoConta: "7", // Exemplo de dígito verificador da conta
        DigitoVerificadorAgConta: "8", // Exemplo de dígito verificador da agência/conta
        IdentEmissaoAvisoDeb: "1", // Exemplo de identificação da emissão do aviso de débito
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