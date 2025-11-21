# OpenCart Routing Configuration for React Integration

This guide explains how to configure OpenCart routing to work with the React certificates application.

## URL Structure

The certificates module uses the following URL structure:

```
Main page:       /certificates or /information/certificates
Delivery:        /certificates/delivery
Corporate:       /certificates/corporate
Reviews:         /certificates/reviews
About:           /certificates/about
Activation:      /certificates/activation
API Endpoint:    /certificates/api
```

## 1. Configure OpenCart SEO URLs

### Enable SEO URLs in OpenCart Admin

1. Go to **System → Settings → Edit Store**
2. Navigate to **Server** tab
3. Enable **Use SEO URLs: Yes**
4. Save settings

### Create SEO URL Aliases

Go to **Catalog → SEO URL** and add the following aliases:

| Query | Keyword (SEO URL) | Language |
|-------|------------------|----------|
| `information/certificates` | `certificates` | Russian/Default |
| `information/certificates/delivery` | `certificates/delivery` | Russian/Default |
| `information/certificates/corporate` | `certificates/corporate` | Russian/Default |
| `information/certificates/reviews` | `certificates/reviews` | Russian/Default |
| `information/certificates/about` | `certificates/about` | Russian/Default |
| `information/certificates/activation` | `certificates/activation` | Russian/Default |

### Alternative: Bulk Insert via SQL

```sql
-- Insert SEO URLs for certificates pages
INSERT INTO `oc_seo_url` (`store_id`, `language_id`, `query`, `keyword`) VALUES
(0, 1, 'information/certificates', 'certificates'),
(0, 1, 'information/certificates/delivery', 'certificates/delivery'),
(0, 1, 'information/certificates/corporate', 'certificates/corporate'),
(0, 1, 'information/certificates/reviews', 'certificates/reviews'),
(0, 1, 'information/certificates/about', 'certificates/about'),
(0, 1, 'information/certificates/activation', 'certificates/activation');
```

*Note: Replace `language_id` with your actual Russian language ID (usually 1)*

## 2. Configure .htaccess for URL Rewriting

Ensure your `.htaccess` file in OpenCart root has the following rules:

```apache
# OpenCart SEO URL Rewrite
RewriteEngine On
RewriteBase /

# Prevent direct access to directories
Options +FollowSymlinks
Options -Indexes

# SEO URL Setup
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_URI} !.*\.(ico|gif|jpg|jpeg|png|js|css)
RewriteRule ^([^?]*) index.php?_route_=$1 [L,QSA]
```

### For nginx servers:

Add to your nginx configuration:

```nginx
location / {
    try_files $uri $uri/ /index.php?$args;
}

location /certificates {
    try_files $uri $uri/ /index.php?route=information/certificates$is_args$args;
}

location /certificates/delivery {
    try_files $uri $uri/ /index.php?route=information/certificates/delivery$is_args$args;
}

location /certificates/corporate {
    try_files $uri $uri/ /index.php?route=information/certificates/corporate$is_args$args;
}

location /certificates/reviews {
    try_files $uri $uri/ /index.php?route=information/certificates/reviews$is_args$args;
}

location /certificates/about {
    try_files $uri $uri/ /index.php?route=information/certificates/about$is_args$args;
}

location /certificates/activation {
    try_files $uri $uri/ /index.php?route=information/certificates/activation$is_args$args;
}
```

## 3. Add Menu Links

### Add to Header Menu

Edit your header template or use OpenCart admin:

**Via Admin Panel:**
1. Go to **Design → Menus** (or use Layout module)
2. Add new menu item:
   - **Name:** Подарочные сертификаты
   - **Link:** `certificates` (will use SEO URL)
   - **Sort Order:** Set as needed

**Via Template (alternative):**

Edit `catalog/view/theme/[your-theme]/template/common/header.tpl`:

```html
<li><a href="<?php echo $this->url->link('information/certificates'); ?>">Подарочные сертификаты</a></li>
```

### Add to Footer Links

Edit `catalog/view/theme/[your-theme]/template/common/footer.tpl`:

```html
<div class="col-sm-3">
    <h5>Сертификаты</h5>
    <ul class="list-unstyled">
        <li><a href="<?php echo $this->url->link('information/certificates'); ?>">Купить сертификат</a></li>
        <li><a href="<?php echo $this->url->link('information/certificates/delivery'); ?>">Доставка и оплата</a></li>
        <li><a href="<?php echo $this->url->link('information/certificates/corporate'); ?>">Корпоративным клиентам</a></li>
        <li><a href="<?php echo $this->url->link('information/certificates/reviews'); ?>">Отзывы</a></li>
        <li><a href="<?php echo $this->url->link('information/certificates/activation'); ?>">Активация сертификата</a></li>
    </ul>
</div>
```

## 4. Configure React Router to Work with OpenCart URLs

