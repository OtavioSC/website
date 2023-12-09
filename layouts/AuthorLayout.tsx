import { ReactNode } from 'react'
import type { Authors } from 'contentlayer/generated'
import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'

const profileImage = 'https://github.com/otaviosc.png'

interface Props {
  children: ReactNode
  content: Omit<Authors, '_id' | '_raw' | 'body'>
  description: boolean
}

export default function AuthorLayout({ children, content, description }: Props) {
  const { name, avatar, occupation, company, email, twitter, linkedin, github } = content

  return (
    <>
      <div className="divide-y divide-dashed divide-gray-200 dark:divide-gray-700">
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-20">
          <div className="flex flex-col items-center space-x-2 pt-8">
            <Image
              src={profileImage}
              alt="avatar"
              width={192}
              height={192}
              className="h-48 w-48 rounded-full"
            />
            <h3 className="pb-2 pt-4 text-2xl font-bold leading-8 tracking-tight">{name}</h3>
            <div className="text-gray-500 dark:text-gray-400">{occupation}</div>
            <div className="text-gray-500 dark:text-gray-400">{company}</div>
            <div className="flex space-x-3 pt-6">
              <SocialIcon kind="mail" href={`mailto:${email}`} />
              <SocialIcon kind="github" href={github} />
              <SocialIcon kind="linkedin" href={linkedin} />
              <SocialIcon kind="twitter" href={twitter} />
            </div>
          </div>
          {description && (
            <div className="prose max-w-none pb-8 pt-8 text-justify dark:prose-invert xl:col-span-2 xl:text-lg">
              {children}
            </div>
          )}
        </div>
      </div>
    </>
  )
}
