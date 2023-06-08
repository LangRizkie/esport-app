'use client'

import { Provider } from 'react-redux'
import type { Children } from '@/modules/interface'
import { store } from './store'

const Providers = ({ children }: Children) => <Provider store={store}>{children}</Provider>

export default Providers
