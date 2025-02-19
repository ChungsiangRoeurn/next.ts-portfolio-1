import { useEffect, useState } from 'react'

type Script = {
  action: 'type'
  strings: string[]
  output?: string
  postDelay?: number
  clear?: boolean
}

const Terminal = () => {
  const [history, setHistory] = useState<string[]>([])
  const [currentText, setCurrentText] = useState<string>('')
  const [cursorVisible, setCursorVisible] = useState(true)

  const scripts: Script[] = [
    {
      action: 'type',
      strings: ['npx create-next-app chungsiang-portfolio^400'],
      output:
        '<span class="text-gray-500">Creating a new Next.js app in /chungsiang-portfolio</span>',
      postDelay: 2000,
    },
    {
      action: 'type',
      strings: ['cd chungsiang-portfolio^400'],
      output: ' ',
      postDelay: 1000,
    },
    {
      action: 'type',
      strings: ['npm run dev^400'],
      output: `
      <br>Running development server...<br>
      ----------------------------------------------<br>
      Local: <span class="text-blue-400">http://localhost:3000</span><br>
      Network: <span class="text-blue-400">http://192.168.1.x:3000</span><br><br>
      <span class="text-green-500">✓</span> Next.js app is running<br>
      `,
      postDelay: 2000,
    },
    {
      action: 'type',
      strings: ['exit^400'],
      postDelay: 1000,
    },
  ]

  useEffect(() => {
    let cursorTimer = setInterval(() => {
      setCursorVisible((prev) => !prev)
    }, 700)

    runScripts(scripts, 0)

    return () => {
      clearInterval(cursorTimer)
    }
  }, [])

  const runScripts = (data: Script[], pos: number) => {
    if (pos >= data.length) {
      // Reset to loop
      setTimeout(() => {
        setHistory([]) // Clear terminal history before restarting
        runScripts(data, 0)
      }, 2000) // Add a short delay before restarting
      return
    }

    const script = data[pos]

    if (script.action === 'type') {
      const [string, ...rest] = script.strings
      typeText(string, 0, () => {
        if (script.output) {
          setHistory((prev) => [
            ...prev,
            `$ ${currentText}`,
            ...(script.output ? [script.output] : []),
          ])

          setCurrentText('')
        }
        setTimeout(() => runScripts(data, pos + 1), script.postDelay || 1000)
      })
    }
  }

  const typeText = (text: string, index: number, callback: () => void) => {
    if (index < text.length) {
      setCurrentText((prev) => prev + text[index])
      setTimeout(() => typeText(text, index + 1, callback), 100) // Adjusted speed for smoother typing
    } else {
      callback()
    }
  }

  return (
    <div className="w-[500px] h-[350px] md:w-[600px] md:h-[400px] mx-auto rounded-xl relative overflow-hidden border-gray-400 border-2">
      <header className="flex items-center h-8 px-3 bg-blue-300 rounded-t-lg">
        <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
      </header>
      <section className="p-3 h-[calc(100%-2rem)] overflow-auto text-white font-mono text-sm">
        <div className="history" dangerouslySetInnerHTML={{ __html: history.join('<br>') }}></div>
        <div className="flex items-center">
          <span>$&nbsp;</span>
          <span>{currentText}</span>
          <span className={`typed-cursor ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}>|</span>
        </div>
      </section>
    </div>
  )
}

export default Terminal
