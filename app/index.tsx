import { View, Text } from 'react-native'
import React from 'react'
import { ProductListPage } from '@/components/pages/ProductListPage'
import { store } from '@/store'
import { Provider } from 'react-redux'

type Props = {}

const index = (props: Props) => {
  return (
    <Provider store={store}>
        <ProductListPage />
    </Provider>
  )
}

export default index