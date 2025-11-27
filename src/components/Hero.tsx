'use client';

import Image from 'next/image';

interface HeroProps {
    onRegister: () => void;
}

const Hero = ({ onRegister }: HeroProps) => {
    return (
        <section className="relative bg-cover bg-center min-h-[500px] flex items-center" style={{ backgroundImage: 'url(/images/banner.jpg)' }}>
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="container mx-auto px-4 relative z-10 text-white">
                <div className="max-w-2xl">
                    <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                        Đào tạo Đại học hệ từ xa.<br />
                        <span className="text-yellow-400">Lấy bằng đỏ cử nhân, không ghi hệ đào tạo</span>
                    </h1>

                    <ul className="space-y-3 mb-8 text-lg">
                        <li className="flex items-center">
                            <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                            Không Thi Đầu Vào
                        </li>
                        <li className="flex items-center">
                            <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                            Không Cần Đến Trường
                        </li>
                        <li className="flex items-center">
                            <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                            Chỉ Cần Máy Tính và Internet
                        </li>
                        <li className="flex items-center">
                            <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                            Giá Trị Văn Bằng Tương Đương Bằng Chính Quy
                        </li>
                    </ul>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <button
                            onClick={onRegister}
                            className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded shadow-lg uppercase transition-transform transform border-2 border-white animate-scale-pulse"
                        >
                            Đăng ký tư vấn xét tuyển
                        </button>
                    </div>

                    <div className="mt-6 text-sm font-semibold bg-green-600 inline-block px-3 py-1 rounded">
                        97% Học viên hài lòng
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
