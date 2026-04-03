import RichText from '@/components/RichText'
import type { PromisesPageBlock as PromisesPageBlockProps } from '@/payload-types'

export function PromisesPageBlock({ content }: PromisesPageBlockProps) {
  return (
    <div className="w-full bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-16 py-10 sm:py-12 md:py-16">
        {content && (
          <RichText
            data={content}
            enableGutter={false}
            className="font-['Inter','Noto_Sans_KR',sans-serif] text-[14px] sm:text-[15px] md:text-[16px] text-black leading-[1.6]"
          />
        )}
      </div>
    </div>
  )
}
