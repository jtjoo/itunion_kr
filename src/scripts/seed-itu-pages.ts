import { getPayload } from 'payload'
import config from '@payload-config'
import type { Category, Form } from '@/payload-types'

// Helper: find existing doc by slug or create it
async function findOrCreateCategory(
  payload: Awaited<ReturnType<typeof getPayload>>,
  title: string,
  slug: string,
): Promise<Category> {
  const existing = await payload.find({
    collection: 'categories',
    where: { slug: { equals: slug } },
    limit: 1,
  })
  if (existing.docs.length > 0) return existing.docs[0] as Category
  return payload.create({ collection: 'categories', data: { title, slug } }) as Promise<Category>
}

async function findOrCreatePage(
  payload: Awaited<ReturnType<typeof getPayload>>,
  slug: string,
  data: Record<string, unknown>,
) {
  const existing = await payload.find({
    collection: 'pages',
    where: { slug: { equals: slug } },
    limit: 1,
  })
  if (existing.docs.length > 0) {
    console.log(`  Page "${slug}" already exists, updating...`)
    return payload.update({ collection: 'pages', id: existing.docs[0].id, data })
  }
  return payload.create({ collection: 'pages', data: { slug, ...data } })
}

async function findOrCreateForm(
  payload: Awaited<ReturnType<typeof getPayload>>,
  title: string,
  data: Record<string, unknown>,
): Promise<Form> {
  const existing = await payload.find({
    collection: 'forms',
    where: { title: { equals: title } },
    limit: 1,
  })
  if (existing.docs.length > 0) return existing.docs[0] as Form
  return payload.create({ collection: 'forms', data }) as Promise<Form>
}

