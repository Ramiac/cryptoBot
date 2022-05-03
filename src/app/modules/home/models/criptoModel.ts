export interface CriptoModel{
    cripto: string,
    symbol: string;
    moedaDeReferencia: string;
}

export interface CriptoModelFromBack{
    name: string,
    symbol: string;
    compareCurrency: string;
}

export interface CriptoDropdownModel {
    value: string;
    viewValue: string;
}

export interface CriptoCardModel {
    cripto: string;
    symbol: string;
    moedaDeReferencia: string;
    preco: number;
  }