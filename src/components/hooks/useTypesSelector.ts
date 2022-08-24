import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/rootReduser";

// export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector