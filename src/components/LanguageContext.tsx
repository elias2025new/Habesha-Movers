'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'am';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const translations = {
    en: {
        // Header
        'nav.services': 'Moving Services',
        'nav.locations': 'Locations',
        'nav.about': 'About Us',
        'nav.contact': 'Contact Us',
        'header.licensed': 'Licensed',
        'header.callUs': 'Call Us',
        'header.callUsAt': '0999220000',

        // Services
        'service.house': 'House Moving',
        'service.houseDescShort': 'Safe and secure relocation for your entire household items.',
        'service.houseDescLong': 'Relocating to a new home? Our team handles everything from packing to transport and unpacking at your new residence.',
        'service.office': 'Office Relocation',
        'service.officeDescShort': 'Efficient moving services for offices and businesses.',
        'service.officeDescLong': 'Minimize downtime for your business. We provide efficient office moving services, including furniture disassembly and equipment handling.',
        'service.packing': 'Packing Services',
        'service.packingDescShort': 'Professional packing materials and expert handling.',
        'service.packingDescLong': 'Save time and ensure safety. We provide high-quality packing materials and professional packing services for all your belongings.',
        'service.international': 'International Moving',
        'service.internationalDesc': 'Seamless international relocation services and logistics.',
        'service.storage': 'Storage Solutions',
        'service.storageDesc': 'Secure, climate-controlled storage for short or long terms.',
        'service.car': 'Car Transportation',
        'service.carDesc': 'Reliable vehicle transport services to any destination.',

        // Hero
        'hero.badge': 'Habesha Movers',
        'hero.title1': 'Professional',
        'hero.title2': 'Moving Services',
        'hero.description': 'Habesha Movers provides reliable moving solutions across Addis Ababa. Fill out our quick form to get an instant, competitive quote.',
        'hero.stats.moves': '30,000+',
        'hero.stats.movesLabel': 'Families moved',
        'hero.stats.safe': '100%',
        'hero.stats.safeLabel': 'Safe Delivery Rate',
        'hero.mobileStats.moves': '30k+ Moves',
        'hero.mobileStats.safe': '100% Safe',
        'hero.mobileStats.trusted': '❤️ Trusted in Addis',

        // Why Choose Us
        'why.title': 'Why Choose Us',
        'why.description': "Here's why customers trust us time and again. From your first quote to your final box, here's how we make moving smooth and stress-free.",
        'why.benefit1': 'Licensed and insured moving',
        'why.benefit2': 'Transparent pricing with no hidden fees',
        'why.benefit3': 'Customized services for every move',
        'why.benefit4': 'On-time, every time',
        'why.experienceValue': '5+',
        'why.experienceLabel1': 'Years of',
        'why.experienceLabel2': 'Experience',

        // Professional Services Section
        'pro.title': 'Professional Services',
        'pro.description': 'We provide a comprehensive range of moving services designed to meet your every need. From local house moves to complicated international relocations, our team is ready to help.',

        // CTA Section
        'cta.title': 'Ready to make your move?',
        'cta.subtitle': 'Contact us today and get your free customized quote in minutes.',
        'cta.button': 'Get Started Now',

        // About Page
        'about.heroTitle': 'About Habesha Movers',
        'about.heroSubtitle': 'Our mission is to provide the most reliable and stress-free moving experience in Ethiopia.',
        'about.storyTitle': 'Our Story',
        'about.storyP1': 'Founded with a vision to revolutionize the logistics and moving industry in Addis Ababa, Habesha Movers has grown from a small local team to one of the most trusted names in professional moving.',
        'about.storyP2': 'We recognized the challenges residents and businesses face when relocating—lack of transparency, safety concerns, and unreliable scheduling. Habesha Movers was built to solve these problems through professionalism, technology, and a customer-first approach.',
        'about.expValue': '5+',
        'about.expLabel': 'Years Experience',
        'about.movesValue': '2,500+',
        'about.movesLabel': 'Successful Moves',
        'about.valuesTitle': 'Our Core Values',
        'about.value1Title': 'Integrity',
        'about.value1Desc': 'Transparency in pricing and honesty in every interaction with our clients.',
        'about.value2Title': 'Care',
        'about.value2Desc': 'We treat your belongings as if they were our own, with the utmost respect and care.',
        'about.value3Title': 'Efficiency',
        'about.value3Desc': 'Constant improvement of our processes to provide the fastest service possible.',
        'about.ctaTitle': 'Want to work with us?',
        'about.ctaSubtitle': 'Experience the difference with a professional moving team that values your time and property.',
        'about.ctaButton': 'Get Your Quote Now',

        // Contact Page
        'contact.heroTitle': 'Contact Us',
        'contact.heroSubtitle': "Have questions? We're here to help you plan your next move.",
        'contact.title': 'Get in Touch',
        'contact.subtitle': 'Whether you need a quick quote or have specific questions about our services, our team is ready to assist you.',
        'contact.officeTitle': 'Our Office',
        'contact.officeAddr': 'Bole, Addis Ababa, Ethiopia',
        'contact.phoneTitle': 'Phone',
        'contact.emailTitle': 'Email',
        'contact.hoursTitle': 'Business Hours',
        'contact.hoursWeekday': 'Monday - Friday: 8:00 AM - 6:00 PM',
        'contact.hoursSaturday': 'Saturday: 9:00 AM - 4:00 PM',

        // Services Page
        'services.heroTitle': 'Our Professional Services',
        'services.heroSubtitle': 'Comprehensive moving solutions designed to make your transition smooth, safe, and efficient.',
        'services.serviceLabel': 'Service',
        'services.feature1': 'Professional packing and handling',
        'services.feature2': 'Secure transportation with modern trucks',
        'services.feature3': 'Full insurance coverage options',
        'services.ctaButton': 'Request Quote for this Service',
        'services.customTitle': 'Need a Custom Solution?',
        'services.customSubtitle': 'We understand every move is unique. If you have special requirements, contact us and we\'ll create a tailored plan for you.',
        'services.customCta1': 'Contact Us',
        'services.customCta2': 'Get a Custom Quote',

        // Quote Page & Form
        'quotePage.title': 'Get a Free Quote',
        'quotePage.subtitle': "Fill out the form below and we'll provide you with a detailed, no-obligation quote for your move.",
        'quoteForm.successTitle': 'Request Sent!',
        'quoteForm.successMessage': 'Thank you for choosing Habesha Movers. Our team will review your request and contact you within 24 hours with a free quote.',
        'quoteForm.another': 'Send another request',
        'quoteForm.processing': 'Processing...',
        'quoteForm.submit': 'Submit Quote Request',
        'quoteForm.villa': 'Villa / Large House',
        'quoteForm.smallOffice': 'Small Office',
        'quoteForm.largeOffice': 'Large Office',
        'quoteForm.movingDatePref': 'Preferred Moving Date',
        'quoteForm.houseOrOffice': 'House/Office Size',

        // Quote Form (Home version uses these keys too)
        'quote.title': "Let's Get You Moving",
        'quote.subtitle': 'Get your free quote in three quick steps.',
        'quote.pickup': 'Pickup Address',
        'quote.pickupPlaceholder': 'Pickup from...',
        'quote.destination': 'Destination Address',
        'quote.destinationPlaceholder': 'Moving to...',
        'quote.serviceType': 'Service Type',
        'quote.serviceTypePlaceholder': 'Select a service...',
        'quote.service.house': 'House Moving',
        'quote.service.office': 'Office Relocation',
        'quote.service.packing': 'Packing Services',
        'quote.service.mediumOffice': 'Medium Office (10-50 desks)',
        'quote.service.floorRelocation': 'Full Floor Relocation',
        'quote.officeSize': 'Office Size',
        'quote.packingItems': 'What needs packing?',
        'quote.packingItemsPlaceholder': 'e.g., Kitchen, 3 Bedrooms, Fragile items...',
        'quote.houseSize': 'House Size',
        'quote.selectSize': 'Select Size',
        'quote.movingDate': 'Moving Date',
        'quote.attachFile': 'Attach Item Photos',
        'quote.attachFilePlaceholder': 'Select images...',
        'quote.fullName': 'Full Name',
        'quote.email': 'Email Address',
        'quote.phone': 'Phone Number',
        'quote.notes': 'Special Notes (Optional)',
        'quote.notesPlaceholder': 'Special instructions, fragile items, etc.',
        'quote.continue': 'Continue',
        'quote.back': 'Back',
        'quote.next': 'Next',
        'quote.button': 'Get Free Quote',
        'quote.sending': 'Sending...',
        'quote.successTitle': 'Request Received!',
        'quote.successMessage': 'Thank you for choosing Habesha Movers. We will review your request and contact you within 30 minutes with a detailed quote.',
        'quote.another': 'Make Another Request',

        // House Sizes
        'size.studio': 'Studio',
        'size.studio1br': 'Studio / 1 Bedroom',
        'size.1br': '1 Bedroom',
        'size.2br': '2 Bedrooms',
        'size.3br': '3 Bedrooms',
        'size.3plusbr': '3+ Bedrooms',
        'size.4br': '4+ Bedrooms',
        'size.office': 'Office',

        // Footer
        'footer.brandSubtitle': 'Professional moving services in Addis Ababa. We handle your belongings with care and precision.',
        'footer.quickLinks': 'Quick Links',
        'footer.ourServices': 'Our Services',
        'footer.contactUs': 'Contact Us',
        'footer.home': 'Home',
        'footer.services': 'Services',
        'footer.about': 'About Us',
        'footer.contact': 'Contact',
        'footer.rights': 'All rights reserved.',

        // Toasts & Validation
        'toast.locationError': 'Please select both pickup and destination',
        'toast.addisError': 'Please provide valid locations in Addis Ababa',
        'toast.detailsError': 'Please provide house size and moving date',
        'toast.success': 'Quote request sent successfully!',
        'toast.error': 'An error occurred',
        'val.nameShort': 'Name is too short',
        'val.emailInvalid': 'Invalid email address',
        'val.phoneInvalid': 'Invalid phone number',
        'val.addrShort': 'Address is too short',
        'val.selectSize': 'Please select a house size',
        'val.selectDate': 'Please select a moving date',
        'val.genericError': 'Something went wrong. Please try again.',
        'val.connError': 'Failed to send request. Check your connection.',
        'notAvailable.title': 'Not Available Right Now',
        'notAvailable.description': "We're currently updating this service to serve you better. Please check back soon or contact us for a custom arrangement.",
        'notAvailable.contactSupport': 'Contact Support',
        'notAvailable.backToServices': 'Back to Services',
        'notAvailable.immediateHelp': 'Need immediate help?',
    },
    am: {
        // Header
        'nav.services': 'የማጓጓዝ አገልግሎቶች',
        'nav.locations': 'አድራሻዎች',
        'nav.about': 'ስለ እኛ',
        'nav.contact': 'ያግኙን',
        'header.licensed': 'ፍቃድ ያለው',
        'header.callUs': 'ይደውሉልን',
        'header.callUsAt': 'ይደውሉልን - 0999220000',

        // Services
        'service.house': 'የቤት ዕቃ ማጓጓዝ',
        'service.houseDescShort': 'የቤትዎን ንብረቶች በሙሉ ደህንነቱ በተጠበቀ ሁኔታ እናጓጉዛለን።',
        'service.houseDescLong': 'ወደ አዲስ ቤት እየተዛወሩ ነው? ቡድናችን ከማሸግ ጀምሮ እስከ ማጓጓዝ እና አዲሱ ቤትዎ ውስጥ እስከ ማውረድ ድረስ ሁሉንም ነገር ይይዛል።',
        'service.office': 'የቢሮ ዕቃ ማጓጓዝ',
        'service.officeDescShort': 'ለቢሮዎች እና ለንግድ ድርጅቶች ቀልጣፋ የማጓጓዝ አገልግሎት።',
        'service.officeDescLong': 'ለስራዎ የሚፈጠረውን መስተጓጎል ይቀንሱ። የቢሮ እቃዎችን የመገጣጠም እና የማጓጓዝ አገልግሎት በብቃት እንሰጣለን።',
        'service.packing': 'የማሸግ አገልግሎት',
        'service.packingDescShort': 'ፕሮፌሽናል የማሸጊያ ቁሳቁሶች እና ጥንቃቄ የተሞላበት አያያዝ።',
        'service.packingDescLong': 'ጊዜዎን ይቆጥቡ እና ደህንነታቸውን ያረጋግጡ። ከፍተኛ ጥራት ያላቸውን የማሸጊያ ቁሳቁሶች እና ፕሮፌሽናል የማሸግ አገልግሎት እናቀርባለን።',
        'service.international': 'ዓለም አቀፍ ማጓጓዝ',
        'service.internationalDesc': 'ቀጣይነት ያለው የዓለም አቀፍ መጓጓዣ እና ሎጅስቲክስ አገልግሎቶች።',
        'service.storage': 'የመጋዘን አገልግሎት',
        'service.storageDesc': 'ደህንነቱ የተጠበቀ መጋዘን ለአጭር ወይም ለረጅም ጊዜ እናቀርባለን።',
        'service.car': 'የመኪና ማጓጓዝ',
        'service.carDesc': 'ተሽከርካሪዎን ባሉበት ሆነው ወደሚፈልጉት ቦታ እናጓጉዛለን።',

        // Hero
        'hero.badge': 'ሐበሻ አጓጓዦች',
        'hero.title1': 'ፕሮፌሽናል',
        'hero.title2': 'የማጓጓዝ አገልግሎቶች',
        'hero.description': 'ሐበሻ አጓጓዦች በአዲስ አበባ እና በአካባቢዋ አስተማማኝ የማጓጓዝ አገልግሎት ይሰጣል። ፈጣን ቅጽ በመሙላት ነፃ ዋጋ ያግኙ።',
        'hero.stats.moves': '30,000+',
        'hero.stats.movesLabel': 'ቤተሰቦችን አዛውረናል',
        'hero.stats.safe': '100%',
        'hero.stats.safeLabel': 'ደህንነቱ የተጠበቀ',
        'hero.mobileStats.moves': '30ሺ+ ጉዞዎች',
        'hero.mobileStats.safe': '100% አስተማማኝ',
        'hero.mobileStats.trusted': '❤️ በአዲስ አበባ የሚታመን',

        // Why Choose Us
        'why.title': 'ለምን ሐበሻ?',
        'why.description': "ደንበኞቻችን ደጋግመው ለምን እንደሚመርጡን እዚህ ያያሉ። ከመጀመሪያው ዋጋ መጠየቂያ እስከ መጨረሻው ሳጥን ድረስ ማጓጓዝን ቀላል እናደርገዋለን።",
        'why.benefit1': 'ፍቃድ ያለው እና ዋስትና ያለው አገልግሎት',
        'why.benefit2': 'ግልጽ የሆነ ዋጋ ያለ ምንም ተጨማሪ ክፍያ',
        'why.benefit3': 'ለእያንዳንዱ ጉዞ የተዘጋጀ ልዩ አገልግሎት',
        'why.benefit4': 'ሁልጊዜ በሰዓቱ እንገኛለን',
        'why.experienceValue': '5+',
        'why.experienceLabel1': 'የዓመታት',
        'why.experienceLabel2': 'ልምድ',

        // Professional Services Section
        'pro.title': 'ፕሮፌሽናል አገልግሎቶች',
        'pro.description': 'ፍላጎቶችዎን ለማሟላት የተነደፉ ሰፋ ያሉ የማጓጓዝ አገልግሎቶችን እናቀርባለን። ከአካባቢያዊ የቤት ሽግግር እስከ ዓለም አቀፍ መጓጓዣዎች ድረስ ቡድናችን ለመርዳት ዝግጁ ነው።',

        // CTA Section
        'cta.title': 'ለመዛወር ዝግጁ ነዎት?',
        'cta.subtitle': 'ዛሬውኑ ያግኙን እና በጥቂት ደቂቃዎች ውስጥ ነፃ ዋጋ ያግኙ።',
        'cta.button': 'አሁኑኑ ይጀምሩ',

        // About Page
        'about.heroTitle': 'ስለ ሐበሻ አጓጓዦች',
        'about.heroSubtitle': 'ተልእኳችን በኢትዮጵያ ውስጥ እጅግ አስተማማኝ እና ከጭንቀት ነፃ የሆነ የማጓጓዝ ልምድ ማቅረብ ነው።',
        'about.storyTitle': 'ታሪካችን',
        'about.storyP1': 'በአዲስ አበባ የሎጂስቲክስ እና የማጓጓዝ ኢንዱስትሪን ለመለወጥ ባለ ራዕይ ሆኖ የተመሰረተው ሐበሻ አጓጓዦች፣ ከአነስተኛ የሀገር ውስጥ ቡድን ተነስቶ አሁን ፕሮፌሽናል የማጓጓዝ አገልግሎት በሚሰጡ ስሞች መካከል አንዱ ሆኗል።',
        'about.storyP2': 'ነዋሪዎች እና ንግዶች በሚዘዋወሩበት ጊዜ የሚያጋጥሟቸውን ተግዳሮቶች—የግልጽነት እጥረት፣ የደህንነት ስጋቶች እና የማይታመን የጊዜ ሰሌዳን ተገንዝበናል። ሐበሻ አጓጓዦች እነዚህን ችግሮች በፕሮፌሽናሊዝም፣ በቴክኖሎጂ እና ለደንበኛ ቅድሚያ በሚሰጥ አቀራረብ ለመፍታት ተገንብቷል።',
        'about.expValue': '5+',
        'about.expLabel': 'የዓመታት ልምድ',
        'about.movesValue': '2,500+',
        'about.movesLabel': 'ስኬታማ ጉዞዎች',
        'about.valuesTitle': 'ዋና እሴቶቻችን',
        'about.value1Title': 'ታማኝነት',
        'about.value1Desc': 'በዋጋ አሰጣጥ ላይ ግልጽነት እና ከደንበኞቻችን ጋር በሚኖረን እያንዳንዱ ግንኙነት ታማኝነት።',
        'about.value2Title': 'እንክብካቤ',
        'about.value2Desc': 'ንብረቶቻችሁን ልክ እንደ ራሳችን አድርገን በከፍተኛ ጥንቃቄ እና ክብር እንይዛለን።',
        'about.value3Title': 'ቅልጥፍና',
        'about.value3Desc': 'ፈጣን አገልግሎት ለመስጠት ሂደቶቻችንን በየጊዜው እናሻሽላለን።',
        'about.ctaTitle': 'ከእኛ ጋር መስራት ይፈልጋሉ?',
        'about.ctaSubtitle': 'ለጊዜዎ እና ለንብረትዎ ዋጋ ከሚሰጥ ፕሮፌሽናል የማጓጓዝ ቡድን ጋር ልዩነቱን ይለማመዱ።',
        'about.ctaButton': 'አሁኑኑ ዋጋ ያግኙ',

        // Contact Page
        'contact.heroTitle': 'ያግኙን',
        'contact.heroSubtitle': 'ጥያቄዎች አሉዎት? ቀጣይ ጉዞዎን ለማቀድ ለመርዳት ዝግጁ ነን።',
        'contact.title': 'ያግኙን',
        'contact.subtitle': 'ፈጣን ዋጋ ቢፈልጉ ወይም ስለ አገልግሎቶቻችን ጥያቄዎች ቢኖሩዎት ቡድናችን እርስዎን ለመርዳት ዝግጁ ነው።',
        'contact.officeTitle': 'ጽሕፈት ቤታችን',
        'contact.officeAddr': 'ቦሌ፣ አዲስ አበባ፣ ኢትዮጵያ',
        'contact.phoneTitle': 'ስልክ',
        'contact.emailTitle': 'ኢሜይል',
        'contact.hoursTitle': 'የስራ ሰዓታት',
        'contact.hoursWeekday': 'ከሰኞ - አርብ: 2:00 ጠዋት - 12:00 ማታ',
        'contact.hoursSaturday': 'ቅዳሜ: 3:00 ጠዋት - 10:00 ቀን',

        // Services Page
        'services.heroTitle': 'ፕሮፌሽናል አገልግሎቶቻችን',
        'services.heroSubtitle': 'ጉዞዎ ለስላሳ፣ ደህንነቱ የተጠበቀ እና ቀልጣፋ እንዲሆን የተነደፉ ዝርዝር የማጓጓዝ መፍትሄዎች።',
        'services.serviceLabel': 'አገልግሎት',
        'services.feature1': 'ፕሮፌሽናል ማሸግ እና አያያዝ',
        'services.feature2': 'በዘመናዊ መኪኖች አስተማማኝ መጓጓዣ',
        'services.feature3': 'ሙሉ የኢንሹራንስ ዋስትና አማራጮች',
        'services.ctaButton': 'ለዚህ አገልግሎት ዋጋ ይጠይቁ',
        'services.customTitle': 'ልዩ መፍትሄ ይፈልጋሉ?',
        'services.customSubtitle': 'እያንዳንዱ ጉዞ ልዩ መሆኑን እንረዳለን። ልዩ ፍላጎት ካለዎት ያግኙን እና ለእርስዎ የሚሆን እቅድ እናዘጋጃለን።',
        'services.customCta1': 'ያግኙን',
        'services.customCta2': 'ልዩ ዋጋ ያግኙ',

        // Quote Page & Form
        'quotePage.title': 'ነፃ ዋጋ ያግኙ',
        'quotePage.subtitle': 'ከታች ያለውን ቅጽ ይሙሉ እና ለጉዞዎ ዝርዝር እና ግዴታ የሌለበት ዋጋ እናቀርብልዎታለን።',
        'quoteForm.successTitle': 'ጥያቄዎ ተልኳል!',
        'quoteForm.successMessage': 'ሐበሻ አጓጓዦችን ስለመረጡ እናመሰግናለን። ቡድናችን ጥያቄዎን አይቶ በ24 ሰዓታት ውስጥ ነፃ ዋጋ ይዞ ይቀርብልዎታል።',
        'quoteForm.another': 'ሌላ ጥያቄ ይላኩ',
        'quoteForm.processing': 'በመላክ ላይ...',
        'quoteForm.submit': 'የዋጋ ጥያቄውን ይላኩ',
        'quoteForm.villa': 'ቪላ / ትልቅ ቤት',
        'quoteForm.smallOffice': 'ትንሽ ቢሮ',
        'quoteForm.largeOffice': 'ትልቅ ቢሮ',
        'quoteForm.movingDatePref': 'የሚመርጡት የጉዞ ቀን',
        'quoteForm.houseOrOffice': 'የቤት/ቢሮ ስፋት',
        'quote.service.house': 'የቤት ዕቃ ማጓጓዝ',
        'quote.service.office': 'የቢሮ ዕቃ ማጓጓዝ',
        'quote.service.packing': 'የማሸግ አገልግሎት',
        'quote.service.mediumOffice': 'መካከለኛ ቢሮ (10-50 ጠረጴዛዎች)',
        'quote.service.floorRelocation': 'ሙሉ ፎቅ ማዛወር',
        'quote.serviceType': 'የአገልግሎት ዓይነት',
        'quote.serviceTypePlaceholder': 'አገልግሎት ይምረጡ...',

        // Quote Form
        'quote.title': "እንጀምር",
        'quote.subtitle': 'በሶስት ፈጣን እርምጃዎች ነፃ ዋጋ ያግኙ።',
        'quote.pickup': 'መነሻ አድራሻ',
        'quote.pickupPlaceholder': 'መነሻ ቦታ...',
        'quote.destination': 'መድረሻ አድራሻ',
        'quote.destinationPlaceholder': 'መድረሻ ቦታ...',
        'quote.houseSize': 'የቤት ስፋት',
        'quote.selectSize': 'ስፋት ይምረጡ',
        'quote.movingDate': 'የሚዛወሩበት ቀን',
        'quote.fullName': 'ሙሉ ስም',
        'quote.email': 'ኢሜይል',
        'quote.phone': 'የስልክ ቁጥር',
        'quote.notes': 'ተጨማሪ ማሳሰቢያ (ካለ)',
        'quote.notesPlaceholder': 'ልዩ መመሪያዎች፣ በቀላሉ የሚሰበሩ ዕቃዎች፣ ወዘተ.',
        'quote.continue': 'ቀጥል',
        'quote.back': 'ተመለስ',
        'quote.next': 'ቀጣይ',
        'quote.button': 'ነፃ ዋጋ ያግኙ',
        'quote.sending': 'በመላክ ላይ...',
        'quote.successTitle': 'ጥያቄዎ ደርሶናል!',
        'quote.successMessage': 'ሐበሻ አጓጓዦችን ስለመረጡ እናመሰግናለን። ጥያቄዎን አይተን በ30 ደቂቃ ውስጥ ዝርዝር ዋጋ ይዘን እንመለሳለን።',
        'quote.another': 'ሌላ ጥያቄ ይላኩ',

        // House Sizes
        'size.studio': 'ስቱዲዮ',
        'size.studio1br': 'ስቱዲዮ / ባለ 1 መኝታ',
        'size.1br': 'ባለ 1 መኝታ',
        'size.2br': 'ባለ 2 መኝታ',
        'size.3br': 'ባለ 3 መኝታ',
        'size.3plusbr': 'ባለ 3 እና ከዚያ በላይ',
        'size.4br': 'ባለ 4 እና ከዚያ በላይ',
        'size.office': 'ቢሮ',

        // Footer
        'footer.brandSubtitle': 'በአዲስ አበባ ውስጥ ፕሮፌሽናል የማጓጓዝ አገልግሎት። ንብረትዎን በጥንቃቄ እና በተገቢው መንገድ እናጓጉዛለን።',
        'footer.quickLinks': 'ፈጣን ሊንኮች',
        'footer.ourServices': 'አገልግሎቶቻችን',
        'footer.contactUs': 'ያግኙን',
        'footer.home': 'መነሻ',
        'footer.services': 'አገልግሎቶች',
        'footer.about': 'ስለ እኛ',
        'footer.contact': 'ካርታ/አድራሻ',
        'footer.rights': 'መብቱ በህግ የተጠበቀ ነው።',

        // Toasts & Validation
        'toast.locationError': 'እባክዎ መነሻ እና መድረሻ ቦታዎችን ይምረጡ',
        'toast.addisError': 'እባክዎ በአዲስ አበባ ውስጥ ያሉ ትክክለኛ ቦታዎችን ይጥቀሱ',
        'toast.detailsError': 'እባክዎ የቤት ስፋት እና የሚዛወሩበትን ቀን ይጥቀሱ',
        'toast.success': 'የዋጋ ጥያቄዎ በተሳካ ሁኔታ ተልኳል!',
        'toast.error': 'ስህተት ተከስቷል',
        'val.nameShort': 'ስም በጣም አጭር ነው',
        'val.emailInvalid': 'ትክክለኛ ኢሜይል አይደለም',
        'val.phoneInvalid': 'ትክክለኛ የስልክ ቁጥር አይደለም',
        'val.addrShort': 'አድራሻ በጣም አጭር ነው',
        'val.selectSize': 'እባክዎ የቤት ስፋት ይምረጡ',
        'val.selectDate': 'እባክዎ የሚዛወሩበትን ቀን ይምረጡ',
        'val.genericError': 'ስህተት ተከስቷል። እባክዎ ድጋሚ ይሞክሩ።',
        'val.connError': 'ጥያቄውን መላክ አልተቻለም። ኢንተርኔትዎን ይፈትሹ።',
        'notAvailable.title': 'አሁን አይገኝም',
        'notAvailable.description': 'ይህንን አገልግሎት በተሻለ መልኩ ለእርስዎ ለማቅረብ በማስተካከል ላይ ነን። እባክዎን በቅርቡ ተመልሰው ይምጡ ወይም ለልዩ ዝግጅት ያግኙን።',
        'notAvailable.contactSupport': 'ድጋፍ ሰጪዎችን ያግኙ',
        'notAvailable.backToServices': 'ወደ አገልግሎቶች ይመለሱ',
        'notAvailable.immediateHelp': 'አስቸኳይ እርዳታ ይፈልጋሉ?',
    }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [language, setLanguageState] = useState<Language>('en');

    useEffect(() => {
        const savedLang = localStorage.getItem('language') as Language;
        if (savedLang && (savedLang === 'en' || savedLang === 'am')) {
            setLanguageState(savedLang);
        }
    }, []);

    useEffect(() => {
        if (language === 'am') {
            document.body.classList.add('lang-am');
        } else {
            document.body.classList.remove('lang-am');
        }
    }, [language]);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem('language', lang);
    };

    const t = (key: string): string => {
        return (translations[language] as any)[key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
