import { IArchitect } from './IArchitect'

interface IListingAttributes {
  listingId: string
  description: string
  city: string
  neighborhood: string
  street: string
  streetNumber: string
  size: string
  profileType: string
  createdAt: Date
  updatedAt: Date
  publishedAt: Date
  featuredImage: FeaturedImage
  featuredDescription: string
  gallery: Gallery
  arquiteto: Arquiteto
}

export interface IListing {
  id?: number
  attributes?: IListingAttributes
}
export interface FeaturedImageAttributes {
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

export interface FeaturedImageData {
  id: number
  attributes: FeaturedImageAttributes
}

export interface FeaturedImage {
  data: FeaturedImageData
}

export interface Attributes3 {
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

export interface Datum {
  id: number
  attributes: Attributes3
}

export interface Gallery {
  data: Datum[]
}

export interface Arquiteto {
  data: IArchitect
}
