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
  cripto: string,
  symbol: string;
  moedaDeReferencia: string;
}

export interface CriptoAddModel {
  name: string;
  symbol: string;
  compareCurrency: string;
}