async function run() {
  const payload = await getPayload({ config })

  // ── 1. Categories ────────────────────────────────────────────────────────

  console.log('Creating categories...')

  // News categories (used by /news route — slugs must match tab IDs)
  const [catNotice, catGallery, catStatement] = await Promise.all([
    findOrCreateCategory(payload, '공지사항', 'notice'),
    findOrCreateCategory(payload, '갤러리', 'gallery'),
    findOrCreateCategory(payload, '성명/보도자료', 'statement'),
  ])

  // Community categories
  const [catCommunity, catMembers, catMeeting, catDownload] = await Promise.all([
    findOrCreateCategory(payload, '커뮤니티', 'community'),
    findOrCreateCategory(payload, '조합원공간', 'members'),
    findOrCreateCategory(payload, '회의자료', 'meeting'),
    findOrCreateCategory(payload, '자료실', 'download'),
  ])

  console.log('  ✓ Categories ready')

  // ── 2. Consult form ───────────────────────────────────────────────────────

  console.log('Creating consult form...')

  const consultForm = await findOrCreateForm(payload, '노동상담 신청', {
    title: '노동상담 신청',
    submitButtonLabel: '상담 신청하기',
    confirmationType: 'message',
    confirmationMessage: {
      root: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: '상담 신청이 완료되었습니다. 담당자가 곧 연락드리겠습니다.',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            textFormat: 0,
            version: 1,
          },
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
        version: 1,
      },
    },
    emails: [
      {
        emailFrom: '"IT노조" <itlabor@itunion.or.kr>',
        emailTo: 'itlabor@itunion.or.kr',
        subject: '[노동상담] 새 상담 신청이 접수되었습니다',
        message: {
          root: {
            type: 'root',
            children: [
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: '새 노동상담 신청이 접수되었습니다.',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                textFormat: 0,
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            version: 1,
          },
        },
      },
    ],
    fields: [
      {
        blockType: 'text',
        blockName: 'name',
        name: 'name',
        label: '이름 (또는 닉네임)',
        required: true,
        width: 100,
      },
      {
        blockType: 'text',
        blockName: 'phone',
        name: 'phone',
        label: '연락처',
        required: true,
        width: 100,
      },
      {
        blockType: 'email',
        blockName: 'email',
        name: 'email',
        label: '이메일',
        required: true,
        width: 100,
      },
      {
        blockType: 'select',
        blockName: 'category',
        name: 'category',
        label: '상담 분류',
        required: true,
        width: 100,
        defaultValue: 'wage',
        options: [
          { label: '임금 체불', value: 'wage' },
          { label: '부당 해고', value: 'unfair' },
          { label: '직장 내 괴롭힘', value: 'harassment' },
          { label: '계약 관련', value: 'contract' },
          { label: '초과근무', value: 'overtime' },
          { label: '기타', value: 'other' },
        ],
      },
      {
        blockType: 'textarea',
        blockName: 'message',
        name: 'message',
        label: '상담 내용',
        required: true,
        width: 100,
      },
    ],
  })

  // Also create a report (피해사례 제보) form
  const reportForm = await findOrCreateForm(payload, '피해사례 제보', {
    title: '피해사례 제보',
    submitButtonLabel: '제보하기',
    confirmationType: 'message',
    confirmationMessage: {
      root: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: '피해사례 제보가 접수되었습니다. 검토 후 연락드리겠습니다.',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            textFormat: 0,
            version: 1,
          },
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
        version: 1,
      },
    },
    emails: [
      {
        emailFrom: '"IT노조" <itlabor@itunion.or.kr>',
        emailTo: 'itlabor@itunion.or.kr',
        subject: '[피해사례] 새 제보가 접수되었습니다',
        message: {
          root: {
            type: 'root',
            children: [
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: '새 피해사례 제보가 접수되었습니다.',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                textFormat: 0,
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            version: 1,
          },
        },
      },
    ],
    fields: [
      {
        blockType: 'text',
        blockName: 'name',
        name: 'name',
        label: '이름 (또는 닉네임)',
        required: true,
        width: 100,
      },
      {
        blockType: 'text',
        blockName: 'phone',
        name: 'phone',
        label: '연락처',
        required: false,
        width: 100,
      },
      {
        blockType: 'email',
        blockName: 'email',
        name: 'email',
        label: '이메일',
        required: true,
        width: 100,
      },
      {
        blockType: 'textarea',
        blockName: 'report',
        name: 'report',
        label: '피해 내용',
        required: true,
        width: 100,
      },
    ],
  })

  console.log('  ✓ Forms ready')

  // ── 3. Consult page ───────────────────────────────────────────────────────

  console.log('Creating consult page...')

  await findOrCreatePage(payload, 'consult', {
    title: '노동상담',
    _status: 'published',
    hero: { type: 'none' },
    layout: [
      {
        blockType: 'consultPage',
      },
      {
        blockType: 'formBlock',
        enableIntro: true,
        form: consultForm.id,
        introContent: {
          root: {
            type: 'root',
            children: [
              {
                type: 'heading',
                children: [
                  {
                    type: 'text',
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: '온라인 상담 신청',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                tag: 'h3',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            version: 1,
          },
        },
      },
    ],
  })

  console.log('  ✓ Consult page ready')

  // ── 4. Community page ─────────────────────────────────────────────────────

  console.log('Creating community page...')

  await findOrCreatePage(payload, 'community', {
    title: '소통공간',
    _status: 'published',
    hero: { type: 'none' },
    layout: [
      {
        blockType: 'archive',
        populateBy: 'collection',
        relationTo: 'posts',
        categories: [
          catCommunity.id,
          catMembers.id,
          catMeeting.id,
          catDownload.id,
        ],
        limit: 20,
      },
    ],
  })

  console.log('  ✓ Community page ready')

  console.log('\n✅ Done! Categories, forms, and pages have been seeded.')
  console.log('\nNext steps:')
  console.log('  • Create posts in admin → Posts, assign categories from the ones created above')
  console.log('  • News categories:      notice, gallery, statement')
  console.log('  • Community categories: community, members, meeting, download')

  process.exit(0)
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})
