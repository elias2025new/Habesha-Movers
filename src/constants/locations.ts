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
    // Yeka / East
    "Megenagna", "Gurd Shola", "Megenagna Shola", "22", "Urael", "Ferensay Legasion", "Kotebe", "Kotebe Metropolitan", "Kotebe Kara", "Kotebe Mesalemya", "Kara", "Kara Alo", "Abado", "Yeka Abado", "Lam Beret", "Summit", "Ayat", "CMC",
    ...
    // West / Kolfe / Lideta
    "Merkato", "Merkato Mesalemya", "Merkato Kara", "Merkato Shola", "Merkato Atikilt Tera", "Atena Tera", "Autobus Tera", "Abinet", "Somali Tera", "Sebategna", "Tor Hailoch", "Bethel", "Alem Bank", "Wingate", "Kara Korore",
    ...
    // Piazza / Cental
    "Piazza", "Piassa", "Piazza Atikilt Tera", "6 Kilo", "4 Kilo", "Legehar", "Mexico", "Meskel Adebabay", "Casanchis", "Kasanchis",
];

export const SATELLITE_TOWNS = [
    "Legetafo", "Sebeta", "Sululta", "Burayu", "Gelan", "Alem Gena", "Sendafa", "Dukem", "Bishoftu"
];

export const ALL_ADDIS_LOCATIONS = [
    ...ADDIS_ABABA_SUBCITIES,
    ...ADDIS_ABABA_NEIGHBORHOODS,
    ...SATELLITE_TOWNS
];
