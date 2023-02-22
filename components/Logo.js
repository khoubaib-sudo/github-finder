import Link from 'next/link'

const Logo = () => {
  return (
    <Link href="/">
      <div className="p-3 rounded-xl cursor-pointer flex items-center">
        <img className="object-scale-down h-10 w-15 mr-4 filter invert" src="/assets/gitfinder.png" alt="logo" />
        <p className="font-mono text-xl font-semibold text-gray-800 dark:text-gray-50 md:text-xl lg:text-2xl">
          Gitfinder 
        </p>
      </div>
    </Link>
  )
}

export default Logo
