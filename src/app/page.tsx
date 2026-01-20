"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Building2, CheckCircle2, HardHat, Leaf, MapPin, Menu, Phone, Trophy, Users, ShieldCheck, FileCheck } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"


export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  }

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans selection:bg-emerald-100 selection:text-emerald-900">

      {/* HERO SECTION - RESTRUCTURED (Centered, "Greenleaf" style) */}

      {/* HERO SECTION - REFINED TYPOGRAPHY & LAYOUT */}
      <section className="relative pt-32 pb-12 md:py-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        <div className="absolute -top-[10%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-50/50 rounded-full blur-[100px] -z-10" />

        <div className="container px-4 mx-auto max-w-7xl relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-12 md:mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm mb-6"
            >
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-bold text-slate-600 tracking-wide uppercase">Partner Terpercaya Sejak 2019</span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-tight mb-6"
            >
              Membangun <span className="text-emerald-600">Indonesia</span>, <br className="hidden md:block" />
              <span className="md:text-slate-900">Dari Pelosok Negeri</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-sm md:text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto mb-8 md:mb-10 font-light"
            >
              Dedikasi tulus membangun akses dan infrastruktur vital untuk pemerataan ekonomi, menjangkau yang tak terjangkau, dari desa hingga kota.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col min-[420px]:flex-row gap-3 md:gap-4 justify-center"
            >
              <Button asChild size="lg" className="h-10 md:h-12 rounded-full bg-slate-900 hover:bg-emerald-600 text-white px-6 md:px-8 text-sm md:text-lg transition-all shadow-lg hover:shadow-emerald-500/20">
                <Link href="/projects">Lihat Portfolio</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-10 md:h-12 rounded-full border-slate-200 text-slate-600 hover:border-emerald-200 hover:text-emerald-700 hover:bg-emerald-50 px-6 md:px-8 text-sm md:text-lg bg-white/80 backdrop-blur-sm">
                <Link href="#contact">Hubungi Kami</Link>
              </Button>
            </motion.div>
          </div>

          {/* Hero Images - Grid Optimized for Mobile (2 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="mt-12 md:mt-24 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 max-w-7xl mx-auto px-2 md:px-0"
          >
            <div className="relative aspect-[4/5] md:aspect-[3/4] rounded-2xl md:rounded-3xl overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-500 col-span-2 md:col-span-1">
              <Image src="/assets/hero-gen-bridge.png" alt="Jembatan Salimbatu" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 md:p-6">
                <span className="text-white font-medium text-sm md:text-base">Jembatan Salimbatu</span>
              </div>
            </div>
            <div className="relative aspect-[4/5] md:aspect-[3/4] rounded-2xl md:rounded-3xl overflow-hidden md:translate-y-12 group shadow-2xl transition-all duration-500 border-2 md:border-4 border-white">
              <Image src="/assets/hero-gen-road.png" alt="Akses Teras Baru" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 md:p-6">
                <span className="text-white font-medium text-sm md:text-base">Akses Teras Baru</span>
              </div>
            </div>
            <div className="relative aspect-[4/5] md:aspect-[3/4] rounded-2xl md:rounded-3xl overflow-hidden group shadow-lg transition-all duration-500">
              <Image src="/assets/hero-gen-aerial.png" alt="Konstruksi Wilayah" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 md:p-6">
                <span className="text-white font-medium text-sm md:text-base">Konstruksi Wilayah</span>
              </div>
            </div>
          </motion.div>

          {/* PARTNERS STRIP - CREATIVE REDESIGN */}
          <div className="mt-16 md:mt-32 pt-10 border-t border-slate-100/50">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-8 text-center">Dipercaya Oleh Institusi & Swasta</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {[
                { name: "Dinas PU", icon: Building2 },
                { name: "Pemprov Kaltim", icon: HardHat },
                { name: "Kementerian PUPR", icon: Trophy },
                { name: "Swasta Nasional", icon: Users },
              ].map((partner) => (
                <div key={partner.name} className="group flex flex-col items-center justify-center p-6 rounded-3xl bg-slate-50/50 border border-slate-100 hover:bg-white hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-500 cursor-default">
                  <div className="mb-3 p-3 rounded-full bg-white shadow-sm text-slate-400 group-hover:text-emerald-500 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <partner.icon className="w-6 h-6" />
                  </div>
                  <span className="font-bold text-slate-500 group-hover:text-slate-900 transition-colors text-sm text-center">{partner.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WORK PROCESS - "The 3D Metallic Accent Look" */}
      <section className="py-16 md:py-32 bg-slate-50 relative overflow-hidden">
        <div className="container px-4 mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-10 md:mb-20">
            <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4 md:mb-6">Alur Kerja Profesional</h2>
            <p className="text-base md:text-xl text-slate-500 max-w-2xl mx-auto">Standardisasi proses kami menjamin hasil yang presisi dan tepat waktu.</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8">
            {[
              { id: "01", title: "Konsultasi", desc: "Analisis kebutuhan & survei." },
              { id: "02", title: "Perencanaan", desc: "Desain teknis & RAB." },
              { id: "03", title: "Konstruksi", desc: "Eksekusi standar K3." },
              { id: "04", title: "Serah Terima", desc: "Final inspection & garansi." },
            ].map((step) => (
              <div
                key={step.id}
                className="group relative rounded-2xl md:rounded-3xl bg-white transition-transform duration-300 hover:-translate-y-2"
              >
                {/* 3D METALLIC BORDER EFFECT */}
                <div className="absolute -inset-[1px] rounded-2xl md:rounded-3xl bg-gradient-to-br from-slate-300 via-emerald-400 to-slate-300 opacity-60 group-hover:opacity-100 blur-[0.5px] transition-opacity duration-500"></div>

                {/* Card Content */}
                <div className="relative h-full bg-white rounded-[15px] md:rounded-[23px] p-4 md:p-8 shadow-sm group-hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center overflow-hidden">

                  {/* Metallic Numbering */}
                  <div className="text-4xl md:text-6xl font-black mb-3 md:mb-6 tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-slate-200 to-slate-100" style={{ WebkitTextStroke: "1px rgba(16, 185, 129, 0.4)" }}>
                    <span className="bg-clip-text text-transparent bg-gradient-to-br from-emerald-500 to-teal-400 drop-shadow-sm">
                      {step.id}
                    </span>
                  </div>

                  <h3 className="text-sm md:text-xl font-bold text-slate-900 mb-2 md:mb-3">{step.title}</h3>
                  <p className="text-xs md:text-base text-slate-500 leading-relaxed font-light">{step.desc}</p>

                  <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-emerald-100/10 to-white/0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS SECTION - NEW */}
      <section className="py-12 md:py-24 bg-white border-y border-slate-100">
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-8 md:mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-2 md:mb-4">Standar & Sertifikasi</h2>
              <p className="text-base md:text-lg text-slate-500 font-light">
                Komitmen mutu melalui sertifikasi internasional dan lisensi resmi.
              </p>
            </div>
            <div className="flex gap-2">
              <div className="px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-slate-50 border border-slate-200 text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-widest">
                Verified 2026
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
            {[
              {
                code: "ISO 9001",
                name: "Quality",
                desc: "Mutu Layanan",
                icon: <Trophy className="w-5 h-5 md:w-6 md:h-6 text-emerald-600" />
              },
              {
                code: "ISO 14001",
                name: "Environment",
                desc: "Lingkungan",
                icon: <Leaf className="w-5 h-5 md:w-6 md:h-6 text-emerald-600" />
              },
              {
                code: "ISO 45001",
                name: "K3 Safety",
                desc: "Keselamatan",
                icon: <ShieldCheck className="w-5 h-5 md:w-6 md:h-6 text-emerald-600" />
              },
              {
                code: "SBU & NIB",
                name: "Lisensi",
                desc: "Izin Resmi",
                icon: <FileCheck className="w-5 h-5 md:w-6 md:h-6 text-emerald-600" />
              }
            ].map((cert, idx) => (
              <div key={idx} className="group p-4 md:p-6 rounded-2xl md:rounded-[2rem] bg-slate-50 border border-slate-100 hover:border-emerald-200 hover:shadow-lg transition-all duration-300">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white shadow-sm flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                  {cert.icon}
                </div>
                <div className="text-[10px] md:text-xs font-bold text-emerald-600 uppercase tracking-wider mb-1 md:mb-2">{cert.code}</div>
                <h3 className="text-sm md:text-lg font-bold text-slate-900 mb-1 md:mb-2">{cert.name}</h3>
                <p className="text-xs md:text-sm text-slate-500 leading-relaxed">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US - BENTO GRID RESTRUCTURED (UNIFORM LIGHT THEME) */}
      <section className="py-16 md:py-32 bg-white">
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-5xl font-bold text-slate-900 mb-6">Mengapa Memilih Kami?</h2>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto font-light">
              Kombinasi pengalaman, teknologi, dan integritas untuk hasil konstruksi terbaik.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 md:gap-6 h-auto md:h-[600px]">

            {/* Bento Item 1: Legalitas & Kepatuhan - "Visual Document Style" */}
            <div className="md:col-span-2 md:row-span-1 bg-slate-50 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 flex flex-col justify-between overflow-hidden relative group hover:shadow-xl transition-all duration-300 border border-slate-100">
              <div className="relative z-10 max-w-lg">
                <div className="mb-4 md:mb-6 inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-white border border-slate-200 text-[10px] md:text-xs font-bold uppercase tracking-wider text-emerald-600 shadow-sm">
                  <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4 text-emerald-500" /> Terverifikasi Resmi
                </div>
                <h3 className="text-xl md:text-3xl font-bold text-slate-900 mb-2 md:mb-3">Legalitas Lengkap & Patuh Regulasi</h3>
                <p className="text-slate-500 text-sm md:text-lg">Proyek berjalan aman dengan sertifikasi ISO 45001, SBU, dan NIB yang aktif dan valid.</p>
              </div>

              {/* Creative Element: Abstract "Certificate/Document" Layering */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 md:translate-x-12 opacity-90 group-hover:translate-x-8 transition-transform duration-500 scale-75 md:scale-100 origin-right">
                <div className="w-64 h-48 bg-white rounded-l-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 p-6 flex flex-col gap-4 rotate-[-6deg] group-hover:rotate-0 transition-transform duration-300">
                  <div className="flex gap-3 items-center border-b border-slate-100 pb-3">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600"><CheckCircle2 className="w-5 h-5" /></div>
                    <div className="h-2 w-24 bg-slate-200 rounded-full"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 w-full bg-slate-100 rounded-full"></div>
                    <div className="h-2 w-3/4 bg-slate-100 rounded-full"></div>
                    <div className="h-2 w-1/2 bg-slate-100 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bento Item 2: Sustainability - "Nature/Clean Style" (Changed from Dark to Light) */}
            <div className="md:col-span-1 md:row-span-2 bg-slate-50 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 flex flex-col justify-between relative overflow-hidden group hover:shadow-xl transition-all duration-300 border border-slate-100">
              <div className="absolute top-0 right-0 w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-gradient-to-br from-emerald-50 to-transparent rounded-bl-full -mr-16 -mt-16 opacity-50"></div>

              <div className="relative z-10">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-emerald-600 mb-4 md:mb-8 group-hover:scale-110 transition-transform">
                  <Leaf className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <h3 className="text-xl md:text-3xl font-bold text-slate-900 mb-2 md:mb-4">Green Construction</h3>
                <p className="text-sm md:text-base text-slate-500 leading-relaxed mb-6 md:mb-8">
                  Komitmen pada metode konstruksi ramah lingkungan dan manajemen limbah efisien.
                </p>
              </div>

              {/* Creative Element: Sustainability Meter/Graphic */}
              <div className="relative bg-white rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-sm border border-slate-100 group-hover:translate-y-[-5px] transition-transform duration-300">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[10px] md:text-xs font-bold text-slate-400 uppercase">Efisiensi Material</span>
                  <span className="text-[10px] md:text-xs font-bold text-emerald-600">95%</span>
                </div>
                <div className="h-1.5 md:h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 w-[95%] rounded-full"></div>
                </div>
                <div className="flex justify-between items-center mt-3 md:mt-4 mb-2">
                  <span className="text-[10px] md:text-xs font-bold text-slate-400 uppercase">Waste Reduction</span>
                  <span className="text-[10px] md:text-xs font-bold text-emerald-600">High</span>
                </div>
                <div className="h-1.5 md:h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-400 w-[85%] rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Bento Item 3: Expert Team - "Avatar Stack" */}
            <div className="md:col-span-1 md:row-span-1 bg-slate-50 border border-slate-100 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-8 flex flex-col justify-center relative overflow-hidden group hover:shadow-lg transition-all duration-300">
              {/* Creative Element: Enhanced Avatar Stack */}
              <div className="flex items-center mb-4 md:mb-6">
                <div className="flex -space-x-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className={`w-10 h-10 md:w-12 md:h-12 rounded-full border-[3px] border-white bg-slate-${i * 100 + 100} shadow-sm flex items-center justify-center overflow-hidden`}>
                      <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-300 group-hover:scale-110 transition-transform"></div>
                    </div>
                  ))}
                </div>
                <div className="ml-4 px-2 py-1 md:px-3 md:py-1 rounded-full bg-emerald-100 text-emerald-700 text-[10px] md:text-xs font-bold">
                  +15 Ahli
                </div>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-1 md:mb-2">Tim Ahli SKA/SKT</h3>
              <p className="text-xs md:text-sm text-slate-500">Tenaga profesional bersertifikat dengan pengalaman &gt;10 tahun.</p>
            </div>

            {/* Bento Item 4: Stats - "Trophy Emphasis" */}
            <div className="md:col-span-1 md:row-span-1 bg-slate-50 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-8 flex flex-col items-center justify-center text-center border border-slate-100 hover:shadow-lg transition-all duration-300 group">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-amber-50 flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                <Trophy className="w-8 h-8 md:w-10 md:h-10 text-amber-500 drop-shadow-sm" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-1">58+</div>
              <p className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest">Proyek Sukses</p>
            </div>

          </div>
        </div>
      </section>

      {/* PROJECTS SECTION - REFINED LIGHT THEME */}
      <section id="projects" className="py-16 md:py-24 bg-slate-50 relative overflow-hidden">
        <div className="container px-4 mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">

            {/* Left Content (Sticky) */}
            <div className="lg:col-span-2 lg:sticky lg:top-32">
              <div className="inline-block px-3 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-700 text-xs md:text-sm font-bold mb-4 md:mb-6">
                Portfolio Unggulan
              </div>
              <h2 className="text-2xl md:text-5xl font-bold text-slate-900 mb-4 md:mb-6 leading-tight">
                Project Yang Sudah Kami Kerjakan
              </h2>
              <p className="text-sm md:text-lg text-slate-600 mb-6 md:mb-8 leading-relaxed font-light">
                Bukti nyata dedikasi kami dalam membangun infrastruktur berkualitas di berbagai medan menantang, dari pedesaan hingga perkotaan.
              </p>
              <Button asChild size="lg" className="rounded-full bg-slate-900 text-white hover:bg-slate-800 px-6 md:px-8 h-10 md:h-12 text-sm md:text-base">
                <Link href="/projects">Lihat Semua Portfolio <ArrowRight className="ml-2 w-3 h-3 md:w-4 md:h-4" /></Link>
              </Button>
            </div>

            {/* Right Grid (Bento Style Projects) */}
            <div className="lg:col-span-3 grid grid-cols-2 gap-3 md:gap-6">
              {/* Project Card 1 */}
              <div className="group relative aspect-square md:aspect-[3/4] rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer">
                <Image
                  src="/assets/project-sei-kayan.png"
                  alt="Jembatan Sei Kayan"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 p-4 md:p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="text-emerald-400 text-[10px] md:text-xs font-bold uppercase tracking-wider mb-1 md:mb-2">Infrastruktur Jembatan</div>
                  <h3 className="text-lg md:text-2xl font-bold text-white mb-1 md:mb-2 leading-tight">Jembatan Sei Kayan</h3>
                  <p className="text-slate-300 text-xs md:text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 hidden md:block">
                    Pembangunan jembatan beton vital melintasi sungai lebar untuk konektivitas wilayah.
                  </p>
                </div>
              </div>

              {/* Project Card 2 */}
              <div className="group relative aspect-square md:aspect-[3/4] rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer md:mt-12">
                <Image
                  src="/assets/project-jalan-tambang.png"
                  alt="Akses Jalan Tambang"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 p-4 md:p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="text-emerald-400 text-[10px] md:text-xs font-bold uppercase tracking-wider mb-1 md:mb-2">Haul Road</div>
                  <h3 className="text-lg md:text-2xl font-bold text-white mb-1 md:mb-2 leading-tight">Akses Jalan Tambang</h3>
                  <p className="text-slate-300 text-xs md:text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 hidden md:block">
                    Peningkatan kualitas jalan akses tambang untuk mendukung logistik alat berat.
                  </p>
                </div>
              </div>

              {/* Project Card 3 */}
              <div className="group relative aspect-square md:aspect-[3/4] rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer">
                <Image
                  src="/assets/project-belly.png"
                  alt="Supply Rangka Belly"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 p-4 md:p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="text-emerald-400 text-[10px] md:text-xs font-bold uppercase tracking-wider mb-1 md:mb-2">Logistik Konstruksi</div>
                  <h3 className="text-lg md:text-2xl font-bold text-white mb-1 md:mb-2 leading-tight">Supply Rangka Belly</h3>
                  <p className="text-slate-300 text-xs md:text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 hidden md:block">
                    Pengadaan dan distribusi struktur jembatan baja ke lokasi project terpencil.
                  </p>
                </div>
              </div>

              {/* Project Card 4 */}
              <div className="group relative aspect-square md:aspect-[3/4] rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer">
                <Image
                  src="/assets/project-site-office.png"
                  alt="Kantor Operasional Site"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 p-4 md:p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="text-emerald-400 text-[10px] md:text-xs font-bold uppercase tracking-wider mb-1 md:mb-2">Fasilitas Pendukung</div>
                  <h3 className="text-lg md:text-2xl font-bold text-white mb-1 md:mb-2 leading-tight">Kantor Operasional Site</h3>
                  <p className="text-slate-300 text-xs md:text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 hidden md:block">
                    Pembangunan fasilitas kantor lapangan fungsional di area remote.
                  </p>
                </div>
              </div>
              <p className="text-slate-300 text-xs md:text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 hidden md:block">
                Sistem pengendalian banjir terintegrasi kawasan pemukiman padat.
              </p>
            </div>
          </div>

          {/* Project Card 4 (Placeholder / More) */}
          <div className="group relative aspect-square md:aspect-[3/4] rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer bg-slate-200 border border-slate-300 flex items-center justify-center md:mt-12 group hover:bg-slate-300 transition-colors">
            <div className="text-center p-2">
              <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-white flex items-center justify-center mx-auto mb-2 md:mb-4 text-slate-400 group-hover:text-emerald-500 group-hover:scale-110 transition-all shadow-sm">
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <h3 className="text-sm md:text-lg font-bold text-slate-500 group-hover:text-slate-900 transition-colors">Lihat Lainnya</h3>
            </div>
            <Link href="/projects" className="absolute inset-0 z-10" aria-label="Lihat Semua Project" />
          </div>
        </div>
      </section>

      {/* CTA SECTION - REFINED BENTO STYLE */}
      <section className="py-8 md:py-24 bg-white">
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="bg-slate-50 rounded-[2rem] md:rounded-[3rem] p-5 md:p-16 lg:p-20 flex flex-col lg:flex-row items-center gap-6 md:gap-12 lg:gap-20 overflow-hidden relative">

            {/* Left Content */}
            <div className="flex-1 relative z-10 text-center lg:text-left">
              <h2 className="text-2xl md:text-6xl font-bold text-slate-900 mb-3 md:mb-6 leading-tight">
                Siap Membangun <br /> Masa Depan?
              </h2>
              <p className="text-xs md:text-lg text-slate-500 mb-4 md:mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed font-light">
                Konsultasikan kebutuhan infrastruktur Anda dengan tim ahli kami.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start">
                <Button asChild size="lg" className="h-10 md:h-14 px-5 md:px-8 rounded-full bg-slate-900 hover:bg-emerald-600 text-white text-xs md:text-base font-semibold shadow-lg hover:shadow-emerald-500/20 transition-all duration-300">
                  <Link href="#contact">
                    Hubungi Kami <ArrowRight className="ml-2 w-3 h-3 md:w-4 md:h-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-10 md:h-14 px-5 md:px-8 rounded-full border-slate-300 text-slate-600 hover:bg-white hover:text-emerald-600 bg-transparent text-xs md:text-base">
                  <Link href="/projects">Lihat Portfolio</Link>
                </Button>
              </div>
            </div>

            {/* Right Image Grid (Collage) */}
            <div className="flex-1 w-full max-w-lg lg:max-w-none">
              <div className="grid grid-cols-2 gap-2 md:gap-4">
                {/* Top Left (Square) */}
                <div className="aspect-square relative rounded-2xl md:rounded-3xl overflow-hidden group">
                  <Image
                    src="/assets/project-rural.png"
                    alt="Project 1"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                {/* Top Right (Tall) */}
                <div className="row-span-2 relative rounded-2xl md:rounded-3xl overflow-hidden group">
                  <Image
                    src="/assets/hero-rural.png"
                    alt="Project 2"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                {/* Bottom Left (Square) */}
                <div className="aspect-square relative rounded-2xl md:rounded-3xl overflow-hidden group">
                  <Image
                    src="/assets/project-1.png"
                    alt="Project 3"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER - Minimalist */}
      <footer id="contact" className="bg-white pt-10 pb-6 md:pt-24 md:pb-12 border-t border-slate-100">
        <div className="container px-4 mx-auto">
          <div className="grid md:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-20">
            <div className="col-span-1 md:col-span-2 space-y-4 md:space-y-6">
              <h3 className="text-lg md:text-2xl font-bold text-slate-900 tracking-tight">PT. KID NUSA GEMILANG</h3>
              <p className="text-slate-500 max-w-sm text-xs md:text-lg font-light">
                Membangun kepercayaan melalui kualitas. Partner konstruksi terdepan di Indonesia Timur.
              </p>
            </div>
            <div className="space-y-4 md:space-y-6">
              <h4 className="font-bold text-sm md:text-base text-slate-900">Kantor</h4>
              <address className="text-slate-500 text-xs md:text-lg not-italic leading-relaxed">
                Jl. Syarifudin Yoes No. 22<br />
                Balikpapan Selatan, Kaltim<br />
                Indonesia 76115
              </address>
            </div>
            <div className="space-y-4 md:space-y-6">
              <h4 className="font-bold text-sm md:text-base text-slate-900">Kontak</h4>
              <div className="text-slate-500 space-y-2 text-xs md:text-lg">
                <p className="hover:text-emerald-600 cursor-pointer transition-colors">admin@kidnusagemilang.com</p>
                <p className="hover:text-emerald-600 cursor-pointer transition-colors">+62 (542) 123-4567</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-6 md:pt-8 border-t border-slate-100 gap-4 md:gap-0">
            <p className="text-slate-400 text-[10px] md:text-sm">© 2026 PT. Kid Nusa Gemilang. All rights reserved.</p>
            <div className="flex gap-6 md:gap-8">
              <Link href="#" className="text-slate-400 hover:text-emerald-600 transition-colors text-[10px] md:text-sm font-medium">Privacy Policy</Link>
              <Link href="#" className="text-slate-400 hover:text-emerald-600 transition-colors text-[10px] md:text-sm font-medium">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
