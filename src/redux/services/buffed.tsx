import Constant from '@/modules/constant'
import type { userProps } from '@/modules/result/interface'
import { BaseApi } from './base'

const BuffedApi = BaseApi.injectEndpoints({
  endpoints: (builder) => ({
    getBuffedList: builder.mutation<userProps[], string>({
      query: (query) => ({
        url: Constant.Api.getBuffedList + '?type=' + query,
        method: 'GET'
      })
    })
  })
})

export const { useGetBuffedListMutation } = BuffedApi
