"use client";

import React, { useEffect, useState } from "react";

type Details = {
  action: "type";
  strings: string[];
  output?: string;
  postDelay?: number;
  clear?: boolean;
};

const AboutDetails = () => {
  const [history, setHistory] = useState<string[]>([]);
  const [currentText, setCurrentText] = useState<string>("");
  const [cursorVisible, setCursorVisible] = useState(true);

  const scripts: Details[] = [
    {
      action: "type",
      strings: [
        "Chungsiang Roeurn is a passionate student deeply in love with technology, currently pursuing a Computer Science degree at the Royal University of Phnom Penh (RUPP). His academic journey is driven by a strong desire to explore and innovate within the realm of technology. Chungsiang is constantly seeking new opportunities to expand his knowledge and skills, staying updated with the latest advancements in the tech world. Whether it’s coding, system design, or diving into new tools and frameworks, his dedication to mastering the field of Computer Science is unwavering.",
      ],
      postDelay: 1000,
    },
  ];

  useEffect(() => {
    // Cursor blinking effect
    const cursorTimer = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 700);

    // Start running scripts
    runScripts(scripts, 0);

    // Cleanup timer on component unmount
    return () => {
      clearInterval(cursorTimer);
    };
  }, []);

  const runScripts = (data: Details[], pos: number) => {
    if (pos >= data.length) {
      // Reset the current text and history before restarting
      setCurrentText("");
      setHistory([]); // Clear history before restarting

      // Restart the typing animation after a short delay
      setTimeout(() => {
        runScripts(data, 0);
      }, 2000);
      return;
    }

    const script = data[pos];

    if (script.action === "type") {
      // Type out the first string
      const [string] = script.strings;
      typeText(string, 0, () => {
        // Handle script output after typing
        if (script.output) {
          setHistory((prev) => [...prev, `$ ${currentText}`, script.output!]);
          setCurrentText("");
        }

        // Proceed to the next script with a delay
        setTimeout(() => runScripts(data, pos + 1), script.postDelay || 1000);
      });
    }
  };

  const typeText = (text: string, index: number, callback: () => void) => {
    if (index < text.length) {
      setCurrentText((prev) => prev + text[index]);
      setTimeout(() => typeText(text, index + 1, callback), 50); // Adjusted typing speed
    } else {
      callback();
    }
  };

  return (
    <div className="w-full h-full mx-auto rounded-3xl relative overflow-hidden bg-[#1a1824] border-2">
      <section className="p-3 h-[calc(100%-2rem)] overflow-auto text-white font-mono text-sm">
        {/* Render typed history */}
        <div className="history">
          {history.map((line, index) => (
            <div key={index}>{line}</div>
          ))}
        </div>
        {/* Typing section */}
        <div className="flex flex-col items-center p-3">
          <span className="text-2xl uppercase font-bold text-purple-300 mb-4">
            Chungsiang Roeurn
          </span>
          <span>{currentText}</span>
          <span
            className={`typed-cursor ${
              cursorVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            |
          </span>
        </div>
      </section>
    </div>
  );
};

export default AboutDetails;
