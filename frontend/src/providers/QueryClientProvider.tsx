import React from 'react'
import {
  QueryClientProvider as TanstackProvider,
  QueryClient,
} from '@tanstack/react-query'

import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const QueryClientProvider = (props: { children: React.ReactNode }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 1,
      },
    },
  })

  return (
    <TanstackProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      {props.children}
    </TanstackProvider>
  )
}

export default QueryClientProvider
