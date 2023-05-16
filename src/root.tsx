import { component$ } from '@builder.io/qwik'
import { QwikCityProvider, RouterOutlet, ServiceWorkerRegister } from '@builder.io/qwik-city'
import { RouterHead } from './components/router-head/router-head'
import './global.css'

export const Root = component$(() => (
  <QwikCityProvider>
    <head>
      <meta charSet='utf-8' />
      <link rel='manifest' href='/manifest.json' />
      <RouterHead />
    </head>
    <body lang='en'>
      <RouterOutlet />
      <ServiceWorkerRegister />
    </body>
  </QwikCityProvider>
))
