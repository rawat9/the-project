'use client'

import {
  Navbar as NextUiNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from '@nextui-org/react'

export function Navbar() {
  return (
    <NextUiNavbar className="bg-transparent">
      <NavbarBrand>
        <p className="font-bold text-inherit">Expose</p>
      </NavbarBrand>
      {/* <NavbarContent className="hidden gap-4 sm:flex" justify="start">
        <NavbarItem>
          <Link color="foreground" href="#">
            Explore
          </Link>
        </NavbarItem>
      </NavbarContent> */}
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="/sign-in" size='sm'>Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="/sign-up" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </NextUiNavbar>
  )
}
