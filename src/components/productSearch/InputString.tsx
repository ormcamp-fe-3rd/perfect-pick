import { Input } from '@headlessui/react'

interface InputStringProps {
  width?: '200px' | '800px' | '300px';
}

function InputString({ width = '300px' }: InputStringProps) {
  const widthClass = {
    '200px': 'w-[200px]',
    '800px': 'w-[800px]',
    '300px': 'w-[300px]'
  }[width];

  return <Input name="full_name" type="text" className={`${widthClass} h-[39px] rounded bg-skyblue`} />
}

export default InputString;