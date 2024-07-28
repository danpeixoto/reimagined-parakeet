export function downloadCNAB(content: string, type: string) {
  const fileName = `teste-cnab-${type}-${Date.now()}`.replace('.', '') + '.rem';
  const blob = new Blob([content], { type: "text/plain" });

  const blobUrl = window.URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = blobUrl;
  a.download = fileName;

  a.click();
  window.URL.revokeObjectURL(blobUrl);
}

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
