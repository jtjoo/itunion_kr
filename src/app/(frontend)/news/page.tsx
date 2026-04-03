import type { Metadata } from 'next'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import Link from 'next/link'
import { NewsTabs } from './NewsPageClient'

export const dynamic = 'force-dynamic'

const tabLabels: Record<string, { heading: string; sub: string }> = {
  notice: { heading: '공지사항', sub: 'IT노조의 주요 공지사항' },
  gallery: { heading: '갤러리', sub: '활동 사진 갤러리' },
  statement: { heading: '성명/보도자료', sub: '공식 성명 및 보도자료' },
}

type Args = {
  searchParams: Promise<{ tab?: string }>
}

export default async function NewsPage({ searchParams }: Args) {
  const { tab = 'notice' } = await searchParams
  const activeTab = ['notice', 'gallery', 'statement'].includes(tab) ? tab : 'notice'

  const payload = await getPayload({ config: configPromise })

  const posts = await payload.find({
    collection: 'posts',
    depth: 1,
    limit: 20,
    overrideAccess: false,
    where: {
      'categories.slug': { equals: activeTab },
    },
    select: {
      title: true,
      slug: true,
      meta: true,
      publishedAt: true,
      heroImage: true,
    },
  })

  const docs = posts.docs
  const featured = docs[0] ?? null
  const { heading, sub } = tabLabels[activeTab]!

  return (
    <div className="flex flex-col items-center w-full">
      <NewsTabs />

      {/* Featured Article */}
      {featured && (
        <section className="w-full bg-white opacity-80">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-8 md:px-16 py-10 sm:py-12 md:py-16 flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-12 items-start justify-center">
            <div className="w-full md:w-[484px] h-[250px] md:h-[350px] shrink-0 relative bg-[#e3e3e3] overflow-hidden">
              {featured.heroImage && typeof featured.heroImage === 'object' && featured.heroImage.url ? (
                <img
                  src={featured.heroImage.url}
                  alt={featured.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ) : (
                <img
                  src="/assets/img/ITu_character.svg"
                  alt=""
                  className="absolute inset-0 w-full h-full object-contain opacity-20"
                />
              )}
            </div>
            <div className="flex flex-col gap-6 flex-1 md:min-w-[300px]">
              <div className="flex flex-col gap-2">
                <h2 className="font-['Noto_Sans_KR',sans-serif] text-[20px] md:text-[24px] text-[#1e1e1e] leading-[1.2] tracking-[-0.48px]">
                  {featured.title}
                </h2>
                <p className="font-['Noto_Sans_KR',sans-serif] text-[14px] md:text-[16px] text-[#757575] leading-[1.2]">
                  {featured.publishedAt
                    ? new Date(featured.publishedAt).toLocaleDateString('ko-KR')
                    : ''}
                </p>
              </div>
              {featured.meta?.description && (
                <p className="font-['Noto_Sans_KR',sans-serif] text-[14px] md:text-[16px] text-[#1e1e1e] leading-[1.4]">
                  {featured.meta.description}
                </p>
              )}
              <Link
                href={`/posts/${featured.slug}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#2c2c2c] text-[#f5f5f5] text-[16px] font-['Noto_Sans_KR',sans-serif] hover:bg-[#1a1a1a] transition-colors w-fit"
              >
                자세히 보기
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Card Grid */}
      <section className="w-full bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-8 md:px-16 py-10 sm:py-12 md:py-16 flex flex-col items-center gap-10 sm:gap-12">
          <div className="text-center">
            <h2 className="font-['Noto_Sans_KR',sans-serif] text-[20px] md:text-[24px] text-[#1e1e1e] leading-[1.2] tracking-[-0.48px]">
              {heading}
            </h2>
            <p className="font-['Noto_Sans_KR',sans-serif] text-[16px] md:text-[20px] text-[#757575] leading-[1.2] mt-2">
              {sub}
            </p>
          </div>

          {docs.length === 0 ? (
            <p className="font-['Noto_Sans_KR',sans-serif] text-[16px] text-[#757575]">
              게시글이 없습니다.
            </p>
          ) : (
            <div className="flex flex-col gap-6 w-full">
              {docs.map((post) => (
                <Link
                  key={post.id}
                  href={`/posts/${post.slug}`}
                  className="relative bg-white rounded-lg border border-[#d9d9d9] hover:border-[#c30d23] hover:shadow-md transition-all"
                >
                  <div className="flex flex-col sm:flex-row gap-6 p-6 items-start">
                    <div className="w-full sm:w-[160px] h-[120px] sm:h-[160px] shrink-0 relative bg-[#e3e3e3] overflow-hidden">
                      {post.heroImage && typeof post.heroImage === 'object' && post.heroImage.url ? (
                        <img
                          src={post.heroImage.url}
                          alt={post.title}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      ) : (
                        <img
                          src="/assets/img/ITu_character.svg"
                          alt=""
                          className="absolute inset-0 w-full h-full object-contain opacity-20"
                        />
                      )}
                    </div>
                    <div className="flex flex-col gap-4 flex-1 min-w-[160px]">
                      <div className="flex flex-col gap-2">
                        <h3 className="font-['Noto_Sans_KR',sans-serif] text-[20px] md:text-[24px] text-[#1e1e1e] leading-[1.2] tracking-[-0.48px]">
                          {post.title}
                        </h3>
                        {post.meta?.description && (
                          <p className="font-['Noto_Sans_KR',sans-serif] text-[14px] md:text-[16px] text-[#757575] leading-[1.4] line-clamp-2">
                            {post.meta.description}
                          </p>
                        )}
                      </div>
                      <p className="font-['Noto_Sans_KR',sans-serif] text-[13px] text-[#999]">
                        {post.publishedAt
                          ? new Date(post.publishedAt).toLocaleDateString('ko-KR')
                          : ''}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export function generateMetadata(): Metadata {
  return { title: '소식 | IT노조' }
}
