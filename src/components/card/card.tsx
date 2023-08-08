import { Image } from '@unpic/qwik'
import { component$ } from '@builder.io/qwik'
import type { Character, Status } from '~/types/character'

export interface CardProps extends Character {}

export const Card = component$<CardProps>(({ episode, image, location, name, species, status, url }) => {
  const characterStatus = status.toLowerCase() as Lowercase<Status>

  return (
    <article class='m-3 flex w-full flex-col rounded-lg bg-[#3c3e44] shadow-sm sm:h-[240px] sm:w-[600px] sm:flex-row'>
      <div class='w-full sm:w-[240px]'>
        <Image
          loading='lazy'
          class='w-full rounded-t-lg object-cover object-center sm:h-full sm:rounded-none sm:rounded-l-lg'
          width={240}
          height={240}
          src={image}
          alt={name}
        />
      </div>
      <div class='relative flex flex-[3] flex-col p-3 text-white sm:w-[370px] [&_a:hover]:text-primary [&_a]:duration-75'>
        <div class='flex flex-1 flex-col justify-start'>
          <a href={url} rel='noopener noreferrer' target='_blank' class='text-2xl font-extrabold'>
            <h2>{name}</h2>
          </a>
          <span class='flex items-center text-[16px] font-medium capitalize'>
            <span
              class={[
                'mr-2 h-2 w-2 rounded-full',
                {
                  'bg-status-alive': characterStatus === 'alive',
                  'bg-status-dead': characterStatus === 'dead',
                  'bg-status-unknown': characterStatus === 'unknown',
                },
              ]}
            />
            {characterStatus} - {species}
          </span>
        </div>
        <div class='flex flex-1 flex-col justify-center'>
          <span class='text-[16px] font-medium text-[#9e9e9e]'>Last known location:</span>
          {location != null && location.url !== '' ? (
            <a class='sm:truncate' href={location.url} rel='noopener noreferrer' target='_blank'>
              {location.name}
            </a>
          ) : (
            <span>Unknown</span>
          )}
        </div>
        <div class='flex flex-1 flex-col justify-center'>
          <span class='text-[16px] font-medium text-[#9e9e9e]'>First seen in:</span>
          {episode != null ? (
            <a class='sm:truncate' href={episode.url} rel='noopener noreferrer' target='_blank'>
              {episode.name}
            </a>
          ) : (
            <span>Unknown</span>
          )}
        </div>
      </div>
    </article>
  )
})
