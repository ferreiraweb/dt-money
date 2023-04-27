
const numberFormatPTBR = new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'});
const dateFormatPTBR = new Intl.DateTimeFormat('pt-BR');

export function formatCurrency(money: number) {
    return numberFormatPTBR.format(money);
}

export function formatDate(date: string) {
    return dateFormatPTBR.format(new Date(date));
}