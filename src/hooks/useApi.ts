import useSWR from 'swr'

import { Api } from '../providers'

export function useApi(url: string | null) {
  const { data, error, mutate } = useSWR(url, async (url) => {
    const { data } = await Api.get(url)
    return data
  })
  return { data, error, mutate }
}
