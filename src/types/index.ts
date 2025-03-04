// Folder and file to define your Types (This is the right way to do it)

// Type Guitar  definition
export type Guitar = {
    id: number
    name: string
    image: string
    description: string
    price: number
}

// Type CartItem  definition
// Inherits all the attributes from Guitar -> Using  'Guitar &'
export type CartItem = Guitar & {
    quantity: number
}

// Utility Types
// Inherits only some attributes from Guitar
// You can add new Attributes also with '&'
export type CartItemUtilityPick = Pick<Guitar, 'id' | 'name' | 'price'> & {
    quantity: number
}

// Utility Types
// Example 2 with 'Omit"
// It will omit certain attributes
export type CartItemUtilityOmit = Omit<Guitar, 'description' | 'price'> & {
    quantity: number
}