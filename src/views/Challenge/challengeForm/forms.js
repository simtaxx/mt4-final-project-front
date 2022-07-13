export const forms = (next, previous, connection) => [
  {
    id: 0,
    inputs: [
      {
        styles: 'block border border-grey-light w-full p-3 rounded mb-4 text-black',
        type: 'text',
        name: 'username',
        value: '',
        placeholder: 'Instance username'
      },
      {
        styles: 'block border border-grey-light w-full p-3 rounded mb-4 text-black',
        type: 'text',
        name: 'host',
        value: '',
        placeholder: 'Host'
      },
      {
        styles: 'block border border-grey-light w-full p-3 rounded mb-4 text-black',
        type: 'text',
        name: 'port',
        value: '',
        placeholder: 'Port'
      },
      {
        styles: 'w-full py-3 rounded bg-white text-black hover:bg-green-dark focus:outline-none my-1',
        type: 'submit',
        text: 'Next',
        name: 'next',
        method: () => next(0)
      }
    ]
  },
  {
    id: 1,
    inputs: [
      {
        styles: 'block border border-grey-light w-full p-3 rounded mb-4 text-black',
        type: 'text',
        name: 'databaseHost',
        value: '',
        placeholder: 'Database host'
      },
      {
        styles: 'block border border-grey-light w-full p-3 rounded mb-4 text-black',
        type: 'text',
        name: 'databasePort',
        value: '',
        placeholder: 'Database port'
      },
      {
        styles: 'block border border-grey-light w-full p-3 rounded mb-4 text-black',
        type: 'text',
        name: 'databaseUser',
        value: '',
        placeholder: 'Database user'
      },
      {
        styles: 'block border border-grey-light w-full p-3 rounded mb-4 text-black',
        type: 'text',
        name: 'databasePassword',
        value: '',
        placeholder: 'Database password'
      },
      {
        styles: 'w-full py-3 rounded bg-white text-black hover:bg-green-dark focus:outline-none my-1',
        type: 'submit',
        text: 'Go back',
        name: 'previous',
        method: () => previous(1)
      },
      {
        styles: 'w-full py-3 rounded bg-white text-black hover:bg-green-dark focus:outline-none my-1',
        type: 'submit',
        text: 'Connection',
        name: 'connection',
        method: connection
      }
    ]
  }
]
