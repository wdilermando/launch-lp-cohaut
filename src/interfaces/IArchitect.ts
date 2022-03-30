import { IListing } from './IListing'

export interface IArchitect {
  id?: number
  attributes?: IArchitectAttributes
}

export interface IArchitectAttributes {
  name: string
  description: string
  profilePicture: ProfilePicture
  empreendimentos: Empreendimentos
}

export interface ProfilePicture {
  data: ProfileData
}

export interface ProfileData {
  id: number
  attributes: ProfileDataAttributes
}

export interface ProfileDataAttributes {
  name: string
  alternativeText: string
  caption: string
  width: number
  height: number
  formats: any
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl?: any
  provider: string
  provider_metadata?: any
  createdAt: Date
  updatedAt: Date
}

export interface Empreendimentos {
  data?: IListing[]
}
