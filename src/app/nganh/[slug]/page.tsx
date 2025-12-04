'use client';

import Image from 'next/image';
import { notFound } from 'next/navigation';
import { majors } from '@/data/majors';
import RegistrationForm from '@/components/RegistrationForm';
import { useState } from 'react';
import { useParams } from 'next/navigation';
import { FaLaptopCode, FaChalkboardTeacher, FaFileSignature, FaHome } from 'react-icons/fa';

export default function MajorPage() {
    const params = useParams();
    const slug = params.slug as string;
    const major = majors.find((m) => m.slug === slug);
    const [isModalOpen, setIsModalOpen] = useState(false);

    if (!major) {
        return <div className="container mx-auto p-10 text-center">Ngành học không tồn tại</div>;
    }

    return (
        <div className="bg-white min-h-screen">
            {/* Hero Banner */}
            <section className="relative h-64 bg-gradient-to-r from-[#0056b3] to-[#003d82] flex items-center justify-center">
                <h1 className="text-4xl md:text-5xl font-bold text-white text-center px-4">
                    Ngành {major.name}
                </h1>
            </section>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-12 max-w-5xl">
                {/* Introduction Section */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-[#0056b3] mb-6">Giới thiệu</h2>

                    <div className="bg-blue-50 border-l-4 border-[#0056b3] p-6 mb-6">
                        <div className="grid grid-cols-3 gap-4 text-center mb-4">
                            <div>
                                <p className="text-3xl font-bold text-[#0056b3]">{major.content.credits}</p>
                                <p className="text-sm text-gray-600">Tín chỉ</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-[#0056b3]">{major.content.coursesTotal}</p>
                                <p className="text-sm text-gray-600">Môn học</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-[#0056b3]">{major.content.trainingTime}</p>
                                <p className="text-sm text-gray-600">Thời gian đào tạo</p>
                            </div>
                        </div>
                        {/* <p className="text-center text-gray-700 font-semibold">Tối thiểu từ 2 - 4 năm</p> */}
                    </div>

                    <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                        <p>{major.description}</p>
                        {major.content.introduction && <p>{major.content.introduction}</p>}
                    </div>

                    <div className="mt-8 text-center">
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="px-8 py-3 bg-red-600 text-white font-bold rounded uppercase hover:bg-red-700 transition animate-scale-pulse"
                        >
                            Đăng ký tuyển sinh
                        </button>
                        {/* <p className="text-sm text-gray-600 mt-2">Tư vấn chuyên nghiệp. Thủ tục nhanh gọn. Ưu tiên nộp hồ sơ sớm.</p> */}
                    </div>
                </section>

                {/* Job Opportunities Section */}
                {major.content.jobOpportunities && (
                    <section className="mb-12 bg-gray-50 p-8 rounded-lg">
                        <h3 className="text-2xl font-bold text-[#0056b3] mb-4">
                            Sau khi hoàn thành chương trình học ngành {major.name} hệ đào tạo từ xa, học viên có thể đảm nhận các công việc:
                        </h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            {major.content.jobOpportunities.map((job, index) => (
                                <li key={index}>{job}</li>
                            ))}
                        </ul>
                    </section>
                )}

                {/* Important Notes */}
                <section className="mb-12">
                    <h3 className="text-xl font-bold text-[#0056b3] mb-4">Các lưu ý:</h3>
                    <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700 bg-yellow-50 p-6 rounded-lg">
                        <li>Đối tượng đã có bằng TC, CĐ, ĐH trở lên được xét công nhận và chuyển đổi tín chỉ. Thời gian hoàn thành CTĐT tùy thuộc vào khối lượng học tập thực tế và giới hạn học tập trong từng học kỳ.</li>
                        <li>Thời gian đào tạo được tính từ ngày có quyết định công nhận và sẽ được tư vấn đăng ký KHHT toàn khóa phù hợp theo quy định.</li>
                        <li>Mức thu học phí hàng năm theo thông báo của Trường. Học viên nộp học phí theo thông báo thu học phí hàng kỳ.</li>
                        <li>Không phải đóng bất kỳ khoản phí nào ngoài các khoản thu học phí và xét miễn môn theo quy định của Trường.</li>
                        <li>Không được phép cho người khác sử dụng tài khoản học tập của mình.</li>
                        <li>Nghiêm cấm việc gian lận trong học tập, nhà trường sẽ xử lý kỷ luật theo quy định khi phát hiện ra.</li>
                    </ol>
                </section>

                {/* Training Program Section */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-[#0056b3] mb-6">Chương trình đào tạo</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            'Đã có bằng Trung học phổ thông',
                            `Đã có bằng cao đẳng ngành ${major.name}`,
                            `Đã có bằng cao đẳng khác ngành ${major.name}`,
                            `Đã có bằng trung cấp ngành ${major.name}`,
                            `Đã có bằng trung cấp khác ngành ${major.name}`,
                            'Đã có bằng Đại học'
                        ].map((item, index) => (
                            <div key={index} className="bg-blue-50 p-4 rounded border border-blue-200 text-center">
                                <p className="text-gray-800">{item}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-6 text-center">
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="px-6 py-2 bg-yellow-400 text-[#0056b3] font-bold rounded uppercase hover:bg-yellow-300 transition"
                        >
                            Nhận tư vấn miễn phí
                        </button>
                    </div>
                </section>

                {/* Advantages Section */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-[#0056b3] mb-8 text-center">
                        Ưu điểm khi theo học từ xa tại Trường Đại học Kỹ thuật Công nghiệp Thái Nguyên
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="text-center p-6 bg-white border-2 border-gray-200 rounded-lg hover:border-[#0056b3] transition group">
                            <FaLaptopCode className="w-12 h-12 mx-auto text-[#0056b3] mb-4 group-hover:scale-110 transition-transform" />
                            <h3 className="text-xl font-bold text-[#0056b3] mb-3">Công nghệ tiên tiến</h3>
                            <p className="text-gray-700">
                                Chương trình học áp dụng phương pháp đào tạo trực tuyến theo hình thức E-Learning hiện đại, tạo ra môi trường học tập và trao đổi online thuận lợi nhất cho sinh viên.
                            </p>
                        </div>
                        <div className="text-center p-6 bg-white border-2 border-gray-200 rounded-lg hover:border-[#0056b3] transition group">
                            <FaChalkboardTeacher className="w-12 h-12 mx-auto text-[#0056b3] mb-4 group-hover:scale-110 transition-transform" />
                            <h3 className="text-xl font-bold text-[#0056b3] mb-3">Giảng viên giàu kinh nghiệm</h3>
                            <p className="text-gray-700">
                                100% giảng viên là các GS, Tiến sỹ, Thạc sỹ đang công tác tại trường, cùng với đội ngũ hỗ trợ của nhà trường luôn sẵn sàng tư vấn cho sinh viên 24/7.
                            </p>
                        </div>
                        <div className="text-center p-6 bg-white border-2 border-gray-200 rounded-lg hover:border-[#0056b3] transition group">
                            <FaFileSignature className="w-12 h-12 mx-auto text-[#0056b3] mb-4 group-hover:scale-110 transition-transform" />
                            <h3 className="text-xl font-bold text-[#0056b3] mb-3">Không thi đầu vào</h3>
                            <p className="text-gray-700">
                                TT Đào tạo từ xa thuộc Đại học Kỹ thuật công nghiệp - Đại học Thái Nguyên chỉ áp dụng tuyển sinh theo một hình thức duy nhất đó là xét tuyển áp dụng với tất cả đối tượng học viên.
                            </p>
                        </div>
                        <div className="text-center p-6 bg-white border-2 border-gray-200 rounded-lg hover:border-[#0056b3] transition group">
                            <FaHome className="w-12 h-12 mx-auto text-[#0056b3] mb-4 group-hover:scale-110 transition-transform" />
                            <h3 className="text-xl font-bold text-[#0056b3] mb-3">Không cần đến trường</h3>
                            <p className="text-gray-700">
                                Chỉ cần có mạng internet là bạn có thể học bất cứ lúc nào, bất cứ nơi đâu. Môi trường học tập online không hề thua kém so với môi trường học tập truyền thống.
                            </p>
                        </div>
                    </div>
                    {/* <div className="mt-8 text-center">
                        <p className="text-red-600 font-bold mb-4">Chỉ tiêu có hạn</p>
                    </div> */}
                </section>

                {/* CTA Section */}
                <section className="bg-gradient-to-r from-[#0056b3] to-[#003d82] p-8 rounded-lg text-white text-center">
                    <h2 className="text-2xl font-bold mb-4">Lịch khai giảng khoá gần nhất</h2>
                    <p className="mb-6">Khoá học gần nhất có thể ngừng nhận đơn đăng ký trước thời hạn nếu đã đủ chỉ tiêu.</p>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="px-8 py-3 bg-red-600 text-white font-bold rounded uppercase hover:bg-red-700 transition animate-scale-pulse"
                    >
                        Đăng ký ngay
                    </button>
                    <p className="text-sm mt-2">Tư vấn chuyên nghiệp. Thủ tục nhanh gọn. Đi học được luôn. Ưu tiên nộp hồ sơ sớm.</p>
                </section>
            </div>

            <RegistrationForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
}
