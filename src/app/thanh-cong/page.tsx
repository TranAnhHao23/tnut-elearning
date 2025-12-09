'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function ThankYouPage() {
    return (
        <section className="min-h-screen bg-[#3a4368] text-white flex items-center justify-center px-4 py-12">
            <div className="w-full max-w-md bg-white text-black rounded-2xl shadow-2xl p-8 sm:p-10 text-center space-y-6">
                <div className="flex flex-col items-center space-y-4">
                    <div className="w-16 h-16 bg-green-100 text-green-600 flex items-center justify-center rounded-full text-4xl">
                        ✅
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-green-700">Đăng ký thành công!</h1>
                    <p className="text-gray-700 text-base leading-relaxed text-balance">
                        Cảm ơn bạn đã đăng ký tư vấn chương trình<br />
                        <strong>Đào tạo từ xa – Đại học Kỹ thuật Công nghiệp</strong>.<br />
                        Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.
                    </p>
                    <p className="text-gray-600 text-sm italic">
                        Chúc bạn học tập thật tốt và thành công trong tương lai!
                    </p>
                </div>

                <Link
                    href="/"
                    className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-6 py-3 font-semibold text-white shadow hover:bg-blue-700 transition"
                >
                    <ArrowLeft size={18} /> Quay về trang chủ
                </Link>
            </div>
        </section>
    );
}
