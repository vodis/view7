import { UPDATE_SLIDESHOW_URL } from '../constants/slideshow.constants';

export const addSlideShowURL = (url) => (
    { type: UPDATE_SLIDESHOW_URL, payload: url }
);