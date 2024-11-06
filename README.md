# Attach Live Website Link

https://celadon-toffee-2a4662.netlify.app/


# Attach Requirement Document Link

https://l.facebook.com/l.php?u=https%3A%2F%2Fgithub.com%2FProgrammingHero1%2FB10-A8-gadget-heaven%2Fblob%2Fmain%2FBatch-10_Assignment-08.pdf%3Ffbclid%3DIwZXh0bgNhZW0CMTAAAR3mC6EYG3feeROo3IBA5Kr797YF9MQ5n7Sp_Tecxjj8dnuyK-ZfudRrhsg_aem_aBCjLWpYyZ193uad4aWxaw&h=AT18wdoWBm4m2P-0eKzaRZCPFg-eGQMmK2U_w4palznKWWE8iesFYJfxCpdyEt8LkZg_D0vM4ZEifFj2P-gn5q3B2zYS4YR-VWa2FNXvLv6jH4Ed19E37ceWcltEzmIIhxwS&__tn__=R-R&c[0]=AT3OroR_diLoSr76Z0eXrxD1iog6EFkP38tkq4wlZ8pFtya-tphMMqeqMb-vxPqadlJgSbWNKsjsqkOYhi5uSXbQnHufzueUSWwvfVfBXVWeEcCHbdFumsIgIvWhogAak6wxj9QAK35oIY9Gi-RNcRam5AWP2u5fUfsfOLft8wVcfJPcB-CjUSWGPGgP-llE1iOXjR1wotXPhaX5U34moZZXtfjLCx0w9uc

# List of React Fundamental concepts used in the project

1. Components: The project is divided into reusable components, such as product cards, modals, and navigation bars, to keep the code organized and modular.
2. State Management: State is used to handle real-time data changes, like adding products to the reading list or wishlist.
3. Props: Props are passed down from parent to child components to manage the flow of data, such as passing product information to display in each product card.
4. Event Handling: Event handlers (e.g., button clicks) are used to manage user interactions, like adding items to local storage.
5. Conditional Rendering: Components are conditionally rendered based on state values, such as showing or hiding modals or displaying out-of-stock products.

# What I have used for handling and managing data (context API/local storage)

For data handling and management, localStorage is used to store user-added items in the read list and wishlist. Functions like getItemFromLs and AddToLocalStorage retrieve and add data from and to localStorage. Additionally, a data array holds product information for easier access across components.

# 5 features of your website/project

1. Product Catalog with Categories: The website displays a catalog of products organized by category. Users can easily browse through categories like Computers, Phones, Smart Watches, and more, using a clean and user-friendly layout.

2. Wishlist and Read List: Users can add products to a "wishlist" and a "read list." Items are stored in localStorage, so users can return to their lists even after leaving the site. The wishlist and read list are managed with functions like AddToLocalStorageW and getItemFromLsW, allowing seamless addition and retrieval of items.

3. Dynamic Availability Display: Products display availability status, allowing users to see which items are currently in stock and which are unavailable. Unavailable items are visually indicated to avoid confusion.

4. Toast Notifications: Toast notifications are shown when users add items to their lists, giving real-time feedback on actions performed. For example, after adding a product to the read list, a toast message appears, confirming the addition.

5. Product Specifications: Each product comes with detailed specifications that are displayed when the product is clicked or viewed in detail. This helps users make informed decisions based on product specs like storage, RAM, and processor type.





