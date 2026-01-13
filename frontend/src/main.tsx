// Estilos
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';

import { StrictMode } from 'react'

import { createRoot } from 'react-dom/client'
import { MantineProvider } from '@mantine/core'
import { Notifications } from '@mantine/notifications';
import { BrowserRouter } from 'react-router-dom'
import { App } from './App'
import { mantineTheme } from './theme';
import "./theme/style.css"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider theme={mantineTheme} defaultColorScheme="auto">
      <Notifications position="bottom-left" />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MantineProvider>
  </StrictMode >,
)
