'use client';

import { useState } from 'react';
import RegistrationForm from '@/components/RegistrationForm';

export default function AdmissionSchedulePage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="bg-gray-50 min-h-screen pb-16">
            <div className="bg-[#0056b3] py-12 text-center text-white">
                <h1 className="text-3xl font-bold uppercase">Lịch khai giảng</h1>
            </div>

            <div className="container mx-auto px-4 py-8 max-w-4xl">
                <div className="bg-white p-8 rounded-lg shadow-lg space-y-8">
                    <section>
                        <h2 className="text-2xl font-bold text-[#0056b3] mb-4 border-b pb-2">Thông tin tuyển sinh</h2>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed">
                            <li><strong>Độ tuổi:</strong> Từ 18 tuổi trở lên.</li>
                            <li><strong>Đối tượng:</strong>
                                <ul className="list-circle list-inside ml-6 mt-1 space-y-1">
                                    <li>Cán bộ công chức, người đang đi làm.</li>
                                    <li>Sinh viên đang học tại các trường Cao đẳng, Đại học.</li>
                                    <li>Người đã có bằng Đại học, Cao đẳng, Trung cấp muốn học văn bằng 2 hoặc liên thông.</li>
                                    <li>Học sinh vừa tốt nghiệp THPT.</li>
                                </ul>
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-[#0056b3] mb-4 border-b pb-2">Hình thức tuyển sinh</h2>
                        <p className="text-gray-700 mb-2">
                            Chương trình Đào tạo từ xa của Trường Đại Học Kỹ thuật Công nghiệp Thái Nguyên chỉ áp dụng hình thức <strong>xét tuyển đầu vào (không thi tuyển)</strong>.
                        </p>
                        <div className="bg-blue-50 p-4 rounded border-l-4 border-[#0056b3]">
                            <p className="font-semibold text-[#0056b3]">Yêu cầu hồ sơ:</p>
                            <ul className="list-disc list-inside mt-2 text-gray-700">
                                <li>Bằng tốt nghiệp THPT hoặc tương đương.</li>
                                <li>Bằng Trung cấp/Cao đẳng/Đại học (nếu có) để xét miễn giảm tín chỉ.</li>
                                <li>CCCD/CMND photo công chứng.</li>
                                <li>Ảnh thẻ 3x4.</li>
                            </ul>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-[#0056b3] mb-4 border-b pb-2">Lịch khai giảng khoá gần nhất</h2>
                        <div className="text-center p-6 border-2 border-dashed border-red-400 rounded-lg bg-red-50">
                            <p className="text-lg text-red-600 font-bold mb-2">TUYỂN SINH LIÊN TỤC HÀNG THÁNG</p>
                            <p className="text-gray-700">
                                Nhà trường tổ chức xét tuyển và khai giảng liên tục.
                                <br />
                                Vui lòng đăng ký để nhận thông báo về đợt khai giảng gần nhất.
                            </p>
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="mt-4 px-6 py-2 bg-red-600 text-white font-bold rounded hover:bg-red-700 transition uppercase"
                            >
                                Đăng ký nhận lịch khai giảng
                            </button>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-[#0056b3] mb-4 border-b pb-2">Liên hệ tư vấn</h2>
                        <p className="text-gray-700">
                            <strong>Văn phòng tuyển sinh:</strong><br />
                            <strong>Hà Nội:</strong> Số 116 Trần Vỹ, Mai Dịch, Cầu Giấy, Hà Nội<br />
                            <strong>Hồ Chí Minh:</strong> Số 91 Ký Con, Nguyễn Thái Bình, Quận 1, TP.HCM<br />
                            <strong>Hotline:</strong> 0965.020.747<br />
                            <strong>Email:</strong> tuyensinh@e-class.edu.vn
                        </p>
                    </section>
                </div>
            </div>

            <RegistrationForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
}
