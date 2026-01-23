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
        'hero.stats.moves': '300+',
        'hero.stats.movesLabel': 'Families moved',
        'hero.stats.safe': '100%',
        'hero.stats.safeLabel': 'Safe Delivery Rate',
        'hero.mobileStats.moves': '300+ Moves',
        'hero.mobileStats.safe': '100% Safe',
        'hero.mobileStats.trusted': '❤️ Trusted in Addis',

        // Why Choose Us
        'why.title': 'Why Choose Us',
        'why.description': "Here's why customers trust us time and again. From your first quote to your final box, here's how we make moving smooth and stress-free.",
        'why.benefit1': 'Licensed and insured moving',
        'why.benefit1Desc': 'Licensed and insured moving services you can trust with your valuables.',
        'why.benefit2': 'Transparent pricing with no hidden fees',
        'why.benefit2Desc': 'Transparent pricing with no hidden fees or surprise charges.',
        'why.benefit3': 'Customized services for every move',
        'why.benefit3Desc': 'Customized services tailored to meet your specific moving needs.',
        'why.benefit4': 'On-time, every time',
        'why.benefit4Desc': 'On-time delivery and punctual service every single time.',
        'why.experienceValue': '5+',
        'why.experienceLabel1': 'Years of',
        'why.experienceLabel2': 'Experience',
        'why.available247': 'Available 24/7',

        // Professional Services Section
        'pro.title': 'Professional Services',
        'pro.description': 'We provide a comprehensive range of moving services designed to meet your every need. From local house moves to complicated international relocations, our team is ready to help.',

        // CTA Section
        'cta.title': 'Ready to make your move?',
        'cta.subtitle': 'Contact us today and get your free customized quote in minutes.',
        'cta.button': 'Get Started Now',

        // About Page
        'about.heroTitle': 'About Habesha Movers',
        'about.heroSubtitle': 'Your trusted partner for professional, secure, and efficient relocation services in Addis Ababa.',

        // 1. Company Overview
        'about.overview.title': 'Company Overview',
        'about.overview.content': 'Habesha Movers is a premier, licensed moving company based in Addis Ababa, dedicated to providing world-class relocation services. With a robust operational framework and a team of seasoned professionals, we specialize in seamless residential and corporate moves. Our deep understanding of local logistics, combined with international best practices, ensures that every move is executed with precision, safety, and reliability.',

        // 2. Mission Statement
        'about.mission.title': 'Our Mission',
        'about.mission.content': 'To deliver reliable, efficient, and secure relocation services that exceed client expectations. We are committed to maintaining the highest standards of professionalism, integrity, and safety, ensuring a stress-free transition for every household and business we serve.',

        // 3. Services
        'about.services.title': 'Our Core Services',
        'about.services.residential': 'Residential & Apartment Moving',
        'about.services.residentialDesc': 'Comprehensive home relocation services tailored to your specific needs, from studio apartments to large estates.',
        'about.services.corporate': 'Office & Corporate Relocation',
        'about.services.corporateDesc': 'Minimizing business downtime with structured, efficient, and secure office moving solutions.',
        'about.services.packing': 'Professional Packing & Unpacking',
        'about.services.packingDesc': 'Expert handling of your belongings using high-quality materials to ensure zero damage during transit.',
        'about.services.local': 'Local Logistics',
        'about.services.localDesc': 'Specialized short-distance moves within Addis Ababa and surrounding areas, optimized for speed and safety.',

        // 4. Operational Strengths
        'about.strengths.title': 'Operational Excellence',
        'about.strengths.staff': 'Expertly Trained Team',
        'about.strengths.staffDesc': 'Our movers are rigorously trained in handling techniques, safety protocols, and customer service.',
        'about.strengths.fleet': 'Modern Fleet & Equipment',
        'about.strengths.fleetDesc': 'We utilize well-maintained vehicles and professional handling equipment to guarantee the safety of your assets.',
        'about.strengths.pricing': 'Transparent Pricing',
        'about.strengths.pricingDesc': 'Clear, upfront quotes with no hidden fees, providing you with financial predictability.',
        'about.strengths.planning': 'Risk-Aware Planning',
        'about.strengths.planningDesc': 'Detailed operational planning to mitigate risks and ensure on-time execution.',

        // 5. Values
        'about.values.title': 'Our Professional Standards',
        'about.values.reliability': 'Reliability',
        'about.values.reliabilityDesc': 'We deliver on our promises, every time.',
        'about.values.safety': 'Safety',
        'about.values.safetyDesc': 'The security of your property is our top priority.',
        'about.values.transparency': 'Transparency',
        'about.values.transparencyDesc': 'Honest communication constitutes the foundation of our trusted relationships.',
        'about.values.efficiency': 'Efficiency',
        'about.values.efficiencyDesc': 'Optimized processes for timely and smooth delivery.',

        // 6. Local Expertise
        'about.local.title': 'Local Expertise',
        'about.local.content': 'Navigating Addis Ababa requires more than just a truck; it demands deep local knowledge. Our team possesses an intimate understanding of the city’s sub-cities, traffic patterns, and logistical unique challenges. This expertise allows us to plan efficient routes, avoid delays, and ensure that your move remains on schedule regardless of local conditions.',

        // 7. Closing & CTA
        'about.ctaTitle': 'Partner With Us',
        'about.ctaSubtitle': 'Experience the difference of working with a true industry professional. Contact Habesha Movers today for a seamless relocation experience.',
        'about.ctaButton': 'Request Corporate Quote',

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

        // House Moving Page Specific
        'house.hero.badge': '#1 Rated Service',
        'house.hero.title1': 'Moving Home,',
        'house.hero.title2': 'Simplified.',
        'house.hero.description': 'Experience a stress-free transition with our premium house moving service. We handle your belongings with the care, precision, and respect they deserve.',
        'house.hero.cta1': 'Get a Free Quote',
        'house.hero.cta2': 'Talk to an Expert',
        'house.trust.title': 'Fully Insured',
        'house.trust.label': '100% Item Coverage',
        'house.trust.description': 'Every item is inventoried, packed with premium materials, and protected throughout the journey.',
        'house.why.badge': 'Why Choose Habesha',
        'house.why.title1': 'More Than Just',
        'house.why.title2': 'Heavy Lifting.',
        'house.why.description': 'We understand that moving isn\'t just about shifting boxes—it\'s about relocating your life. Our Habesha team combines strength with sensitivity, ensuring your cherished memories arrive safely at your new doorstep.',
        'house.stats.rating': 'Customer Rating',
        'house.stats.families': 'Happy Families',
        'house.process.title': 'Seamless Moving Process',
        'house.process.description': 'From the first quote to the last box, we\'ve streamlined every step.',
        'house.process.step1.title': 'Quote',
        'house.process.step1.desc': 'Get a free, transparent estimate instantly online or via phone.',
        'house.process.step2.title': 'Plan',
        'house.process.step2.desc': 'We schedule at your convenience and create a custom moving plan.',
        'house.process.step3.title': 'Pack',
        'house.process.step3.desc': 'Our team carefully wraps and packs your items with premium materials.',
        'house.process.step4.title': 'Move',
        'house.process.step4.desc': 'Safe transport and placement of items in your new home.',
        'house.protection.badge': 'Premium Protection',
        'house.protection.title1': 'We Treat Your Goods Like',
        'house.protection.title2': 'Royal Treasure.',
        'house.protection.feature1': 'Triple-layer bubble wrap for fragile items',
        'house.protection.feature2': 'Heavy-duty furniture blankets & padding',
        'house.protection.feature3': 'Custom crates for artwork and electronics',
        'house.protection.feature4': 'Floor runners to protect your new home',
        'house.cta.title': 'Ready to Make Your Move?',
        'house.cta.description': 'Join thousands of satisfied customers who moved with peace of mind. Get your personalized quote today.',
        'house.cta.button': 'Get Your Free Quote',

        // Service Features (Shared/Common)
        'feature.damageFree': 'Damage Free',
        'feature.damageFreeDesc': 'Expert handling & padding',
        'feature.onTime': 'On Time',
        'feature.onTimeDesc': 'Punctual start & delivery',
        'feature.friendly': 'Friendly Team',
        'feature.friendlyDesc': 'Respectful & professional',
        'feature.modernFleet': 'Modern Fleet',
        'feature.modernFleetDesc': 'Clean, equipped trucks',

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
        'quote.attachFile': 'Attach Item Photos (Max 4)',
        'quote.attachFilePlaceholder': 'Select images...',
        'quote.photoLimitError': 'You can only upload up to 4 photos',
        'quote.selectedPhotos': 'photos selected',
        'quote.fullName': 'Full Name',
        'quote.email': 'Email Address',
        'quote.phone': 'Phone Number (+251...)',
        'quote.notes': 'Special Notes (Optional)',
        'error.invalidPhone': 'Please enter a valid Ethiopian phone number (+251 followed by 9 or 10 digits).',
        'error.rateLimit15m': 'Please wait 15 minutes before sending another request.',
        'error.rateLimit24h': 'Daily limit reached. Please try again tomorrow.',
        'quote.minutesRemaining': 'minutes remaining',
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
        'footer.brandSubtitle': 'We provide reliable, safe, and professional moving services across Addis Ababa. Our experienced team ensures your belongings are handled with care from start to finish.',
        'footer.quickLinks': 'Quick Links',
        'footer.ourServices': 'Our Services',
        'footer.contactUs': 'Contact Us',
        'footer.home': 'Home',
        'footer.services': 'Services',
        'footer.about': 'About Us',
        'footer.contact': 'Contact',
        'footer.loadingUnloading': 'Loading & Unloading',
        'footer.address': 'Gurd Shola, Addis Ababa, Ethiopia',
        'footer.rights': 'All rights reserved.',

        // Toasts & Validation
        'toast.locationError': 'Please select both pickup and destination',
        'toast.selectService': 'Please select a service to continue',
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
        'hero.stats.moves': '300+',
        'hero.stats.movesLabel': 'ቤተሰቦችን አዛውረናል',
        'hero.stats.safe': '100%',
        'hero.stats.safeLabel': 'ደህንነቱ የተጠበቀ',
        'hero.mobileStats.moves': '300+ ጉዞዎች',
        'hero.mobileStats.safe': '100% አስተማማኝ',
        'hero.mobileStats.trusted': '❤️ በአዲስ አበባ የሚታመን',

        // Why Choose Us
        'why.title': 'ለምን ሐበሻ?',
        'why.description': "ደንበኞቻችን ደጋግመው ለምን እንደሚመርጡን እዚህ ያያሉ። ከመጀመሪያው ዋጋ መጠየቂያ እስከ መጨረሻው ሳጥን ድረስ ማጓጓዝን ቀላል እናደርገዋለን።",
        'why.benefit1': 'ፍቃድ ያለው እና ዋስትና ያለው አገልግሎት',
        'why.benefit1Desc': 'ለእቃዎ ዋስትና የሚሰጥ ህጋዊ እና ኢንሹራንስ ያለው የማጓጓዝ አገልግሎት።',
        'why.benefit2': 'ግልጽ የሆነ ዋጋ ያለ ምንም ተጨማሪ ክፍያ',
        'why.benefit2Desc': 'ምንም ተደብቆ ያለ ተጨማሪ ክፍያ የሌለበት ግልጽ ዋጋ።',
        'why.benefit3': 'ለእያንዳንዱ ጉዞ የተዘጋጀ ልዩ አገልግሎት',
        'why.benefit3Desc': 'ለእርስዎ ልዩ የማጓጓዝ ፍላጎት ተብሎ የተዘጋጀ አገልግሎት።',
        'why.benefit4': 'ሁልጊዜ በሰዓቱ እንገኛለን',
        'why.benefit4Desc': 'ሁልጊዜ በሰዓቱ የሚሰጥ ቀልጣፋ አገልግሎት።',
        'why.experienceValue': '5+',
        'why.experienceLabel1': 'የዓመታት',
        'why.experienceLabel2': 'ልምድ',
        'why.available247': '24/7 ዝግጁ ነን',

        // Professional Services Section
        'pro.title': 'ፕሮፌሽናል አገልግሎቶች',
        'pro.description': 'ፍላጎቶችዎን ለማሟላት የተነደፉ ሰፋ ያሉ የማጓጓዝ አገልግሎቶችን እናቀርባለን። ከአካባቢያዊ የቤት ሽግግር እስከ ዓለም አቀፍ መጓጓዣዎች ድረስ ቡድናችን ለመርዳት ዝግጁ ነው።',

        // CTA Section
        'cta.title': 'ለመዛወር ዝግጁ ነዎት?',
        'cta.subtitle': 'ዛሬውኑ ያግኙን እና በጥቂት ደቂቃዎች ውስጥ ነፃ ዋጋ ያግኙ።',
        'cta.button': 'አሁኑኑ ይጀምሩ',

        // About Page
        'about.heroTitle': 'ስለ ሐበሻ አጓጓዦች',
        'about.heroSubtitle': 'የእርስዎ ታማኝ አጋር ለሙያዊ፣ አስተማማኝ እና ቀልጣፋ የማጓጓዝ አገልግሎት በአዲስ አበባ።',

        // 1. Company Overview
        'about.overview.title': 'ስለ ኩባንያው',
        'about.overview.content': 'ሐበሻ አጓጓዦች በአዲስ አበባ የሚገኝ ፍቃድ ያለው እና የመጀመሪያ ደረጃ የማጓጓዝ አገልግሎት የሚሰጥ ድርጅት ነው። በጠንካራ አሰራር እና ልምድ ባላቸው ባለሙያዎች ታግዘን፣ ለነዋሪዎች እና ለድርጅቶች ቀልጣፋ የማጓጓዝ አገልግሎት እንሰጣለን። ስለ አካባቢው ሎጅስቲክስ ያለን ጥልቅ እውቀት ከዓለም አቀፍ አሰራር ጋር ተዳምሮ እያንዳንዱን ጉዞ በብቃት፣ በደህንነት እና በአስተማማኝነት እንድንፈጽም ያስችለናል።',

        // 2. Mission Statement
        'about.mission.title': 'ተልዕኳችን',
        'about.mission.content': 'የደንበኞቻችንን ከጠበቁት በላይ የሆነ አስተማማኝ፣ ቀልጣፋ እና ደህንነቱ የተጠበቀ የማጓጓዝ አገልግሎት መስጠት። ከፍተኛ የሆነ የሙያዊነት፣ የታማኝነት እና የደህንነት ደረጃን በመጠበቅ ለምናገለግለው ለእያንዳንዱ ቤተሰብ እና ድርጅት ከጭንቀት ነጻ የሆነ ሽግግርን እናረጋግጣለን።',

        // 3. Services
        'about.services.title': 'ዋና አገልግሎቶቻችን',
        'about.services.residential': 'የመኖሪያ ቤት እና አፓርታማ ማጓጓዝ',
        'about.services.residentialDesc': 'ከስቱዲዮ አፓርታማዎች እስከ ትላልቅ ቤቶች ድረስ ለእርስዎ ፍላጎት የተዘጋጀ አጠቃላይ የቤት ማጓጓዝ አገልግሎት።',
        'about.services.corporate': 'የቢሮ እና የድርጅት ማጓጓዝ',
        'about.services.corporateDesc': 'በተቀናጀ፣ ቀልጣፋ እና ደህንነቱ በተጠበቀ የቢሮ ማጓጓዝ መፍትሄዎች የስራ መቋረጥን እንቀንሳለን።',
        'about.services.packing': 'ፕሮፌሽናል ማሸግ እና ማራገፍ',
        'about.services.packingDesc': 'በጉዞ ወቅት ምንም አይነት ጉዳት እንዳይደርስ ከፍተኛ ጥራት ያላቸውን ቁሳቁሶች በመጠቀም ንብረትዎን በባለሙያ መያዝ።',
        'about.services.local': 'የአካባቢ ሎጅስቲክስ',
        'about.services.localDesc': 'በአዲስ አበባ እና በአካባቢዋ ለሚደረጉ አጫጭር ርቀት ጉዞዎች በፍጥነት እና በደህንነት የተመቻቸ አገልግሎት።',

        // 4. Operational Strengths
        'about.strengths.title': 'የአሠራር ጥንካሬዎቻችን',
        'about.strengths.staff': 'በደንብ የሰለጠነ ቡድን',
        'about.strengths.staffDesc': 'አጓጓዦቻችን በአያያዝ ቴክኒኮች፣ በደህንነት ፕሮቶኮሎች እና በደንበኞች አገልግሎት ላይ ጥብቅ ስልጠና ወስደዋል።',
        'about.strengths.fleet': 'ዘመናዊ መኪሶች እና መሳሪያዎች',
        'about.strengths.fleetDesc': 'የንብረትዎን ደህንነት ለማረጋገጥ በደንብ የተያዙ ተሽከርካሪዎችን እና ፕሮፌሽናል የአያያዝ መሳሪያዎችን እንጠቀማለን።',
        'about.strengths.pricing': 'ግልጽ ዋጋ',
        'about.strengths.pricingDesc': 'ምንም ድብቅ ክፍያዎች የሌሉበት ግልጽ እና ቀጥተኛ ዋጋ፣ ይህም የፋይናንስ እርግጠኝነትን ይሰጥዎታል።',
        'about.strengths.planning': 'ስጋትን ያገናዘበ እቅድ',
        'about.strengths.planningDesc': 'አደጋዎችን ለመቀነስ እና በሰዓቱ መከናወኑን ለማረጋገጥ ዝርዝር የአሠራር እቅድ።',

        // 5. Values
        'about.values.title': 'የሙያዊ ደረጃዎቻችን',
        'about.values.reliability': 'አስተማማኝነት',
        'about.values.reliabilityDesc': 'ቃላችንን ሁልጊዜ እንጠብቃለን።',
        'about.values.safety': 'ደህንነት',
        'about.values.safetyDesc': 'የንብረትዎ ደህንነት የእኛ የቅድሚያ ትኩረት ነው።',
        'about.values.transparency': 'ግልጽነት',
        'about.values.transparencyDesc': 'ታማኝ ግንኙነት የታመነ ግንኙነታችን መሰረት ነው።',
        'about.values.efficiency': 'ቅልጥፍና',
        'about.values.efficiencyDesc': 'ለወቅታዊ እና ለስላሳ አቅርቦት የተመቻቹ ሂደቶች።',

        // 6. Local Expertise
        'about.local.title': 'የአካባቢ እውቀት',
        'about.local.content': 'በአዲስ አበባ ውስጥ ለመንቀሳቀስ መኪና ብቻ ሳይሆን ጥልቅ የአካባቢ እውቀት ይጠይቃል። ቡድናችን ስለ ከተማዋ ክፍለ ከተሞች፣ የትራፊክ ሁኔታ እና ልዩ የሎጅስቲክስ ተግዳሮቶች ጥልቅ ግንዛቤ አለው። ይህ እውቀት ቀልጣፋ መስመሮችን ለማቀድ፣ መዘግየቶችን ለማስወገድ እና የአካባቢ ሁኔታዎች ምንም ቢሆኑም ጉዞዎ በጊዜ ሰሌዳው መሰረት መከናወኑን ለማረጋገጥ ያስችለናል።',

        // 7. Closing & CTA
        'about.ctaTitle': 'ከእኛ ጋር ይስሩ',
        'about.ctaSubtitle': 'ከእውነተኛ የዘርፉ ባለሙያ ጋር የመስራትን ልዩነት ይለማመዱ። ለስላሳ የማጓጓዝ ልምድ ለማግኘት ዛሬ ሐበሻ አጓጓዦችን ያግኙ።',
        'about.ctaButton': 'የድርጅት ዋጋ ይጠይቁ',

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

        // House Moving Page Specific
        'house.hero.badge': 'የመጀመሪያ ደረጃ አገልግሎት',
        'house.hero.title1': 'የቤት ሽግግር፣',
        'house.hero.title2': 'ቀላል ተደረገ።',
        'house.hero.description': 'በፕሪሚየም የቤት ማጓጓዣ አገልግሎታችን ከጭንቀት ነፃ የሆነ ሽግግርን ይለማመዱ። ንብረቶቻችሁን በሚገባው ጥንቃቄ፣ ትክክለኛነት እና ክብር እንይዛለን።',
        'house.hero.cta1': 'ነፃ ዋጋ ያግኙ',
        'house.hero.cta2': 'ባለሙያ ያነጋግሩ',
        'house.trust.title': 'ሙሉ በሙሉ ዋስትና ያለው',
        'house.trust.label': '100% የንብረት ሽፋን',
        'house.trust.description': 'እያንዳንዱ እቃ ተመዝግቧል፣ በጥራት ቁሳቁስ ታሽጓል እና በጉዞው ሁሉ ይጠበቃል።',
        'house.why.badge': 'ለምን ሐበሻን ይመርጣሉ?',
        'house.why.title1': 'ከባድ ዕቃዎችን ከማንሳት',
        'house.why.title2': 'የበለጠ።',
        'house.why.description': 'መንቀሳቀስ ሳጥኖችን መቀየር ብቻ እንዳልሆነ እንረዳለን—ህይወታችሁን ወደ አዲስ ቦታ ማዛወር ነው። የእኛ የሐበሻ ቡድን ጥንካሬን ከጥንቃቄ ጋር በማጣመር ውድ ትዝታዎቻችሁ በአዲሱ ደጃፋችሁ በሰላም መድረሳቸውን ያረጋግጣል።',
        'house.stats.rating': 'የደንበኛ ደረጃ',
        'house.stats.families': 'ደስተኛ ቤተሰቦች',
        'house.process.title': 'ቀልጣፋ የማጓጓዝ ሂደት',
        'house.process.description': 'ከመጀመሪያው ዋጋ እስከ መጨረሻው ሳጥን ድረስ እያንዳንዱን እርምጃ አመቻችተናል።',
        'house.process.step1.title': 'ዋጋ ማግኘት',
        'house.process.step1.desc': 'ፈጣን እና ግልጽ ግምት በመስመር ላይ ወይም በስልክ ያግኙ።',
        'house.process.step2.title': 'ማቀድ',
        'house.process.step2.desc': 'በእርስዎ ምቾት መሰረት ቀጠሮ እንይዛለን እና የተለየ የጉዞ እቅድ እናዘጋጃለን።',
        'house.process.step3.title': 'ማሸግ',
        'house.process.step3.desc': 'ቡድናችን ከፍተኛ ጥራት ባላቸው ማሸጊያዎች እቃዎቻችሁን በጥንቃቄ ያሽጋል።',
        'house.process.step4.title': 'ማጓጓዝ',
        'house.process.step4.desc': 'ንብረቶቻችሁን ደህንነቱ በተጠበቀ ሁኔታ ማጓጓዝ እና በአዲሱ ቤትዎ ውስጥ ማስቀመጥ።',
        'house.protection.badge': 'ልዩ ጥበቃ',
        'house.protection.title1': 'እቃዎቻችሁን እንደ',
        'house.protection.title2': 'ንግስት ንብረት እንይዛቸዋለን።',
        'house.protection.feature1': 'በቀላሉ ለሚሰበሩ እቃዎች ባለ ሶስት ንብርብር መከላከያ',
        'house.protection.feature2': 'ለቤት እቃዎች የሚሆኑ ወፍራም ብርድ ልብሶች እና መሸፈኛዎች',
        'house.protection.feature3': 'ለኪነጥበብ እና ለኤሌክትሮኒክስ እቃዎች የተለየ ሳጥኖች',
        'house.protection.feature4': 'አዲሱን ቤትዎን ለመጠበቅ ልዩ የመሬት መሸፈኛዎች',
        'house.cta.title': 'ለመዛወር ዝግጁ ነዎት?',
        'house.cta.description': 'ከጭንቀት ነፃ በተዛወሩ በሺዎች የሚቆጠሩ ደስተኛ ደንበኞቻችንን ይቀላቀሉ። ዛሬውኑ የግል ዋጋዎን ያግኙ።',
        'house.cta.button': 'ነፃ ዋጋ ያግኙ',

        // Service Features (Shared/Common)
        'feature.damageFree': 'ጉዳት የሌለው',
        'feature.damageFreeDesc': 'ባለሙያ አያያዝ እና መሸፈኛ',
        'feature.onTime': 'በሰዓቱ',
        'feature.onTimeDesc': 'ደቂቃ የማይረፍድ አገልግሎት',
        'feature.friendly': 'ተግባቢ ቡድን',
        'feature.friendlyDesc': 'አክብሮት ያለው እና ባለሙያ',
        'feature.modernFleet': 'ዘመናዊ መኪሶች',
        'feature.modernFleetDesc': 'ንጹህ እና የተሟሉ መኪኖች',

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
        'quote.title': "አሁን ዋጋ ግምት ያግኙ",
        'quote.subtitle': 'በሶስት ፈጣን እርምጃዎች ነፃ ዋጋ ያግኙ።',
        'quote.pickup': 'መነሻ አድራሻ',
        'quote.pickupPlaceholder': 'መነሻ ቦታ...',
        'quote.destination': 'መድረሻ አድራሻ',
        'quote.destinationPlaceholder': 'መድረሻ ቦታ...',
        'quote.houseSize': 'የቤት ስፋት',
        'quote.selectSize': 'ስፋት ይምረጡ',
        'quote.movingDate': 'የሚዛወሩበት ቀን',
        'quote.attachFile': 'የእቃዎችን ፎቶ ያያይዙ (ቢበዛ 4)',
        'quote.photoLimitError': 'ማያያዝ የሚችሉት እስከ 4 ፎቶዎችን ብቻ ነው',
        'quote.selectedPhotos': 'ፎቶዎች ተመርጠዋል',
        'quote.fullName': 'ሙሉ ስም',
        'quote.email': 'ኢሜይል',
        'quote.phone': 'የስልክ ቁጥር (+251...)',
        'quote.notes': 'ተጨማሪ ማሳሰቢያ (ካለ)',
        'error.invalidPhone': 'እባክዎ ትክክለኛ የኢትዮጵያ ስልክ ቁጥር ያስገቡ (+251 ጀምሮ 9 ወይም 10 አሃዞች)።',
        'error.rateLimit15m': 'እባክዎ ሌላ ጥያቄ ከመላክዎ በፊት 15 ደቂቃ ይጠብቁ።',
        'error.rateLimit24h': 'የቀን ገደብዎ አልቋል። እባክዎ ነገ እንደገና ይሞክሩ።',
        'quote.minutesRemaining': 'ደቂቃዎች ይቀራሉ',
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
        'footer.brandSubtitle': 'በአዲስ አበባ አስተማማኝ፣ አስተማማኝ እና ሙያዊ የማንቀሳቀስ አገልግሎቶችን እንሰጣለን። ልምድ ያለው ቡድናችን የርስዎ ንብረት ከመጀመሪያው እስከ መጨረሻ በጥንቃቄ መያዙን ያረጋግጣል።',
        'footer.quickLinks': 'ፈጣን ሊንኮች',
        'footer.ourServices': 'አገልግሎቶቻችን',
        'footer.contactUs': 'ያግኙን',
        'footer.home': 'መነሻ',
        'footer.services': 'አገልግሎቶች',
        'footer.about': 'ስለ እኛ',
        'footer.contact': 'ካርታ/አድራሻ',
        'footer.loadingUnloading': 'መጫን እና ማውረድ',
        'footer.address': 'ጉርድ ሾላ፣ አዲስ አበባ፣ ኢትዮጵያ',
        'footer.rights': 'መብቱ በህግ የተጠበቀ ነው።',

        // Toasts & Validation
        'toast.locationError': 'እባክዎ መነሻ እና መድረሻ ቦታዎችን ይምረጡ',
        'toast.selectService': 'እባክዎ ለመቀጠል አገልግሎት ይምረጡ',
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
