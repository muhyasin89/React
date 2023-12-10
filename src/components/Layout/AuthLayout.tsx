import React from 'react'

function AuthLayout({children}) {
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
    <div className="center-page">
        <a href="#" className="item-center-page">
            <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
            Flowbite    
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                {children}
            </div>
        </div>
    </div>
  </section>
  )
}

export default AuthLayout