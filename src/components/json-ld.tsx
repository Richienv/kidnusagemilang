import script from "next/script";

export default function JsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "GeneralContractor",
        "name": "PT. Kid Nusa Gemilang",
        "image": "https://kidnusagemilang.com/opengraph-image.png",
        "description": "General Contractor terpercaya di Kalimantan Utara & Bulungan. Spesialis konstruksi jembatan, jalan, dan infrastruktur sipil.",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Jl. Syarifudin Yoes No. 22",
            "addressLocality": "Balikpapan Selatan",
            "addressRegion": "Kalimantan Timur",
            "postalCode": "76115",
            "addressCountry": "ID"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": -1.242967, // Placeholder coords for Balikpapan area, ideally precise
            "longitude": 116.894144
        },
        "url": "https://kidnusagemilang.com",
        "telephone": "+625421234567",
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday"
                ],
                "opens": "08:00",
                "closes": "17:00"
            }
        ],
        "areaServed": [
            {
                "@type": "AdministrativeArea",
                "name": "Kalimantan Utara"
            },
            {
                "@type": "City",
                "name": "Bulungan"
            },
            {
                "@type": "City",
                "name": "Tanjung Selor"
            },
            {
                "@type": "AdministrativeArea",
                "name": "Kalimantan Timur"
            }
        ],
        "priceRange": "$$$"
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
