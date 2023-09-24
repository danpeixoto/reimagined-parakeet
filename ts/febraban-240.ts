export function generateHexNumber(size = 15): string {
    const factor = Number(`1e${size}`);
    return (Math.floor(Math.random() * factor)).toString(16);
}

export function padStringLeft(valor: string, tamanhoMaximo: number, replacer = ' ') {
    return `${replacer.repeat(tamanhoMaximo)}${valor}`.slice(-tamanhoMaximo);
}

export function padStringRight(valor: string, tamanhoMaximo: number, replacer = ' ') {
    return `${valor}${replacer.repeat(tamanhoMaximo)}`.slice(0, tamanhoMaximo);
}

export function padNumber(valor: string, tamanhoMaximo: number) {
    let [inteiro, decimal] = `${valor}`.split('.');

    if (!decimal) {
        decimal = '00';
    } else if (decimal.length < 2) {
        decimal += '0';
    }

    return `${'0'.repeat(tamanhoMaximo)}${inteiro + decimal}`
        .slice(-tamanhoMaximo);
}

export function generateDate(addDays = 0): string {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + addDays);
    const intlDate = new Intl.DateTimeFormat('pt-BR', { timeZone: 'UTC' });
    return intlDate.format(currentDate).replace(/\//g, '');
}

