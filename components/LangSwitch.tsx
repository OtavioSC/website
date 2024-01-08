import { useRef, useState } from 'react'
import { usePathname, useParams, useSelectedLayoutSegments, useRouter } from 'next/navigation'
import { useOuterClick } from './util/useOuterClick'
import { LocaleTypes, locales } from 'app/[locale]/i18n/settings'
import { allBlogs } from '.contentlayer/generated'
import slugMap from 'app/[locale]/localeid-map.json'

const LangSwitch = () => {
  const pathname = usePathname()
  const urlSegments = useSelectedLayoutSegments()
  let locale = useParams()?.locale as LocaleTypes
  const router = useRouter()

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleLocaleChange = (newLocale: string): string => {
    const newUrl = `/${newLocale}/${urlSegments.join('/')}`

    const currentPost = allBlogs.find((p) => pathname.includes(p.slug))

    if (currentPost) {
      // Find the corresponding slug in the new language
      const newSlug = slugMap[currentPost.localeid]?.[newLocale]

      if (newSlug) {
        return `/${newLocale}/blog/${newSlug}`
      } else {
        return `/${newLocale}/blog`
      }
    }

    return newUrl
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const menubarRef = useRef<HTMLDivElement>(null)
  useOuterClick(menubarRef, closeMenu)

  const handleLinkClick = () => {
    const newLocale = locale === 'en' ? 'pt' : 'en'
    const resolvedUrl = handleLocaleChange(newLocale)
    router.push(resolvedUrl)
    locale = newLocale
  }

  return (
    <div ref={menubarRef} className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex w-full justify-center rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 dark:bg-gray-800 dark:text-white"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded={isMenuOpen}
          onClick={handleLinkClick}
        >
          {locale}
        </button>
      </div>
    </div>
  )
}

export default LangSwitch
