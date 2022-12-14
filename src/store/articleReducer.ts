import { createSlice } from "@reduxjs/toolkit";
import { IArticle } from "../types/dataType";
import { nanoid } from "@reduxjs/toolkit";

export const articleReducer = createSlice({
  name: "article",
  initialState: {
    value: [
      {
        title: "test0",
        content: "<p>test0</p>",
        tag: [
          { name: "miaomiaomiao", id: "123123" },
          { name: "gugugu", id: "1234" },
        ],
        articleState: 0,
        id: "123123",
        coverPicture:''
      },
      {
        title: "test1",
        content: "<p>test1123</p>",
        tag: [
          { name: "miaomiaomiao", id: "123123" },
          { name: "gugugu", id: "1234" },
        ],
        articleState: 1,
        id: "12341231123",
        coverPicture:''
      },
      {
        title: "test11",
        content: "<p>test1345</p>",
        tag: [
          { name: "gugugu", id: "1234" },
        ],
        articleState: 1,
        id: "123412311231",
        coverPicture:''
      },
      {
        title: "test111",
        content: "<p>test1456</p>",
        tag: [
          { name: "miaomiaomiao", id: "123123" },
        ],
        articleState: 1,
        id: "12341231123123",
        coverPicture:''
      },
      {
        title: "test1111",
        content: "<p>test1567</p>",
        tag: [
          { name: "miaomiaomiao", id: "123123" },
          { name: "gugugu", id: "1234" },
        ],
        articleState: 1,
        id: "123412311233456",
        coverPicture:''
      },
      {
        title: "test11111",
        content: "<p>test178978</p>",
        tag: [
          { name: "miaomiaomiao", id: "123123" },
          { name: "gugugu", id: "1234" },
        ],
        articleState: 1,
        id: "1234123112387568",
        coverPicture:''
      },
      {
        title: "test2",
        content: "<p>test290345903456</p>",
        tag: [
          { name: "miaomiaomiao", id: "123123" },
          { name: "gugugu", id: "1234" },
        ],
        articleState: 2,
        id: "1234123112311",
        coverPicture:''
      },
      {
        title: "test3",
        content: "<p>test3345345345</p>",
        tag: [
          { name: "miaomiaomiao", id: "123123" },
          { name: "gugugu", id: "1234" },
        ],
        articleState: 3,
        id: "12341231123123",
        coverPicture:''
      },
    ] as IArticle[],
  },
  reducers: {
    saveA: (state, action) => {
      // ???????????????,?????????????????????
      // ???????????????id,??????????????????id??????
      if (!action.payload.id) {
        action.payload.id = nanoid();
        state.value.push({ ...action.payload, articleState: 0 });
      } else {
        state.value.forEach((item) => {
          if (action.payload.id === item.id) {
            item.content = action.payload.content;
            item.title = action.payload.title;
            item.tag = action.payload.tag;
          }
        });
      }
    },
    publishA: (state, action) => {
      // ???????????????,?????????????????????
      // ???????????????id,??????????????????id??????,??????state
      if (!action.payload.id) {
        action.payload.id = nanoid();
        state.value.push({ ...action.payload, articleState: 1 });
      } else {
        state.value.forEach((item) => {
          if (action.payload.id === item.id) {
            item.content = action.payload.content;
            item.title = action.payload.title;
            item.tag = action.payload.tag;
            item.articleState = 1;
          }
        });
      }
    },
    deleteA: (state, action) => {
      // ???state,???????????????

      state.value.forEach((item) => {
        if (action.payload.id === item.id) {
          item.content = action.payload.content;
          item.title = action.payload.title;
          item.tag = action.payload.tag;
          item.articleState = 2;
        }
      });
    },
    archiveA: (state, action) => {
      // ???state,???????????????
      state.value.forEach((item) => {
        if (action.payload.id === item.id) {
          item.content = action.payload.content;
          item.title = action.payload.title;
          item.tag = action.payload.tag;
          item.articleState = 3;
        }
      });
    },
  },
});

export const { deleteA, publishA, archiveA, saveA } = articleReducer.actions;

export default articleReducer.reducer;
