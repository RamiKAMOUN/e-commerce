import React, { useEffect,useCallback } from "react";
import { useDispatch } from "react-redux";
import {getScategories} from "../../features/scategorieSlice";
import AfficheScategories from "./AfficheScategories";

const Listscategories = () => {

const dispatch = useDispatch();

const catFetch = useCallback(() => {

dispatch(getScategories());

}, [dispatch])

useEffect(() => {
  catFetch()
}, [catFetch])

return (
<div>
<AfficheScategories/>
</div>
)
}
export default Listscategories