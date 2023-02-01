import { FC, HTMLAttributes, PropsWithChildren } from 'react'
type Props = HTMLAttributes<HTMLButtonElement> & {
  isLoading?: boolean
  size?: 'sm' | 'md' | 'lg' | 'xl'
  to?: string
  disabled?: boolean
  type?: 'submit' | 'button'
}
export const ButtonCta: FC<PropsWithChildren<Props>> = ({ children, type }) => {
  return (
    <button
      type={type}
      className="border-2 rounded-3xl border-green-500 text-green-500 rounded-fill px-12 py-2 inline-block hover:bg-green-500 hover:text-white mb-5"
    >
      {children}
    </button>
  )
}
