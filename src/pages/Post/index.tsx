import { FaCalendarDay, FaChevronLeft, FaComment } from "react-icons/fa";
import { BsBoxArrowUpRight, BsGithub } from "react-icons/bs";

import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

import { api } from "../../lib/axios";

import {
  Info,
  InfoBar,
  NavBar,
  PostContainer,
  PostContent,
  PostInfo,
} from "./styles";
import { useParams } from "react-router-dom";
import { setDistance } from "../../utils/formatDate";

interface IPost {
  title: string;
  author: string;
  date: string;
  commentsAmount: number;
  content: string;
  link: string;
}

export function Post() {
  const [post, setPost] = useState({} as IPost);
  const { number } = useParams();

  async function fetchPost() {
    const response = await api.get(
      `/repos/rafaelc77/ignite-github-blog/issues/${number}`
    );

    const updatedPost = {
      title: response.data.title,
      author: response.data.user.login,
      date: setDistance(response.data.updated_at),
      commentsAmount: response.data.comments,
      content: response.data.body,
      link: response.data.html_url,
    };

    setPost(updatedPost);
  }

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <PostContainer>
      <PostInfo>
        <NavBar>
          <a href="/">
            <FaChevronLeft />
            <span>VOLTAR</span>
          </a>
          <a href={post?.link}>
            <span>VER NO GITHUB</span>
            <BsBoxArrowUpRight />
          </a>
        </NavBar>

        <h1>{post?.title}</h1>

        <InfoBar>
          <Info>
            <BsGithub />
            <span>{post?.author}</span>
          </Info>
          <Info>
            <FaCalendarDay />
            <span>{post.date}</span>
          </Info>
          <Info>
            <FaComment />
            <span>
              {post!.commentsAmount <= 1
                ? post?.commentsAmount + " comentário"
                : post?.commentsAmount + " comentários"}
            </span>
          </Info>
        </InfoBar>
      </PostInfo>

      <PostContent>
        <ReactMarkdown>{post?.content}</ReactMarkdown>
      </PostContent>
    </PostContainer>
  );
}
