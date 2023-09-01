import React from 'react'

export const metadata = {
  title: 'Carts || OnlineStore - An Ecommerce App',
  description: 'An Ecommerce app',
}

export default function CartLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
