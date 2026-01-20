"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, Home, Info, Briefcase, LayoutGrid, ArrowRight, Instagram, Linkedin, Facebook } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetTitle,
    SheetClose
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

export function SiteHeader() {
    const [isScrolled, setIsScrolled] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const navItems = [
        { name: "Beranda", href: "/", icon: Home },
        { name: "Tentang Kami", href: "/#about", icon: Info },
        { name: "Layanan", href: "/#services", icon: LayoutGrid },
        { name: "Proyek", href: "/projects", icon: Briefcase },
    ]

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-white/80 backdrop-blur-md border-b border-slate-200/50 py-3"
                    : "bg-transparent py-5"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 group relative z-50">
                    <div className="relative w-10 h-10 md:w-12 md:h-12 transition-transform group-hover:scale-105 duration-300">
                        <Image
                            src="/assets/logo-kng.png"
                            alt="Logo PT. Kid Nusa Gemilang"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <div className="flex flex-col">
                        <span className="font-bold text-lg md:text-xl tracking-tight text-slate-900 leading-none group-hover:text-emerald-700 transition-colors">
                            PT. KID NUSA
                        </span>
                        <span className="text-[10px] md:text-xs font-bold text-emerald-600 tracking-widest uppercase leading-none mt-0.5">
                            GEMILANG
                        </span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors hover:bg-slate-50 px-3 py-2 rounded-full"
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Button asChild className="rounded-full bg-emerald-600 hover:bg-emerald-700 text-white px-6 shadow-lg shadow-emerald-200">
                        <Link href="#contact">Hubungi Kami</Link>
                    </Button>
                </nav>

                {/* Mobile Nav */}
                <Sheet>
                    <SheetTrigger asChild className="md:hidden relative z-50">
                        <Button variant="ghost" size="icon" className="text-slate-900 hover:bg-slate-100 rounded-full">
                            <Menu className="h-6 w-6" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white/95 backdrop-blur-2xl border-l border-white/20 p-0 flex flex-col h-full shadow-2xl">
                        {/* Decorative Background Blob */}
                        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-emerald-100/50 rounded-full blur-[80px] -z-10 pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-blue-50/50 rounded-full blur-[60px] -z-10 pointer-events-none" />

                        <div className="p-6 flex flex-col h-full">
                            <SheetTitle className="text-left font-bold text-2xl mb-8 flex items-center gap-2">
                                <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Menu</span>
                            </SheetTitle>

                            <nav className="flex flex-col gap-2 flex-1">
                                {navItems.map((item, index) => (
                                    <SheetClose asChild key={item.name}>
                                        <Link
                                            href={item.href}
                                            className="group flex items-center gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-all duration-300 border border-transparent hover:border-slate-100"
                                        >
                                            <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-emerald-100 group-hover:text-emerald-600 group-hover:scale-110 transition-all duration-300">
                                                <item.icon className="w-5 h-5" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="font-bold text-lg text-slate-900 group-hover:text-emerald-700 transition-colors">
                                                    {item.name}
                                                </div>
                                            </div>
                                            <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-emerald-500 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
                                        </Link>
                                    </SheetClose>
                                ))}
                            </nav>

                            <div className="mt-auto space-y-6">
                                {/* Socials / Extra Info */}
                                <div className="flex justify-center gap-6 text-slate-400">
                                    <Link href="#" className="hover:text-emerald-600 hover:scale-110 transition-all"><Instagram className="w-5 h-5" /></Link>
                                    <Link href="#" className="hover:text-emerald-600 hover:scale-110 transition-all"><Linkedin className="w-5 h-5" /></Link>
                                    <Link href="#" className="hover:text-emerald-600 hover:scale-110 transition-all"><Facebook className="w-5 h-5" /></Link>
                                </div>

                                <SheetClose asChild>
                                    <Link
                                        href="#contact"
                                        className="flex items-center justify-center w-full py-4 rounded-2xl bg-slate-900 text-white font-bold hover:bg-slate-800 transition-all shadow-xl hover:shadow-emerald-900/20 active:scale-95 duration-200"
                                    >
                                        Hubungi Kami
                                    </Link>
                                </SheetClose>
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    )
}
