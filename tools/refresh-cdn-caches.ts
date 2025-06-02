import Cdn20180510, * as $Cdn20180510 from '@alicloud/cdn20180510'
import * as $OpenApi from '@alicloud/openapi-client'
import * as $Util from '@alicloud/tea-util'

export default class Client {
  /**
   * @remarks
   * 使用 AK & SK 初始化账号 Client
   * @returns Client
   *
   * @throws Exception
   */
  static createClient(): Cdn20180510 {
    const config = new $OpenApi.Config({
      accessKeyId: process.env['ALIBABA_CLOUD_ACCESS_KEY_ID'],
      accessKeySecret: process.env['ALIBABA_CLOUD_ACCESS_KEY_SECRET'],
    })
    // Endpoint 请参考 https://api.aliyun.com/product/Cdn
    config.endpoint = `cdn.aliyuncs.com`
    return new (Cdn20180510 as any).default(config)
  }

  static async main(args: string[]): Promise<void> {
    const client = Client.createClient()
    const objectPath = process.env['CDN_URL_PATH'] || "https://docs.alexsun.top/vitepress-books/"
    console.log(`refresh object caches for ${objectPath}`)
    const refreshObjectCachesRequest = new $Cdn20180510.RefreshObjectCachesRequest({
      objectPath,
      objectType: "Directory",
      force: true,
    })
    const runtime = new $Util.RuntimeOptions({})
    try {
      await client.refreshObjectCachesWithOptions(refreshObjectCachesRequest, runtime)
    } catch (error) {
      console.log(error.message)
      console.log(error.data["Recommend"])
    }
  }
}

Client.main(process.argv)
