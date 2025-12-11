'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Hero from '@/components/Hero';
import RegistrationForm from '@/components/RegistrationForm';
import { saveUTMParamsToLocalStorage } from '@/lib/utm';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    saveUTMParamsToLocalStorage();

    // Open modal automatically after 15 seconds
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 15000);

    return () => clearTimeout(timer);
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Hero onRegister={openModal} />

      {/* Content Sections Placeholder - To be filled with more details */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#0056b3] mb-8 uppercase">Thông tin tuyển sinh</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-4">Đối tượng tuyển sinh</h3>
              <p className="text-gray-600">Tốt nghiệp THPT, Trung cấp, Cao đẳng, Đại học. Người đi làm muốn nâng cao văn bằng.</p>
            </div>
            <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-4">Hình thức tuyển sinh</h3>
              <p className="text-gray-600">Xét tuyển hồ sơ, không thi tuyển. Thủ tục đơn giản, nhanh chóng.</p>
            </div>
            <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-4">Thời gian đào tạo</h3>
              <p className="text-gray-600">Linh hoạt, rút ngắn thời gian cho người đã có bằng Trung cấp, Cao đẳng.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Majors Section */}
      <section className="py-16 bg-white" id="nganh">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#0056b3] mb-12 text-center uppercase">Các ngành tuyển sinh đào tạo từ xa</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Kỹ thuật máy tính', img: '/images/ktmt.jpg', slug: 'ky-thuat-may-tinh' },
              { name: 'Ngôn ngữ Anh', img: '/images/nna.jpg', slug: 'ngon-ngu-anh' },
              { name: 'Kỹ thuật xây dựng', img: '/images/xd.jpg', slug: 'xay-dung-dan-dung' },
              { name: 'Quản lý công nghiệp', img: '/images/qlcn.jpg', slug: 'quan-ly-cong-nghiep' },
              { name: 'Kinh tế công nghiệp', img: '/images/ktcn.jpg', slug: 'kinh-te-cong-nghiep' },
            ].map((major) => (
              <Link key={major.name} href={`/nganh/${major.slug}`} className="block group relative overflow-hidden rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition">
                <div className="h-48 bg-gray-200 relative">
                  <Image src={major.img} alt={major.name} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                  <span className="text-white font-bold text-lg uppercase">Xem chi tiết</span>
                </div>
                <div className="p-4 bg-white text-center">
                  <h3 className="font-bold text-[#0056b3]">{major.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#0056b3] mb-12 text-center uppercase">Bằng cấp giá trị tương đương bằng chính quy</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-[#0056b3] text-white p-3 rounded-full mr-4">
                  <span className="font-bold text-xl">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Không ghi hình thức đào tạo</h3>
                  <p className="text-gray-600">Trên văn bằng không còn ghi hình thức đào tạo là "Từ xa".</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-[#0056b3] text-white p-3 rounded-full mr-4">
                  <span className="font-bold text-xl">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Giá trị tương đương chính quy</h3>
                  <p className="text-gray-600">Được Bộ GD&ĐT công nhận, có giá trị sử dụng suốt đời trên phạm vi toàn quốc.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-[#0056b3] text-white p-3 rounded-full mr-4">
                  <span className="font-bold text-xl">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Cơ hội học tập cao hơn</h3>
                  <p className="text-gray-600">Đủ điều kiện thi công chức, xét nâng bậc lương, học lên Thạc sĩ, Tiến sĩ.</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden">
              <iframe
                className="w-full aspect-video"
                src="https://www.youtube.com/embed/nZvtnzMb0PA"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#0056b3] mb-12 text-center uppercase">Những đặc điểm nổi bật</h2>

          {/* Icons Row */}
          <div className="grid md:grid-cols-4 gap-8 mb-16 text-center">
            <div className="flex flex-col items-center">
              <div className="text-[#0056b3] mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
              </div>
              <h3 className="font-bold text-lg mb-2 text-[#0056b3]">Thương hiệu top 1</h3>
              <p className="text-sm text-gray-600">TNUT E-Learning là chương trình đào tạo từ xa về khối ngành kỹ thuật hàng đầu tại Việt Nam.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-[#0056b3] mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
              </div>
              <h3 className="font-bold text-lg mb-2 text-[#0056b3]">Học liệu đa dạng</h3>
              <p className="text-sm text-gray-600">Mỗi học phần đều được thiết kế chuẩn theo chương trình chính quy, đảm bảo chất lượng đầu ra.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-[#0056b3] mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
              </div>
              <h3 className="font-bold text-lg mb-2 text-[#0056b3]">Học 100% online</h3>
              <p className="text-sm text-gray-600">Phương pháp đào tạo từ xa, giúp người học chủ động thời gian, không gian học.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-[#0056b3] mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
              </div>
              <h3 className="font-bold text-lg mb-2 text-[#0056b3]">Bằng cấp uy tín</h3>
              <p className="text-sm text-gray-600">Tốt nghiệp được cấp Bằng Cử nhân/Kỹ sư không ghi hình thức đào tạo, được Bộ GD&ĐT công nhận.</p>
            </div>
          </div>

          {/* Feature Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image src="/images/giang-duong.png" alt="Giảng đường" fill className="object-cover" />
            </div>
            <div className="text-left space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-[#0056b3] mb-4 uppercase">Giảng viên hàng đầu</h3>
                <p className="text-gray-600 leading-relaxed">
                  Trình độ giảng viên chuyên môn cao tốt nghiệp thạc sĩ, tiến sĩ, phó giáo sư và giáo sư giảng dạy và hướng dẫn.
                </p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-yellow-500 mb-4 uppercase">Tiết kiệm chi phí</h3>
                <p className="text-gray-600 leading-relaxed">
                  Với lợi thế học Online sẽ giúp tiết kiệm tối đa chi phí đi lại, sinh hoạt, ăn ở so với học tập trung.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-gray-600 mb-6">
              Nếu bạn vẫn còn thắc mắc về hồ sơ đăng ký hoặc cần tư vấn thêm về chương trình đào tạo, vui lòng đăng ký để được tư vấn trực tiếp.
            </p>
            <button
              onClick={openModal}
              className="px-8 py-3 bg-yellow-400 text-[#0056b3] font-bold rounded-full shadow-lg uppercase hover:bg-yellow-300 transition transform border-2 border-white animate-scale-pulse"
            >
              Yêu cầu tư vấn
            </button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#0056b3] text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 uppercase">Đăng ký tư vấn miễn phí ngay hôm nay</h2>
          <p className="mb-8 text-lg">Để lại thông tin để được tư vấn chi tiết về chương trình và ưu đãi học phí.</p>
          <button
            onClick={openModal}
            className="px-8 py-3 bg-yellow-400 text-[#0056b3] font-bold rounded shadow-lg uppercase hover:bg-yellow-300 transition-transform transform animate-scale-pulse"
          >
            Đăng ký ngay
          </button>
        </div>
      </section>

      <RegistrationForm isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}
