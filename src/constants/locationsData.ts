export interface LocationData {
    slug: string;
    name: string;
    nameAm: string;
    subCity: string;
    subCityAm: string;
    landmarks: string[];
    landmarksAm: string[];
    description: string;
    descriptionAm: string;
    density: string;
    densityAm: string;
    coordinates: {
        lat: number;
        lng: number;
    };
    image?: string;
    faqs: {
        question: string;
        questionAm: string;
        answer: string;
        answerAm: string;
    }[];
}

export const LOCATIONS_DATA: LocationData[] = [
    {
        slug: "bole",
        name: "Bole",
        nameAm: "ቦሌ",
        subCity: "Bole",
        subCityAm: "ቦሌ",
        landmarks: ["Bole International Airport", "Edna Mall", "Medhanealem Church"],
        landmarksAm: ["ቦሌ ዓለም አቀፍ አውሮፕላን ማረፊያ", "ኤድና ሞል", "መድኃኔዓለም ቤተክርስቲያን"],
        description: "Bole is the most vibrant and modern district in Addis Ababa, known for its high-end residential areas, bustling shopping centers, and international standard hotels. Moving in Bole requires specialized knowledge of its busy thoroughfares and luxury apartment complexes.",
        descriptionAm: "ቦሌ በአዲስ አበባ ውስጥ በጣም ደማቅ እና ዘመናዊው ዲስትሪክት ሲሆን በከፍተኛ የነዋሪዎች ሰፈር፣ በደማቅ የገበያ ማዕከላት እና በዓለም አቀፍ ደረጃ ደረጃቸውን በጠበቁ ሆቴሎች ይታወቃል። በቦሌ ውስጥ መዛወር ስለሚበዛው ትራፊክ እና የቅንጦት አፓርታማ ግቢዎች ልዩ እውቀት ይጠይቃል።",
        density: "High commercial and premium residential density.",
        densityAm: "ከፍተኛ የንግድ እና የፕሪሚየም መኖሪያ ሰፈር።",
        coordinates: { lat: 8.9892, lng: 38.7844 },
        image: "/images/locations/bole.jpg",
        faqs: [
            {
                question: "Do you offer late-night moving in Bole?",
                questionAm: "በቦሌ የምሽት ማጓጓዝ አገልግሎት ትሰጣላችሁ?",
                answer: "Yes, we understand Bole's traffic can be heavy. We offer flexible scheduling, including early morning and late-night moves to ensure a smooth transition.",
                answerAm: "አዎ፣ የቦሌ ትራፊክ ከባድ ሊሆን እንደሚችል እንረዳለን። ለስላሳ ዝውውርን ለማረጋገጥ ማለዳ እና ዘግይቶ የምሽት ዝውውሮችን ጨምሮ ተለዋዋጭ የጊዜ ሰሌዳ እናቀርባለን።"
            },
            {
                question: "Can you handle moves for luxury apartments in Bole?",
                questionAm: "በቦሌ ያሉ የቅንጦት አፓርታማዎችን ዝውውር መያዝ ትችላላችሁ?",
                answer: "Absolutely. Our team is trained to handle premium furniture and navigate the specialized logistics of high-rise apartment buildings in the Bole area.",
                answerAm: "በፍጹም። ቡድናችን የፕሪሚየም የቤት እቃዎችን ለመያዝ እና በቦሌ አካባቢ ያሉ የረጃጅም አፓርታማ ህንጻዎችን ልዩ ሎጅስቲክስ ለማስተናገድ የሰለጠነ ነው።"
            }
        ]
    },
    {
        slug: "gurd-shola",
        name: "Gurd Shola",
        nameAm: "ጉርድ ሾላ",
        subCity: "Yeka",
        subCityAm: "የካ",
        landmarks: ["Century Mall", "Management Institute", "Ethiopia Athletics Federation"],
        landmarksAm: ["ሴንቸሪ ሞል", "የስራ አመራር ተቋም", "የኢትዮጵያ አትሌቲክስ ፌዴሬሽን"],
        description: "Gurd Shola is a rapidly growing residential and commercial hub Strategically located near Megenagna. It's a favorite for families and businesses looking for accessibility without the Bole price tag.",
        descriptionAm: "ጉርድ ሾላ በመገንኛ አቅራቢያ የሚገኝ በፍጥነት በማደግ ላይ ያለ የመኖሪያ እና የንግድ ማዕከል ነው። የቦሌን ያህል ውድ ሳይሆን ምቹ ቦታ ለሚፈልጉ ቤተሰቦች እና ንግዶች ተመራጭ ነው።",
        density: "Mixed-use urban density with a high number of condominiums and office buildings.",
        densityAm: "ከፍተኛ ቁጥር ያላቸው ኮንዶሚኒየሞች እና የቢሮ ህንፃዎች ያሉበት የተቀላቀለ የከተማ ጥግግት።",
        coordinates: { lat: 9.0195, lng: 38.8038 },
        faqs: [
            {
                question: "How long does a move in Gurd Shola typically take?",
                questionAm: "በጉርድ ሾላ ውስጥ ዝውውር ብዙውን ጊዜ ምን ያህል ጊዜ ይወስዳል?",
                answer: "Most local moves in Gurd Shola are completed within 4-6 hours, depending on the volume of items and specific building access.",
                answerAm: "በጉርድ ሾላ ውስጥ ያሉ አብዛኛዎቹ የቤት ዝውውሮች እንደ እቃዎቹ ብዛት እና እንደ ህንጻው ሁኔታ ከ4-6 ሰአታት ውስጥ ይጠናቀቃሉ።"
            }
        ]
    },
    {
        slug: "kazanchis",
        name: "Kazanchis",
        nameAm: "ካዛንቺስ",
        subCity: "Kirkos",
        subCityAm: "ቂርቆስ",
        landmarks: ["UNECA (UN House)", "Jupiter International Hotel", "Ministry of Foreign Affairs"],
        landmarksAm: ["የተባበሩት መንግስታት የአፍሪካ ኢኮኖሚክ ኮሚሽን", "ጁፒተር ኢንተርናሽናል ሆቴል", "የውጭ ጉዳይ ሚኒስቴር"],
        description: "Kazanchis is the diplomatic heart of Addis Ababa. Home to the UN headquarters and numerous embassies, it demands a high level of professionalism and security for any relocation service.",
        descriptionAm: "ካዛንቺስ የአዲስ አበባ የዲፕሎማቲክ እምብርት ነው። የተባበሩት መንግስታት ዋና መስሪያ ቤት እና በርካታ ኤምባሲዎች የሚገኙበት በመሆኑ ለማንኛውም የዝውውር አገልግሎት ከፍተኛ የሙያ ብቃት እና ደህንነት ይጠይቃል።",
        density: "High diplomatic and governmental office density with luxury expatriate housing.",
        densityAm: "ከፍተኛ የዲፕሎማቲክ እና የመንግስት ቢሮዎች ጥግግት ከቅንጦት የውጭ ዜጎች መኖሪያ ጋር።",
        coordinates: { lat: 9.0177, lng: 38.7678 },
        image: "/images/locations/kazanchis.jpg",
        faqs: [
            {
                question: "Do you have experience moving diplomatic staff in Kazanchis?",
                questionAm: "በካዛንቺስ የዲፕሎማቲክ ሰራተኞችን የማዛወር ልምድ አላችሁ?",
                answer: "Yes, we regularly serve the diplomatic community in Kazanchis, adhering to all security protocols and providing white-glove packing services.",
                answerAm: "አዎ፣ በካዛንቺስ የሚገኘውን የዲፕሎማቲክ ማህበረሰብ በየጊዜው እናገለግላለን፣ ሁሉንም የደህንነት ደንቦች እናከብራለን እንዲሁም ልዩ የማሸግ አገልግሎቶችን እንሰጣለን።"
            }
        ]
    },
    {
        slug: "sar-bet",
        name: "Sar Bet",
        nameAm: "ሳር ቤት",
        subCity: "Kirkos / Nifas Silk",
        subCityAm: "ቂርቆስ / ንፋስ ስልክ",
        landmarks: ["Old Airport", "AU Headquarters nearby", "Vikas Market"],
        landmarksAm: ["ኦልድ ኤርፖርት", "የአፍሪካ ህብረት ዋና መስሪያ ቤት", "ቪካስ ማርኬት"],
        description: "Sar Bet is a prestigious, greener residential area known for its wide streets and spacious villas. It transitions seamlessly into the Old Airport neighborhood, making it ideal for large-scale house moves.",
        descriptionAm: "ሳር ቤት በሰፊ መንገዶቹ እና ሰፊ ቪላዎቹ የሚታወቅ የተከበረ እና አረንጓዴ የመኖሪያ አካባቢ ነው። ከኦልድ ኤርፖርት ሰፈር ጋር በቀላሉ የሚገናኝ በመሆኑ ለትልቅ የቤት ዝውውሮች ምቹ ያደርገዋል።",
        density: "Predominantly medium-density residential with large villas and embassies.",
        densityAm: "በዋነኛነት መካከለኛ ጥግግት ያለው የመኖሪያ አካባቢ ሲሆን ትልልቅ ቪላዎች እና ኤምባሲዎች ያሉበት ነው።",
        coordinates: { lat: 8.9958, lng: 38.7364 },
        faqs: [
            {
                question: "Can you move large villas in Sar Bet?",
                questionAm: "በሳር ቤት ያሉ ትልልቅ ቪላዎችን ማዛወር ትችላላችሁ?",
                answer: "Yes, we specialize in large-scale residential moves. We can provide multiple trucks and a larger crew to handle Sar Bet's spacious villas efficiently.",
                answerAm: "አዎ፣ በትልልቅ የመኖሪያ ዝውውሮች ላይ ልዩ ነን። የሳር ቤትን ሰፊ ቪላዎች በብቃት ለማስተናገድ በርካታ መኪናዎችን እና ትልቅ ቡድን ልናቀርብ እንችላለን።"
            }
        ]
    },
    {
        slug: "cmc",
        name: "CMC",
        nameAm: "ሲኤምሲ",
        subCity: "Yeka",
        subCityAm: "የካ",
        landmarks: ["Saint Michael Church", "Light Rail Terminal", "Sunshine Real Estate"],
        landmarksAm: ["ቅዱስ ሚካኤል ቤተክርስቲያን", "ቀላል ባቡር ተርሚናል", "ሰንሻይን ሪል ስቴት"],
        description: "CMC is a sprawling residential district famous for its real estate developments and quiet neighborhoods. The presence of the light rail makes it one of the most accessible suburban areas in the city.",
        descriptionAm: "ሲኤምሲ በሪል ስቴት ልማቶቹ እና በጸጥታ የሰፈነባቸው ሰፈሮች የሚታወቅ ሰፊ የመኖሪያ ዲስትሪክት ነው። የቀላል ባቡር መኖሩ በከተማው ውስጥ በጣም ተደራሽ ከሆኑ የከተማ ዳርቻዎች አንዱ ያደርገዋል።",
        density: "Planned residential density with many gated communities and apartment complexes.",
        densityAm: "በርካታ የታጠሩ ሰፈሮች እና የአፓርታማ ግቢዎች ያሉበት የታቀደ የመኖሪያ ጥግግት።",
        coordinates: { lat: 9.0203, lng: 38.8471 },
        faqs: [
            {
                question: "Is there an extra charge for CMC moves due to distance?",
                questionAm: "በራቀ ቦታ ምክንያት ለሲኤምሲ ዝውውሮች ተጨማሪ ክፍያ አለ?",
                answer: "Our pricing is transparent and based on volume and service type. While distance is a factor, we maintain competitive rates for the entire CMC area.",
                answerAm: "ዋጋችን ግልጽ እና በዕቃው መጠን እና በአገልግሎቱ አይነት ላይ የተመሰረተ ነው። ርቀት ግምት ውስጥ የሚገባ ቢሆንም፣ ለመላው የሲኤምሲ አካባቢ ተወዳዳሪ ዋጋዎችን እንጠብቃለን።"
            }
        ]
    },
    {
        slug: "gerji",
        name: "Gerji",
        nameAm: "ገርጂ",
        subCity: "Bole",
        subCityAm: "ቦሌ",
        landmarks: ["Unity University", "Gerji Condominiums", "Alset Road"],
        landmarksAm: ["ዩኒቲ ዩኒቨርሲቲ", "ገርጂ ኮንዶሚኒየም", "አልሴት መንገድ"],
        description: "Gerji is a vibrant mix of residential blocks and local commercial centers. It is particularly popular among young professionals and families due to its central location between Bole and CMC.",
        descriptionAm: "ገርጂ የመኖሪያ ብሎኮች እና የአገር ውስጥ የንግድ ማዕከላት ደማቅ ድብልቅ ነው። በቦሌ እና በሲኤምሲ መካከል ባለው ማዕከላዊ ቦታ ምክንያት በተለይ በወጣት ባለሙያዎች እና ቤተሰቦች ዘንድ ተወዳጅ ነው።",
        density: "High residential density with a mix of condominiums and private homes.",
        densityAm: "የኮንዶሚኒየሞች እና የግል ቤቶች ድብልቅ ያለበት ከፍተኛ የመኖሪያ ጥግግት።",
        coordinates: { lat: 9.0022, lng: 38.8011 },
        faqs: [
            {
                question: "Can you handle narrow street access in some Gerji neighborhoods?",
                questionAm: "በአንዳንድ የገርጂ ሰፈሮች ጠባብ የመንገድ መዳረሻን ማስተናገድ ትችላላችሁ?",
                answer: "Yes, we have a fleet of various truck sizes specifically for neighborhoods with tighter access, ensuring we can reach your doorstep in Gerji.",
                answerAm: "አዎ፣ ጠባብ መዳረሻ ላላቸው ሰፈሮች ተብለው የተዘጋጁ የተለያዩ የመኪና መጠኖች አሉን፣ ይህም በገርጂ ደጃፍዎ መድረስ መቻላችንን ያረጋግጣል።"
            }
        ]
    },
    {
        slug: "ayat",
        name: "Ayat",
        nameAm: "አያት",
        subCity: "Yeka",
        subCityAm: "የካ",
        landmarks: ["Ayat Real Estate", "Gift Real Estate", "Ayat Grand Mall"],
        landmarksAm: ["አያት ሪል ስቴት", "ጊፍት ሪል ስቴት", "አያት ግራንድ ሞል"],
        description: "Ayat is one of the premier residential zones in Eastern Addis Ababa, known for its extensive real estate projects and peaceful environment. It's a prime location for families looking for modern housing.",
        descriptionAm: "አያት በምስራቅ አዲስ አበባ ከሚገኙ ታዋቂ የመኖሪያ ቀጠናዎች አንዱ ሲሆን በሰፊ የሪል ስቴት ፕሮጀክቶቹ እና በጸጥታ አካባቢው ይታወቃል። ዘመናዊ ቤት ለሚፈልጉ ቤተሰቦች ተመራጭ ቦታ ነው።",
        density: "Rapidly expanding residential density with master-planned housing projects.",
        densityAm: "በታቀዱ የቤት ፕሮጀክቶች በፍጥነት በማደግ ላይ ያለ የመኖሪያ ጥግግት።",
        coordinates: { lat: 9.0355, lng: 38.8789 },
        faqs: [
            {
                question: "Do you provide packing materials for Ayat moves?",
                questionAm: "ለአያት ዝውውሮች የማሸጊያ ቁሳቁሶችን ታቀርባላችሁ?",
                answer: "Yes, we provide full packing services including bubble wrap, high-quality boxes, and tape for all Ayat relocations.",
                answerAm: "አዎ፣ ለአያት ዝውውሮች የአረፋ መጠቅለያ፣ ጥራት ያላቸው ሳጥኖች እና ቴፕ ጨምሮ ሙሉ የማሸጊያ አገልግሎቶችን እንሰጣለን።"
            }
        ]
    },
    {
        slug: "jemo",
        name: "Jemo",
        nameAm: "ጀሞ",
        subCity: "Nifas Silk-Lafto",
        subCityAm: "ንፋስ ስልክ-ላፍቶ",
        landmarks: ["Jemo Condominiums", "Lebu Mebrat Haile nearby", "Jemo Glass Factory"],
        landmarksAm: ["ጀሞ ኮንዶሚኒየም", "ለቡ መብራት ኃይል", "ጀሞ የመስታወት ፋብሪካ"],
        description: "Jemo is a high-density residential area, home to some of the largest condominium sites in Addis Ababa. Relocating here requires efficient coordination due to the high volume of residents.",
        descriptionAm: "ጀሞ በአዲስ አበባ ውስጥ ካሉት ትልልቅ የኮንዶሚኒየም ሳይቶች አንዱ ሲሆን ከፍተኛ ጥግግት ያለው የመኖሪያ አካባቢ ነው። እዚህ መዛወር በነዋሪዎች ብዛት ምክንያት ቀልጣፋ ቅንጅትን ይጠይቃል።",
        density: "Very high residential density, primarily composed of condominium blocks.",
        densityAm: "በዋነኛነት በኮንዶሚኒየም ብሎኮች የተገነባ በጣም ከፍተኛ የመኖሪያ ጥግግት።",
        coordinates: { lat: 8.9667, lng: 38.7100 },
        faqs: [
            {
                question: "Are you experienced with multi-story apartment moves in Jemo?",
                questionAm: "በጀሞ ባለብዙ ፎቅ አፓርታማ ዝውውሮች ልምድ አላችሁ?",
                answer: "Yes, we are experts in navigating the stairs and logistics of Jemo's multi-story condominium buildings.",
                answerAm: "አዎ፣ በጀሞ ባለብዙ ፎቅ የኮንዶሚኒየም ህንፃዎች ውስጥ በደረጃዎች እና ሌሎች ሎጅስቲክስ ላይ ባለሙያ ነን።"
            }
        ]
    },
    {
        slug: "nifas-silk",
        name: "Nifas Silk",
        nameAm: "ንፋስ ስልክ",
        subCity: "Nifas Silk-Lafto",
        subCityAm: "ንፋስ ስልክ-ላፍቶ",
        landmarks: ["Gotera Interchange", "Saris", "Lafto Mall"],
        landmarksAm: ["ጎተራ ኢንተርቼንጅ", "ሳሪስ", "ላፍቶ ሞል"],
        description: "Nifas Silk is a major industrial and residential area in Southern Addis Ababa. It serves as a gateway to the southern parts of the country and contains a mix of manufacturing hubs and residential neighborhoods.",
        descriptionAm: "ንፋስ ስልክ በደቡብ አዲስ አበባ የሚገኝ ትልቅ የኢንዱስትሪ እና የመኖሪያ አካባቢ ነው። ወደ ደቡብ የሀገሪቱ ክፍሎች መግቢያ ሆኖ ያገለግላል እንዲሁም የማምረቻ ማዕከላት እና የመኖሪያ ሰፈሮች ድብልቅ ነው።",
        density: "Industrial and residential mix with high traffic volume.",
        densityAm: "ከፍተኛ የትራፊክ ፍሰት ያለው የኢንዱስትሪ እና የመኖሪያ ድብልቅ።",
        coordinates: { lat: 8.9789, lng: 38.7422 },
        faqs: [
            {
                question: "Do you offer industrial moving services in Nifas Silk?",
                questionAm: "በንፋስ ስልክ የኢንዱስትሪ ማጓጓዝ አገልግሎት ትሰጣላችሁ?",
                answer: "Yes, we provide specialized equipment and machinery moving services for businesses in the Nifas Silk industrial zone.",
                answerAm: "አዎ፣ በንፋስ ስልክ የኢንዱስትሪ ቀጠና ውስጥ ለሚገኙ ንግዶች ልዩ መሳሪያዎችን እና ማሽነሪዎችን የማዛወር አገልግሎት እንሰጣለን።"
            }
        ]
    },
    {
        slug: "kirkos",
        name: "Kirkos",
        nameAm: "ቂርቆስ",
        subCity: "Kirkos",
        subCityAm: "ቂርቆስ",
        landmarks: ["Meskel Square", "Addis Ababa Stadium", "ECA"],
        landmarksAm: ["መስቀል አደባባይ", "አዲስ አበባ ስታዲየም", "ኢሲኤ"],
        description: "As the central sub-city, Kirkos is the administrative and commercial heart of the capital. Moving in Kirkos requires expert timing to navigate the city's main landmarks and busy intersections.",
        descriptionAm: "ቂርቆስ ማዕከላዊ ክፍለ ከተማ እንደመሆኑ የዋና ከተማዋ የአስተዳደር እና የንግድ እምብርት ነው። በቂርቆስ ውስጥ መዛወር የከተማዋን ዋና ዋና ምልክቶች እና የተጨናነቁ መገናኛ መንገዶችን ለማለፍ የሰለጠነ ጊዜን ይጠይቃል።",
        density: "High commercial, administrative, and urban residential density.",
        densityAm: "ከፍተኛ የንግድ፣ የአስተዳደር እና የከተማ መኖሪያ ጥግግት።",
        coordinates: { lat: 9.0072, lng: 38.7561 },
        faqs: [
            {
                question: "How do you handle traffic in the central Kirkos area?",
                questionAm: "በቂርቆስ ማዕከላዊ አካባቢ ትራፊክን እንዴት ትቆጣጠራላችሁ?",
                answer: "Our dispatch team monitors local traffic patterns and schedules moves during off-peak hours whenever possible to ensure timely delivery.",
                answerAm: "ቡድናችን የአካባቢውን የትራፊክ ሁኔታ ይከታተላል እና ወቅቱን የጠበቀ አቅርቦትን ለማረጋገጥ በተቻለ መጠን ዝውውሮችን ከትራፊክ ነጻ በሆኑ ሰዓታት ያቅዳል።"
            }
        ]
    },
    {
        slug: "kolfe",
        name: "Kolfe",
        nameAm: "ኮልፌ",
        subCity: "Kolfe Keranio",
        subCityAm: "ኮልፌ ቀራኒዮ",
        landmarks: ["Bethel Teaching Hospital", "Zenebework Area", "Total Merato Road"],
        landmarksAm: ["ቤቴል ማስተማሪያ ሆስፒታል", "ዘነበወርቅ አካባቢ", "ቶታል ሜራቶ መንገድ"],
        description: "Kolfe Keranio is a large, diverse sub-city in Western Addis Ababa. It features a range of housing from traditional neighborhoods to modern residential developments.",
        descriptionAm: "ኮልፌ ቀራኒዮ በምዕራብ አዲስ አበባ የሚገኝ ሰፊ እና የተለያየ ክፍለ ከተማ ነው። ከባህላዊ ሰፈሮች እስከ ዘመናዊ የመኖሪያ ቤቶች ድረስ የተለያዩ ቤቶችን ይይዛል።",
        density: "Medium to high residential density with active commercial strips.",
        densityAm: "ከፍተኛ የንግድ እንቅስቃሴ ያለበት መካከለኛ እስከ ከፍተኛ የመኖሪያ ጥግግት።",
        coordinates: { lat: 9.0186, lng: 38.6947 },
        faqs: [
            {
                question: "Do you serve the entire Kolfe Keranio sub-city?",
                questionAm: "ጠቅላላውን የኮልፌ ቀራኒዮ ክፍለ ከተማ ታገለግላላችሁ?",
                answer: "Yes, we cover all neighborhoods within Kolfe, from Bethel to Zenebework and beyond.",
                answerAm: "አዎ፣ ከቤቴል እስከ ዘነበወርቅ እና ከዚያም ባለፈ በኮልፌ ውስጥ ያሉትን ሁሉንም ሰፈሮች እንሸፍናለን።"
            }
        ]
    },
    {
        slug: "akaki",
        name: "Akaki",
        nameAm: "አቃቂ",
        subCity: "Akaki Kality",
        subCityAm: "አቃቂ ቃሊቲ",
        landmarks: ["Kality Port", "Tulu Dimtu Condominiums", "Akaki River"],
        landmarksAm: ["ቃሊቲ ወደብ", "ጡሉ ዲምቱ ኮንዶሚኒየም", "አቃቂ ወንዝ"],
        description: "Akaki Kality is the industrial gateway of Addis Ababa and home to the city's major dry port. It is a critical area for both logistical operations and the city's expanding residential south.",
        descriptionAm: "አቃቂ ቃሊቲ የአዲስ አበባ የኢንዱስትሪ መግቢያ እና የከተማዋ ትልቁ ደረቅ ወደብ መገኛ ነው። ለሎጅስቲክስ ስራዎች እና ለከተማዋ በማደግ ላይ ያለ የደቡብ መኖሪያ አካባቢ ወሳኝ ቦታ ነው።",
        density: "High industrial and logistical density with expanding residential zones.",
        densityAm: "ከፍተኛ የኢንዱስትሪ እና የሎጅስቲክስ ጥግግት ከተስፋፋ የመኖሪያ ቀጠናዎች ጋር።",
        coordinates: { lat: 8.8872, lng: 38.7733 },
        faqs: [
            {
                question: "Can you handle large-scale warehouse relocations in Akaki?",
                questionAm: "በአቃቂ ትልቅ ደረጃ ያላቸው የመጋዘን ዝውውሮችን ማስተናገድ ትችላላችሁ?",
                answer: "Yes, our team is equipped to manage complex industrial and warehouse moves in the Akaki Kality industrial district.",
                answerAm: "አዎ፣ ቡድናችን በአቃቂ ቃሊቲ የኢንዱስትሪ ቀጠና ውስጥ ውስብስብ የኢንዱስትሪ እና የመጋዘን ዝውውሮችን ለማስተዳደር ዝግጁ ነው።"
            }
        ]
    },
    {
        slug: "yeka",
        name: "Yeka",
        nameAm: "የካ",
        subCity: "Yeka",
        subCityAm: "የካ",
        landmarks: ["Yeka Hills", "British Embassy", "Kotebe"],
        landmarksAm: ["የየካ ተራሮች", "የብሪታንያ ኤምባሲ", "ኮተቤ"],
        description: "Yeka is known for its elevation and scenic views. It's a large residential sub-city that houses various embassies and peaceful neighborhoods like Ferensay Legasion.",
        descriptionAm: "የካ በከፍታ ቦታው እና በሚያምር እይታው ይታወቃል። የተለያዩ ኤምባሲዎችን እና እንደ ፈረንሳይ ለጋሲዮን ያሉ ጸጥ ያሉ ሰፈሮችን የያዘ ትልቅ የመኖሪያ ክፍለ ከተማ ነው።",
        density: "Medium residential density with hilly terrain.",
        densityAm: "ተራራማ መልከዓ ምድር ያለው መካከለኛ የመኖሪያ ጥግግት።",
        coordinates: { lat: 9.0333, lng: 38.7833 },
        faqs: [
            {
                question: "Do your trucks handle the steep terrain in Yeka?",
                questionAm: "መኪኖቻችሁ በየካ ያለውን ገደላማ ቦታ ይቋቋማሉ?",
                answer: "Yes, our modern fleet is powerful and well-maintained, ensuring safe navigation of the hilly terrain found in parts of Yeka.",
                answerAm: "አዎ፣ የእኛ ዘመናዊ መኪሶች ጠንካራ እና በሚገባ የተያዙ ናቸው፣ ይህም በአንዳንድ የየካ ክፍሎች የሚገኘውን ተራራማ ቦታ ደህንነቱ በተጠበቀ ሁኔታ ለማለፍ ያስችላል።"
            }
        ]
    }
];
