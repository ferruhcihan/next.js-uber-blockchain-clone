import { createContext, useState, useEffect } from 'react'

export const UberContext = createContext('') as any

export const UberProvider = ({ children }: any) => {
  return <UberContext.Provider value={{}}>{children}</UberContext.Provider>
}
