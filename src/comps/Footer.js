import React from 'react'

function Footer() {
    return (
        <div className='m-4'>
            <footer className="text-gray-500 bg-gray-900 body-font m-3 rounded-lg">
	<br/>
  <div className="container px-5 pb-5 mx-auto flex items-center sm:flex-row flex-col">
    <a href="https://mohammedzainkhazi.web.app" className="flex title-font font-medium items-center md:justify-start justify-center text-white">
      <span className="ml-3 text-xl">RootZain 👑</span>
    </a>
    <span className="flex mt-4 justify-center flex-row gap-4 items-center">
      <a className="text-gray-600" href="https://www.facebook.com/MOHAMMED.ZAIN.KHAZI/">
        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
        </svg>
      </a>
      <a className="ml-3 text-gray-600" href="https://www.instagram.com/zain.khazi/">
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
        </svg>
      </a>
      <a className="ml-3 text-gray-600" href="https://www.linkedin.com/in/mohammedzainkhazi/">
        <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
          <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
          <circle cx="4" cy="4" r="2" stroke="none"></circle>
        </svg>
      </a>
    </span>
  </div>
</footer>
        </div>
    )
}

export default Footer
