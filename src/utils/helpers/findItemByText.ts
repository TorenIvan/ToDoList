import { List } from "../constants/types";

const findItemByText = (itemKey: String, items: List): String | false => {
  if (items.some(element => element.text == itemKey)) return itemKey;
  return false;
};

export default findItemByText;
