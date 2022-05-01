import { List } from "../constants/types";

const filterListByItem = (itemKey: String, items: List): List => {
  const newItems = [...items].filter(item => item.text != itemKey);
  return newItems;
};

export default filterListByItem;
