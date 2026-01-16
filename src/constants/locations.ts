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
    // Piazza / Central / Arada
    "Piazza", "Piassa", "Piazza Atikilt Tera", "6 Kilo", "4 Kilo", "Legehar", "Mexico", "Meskel Adebabay", "Casanchis", "Kasanchis", "Arat Kilo", "Siddist Kilo",

    // Bole Area
    "Bole Atlas", "Bole Medhanealem", "Gerji", "Goro", "Bole Arabsa", "Arabsa Sefera", "Arabsa Condominium", "Arabsa Diaspora", "Yerer", "Jackros", "Summit", "Summit Fiyel Bet", "Bole Michael", "Rwanda", "Wollo Sefer", "Olympia", "Bambis", "Dembel", "Hayahulet", "22 Mazoria",

    // Yeka / East
    "Megenagna", "Gurd Shola", "Megenagna Shola", "22", "Urael", "Ferensay Legasion", "Kotebe", "Kotebe Metropolitan", "Kotebe Kara", "Kotebe Mesalemya", "Kara", "Kara Alo", "Abado", "Yeka Abado", "Lam Beret", "Ayat", "CMC", "Yeka Abado Condominium",

    // Nifas Silk / South / Lafto
    "Saris", "Saris Abo", "Gotera", "Beklo Bet", "Qera", "Gofa", "Lafto", "Bisrate Gebriel", "Sar Bet", "Mekanisa", "Jemo", "Hana Mariam", "Lebu", "Haile Garment", "Tulu Dimtu", "Kality", "Akaki", "Bulbula",

    // West / Kolfe / Lideta / Addis Ketema
    "Merkato", "Merkato Mesalemya", "Merkato Kara", "Merkato Shola", "Merkato Atikilt Tera", "Atena Tera", "Autobus Tera", "Abinet", "Somali Tera", "Sebategna", "Tor Hailoch", "Bethel", "Alem Bank", "Wingate", "Kara Korore", "Kolfe", "Asko", "Zenebework", "Lideta Condominium",

    // Gullele / North
    "Shiro Meda", "Afincho Ber", "Kechene", "Addisu Gebeya", "Entoto", "Shegole", "Sululta Road", "Winget"
];

export const SATELLITE_TOWNS = [
    "Legetafo", "Sebeta", "Sululta", "Burayu", "Gelan", "Alem Gena", "Sendafa", "Dukem", "Bishoftu"
];

export const ALL_ADDIS_LOCATIONS = [
    ...ADDIS_ABABA_SUBCITIES,
    ...ADDIS_ABABA_NEIGHBORHOODS,
    ...SATELLITE_TOWNS
];
