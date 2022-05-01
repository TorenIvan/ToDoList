import { List } from "../constants/types";

const modifyItemType = (itemKey: String, items: List): List => {
  const newItems = [...items];
  const index = newItems.findIndex(item => item.text == itemKey);
  const checked = newItems[index].checked == "checked" ? "unchecked" : "checked";
  newItems[index] = { ...newItems[index], checked: checked };
  return newItems;
};

export default modifyItemType;
