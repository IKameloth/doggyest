import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import AxiosConfig from "../../utils/axiosConfig"
import { AxiosError } from "axios";

export type KnownError = {
  message: string;
  description: string;
  code: number | undefined;
};

export interface InitialStateType {
  randomPet: {
    message: string,
    status: string
  },
  isLoading: boolean,
  isError: boolean,
  errorMessage: string,
  isSuccess: boolean,
  successMessage: string
}

const initialState: InitialStateType = {
  randomPet: { message: "", status: "" },
  isLoading: false,
  isError: false,
  errorMessage: "",
  isSuccess: false,
  successMessage: ""
}

export const fetchGetRandomPet: any = createAsyncThunk('pets/getRandomPet', async (_, { rejectWithValue }) => {
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
      state.isError = false
      state.errorMessage = ""
    },
    cleanSuccess(state) {
      state.isSuccess = false
      state.successMessage = ""
    },
    setRandomPet(state, action) {
      state.randomPet = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGetRandomPet.pending, (state) => {
      state.isLoading = true
    })
      .addCase(fetchGetRandomPet.fulfilled, (state, action) => {
        state.randomPet = action.payload
        state.isLoading = false
      })
      .addCase(fetchGetRandomPet.rejected, (state, action) => {
        console.error(
          `%c ${action}`,
          "color: purple; font-size: x-large; background: white"
        );
        state = {
          ...state,
          isError: true,
          errorMessage: "get request error",
          isLoading: false
        }
      })
  }
})

export const {
  cleanErrors,
  cleanSuccess,
  resetPetList
} = petsSlice.actions

export default petsSlice.reducer