import {configureStore} from "@reduxjs/toolkit";
import appearance from "~/store/appearance";
import modal from "~/store/modal";

const store = configureStore({
    reducer: {
        modal,
        appearance
    }
})

export default store