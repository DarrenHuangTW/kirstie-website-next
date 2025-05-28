import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCaseBySlug, getAllCaseSlugs, getAllCases } from "@/lib/cases";
import ImageGallery from "@/components/cases/ImageGallery";
import ReactMarkdown from "react-markdown";
import type { Metadata } from "next";

interface CasePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllCaseSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: CasePageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseBySlug(slug);
  
  if (!caseStudy) {
    return {
      title: "案例不存在 | 台灣模組化建築公司",
    };
  }

  return {
    title: `${caseStudy.title} | 台灣模組化建築公司`,
    description: caseStudy.description,
  };
}

export default async function CasePage({ params }: CasePageProps) {
  const { slug } = await params;
  const caseStudy = getCaseBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  // Get related cases (other cases, excluding current one)
  const allCases = getAllCases();
  const relatedCases = allCases
    .filter((c) => c.slug !== caseStudy.slug)
    .slice(0, 2);

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-4">
              <li>
                <Link href="/" className="text-gray-500 hover:text-gray-700">
                  首頁
                </Link>
              </li>
              <li>
                <svg
                  className="flex-shrink-0 h-5 w-5 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </li>
              <li>
                <Link href="/cases" className="text-gray-500 hover:text-gray-700">
                  工程實績
                </Link>
              </li>
              <li>
                <svg
                  className="flex-shrink-0 h-5 w-5 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </li>
              <li>
                <span className="text-gray-900 font-medium">{caseStudy.title}</span>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative">
        <div className="relative h-96 lg:h-[500px]">
          <Image
            src={caseStudy.heroImage}
            alt={caseStudy.title}
            fill
            className="object-cover"
            unoptimized
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
            <div className="text-white">
              <div className="flex items-center mb-4">
                <svg
                  className="w-5 h-5 text-white mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-lg">{caseStudy.location}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {caseStudy.title}
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl">
                {caseStudy.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Project Details */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none [&>h1]:text-4xl [&>h1]:font-bold [&>h1]:text-gray-900 [&>h1]:mb-8 [&>h1]:mt-12 [&>h1]:border-b [&>h1]:border-gray-200 [&>h1]:pb-4 [&>h2]:text-3xl [&>h2]:font-bold [&>h2]:text-blue-900 [&>h2]:mb-6 [&>h2]:mt-10 [&>h3]:text-2xl [&>h3]:font-bold [&>h3]:text-gray-800 [&>h3]:mb-4 [&>h3]:mt-8 [&>h4]:text-xl [&>h4]:font-semibold [&>h4]:text-gray-700 [&>h4]:mb-3 [&>h4]:mt-6 [&>p]:text-gray-700 [&>p]:leading-relaxed [&>p]:mb-4 [&>ul]:my-6 [&>ul]:space-y-2 [&>li]:text-gray-700 [&>li]:leading-relaxed [&>strong]:text-gray-900 [&>strong]:font-semibold [&>blockquote]:border-l-4 [&>blockquote]:border-blue-500 [&>blockquote]:bg-blue-50 [&>blockquote]:py-4 [&>blockquote]:px-6 [&>blockquote]:my-6 [&>blockquote]:rounded-r-lg [&>blockquote]:text-blue-900 [&>blockquote]:font-medium [&>blockquote]:text-lg">
                <ReactMarkdown>{caseStudy.content}</ReactMarkdown>
              </div>
            </div>

            {/* Project Info Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-lg p-6 sticky top-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">專案資訊</h3>
                
                <div className="space-y-4">
                  <div>
                    <dt className="text-sm font-medium text-gray-500">客戶</dt>
                    <dd className="text-lg text-gray-900">{caseStudy.client}</dd>
                  </div>
                  
                  <div>
                    <dt className="text-sm font-medium text-gray-500">專案類型</dt>
                    <dd className="text-lg text-gray-900">{caseStudy.projectType}</dd>
                  </div>
                  
                  <div>
                    <dt className="text-sm font-medium text-gray-500">專案規模</dt>
                    <dd className="text-lg text-gray-900">{caseStudy.scale}</dd>
                  </div>
                  
                  <div>
                    <dt className="text-sm font-medium text-gray-500">專案期程</dt>
                    <dd className="text-lg text-gray-900">{caseStudy.duration}</dd>
                  </div>
                  
                  <div>
                    <dt className="text-sm font-medium text-gray-500">完工日期</dt>
                    <dd className="text-lg text-gray-900">{caseStudy.completedDate}</dd>
                  </div>
                </div>

                {/* Products Used */}
                {caseStudy.products && caseStudy.products.length > 0 && (
                  <div className="mt-8">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">使用產品</h4>
                    <ul className="space-y-2">
                      {caseStudy.products.map((product, index) => (
                        <li key={index} className="flex items-start">
                          <svg
                            className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-gray-700">{product}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Features */}
                {caseStudy.features && caseStudy.features.length > 0 && (
                  <div className="mt-8">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">專案特色</h4>
                    <div className="flex flex-wrap gap-2">
                      {caseStudy.features.map((feature, index) => (
                        <span
                          key={index}
                          className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ImageGallery images={caseStudy.gallery} />
        </div>
      </section>

      {/* Related Cases */}
      {relatedCases.length > 0 && (
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              其他工程實績
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedCases.map((relatedCase) => (
                <div
                  key={relatedCase.slug}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-48">
                    <Image
                      src={relatedCase.heroImage}
                      alt={relatedCase.title}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-2">
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
                      <span className="text-sm text-gray-500">{relatedCase.location}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {relatedCase.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {relatedCase.description}
                    </p>
                    <Link
                      href={`/cases/${relatedCase.slug}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
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
      )}

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            需要類似的解決方案？
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
