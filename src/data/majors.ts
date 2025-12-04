export interface Major {
    slug: string;
    name: string;
    image: string;
    description: string;
    content: {
        introduction?: string;
        targetAudience: string[];
        admissionMethod: string[];
        credits: any;
        coursesTotal: any;
        trainingTime: string;
        advantages: { title: string; description: string }[];
        jobOpportunities?: string[];
    };
}

export const majors: Major[] = [
    {
        slug: 'ngon-ngu-anh',
        name: 'Ngôn ngữ Anh',
        image: '/images/nna.jpg',
        description: 'Ngành Ngôn ngữ Anh chuyên ngành Tiếng Anh Khoa học kỹ thuật và công nghệ tại trường Đại học Kỹ thuật công nghiệp Thái Nguyên trang bị cho học viên kiến thức chuyên sâu về ngôn ngữ Anh, đồng thời tập trung vào các thuật ngữ và kỹ năng giao tiếp chuyên nghiệp trong các lĩnh vực kỹ thuật và công nghệ. Học viên sẽ học cách sử dụng tiếng Anh trong các bối cảnh chuyên ngành, phát triển khả năng giao tiếp hiệu quả và phục vụ nhu cầu hội nhập quốc tế trong lĩnh vực kỹ thuật và công nghệ.',
        content: {
            introduction: 'Chương trình đào tạo từ xa ngành Ngôn ngữ Anh chuyên ngành Tiếng Anh Khoa học kỹ thuật và công nghệ của trường Đại học Kỹ thuật công nghiệp Thái Nguyên được thiết kế để đáp ứng nhu cầu học tập linh hoạt cho người học. Học viên có thể linh hoạt học tập mà không bị giới hạn bởi vị trí địa lý, đồng thời áp dụng ngay những kiến thức học được vào thực tế công việc. Hình thức học trực tuyến đã giúp học viên phá bỏ rào cản phải đến trường của hình thức học truyền thống.',
            targetAudience: [
                'Tốt nghiệp THPT hoặc tương đương.',
                'Cán bộ, nhân viên muốn nâng cao trình độ tiếng Anh.',
            ],
            admissionMethod: ['Xét tuyển hồ sơ.'],
            credits: 128,
            coursesTotal: 59,
            trainingTime: 'Từ 2- 4 năm',
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
            credits: "Đang cập nhật",
            coursesTotal: "Đang cập nhật",
            trainingTime: 'Từ 2 - 4 năm',
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
        description: 'Ngành Kỹ thuật xây dựng – Xây dựng Dân dụng và Công nghiệp đào tạo học viên kiến thức và kỹ năng về thiết kế, thi công và quản lý các công trình xây dựng dân dụng và công nghiệp, bao gồm nhà ở, cầu đường, nhà máy, và các cơ sở hạ tầng khác.',
        content: {
            introduction: 'Ngành Kỹ thuật xây dựng – Xây dựng Dân dụng và Công nghiệp hệ đào tạo từ xa mang lại sự linh hoạt tối ưu cho học viên, loại bỏ nhu cầu đến trường lớp. Thông qua nền tảng trực tuyến hiện đại, với tài liệu giảng dạy và video bài giảng, học viên có thể tiếp thu kiến thức và kỹ năng tương đương với hệ chính quy, từ bất kỳ đâu và bất kỳ lúc nào.',
            targetAudience: [
                'Người làm trong lĩnh vực xây dựng muốn chuẩn hóa bằng cấp.',
                'Tốt nghiệp THPT yêu thích ngành xây dựng.',
            ],
            admissionMethod: ['Xét tuyển hồ sơ.'],
            credits: "141 - 161",
            coursesTotal: "56 - 64",
            trainingTime: 'Từ 2,2 - 4,5 năm',
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
        description: 'Ngành Quản lý Công nghiệp chuyên đào tạo về việc quản lý và tối ưu hóa quy trình sản xuất, chuỗi cung ứng và các hoạt động công nghiệp.',
        content: {
            introduction: 'Ngành Quản lý Công nghiệp hệ đào tạo từ xa mang đến sự linh hoạt tối ưu cho học viên, cho phép họ tiếp cận kiến thức quản lý công nghiệp mà không cần đến lớp học truyền thống. Thông qua nền tảng trực tuyến hiện đại, tài liệu giảng dạy và video bài giảng, học viên có thể học tập và nâng cao kỹ năng quản lý công nghiệp từ bất kỳ đâu và vào thời gian phù hợp với mình.',
            targetAudience: [
                'Quản lý cấp trung, tổ trưởng sản xuất muốn nâng cao trình độ.',
                'Sinh viên yêu thích quản trị và kỹ thuật.',
            ],
            admissionMethod: ['Xét tuyển hồ sơ.'],
            credits: "127",
            coursesTotal: "48",
            trainingTime: 'Từ 2,2 - 4,5 năm',
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
        description: 'Ngành Kinh tế công nghiệp có tên tiếng Anh là Industrial economics. Kinh tế công nghiệp là một chuyên ngành Kinh tế học thuộc lĩnh vực kinh tế học ứng dụng, chuyên nghiên cứu về cơ cấu, tổ chức ngành, năng lực cạnh tranh giữa các ngành và tiểu ngành kinh tế.',
        content: {
            introduction: 'Ngành Kinh tế công nghiệp hệ đào tạo từ xa mang đến cơ hội học tập linh hoạt và tiện lợi, giúp học viên tiếp cận kiến thức chuyên sâu mà không cần phải đến lớp truyền thống. Thông qua nền tảng trực tuyến hiện đại, với tài liệu học tập và video giảng dạy, học viên có thể dễ dàng khám phá và áp dụng các nguyên tắc kinh tế công nghiệp từ bất kỳ đâu, vào thời điểm thuận tiện nhất cho mình.',
            targetAudience: [
                'Nhân viên kế toán, tài chính, kinh doanh trong các doanh nghiệp công nghiệp.',
                'Tốt nghiệp THPT quan tâm đến kinh tế công nghiệp.',
            ],
            admissionMethod: ['Xét tuyển hồ sơ.'],
            credits: "129",
            coursesTotal: "47",
            trainingTime: 'Từ 2,2 - 4,5 năm',
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
