import type { Block } from 'payload'
import { lexicalEditor, FixedToolbarFeature, InlineToolbarFeature } from '@payloadcms/richtext-lexical'

export const AboutPageBlock: Block = {
  slug: 'aboutPage',
  interfaceName: 'AboutPageBlock',
  labels: { singular: 'About Page', plural: 'About Pages' },
  fields: [
    // ── Hero ──────────────────────────────────────────────
    {
      name: 'heroTitle',
      type: 'text',
      label: '히어로 제목',
      defaultValue: '소개',
    },
    {
      name: 'heroSubtitle',
      type: 'text',
      label: '히어로 부제목',
      defaultValue: '한국정보통신산업노동조합을 소개합니다.',
    },

    // ── Panel ─────────────────────────────────────────────
    {
      name: 'panelHeading',
      type: 'text',
      label: '패널 제목',
      defaultValue: 'IT 노동자의 새로운 내일을 함께 만들어갑니다.',
    },
    {
      name: 'panelSubheading',
      type: 'text',
      label: '패널 부제목',
      defaultValue: '차기 집행부의 인사말',
    },
    {
      name: 'panelBody',
      type: 'richText',
      label: '패널 본문',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => [
          ...rootFeatures,
          FixedToolbarFeature(),
          InlineToolbarFeature(),
        ],
      }),
    },

    // ── Goals ─────────────────────────────────────────────
    {
      name: 'goalsHeading',
      type: 'text',
      label: '목표 섹션 제목',
      defaultValue: 'IT노조의 목표',
    },
    {
      name: 'goalsSubheading',
      type: 'text',
      label: '목표 섹션 부제목',
      defaultValue: '더 나은 노동 환경을 만들기 위해 노력합니다.',
    },

    // ── CTA ───────────────────────────────────────────────
    {
      name: 'ctaHeading',
      type: 'text',
      label: 'CTA 제목',
      defaultValue: 'IT노조와 함께 해주십시오!',
    },
    {
      name: 'ctaSubheading',
      type: 'text',
      label: 'CTA 부제목',
      defaultValue: '나를 지키는 가장 확실한 방법은 우리가 되는 것입니다.',
    },
  ],
}
