"use strict";
const worker = new Worker('./build/worker.js', { type: 'module' });
worker.onmessage = function (event) {
    const data = event.data;
    downloadCNAB(data);
};
worker.onerror = function (error) {
    console.error('Error occurred in the worker: ' + JSON.stringify(error));
};
function downloadCNAB(content) {
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
    const results = {};
    formInputs.forEach(input => {
        const inputId = input.id;
        let inputValue;
        if (input.type === 'checkbox') {
            inputValue = input.checked;
        }
        else {
            inputValue = input.value;
        }
        results[inputId] = inputValue;
    });
    worker.postMessage(results);
}
const form = document.getElementById('cnabForm');
form?.addEventListener('submit', (e) => {
    e.preventDefault();
    run();
});
