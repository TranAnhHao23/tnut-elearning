export interface Major {
    slug: string;
    name: string;
    image: string;
    description: string;
    content: {
        introduction?: string;
        targetAudience: string[];
        admissionMethod: string[];
        trainingTime: string[];
        advantages: { title: string; description: string }[];
        jobOpportunities?: string[];
    };
}

export const majors: Major[] = [
    {
        slug: 'ngon-ngu-anh',
        name: 'Ngôn ngữ Anh',
        image: '/images/nna.jpg',
        description: 'Ngành Ngôn ngữ Anh chuyên ngành Tiếng Anh Khoa học kỹ thuật và công nghệ tại trường Đại học Kỹ thuật công nghiệp Thái Nguyên trang bị cho học viên kiến thức chuyên sâu về ngôn ngữ Anh, đồng thời tập trung vào các thuật ngữ và kỹ năng giao tiếp chuyên nghiệp trong các lĩnh vực kỹ thuật và công nghệ.',
        content: {
            introduction: 'Chương trình đào tạo từ xa ngành Ngôn ngữ Anh chuyên ngành Tiếng Anh Khoa học kỹ thuật và công nghệ của trường Đại học Kỹ thuật công nghiệp Thái Nguyên được thiết kế để đáp ứng nhu cầu học tập linh hoạt cho người học. Học viên có thể linh hoạt học tập mà không bị giới hạn bởi vị trí địa lý, đồng thời áp dụng ngay những kiến thức học được vào thực tế công việc.',
            targetAudience: [
                'Tốt nghiệp THPT hoặc tương đương.',
                'Cán bộ, nhân viên muốn nâng cao trình độ tiếng Anh.',
            ],
            admissionMethod: ['Xét tuyển hồ sơ.'],
            trainingTime: [
                'Tốt nghiệp THPT: 4 năm.',
                'Văn bằng 2: 2 - 2.5 năm.',
            ],
            advantages: [
                { title: 'Công nghệ tiên tiến', description: 'Chương trình học áp dụng E-Learning hiện đại.' },
                { title: 'Giảng viên giàu kinh nghiệm', description: '100% GS, TS, ThS từ trường.' },
                { title: 'Không thi đầu vào', description: 'Chỉ xét tuyển hồ sơ.' },
                { title: 'Không cần đến trường', description: 'Học mọi lúc mọi nơi với internet.' },
            ],
            jobOpportunities: [
                'Biên, phiên dịch viên tự do hoặc làm cho các công ty, doanh nghiệp trong và ngoài nước với lĩnh vực khoa học, kỹ thuật và công nghệ.',
                'Chuyên viên làm việc trong các lĩnh vực công nghiệp, tài chính, ngoại giao.',
                'Làm nhân viên lễ tân tại các nhà hàng và khách sạn quốc tế, hướng dẫn viên du lịch quốc tế (khi có chứng chỉ nghề).',
                'Làm việc tại các bộ phận đối ngoại của các cơ quan nhà nước, các tổ chức xã hội, các công ty.',
                'Làm thư ký hoặc trợ lý giám đốc cho các doanh nghiệp trong và ngoài nước.',
                'Giáo viên/Giảng viên dạy tiếng Anh, đặc biệt liên quan đến lĩnh vực khoa học kỹ thuật và công nghệ.',
            ],
        },
    },
    {
        slug: 'ky-thuat-may-tinh',
        name: 'Kỹ thuật máy tính',
        image: '/images/ktmt.jpg',
        description: 'Ngành Kỹ thuật máy tính đào tạo kỹ sư có kiến thức chuyên sâu về phần cứng và phần mềm máy tính, đáp ứng nhu cầu nhân lực chất lượng cao trong kỷ nguyên số hóa và công nghệ thông tin.',
        content: {
            introduction: 'Chương trình đào tạo từ xa ngành Kỹ thuật máy tính trang bị cho học viên kiến thức nền tảng vững chắc và kỹ năng thực hành trong lĩnh vực công nghệ thông tin, phù hợp với xu hướng phát triển của ngành.',
            targetAudience: [
                'Là công dân Việt Nam hoặc người nước ngoài đã tốt nghiệp THPT trở lên.',
                'Không giới hạn độ tuổi, có nguyện vọng học tập.',
            ],
            admissionMethod: ['Xét tuyển theo hồ sơ đăng ký, không thi tuyển.'],
            trainingTime: [
                'Tốt nghiệp THPT hoặc tương đương: 4,0 – 4,5 năm.',
                'Có bằng Trung cấp cùng/ngành gần: 2,0 – 4,0 năm.',
                'Có bằng Đại học, Cao đẳng: 2,0 – 3,5 năm.',
            ],
            advantages: [
                { title: 'Công nghệ tiên tiến', description: 'E-Learning hiện đại, môi trường học tập trực tuyến.' },
                { title: 'Giảng viên giỏi', description: 'Đội ngũ GS, TS, ThS có kinh nghiệm.' },
                { title: 'Không thi đầu vào', description: 'Xét tuyển hồ sơ đơn giản.' },
                { title: 'Linh hoạt', description: 'Học mọi lúc mọi nơi.' },
            ],
            jobOpportunities: [
                'Kỹ sư phát triển phần mềm tại các công ty công nghệ trong và ngoài nước.',
                'Chuyên viên quản trị hệ thống mạng và cơ sở dữ liệu.',
                'Kỹ sư bảo mật thông tin và an ninh mạng.',
                'Lập trình viên ứng dụng di động, web và các nền tảng khác.',
                'Chuyên viên phân tích và thiết kế hệ thống thông tin.',
                'Giảng viên, nghiên cứu viên trong lĩnh vực công nghệ thông tin.',
            ],
        },
    },
    {
        slug: 'xay-dung-dan-dung',
        name: 'Kỹ thuật xây dựng',
        image: '/images/xd.jpg',
        description: 'Ngành Kỹ thuật xây dựng dân dụng có mặt ở mọi cấp độ: trong phạm vi công cộng, nhà nước đến tư nhân, và rộng hơn là trên khu vực và quốc tế.',
        content: {
            introduction: 'Chương trình đào tạo cung cấp kiến thức toàn diện về thiết kế, thi công, quản lý công trình xây dựng, đáp ứng nhu cầu phát triển của ngành xây dựng Việt Nam.',
            targetAudience: [
                'Người làm trong lĩnh vực xây dựng muốn chuẩn hóa bằng cấp.',
                'Tốt nghiệp THPT yêu thích ngành xây dựng.',
            ],
            admissionMethod: ['Xét tuyển hồ sơ.'],
            trainingTime: [
                'Tốt nghiệp THPT: 4.5 năm.',
                'Liên thông từ TC, CĐ: 2.5 - 3.5 năm.',
            ],
            advantages: [
                { title: 'Thực tiễn cao', description: 'Chương trình bám sát thực tế ngành.' },
                { title: 'Giảng viên giàu kinh nghiệm', description: 'Đội ngũ chuyên gia đầu ngành.' },
                { title: 'Không thi đầu vào', description: 'Xét tuyển hồ sơ.' },
                { title: 'Bằng giá trị', description: 'Bằng Kỹ sư được công nhận.' },
            ],
            jobOpportunities: [
                'Kỹ sư thiết kế tại các công ty tư vấn thiết kế xây dựng.',
                'Kỹ sư thi công, giám sát tại các công ty xây dựng.',
                'Chuyên viên quản lý dự án xây dựng.',
                'Cán bộ quản lý nhà nước về xây dựng.',
                'Nghiên cứu viên, giảng viên tại các trường đại học.',
            ],
        },
    },
    {
        slug: 'quan-ly-cong-nghiep',
        name: 'Quản lý công nghiệp',
        image: '/images/qlcn.jpg',
        description: 'Ngành Quản Lý Công Nghiệp được đánh giá là một ngành học có nhiều triển vọng nghề nghiệp trong tương lai với cơ hội việc làm rộng mở.',
        content: {
            introduction: 'Sự kết hợp giữa kỹ thuật và quản trị kinh doanh, đào tạo nhà quản lý có tư duy kỹ thuật và kỹ năng quản trị hiện đại.',
            targetAudience: [
                'Quản lý cấp trung, tổ trưởng sản xuất muốn nâng cao trình độ.',
                'Sinh viên yêu thích quản trị và kỹ thuật.',
            ],
            admissionMethod: ['Xét tuyển hồ sơ.'],
            trainingTime: [
                'Tốt nghiệp THPT: 4 năm.',
                'Văn bằng 2: 2 năm.',
            ],
            advantages: [
                { title: 'Đa năng', description: 'Làm việc ở nhiều vị trí quản lý.' },
                { title: 'Giảng viên chuyên nghiệp', description: 'Đội ngũ giảng dạy giàu kinh nghiệm.' },
                { title: 'Linh hoạt', description: 'Học mọi lúc mọi nơi.' },
                { title: 'Thu nhập hấp dẫn', description: 'Cơ hội thăng tiến cao.' },
            ],
            jobOpportunities: [
                'Quản lý sản xuất tại các doanh nghiệp công nghiệp.',
                'Chuyên viên quản lý chuỗi cung ứng và logistics.',
                'Quản lý dự án trong các lĩnh vực công nghiệp.',
                'Chuyên viên tư vấn quản lý và tối ưu hóa sản xuất.',
                'Nghiên cứu viên, giảng viên trong lĩnh vực quản lý công nghiệp.',
            ],
        },
    },
    {
        slug: 'kinh-te-cong-nghiep',
        name: 'Kinh tế công nghiệp',
        image: '/images/ktcn.jpg',
        description: 'Mục tiêu đào tạo của ngành Kinh tế công nghiệp chính là đào tạo ra đội ngũ nguồn nhân lực chất lượng cao về kinh tế và quản lý trong các lĩnh vực công nghiệp, năng lượng.',
        content: {
            introduction: 'Chương trình đào tạo cử nhân kinh tế có hiểu biết sâu về hoạt động công nghiệp, phân tích và hoạch định chiến lược kinh tế trong bối cảnh hội nhập quốc tế.',
            targetAudience: [
                'Nhân viên kế toán, tài chính, kinh doanh trong các doanh nghiệp công nghiệp.',
                'Tốt nghiệp THPT quan tâm đến kinh tế công nghiệp.',
            ],
            admissionMethod: ['Xét tuyển hồ sơ.'],
            trainingTime: [
                'Tốt nghiệp THPT: 4 năm.',
                'Liên thông: 2 - 3 năm.',
            ],
            advantages: [
                { title: 'Chuyên sâu', description: 'Kiến thức đặc thù lĩnh vực công nghiệp.' },
                { title: 'Đội ngũ chất lượng', description: 'Giảng viên giàu kinh nghiệm.' },
                { title: 'Linh hoạt thời gian', description: 'Học online tiện lợi.' },
                { title: 'Cơ hội rộng', description: 'Phù hợp với xu hướng công nghiệp hóa.' },
            ],
            jobOpportunities: [
                'Chuyên viên phân tích kinh tế tại các tập đoàn công nghiệp.',
                'Chuyên viên hoạch định chiến lược kinh doanh.',
                'Quản lý tài chính doanh nghiệp công nghiệp.',
                'Chuyên viên tư vấn đầu tư và phát triển.',
                'Nghiên cứu viên, giảng viên trong lĩnh vực kinh tế công nghiệp.',
            ],
        },
    },
];
