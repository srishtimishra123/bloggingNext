// pages/api/addPost.js

// Define a posts array to store submitted posts (simulating a database)
let posts = [];

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { title, content, author } = req.body;

    // Simple validation
    if (!title || !content || !author) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newPost = {
      id: posts.length + 1, // Generate a unique ID (in a real app, this would be handled differently)
      title,
      content,
      author,
    };

    posts.push(newPost); // Add the new post to the posts array (simulating storage)

    return res.status(201).json({ message: 'Post created successfully', post: newPost });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
