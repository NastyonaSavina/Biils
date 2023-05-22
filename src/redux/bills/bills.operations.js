import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';



axios.defaults.baseURL = 'https://bill-api-zg1a.onrender.com/api/bills';

export const fetchBills = createAsyncThunk(
  'bills/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
        const response = await axios.get('/');
      return response.data.bills;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addBill = createAsyncThunk(
  'bills/addBill',
  async (newBill, thunkAPI) => {
    try {
      const response = await axios.post('/', newBill);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateStatusBill = createAsyncThunk(
  'bills/updateStatus',
  async (billId, thunkAPI) => {
    try {
      const response = await axios.patch(`/${billId}/paid`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
