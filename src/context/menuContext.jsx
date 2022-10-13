import { createContext, useState } from 'react'

export const menuContext = createContext({})

export function MenuContextProvider({ children }) {
  const [menu, setMenu] = useState(false)

  return (
    <menuContext.Provider
      value={{
        menu,
        setMenu,
      }}
    >
      {children}
    </menuContext.Provider>
  )
}
