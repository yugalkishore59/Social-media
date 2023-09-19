import mongoose, { mongo } from "mongoose";
import PostMessage from "../models/postMessage.js";

export const getPosts=async (req,res)=>{
    try {
        const postMessages = await PostMessage.find()
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({message: error});
    }
}

export const createPost=async (req,res)=>{
    const post = req.body;
    const newPost = new PostMessage(post);
    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        console.log(error)
        res.status(500).json({error,created:false})
    }
}

export const updatePost=async (req,res)=>{
    const id = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');
    const post = req.body;

    try {
        const updatedPost = await PostMessage.findIdAndUpdate(id,{...post, id}, {new:true});
        res.status(201).json(updatedPost);
    } catch (error) {
        console.log(error)
        res.status(500).json({error,created:false})
    }
}

export const deletePost = async(req, res)=>{
    const id=req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');

    const deletedData = await PostMessage.findByIdAndRemove(id);
      if (!deletedData) {
        return res.status(404).json({ error: 'Data not found' });
      }else
      res.status(200).json({ message: 'Data deleted successfully' });

    try {

        
    } catch (error) {
        console.log(error)
        res.status(500).json({error})
    }
}