import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { Router } from './router/Router.jsx'
import { Toaster } from 'react-hot-toast'

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
import AuthProvider from './provider/AuthProvider.jsx'
import ContextProvider from './cartfeature/ContextProvider.jsx'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <QueryClientProvider client={queryClient}>

      <AuthProvider>
      <ContextProvider>

      <RouterProvider router={Router} />
      <Toaster />

      </ContextProvider>
      </AuthProvider>

    </QueryClientProvider>
  </StrictMode>,
)
