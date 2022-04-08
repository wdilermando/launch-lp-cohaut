import { Api } from '../providers'

const subscribeDownload = (data: any) => Api.post('/downloads', data)

export const DownloadService = {
  subscribeDownload,
}
