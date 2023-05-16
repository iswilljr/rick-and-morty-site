import { component$ } from '@builder.io/qwik'
import { Link, useLocation } from '@builder.io/qwik-city'
import { cx } from '~/utils/cx'
import { Logo } from '../icons/logo'

export const Header = component$(() => {
  const location = useLocation()

  const isDocsPathname = location.url.pathname.startsWith('/docs')

  return (
    <header
      class={cx('z-50 bg-white', {
        sticky: isDocsPathname,
        'top-0': isDocsPathname,
      })}
    >
      <nav
        class={cx(
          'mx-auto flex min-h-[60px] w-full items-center justify-between border border-transparent px-2 md:px-6',
          {
            'border-b-slate-200': isDocsPathname,
          }
        )}
      >
        <Link href='/' aria-label='Home'>
          <Logo />
        </Link>
        <ul class='flex items-center justify-center space-x-3 text-sm uppercase md:space-x-7 md:text-base'>
          <li>
            <Link class='hover:text-primary text-dark-secondary font-bold duration-100' href='/api' reload>
              API
            </Link>
          </li>
          <li>
            <Link class='hover:text-primary text-dark-secondary font-bold duration-100' href='/docs/introduction'>
              Docs
            </Link>
          </li>
          <li>
            <Link class='hover:text-primary text-dark-secondary font-bold duration-100' href='/official' reload>
              Official API
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
})
