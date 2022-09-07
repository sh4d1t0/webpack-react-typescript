import { IWelcomeMessage } from './types/app'

function App({ name }: IWelcomeMessage) {
  return (
    <>
      <div>Hello {name}!</div>
    </>
  )
}

/**
 * @param {string} name
 * When name is not specified, it is assumed to be the defaultProps
 */
App.defaultProps = {
  name: 'React',
}

export default App
