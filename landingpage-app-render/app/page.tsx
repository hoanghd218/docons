"use client";

import { useState } from "react";
import Header from "@/components/Header";
import DesignFlow from "@/components/interior-design/DesignFlow";
import SuccessStoriesSlider from "@/components/interior-design/SuccessStoriesSlider";
import { Lead } from "@/data/interior-design";
import { brandConfig } from "@/data/brandConfig";

export default function HomePage() {
    const [lastSubmittedLead, setLastSubmittedLead] = useState<Lead | null>(null);

    const handleLeadComplete = (lead: Lead) => {
        setLastSubmittedLead(lead);
    };

    const handleReset = () => {
        setLastSubmittedLead(null);
    };

    return (
        <div className="min-h-screen flex flex-col bg-brand-gray-light">
            <Header />

            <main className="flex-1">
                {lastSubmittedLead ? (
                    // Success View
                    <div className="min-h-[80vh] flex flex-col items-center justify-center p-4 bg-gradient-to-br from-slate-50 to-slate-100 text-center">
                        <div className="w-24 h-24 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full flex items-center justify-center text-primary mb-8 shadow-xl shadow-primary/20 animate-scale-in">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10" />
                                <path d="m9 12 2 2 4-4" />
                            </svg>
                        </div>
                        <h2 className="text-4xl font-bold text-slate-900 mb-6 font-display gradient-text-hero">Đăng ký thành công!</h2>
                        <p className="text-lg text-slate-600 max-w-lg mb-10 leading-relaxed">
                            Cảm ơn <strong>{lastSubmittedLead.name}</strong>. Chúng tôi đã nhận được yêu cầu thiết kế của bạn.
                            File thiết kế gốc và bảng dự toán sẽ được gửi qua email <strong>{lastSubmittedLead.email}</strong> trong giây lát.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={handleReset}
                                className="order-2 sm:order-1 px-6 py-4 bg-white border-2 border-slate-200 hover:border-primary/50 hover:bg-slate-50 rounded-xl font-bold text-slate-700 transition-all duration-200 hover:shadow-md cursor-pointer active:scale-95"
                            >
                                Về trang chủ
                            </button>
                            <a
                                href={brandConfig.social.zalo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="order-1 sm:order-2 px-8 py-4 bg-gradient-to-r from-primary to-primary-hover hover:from-primary-hover hover:to-brand-blue-dark text-white rounded-xl font-bold shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                                </svg>
                                Tư vấn miễn phí với KTS (Zalo)
                            </a>
                        </div>
                        <button
                            onClick={handleReset}
                            className="mt-8 text-sm text-slate-400 hover:text-primary transition-colors underline cursor-pointer"
                        >
                            Tạo thiết kế mới
                        </button>
                    </div>
                ) : (
                    <DesignFlow onComplete={handleLeadComplete} />
                )}

                {/* Success Stories Section - Only show when not on success view */}
                {!lastSubmittedLead && <SuccessStoriesSlider />}
            </main>

            {/* Footer */}
            <footer className="w-full bg-white border-t border-accent-border py-12">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                        {/* Company Info */}
                        <div>
                            <h3 className="font-bold text-slate-900 mb-3 font-display">{brandConfig.company.shortName}</h3>
                            <p className="text-sm text-gray-600 mb-2">{brandConfig.company.fullName}</p>
                            <p className="text-sm text-gray-500 italic">{brandConfig.company.tagline}</p>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h3 className="font-bold text-slate-900 mb-3 font-display">Liên hệ</h3>
                            <div className="space-y-3 text-sm text-gray-600">
                                <p>
                                    <a href={`tel:${brandConfig.contact.phoneFormatted}`} className="flex items-center gap-2 hover:text-primary transition-colors duration-200 cursor-pointer group">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        {brandConfig.contact.phone}
                                    </a>
                                </p>
                                <p>
                                    <a href={`mailto:${brandConfig.contact.email}`} className="flex items-center gap-2 hover:text-primary transition-colors duration-200 cursor-pointer group">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        {brandConfig.contact.email}
                                    </a>
                                </p>
                                <p>
                                    <a href={brandConfig.location.mapUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors duration-200 cursor-pointer group">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <span className="flex-1">{brandConfig.location.address}</span>
                                    </a>
                                </p>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div>
                            <h3 className="font-bold text-slate-900 mb-3 font-display">Kết nối</h3>
                            <div className="flex gap-4">
                                <a href={brandConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100 text-gray-600 hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer hover:scale-110 hover:shadow-lg hover:shadow-primary/20">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                    </svg>
                                </a>
                                <a href={brandConfig.social.zalo} target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100 text-gray-600 hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer hover:scale-110 hover:shadow-lg hover:shadow-primary/20">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12.49 10.272v-.45h1.347v6.322h-.77a.576.576 0 01-.577-.573v-.057a2.621 2.621 0 01-1.555.602 2.76 2.76 0 01-2.073-.865 3.027 3.027 0 01-.835-2.125c0-.795.272-1.503.816-2.124A2.73 2.73 0 0110.9 9.962c.358 0 .667.044.93.13.265.088.49.191.66.309zm-.148 4.986a1.635 1.635 0 001.201-.485 1.636 1.636 0 00.487-1.2 1.68 1.68 0 00-.492-1.21 1.64 1.64 0 00-1.196-.493c-.482 0-.883.163-1.201.488a1.66 1.66 0 00-.478 1.214c0 .477.163.877.49 1.2a1.63 1.63 0 001.19.486zM3.004 12.003c0-4.966 4.03-8.996 8.996-8.996 4.966 0 8.996 4.03 8.996 8.996 0 4.966-4.03 8.996-8.996 8.996-4.966 0-8.996-4.03-8.996-8.996zM12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM5.063 12.003a.588.588 0 01.587-.587h.583l2.007-3.32.009-.015a.398.398 0 01.678.014c.055.09.044.177-.014.266L7.347 10.83h1.148l.76-1.263a.406.406 0 01.547-.161.405.405 0 01.17.544l-.629 1.049.009.015.009.015a.413.413 0 01.032.312.395.395 0 01-.37.247H7.347v.696l1.67 2.783a.292.292 0 01-.247.443.292.292 0 01-.247-.137l-1.49-2.477-.02.032-1.488 2.45a.297.297 0 01-.248.132.283.283 0 01-.248-.146.281.281 0 01.01-.302l1.676-2.77v-.698H5.65a.588.588 0 01-.587-.587l-.001-.009z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-gray-200 pt-6 text-center text-gray-500 text-sm">
                        <p>© 2024 {brandConfig.company.fullName}</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
