import React, { useState } from 'react'

type UsernameContext = any[]

export const UserContext = React.createContext<UsernameContext>([])

export const UserProvider = (props: React.PropsWithChildren<{}>) => {
  const [username, setUsername] = useState<string>('')
  return <UserContext.Provider value={[username, setUsername]}>{props.children}</UserContext.Provider>
}
