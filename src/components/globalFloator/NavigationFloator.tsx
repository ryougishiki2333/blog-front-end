import styled from "styled-components";
import ViviButtonCompo from "../commomComponents/ViviButtonCompo";
import Stack from "@mui/material/Stack";
import AvatarCompo from "../commomComponents/AvatarCompo";
import img from "../../assets/img/img.jpg";
import { RootState } from "src/store/store";
import { useAppSelector } from "../../store/hooks";
import sample from "lodash/sample";
import { useState } from "react";

const Wrapper = styled.div`
  padding: 3px;
  height: 46px;
  width: 100%;
  position: sticky;
  top: 0px;
  background: linear-gradient(
    87deg,
    #0062be -14.19%,
    rgba(146, 86, 150, 0.979167) 24.76%,
    #9b2e51 95.87%,
    #8c062b 125.1%
  );
  display: flex;
  justify-content: space-between;
`;

const LeftWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const RightWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const NavigationFloator: React.FC = () => {
  const selectArticle = (state: RootState) => state.article.value;
  const article = useAppSelector(selectArticle);
  const randomId = () => {
    const tem = sample(article.filter((item) => item.articleState === 1));
    return tem ? tem.id : "";
  };

  const [to, setTo] = useState(randomId());

  return (
    <Wrapper>
      <LeftWrapper>
        <Stack direction="row" spacing={2}>
          <ViviButtonCompo
            fontSize={18}
            to={"/main/mainPage"}
            text={"Vivi的小站"}
          />
        </Stack>
      </LeftWrapper>
      <RightWrapper>
        <Stack direction="row" spacing={2}>
          <ViviButtonCompo
            to={`/article/${to}`}
            text={"随机 | Random"}
            onClick={() => {
              setTo(randomId());
            }}
          />
          <ViviButtonCompo to={"/main/filterPage"} text={"目录 | Category"} />
          <ViviButtonCompo to={"/main/aboutPage"} text={"打赏 | Support"} />
          <AvatarCompo text={"CS"} sx={undefined} img={img} />
        </Stack>
      </RightWrapper>
    </Wrapper>
  );
};

export default NavigationFloator;