export function generateFileHeader(valores: Record<string, any>) {
    const headerArquivo = {
        BancoCodigo: padStringLeft(valores.codBanco, 3, '0'),
        Lote: "0000",
        Registro: "0",
        CNAB1: "         ",
        TipoInscricaoEmpresa: padStringLeft(valores.tipoInscricao, 1, '0'),
        NumeroInscricaoEmpresa: padStringLeft(valores.numInscricao, 14, '0'),
        Convenio: "aaaaaaaaaaaaaaaaaaaa",
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

export function generateFileTrailer(valores: Record<string, any>) {
    const trailerArquivo = {
        BancoCodigo: padStringLeft(valores.codBanco, 3, '0'),
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

export function generateBatchHeader(valores: Record<string, any>) {
    const headerLote = {
        BancoCodigo: padStringLeft(valores.codBanco, 3, '0'),
        Lote: "0001", // Exemplo de lote de serviço
        Registro: "1",
        Operacao: "R", // Exemplo de tipo de operação
        TipoServico: "01", // Exemplo de tipo de serviço
        CNAB1: "  ", // CNAB Uso Exclusivo FEBRABAN/CNAB
        LayoutLote: "060", // Exemplo de número da versão do layout do lote
        CNAB2: " ", // CNAB Uso Exclusivo FEBRABAN/CNAB
        TipoInscricaoEmpresa: padStringLeft(valores.tipoInscricao, 1, '0'), // Exemplo de tipo de inscrição da empresa
        NumeroInscricaoEmpresa: padStringLeft(valores.numInscricao, 15, '0'), // Exemplo de número de inscrição da empresa
        Convenio: "aaaaaaaaaaaaaaaaaaaa", // Exemplo de código do convênio no banco
        Agencia: padStringLeft(valores.agencia, 5, '0'), // Exemplo de código da agência mantenedora da conta
        DVAgencia: padStringLeft(valores.dvAG, 1, '0'), // Exemplo de dígito verificador da agencia
        Conta: padStringLeft(valores.numConta, 12, '0'), // Exemplo de número da conta corrente
        DVConta: padStringLeft(valores.dvConta, 1, '0'), // Exemplo de dígito verificador da conta
        DVAgenciaConta: ' ', // Exemplo de dígito verificador da agência/conta
        NomeEmpresa: padStringRight(valores.nomeEmpresa, 30, ' '), // Exemplo de nome da empresa
        Informacao1: "                                        ", // Exemplo de mensagem 1
        Informacao2: "                                        ", // Exemplo de mensagem 2
        NumeroRemessaRetorno: "00000001", // Exemplo de número remessa/retorno
        DataGravacao: "20230907", // Exemplo de data de gravação remessa/retorno
        DataCredito: "20230914", // Exemplo de data do crédito
        CNAB3: "                                 ", // CNAB Uso Exclusivo FEBRABAN/CNAB
    };

    return Object.values(headerLote).join('') + '\n';
}

export function generateBatchTrailer(valores: Record<string, any>) {
    const trailerLote = {
        BancoCodigo: padStringLeft(valores.codBanco, 3, '0'),
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

export function generateSegmentP(valores: Record<string, any>) {
    const segmentoP = {
        BancoCodigo: padStringLeft(valores.codBanco, 3, '0'),
        Lote: "0001", // Exemplo de lote de serviço
        Registro: "3",
        NRegistro: padStringLeft(valores.currentLineNumber || 0, 5, '0'),
        Segmento: "P",
        Brancos1: " ", // CNAB Uso Exclusivo FEBRABAN/CNAB
        CodMovimento: "01", // Exemplo de código de movimento
        AgenciaCodigo: padStringLeft(valores.agencia, 5, '0'), // Exemplo de código da agência
        AgenciaDV: padStringLeft(valores.dvAG, 1, '0'), // Exemplo de dígito verificador da agência
        ContaNumero: padStringLeft(valores.numConta, 12, '0'), // Exemplo de número da conta corrente
        ContaDV: padStringLeft(valores.dvConta, 1, '0'), // Exemplo de dígito verificador da conta
        AgenciaContaDV: " ", // Exemplo de dígito verificador da agência/conta
        NossoNumero: padStringLeft(Date.now() + generateHexNumber(), 20, '0'), // Exemplo de nosso número
        Carteira: "1", // Exemplo de código da carteira
        FormaCadastro: "1", // Exemplo de forma de cadastro do título no banco
        DocumentoTipo: "1", // Exemplo de tipo de documento
        EmissaoBoleto: "1", // Exemplo de identificação da emissão do boleto de pagamento
        DistribuicaoBoleto: "2", // Exemplo de identificação da distribuição
        NumeroDocumento: padStringLeft(Date.now() + generateHexNumber(25), 15, '0'), // Exemplo de número do documento de cobrança
        Vencimento: generateDate(100), // Exemplo de data de vencimento do título
        ValorTitulo: "000000000000200", // Exemplo de valor nominal do título
        AgenciaCobradora: "     ", // Exemplo de código da agência cobradora
        AgenciaCobradoraDV: " ", // Exemplo de dígito verificador da agência cobradora
        EspecieTitulo: "01", // Exemplo de espécie do título
        Aceite: "N", // Exemplo de identificação de título aceito/não aceito
        DataEmissao: generateDate(), // Exemplo de data de emissão do título
        JurosMoraCodigo: "1", // Exemplo de código de juros de mora
        JurosMoraData: generateDate(101), // Exemplo de data de juros de mora
        JurosValor: "000000000000100", // Exemplo de juros de mora por dia/taxa
        Desconto1Codigo: "1", // Exemplo de código do desconto 1
        Desconto1Data: generateDate(100), // Exemplo de data do desconto 1
        Desconto1Valor: "000000000000100", // Exemplo de valor/percentual a ser concedido para o desconto 1
        ValorIOF: "000000000000000", // Exemplo de valor do IOF a ser recolhido
        ValorAbatimento: "000000000000000", // Exemplo de valor do abatimento
        UsoEmpresaBeneficiario: padStringLeft(Date.now() + generateHexNumber(), 25, '0'), // Exemplo de identificação do título na empresa
        CodigoProtesto: "1", // Exemplo de código para protesto
        PrazoProtesto: "02", // Exemplo de número de dias para protesto
        CodigoBaixaDevolucao: "2", // Exemplo de código para baixa/devolução
        PrazoBaixaDevolucao: "050", // Exemplo de número de dias para baixa/devolução
        CodigoMoeda: "09", // Exemplo de código da moeda
        NumeroContrato: "1234567890", // Exemplo de número do contrato da operação de crédito
        UsoLivre: " ", // Exemplo de uso livre banco/empresa ou autorização de pagamento parcial
    };
    return Object.values(segmentoP).join('') + '\n';
}

export function generateSegmentQ(valores: Record<string, any>) {
    const segmentoQ = {
        BancoCodigo: padStringLeft(valores.codBanco, 3, '0'),
        Lote: "0001", // Exemplo de lote de serviço
        Registro: "3",
        NRegistro: padStringLeft(valores.currentLineNumber, 5, '0'), // Exemplo de número sequencial
        Segmento: "Q",
        Brancos1: " ", // CNAB Uso Exclusivo FEBRABAN/CNAB
        CodMovimento: "01", // Exemplo de código de movimento
        TipoInscricaoEmpresa: padStringLeft(valores.tipoInscricaoPagador, 1, '0'), // Exemplo de tipo de inscrição da empresa
        NumeroInscricaoEmpresa: padStringLeft(valores.numInscricaoPagador, 15, '0'), // Exemplo de número de inscrição da empresa
        Nome: padStringRight(valores.nomePagador, 40), // Exemplo de nome
        Endereco: padStringRight('Rua porto alegre', 40), // Exemplo de endereço
        Bairro: padStringRight('Porto alegre', 15), // Exemplo de bairro
        CEP: "91420", // Exemplo de CEP
        SufixoCEP: "632", // Exemplo de sufixo do CEP
        Cidade: padStringRight('Porto alegre', 15), // Exemplo de cidade
        UF: "RS", // Exemplo de unidade da federação
        TipoInscricaoSacAval: padStringLeft(valores.tipoInscricaoPagador, 1, '0'), // Exemplo de tipo de inscrição do sacador/avalista
        NumeroInscricaoSacAval: padStringLeft(valores.numInscricaoPagador, 15, '0'), // Exemplo de número de inscrição do sacador/avalista
        NomeSacAval: padStringRight(valores.nomePagador, 40), // Exemplo de nome do sacador/avalista
        BancoCorrespondente: padStringLeft(valores.codBanco, 3, '0'), // Exemplo de código do banco correspondente
        NossoNumeroBancoCorrespondente: padStringLeft(Date.now() + generateHexNumber(), 20, '0'), // Exemplo de nosso número no banco correspondente
        CNAB2: "        ", // CNAB Uso Exclusivo FEBRABAN/CNAB
    };

    return Object.values(segmentoQ).join('') + '\n';
}

export function generateSegmentR(valores: Record<string, any>) {
    const segmentoR = {
        BancoCodigo: padStringLeft(valores.codBanco, 3, '0'),
        Lote: "0001", // Exemplo de lote de serviço
        Registro: "3",
        NRegistro: padStringLeft(valores.currentLineNumber, 5, '0'),  // Exemplo de número sequencial
        Segmento: "R",
        Brancos: " ", // CNAB Uso Exclusivo FEBRABAN/CNAB
        CodMovimento: "01", // Exemplo de código de movimento
        CodDesconto2: "1", // Exemplo de código do desconto 2
        DataDesconto2: generateDate(100), // Exemplo de data do desconto 2
        ValorDesconto2: "000000000000050", // Exemplo de valor/percentual a ser concedido para o desconto 2
        CodDesconto3: "1", // Exemplo de código do desconto 3
        DataDesconto3: generateDate(100), // Exemplo de data do desconto 3
        ValorDesconto3: "000000000000050", // Exemplo de valor/percentual a ser concedido para o desconto 3
        CodMulta: "1", // Exemplo de código da multa
        DataMulta: generateDate(101), // Exemplo de data da multa
        ValorMulta: "000000000000100", // Exemplo de valor/percentual a ser aplicado da multa
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

