/**
 * Comprehensive list of Addis Ababa sub-cities and major neighborhoods (seferoch).
 * This data is used for location validation and autocompletion in the QuoteForm.
 */

export const ADDIS_ABABA_SUBCITIES = [
    "Addis Ketema",
    "Akaki Kaliti",
    "Arada",
    "Bole",
    "Gullele",
    "Kirkos",
    "Kolfe Keranio",
    "Lideta",
    "Nifas Silk-Lafto",
    "Yeka",
    "Lemi Kura"
];

export const ADDIS_ABABA_NEIGHBORHOODS = [
    // Piazza / Cental
    "Piazza", "Piassa", "6 Kilo", "4 Kilo", "Legehar", "Mexico", "Meskel Adebabay", "Casanchis", "Kasanchis",

    // Bole Area
    "Bole Atlas", "Bole Medhanealem", "Gerji", "Goro", "Bole Arabsa", "Arabsa Sefera", "Arabsa Condominium", "Arabsa Diaspora", "Yerer", "Jackros", "Bole Michael", "Rwanda", "Wollo Sefer", "Olympia", "Bambis", "Dembel",

    // Yeka / East
    "Megenagna", "Gurd Shola", "22", "Urael", "Ferensay Legasion", "Kotebe", "Kotebe Metropolitan", "Kara", "Kara Alo", "Abado", "Yeka Abado", "Lam Beret", "Summit", "Ayat", "CMC",

    // Nifas Silk / South
    "Saris", "Saris Abo", "Gotera", "Beklo Bet", "Qera", "Gofa", "Lafto", "Bisrate Gebriel", "Sar Bet", "Mekanisa", "Jemo", "Hana Mariam",

    // West / Kolfe / Lideta
    "Merkato", "Atena Tera", "Autobus Tera", "Abinet", "Somali Tera", "Tor Hailoch", "Bethel", "Alem Bank", "Wingate",

    // Gullele / North
    "Shiro Meda", "Afincho Ber", "Kechene", "Addisu Gebeya", "Entoto", "Shegole"
];

export const SATELLITE_TOWNS = [
    "Legetafo", "Sebeta", "Sululta", "Burayu", "Gelan", "Alem Gena", "Sendafa", "Dukem", "Bishoftu"
];

export const ALL_ADDIS_LOCATIONS = [
    ...ADDIS_ABABA_SUBCITIES,
    ...ADDIS_ABABA_NEIGHBORHOODS,
    ...SATELLITE_TOWNS
];
