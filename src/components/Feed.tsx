import { Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getPosts } from "../utils/firebase";
import Post from "./Post";

interface IPost {
  id: string;
  content: any;
}

const Feed = () => {
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    const getAll = async () => {
      const posts = await getPosts();

      setPosts(
        posts.map((doc: any) => {
          //   console.log(doc);
          return {
            id: doc.id,
            content: doc.data,
          };
        })
      );
    };
    getAll();
  }, []);

  return (
    <Stack
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {posts.map(({ id, content }) => (
        <Post
          key={id}
          id={id}
          title={content.title}
          image={content.imageURL}
          timestamp={content.timestamp.toDate().toLocaleString()}
          body={content.body}
          user={content.user}
        />
      ))}
    </Stack>
  );
};

export default Feed;
