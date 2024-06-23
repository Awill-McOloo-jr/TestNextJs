import Image from "next/image";
import Link from "next/link";
import logo from '../../realLogo.png'

function Navbar() {
  return (
    <header class="flex flex-wrap sticky top-0 sm:justify-start sm:flex-nowrap w-full border-b border-gray-500 py-4 bg-white bg-opacity-10 backdrop-blur-lg border-opacity-10 shadow-lg  z-50 p-4">
      <nav
        class="max-w-[85rem] w-full mx-auto sm:flex sm:items-center sm:justify-between"
        aria-label="Global"
      >
        <div class="flex items-center justify-between">
          <Link class="flex-none" href="/">
            <h1 className="text-2xl font-bold text-white tracking-wide uppercase bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-pink-500 to-orange-500">
                LIONSTONE
            </h1>
          </Link>
          <div class="sm:hidden">
            <button
              type="button"
              class="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-white dark:hover:bg-white/10"
              data-hs-collapse="#navbar-image-2"
              aria-controls="navbar-image-2"
              aria-label="Toggle navigation"
            >
              <svg
                class="hs-collapse-open:hidden flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="3" x2="21" y1="6" y2="6" />
                <line x1="3" x2="21" y1="12" y2="12" />
                <line x1="3" x2="21" y1="18" y2="18" />
              </svg>
              <svg
                class="hs-collapse-open:block hidden flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
        </div>
        <div
          id="navbar-image-2"
          class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
        >
          <div class="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
            <Link class="font-medium text-blue-500" href="/" aria-current="page">
              Home
            </Link>
            <Link
              class="font-medium text-gray-600 hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500"
              href="/products"
            >
              Products
            </Link>
            <Link
              class="font-medium text-gray-600 hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500"
              href="/about"
            >
              About
            </Link>
            <Link
              class="font-medium text-gray-600 hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500"
              href="/contact"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
export default Navbar;
