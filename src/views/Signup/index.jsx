import React from 'react'

const Signup = () => {
  return (
    <div className="flex flex-col mt-12">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center px-2">
        <div className="bg-gray-700 px-6 py-8 rounded shadow-md w-full">
          <h1 className="mb-8 text-3xl text-center">Inscrit toi avec ton mail HETIC</h1>
          <input 
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4 text-black"
            name="fullname"
            placeholder="Prénom"
          />
          <input 
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4 text-black"
            name="name"
            placeholder="Nom"
          />
          <input 
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4 text-black"
            name="email"
            placeholder="Email"
          />
          <input 
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4 text-black"
            name="password"
            placeholder="Mot de passe"
          />
          <input 
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4 text-black"
            name="confirm_password"
            placeholder="Confirme ton mot de passe"
          />
          <button
              type="submit"
              className="w-full text-center py-3 rounded bg-white text-black hover:bg-green-dark focus:outline-none my-1"
          >
            Créer ton compte
          </button>
        </div>
      </div>
    </div>
  )
}

export default Signup
