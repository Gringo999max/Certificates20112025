# React Integration Guide for OpenCart

This guide explains how to modify your React application to work with OpenCart data.

## Overview

The OpenCart controller passes data to React via `window.OPENCART_DATA`. Your React app should:

1. Read initial page from `window.OPENCART_DATA.page`
2. Use certificates, FAQs, reviews, etc. from `window.OPENCART_DATA`
3. Call OpenCart API for cart operations

## Step 1: Modify App.tsx

Update your `App.tsx` to read the initial page from OpenCart:

```typescript
// src/App.tsx
import React, { useState, useCallback, Suspense, useEffect } from 'react'
// ... other imports

// Declare global window.OPENCART_DATA type
declare global {
  interface Window {
    OPENCART_DATA?: {
      page: string
      certificates: any[]
      faq: any[]
      reviews: any[]
      howItWorks: any[]
      deliveryMethods: any[]
      paymentMethods: any[]
      corporateBenefits: any[]
      stats: any[]
      settings: {
        api_url: string
        cart_url: string
      }
      customer: {
        logged: boolean
        firstname: string
        email: string
      }
      urls: {
        cart: string
        checkout: string
        login: string
        register: string
      }
    }
  }
}

export default function App() {
  // Get initial page from OpenCart (default to 'home')
  const initialPage = window.OPENCART_DATA?.page || 'home'
  const [currentPage, setCurrentPage] = useState(initialPage)

  // Rest of your App component code...

  // Map OpenCart page names to React page names
  useEffect(() => {
    if (window.OPENCART_DATA?.page) {
      const pageMap: Record<string, string> = {
        'index': 'home',
        'delivery': 'delivery',
        'corporate': 'corporate',
        'reviews': 'reviews',
        'about': 'about',
        'activation': 'activation'
      }

      const reactPage = pageMap[window.OPENCART_DATA.page] || 'home'
      setCurrentPage(reactPage)
    }
  }, [])

  // ... rest of your component
}
```

## Step 2: Create OpenCart Data Context

Create a context to share OpenCart data across components:

```typescript
// src/contexts/OpenCartContext.tsx
import { createContext, useContext, ReactNode } from 'react'

interface OpenCartContextType {
  certificates: any[]
  faq: any[]
  reviews: any[]
  howItWorks: any[]
  settings: {
    api_url: string
    cart_url: string
  }
  customer: {
    logged: boolean
    firstname: string
    email: string
  }
  urls: {
    cart: string
    checkout: string
    login: string
    register: string
  }
}

const OpenCartContext = createContext<OpenCartContextType | null>(null)

export function OpenCartProvider({ children }: { children: ReactNode }) {
  const data = window.OPENCART_DATA || {}

  return (
    <OpenCartContext.Provider value={data as OpenCartContextType}>
      {children}
    </OpenCartContext.Provider>
  )
}

export function useOpenCart() {
  const context = useContext(OpenCartContext)
  if (!context) {
    throw new Error('useOpenCart must be used within OpenCartProvider')
  }
  return context
}
```

## Step 3: Update App.tsx to Use Context

Wrap your app with the OpenCartProvider:

```typescript
// src/App.tsx
import { OpenCartProvider } from './contexts/OpenCartContext'

export default function App() {
  // ... state and functions

  return (
    <ErrorBoundary fallback={ErrorFallback}>
      <OpenCartProvider>
        <CartProvider>
          <ErrorBoundary>
            {renderPage()}
          </ErrorBoundary>
          <FloatingCartButton />
          {/* ... */}
          <Toaster />
        </CartProvider>
      </OpenCartProvider>
    </ErrorBoundary>
  )
}
```

## Step 4: Use OpenCart Data in Components

### GiftOptionsSection Example

```typescript
// src/components/GiftOptionsSection.tsx
import { useOpenCart } from '../contexts/OpenCartContext'

export default function GiftOptionsSection() {
  const { certificates } = useOpenCart()

  // Use certificates from OpenCart instead of hardcoded data
  const displayCertificates = certificates.length > 0
    ? certificates
    : defaultCertificates // Fallback for development

  return (
    <section>
      {displayCertificates.map(cert => (
        <div key={cert.certificate_id}>
          <h3>{cert.name}</h3>
          <p>{cert.description}</p>
          <p>от {cert.price} ₽</p>
        </div>
      ))}
    </section>
  )
}
```

