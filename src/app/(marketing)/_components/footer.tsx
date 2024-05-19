'use client'

import { Footer } from 'flowbite-react'

export function PageFooter() {
  return (
    <Footer container>
      <Footer.Copyright href="#" by="Expose™" year={2024} />
      <Footer.LinkGroup>
        {/* <Footer.Link href="#">About</Footer.Link>
        <Footer.Link href="#">Contact</Footer.Link> */}
      </Footer.LinkGroup>
    </Footer>
  )
}
