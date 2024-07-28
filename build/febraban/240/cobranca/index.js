import { downloadCNAB } from '../../../utils.js';
function runFebraban240Cobranca() {
    const worker = new Worker('/build/febraban/240/cobranca/worker.js', { type: 'module' });
    worker.onmessage = function (event) {
        const data = event.data;
        const fileType = 'febraban-cobranca-240';
        downloadCNAB(data, fileType);
    };
    worker.onerror = function (error) {
        console.error('Error occurred in the worker: ' + JSON.stringify(error));
    };
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
(() => {
    const form = document.getElementById('cnabForm');
    form?.addEventListener('submit', (e) => {
        e.preventDefault();
        runFebraban240Cobranca();
    });
})();
