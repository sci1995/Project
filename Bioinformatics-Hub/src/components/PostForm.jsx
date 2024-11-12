import React, { useState } from 'react';

const PostForm = ({ addPost }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title) {
      addPost({ title, content, imageUrl, upvotes: 0, createdAt: new Date(), comments: [] });
      setTitle('');
      setContent('');
      setImageUrl('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
      <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Content" />
      <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder="Image URL" />
      <button type="submit">Create Post</button>
    </form>
  );
};

export default PostForm;
