import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

type ImageItem = {
  id: string;
  download_url: string;
}

type ImageSliderState = {
  images: ImageItem[];
  currentSlide: number;
  loading: boolean;
  errorMsg: string | null;
}

const initialState: ImageSliderState = {
  images: [],
  currentSlide: 0,
  loading: false,
  errorMsg: null,
};


export const fetchImages = createAsyncThunk(
  'imageSlider/fetchImages',
  async (url: string) => {
    const response = await fetch(url);
    return (await response.json()) as ImageItem[];
  }
);

const imageSliderSlice = createSlice({
  name: 'imageSlider',
  initialState,
  reducers: {
    setCurrentSlide: (state, action: PayloadAction<number>) => {
      state.currentSlide = action.payload;
    },
    handleNextSlide: (state) => {
      state.currentSlide = state.currentSlide === state.images.length - 1 ? 0 : state.currentSlide + 1;
    },
    handlePreviousSlide: (state) => {
      state.currentSlide = state.currentSlide === 0 ? state.images.length - 1 : state.currentSlide - 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchImages.pending, (state) => {
        state.loading = true;
        state.errorMsg = null;
      })
      .addCase(fetchImages.fulfilled, (state, action: PayloadAction<ImageItem[]>) => {
        state.images = action.payload;
        state.loading = false;
      })
      .addCase(fetchImages.rejected, (state, action) => {
        state.errorMsg = action.error.message || 'Failed to fetch images';
        state.loading = false;
      });
  },
});

export const { setCurrentSlide, handleNextSlide, handlePreviousSlide } = imageSliderSlice.actions;

export default imageSliderSlice.reducer;
