import { generateBatchHeader, generateBatchTrailer, generateFileHeader, generateFileTrailer, generateSegmentP, generateSegmentQ, generateSegmentR } from './febraban-240.js';

function generateFile(valores: Record<string, any>) {
    let content = '';
    let operationCount = valores.quantidadeRegistros || 10;
    const hasSegmentR = true;
    content += generateFileHeader(valores)
        + generateBatchHeader(valores);
    valores['currentLineNumber'] = 1;
    while (operationCount > 0) {
        content += generateSegmentP(valores);
        valores['currentLineNumber'] += 1;
        content += generateSegmentQ(valores);
        valores['currentLineNumber'] += 1;
        if (hasSegmentR) {
            content += generateSegmentR(valores);
            valores['currentLineNumber'] += 1;
        }
        --operationCount;
    }

    content +=
        generateBatchTrailer(valores)
        + generateFileTrailer(valores);

    return content;
}

function downloadCNAB(content: string) {
    const fileName = `teste-cnab-${Date.now()}${Math.random()}`.replace('.', '') + '.rem';
    const blob = new Blob([content], { type: "text/plain" });

    const blobUrl = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = blobUrl;
    a.download = fileName;

    a.click();
    window.URL.revokeObjectURL(blobUrl);
}

function run() {
    const formInputs = document.querySelectorAll('input');
    const results: Record<string, any> = {};
    formInputs.forEach(input => {
        const inputId = input.id;
        const inputValue = input.value;
        results[inputId] = inputValue;
    });
    const cnab = generateFile(results);
    downloadCNAB(cnab);
}

const form = document.getElementById('cnabForm');
form?.addEventListener('submit', (e) => {
    e.preventDefault();
    run();
});