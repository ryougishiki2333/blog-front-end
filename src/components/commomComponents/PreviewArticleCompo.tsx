import styled from "styled-components";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
import { find } from "lodash";

const Wrapper = styled.div`
  background: #d6aefb;
  margin: 20px;
  height: 200px;
`;

const Tags = styled.div`
  margin-left: 5px;
`;

const TagFilterBox = styled.div`
  display: flex;
  justify-content: left;
`;

type IFilter = {
  tag?: string;
  keyWord?: string;
};

const PreviewArticleCompo: React.FC<IFilter> = (props) => {
  const articleItem = useAppSelector((state) => state.article.value);
  const articleItemPublish = articleItem.filter((item) => {
    if (props.tag) {
      return item.articleState === 1 && find(item.tag, ["name", props.tag]);
    } else {
      return item.articleState === 1;
    }
  });

  const tagList = () => {
    return articleItemPublish[0].tag.map((item) => (
      <Tags key={item.id}>{item.name}</Tags>
    ));
  };

  return (
    <Link
      key={articleItemPublish[0].id}
      to={"/article/" + articleItemPublish[0].id}
    >
      <Wrapper>{articleItemPublish[0].title}</Wrapper>
      <TagFilterBox>{tagList()}</TagFilterBox>
    </Link>
  );
};

export default PreviewArticleCompo;
