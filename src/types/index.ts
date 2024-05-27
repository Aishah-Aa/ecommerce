export type Product = {
  description: ReactNode
  id: string
  name: string
  categoryId: string
  image: string
  price: number
}

export type Category = {
  id: string
  name: string
}

export type User = {
  id: string
  firstName: string
  lastName: string
  phoneNumber: string
  email: string
  role: string
}

export const ROLE = {
  Admin: "Admin",
  Customer: "Customer"
} as const

export type DecodedUser = {
  aud: string
  emailaddress: string
  exp: number
  iss: string
  name: string
  nameidentifier: string
  role: keyof typeof ROLE
}