### FAQSection Example

```typescript
// src/components/FAQSection.tsx
import { useOpenCart } from '../contexts/OpenCartContext'

export default function FAQSection() {
  const { faq } = useOpenCart()

  const displayFAQ = faq.length > 0 ? faq : defaultFAQ

  return (
    <section>
      {displayFAQ.map((item, index) => (
        <div key={index}>
          <h3>{item.question}</h3>
          <p>{item.answer}</p>
        </div>
      ))}
    </section>
  )
}
```

## Step 5: Implement OpenCart API Integration

Create an API service to communicate with OpenCart:

```typescript
// src/services/opencart-api.ts

const API_URL = window.OPENCART_DATA?.settings?.api_url || '/certificates/api'

export interface AddToCartRequest {
  action: 'add_to_cart'
  certificate_id: number
  quantity: number
  recipient_name?: string
  recipient_email?: string
  message?: string
}

export interface CreateOrderRequest {
  action: 'create_order'
  certificate_id: number
  amount: number
  recipient_name: string
  recipient_email: string
  recipient_phone: string
  sender_name: string
  sender_email: string
  sender_phone: string
  message?: string
  delivery_method: string
}

export const openCartAPI = {
  async addToCart(data: AddToCartRequest) {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      return await response.json()
    } catch (error) {
      console.error('Error adding to cart:', error)
      throw error
    }
  },

  async createOrder(data: CreateOrderRequest) {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      return await response.json()
    } catch (error) {
      console.error('Error creating order:', error)
      throw error
    }
  },

  async getCertificates() {
    try {
      // If we have certificates from initial load, use them
      if (window.OPENCART_DATA?.certificates) {
        return window.OPENCART_DATA.certificates
      }

      // Otherwise fetch from API
      const response = await fetch(`${API_URL}?action=get_certificates`)

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      return await response.json()
    } catch (error) {
      console.error('Error fetching certificates:', error)
      throw error
    }
  },

  async activateCertificate(code: string) {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'activate_certificate',
          code: code
        })
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      return await response.json()
    } catch (error) {
      console.error('Error activating certificate:', error)
      throw error
    }
  }
}
```

## Step 6: Update Cart Context

Modify CartContext to use OpenCart API:

```typescript
// src/components/CartContext.tsx
import { createContext, useContext, useState, ReactNode } from 'react'
import { openCartAPI } from '../services/opencart-api'

interface CartContextType {
  items: CartItem[]
  addItem: (item: CartItem) => Promise<void>
  removeItem: (id: number) => void
  clearCart: () => void
  totalAmount: number
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  const addItem = async (item: CartItem) => {
    try {
      // Add to OpenCart via API
      const result = await openCartAPI.addToCart({
        action: 'add_to_cart',
        certificate_id: item.certificate_id,
        quantity: item.quantity,
        recipient_name: item.recipient_name,
        recipient_email: item.recipient_email,
        message: item.message
      })

      if (result.success) {
        // Update local state
        setItems(prev => [...prev, item])

        // Optionally redirect to cart
        if (window.OPENCART_DATA?.urls?.cart) {
          // window.location.href = window.OPENCART_DATA.urls.cart
        }
      }
    } catch (error) {
      console.error('Failed to add item to cart:', error)
      throw error
    }
  }

  // ... rest of cart functions

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, clearCart, totalAmount }}>
      {children}
    </CartContext.Provider>
  )
}
```

## Step 7: Update Certificate Purchase Flow

Modify your certificate purchase component:

```typescript
// Example: In your purchase button handler
const handlePurchase = async () => {
  try {
    const orderData = {
      action: 'create_order' as const,
      certificate_id: selectedCertificate.certificate_id,
      amount: selectedCertificate.price,
      recipient_name: formData.recipientName,
      recipient_email: formData.recipientEmail,
      recipient_phone: formData.recipientPhone,
      sender_name: formData.senderName,
      sender_email: formData.senderEmail,
      sender_phone: formData.senderPhone,
      message: formData.message,
      delivery_method: formData.deliveryMethod
    }

    const result = await openCartAPI.createOrder(orderData)

    if (result.success) {
      // Redirect to checkout or thank you page
      if (result.redirect_url) {
        window.location.href = result.redirect_url
      }
    } else {
      // Show error message
      alert(result.error || 'Ошибка при создании заказа')
    }
  } catch (error) {
    console.error('Purchase error:', error)
    alert('Произошла ошибка. Попробуйте еще раз.')
  }
}
```

