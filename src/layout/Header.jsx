import Count from "../components/Count";
import Logo from "../components/Logo";
import { useItemsStore } from "../stores/itemsStore";

const Header = () => {
  const items = useItemsStore((state) => state.items);

  return (
    <header>
      <Logo />
      <Count
        numberOfItemsPacked={items.filter((item) => item.packed).length}
        totalNumberOfItems={items.length}
      />
    </header>
  );
};

export default Header;
