import type { Block } from 'payload'

export const ConsultPageBlock: Block = {
  slug: 'consultPage',
  interfaceName: 'ConsultPageBlock',
  labels: { singular: 'Consult Page', plural: 'Consult Pages' },
  fields: [
    {
      name: 'phone',
      type: 'text',
      label: '전화번호',
      defaultValue: '02-7186-9939',
    },
    {
      name: 'phoneHours',
      type: 'text',
      label: '전화 상담 시간',
      defaultValue: '평일 09:00 ~ 18:00',
    },
    {
      name: 'email',
      type: 'email',
      label: '이메일',
      defaultValue: 'itlabor@itunion.or.kr',
    },
  ],
}
