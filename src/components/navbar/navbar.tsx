import { $, component$, useSignal, useVisibleTask$ } from '@builder.io/qwik'
import { Link } from '@builder.io/qwik-city'
import { cx } from '~/utils/cx'
import { useDocLinks } from '~/routes/docs/layout'

export const Navbar = component$(() => {
  const docLinks = useDocLinks()
  const isNavbarOpened = useSignal(false)

  const handleClick = $(() => {
    isNavbarOpened.value = false
  })

  useVisibleTask$(({ track }) => {
    track(() => isNavbarOpened)

    if (!isNavbarOpened.value) return

    document.documentElement.style.overflow = 'hidden'

    return () => {
      document.documentElement.style.overflow = 'initial'
    }
  })

  return (
    <>
      <nav
        class={cx(
          'fixed top-[60px] z-10 h-[calc(100vh-60px)] w-full overflow-y-auto bg-white p-6 duration-100 md:sticky md:w-60 md:translate-x-0',
          {
            '-translate-x-full': !isNavbarOpened.value,
          }
        )}
      >
        <ul class='[&_a:hover]:text-primary [&_a]:duration-100'>
          {docLinks.value.map(doc => (
            <li key={doc.href} class='mb-6 last:mb-0'>
              <Link class={cx('text-xl font-bold', { 'text-primary': false })} href={doc.href} onClick$={handleClick}>
                {doc.label}
              </Link>
              <ul class='mt-2'>
                {doc.categories.map(category => {
                  const link = `${doc.href}/?${category.href.replaceAll('#', '')}${category.href}`

                  return (
                    <li key={category.href} class='my-1'>
                      <Link href={link} onClick$={handleClick}>
                        {category.label}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </li>
          ))}
        </ul>
      </nav>
      <button
        class='fixed bottom-4 right-4 z-50 flex h-[60px] w-[60px] items-center justify-center rounded-full bg-primary md:hidden'
        onClick$={() => (isNavbarOpened.value = !isNavbarOpened.value)}
        aria-label='Open Navbar'
      >
        <svg
          class={cx('duration-700', { 'rotate-45': isNavbarOpened.value })}
          width={20}
          height={20}
          viewBox='0 0 459 459'
        >
          <path d='M459.319,229.668c0,22.201-17.992,40.193-40.205,40.193H269.85v149.271c0,22.207-17.998,40.199-40.196,40.193 c-11.101,0-21.149-4.492-28.416-11.763c-7.276-7.281-11.774-17.324-11.769-28.419l-0.006-149.288H40.181 c-11.094,0-21.134-4.492-28.416-11.774c-7.264-7.264-11.759-17.312-11.759-28.413C0,207.471,17.992,189.475,40.202,189.475h149.267 V40.202C189.469,17.998,207.471,0,229.671,0c22.192,0.006,40.178,17.986,40.19,40.187v149.288h149.282 C441.339,189.487,459.308,207.471,459.319,229.668z' />
        </svg>
      </button>
    </>
  )
})
