import {configureStore} from "@reduxjs/toolkit";
import appearance from "~/store/appearance";

const store = configureStore({
    reducer: {
        appearance,
    }
})

export default store