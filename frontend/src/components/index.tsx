"use client";
import { useEffect, useState } from 'react';
import axios from 'axios';

const Call = () => {
  const [prompts, setPrompts] = useState<Prompt[]>([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/prompts/')
      .then(response => {
        setPrompts(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the prompts!', error);
      });
  }, []);

  interface Prompt {
    id: string;
    title: string;
    content: string;
  }

  return (
    <div>
      <h1>Prompt Sharing</h1>
      <ul>
        {prompts.map(prompt => (
          <li key={prompt.id}>
            <h2>{prompt.title}</h2>
            <p>{prompt.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Call;
