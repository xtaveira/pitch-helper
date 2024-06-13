"use client";

import React, { useState, ChangeEvent, useRef } from "react";

const TextArea: React.FC = () => {
  const [text, setText] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
    // Atualizar a altura do textarea
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px";
    }
  };

  return (
    <textarea
      ref={textareaRef}
      className="w-full bg-gray-800 text-white p-2 rounded-md border border-gray-600
      text-[1.2rem] sm:text-[1.5rem] md:text-[1.6rem] lg:text-[2.1rem] xl:text-[2.4rem] 2xl:text-[3rem]"
      value={text}
      onChange={handleChange}
      placeholder="Digite seu texto aqui..."
    />
  );
};

export default TextArea;
