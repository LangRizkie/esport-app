import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import Constant from '@/modules/constant'

export const BaseApi = createApi({
  reducerPath: 'BaseApi',
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: Constant.Api.baseUrl
  }),
  endpoints: (_) => ({})
})
