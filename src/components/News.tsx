import React from 'react';

interface NewsItem {
  title: string;
  description: string;
  date: string;
  image: string;
}

const newsItems: NewsItem[] = [
  {
    title: "METAVERSE: GIẤC MƠ HAY ÁC MỘNG CỦA TƯƠNG LAI KỸ THUẬT SỐ?",
    description: "Khi nhắc đến Metaverse, nhiều người tưởng tượng ra một thế giới kỳ ảo, nơi mọi giới hạn về không gian và thời gian bị xóa nhòa.",
    date: "06/06/2025",
    image: "/news/news1.jpg"
  },
  {
    title: "AI TẠO SINH SẼ THAY ĐỔI THẾ GIỚI NHƯ THẾ NÀO TRONG 5 NĂM TỚI?",
    description: "Trong vòng một vài năm trở lại đây, AI tạo sinh (Generative AI) đã bùng nổ như một cơn sóng thần công nghệ, từ những công cụ sáng tạo nội dung như ChatGPT.",
    date: "06/06/2025",
    image: "/news/news2.jpg"
  },
  {
    title: "TƯƠNG LAI CỦA CÔNG NGHỆ ĐEO ĐƯỢC (WEARABLE TECH): KHÔNG CHỈ LÀ ĐỒNG HỒ THÔNG MINH",
    description: "Trong vài năm gần đây, cụm từ “công nghệ đeo được” (wearable tech) đã trở nên quen thuộc với người tiêu dùng toàn cầu.",
    date: "07/06/2025",
    image: "/news/news3.jpg"
  },
  {
    title: "CÔNG NGHỆ XANH: NHỮNG PHÁT MINH ĐANG CỨU LẤY HÀNH TINH CỦA CHÚNG TA",
    description: "Trong bối cảnh biến đổi khí hậu, cạn kiệt tài nguyên và ô nhiễm môi trường đang trở thành những vấn đề toàn cầu cấp bách.",
    date: "07/06/2025",
    image: "/news/news4.jpg"
  },
  {
    title: "5 XU HƯỚNG CÔNG NGHỆ NỔI BẬT SẼ THAY ĐỔI THẾ GIỚI",
    description: "Trong kỷ nguyên số, công nghệ không chỉ thay đổi cách chúng ta sống mà còn định hình lại toàn bộ nền kinh tế, xã hội và tư duy con người.",
    date: "09/06/2025",
    image: "/news/news5.jpg"
  },
  {
    title: "KHI ROBOT THAY THẾ CON NGƯỜI: TƯƠNG LAI VIỆC LÀM TRONG KỶ NGUYÊN CÔNG NGHỆ",
    description: "Trong vài thập kỷ gần đây, sự phát triển vượt bậc của công nghệ, đặc biệt là trí tuệ nhân tạo (AI) và robot, đang thay đổi cách chúng ta sống, học tập và làm việc.",
    date: "09/06/2025",
    image: "/news/news6.jpg"
  },
  {
    title: "TƯƠNG LAI CỦA LÀM VIỆC TỪ XA: CÔNG NGHỆ NÀO ĐỊNH HÌNH XU HƯỚNG NÀY?",
    description: "Trong những năm gần đây, đặc biệt là sau đại dịch COVID-19, làm việc từ xa (remote work) đã không còn là một lựa chọn tạm thời mà trở thành một xu hướng bền vững.",
    date: "11/06/2025",
    image: "/news/news7.jpg"
  },
  {
    title: "DEEPFAKE: LÀM THẾ NÀO ĐỂ PHÂN BIỆT THẬT GIẢ TRONG KỶ NGUYÊN AI?",
    description: "Trong kỷ nguyên số hiện đại, công nghệ phát triển nhanh chóng mang lại nhiều tiện ích nhưng cũng kéo theo những mối đe dọa nghiêm trọng.",
    date: "11/06/2025",
    image: "/news/news8.jpg"
  },
  {
    title: "ẢNH HƯỞNG CỦA CÔNG NGHỆ ĐẾN SỨC KHỎE TINH THẦN:  MẶT TRÁI CỦA SỰ KẾT NỐI",
    description: "Trong kỷ nguyên số, công nghệ trở thành một phần không thể thiếu trong đời sống hiện đại. Từ smartphone, mạng xã hội đến các ứng dụng hỗ trợ làm việc, học tập, giải trí.",
    date: "12/06/2025",
    image: "/news/news9.jpg"
  },
  {
    title: "SỰ XÂM PHẠM QUYỀN RIÊNG TƯ CỦA CÁC CÔNG NGHỆ: CHÚNG TA CÓ THỂ LÀM GÌ?",
    description: "Trong thời đại số hóa, dữ liệu cá nhân đang trở thành loại “vàng đen” mới. Các tập đoàn công nghệ lớn như Google, Facebook (Meta), Amazon, Apple, Microsoft.",
    date: "12/06/2025",
    image: "/news/news10.jpg"
  }
];

const News: React.FC = () => {
  return (
    <section id="news" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Latest News
          </h2>
          <p className="text-lg text-gray-600">
            Stay updated with our latest developments, achievements, and industry insights.
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((news, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
              {/* News Image */}
              <div className="aspect-video overflow-hidden">
                <img
                  src={news.image}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* News Content */}
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">
                  {news.date}
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {news.title}
                </h3>
                <p className="text-gray-600">
                  {news.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News; 