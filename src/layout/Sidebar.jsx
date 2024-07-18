import AddItemForm from "../components/AddItemForm";
import ButtonGroup from "../components/ButtonGroup";
import { useItemsStore } from "../stores/itemsStore";

const Sidebar = () => {
  const addItem = useItemsStore((state) => state.addItem);

  return (
    <div className="sidebar">
      <AddItemForm onAddItem={addItem} />
      <ButtonGroup />
    </div>
  );
};

export default Sidebar;
