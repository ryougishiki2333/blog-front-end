import styled from "styled-components";
import CatalogBar from "../lefterBar/CatalogBar";
import SubscribeBar from "../lefterBar/SubscribeBar";
import OtherLinkBar from "../lefterBar/OtherLinkBar";
import ArticleZone from "../righterZone/ArticleZone";
import WelcomeWrapper from "../globalWrapper/WelcomeWrapper";
import ContentWrapper from "../globalWrapper/ContentWrapper";
import LefterWrapper from "../globalWrapper/LefterWrapper";
import RighterWrapper from "../globalWrapper/RighterWrapper";

const ArticlePageDetail: React.FC = () => {
  return (
    <>
      <WelcomeWrapper />
      <ContentWrapper>
        <LefterWrapper>
          <CatalogBar />
          <OtherLinkBar />
          <SubscribeBar />
        </LefterWrapper>
        <RighterWrapper>
          <ArticleZone></ArticleZone>
        </RighterWrapper>
      </ContentWrapper>
    </>
  );
};

export default ArticlePageDetail;
