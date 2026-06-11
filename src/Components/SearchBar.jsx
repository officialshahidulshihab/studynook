import {Label, SearchField} from "@heroui/react"

const SearchBar = () => {
  return (
    <div>
      <SearchField  name="search">
        <Label>Search</Label>
        <SearchField.Group className=" bg-[#1f3530] text-[#527c74]">
          <SearchField.SearchIcon className=" bg-[#1f3530] text-[#527c74]" />
          <SearchField.Input className=" bg-[#1f3530] text-[#527c74]" placeholder="Search..." />
          <SearchField.ClearButton className=" bg-[#1f3530] text-[#527c74]" />
        </SearchField.Group>
      </SearchField>
    </div>
  );
};

export default SearchBar;
