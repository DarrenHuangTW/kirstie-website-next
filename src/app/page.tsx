import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const services = [
    {
      title: "標準型辦公組合屋",
      description: "專為工地辦公需求設計，採用輕鋼結構與環保隔熱板材，提供舒適的工作環境。快速組裝，優異耐候性，是您工程項目的最佳選擇。",
      image: "https://placehold.co/400x300/E8E8E8/666666?text=辦公組合屋",
      features: ["快速組裝", "環保材質", "優異隔熱", "耐候性強"]
    },
    {
      title: "多功能會議組合屋",
      description: "寬敞的內部空間設計，適合各種會議與培訓需求。配備完善的電力系統，可靈活配置會議設備，提升工作效率。",
      image: "https://placehold.co/400x300/E8E8E8/666666?text=會議組合屋",
      features: ["寬敞空間", "電力系統", "靈活配置", "隔音效果"]
    },
    {
      title: "舒適型員工宿舍",
      description: "為工地員工提供舒適的住宿環境，注重隱私與生活品質。完善的通風系統與安全設施，讓員工安心休息。",
      image: "https://placehold.co/400x300/E8E8E8/666666?text=員工宿舍",
      features: ["舒適住宿", "隱私保護", "通風良好", "安全可靠"]
    }
  ];

  const featuredCases = [
    {
      title: "新竹科學園區擴建工程前進指揮所",
      location: "新竹市",
      description: "為大型科技園區擴建項目提供完整的臨時辦公解決方案",
      image: "https://placehold.co/400x300/DADADA/888888?text=科學園區案例"
    },
    {
      title: "桃園航空城計畫員工生活區",
      location: "桃園市",
      description: "大型基礎建設項目的員工宿舍與生活設施規劃",
      image: "https://placehold.co/400x300/DADADA/888888?text=航空城案例"
    },
    {
      title: "高雄港區工程臨時辦公室建置",
      location: "高雄市",
      description: "港區重大工程的指揮中心與辦公空間配置",
      image: "https://placehold.co/400x300/DADADA/888888?text=港區案例"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gray-50">
        <div className="absolute inset-0">
          <Image
            src="https://placehold.co/1920x700/CCCCCC/808080?text=工地組合屋主視覺"
            alt="工地組合屋主視覺"
            fill
            className="object-cover"
            unoptimized
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              專業工地組合屋
              <span className="block text-blue-400">解決方案</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              提供快速、安全、舒適的模組化建築空間
              <br />
              為您的工程項目打造最佳的臨時建築解決方案
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/cases"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
              >
                查看工程實績
              </Link>
              <Link
                href="/contact"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
              >
                立即洽詢
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              核心產品服務
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              我們提供多樣化的組合屋產品，滿足不同工程項目的需求
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/products"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors duration-200"
            >
              查看所有產品
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Cases Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              精選工程實績
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              多年來我們為各大工程項目提供專業的組合屋解決方案
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCases.map((caseItem, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48">
                  <Image
                    src={caseItem.image}
                    alt={caseItem.title}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <svg className="w-4 h-4 text-gray-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-gray-500">{caseItem.location}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {caseItem.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {caseItem.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/cases"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors duration-200"
            >
              查看所有案例
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            需要專業的組合屋解決方案？
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            我們的專業團隊隨時為您提供諮詢服務，為您的工程項目量身打造最適合的解決方案
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
            >
              立即聯絡我們
            </Link>
            <Link
              href="/about"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
            >
              了解更多
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
