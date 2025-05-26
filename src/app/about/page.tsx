import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "關於我們 - 台灣模組化建築公司",
  description: "了解台灣模組化建築公司的發展歷程、經營理念與專業優勢。我們致力於提供優質的工地組合屋解決方案，成為營建業最信賴的合作夥伴。",
  keywords: "關於我們,公司簡介,經營理念,專業優勢,模組化建築,組合屋專家",
};

export default function About() {
  const values = [
    {
      title: "品質至上",
      description: "堅持使用優質材料與精湛工藝，確保每一個產品都符合最高品質標準",
      icon: "🏆"
    },
    {
      title: "客戶導向",
      description: "以客戶需求為核心，提供量身定制的解決方案與完善的售後服務",
      icon: "🤝"
    },
    {
      title: "創新發展",
      description: "持續投入研發，運用最新技術與設計理念，提升產品競爭力",
      icon: "💡"
    },
    {
      title: "永續經營",
      description: "注重環保與可持續發展，為社會創造長期價值",
      icon: "🌱"
    }
  ];

  const advantages = [
    {
      title: "豐富經驗",
      description: "超過15年的模組化建築專業經驗，累積豐富的工程實務知識"
    },
    {
      title: "專業團隊",
      description: "擁有建築、結構、機電等各領域專業人才，提供全方位服務"
    },
    {
      title: "品質保證",
      description: "通過ISO品質認證，建立完善的品質管理體系"
    },
    {
      title: "快速交付",
      description: "標準化生產流程，大幅縮短工期，滿足緊急工程需求"
    },
    {
      title: "客製服務",
      description: "根據客戶特殊需求，提供彈性的設計與配置方案"
    },
    {
      title: "完善售後",
      description: "提供完整的安裝指導、維護保養與技術支援服務"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gray-50 py-16 lg:py-24">
        <div className="absolute inset-0">
          <Image
            src="https://placehold.co/1920x600/D5D5D5/777777?text=關於我們背景圖"
            alt="關於我們背景圖"
            fill
            className="object-cover"
            unoptimized
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            關於我們
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            專業、誠信、創新 - 打造台灣模組化建築領導品牌
          </p>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                台灣模組化建築公司
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  成立於2008年，台灣模組化建築公司是台灣領先的工地組合屋專業製造商。
                  我們專注於為營建業提供高品質、快速組裝的臨時建築解決方案，
                  包括工地辦公室、員工宿舍、會議室等多元化產品。
                </p>
                <p>
                  多年來，我們秉持「品質第一、服務至上」的經營理念，
                  不斷精進產品設計與製造工藝，建立了完善的品質管理體系。
                  從材料採購到成品交付，每一個環節都嚴格把關，
                  確保為客戶提供安全、舒適、耐用的建築空間。
                </p>
                <p>
                  憑藉專業的技術團隊與豐富的工程經驗，
                  我們已成功服務超過500個大型工程項目，
                  獲得客戶的一致好評與信賴，成為業界知名的品牌。
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://placehold.co/600x400/E0E0E0/707070?text=公司形象照片"
                alt="公司形象照片"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              核心價值與理念
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              我們的經營理念建立在四大核心價值之上，指引著公司的發展方向
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-lg p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Advantages */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              專業優勢
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              多年累積的專業實力，讓我們能為客戶提供最優質的服務
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors duration-300">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {advantage.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {advantage.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              發展歷程
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              從創立至今的重要里程碑
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-center">
              <div className="flex-shrink-0 w-24 text-right">
                <span className="text-2xl font-bold text-blue-600">2008</span>
              </div>
              <div className="flex-shrink-0 mx-8">
                <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">公司成立</h3>
                <p className="text-gray-600">在高雄成立台灣模組化建築公司，專注於工地組合屋製造</p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="flex-shrink-0 w-24 text-right">
                <span className="text-2xl font-bold text-blue-600">2012</span>
              </div>
              <div className="flex-shrink-0 mx-8">
                <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">品質認證</h3>
                <p className="text-gray-600">通過ISO 9001品質管理系統認證，建立標準化生產流程</p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="flex-shrink-0 w-24 text-right">
                <span className="text-2xl font-bold text-blue-600">2018</span>
              </div>
              <div className="flex-shrink-0 mx-8">
                <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">業務擴展</h3>
                <p className="text-gray-600">服務範圍擴展至全台，成為多個大型工程項目的指定供應商</p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="flex-shrink-0 w-24 text-right">
                <span className="text-2xl font-bold text-blue-600">2023</span>
              </div>
              <div className="flex-shrink-0 mx-8">
                <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">技術創新</h3>
                <p className="text-gray-600">導入智能化生產設備，提升產品品質與生產效率</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            與我們攜手合作
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            選擇台灣模組化建築公司，就是選擇專業、品質與信賴
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
            >
              聯絡我們
            </a>
            <a
              href="/products"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
            >
              查看產品
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
