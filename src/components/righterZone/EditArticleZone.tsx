import styled from "styled-components";
import { zoneStyleTitle, zoneStyleWrapper } from "./zoneStyle";
import SvgTitleCompo from "../commomComponents/SvgTitleCompo";
import ViviButtonCompo from "../commomComponents/ViviButtonCompo";
import "@wangeditor/editor/dist/css/style.css";
import { Editor, Toolbar } from "@wangeditor/editor-for-react";
import { IDomEditor, IEditorConfig, IToolbarConfig } from "@wangeditor/editor";
import React, { useState, useEffect } from "react";
import { Input } from "@mui/material";
import ManageLeftButtonCompo from "../commomComponents/ViviButtonCompo";
import Switch from "@mui/material/Switch";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { RootState } from "../../store/store";
import { ITag } from "src/types/dataType";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

const selectArticle = (state: RootState) => state.article.value;
const selectTag = (state: RootState) => state.tag.value;

const TagBox = styled.div`
  display: flex;
  margin-right: 10px;
`;

const Wrapper = styled.div`
  ${zoneStyleWrapper}
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: right;
`;

const EditArticleZone: React.FC = () => {
  // editor 实例
  const [editor, setEditor] = useState<IDomEditor | null>(null); // TS 语法

  // 工具栏配置
  const toolbarConfig: Partial<IToolbarConfig> = {}; // TS 语法

  // 编辑器配置
  const editorConfig: Partial<IEditorConfig> = {
    placeholder: "请输入内容...",
  };

  // 及时销毁 editor ，重要！
  useEffect(() => {
    return () => {
      if (editor == null) return;
      editor.destroy();
      setEditor(null);
    };
  }, [editor]);

  // 关于modal开合逻辑
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // 关于初始数据的逻辑
  const article = useAppSelector(selectArticle);
  const tag = useAppSelector(selectTag);

  const draftArticleData = article.filter(
    (article) => article.articleState === 0
  );

  const [title, setTitle] = useState(() =>
    draftArticleData && draftArticleData.length ? draftArticleData[0].title : ""
  );
  const [content, setContent] = useState(() =>
    draftArticleData && draftArticleData.length
      ? draftArticleData[0].content
      : ""
  );
  const [articleTag, setArticleTag] = useState(() =>
    draftArticleData && draftArticleData.length ? draftArticleData[0].tag : []
  );

  // 关于onChange
  const handleEditorChange = (editor: IDomEditor) => {
    setContent(editor.getHtml());
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleTagChange = (
    event: React.SyntheticEvent,
    value: Array<string>
  ) => {
    setArticleTag(value);
  };

  const dispatch = useAppDispatch();

  return (
    <>
      <Wrapper>
        <SvgTitleCompo text="Editing" />
        <div>文章标题</div>
        <Input
          value={title}
          onChange={handleTitleChange}
          placeholder={"请输入内容..."}
        />
        <div>文章正文</div>
        <div style={{ border: "1px solid #ccc", zIndex: 100 }}>
          <Toolbar
            editor={editor}
            defaultConfig={toolbarConfig}
            mode="default"
            style={{ borderBottom: "1px solid #ccc" }}
          />
          <Editor
            defaultConfig={editorConfig}
            value={content}
            onCreated={setEditor}
            onChange={handleEditorChange}
            mode="default"
            style={{ height: "500px", overflowY: "hidden" }}
          />
        </div>
        <div style={{ marginTop: "15px" }}>{content}</div>
      </Wrapper>

      <Wrapper>
        <SvgTitleCompo text="Tag" />
        <Autocomplete
          multiple
          limitTags={2}
          id="multiple-limit-tags"
          options={tag}
          value={[...articleTag]}
          getOptionLabel={(option) => option}
          renderInput={(params) => (
            <TextField {...params} label="limitTags" placeholder="Favorites" />
          )}
          onChange={handleTagChange}
        />

        <ButtonBox>
          <ManageLeftButtonCompo
            onClick={handleClickOpen}
            text="编辑"
            color="#000000"
          />
        </ButtonBox>
      </Wrapper>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>修改Tag</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>取消</Button>
          <Button onClick={handleClose}>提交</Button>
        </DialogActions>
      </Dialog>

      <Wrapper>
        <SvgTitleCompo text="Controling" />
        <ButtonBox>
          <ViviButtonCompo text="保存" color="#000000" />
          <ViviButtonCompo text="删除" color="#000000" />
          <ViviButtonCompo text="发布" color="#000000" />
        </ButtonBox>
      </Wrapper>
    </>
  );
};

export default EditArticleZone;
