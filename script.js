const currencyCountryCodes = {
  AED: "AE", // United Arab Emirates - UAE Dirham
  AFN: "AF", // Afghanistan - Afghan Afghani
  ALL: "AL", // Albania - Albanian Lek
  AMD: "AM", // Armenia - Armenian Dram
  ANG: "CW", // Curaçao/Sint Maarten - Netherlands Antillean Guilder
  AOA: "AO", // Angola - Angolan Kwanza
  ARS: "AR", // Argentina - Argentine Peso
  AUD: "AU", // Australia - Australian Dollar
  AWG: "AW", // Aruba - Aruban Florin
  AZN: "AZ", // Azerbaijan - Azerbaijani Manat
  BAM: "BA", // Bosnia and Herzegovina - Convertible Mark
  BBD: "BB", // Barbados - Barbadian Dollar
  BDT: "BD", // Bangladesh - Bangladeshi Taka
  BGN: "BG", // Bulgaria - Bulgarian Lev
  BHD: "BH", // Bahrain - Bahraini Dinar
  BIF: "BI", // Burundi - Burundian Franc
  BMD: "BM", // Bermuda - Bermudian Dollar
  BND: "BN", // Brunei - Brunei Dollar
  BOB: "BO", // Bolivia - Bolivian Boliviano
  BRL: "BR", // Brazil - Brazilian Real
  BSD: "BS", // Bahamas - Bahamian Dollar
  BTN: "BT", // Bhutan - Bhutanese Ngultrum
  BWP: "BW", // Botswana - Botswana Pula
  BYN: "BY", // Belarus - Belarusian Ruble
  BZD: "BZ", // Belize - Belize Dollar
  CAD: "CA", // Canada - Canadian Dollar
  CDF: "CD", // Congo - Congolese Franc
  CHF: "CH", // Switzerland - Swiss Franc
  CLP: "CL", // Chile - Chilean Peso
  CNY: "CN", // China - Chinese Yuan
  COP: "CO", // Colombia - Colombian Peso
  CRC: "CR", // Costa Rica - Costa Rican Colón
  CUP: "CU", // Cuba - Cuban Peso
  CVE: "CV", // Cape Verde - Cape Verdean Escudo
  CZK: "CZ", // Czech Republic - Czech Koruna
  DJF: "DJ", // Djibouti - Djiboutian Franc
  DKK: "DK", // Denmark - Danish Krone
  DOP: "DO", // Dominican Republic - Dominican Peso
  DZD: "DZ", // Algeria - Algerian Dinar
  EGP: "EG", // Egypt - Egyptian Pound
  ERN: "ER", // Eritrea - Eritrean Nakfa
  ETB: "ET", // Ethiopia - Ethiopian Birr
  EUR: "EU", // European Union - Euro
  FJD: "FJ", // Fiji - Fijian Dollar
  FKP: "FK", // Falkland Islands - Falkland Islands Pound
  FOK: "FO", // Faroe Islands - Faroese Króna
  GBP: "GB", // United Kingdom - British Pound Sterling
  GEL: "GE", // Georgia - Georgian Lari
  GGP: "GG", // Guernsey - Guernsey Pound
  GHS: "GH", // Ghana - Ghanaian Cedi
  GIP: "GI", // Gibraltar - Gibraltar Pound
  GMD: "GM", // Gambia - Gambian Dalasi
  GNF: "GN", // Guinea - Guinean Franc
  GTQ: "GT", // Guatemala - Guatemalan Quetzal
  GYD: "GY", // Guyana - Guyanese Dollar
  HKD: "HK", // Hong Kong - Hong Kong Dollar
  HNL: "HN", // Honduras - Honduran Lempira
  HRK: "HR", // Croatia - Croatian Kuna
  HTG: "HT", // Haiti - Haitian Gourde
  HUF: "HU", // Hungary - Hungarian Forint
  IDR: "ID", // Indonesia - Indonesian Rupiah
  ILS: "IL", // Israel - Israeli New Shekel
  IMP: "IM", // Isle of Man - Manx Pound
  INR: "IN", // India - Indian Rupee
  IQD: "IQ", // Iraq - Iraqi Dinar
  IRR: "IR", // Iran - Iranian Rial
  ISK: "IS", // Iceland - Icelandic Króna
  JEP: "JE", // Jersey - Jersey Pound
  JMD: "JM", // Jamaica - Jamaican Dollar
  JOD: "JO", // Jordan - Jordanian Dinar
  JPY: "JP", // Japan - Japanese Yen
  KES: "KE", // Kenya - Kenyan Shilling
  KGS: "KG", // Kyrgyzstan - Kyrgyzstani Som
  KHR: "KH", // Cambodia - Cambodian Riel
  // KID: "KI", // Kiribati - Kiribati Dollar
  KMF: "KM", // Comoros - Comorian Franc
  KRW: "KR", // South Korea - South Korean Won
  KWD: "KW", // Kuwait - Kuwaiti Dinar
  KYD: "KY", // Cayman Islands - Cayman Islands Dollar
  KZT: "KZ", // Kazakhstan - Kazakhstani Tenge
  LAK: "LA", // Laos - Lao Kip
  LBP: "LB", // Lebanon - Lebanese Pound
  LKR: "LK", // Sri Lanka - Sri Lankan Rupee
  LRD: "LR", // Liberia - Liberian Dollar
  LSL: "LS", // Lesotho - Lesotho Loti
  LYD: "LY", // Libya - Libyan Dinar
  MAD: "MA", // Morocco - Moroccan Dirham
  MDL: "MD", // Moldova - Moldovan Leu
  MGA: "MG", // Madagascar - Malagasy Ariary
  MKD: "MK", // North Macedonia - Macedonian Denar
  MMK: "MM", // Myanmar - Myanmar Kyat
  MNT: "MN", // Mongolia - Mongolian Tögrög
  MOP: "MO", // Macao - Macanese Pataca
  MRU: "MR", // Mauritania - Mauritanian Ouguiya
  MUR: "MU", // Mauritius - Mauritian Rupee
  MVR: "MV", // Maldives - Maldivian Rufiyaa
  MWK: "MW", // Malawi - Malawian Kwacha
  MXN: "MX", // Mexico - Mexican Peso
  MYR: "MY", // Malaysia - Malaysian Ringgit
  MZN: "MZ", // Mozambique - Mozambican Metical
  NAD: "NA", // Namibia - Namibian Dollar
  NGN: "NG", // Nigeria - Nigerian Naira
  NIO: "NI", // Nicaragua - Nicaraguan Córdoba
  NOK: "NO", // Norway - Norwegian Krone
  NPR: "NP", // Nepal - Nepalese Rupee
  NZD: "NZ", // New Zealand - New Zealand Dollar
  OMR: "OM", // Oman - Omani Rial
  PAB: "PA", // Panama - Panamanian Balboa
  PEN: "PE", // Peru - Peruvian Sol
  PGK: "PG", // Papua New Guinea - Papua New Guinean Kina
  PHP: "PH", // Philippines - Philippine Peso
  PKR: "PK", // Pakistan - Pakistani Rupee
  PLN: "PL", // Poland - Polish Zloty
  PYG: "PY", // Paraguay - Paraguayan Guarani
  QAR: "QA", // Qatar - Qatari Riyal
  RON: "RO", // Romania - Romanian Leu
  RSD: "RS", // Serbia - Serbian Dinar
  RUB: "RU", // Russia - Russian Ruble
  RWF: "RW", // Rwanda - Rwandan Franc
  SAR: "SA", // Saudi Arabia - Saudi Riyal
  SBD: "SB", // Solomon Islands - Solomon Islands Dollar
  SCR: "SC", // Seychelles - Seychellois Rupee
  SDG: "SD", // Sudan - Sudanese Pound
  SEK: "SE", // Sweden - Swedish Krona
  SGD: "SG", // Singapore - Singapore Dollar
  SHP: "SH", // Saint Helena - Saint Helena Pound
  SLL: "SL", // Sierra Leone - Sierra Leonean Leone
  SOS: "SO", // Somalia - Somali Shilling
  SRD: "SR", // Suriname - Surinamese Dollar
  SSP: "SS", // South Sudan - South Sudanese Pound
  STN: "ST", // São Tomé and Príncipe - São Tomé and Príncipe Dobra
  SYP: "SY", // Syria - Syrian Pound
  SZL: "SZ", // Eswatini - Eswatini Lilangeni
  THB: "TH", // Thailand - Thai Baht
  TJS: "TJ", // Tajikistan - Tajikistani Somoni
  TMT: "TM", // Turkmenistan - Turkmenistani Manat
  TND: "TN", // Tunisia - Tunisian Dinar
  TOP: "TO", // Tonga - Tongan Paʻanga
  TRY: "TR", // Turkey - Turkish Lira
  TTD: "TT", // Trinidad and Tobago - Trinidad and Tobago Dollar
  TZS: "TZ", // Tanzania - Tanzanian Shilling
  UAH: "UA", // Ukraine - Ukrainian Hryvnia
  UGX: "UG", // Uganda - Ugandan Shilling
  USD: "US", // United States - US Dollar
  UYU: "UY", // Uruguay - Uruguayan Peso
  UZS: "UZ", // Uzbekistan - Uzbekistani Som
  VES: "VE", // Venezuela - Venezuelan Bolívar
  VND: "VN", // Vietnam - Vietnamese Đồng
  VUV: "VU", // Vanuatu - Vanuatu Vatu
  WST: "WS", // Samoa - Samoan Tālā
  XAF: "CF", // Central African States - CFA Franc BEAC
  XCD: "XC", // East Caribbean - East Caribbean Dollar
  XOF: "XO", // West African States - CFA Franc BCEAO
  YER: "YE", // Yemen - Yemeni Rial
  ZAR: "ZA", // South Africa - South African Rand
  ZMW: "ZM", // Zambia - Zambian Kwacha
  ZWL: "ZW", // Zimbabwe - Zimbabwean Dollar
};

