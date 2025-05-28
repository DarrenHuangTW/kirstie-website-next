import Image from "next/image";
import Link from "next/link";
import { getAllCases } from "@/lib/cases";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "工程實績 | 台灣模組化建築公司",
  description: "查看我們的工程實績案例，包含科學園區、航空城、港區等重大建設項目的組合屋解決方案。",
};

export default function CasesPage() {
  const cases = getAllCases();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              工程實績
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              多年來我們為各大工程項目提供專業的組合屋解決方案
              <br />
              累積豐富經驗，獲得客戶一致好評
            </p>
          </div>
        </div>
      </section>

      {/* Cases Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {cases.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cases.map((caseItem) => (
                <div
                  key={caseItem.slug}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Case Image */}
                  <div className="relative h-64">
                    <Image
                      src={caseItem.heroImage}
                      alt={caseItem.title}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>

                  {/* Case Content */}
                  <div className="p-6">
                    {/* Location */}
                    <div className="flex items-center mb-3">
                      <svg
                        className="w-4 h-4 text-gray-500 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm text-gray-500">
                        {caseItem.location}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                      {caseItem.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                      {caseItem.description}
                    </p>

                    {/* Project Details */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                        {caseItem.scale}
                      </span>
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                        {caseItem.duration}
                      </span>
                    </div>

                    {/* View Details Button */}
                    <Link
                      href={`/cases/${caseItem.slug}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
                    >
                      查看詳情
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-gray-500 text-lg">
                目前沒有案例資料
              </div>
            </div>
          )}
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
              href="/products"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
            >
              查看產品服務
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
