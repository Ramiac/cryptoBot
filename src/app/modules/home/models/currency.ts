export interface CurrencyCardModel {
  currencyAbrev: string;
  currencyNome: string;
  currencyValor: string;
}

export interface CurrencyDropdownModel {
  value: string;
  viewValue: string;
}

export interface CurrencyTableModel {
    id: number;
    cripto: string,
    valor: string;
    moedaDeReferencia: string;
  }
