import React, { createContext, useState } from 'react'
import { ArtistType } from '../type/type'
import artists from '../assets/db'


interface MusicContextType {
    musicData:  ArtistType[]
}


export const MusicContext = createContext<MusicContextType>({
    musicData:[]
})

interface Props {
    children:React.ReactNode
}

const MusicContextConstructor:React.FC<Props> = ({children}) => {
const [musicData, setData] = useState<ArtistType[]>(artists)

  return (
    <MusicContext.Provider value={{musicData}}>
      {children}
    </MusicContext.Provider>
  )
}

export default MusicContextConstructor
