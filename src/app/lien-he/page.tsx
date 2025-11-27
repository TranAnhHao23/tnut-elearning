'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import RegistrationForm from '@/components/RegistrationForm';

export default function ContactPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="bg-gray-50 min-h-screen pb-16">
            <div className="bg-[#0056b3] py-12 text-center text-white">
                <h1 className="text-3xl font-bold uppercase">Liên hệ</h1>
            </div>

            <div className="container mx-auto px-4 py-8 max-w-6xl">
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Contact Info */}
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold text-[#0056b3] mb-6 border-b pb-2">Thông tin liên hệ</h2>
                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="bg-blue-100 p-3 rounded-full mr-4 text-[#0056b3]">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800 text-lg">Địa chỉ</h3>
                                    <p className="text-gray-600"><strong>Hà Nội:</strong> Số 116 Trần Vỹ, Mai Dịch, Cầu Giấy, Hà Nội</p>
                                    <p className="text-gray-600 mt-1"><strong>Hồ Chí Minh:</strong> Số 91 Ký Con, Nguyễn Thái Bình, Quận 1, TP.HCM</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-blue-100 p-3 rounded-full mr-4 text-[#0056b3]">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800 text-lg">Hotline</h3>
                                    <p className="text-gray-600 font-bold text-lg">0965.020.747</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-blue-100 p-3 rounded-full mr-4 text-[#0056b3]">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800 text-lg">Email</h3>
                                    <p className="text-gray-600">tuyensinh@e-class.edu.vn</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8">
                            <h3 className="font-bold text-gray-800 mb-4">Bản đồ</h3>
                            <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
                                {/* Placeholder for Google Map iframe */}
                                <span>Google Map Area</span>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form / CTA */}
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold text-[#0056b3] mb-6 border-b pb-2">Liên hệ với chúng tôi</h2>
                        <p className="text-gray-700 mb-6">
                            Nếu bạn có bất cứ thắc mắc, câu hỏi, khiếu nại hoặc có nhu cầu hợp tác với chúng tôi. Vui lòng đăng ký để được tư vấn.
                        </p>

                        <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 text-center">
                            <h3 className="text-xl font-bold text-[#0056b3] mb-4">Đăng ký tư vấn miễn phí</h3>
                            <p className="text-gray-600 mb-6">Để lại thông tin, cán bộ tuyển sinh sẽ liên hệ lại ngay.</p>
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="px-8 py-3 bg-red-600 text-white font-bold rounded hover:bg-red-700 transition uppercase w-full md:w-auto"
                            >
                                Đăng ký ngay
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <RegistrationForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
}
