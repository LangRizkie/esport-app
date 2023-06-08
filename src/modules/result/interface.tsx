export interface userProps {
  id: string
  avatar: string
  name: string
  username: string
  type: string
  location: string
  role?: string
  game?: string
  isTeam: boolean
  signature: SignatureProps[]
}

export interface SignatureProps {
  name: string
  portrait?: string
  icon?: string
}
