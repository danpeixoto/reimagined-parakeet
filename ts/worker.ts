import { generateBatchHeader, generateBatchTrailer, generateFileHeader, generateFileTrailer, generateSegmentP, generateSegmentQ, generateSegmentR } from './febraban-240.js';

self.onmessage = function (event) {
    const data = event.data;
    const result = generateFile(data)
    self.postMessage(result)
};
self.onerror = function (event) {
    console.log('worker->error->event', event);
};

function generateFile(valores: Record<string, any>) {
    let content = '';
    let operationCount = valores.quantidadeRegistros || 10;
    const hasSegmentR = valores.enableSegmentR || false;
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