import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { api } from "../../../../lib/axios";
import { Card } from "./components/Card";
import {
  PostsContainer,
  PostsHeader,
  PostsInfo,
  PostsList,
  SearchBox,
} from "./styles";

interface IPost {
  title: string;
  content: string;
  updatedAt: string;
  number: number;
}

const searchInputSchema = z.object({
  query: z.string(),
});

type SearchInput = z.infer<typeof searchInputSchema>;

export function Posts() {
  const [posts, setPosts] = useState<IPost[]>([]);

  const { register, handleSubmit } = useForm<SearchInput>({
    resolver: zodResolver(searchInputSchema),
  });

  async function fetchPosts(query: string = "") {
    const response = await api.get("/search/issues", {
      params: {
        q: `repo:rafaelc77/ignite-github-blog ${query}`,
      },
    });

    const data = response.data.items;
    const updatedPosts = data.map((post: any) => {
      return {
        title: post.title,
        content: post.body,
        updatedAt: post.updated_at,
        number: post.number,
      };
    });

    setPosts(updatedPosts);
  }

  function handleSearch(data: SearchInput) {
    fetchPosts(data.query);
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
            {posts?.length === 1
              ? posts.length + " publicação"
              : posts?.length + " publicações"}
          </span>
        </PostsInfo>
      </PostsHeader>

      <SearchBox onSubmit={handleSubmit(handleSearch)}>
        <input
          type="text"
          placeholder="Buscar conteúdo"
          {...register("query")}
        />
      </SearchBox>

      <PostsList>
        {posts?.map((post) => {
          return (
            <Card
              key={post.number}
              title={post.title}
              updatedAt={post.updatedAt}
              content={post.content}
              number={post.number}
            />
          );
        })}
      </PostsList>
    </PostsContainer>
  );
}
