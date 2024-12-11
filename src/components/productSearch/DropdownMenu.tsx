import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

function DropdownMenu() {


  return (
    <Menu>
      <MenuButton className="w-20 h-11 bg-skyblue rounded-2xl flex justify-center items-center">
      <p className='text-2xl font-semibold'>정렬</p>
      <img className="pl-2" src='./public/images/Products/downIcon.svg'></img>
      </MenuButton>
      <MenuItems anchor="bottom" className="rounded-lg bg-skyblue mt-1 w-36 text-lg font-semibold">
        <MenuItem>
          <button className="block w-[80%] text-left">
            인기순
          </button>
        </MenuItem>
        <MenuItem>
          <button className="block">
            낮은 가격순
          </button>
        </MenuItem>
        <MenuItem>
          <button className="block">
            높은 가격순
          </button>
        </MenuItem>
        <MenuItem>
          <button className="block">
            최신 등록순
          </button>
        </MenuItem>
      </MenuItems>
    </Menu>
  )
}

export default DropdownMenu;