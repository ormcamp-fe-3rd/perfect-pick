import { Checkbox } from '@headlessui/react'
import clsx from 'clsx'
import { Fragment, useState } from 'react'

function CheckBox() {
  const [enabled, setEnabled] = useState(false)

  return (
    <Checkbox checked={enabled} onChange={setEnabled} as={Fragment}>
      {({ checked, disabled }) => (
        <span
          className={clsx(
            'block size-6 rounded bg-skyblue',
            checked && !disabled && 'bg-skyblue',
            disabled && 'cursor-not-allowed opacity-50'
          )}
        >
          <svg className={clsx('stroke-black', checked ? 'opacity-100' : 'opacity-0')} viewBox="0 0 14 14" fill="none">
            <path d="M3 8L6 11L11 3.5" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      )}
    </Checkbox>
  )
}

export default CheckBox;