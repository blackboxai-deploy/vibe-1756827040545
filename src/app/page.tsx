export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
      <div className="text-center space-y-8 p-8 max-w-2xl mx-auto">
        {/* Main heading with gradient text */}
        <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-pulse">
          Hello World
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground font-light">
          Welcome to your new Next.js application
        </p>
        
        {/* Decorative element */}
        <div className="flex justify-center space-x-2">
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce [animation-delay:0.1s]"></div>
          <div className="w-3 h-3 bg-indigo-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
        </div>
        
        {/* Description */}
        <div className="mt-12 p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg">
          <p className="text-base text-muted-foreground leading-relaxed">
            This is a simple Hello World page built with{' '}
            <span className="font-semibold text-blue-600 dark:text-blue-400">Next.js</span>,{' '}
            <span className="font-semibold text-purple-600 dark:text-purple-400">TypeScript</span>, and{' '}
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">Tailwind CSS</span>.
            The page features responsive design, dark mode support, and modern styling.
          </p>
        </div>
      </div>
    </main>
  )
}