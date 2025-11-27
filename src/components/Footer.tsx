import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#0056b3] text-white pt-10 pb-6">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Column 1: Logo & Info */}
                    <div className="space-y-4">
                        <div className="inline-block">
                            <Image
                                src="/images/logos.png"
                                alt="TNUT Logo"
                                width={300}
                                height={60}
                                className="h-auto w-[280px]"
                            />
                        </div>
                        <p className="text-sm leading-relaxed">
                            Kênh tuyển sinh Hệ Đại học Từ xa <br />
                            Trường Đại học Kỹ thuật Công nghiệp – Đại học Thái Nguyên.
                        </p>
                    </div>

                    {/* Column 2: Majors */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 uppercase border-b border-white/20 pb-2 inline-block">
                            Các ngành tuyển sinh
                        </h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/nganh/xay-dung-dan-dung" className="hover:underline">
                                    Đại học từ xa ngành xây dựng dân dụng
                                </Link>
                            </li>
                            <li>
                                <Link href="/nganh/quan-ly-cong-nghiep" className="hover:underline">
                                    Đại học từ xa ngành quản lý công nghiệp
                                </Link>
                            </li>
                            <li>
                                <Link href="/nganh/kinh-te-cong-nghiep" className="hover:underline">
                                    Đại học từ xa ngành kinh tế công nghiệp
                                </Link>
                            </li>
                            <li>
                                <Link href="/nganh/ky-thuat-may-tinh" className="hover:underline">
                                    Đại học từ xa ngành kỹ thuật máy tính
                                </Link>
                            </li>
                            <li>
                                <Link href="/nganh/ngon-ngu-anh" className="hover:underline">
                                    Đại học từ xa ngành ngôn ngữ anh
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Contact */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 uppercase border-b border-white/20 pb-2 inline-block">
                            Liên hệ
                        </h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start">
                                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                                <div>
                                    <p className="font-semibold">Hà Nội:</p>
                                    <span>Số 116 Trần Vỹ, Mai Dịch, Cầu Giấy, Hà Nội</span>
                                    <p className="font-semibold mt-2">Hồ Chí Minh:</p>
                                    <span>Số 91 Ký Con, Nguyễn Thái Bình, Quận 1, TP.HCM</span>
                                </div>
                            </li>
                            <li className="flex items-center">
                                <Mail size={18} className="mr-2 flex-shrink-0" />
                                <a href="mailto:tuyensinh@e-class.edu.vn" className="hover:underline">
                                    tuyensinh@e-class.edu.vn
                                </a>
                            </li>
                            <li className="flex items-center">
                                <Phone size={18} className="mr-2 flex-shrink-0" />
                                <a href="tel:0984392246" className="hover:underline font-bold">
                                    0965.020.747
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Zalo QR */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 uppercase border-b border-white/20 pb-2 inline-block">
                            Liên hệ ZALO
                        </h3>
                        <div className="bg-white rounded-lg p-4 max-w-[200px]">
                            <p className="text-center text-[#0056b3] text-sm mb-2">Quét mã QR liên hệ với trường bạn nhé!</p>
                            <div className="relative h-32 w-32 mx-auto">
                                <Image
                                    src="/images/zalo-qr.png"
                                    alt="Zalo QR Code"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/20 text-center text-sm">
                    <p>© 2021 Đại học Thái Nguyên - Trung tâm Đào tạo Từ xa. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