const dataSelect = document.querySelectorAll(".sel");
const fromSelect = document.querySelector("#curFrom");
const toSelect = document.querySelector("#curTo");
const imageFrom = document.querySelector("#fromImg");
const imageTo = document.querySelector("#toImg");
const inputData = document.getElementById("inputData");
const submitBtn = document.getElementById("btn");
const outputData = document.querySelector(".output");

let exchangeApi =
  "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-11-18/v1/currencies/aed.json";
let fromvalImage;
let tovalImage;

let inputData1 = false;
let inputData2 = false;

let todayDate = new Date();
// let fullDate = `${todayDate.getFullYear()}-${
//   todayDate.getMonth() + 1
// }-${todayDate.getDate()}`;

let fullDate = "2024-12-31";

// console.log(exchangeApi);

for (let data of dataSelect) {
  for (let country in currencyCountryCodes) {
    let selectOption = document.createElement("option");
    selectOption.value = country;
    selectOption.innerText = country;
    data.appendChild(selectOption);
    // console.log(country, currencyCountryCodes[country]);
  }
}

fromSelect.addEventListener("change", (e) => {
  fromvalImage = e.target.value;
  // console.log(valImage);
  // console.log(typeof val);

  imageFrom.src = `https://flagsapi.com/${currencyCountryCodes[fromvalImage]}/flat/64.png`;
  exchangeApi = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${fullDate}/v1/currencies/${fromvalImage.toLowerCase()}.json`;
  // console.log(exchangeApi);
  console.log(fromvalImage);
  if (fromvalImage != "") {
    inputData1 = true;
  } else {
    inputData1 = false;
    outputData.style.visibility = "hidden";
  }
});

async function getDataFromApi() {
  // outputData.style.display = "block";
  outputData.style.visibility = "visible";
  outputData.innerHTML = "<div class='loader'></div>";
  // console.log(exchangeApi);

  let url = await fetch(exchangeApi);
  let urlData = await url.json();
  // console.log(urlData);

  let strDatafrom = fromvalImage.toLowerCase();
  let objData = urlData[strDatafrom];
  let finalOutput = (
    objData[tovalImage.toLowerCase()] * inputData.value
  ).toFixed(2);
  outputData.innerText = `${inputData.value} ${fromvalImage} = ${finalOutput} ${tovalImage}`;

  // console.log((objData[tovalImage.toLowerCase()] * inputData.value).toFixed(2));
  console.log(exchangeApi);
}

toSelect.addEventListener("change", (e) => {
  tovalImage = e.target.value;

  imageTo.src = `https://flagsapi.com/${currencyCountryCodes[tovalImage]}/flat/64.png`;
  if (tovalImage != "") {
    inputData2 = true;
  } else {
    inputData2 = false;
    outputData.style.visibility = "hidden";
  }
});

submitBtn.addEventListener("click", () => {
  if (inputData.value != "") {
    if (inputData1 && inputData2) {
      getDataFromApi();
    } else if (inputData1 && inputData2 == false) {
      outputData.style.display = "none";
      alert('Please select country "To" data');
    } else {
      outputData.style.visibility = "hidden";
      alert('Please select country "From" data');
    }
  } else {
    outputData.style.visibility = "hidden";
    alert("please enter amount");
  }
});
