"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Building2, CheckCircle2, HardHat, Leaf, MapPin, Menu, Phone, Trophy, Users, ShieldCheck, FileCheck, Landmark, Pickaxe, Briefcase, Timer } from "lucide-react"

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
          {/* TRUSTED PARTNERS - "Ecosystem Grid" (Minimalist Tech Style) */}
          <div className="mt-24 pt-10 border-t border-slate-100">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-10 text-center">Dipercaya Oleh Institusi & Swasta</p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
              {[
                { name: "Kementerian PUPR", icon: Landmark },
                { name: "Dinas PU Kaltim", icon: Building2 },
                { name: "Korporasi Tambang", icon: Pickaxe },
                { name: "Swasta Nasional", icon: Briefcase },
              ].map((partner, i) => (
                <div key={i} className="bg-white p-6 md:p-10 flex flex-col items-center justify-center gap-4 hover:bg-slate-50 transition-colors group cursor-default">
                  <partner.icon className="w-8 h-8 text-slate-300 group-hover:text-slate-900 transition-colors" strokeWidth={1.5} />
                  <span className="text-sm font-semibold text-slate-500 group-hover:text-slate-900 transition-colors tracking-tight text-center">{partner.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WORK PROCESS - "The 3D Metallic Accent Look" */}
      {/* WORK PROCESS - "The Flow of Precision" (OpenAI-inspired Minimalist) */}
      <section className="py-20 md:py-32 bg-white relative overflow-hidden">
        <div className="container px-4 mx-auto max-w-7xl relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                Alur Kerja <br /> <span className="text-slate-400">Terintegrasi.</span>
              </h2>
              <p className="text-lg text-slate-600 font-light leading-relaxed max-w-xl">
                Pendekatan sistematis kami memastikan setiap tahap konstruksi tereksekusi dengan presisi, transparansi, dan standar kualitas tertinggi.
              </p>
            </div>
            <div className="hidden md:block">
              <div className="w-24 h-1 bg-slate-900"></div>
            </div>
          </div>

          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-[2.5rem] left-0 right-0 h-[1px] bg-slate-200 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 relative z-10">
              {[
                {
                  id: "01",
                  title: "Konsultasi & Survei",
                  titleEn: "Consultation & Survey",
                  desc: "Analisis mendalam kebutuhan proyek, studi kelayakan, dan survei topografi untuk memastikan fondasi perencanaan yang akurat."
                },
                {
                  id: "02",
                  title: "Perencanaan Teknis",
                  titleEn: "Engineering Design",
                  desc: "Pengembangan blueprint struktural presisi, estimasi biaya (RAB) transparan, dan validasi standar ISO."
                },
                {
                  id: "03",
                  title: "Eksekusi Konstruksi",
                  titleEn: "Construction Execution",
                  desc: "Pengerahan tim ahli dan alat berat dengan manajemen proyek ketat serta kepatuhan penuh pada protokol K3."
                },
                {
                  id: "04",
                  title: "Quality Control & Serah Terima",
                  titleEn: "QC & Handover",
                  desc: "Inspeksi final menyeluruh, pengujian beban, dan serah terima resmi dengan jaminan garansi pemeliharaan."
                },
              ].map((step) => (
                <div key={step.id} className="group flex flex-col items-start relative bg-white md:bg-transparent pt-8 md:pt-0">
                  {/* Node Point */}
                  <div className="w-5 h-5 rounded-full bg-white border-[3px] border-slate-900 z-20 mb-6 md:mb-12 group-hover:scale-125 transition-transform duration-300"></div>

                  {/* Step Number */}
                  <div className="font-mono text-xs font-bold text-emerald-600 tracking-widest mb-3">{step.id} // {step.titleEn}</div>

                  {/* Content */}
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed font-light border-l-2 border-slate-100 pl-4 md:border-none md:pl-0">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS SECTION - "Technical Compliance Grid" */}
      <section className="py-20 md:py-32 bg-slate-50 border-y border-slate-200">
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Standar & Kepatuhan</h2>
              <p className="text-slate-500 text-lg font-light leading-relaxed">
                Sistem manajemen terintegrasi yang telah diaudit dan divalidasi oleh badan sertifikasi internasional.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="px-4 py-2 bg-white border border-slate-200 rounded-md shadow-sm flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                <span className="text-xs font-mono font-medium text-slate-600">ISO CERTIFIED // ACTIVE</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 border-t border-l border-slate-200 bg-white shadow-sm">
            {[
              {
                code: "ISO 9001:2015",
                name: "Quality Management",
                desc: "Jaminan mutu layanan konstruksi & kepuasan klien."
              },
              {
                code: "ISO 14001:2015",
                name: "Environmental",
                desc: "Manajemen dampak lingkungan yang berkelanjutan."
              },
              {
                code: "ISO 45001:2018",
                name: "Occupational Safety",
                desc: "Standar keselamatan & kesehatan kerja (K3) level internasional."
              },
              {
                code: "SBU & NIB",
                name: "License & Compliance",
                desc: "Izin usaha konstruksi resmi dan terverifikasi pemerintah."
              }
            ].map((cert, idx) => (
              <div key={idx} className="group p-8 border-b border-r border-slate-200 hover:bg-slate-50/80 transition-all duration-300 relative overflow-hidden">
                <div className="font-mono text-xs font-bold text-emerald-600 mb-4 tracking-wider">{cert.code}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-800 transition-colors">{cert.name}</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-8 font-light">{cert.desc}</p>

                <div className="absolute bottom-8 left-8 flex items-center gap-2 text-[10px] font-bold text-slate-300 group-hover:text-emerald-600 transition-colors uppercase tracking-widest">
                  <CheckCircle2 className="w-3 h-3" /> Verified
                </div>
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

            {/* Bento Item 4: Time Value - "Precision" */}
            <div className="md:col-span-1 md:row-span-1 bg-slate-900 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-8 flex flex-col items-center justify-center text-center border border-slate-800 hover:shadow-xl hover:shadow-emerald-900/20 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/5 flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm border border-white/10">
                <Timer className="w-8 h-8 md:w-10 md:h-10 text-emerald-400" />
              </div>
              <div className="text-xl md:text-2xl font-bold text-white mb-1">On-Time</div>
              <p className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-widest group-hover:text-emerald-400 transition-colors">Jaminan Ketepatan</p>
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
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-md shadow-sm mb-6 md:mb-8">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                <span className="text-[10px] md:text-xs font-mono font-bold text-slate-600 tracking-widest uppercase">Featured Projects // 2024-2025</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                Rekam Jejak <br /> <span className="text-slate-400">Infrastruktur.</span>
              </h2>
              <p className="text-sm md:text-lg text-slate-600 mb-8 leading-relaxed font-light max-w-md">
                Bukti nyata dedikasi kami dalam membangun infrastruktur berkualitas di berbagai medan menantang, dari pedesaan hingga perkotaan.
              </p>
              <Button asChild size="lg" className="rounded-full bg-slate-900 text-white hover:bg-slate-800 px-6 md:px-8 h-10 md:h-12 text-xs md:text-sm font-medium shadow-sm hover:shadow-md transition-all">
                <Link href="/projects">Lihat Semua Portfolio <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
            </div>

            {/* Right Grid (Bento Style Projects) */}
            <div className="lg:col-span-3 grid grid-cols-2 gap-3 md:gap-6">
              {[
                {
                  id: "01",
                  title: "Jembatan Sei Kayan",
                  cat: "Bridge Infrastructure",
                  desc: "Pembangunan jembatan beton vital melintasi sungai lebar untuk konektivitas wilayah.",
                  img: "/assets/project-sei-kayan.png"
                },
                {
                  id: "02",
                  title: "Akses Jalan Tambang",
                  cat: "Haul Road Access",
                  desc: "Peningkatan kualitas jalan akses tambang untuk mendukung logistik alat berat.",
                  img: "/assets/project-jalan-tambang.png",
                  className: "md:mt-12"
                },
                {
                  id: "03",
                  title: "Supply Rangka Belly",
                  cat: "Logistic & Supply",
                  desc: "Pengadaan dan distribusi struktur jembatan baja ke lokasi project terpencil.",
                  img: "/assets/project-belly.png"
                },
                {
                  id: "04",
                  title: "Kantor Operasional Site",
                  cat: "Supporting Facility",
                  desc: "Pembangunan fasilitas kantor lapangan fungsional di area remote.",
                  img: "/assets/project-site-office.png"
                },
              ].map((project) => (
                <div key={project.id} className={`group relative aspect-square md:aspect-[3/4] rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer bg-slate-900 ${project.className || ''}`}>
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100 layer-blur"
                  />

                  {/* Technical Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

                  {/* ID Tag */}
                  <div className="absolute top-3 right-3 md:top-6 md:right-6 px-2 py-1 bg-black/30 backdrop-blur-md border border-white/10 text-white/70 text-[10px] font-mono rounded opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-[-10px] group-hover:translate-y-0">
                    PRJ-{project.id} // KNG
                  </div>

                  <div className="absolute bottom-0 left-0 p-4 md:p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out w-full">
                    <div className="w-8 h-[2px] bg-emerald-500 mb-4 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                    <div className="text-emerald-400 font-mono text-[10px] md:text-xs font-medium uppercase tracking-widest mb-2">{project.cat}</div>
                    <h3 className="text-lg md:text-2xl font-bold text-white mb-2 leading-tight">{project.title}</h3>
                    <p className="text-slate-300 text-xs md:text-sm line-clamp-2 font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 hidden md:block">
                      {project.desc}
                    </p>
                  </div>
                </div>
              ))}

              {/* Project Card (See All) - Desktop Only */}
              <div className="hidden md:flex group relative aspect-square md:aspect-[3/4] rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer bg-slate-100 border border-slate-200 items-center justify-center md:mt-12 hover:bg-slate-200/50 hover:border-slate-300 transition-all duration-300">
                <div className="text-center p-2">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white border border-slate-100 flex items-center justify-center mx-auto mb-4 text-slate-400 group-hover:text-emerald-600 group-hover:scale-110 shadow-sm transition-all duration-500">
                    <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-500 group-hover:text-slate-900 transition-colors tracking-tight">View All Projects</h3>
                </div>
                <Link href="/projects" className="absolute inset-0 z-10" aria-label="Lihat Semua Project" />
              </div>
            </div>

            {/* Mobile Only "See All" Button */}
            <div className="col-span-2 md:hidden mt-2">
              <Button asChild size="lg" className="w-full rounded-full bg-slate-900 text-white hover:bg-slate-800 h-12 text-sm font-semibold shadow-sm">
                <Link href="/projects">Lihat Semua Portfolio <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION - REFINED BENTO STYLE */}
      < section className="py-8 md:py-24 bg-white" >
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
      </section >

      {/* FOOTER - Minimalist */}
      < footer id="contact" className="bg-white pt-10 pb-6 md:pt-24 md:pb-12 border-t border-slate-100" >
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
                <p className="hover:text-emerald-600 cursor-pointer transition-colors">kidnusagemilang@gmail.com</p>
                <p className="hover:text-emerald-600 cursor-pointer transition-colors">+62 (542) 123-4567</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-6 md:pt-8 border-t border-slate-100 gap-4 md:gap-0">
            <div className="flex flex-col md:flex-row gap-1 md:gap-4 items-center">
              <p className="text-slate-400 text-[10px] md:text-sm">© 2019-2026 PT. Kid Nusa Gemilang. All rights reserved.</p>
              <span className="hidden md:block text-slate-300">•</span>
              <p className="text-slate-400 text-[10px] md:text-sm">Built for Excellence.</p>
            </div>
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