### Option A: Server-Side Routing (Recommended)

Each OpenCart route loads React with different initial state. React renders appropriate content based on `window.OPENCART_DATA.page`.

**No React Router needed** - OpenCart handles all routing.

**Advantages:**
- Better SEO (unique URL per page)
- Proper browser back/forward buttons
- Each page loads with correct data
- No client-side route configuration

### Option B: Hybrid Routing (Advanced)

Use OpenCart for initial page load, React Router for navigation within app.

Modify `src/App.tsx`:

```typescript
import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'

function App() {
  // Get initial page from OpenCart
  const initialPage = window.OPENCART_DATA?.page || 'index'

  return (
    <BrowserRouter basename="/certificates">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/delivery" element={<DeliveryPage />} />
        <Route path="/corporate" element={<CorporatePage />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/activation" element={<ActivationPage />} />
      </Routes>
    </BrowserRouter>
  )
}
```

**Note:** This requires keeping React Router navigation in sync with OpenCart URLs.

## 5. API Endpoint Configuration

The API endpoint handles React ↔ OpenCart communication:

**URL:** `/certificates/api`

**Methods supported:**
- POST: Create orders, add to cart
- GET: Fetch certificates, FAQs, reviews

**Example React API call:**

```javascript
// Add certificate to cart
const response = await fetch('/certificates/api', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    action: 'add_to_cart',
    certificate_id: 1,
    quantity: 1
  })
})

const data = await response.json()
```

## 6. Testing Routes

After configuration, test each URL:

```bash
# Main page
curl -I https://yourdomain.com/certificates

# Delivery page
curl -I https://yourdomain.com/certificates/delivery

# Corporate page
curl -I https://yourdomain.com/certificates/corporate

# Reviews page
curl -I https://yourdomain.com/certificates/reviews

# About page
curl -I https://yourdomain.com/certificates/about

# Activation page
curl -I https://yourdomain.com/certificates/activation

# API endpoint
curl -X POST https://yourdomain.com/certificates/api \
  -H "Content-Type: application/json" \
  -d '{"action":"get_certificates"}'
```

All should return `200 OK` status.

## 7. React Build Files Location

Update controller to point to your React build files:

```php
// In certificates.php controller
$data['react_css'] = '/catalog/view/javascript/certificates/assets/index-CT3lHhnO.css';
$data['react_js'] = '/catalog/view/javascript/certificates/assets/index-GKQx7YZW.js';
```

**Deployment steps:**

1. Build React app: `npm run build`
2. Copy build files to OpenCart:
   ```bash
   cp -r build/assets opencart_root/catalog/view/javascript/certificates/
   ```
3. Update file paths in controller
4. Clear OpenCart cache: **System → Maintenance → Clear Cache**

## 8. Troubleshooting

### Issue: 404 Not Found on certificate pages

**Solution:**
- Check `.htaccess` rewrite rules are active
- Verify SEO URLs are enabled in OpenCart settings
- Clear OpenCart cache

### Issue: React doesn't load

**Solution:**
- Check browser console for errors
- Verify React file paths in controller are correct
- Check files exist at specified paths
- Ensure CORS is not blocking requests

### Issue: API returns 404

**Solution:**
- Verify route is correct: `information/certificates/api`
- Check controller has public `api()` method
- Test with full URL: `/index.php?route=information/certificates/api`

### Issue: SEO content not hiding when React loads

**Solution:**
- Check browser console for JavaScript errors
- Verify React is mounting to `#root` element
- Check `window.OPENCART_DATA` is defined

### Issue: Data not passing from OpenCart to React

**Solution:**
- Check `window.OPENCART_DATA` in browser console
- Verify controller is setting `$data['react_settings']`
- Check template is outputting JavaScript correctly

## 9. Performance Optimization

### Enable Gzip Compression

Add to `.htaccess`:

```apache
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
</IfModule>
```

### Enable Browser Caching

Add to `.htaccess`:

```apache
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
</IfModule>
```

### CDN Configuration (Optional)

Host React build files on CDN for better performance:

```php
$data['react_css'] = 'https://cdn.yourdomain.com/certificates/assets/index-CT3lHhnO.css';
$data['react_js'] = 'https://cdn.yourdomain.com/certificates/assets/index-GKQx7YZW.js';
```

## Summary

1. ✅ Enable SEO URLs in OpenCart settings
2. ✅ Create SEO URL aliases for all certificate pages
3. ✅ Configure `.htaccess` rewrite rules
4. ✅ Add menu links in header/footer
5. ✅ Deploy React build files to OpenCart directory
6. ✅ Update controller with correct file paths
7. ✅ Test all routes return 200 OK
8. ✅ Verify React loads and SEO content hides
9. ✅ Test API endpoint communication

**Next Steps:** See `INSTALLATION_GUIDE.md` for complete deployment instructions.
