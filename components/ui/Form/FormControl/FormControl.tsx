import type { FC, ReactNode } from 'react'
import { useField } from 'formik'
import ErrorMessage from '../../../../errors/auth.error'
import { FaUser } from 'react-icons/fa'

interface Props {
  name: string
  id: string
  label?: string
  labelElement: ReactNode
  placeholder: string
  children: (options: any) => ReactNode
}

export const FormControl: FC<Props> = ({
  children,
  name,
  label,
  id,
  placeholder,
  labelElement
}) => {
  const [field, meta] = useField(name)

  return (
    <fieldset>
      <div className="bg-gray-100 w-64 p-2 flex  mb-3 gap-2">
        {label !== '' && (
          <label htmlFor={label}>
            {labelElement}
            <span className="sr-only">{label}</span>
          </label>
        )}
        {children({ ...field, id, placeholder, name })}
      </div>
      {meta.touched && meta.error && <ErrorMessage message={meta.error} />}
    </fieldset>
  )
}
