import { slug } from 'github-slugger'
import { LocaleTypes } from 'app/[locale]/i18n/settings'

interface TagProps {
  text: string
  params: { locale: LocaleTypes }
}

const Tag: React.FC<TagProps> = ({ text, params: { locale } }) => {
  // Define the link URL based on the locale

  return (
    <a className="mr-3 mt-2 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 sm:mt-0">
      {text.replace(/ /g, '-')}
    </a>
  )
}

export default Tag
