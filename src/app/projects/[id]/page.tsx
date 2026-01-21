"use client"

import { use, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, MapPin, Calendar, ArrowUpRight, Maximize2, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { projects } from "@/lib/data"
import { notFound } from "next/navigation"

export default function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params)
    const project = projects.find((p) => p.id === parseInt(id))
    const [selectedImage, setSelectedImage] = useState<string | null>(null)

    if (!project) {
        return notFound()
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

                <div className="absolute inset-0 container px-4 mx-auto flex flex-col justify-end pb-12 md:pb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl"
                    >
                        <Link href="/projects" className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors group">
                            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" /> Kembali ke Projects
                        </Link>

                        <div className="flex flex-wrap gap-3 mb-6">
                            <Badge className="bg-emerald-600 hover:bg-emerald-700 text-white border-none px-3 py-1 text-sm">
                                {project.category}
                            </Badge>
                            <div className="flex items-center text-white/90 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-sm border border-white/20">
                                <MapPin className="w-3 h-3 mr-2 text-emerald-400" /> {project.location}
                            </div>
                            <div className="flex items-center text-white/90 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-sm border border-white/20">
                                <Calendar className="w-3 h-3 mr-2 text-emerald-400" /> {project.year}
                            </div>
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                            {project.title}
                        </h1>

                        <p className="text-lg md:text-xl text-slate-200 max-w-2xl leading-relaxed font-light">
                            {project.desc}
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="container px-4 mx-auto py-16 md:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24">
                    {/* Main Description */}
                    <div className="lg:col-span-2 space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">Tentang Project</h2>
                            <div className="prose prose-slate prose-lg text-slate-500 leading-relaxed">
                                <p>{project.longDesc || project.desc}</p>
                            </div>
                        </div>

                        {/* Documentation Gallery */}
                        {project.documentationImages && project.documentationImages.length > 0 && (
                            <div className="pt-12 border-t border-slate-100">
                                <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                                    Dokumentasi Lapangan
                                    <span className="text-sm font-normal text-slate-400 bg-slate-100 px-3 py-1 rounded-full">
                                        {project.documentationImages.length} Foto
                                    </span>
                                </h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                                    {project.documentationImages.map((img, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: idx * 0.1 }}
                                            className="group relative aspect-video md:aspect-[4/3] bg-slate-100 rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
                                            onClick={() => setSelectedImage(img)}
                                        >
                                            <Image
                                                src={img}
                                                alt={`Documentation ${idx + 1}`}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                                                <Maximize2 className="w-5 h-5 text-slate-900" />
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Sidebar / Quick Info */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-32 p-8 bg-slate-50 rounded-3xl border border-slate-100">
                            <h3 className="text-lg font-bold text-slate-900 mb-6">Informasi Project</h3>

                            <div className="space-y-6">
                                <div>
                                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Kategori</div>
                                    <div className="text-base font-semibold text-slate-900">{project.category}</div>
                                </div>
                                <div className="w-full h-px bg-slate-200" />
                                <div>
                                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Lokasi</div>
                                    <div className="text-base font-semibold text-slate-900">{project.location}</div>
                                </div>
                                <div className="w-full h-px bg-slate-200" />
                                <div>
                                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Tahun</div>
                                    <div className="text-base font-semibold text-slate-900">{project.year}</div>
                                </div>
                                <div className="w-full h-px bg-slate-200" />
                                <div>
                                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Status</div>
                                    <div className="inline-flex items-center text-sm font-semibold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100 mt-1">
                                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse mr-2" />
                                        Selesai / Handover
                                    </div>
                                </div>
                            </div>

                            <Button className="w-full mt-8 bg-slate-900 text-white hover:bg-emerald-600" size="lg">
                                Hubungi Kami <ArrowUpRight className="ml-2 w-4 h-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            className="absolute top-4 right-4 md:top-8 md:right-8 text-white/50 hover:text-white transition-colors"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X className="w-8 h-8" />
                        </button>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative w-full max-w-7xl aspect-video md:aspect-auto md:h-[90vh] rounded-lg overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={selectedImage}
                                alt="Gallery Preview"
                                fill
                                className="object-contain"
                                quality={100}
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
