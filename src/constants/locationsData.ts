export interface LocationData {
    slug: string;
    name: string;
    subCity: string;
    landmarks: string[];
    description: string;
    density: string;
    coordinates: {
        lat: number;
        lng: number;
    };
    faqs: {
        question: string;
        answer: string;
    }[];
}

export const LOCATIONS_DATA: LocationData[] = [
    {
        slug: "bole",
        name: "Bole",
        subCity: "Bole",
        landmarks: ["Bole International Airport", "Edna Mall", "Medhanealem Church"],
        description: "Bole is the most vibrant and modern district in Addis Ababa, known for its high-end residential areas, bustling shopping centers, and international standard hotels. Moving in Bole requires specialized knowledge of its busy thoroughfares and luxury apartment complexes.",
        density: "High commercial and premium residential density.",
        coordinates: { lat: 8.9892, lng: 38.7844 },
        faqs: [
            {
                question: "Do you offer late-night moving in Bole?",
                answer: "Yes, we understand Bole's traffic can be heavy. We offer flexible scheduling, including early morning and late-night moves to ensure a smooth transition."
            },
            {
                question: "Can you handle moves for luxury apartments in Bole?",
                answer: "Absolutely. Our team is trained to handle premium furniture and navigate the specialized logistics of high-rise apartment buildings in the Bole area."
            }
        ]
    },
    {
        slug: "gurd-shola",
        name: "Gurd Shola",
        subCity: "Yeka",
        landmarks: ["Century Mall", "Management Institute", "Ethiopia Athletics Federation"],
        description: "Gurd Shola is a rapidly growing residential and commercial hub Strategically located near Megenagna. It's a favorite for families and businesses looking for accessibility without the Bole price tag.",
        density: "Mixed-use urban density with a high number of condominiums and office buildings.",
        coordinates: { lat: 9.0195, lng: 38.8038 },
        faqs: [
            {
                question: "How long does a move in Gurd Shola typically take?",
                answer: "Most local moves in Gurd Shola are completed within 4-6 hours, depending on the volume of items and specific building access."
            }
        ]
    },
    {
        slug: "kazanchis",
        name: "Kazanchis",
        subCity: "Kirkos",
        landmarks: ["UNECA (UN House)", "Jupiter International Hotel", "Ministry of Foreign Affairs"],
        description: "Kazanchis is the diplomatic heart of Addis Ababa. Home to the UN headquarters and numerous embassies, it demands a high level of professionalism and security for any relocation service.",
        density: "High diplomatic and governmental office density with luxury expatriate housing.",
        coordinates: { lat: 9.0177, lng: 38.7678 },
        faqs: [
            {
                question: "Do you have experience moving diplomatic staff in Kazanchis?",
                answer: "Yes, we regularly serve the diplomatic community in Kazanchis, adhering to all security protocols and providing white-glove packing services."
            }
        ]
    },
    {
        slug: "sar-bet",
        name: "Sar Bet",
        subCity: "Kirkos / Nifas Silk",
        landmarks: ["Old Airport", "AU Headquarters nearby", "Vikas Market"],
        description: "Sar Bet is a prestigious, greener residential area known for its wide streets and spacious villas. It transitions seamlessly into the Old Airport neighborhood, making it ideal for large-scale house moves.",
        density: "Predominantly medium-density residential with large villas and embassies.",
        coordinates: { lat: 8.9958, lng: 38.7364 },
        faqs: [
            {
                question: "Can you move large villas in Sar Bet?",
                answer: "Yes, we specialize in large-scale residential moves. We can provide multiple trucks and a larger crew to handle Sar Bet's spacious villas efficiently."
            }
        ]
    },
    {
        slug: "cmc",
        name: "CMC",
        subCity: "Yeka",
        landmarks: ["Saint Michael Church", "Light Rail Terminal", "Sunshine Real Estate"],
        description: "CMC is a sprawling residential district famous for its real estate developments and quiet neighborhoods. The presence of the light rail makes it one of the most accessible suburban areas in the city.",
        density: "Planned residential density with many gated communities and apartment complexes.",
        coordinates: { lat: 9.0203, lng: 38.8471 },
        faqs: [
            {
                question: "Is there an extra charge for CMC moves due to distance?",
                answer: "Our pricing is transparent and based on volume and service type. While distance is a factor, we maintain competitive rates for the entire CMC area."
            }
        ]
    },
    {
        slug: "gerji",
        name: "Gerji",
        subCity: "Bole",
        landmarks: ["Unity University", "Gerji Condominiums", "Alset Road"],
        description: "Gerji is a vibrant mix of residential blocks and local commercial centers. It is particularly popular among young professionals and families due to its central location between Bole and CMC.",
        density: "High residential density with a mix of condominiums and private homes.",
        coordinates: { lat: 9.0022, lng: 38.8011 },
        faqs: [
            {
                question: "Can you handle narrow street access in some Gerji neighborhoods?",
                answer: "Yes, we have a fleet of various truck sizes specifically for neighborhoods with tighter access, ensuring we can reach your doorstep in Gerji."
            }
        ]
    },
    {
        slug: "ayat",
        name: "Ayat",
        subCity: "Yeka",
        landmarks: ["Ayat Real Estate", "Gift Real Estate", "Ayat Grand Mall"],
        description: "Ayat is one of the premier residential zones in Eastern Addis Ababa, known for its extensive real estate projects and peaceful environment. It's a prime location for families looking for modern housing.",
        density: "Rapidly expanding residential density with master-planned housing projects.",
        coordinates: { lat: 9.0355, lng: 38.8789 },
        faqs: [
            {
                question: "Do you provide packing materials for Ayat moves?",
                answer: "Yes, we provide full packing services including bubble wrap, high-quality boxes, and tape for all Ayat relocations."
            }
        ]
    },
    {
        slug: "jemo",
        name: "Jemo",
        subCity: "Nifas Silk-Lafto",
        landmarks: ["Jemo Condominiums", "Lebu Mebrat Haile nearby", "Jemo Glass Factory"],
        description: "Jemo is a high-density residential area, home to some of the largest condominium sites in Addis Ababa. Relocating here requires efficient coordination due to the high volume of residents.",
        density: "Very high residential density, primarily composed of condominium blocks.",
        coordinates: { lat: 8.9667, lng: 38.7100 },
        faqs: [
            {
                question: "Are you experienced with multi-story apartment moves in Jemo?",
                answer: "Yes, we are experts in navigating the stairs and logistics of Jemo's multi-story condominium buildings."
            }
        ]
    },
    {
        slug: "nifas-silk",
        name: "Nifas Silk",
        subCity: "Nifas Silk-Lafto",
        landmarks: ["Gotera Interchange", "Saris", "Lafto Mall"],
        description: "Nifas Silk is a major industrial and residential area in Southern Addis Ababa. It serves as a gateway to the southern parts of the country and contains a mix of manufacturing hubs and residential neighborhoods.",
        density: "Industrial and residential mix with high traffic volume.",
        coordinates: { lat: 8.9789, lng: 38.7422 },
        faqs: [
            {
                question: "Do you offer industrial moving services in Nifas Silk?",
                answer: "Yes, we provide specialized equipment and machinery moving services for businesses in the Nifas Silk industrial zone."
            }
        ]
    },
    {
        slug: "kirkos",
        name: "Kirkos",
        subCity: "Kirkos",
        landmarks: ["Meskel Square", "Addis Ababa Stadium", "ECA"],
        description: "As the central sub-city, Kirkos is the administrative and commercial heart of the capital. Moving in Kirkos requires expert timing to navigate the city's main landmarks and busy intersections.",
        density: "High commercial, administrative, and urban residential density.",
        coordinates: { lat: 9.0072, lng: 38.7561 },
        faqs: [
            {
                question: "How do you handle traffic in the central Kirkos area?",
                answer: "Our dispatch team monitors local traffic patterns and schedules moves during off-peak hours whenever possible to ensure timely delivery."
            }
        ]
    },
    {
        slug: "kolfe",
        name: "Kolfe",
        subCity: "Kolfe Keranio",
        landmarks: ["Bethel Teaching Hospital", "Zenebework Area", "Total Merato Road"],
        description: "Kolfe Keranio is a large, diverse sub-city in Western Addis Ababa. It features a range of housing from traditional neighborhoods to modern residential developments.",
        density: "Medium to high residential density with active commercial strips.",
        coordinates: { lat: 9.0186, lng: 38.6947 },
        faqs: [
            {
                question: "Do you serve the entire Kolfe Keranio sub-city?",
                answer: "Yes, we cover all neighborhoods within Kolfe, from Bethel to Zenebework and beyond."
            }
        ]
    },
    {
        slug: "akaki",
        name: "Akaki",
        subCity: "Akaki Kality",
        landmarks: ["Kality Port", "Tulu Dimtu Condominiums", "Akaki River"],
        description: "Akaki Kality is the industrial gateway of Addis Ababa and home to the city's major dry port. It is a critical area for both logistical operations and the city's expanding residential south.",
        density: "High industrial and logistical density with expanding residential zones.",
        coordinates: { lat: 8.8872, lng: 38.7733 },
        faqs: [
            {
                question: "Can you handle large-scale warehouse relocations in Akaki?",
                answer: "Yes, our team is equipped to manage complex industrial and warehouse moves in the Akaki Kality industrial district."
            }
        ]
    },
    {
        slug: "yeka",
        name: "Yeka",
        subCity: "Yeka",
        landmarks: ["Yeka Hills", "British Embassy", "Kotebe"],
        description: "Yeka is known for its elevation and scenic views. It's a large residential sub-city that houses various embassies and peaceful neighborhoods like Ferensay Legasion.",
        density: "Medium residential density with hilly terrain.",
        coordinates: { lat: 9.0333, lng: 38.7833 },
        faqs: [
            {
                question: "Do your trucks handle the steep terrain in Yeka?",
                answer: "Yes, our modern fleet is powerful and well-maintained, ensuring safe navigation of the hilly terrain found in parts of Yeka."
            }
        ]
    }
];
