import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const AddPrompt = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await axios.post('http://127.0.0.1:8000/api/prompts/', { title, content });
      router.push('/');
    } catch (error) {
      console.error('There was an error adding the prompt!', error);
    }
  };

  return (
    <div>
      <h1>Add a New Prompt</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit">Add Prompt</button>
      </form>
    </div>
  );
};

export default AddPrompt;
