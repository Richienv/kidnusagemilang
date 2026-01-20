"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, ArrowUpRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Project Data
const projects = [
    {
        id: 1,
        title: "Jembatan Terusan Salimbatu",
        category: "Jembatan",
        location: "Kalimantan Utara",
        year: "2025",
        image: "/assets/project-rural.png",
        desc: "Pembangunan jembatan gantung vital penghubung desa terisolir."
    },
    {
        id: 2,
        title: "Infrastruktur Teras Baru",
        category: "Jalan",
        location: "Bulungan",
        year: "2024",
        image: "/assets/project-1.png",
        desc: "Peningkatan kualitas jalan dan sistem drainase lingkungan."
    },
    {
        id: 3,
        title: "Supply Rangka Bailey",
        category: "Sipil",
        location: "Kalimantan Timur",
        year: "2024",
        image: "/assets/hero-bg.png", // Fallback/Placeholder
        desc: "Pengadaan dan pemasangan rangka baja jembatan darurat."
    },
    {
        id: 4,
        title: "Jembatan Sei Kayan",
        category: "Jembatan",
        location: "Tanjung Selor",
        year: "2023",
        image: "/assets/hero-rural.png",
        desc: "Konstruksi jembatan bentang panjang rangka baja."
    },
    {
        id: 5,
        title: "Akses Jalan Tambang",
        category: "Jalan",
        location: "Berau",
        year: "2023",
        image: "/assets/project-1.png",
        desc: "Pengerasan dan stabilisasi tanah untuk akses alat berat."
    },
    {
        id: 6,
        title: "Kantor Operasional Site",
        category: "Sipil",
        location: "Balikpapan",
        year: "2022",
        image: "/assets/hero-bg.png",
        desc: "Pembangunan fasilitas kantor lapangan semi-permanen."
    }
]

const categories = ["Semua", "Jembatan", "Jalan", "Sipil"]

export default function ProjectsPage() {
    const [filter, setFilter] = useState("Semua")

    const filteredProjects = projects.filter(project =>
        filter === "Semua" ? true : project.category === filter
    )

    return (
        <div className="min-h-screen bg-slate-50 pb-24">
            {/* Header */}
            <div className="bg-white border-b border-slate-100 pt-32 pb-12">
                <div className="container px-4 mx-auto text-center">
                    <Link href="/" className="inline-flex items-center text-slate-400 hover:text-emerald-600 mb-6 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Kembali ke Beranda
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Portofolio Kami</h1>
                    <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                        Rekam jejak dedikasi kami dalam membangun infrastruktur yang menghubungkan dan memajukan nusantara.
                    </p>
                </div>
            </div>

            <div className="container px-4 mx-auto mt-12">
                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${filter === cat
                                    ? "bg-emerald-600 text-white shadow-md transform scale-105"
                                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Gallery Grid */}
                <motion.div
                    layout
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                key={project.id}
                            >
                                <Card className="group overflow-hidden border-none shadow-sm hover:shadow-xl transition-all duration-300 bg-white h-full flex flex-col">
                                    <div className="relative h-64 overflow-hidden">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                            <Button variant="secondary" className="rounded-full gap-2">
                                                Lihat Detail <ArrowUpRight className="w-4 h-4" />
                                            </Button>
                                        </div>
                                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-900 shadow-sm">
                                            {project.category}
                                        </div>
                                    </div>
                                    <CardContent className="p-6 flex-1 flex flex-col">
                                        <div className="flex justify-between items-start mb-2">
                                            <div className="text-xs text-emerald-600 font-semibold uppercase tracking-wider">{project.location}</div>
                                            <div className="text-xs text-slate-400 font-mono">{project.year}</div>
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-1">
                                            {project.desc}
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    )
}
