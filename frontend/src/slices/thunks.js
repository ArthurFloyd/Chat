import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchInitialChannels = createAsyncThunk(
  'fetchInitialChannels',
  async (getServerChannels, { rejectWithValue }) => {
    try {
      const { data } = await getServerChannels();

      return data;
    } catch (error) {
      if (error.isAxiosError) {
        return rejectWithValue(error.response.status);
      }
      throw error;
    }
  },
);
export const fetchInitialMessages = createAsyncThunk(
  'fetchInitialMessages',
  async (getServerMessages, { rejectWithValue }) => {
    try {
      const { data } = await getServerMessages();

      return data;
    } catch (error) {
      if (error.isAxiosError) {
        return rejectWithValue(error.response.status);
      }
      throw error;
    }
  },
);
