import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const sendMessagesAsync = createAsyncThunk(
  "chat/sendMessage",
  async (message) => {
    const response = await axios.post("backend_api_url", { message });
    return response.data.reply;
  }
);

const initialState = {
  messages: [],
  isOpen: false,
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    toggleChat: (state) => {
      state.isOpen = !state.isOpen;
    },
    addUserMessage: (state, action) => {
      state.messages.push({ text: action.payload, sender: "user" });
    },
    addAssistantMessage: (state, action) => {
      state.messages.push({ text: action.payload, sender: "assistant" });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(sendMessagesAsync.fulfilled, (state, action) => {
      state.messages.push({ text: action.payload, sender: "assistant" });
    });
  },
});

export const { toggleChat, addUserMessage, addAssistantMessage } =
  chatSlice.actions;

export default chatSlice.reducer;
