import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import AxiosConfig from "../../utils/axiosConfig"
import { AxiosError } from "axios";

export type KnownError = {
  message: string;
  description: string;
  code: number | undefined;
};

const initialState = {
  pets: { message: "", status: "" },
  isLoading: false,
  isError: false,
  errorMessage: "",
  isSuccess: false,
  successMessage: ""
}

export const fetchGetPets: any = createAsyncThunk('pets/getPets', async (_, { rejectWithValue }) => {
  try {
    const response = await AxiosConfig.get('/random')
    return response.data
  } catch (err) {
    const error: AxiosError<KnownError> = err as any;
    if (!error.response) {
      throw err;
    }
    return rejectWithValue(error.response.data);
  }
})

const petsSlice = createSlice({
  name: "petsSlice",
  initialState,
  reducers: {
    resetPetList(state) {
      state = initialState
    },
    cleanErrors(state) {
      state = {
        ...state,
        isError: false,
        errorMessage: ""
      }
    },
    cleanSuccess(state) {
      state = {
        ...state,
        isSuccess: false,
        successMessage: ""
      }
    },
    setPetsList(state, action) {
      state.pets = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGetPets.pending, (state) => {
      state.isLoading = true
    })
      .addCase(fetchGetPets.fulfilled, (state, action) => {
        state.pets = action.payload,
          state.isLoading = false
      })
      .addCase(fetchGetPets.rejected, (state, action) => {
        console.error(
          `%c ${action}`,
          "color: purple; font-size: x-large; background: white"
        );

        state.isError = true,
          state.errorMessage = "get request error"
        state.isLoading = false
      })
  }
})

export const {
  cleanErrors,
  cleanSuccess,
  resetPetList
} = petsSlice.actions

export default petsSlice.reducer