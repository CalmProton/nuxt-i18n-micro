import { defineEventHandler } from 'h3'

export default defineEventHandler(async (event) => {
  // eslint-disable-next-line no-undef
  const t = await useTranslationServerMiddleware(event)
  return {
    hello: t('test_key'),
  }
})
