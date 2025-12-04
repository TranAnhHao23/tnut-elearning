'use client';

import { useState } from 'react';
import RegistrationForm from '@/components/RegistrationForm';

export default function IntroPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="bg-white min-h-screen pb-16">
            {/* Header Section */}
            <div className="bg-[#0056b3] py-16 text-center text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern.png')]"></div> {/* Placeholder for pattern if any */}
                <div className="container mx-auto px-4 relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold uppercase mb-4">Giới thiệu</h1>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
                        Trường Đại học Kỹ thuật Công nghiệp - Đại học Thái Nguyên: Nôi đào tạo nguồn nhân lực kỹ thuật chất lượng cao.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12 max-w-5xl">
                {/* General Intro */}
                <div className="mb-12 text-gray-700 leading-relaxed text-lg text-justify">
                    <p className="mb-4">
                        Trường Đại học Kỹ thuật công nghiệp Thái Nguyên được thành lập ngày 19/8/1965 theo quyết định số 164/CP Hội đồng Chính phủ. Tính đến năm 2014, trường đã có lịch sử 49 năm với nhiều giai đoạn và tên gọi khác nhau.
                    </p>
                    <p>
                        Ở mỗi chặng đường lịch sử đó, trong chiến tranh cũng như trong hòa bình, thời bao cấp cũng như khi đất nước mở cửa, mỗi giai đoạn phát triển của Nhà trường đều được ghi dấu bằng những mốc son đáng tự hào.
                    </p>
                    <div className="mt-8 text-center">
                        <button className="px-8 py-3 bg-[#3b4c7a] text-white font-bold rounded-full uppercase hover:bg-[#2c3a5e] transition shadow-lg">
                            Giới Thiệu
                        </button>
                    </div>
                </div>

                {/* Timeline Section */}
                <div className="space-y-12">
                    <h2 className="text-3xl font-bold text-[#0056b3] text-center mb-8 uppercase">Các giai đoạn hình thành và phát triển</h2>

                    {/* Stage 1 */}
                    <div className="bg-gray-50 p-8 rounded-xl shadow-sm border-l-4 border-[#0056b3] hover:shadow-md transition">
                        <h3 className="text-2xl font-bold text-[#0056b3] mb-3">Phân hiệu Đại học Bách khoa tại Thái Nguyên (1965-1966)</h3>
                        <p className="text-gray-700 leading-relaxed">
                            Được thành lập ngày 19/8/1965 theo quyết định số 164/CP Hội đồng Chính phủ để đáp ứng nhu cầu xây dựng đội ngũ cán bộ khoa học kỹ thuật phục vụ sự nghiệp công nghiệp hóa xã hội chủ nghĩa ở miền Bắc và đáp ứng kịp thời nhu cầu cán bộ khoa học kỹ thuật cho khu gang thép Thái Nguyên. Phân hiệu Đại học Bách khoa tại Thái Nguyên trực thuộc 4 đơn vị chủ quản gồm: Công ty gang thép Thái Nguyên, trường Đại học Bách khoa Hà Nội, Bộ Công nghiệp nặng, Bộ đại học và Trung học chuyên nghiệp ra đời trong điều kiện cơ sở vật chất còn nghèo nàn, lực lượng cán bộ còn mỏng. Khóa đầu tiên của Nhà trường khai giảng vào ngày 06/12/1965 gồm 206 học sinh, sinh viên. Nhà trường đã đảm bảo tốt nhiệm vụ vừa dạy và học an toàn vừa ra sức xây dựng cơ sở vật chất và đội ngũ trong thời gian chiến tranh phá hoại của đế quốc Mỹ.
                        </p>
                    </div>

                    {/* Stage 2 */}
                    <div className="bg-gray-50 p-8 rounded-xl shadow-sm border-l-4 border-[#0056b3] hover:shadow-md transition">
                        <h3 className="text-2xl font-bold text-[#0056b3] mb-3">Đại học Cơ điện (1966-1975)</h3>
                        <p className="text-gray-700 leading-relaxed">
                            Ngày 06/12/1965, Thủ tướng Chính phủ ra Quyết định số 164/CP đổi tên Phân hiệu Đại học Bách khoa tại Thái Nguyên thành Trường Đại học Cơ điện. Trường trực thuộc Bộ Đại học và Trung học chuyên nghiệp. Nhiệm vụ của trường là đào tạo cán bộ kỹ thuật cơ điện trình độ đại học. Trong giai đoạn này, trường đã vượt qua nhiều khó khăn của thời chiến, vừa sơ tán vừa giảng dạy, đóng góp tích cực vào việc đào tạo nguồn nhân lực cho đất nước.
                        </p>
                    </div>

                    {/* Stage 3 */}
                    <div className="bg-gray-50 p-8 rounded-xl shadow-sm border-l-4 border-[#0056b3] hover:shadow-md transition">
                        <h3 className="text-2xl font-bold text-[#0056b3] mb-3">Trường Đại học Kỹ thuật công nghiệp Việt Bắc (1976-1982)</h3>
                        <p className="text-gray-700 leading-relaxed">
                            Ra đời nhằm đáp ứng các yêu cầu mới về đào tạo cán bộ khoa học kỹ thuật phục vụ công cuộc xây dựng đất nước sau chiến tranh, trường Đại học Kỹ thuật công nghiệp Việt Bắc là tên mới của trường Đại học Cơ điện theo Quyết định đổi tên trường số 426/TTG của Thủ tướng chính phủ. Phát huy những truyền thống tốt đẹp trong 10 năm xây dựng và trưởng thành, đồng thời tạo bước tiến mới trong đào tạo đội ngũ và xây dựng cơ sở vật chất, Nhà trường đẩy mạnh các phong trào thi đua học tập, nghiên cứu khoa học.
                        </p>
                    </div>

                    {/* Stage 4 */}
                    <div className="bg-gray-50 p-8 rounded-xl shadow-sm border-l-4 border-[#0056b3] hover:shadow-md transition">
                        <h3 className="text-2xl font-bold text-[#0056b3] mb-3">Trường Đại học Công nghiệp Thái Nguyên (1982-1994)</h3>
                        <p className="text-gray-700 leading-relaxed">
                            Với chủ trương xây dựng một trung tâm đào tạo đa cấp đa ngành, trường Trung học công nghiệp miền núi được sát nhập vào trường Đại học Kỹ thuật Công nghiệp Việt Bắc để thành lập trường Đại học Công nghiệp Thái Nguyên theo Nghị định số 332/HĐBT ngày 18/12/1982 của Hội đồng Bộ trưởng. Nhà trường đã tập trung kiện toàn bộ máy, ổn định tổ chức các khoa, xây dựng trung tâm thực nghiệm Nghiên cứu khoa học – Lao động sản xuất.
                        </p>
                    </div>

                    {/* Stage 5 */}
                    <div className="bg-gray-50 p-8 rounded-xl shadow-sm border-l-4 border-[#0056b3] hover:shadow-md transition">
                        <h3 className="text-2xl font-bold text-[#0056b3] mb-3">Trường Đại học Kỹ thuật công nghiệp – Đại học Thái Nguyên (1994 đến nay)</h3>
                        <p className="text-gray-700 leading-relaxed">
                            Với sự ra đời của đại học vùng – Đại học Thái Nguyên theo Nghị định 31/CP/1994 của Chính phủ, Đại học Công nghiệp Thái Nguyên trở thành một thành viên của Đại học Thái Nguyên và mang tên Đại học Kỹ thuật công nghiệp. Đây là giai đoạn đánh dấu sự phát triển mạnh mẽ về quy mô và chất lượng đào tạo, khẳng định vị thế là một trong những trường đại học kỹ thuật hàng đầu khu vực.
                        </p>
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="px-10 py-4 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition uppercase text-lg shadow-xl animate-pulse"
                    >
                        Đăng ký tư vấn ngay
                    </button>
                    <p className="mt-4 text-gray-600 italic">Để lại thông tin và bộ phận giáo vụ sẽ liên hệ lại sớm nhất có thể</p>
                </div>
            </div>

            <RegistrationForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
}
