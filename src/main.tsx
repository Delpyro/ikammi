import React from 'react'
import ReactDOM from 'react-dom/client'
import { MantineProvider, createTheme } from '@mantine/core'
import App from './App.tsx'
import '@mantine/core/styles.css' // Import CSS wajib Mantine

const theme = createTheme({
  primaryColor: 'red', // Warna dasar Marawa (Merah)
  fontFamily: 'Inter, sans-serif',
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
      <App />
    </MantineProvider>
  </React.StrictMode>,
)