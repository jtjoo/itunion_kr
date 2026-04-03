import type { Block } from 'payload'
import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const PromisesPageBlock: Block = {
  slug: 'promisesPage',
  interfaceName: 'PromisesPageBlock',
  labels: { singular: 'Promises Page', plural: 'Promises Pages' },
  fields: [
    {
      name: 'content',
      type: 'richText',
      label: '규약 내용',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => [
          ...rootFeatures,
          HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
          FixedToolbarFeature(),
          InlineToolbarFeature(),
        ],
      }),
    },
  ],
}
