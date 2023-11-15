const Post = require('../models/post');
const Comment = require('../models/comment');

exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching posts' });
  }
};

exports.getPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching the post' });
  }
};

exports.createPost = async (req, res) => {
  try {
    const post = new Post(req.body);
    await post.save();
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while creating the post' });
  }
};

exports.createComment = async (req, res) => {
  try {
    const comment = new Comment({
      post: req.params.postId,
      ...req.body
    });
    await comment.save();
    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while creating the comment' });
  }
};