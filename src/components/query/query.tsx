import { component$ } from '@builder.io/qwik'

const baseURL = 'https://therickandmortyapi.vercel.app/api'

export const Query = component$<{ endpoint?: string }>(({ endpoint = '' }) => {
  return (
    <pre class='language-javascript' style={{ marginBottom: '2px' }}>
      <code class='language-javascript'>
        <span class='token property'>GET </span>
        <span class='token string'>{baseURL}</span>
        <span class='token number'>{endpoint}</span>
      </code>
    </pre>
  )
})
