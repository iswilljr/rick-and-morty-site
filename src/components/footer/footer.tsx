import { component$ } from '@builder.io/qwik'
import { Link } from '@builder.io/qwik-city'
import { IconGithub } from '../icons/github'
import { IconTwitter } from '../icons/twitter'
import { IconSupport } from '../icons/support'

export const Footer = component$(() => {
  return (
    <footer class='relative flex min-h-[120px] w-full flex-col flex-wrap items-center justify-center bg-dark text-secondary'>
      <ul class='flex flex-wrap items-center justify-center space-x-3'>
        <li>
          <a
            class='hover:text-primary'
            href='https://github.com/iswilljr/rick-and-morty-api'
            aria-label='Project Source Code'
            title='Project Source Code'
            rel='noopener noreferrer'
            target='_blank'
          >
            <IconGithub />
          </a>
        </li>
        <li>
          <a
            class='hover:text-primary'
            href='https://twitter.com/iswilljr'
            aria-label='My Twitter Profile'
            title='My Twitter Profile'
            rel='noopener noreferrer'
            target='_blank'
          >
            <IconTwitter />
          </a>
        </li>
        <li>
          <Link
            class='hover:text-primary'
            aria-label='Support the original project'
            title='Support the original project'
            href='/support'
            reload
          >
            <IconSupport />
          </Link>
        </li>
      </ul>
      <div class='mt-5'>
        <span>
          ❮❯ by{' '}
          <a class='hover:text-primary' href='https://github.com/iswilljr' rel='noopener noreferrer' target='_blank'>
            Will
          </a>
        </span>
        <span> 2023</span>
      </div>
    </footer>
  )
})
