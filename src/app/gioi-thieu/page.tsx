'use client';

import { useState } from 'react';
import RegistrationForm from '@/components/RegistrationForm';

export default function IntroPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="bg-gray-50 min-h-screen pb-16">
            <div className="bg-[#0056b3] py-12 text-center text-white">
                <h1 className="text-3xl font-bold uppercase">Giới thiệu</h1>
            </div>

            <div className="container mx-auto px-4 py-8 max-w-4xl">
                <div className="bg-white p-8 rounded-lg shadow-lg text-gray-700 leading-relaxed space-y-6">
                    <section>
                        <h2 className="text-2xl font-bold text-[#0056b3] mb-4">Đại học Kỹ thuật công nghiệp Việt Bắc (1976-1982)</h2>
                        <p>
                            Ra đời nhằm đáp ứng các yêu cầu mới về đào tạo cán bộ khoa học kỹ thuật phục vụ công cuộc xây dựng đất nước sau chiến tranh, trường Đại học Kỹ thuật công nghiệp Việt Bắc là tên mới của trường Đại học Cơ điện theo Quyết định đổi tên trường số 426/TTG của Thủ tướng chính phủ.
                        </p>
                        <p className="mt-2">
                            Phát huy những truyền thống tốt đẹp trong 10 năm xây dựng và trưởng thành, đồng thời tạo bước tiến mới trong đào tạo đội ngũ và xây dựng cơ sở vật chất, Nhà trường đẩy mạnh các phong trào thi đua học tập, nghiên cứu khoa học, ứng dụng khoa học mới vào thực tiễn nhằm nâng cao chất lượng giáo dục đào tạo và nâng cao uy tín Nhà trường. Đến cuối năm 1982 trường đã đào tạo được 3214 sinh viên tốt nghiệp Kỹ sư trong đó có 2828 kỹ sư hệ chính quy, hệ chuyên tu là 334 kỹ sư, tại chức là 52 kỹ sư thuộc các ngành: Cơ khí chế tạo máy, cơ khí luyện kim, luyện kim, cán thép và điện khí hóa xí nghiệp.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-[#0056b3] mb-4">Đại học Công nghiệp Thái Nguyên (1982-1994)</h2>
                        <p>
                            Với chủ trương xây dựng một trung tâm đào tạo đa cấp đa ngành, trường Trung học công nghiệp miền núi được sát nhập vào trường Đại học Kỹ thuật Công nghiệp Việt Bắc để thành lập trường Đại học Công nghiệp Thái Nguyên theo Nghị định số 332/HĐBT ngày 18/12/1982 của Hội đồng Bộ trưởng.
                        </p>
                        <p className="mt-2">
                            Nhà trường đã tập trung kiện toàn bộ máy, ổn định tổ chức các khoa, xây dựng trung tâm thực nghiệm Nghiên cứu khoa học – Lao động sản xuất, thành lập tổ xuất bản phục vụ việc cung cấp tài liệu học tập và giảng dạy cho sinh viên và giảng viên. Song song với việc ổn định tổ chức, Nhà trường rất quan tâm chú trọng việc bồi dưỡng, xây dựng đội ngũ giáo viên. Có 267 lượt cán bộ giảng viên tham gia nghiên cứu sinh, thực tập sinh và theo học các lớp bồi dưỡng nâng cao chuyên môn, ngoại ngữ, tin học tại trường.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-[#0056b3] mb-4">Trường Đại học Kỹ thuật công nghiệp (1994 đến nay)</h2>
                        <p>
                            Với sự ra đời của đại học vùng – Đại học Thái Nguyên theo Nghị định 31/CP/1994 của Chính phủ, Đại học Công nghiệp Thái Nguyên trở thành một thành viên của Đại học Thái Nguyên và mang tên Đại học Kỹ thuật công nghiệp – Đại học Thái Nguyên.
                        </p>
                        <p className="mt-2">
                            Đây là giai đoạn đánh dấu một bước ngoặt lớn về sự phát triển mạnh mẽ của Nhà trường với cơ sở vật chất được nâng cao và đội ngũ cán bộ giảng viên không chỉ tăng lên về số lượng mà còn nâng cao cả về chất lượng. Đến năm 2014, bộ máy tổ chức Nhà trường đã phát triển thành 25 đơn vị trong đó có 12 khoa và trung tâm đào tạo với 37 bộ môn chuyên môn, 05 phòng thí nghiệm và xưởng thực tập, 12 phòng và trung tâm chức năng, 01 viện nghiên cứu và 01 công ty TNHH chuyển giao công nghệ và phát triển các kết quả nghiên cứu ra thị trường.
                        </p>
                        <p className="mt-2">
                            Đội ngũ của Nhà trường gồm 594 CBVC với 416 giảng viên với 78% giảng viên có trình độ trên đại học, 10% giảng viên có trình độ tiến sỹ, 93% giảng viên giảng dạy lý thuyết thành thạo ngoại ngữ hoặc có trình độ tiếng Anh trên 450 TOEFL ITP… đang phục vụ đào tạo trên 11.000 sinh viên trong nước và quốc tế với 28 chuyên ngành đào tạo đại học và sau đại học, trong đó có 02 chương trình tiên tiến và 02 chương trình liên kết đào tạo quốc tế.
                        </p>
                        <p className="mt-2">
                            Sẵn sàng đón nhận những cơ hội và thách thức mới trong thời kỳ hội nhập và phát triển, Nhà trường đang không ngừng đầu tư cơ sở vật chất, xây dựng bồi dưỡng và phát triển đội ngũ, quyết tâm thực hiện thắng lợi mục tiêu trở thành một trung tâm đào tạo kỹ thuật có uy tín trong nước và ngang tầm quốc tế.
                        </p>
                    </section>

                    <div className="mt-8 text-center">
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="px-8 py-3 bg-red-600 text-white font-bold rounded hover:bg-red-700 transition uppercase"
                        >
                            Đăng ký tư vấn ngay
                        </button>
                    </div>
                </div>
            </div>

            <RegistrationForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
}
