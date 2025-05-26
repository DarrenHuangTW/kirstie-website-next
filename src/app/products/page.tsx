import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "產品服務 - 台灣模組化建築公司",
  description: "提供多樣化的組合屋產品，包括標準型辦公組合屋、多功能會議組合屋、舒適型員工宿舍等。專業的模組化建築解決方案，滿足各種工程需求。",
  keywords: "組合屋產品,辦公組合屋,會議組合屋,員工宿舍,模組化建築,工地辦公室",
};

export default function Products() {
  const products = [
    {
      id: "office",
      title: "標準型辦公組合屋",
      subtitle: "專業工地辦公解決方案",
      description: "專為工地辦公需求設計，採用輕鋼結構與環保隔熱板材，提供舒適的工作環境。快速組裝，優異耐候性，是您工程項目的最佳選擇。",
      features: [
        "快速組裝，2-4小時完成安裝",
        "輕鋼結構，抗震性能優異",
        "75mm防火岩棉夾芯板，隔熱保溫",
        "標準電力配置，可擴充網路設備",
        "防水防潮，適應各種氣候條件",
        "可重複使用，環保經濟"
      ],
      specifications: [
        { label: "標準尺寸", value: "6m × 3m × 2.8m" },
        { label: "牆體材質", value: "75mm防火岩棉夾芯板" },
        { label: "結構材料", value: "熱鍍鋅輕鋼結構" },
        { label: "地板材質", value: "18mm防潮OSB板" },
        { label: "門窗配置", value: "鋁合金門窗，雙層玻璃" },
        { label: "電力系統", value: "220V標準配電，含照明插座" }
      ],
      applications: [
        "工地現場辦公室",
        "項目管理中心",
        "工程監理辦公室",
        "臨時會議室",
        "資料存放室"
      ],
      images: [
        "https://placehold.co/800x600/E0E0E0/707070?text=辦公組合屋外觀",
        "https://placehold.co/800x600/E0E0E0/707070?text=辦公組合屋內部",
        "https://placehold.co/800x600/E0E0E0/707070?text=辦公組合屋配置圖"
      ]
    },
    {
      id: "meeting",
      title: "多功能會議組合屋",
      subtitle: "靈活的會議培訓空間",
      description: "寬敞的內部空間設計，適合各種會議與培訓需求。配備完善的電力系統，可靈活配置會議設備，提升工作效率。",
      features: [
        "寬敞內部空間，可容納20-30人",
        "優異隔音效果，確保會議品質",
        "完善電力系統，支援各種設備",
        "靈活空間配置，可調整座位安排",
        "良好通風系統，保持空氣流通",
        "專業照明設計，提供舒適環境"
      ],
      specifications: [
        { label: "標準尺寸", value: "9m × 3m × 2.8m" },
        { label: "容納人數", value: "20-30人" },
        { label: "牆體材質", value: "100mm隔音岩棉夾芯板" },
        { label: "地板承重", value: "300kg/㎡" },
        { label: "空調系統", value: "可選配中央空調" },
        { label: "音響設備", value: "預留音響線路配置" }
      ],
      applications: [
        "工程會議室",
        "安全教育訓練中心",
        "技術交流會議",
        "項目簡報室",
        "多媒體培訓室"
      ],
      images: [
        "https://placehold.co/800x600/E0E0E0/707070?text=會議組合屋外觀",
        "https://placehold.co/800x600/E0E0E0/707070?text=會議組合屋內部",
        "https://placehold.co/800x600/E0E0E0/707070?text=會議組合屋座位配置"
      ]
    },
    {
      id: "dormitory",
      title: "舒適型員工宿舍",
      subtitle: "優質的住宿環境",
      description: "為工地員工提供舒適的住宿環境，注重隱私與生活品質。完善的通風系統與安全設施，讓員工安心休息。",
      features: [
        "舒適住宿環境，提升員工滿意度",
        "完善隱私保護，獨立生活空間",
        "優良通風系統，保持空氣清新",
        "安全可靠設計，多重安全保障",
        "便利生活設施，提升生活品質",
        "易於管理維護，降低營運成本"
      ],
      specifications: [
        { label: "標準尺寸", value: "6m × 3m × 2.8m" },
        { label: "住宿人數", value: "2-4人" },
        { label: "床位配置", value: "上下舖或單人床" },
        { label: "儲物空間", value: "個人衣櫃及置物櫃" },
        { label: "衛浴設施", value: "可選配獨立衛浴" },
        { label: "安全設備", value: "煙霧偵測器、緊急照明" }
      ],
      applications: [
        "工地員工宿舍",
        "臨時住宿設施",
        "工程人員休息室",
        "值班人員住所",
        "短期住宿需求"
      ],
      images: [
        "https://placehold.co/800x600/E0E0E0/707070?text=員工宿舍外觀",
        "https://placehold.co/800x600/E0E0E0/707070?text=員工宿舍內部",
        "https://placehold.co/800x600/E0E0E0/707070?text=員工宿舍床位配置"
      ]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gray-50 py-16 lg:py-24">
        <div className="absolute inset-0">
          <Image
            src="https://placehold.co/1920x600/D0D0D0/606060?text=產品服務背景圖"
            alt="產品服務背景圖"
            fill
            className="object-cover"
            unoptimized
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            產品服務
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            專業的模組化建築產品，滿足各種工程需求
          </p>
        </div>
      </section>

      {/* Products Overview */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              產品系列
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              我們提供三大系列的組合屋產品，每一款都經過精心設計，確保品質與實用性
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48">
                  <Image
                    src={product.images[0]}
                    alt={product.title}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {product.title}
                  </h3>
                  <p className="text-blue-600 font-medium mb-3">
                    {product.subtitle}
                  </p>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {product.description}
                  </p>
                  <a
                    href={`#${product.id}`}
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-sm font-semibold transition-colors duration-200"
                  >
                    查看詳細規格
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Product Sections */}
      {products.map((product, index) => (
        <section key={index} id={product.id} className={`py-16 lg:py-24 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Product Images */}
              <div className="space-y-4">
                <div className="relative h-64 lg:h-80">
                  <Image
                    src={product.images[0]}
                    alt={`${product.title} - 主圖`}
                    fill
                    className="object-cover rounded-lg"
                    unoptimized
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {product.images.slice(1).map((image, imgIndex) => (
                    <div key={imgIndex} className="relative h-32">
                      <Image
                        src={image}
                        alt={`${product.title} - 圖片 ${imgIndex + 2}`}
                        fill
                        className="object-cover rounded-lg"
                        unoptimized
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Product Details */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {product.title}
                </h2>
                <p className="text-xl text-blue-600 font-medium mb-6">
                  {product.subtitle}
                </p>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {product.description}
                </p>

                {/* Features */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">產品特色</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Specifications */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">技術規格</h3>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <dl className="grid grid-cols-1 gap-4">
                      {product.specifications.map((spec, specIndex) => (
                        <div key={specIndex} className="flex justify-between">
                          <dt className="font-medium text-gray-900">{spec.label}：</dt>
                          <dd className="text-gray-600">{spec.value}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>

                {/* Applications */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">適用場景</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.applications.map((application, appIndex) => (
                      <span
                        key={appIndex}
                        className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                      >
                        {application}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            需要客製化解決方案？
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            我們可以根據您的特殊需求，提供量身定制的組合屋產品與服務
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
            >
              立即諮詢
            </a>
            <a
              href="/cases"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
            >
              查看案例
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