## Step 8: Handle User Authentication

Check if user is logged in and show appropriate UI:

```typescript
// Example component
import { useOpenCart } from '../contexts/OpenCartContext'

export function UserGreeting() {
  const { customer } = useOpenCart()

  if (customer.logged) {
    return <div>Привет, {customer.firstname}!</div>
  }

  return (
    <div>
      <a href={window.OPENCART_DATA?.urls?.login}>Войти</a>
      {' или '}
      <a href={window.OPENCART_DATA?.urls?.register}>Зарегистрироваться</a>
    </div>
  )
}
```

## Step 9: Build and Deploy

After modifications, build your React app:

```bash
cd "Сертификаты на деплой полная версия 09112025"
npm run build
```

Copy build files to OpenCart:

```bash
# Copy to OpenCart directory
cp -r build/assets /path/to/opencart/catalog/view/javascript/certificates/

# Or for GitHub Pages preview
cp -r build/* /path/to/opencart/certificates-react/
```

Update file paths in controller if needed:

```php
// opencart_files/catalog/controller/information/certificates.php
$data['react_css'] = '/catalog/view/javascript/certificates/assets/index-CT3lHhnO.css';
$data['react_js'] = '/catalog/view/javascript/certificates/assets/index-GKQx7YZW.js';
```

## Step 10: Testing

Test the integration:

1. **Test initial page load:**
   - Visit `/certificates` - should show home page
   - Visit `/certificates/delivery` - should show delivery page
   - Visit `/certificates/corporate` - should show corporate page

2. **Test data passing:**
   - Open browser console
   - Check `window.OPENCART_DATA` exists and has correct data
   - Verify certificates are displayed from OpenCart

3. **Test API integration:**
   - Try adding certificate to cart
   - Check OpenCart cart for added item
   - Test creating an order

4. **Test SEO content:**
   - Disable JavaScript in browser
   - Verify SEO content is visible
   - Re-enable JavaScript
   - Verify SEO content hides and React loads

5. **Test user authentication:**
   - Test as guest user
   - Login to OpenCart
   - Verify user name displays in React

## Troubleshooting

### React doesn't see OpenCart data

Check:
- `window.OPENCART_DATA` is defined before React loads
- Template outputs JavaScript with data before React script
- JSON encoding is correct (no syntax errors)

### API calls fail

Check:
- API URL is correct: `window.OPENCART_DATA.settings.api_url`
- OpenCart controller has `api()` method
- CORS headers if needed
- PHP errors in OpenCart logs

### SEO content doesn't hide

Check:
- React is mounting to `#root` element
- JavaScript console for errors
- SEO hide script is executing
- React renders content successfully

### Navigation doesn't work

Check:
- Each OpenCart route is configured
- SEO URLs are set up
- `.htaccess` rewrite rules active
- Links use correct URLs

## Production Checklist

Before deploying to production:

- [ ] Build React app with production mode: `npm run build`
- [ ] Copy all assets to OpenCart directory
- [ ] Update file paths in controller
- [ ] Test all pages load correctly
- [ ] Test API integration thoroughly
- [ ] Verify SEO content works (Google Search Console)
- [ ] Test on mobile devices
- [ ] Check page load performance
- [ ] Enable caching for assets
- [ ] Set up error monitoring
- [ ] Test checkout flow end-to-end
- [ ] Verify email notifications work
- [ ] Test certificate activation
- [ ] Check analytics tracking

## Summary

Your React app is now integrated with OpenCart:

1. ✅ Reads initial page from `window.OPENCART_DATA.page`
2. ✅ Uses certificates, FAQs, reviews from OpenCart
3. ✅ Communicates with OpenCart via API
4. ✅ Works with OpenCart cart and checkout
5. ✅ Respects user authentication
6. ✅ SEO-friendly with fallback content

**Next:** See `ROUTING_CONFIGURATION.md` for URL setup and `INSTALLATION_GUIDE.md` for deployment.
