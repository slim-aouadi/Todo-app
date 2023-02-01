import type { HTMLAttributes } from 'react'

type Props = HTMLAttributes<HTMLInputElement> & {
  value: string
  id: string
  type?: string
}

export const FormInput = ({
  value,
  onChange,
  type = 'text',
  ...props
}: Props) => {
  return (
    <input
      className="bg-gray-100 outline-none duration-300 text-sm flex-1 border-b-2 border-solid border-gray-100 max-w-[30ch] focus:border-green-500"
      {...props}
      type={type}
      value={value ?? ''}
      onChange={onChange}
    />
  )
}
