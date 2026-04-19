import type { Block } from 'payload'
import {
  lexicalEditor,
  FixedToolbarFeature,
  InlineToolbarFeature,
} from '@payloadcms/richtext-lexical'

export const HomePageBlock: Block = {
  slug: 'homePage',
  interfaceName: 'HomePageBlock',
  labels: { singular: 'Home Page', plural: 'Home Pages' },
  fields: [
    // ── Hero ──────────────────────────────────────────────
    {
      name: 'heroTitle',
      type: 'text',
      label: '히어로 문구',
      defaultValue: 'IT노동자의 내일을 함께 만듭니다',
    },
    {
      name: 'heroButtons',
      type: 'array',
      label: '히어로 버튼',
      maxRows: 2,
      fields: [
        { name: 'label', type: 'text', required: true, label: '버튼 텍스트' },
        { name: 'href', type: 'text', required: true, label: '링크' },
      ],
      defaultValue: [
        { label: '후원하기', href: '#' },
        { label: '조합원 가입', href: '#' },
      ],
    },

    // ── Who We Are ────────────────────────────────────────
    {
      name: 'whoHeading',
      type: 'text',
      label: '"우리는" 섹션 제목',
      defaultValue: '한국정보통신노동조합은 어떤 곳인가요?',
    },
    {
      name: 'whoBody',
      type: 'richText',
      label: '"우리는" 섹션 본문',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => [
          ...rootFeatures,
          FixedToolbarFeature(),
          InlineToolbarFeature(),
        ],
      }),
    },

    // ── Activities ────────────────────────────────────────
    {
      name: 'activitiesHeading',
      type: 'text',
      label: '활동 섹션 제목',
      defaultValue: '우리의 핵심 활동들',
    },
    {
      name: 'activitiesSubheading',
      type: 'text',
      label: '활동 섹션 부제목',
      defaultValue: '더 나은 노동 환경을 만들기 위해 노력합니다.',
    },
    {
      name: 'activities',
      type: 'array',
      label: '활동 카드 (최대 3개)',
      maxRows: 3,
      fields: [
        { name: 'title', type: 'text', required: true, label: '제목' },
        { name: 'desc', type: 'text', required: true, label: '설명' },
      ],
      defaultValue: [
        { title: '노동권 보호', desc: '안전하게 노동할 권리를 보장하기 위한 방패가 되어드립니다.' },
        { title: '노동환경 개선', desc: '더 안전하고 건강한 근무 환경 조성을 위해 노력합니다.' },
        { title: '함께하는 공동체', desc: '서로 연대하고 기댈 수 있는 공동체를 만들어갑니다.' },
      ],
    },

    // ── Timeline ──────────────────────────────────────────
    {
      name: 'timelineHeading',
      type: 'text',
      label: '연혁 제목',
      defaultValue: '우리가 걸어온 길',
    },
    {
      name: 'timelineSubheading',
      type: 'text',
      label: '연혁 부제목',
      defaultValue:
        '한국정보통신산업노동조합은 국내 최초로 설립된 IT산업에 종사하는 노동자를 대상으로 한 산별노조입니다.',
    },
    {
      name: 'timelineItems',
      type: 'array',
      label: '연혁 항목',
      fields: [
        { name: 'year', type: 'text', required: true, label: '연도' },
        { name: 'title', type: 'text', required: true, label: '제목' },
        { name: 'desc', type: 'textarea', required: true, label: '내용' },
        {
          name: 'color',
          type: 'select',
          label: '색상',
          defaultValue: '#c30d23',
          options: [
            { label: '빨강', value: '#c30d23' },
            { label: '파랑', value: '#0083ff' },
          ],
        },
        {
          name: 'side',
          type: 'select',
          label: '방향',
          defaultValue: 'right',
          options: [
            { label: '오른쪽', value: 'right' },
            { label: '왼쪽', value: 'left' },
          ],
        },
      ],
      defaultValue: [
        {
          year: '2004-2005',
          title: '노동조합의 초석을 다지다',
          desc: '정부의 부당한 설립 신고 반려에 맞서 싸워 대한민국 최초의 IT노조 지위를 확보하고, 노동조합으로서 조직을 키워 나갔습니다.',
          color: '#c30d23',
          side: 'right',
        },
        {
          year: '2008-2016',
          title: '본격적인 IT노동자를 위한 투쟁',
          desc: '서울시의회 개발자 폭행사건 대응, "야근시계"앱 개발 및 배포, SW산업진흥법 개정안 추진 등으로 IT산업의 노동자를 위한 본격적인 권리 쟁취를 위해 활동해왔습니다.',
          color: '#0083ff',
          side: 'left',
        },
        {
          year: '2017-2019',
          title: 'IT산업 내 다양한 산업 노동자 피해사례 공론화',
          desc: '게임산업계의 연이은 노동자 사망사건에 대응하여 장시간 노동 실태를 고발하고, 한국미래기술 양진호 회장 폭력행위 고발 등 피해 사례들을 공론화하였습니다.',
          color: '#c30d23',
          side: 'right',
        },
        {
          year: '2020-2024',
          title: '게임산업 노동환경 개선',
          desc: '야근은 2급 발암물질이라는 슬로건과 함께 게임 업계의 장시간 노동 실태를 고발하고 전수 조사를 이끌어내는 등 실질적 변화를 도모했습니다.',
          color: '#0083ff',
          side: 'left',
        },
        {
          year: '2025',
          title: '노동운동의 국제화, AI 시대에 대응',
          desc: '해외 기업에 직접 고용된 노동자의 부당 해고 대응 및 AI 기술의 급격한 발전으로 인한 노동자 위기에 대한 문제의식을 공유하였습니다.',
          color: '#c30d23',
          side: 'right',
        },
        {
          year: '현재',
          title: '초심으로 돌아가 새로운 시작',
          desc: 'IT노조의 초기 멤버와 새로 합류한 동지들과 함께 새 집행부를 꾸렸습니다. 기존과 다른 새로운 투쟁 방식을 도모하고자 합니다.',
          color: '#0083ff',
          side: 'left',
        },
      ],
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
