import 'react-cmdk/dist/cmdk.css'
import React, { useState } from 'react'
import CommandPalette from 'react-cmdk'
import { HomeIcon, PencilIcon, PhoneIcon } from 'lucide-react'
import { search } from 'fast-fuzzy'

interface MenuProps {
  open: boolean
  setOpen: (open: boolean) => void
}

const MENU_ITEMS = [
  {
    id: 'home',
    children: 'Home',
    icon: HomeIcon,
    href: '/'
  },
  {
    id: 'projects',
    children: 'Projects',
    icon: PencilIcon,
    href: '/projects'
  },
  {
    id: 'contact',
    children: 'Contact',
    icon: PhoneIcon,
    href: '/contact'
  }
]

export const Menu = ({ open, setOpen }: MenuProps) => {
  const [query, setQuery] = useState('')
  const results = query.length
    ? search(query, MENU_ITEMS, {
        keySelector: (item) => item.children
      })
    : MENU_ITEMS
  return (
    <CommandPalette
      onChangeOpen={setOpen}
      isOpen={open}
      onChangeSearch={setQuery}
      search={query}
    >
      <CommandPalette.List heading="General">
        {results.map((menuItem, i) => (
          <CommandPalette.ListItem {...menuItem} index={i} />
        ))}
      </CommandPalette.List>
    </CommandPalette>
  )
}
