import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faCalendar,
  faComment,
  faChevronLeft,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";

import { api } from "../../lib/axios";
import { setDistance } from "../../utils/formatDate";

import {
  Info,
  InfoBar,
  NavBar,
  PostContainer,
  PostContent,
  PostInfo,
} from "./styles";

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
          <Link to="/">
            <FontAwesomeIcon icon={faChevronLeft} />
            <span>VOLTAR</span>
          </Link>
          <Link to={post?.link}>
            <span>VER NO GITHUB</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </Link>
        </NavBar>

        <h1>{post?.title}</h1>

        <InfoBar>
          <Info>
            <FontAwesomeIcon icon={faGithub} />
            <span>{post?.author}</span>
          </Info>
          <Info>
            <FontAwesomeIcon icon={faCalendar} />
            <span>{post.date}</span>
          </Info>
          <Info>
            <FontAwesomeIcon icon={faComment} />
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
