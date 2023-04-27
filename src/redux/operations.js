import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


axios.defaults.baseURL = "https://644a7a7a79279846dce9d2e4.mockapi.io";

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, thunkAPI) => {
      try {
        const response = await axios.get("/contacts");
        console.log(response)
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
);

export const addContact = createAsyncThunk(
    "contact/addContact",
    async (contact, thunkAPI) => {
      try {
        const response = await axios.post("/contacts",  contact );
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );

  export const deleteContact = createAsyncThunk(
    "contact/deleteContact",
    async (taskId, thunkAPI) => {
      try {
        const response = await axios.delete(`/contacts/${taskId}`);
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );