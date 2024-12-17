import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';

function DropdownMenu() {
  return (
    <Menu>
      <MenuButton className="flex h-11 w-20 items-center justify-center rounded-2xl bg-skyblue">
        <p className="text-2xl font-semibold">정렬</p>
        <img className="pl-2" src="./public/images/Products/downIcon.svg"></img>
      </MenuButton>
      <MenuItems
        anchor="bottom"
        className="mt-1 w-36 rounded-lg bg-skyblue text-lg font-semibold"
      >
        <MenuItem>
          <button className="block w-[80%] text-left">인기순</button>
        </MenuItem>
        <MenuItem>
          <button className="block">낮은 가격순</button>
        </MenuItem>
        <MenuItem>
          <button className="block">높은 가격순</button>
        </MenuItem>
        <MenuItem>
          <button className="block">최신 등록순</button>
        </MenuItem>
      </MenuItems>
    </Menu>
  );
}

export default DropdownMenu;
