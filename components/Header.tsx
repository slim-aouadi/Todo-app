import React from 'react'
import { ImStack } from 'react-icons/im'
import { ThemeSwitcher } from './ThemeSwitcher'

const Header: React.FC = () => {
  /* const mutation = useQuery({
      queryKey: ['auth'],
      queryFn: fetchLoggedUser
    })
*/
  return (
    <div className=" font-body w-full text-white bg-neutral-700 flex justify-center p-4">
      <div className="flex flex-row">
        <h1 className="text-3xl sm:text-2xl mr-2"> MY TODOS</h1>
        <ImStack className="text-3xl sm:text-2xl" />
      </div>
      <div>
        <ThemeSwitcher />
      </div>
    </div>
  )
}

export default Header
