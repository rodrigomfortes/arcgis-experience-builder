import type { ImmutableObject } from 'seamless-immutable'

// Chave de API do Google Maps - CONFIGURE AQUI SUA CHAVE
const GOOGLE_MAPS_API_KEY = 'AIzaSyB9qood4sXsH4ahoYe8DKQiOQye1nXUrKs'

export interface Config {
  googleApiKey: string
}

export type IMConfig = ImmutableObject<Config>

// Função para obter a chave de API
export const getGoogleMapsApiKey = (): string => {
  return GOOGLE_MAPS_API_KEY
}
