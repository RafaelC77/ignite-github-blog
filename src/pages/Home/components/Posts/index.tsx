import { useEffect, useState } from "react";
import { api } from "../../../../lib/axios";
import { Card } from "./components/Card";
import {
  PostsContainer,
  PostsHeader,
  PostsInfo,
  PostsList,
  SearchBox,
} from "./styles";

interface Post {
  title: string;
  content: string;
  updatedAt: string;
  number: number;
}

interface IPosts {
  totalCount: number;
  postsList: Post[];
}

export function Posts() {
  const [posts, setPosts] = useState<IPosts | null>(null);

  async function fetchPosts(query?: string) {
    if (!query) {
      query = "";
    }

    const response = await api.get("/search/issues", {
      params: {
        q: `repo:rafaelc77/ignite-github-blog ${query}`,
      },
    });

    console.log(response.data);

    const updatedPosts = {
      totalCount: response.data.total_count,
      postsList: response.data.items.map((post: any) => {
        return {
          title: post.title,
          content: post.body,
          updatedAt: post.updated_at,
          number: post.number,
        };
      }),
    };

    setPosts(updatedPosts);
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <PostsContainer>
      <PostsHeader>
        <PostsInfo>
          <h2>Publicações</h2>
          <span>
            {posts?.totalCount === 1
              ? posts.totalCount + " publicação"
              : posts?.totalCount + " publicações"}
          </span>
        </PostsInfo>
      </PostsHeader>

      <SearchBox placeholder="Buscar conteúdo" />

      <PostsList>
        {posts?.postsList.map((post) => {
          return (
            <Card
              key={post.number}
              title={post.title}
              updatedAt={post.updatedAt}
              content={post.content}
            />
          );
        })}
      </PostsList>
    </PostsContainer>
  );
}
