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
                                    <p className="text-gray-600"><strong>Hà Nội:</strong> Số 116 Trần Vỹ, Phường Phú Diễn, Thành phố Hà Nội</p>
                                    <p className="text-gray-600 mt-1"><strong>Hồ Chí Minh:</strong> Số 91 Ký Con, Phường Bến Thành, TP.HCM</p>
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
                            <div className="w-full h-96 rounded-lg overflow-hidden">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.7610732573303!2d105.77113527689362!3d21.04224398061047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454c918a64e17%3A0x6a26c7ecd7ef4df2!2zMTE2IFAuIFRy4bqnbiBW4bu5LCBNYWkgROG7i2NoLCBD4bqndSBHaeG6pXksIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1752512669303!5m2!1svi!2s"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    loading="lazy"
                                    title="Vị trí văn phòng Hà Nội"
                                ></iframe>
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
