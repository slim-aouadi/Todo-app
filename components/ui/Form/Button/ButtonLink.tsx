import Link from 'next/link'
import { FC, HTMLAttributes, PropsWithChildren } from 'react'
type Props = HTMLAttributes<HTMLButtonElement> & {
  isLoading?: boolean
  size?: 'sm' | 'md' | 'lg' | 'xl'
  to: string
  disabled?: boolean
}
export const ButtonLink: FC<PropsWithChildren<Props>> = ({ children, to }) => {
  return (
    <div className="mt-3 mb-3 text-xs text-blue-500 underline">
      <Link href={to}>{children}</Link>
    </div>
  )
}
