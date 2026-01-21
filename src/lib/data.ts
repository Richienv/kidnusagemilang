export interface Project {
    id: number;
    title: string;
    category: string;
    location: string;
    year: string;
    image: string;
    desc: string;
    longDesc?: string;
    documentationImages?: string[];
}

export const projects: Project[] = [
    {
        id: 1,
        title: "Jembatan Terusan Salimbatu",
        category: "Jembatan",
        location: "Kalimantan Utara",
        year: "2025",
        image: "/assets/hero-gen-bridge.png",
        desc: "Pembangunan jembatan gantung vital penghubung desa terisolir.",
        longDesc: "Proyek pembangunan Jembatan Terusan Salimbatu merupakan inisiatif strategis untuk menghubungkan wilayah terisolir di Kalimantan Utara. Jembatan ini dirancang dengan struktur gantung yang kokoh untuk menahan beban lalu lintas dan kondisi alam yang menantang. Selain meningkatkan konektivitas, proyek ini juga bertujuan untuk mempercepat pertumbuhan ekonomi lokal dengan mempermudah akses distribusi barang dan jasa.",
        documentationImages: [
            "/assets/projects/1/doc-1.png",
            "/assets/projects/1/doc-2.png",
            "/assets/projects/1/doc-3.png",
            "/assets/projects/1/doc-4.png",
            "/assets/projects/1/doc-5.png",
            "/assets/projects/1/doc-6.png",
            "/assets/projects/1/doc-7.png",
            "/assets/projects/1/doc-8.png",
            "/assets/projects/1/doc-9.png",
            "/assets/projects/1/doc-10.png",
            "/assets/projects/1/doc-11.png",
            "/assets/projects/1/doc-12.png"
        ]
    },
    {
        id: 2,
        title: "Infrastruktur Teras Baru",
        category: "Jalan",
        location: "Bulungan",
        year: "2024",
        image: "/assets/hero-gen-road.png",
        desc: "Peningkatan kualitas jalan dan sistem drainase lingkungan.",
        longDesc: "Proyek Infrastruktur Teras Baru di Bulungan fokus pada peningkatan kualitas jalan akses utama dan pembangunan sistem drainase yang efisien. Ini adalah upaya untuk mencegah banjir tahunan dan memastikan mobilitas warga tetap lancar di segala cuaca. Konstruksi menggunakan material beton berkualitas tinggi untuk durabilitas jangka panjang.",
        documentationImages: [
            "/assets/projects/2/doc-1.png",
            "/assets/projects/2/doc-2.png",
            "/assets/projects/2/doc-3.png",
            "/assets/projects/2/doc-4.png",
            "/assets/projects/2/doc-5.png",
            "/assets/projects/2/doc-6.png",
            "/assets/projects/2/doc-7.png",
            "/assets/projects/2/doc-8.png",
            "/assets/projects/2/doc-9.png",
            "/assets/projects/2/doc-10.png",
            "/assets/projects/2/doc-11.png",
            "/assets/projects/2/doc-12.png",
            "/assets/projects/2/doc-13.png"
        ]
    },
    {
        id: 3,
        title: "Supply Rangka Bailey",
        category: "Sipil",
        location: "Kalimantan Timur",
        year: "2024",
        image: "/assets/project-belly.png",
        desc: "Pengadaan dan pemasangan rangka baja jembatan darurat.",
        longDesc: "Proyek ini mencakup pengadaan, distribusi, dan instalasi rangka jembatan Bailey di berbagai titik kritis di Kalimantan Timur. Rangka Bailey dipilih karena kecepatan instalasinya yang tinggi dan kehandalannya sebagai solusi jembatan darurat maupun permanen untuk daerah yang sulit dijangkau.",
        documentationImages: [
            "/assets/projects/3/doc-1.png",
            "/assets/projects/3/doc-2.png",
            "/assets/projects/3/doc-3.png",
            "/assets/projects/3/doc-4.png",
            "/assets/projects/3/doc-5.png",
            "/assets/projects/3/doc-6.png"
        ]
    },
    {
        id: 4,
        title: "Jembatan Sei Kayan",
        category: "Jembatan",
        location: "Tanjung Selor",
        year: "2023",
        image: "/assets/project-sei-kayan.png",
        desc: "Konstruksi jembatan bentang panjang rangka baja.",
        longDesc: "Pembangunan Jembatan Sei Kayan adalah salah satu proyek ikonik di Tanjung Selor. Menggunakan struktur rangka baja bentang panjang, jembatan ini menjadi arteri utama yang menghubungkan pusat pemerintahan dengan wilayah pengembangan baru.",
        documentationImages: []
    },
    {
        id: 5,
        title: "Akses Jalan Tambang",
        category: "Jalan",
        location: "Berau",
        year: "2023",
        image: "/assets/project-jalan-tambang.png",
        desc: "Pengerasan dan stabilisasi tanah untuk akses alat berat.",
        longDesc: "Pekerjaan pengerasan dan stabilisasi jalan akses tambang di Berau bertujuan untuk mendukung lalu lintas alat berat logistik pertambangan. Teknik stabilisasi tanah yang canggih diterapkan untuk memastikan jalan mampu menahan beban ekstrem secara terus-menerus.",
        documentationImages: []
    },
    {
        id: 6,
        title: "Kantor Operasional Site",
        category: "Sipil",
        location: "Balikpapan",
        year: "2022",
        image: "/assets/project-site-office.png",
        desc: "Pembangunan fasilitas kantor lapangan semi-permanen.",
        longDesc: "Proyek ini meliputi pembangunan kompleks kantor operasional lapangan di Balikpapan. Fasilitas ini dirancang dengan konsep modular semi-permanen yang nyaman, efisien energi, dan cepat dibangun untuk mendukung operasional tim di lapangan.",
        documentationImages: []
    }
]

export const categories = ["Semua", "Jembatan", "Jalan", "Sipil"]
