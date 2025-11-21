# 📦 React Integration Installation Guide - OpenCart Certificates Module

**Version:** 2.0 (React Integration)
**Date:** November 21, 2025
**OpenCart:** 2.x / 3.x
**Technology Stack:** React 18 + Vite + TypeScript + OpenCart PHP

---

## 📋 Table of Contents

1. [Overview](#overview)
2. [Architecture](#architecture)
3. [Prerequisites](#prerequisites)
4. [Installation Steps](#installation-steps)
5. [Configuration](#configuration)
6. [Testing](#testing)
7. [Troubleshooting](#troubleshooting)
8. [Production Deployment](#production-deployment)

---

## 🎯 Overview

This module integrates a React-based certificates application with OpenCart using a hybrid approach:

- **Frontend:** React 18 SPA with beautiful UI
- **Backend:** OpenCart PHP for data, cart, checkout
- **SEO:** Server-rendered HTML content for search engines
- **Progressive Enhancement:** Works without JavaScript, enhanced with React

### Key Features

- ✅ 100% identical design to original React application
- ✅ SEO-friendly with crawlable HTML content
- ✅ Multiple pages: Home, Delivery, Corporate, Reviews, About, Activation
- ✅ OpenCart cart and checkout integration
- ✅ Real-time data from OpenCart database
- ✅ Secure API for React ↔ OpenCart communication

---

## 🏗️ Architecture

### Data Flow

```
┌─────────────────────────────────────────────────┐
│                   User Request                  │
│              /certificates/delivery             │
└────────────────────┬────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────┐
│           OpenCart Router (.htaccess)           │
│    Rewrites to: information/certificates/delivery│
└────────────────────┬────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────┐
│       OpenCart Controller (certificates.php)    │
│  • Loads data from database via model           │
│  • Generates SEO-friendly HTML                   │
│  • Prepares window.OPENCART_DATA                 │
│  • Renders template                              │
└────────────────────┬────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────┐
│        Template (certificates_react.tpl)        │
│  • Outputs SEO HTML content                     │
│  • Outputs <script>window.OPENCART_DATA</script>│
│  • Loads React CSS and JS bundles               │
│  • Includes hide-SEO-content script              │
└────────────────────┬────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────┐
│              React Application                  │
│  • Reads window.OPENCART_DATA                   │
│  • Renders appropriate page                      │
│  • Hides SEO content                             │
│  • Makes API calls to OpenCart                   │
└─────────────────────────────────────────────────┘
```

### Hybrid SEO Approach

1. **For Search Engine Bots:**
   - See fully rendered HTML with all content
   - Can crawl links, images, text
   - Proper meta tags, schema.org markup

2. **For Human Users:**
   - SEO content briefly visible
   - React loads and mounts
   - SEO content hidden via JavaScript
   - Beautiful React UI takes over

3. **Fallback:**
   - If React fails to load
   - SEO content remains visible
   - Site still works (basic functionality)

---

## 🔧 Prerequisites

### System Requirements

- **OpenCart:** 2.3+ or 3.x
- **PHP:** 7.0+ (7.4+ recommended)
- **MySQL:** 5.6+ or MariaDB 10.1+
- **Node.js:** 18+ (for building React app)
- **npm:** 9+ (for building React app)

### OpenCart Configuration

- SEO URLs must be enabled
- `.htaccess` URL rewriting active
- Write permissions on catalog directories

### React Build Files

You need the production build of the React application:

```bash
cd "Сертификаты на деплой полная версия 09112025"
npm install
npm run build
```

This creates:
- `build/assets/index-CT3lHhnO.css` (React styles)
- `build/assets/index-GKQx7YZW.js` (React JavaScript)

*Note: Hash in filename may differ based on build*

---

## 🚀 Installation Steps

### Step 1: Install Database Schema

Create the certificates tables in OpenCart database:

```bash
# Connect to MySQL
mysql -u your_user -p your_database

# Import schema
source opencart_files/install/certificates_schema.sql
```

Or via phpMyAdmin:
1. Open phpMyAdmin
2. Select your OpenCart database
3. Go to "Import" tab
4. Choose `certificates_schema.sql`
5. Click "Go"

**Verify installation:**

```sql
SHOW TABLES LIKE 'oc_certificate%';
```

Should show:
- `oc_certificate`
- `oc_certificate_order`
- `oc_certificate_transaction`

### Step 2: Upload OpenCart PHP Files

Copy controller, model, and template files:

```bash
# Navigate to OpenCart root
cd /path/to/opencart

# Copy controller
cp /path/to/opencart_files/catalog/controller/information/certificates.php \
   catalog/controller/information/

# Copy model (create directory if needed)
mkdir -p catalog/model/catalog
cp /path/to/opencart_files/catalog/model/catalog/certificate.php \
   catalog/model/catalog/

# Copy template (adjust for your theme)
cp /path/to/opencart_files/catalog/view/theme/default/template/information/certificates_react.tpl \
   catalog/view/theme/YOUR_THEME/template/information/

# Set permissions
chmod 644 catalog/controller/information/certificates.php
chmod 644 catalog/model/catalog/certificate.php
chmod 644 catalog/view/theme/YOUR_THEME/template/information/certificates_react.tpl
```

**Important:** Replace `YOUR_THEME` with your actual theme name (e.g., `default`, `journal`, etc.)

### Step 3: Deploy React Build Files

Copy React build assets to OpenCart:

```bash
# Create directory for React assets
mkdir -p catalog/view/javascript/certificates/assets

# Copy React build files
cp -r "Сертификаты на деплой полная версия 09112025/build/assets/"* \
      catalog/view/javascript/certificates/assets/

# Set permissions
chmod -R 644 catalog/view/javascript/certificates/assets/*
```

**Result:** React files at `/catalog/view/javascript/certificates/assets/`

### Step 4: Update File Paths in Controller

Edit `catalog/controller/information/certificates.php`:

Find these lines in each method:

```php
$data['react_css'] = '/Certificates20112025/assets/index-CT3lHhnO.css';
$data['react_js'] = '/Certificates20112025/assets/index-GKQx7YZW.js';
```

Replace with:

```php
$data['react_css'] = '/catalog/view/javascript/certificates/assets/index-CT3lHhnO.css';
$data['react_js'] = '/catalog/view/javascript/certificates/assets/index-GKQx7YZW.js';
```

**Note:** Update the hash (`CT3lHhnO` and `GKQx7YZW`) to match your actual build files!

### Step 5: Configure OpenCart SEO URLs

#### 5.1 Enable SEO URLs

1. Login to OpenCart Admin
2. Go to **System → Settings**
3. Click **Edit** on your store
4. Go to **Server** tab
5. Set **Use SEO URLs: Yes**
6. Click **Save**

#### 5.2 Add SEO URL Aliases

Go to **Catalog → SEO URL** and add:

| Query | Keyword | Store | Language |
|-------|---------|-------|----------|
| `information/certificates` | `certificates` | Default | Russian |
| `information/certificates/delivery` | `certificates/delivery` | Default | Russian |
| `information/certificates/corporate` | `certificates/corporate` | Default | Russian |
| `information/certificates/reviews` | `certificates/reviews` | Default | Russian |
| `information/certificates/about` | `certificates/about` | Default | Russian |
| `information/certificates/activation` | `certificates/activation` | Default | Russian |

**Or via SQL:**

```sql
INSERT INTO `oc_seo_url` (`store_id`, `language_id`, `query`, `keyword`) VALUES
(0, 1, 'information/certificates', 'certificates'),
(0, 1, 'information/certificates/delivery', 'certificates/delivery'),
(0, 1, 'information/certificates/corporate', 'certificates/corporate'),
(0, 1, 'information/certificates/reviews', 'certificates/reviews'),
(0, 1, 'information/certificates/about', 'certificates/about'),
(0, 1, 'information/certificates/activation', 'certificates/activation');
```

*Replace `language_id` with your Russian language ID (check `oc_language` table)*

### Step 6: Configure URL Rewriting

#### For Apache (.htaccess)

Ensure your `.htaccess` in OpenCart root has:

```apache
RewriteEngine On
RewriteBase /

Options +FollowSymlinks
Options -Indexes

# SEO URL Setup
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_URI} !.*\.(ico|gif|jpg|jpeg|png|js|css)
RewriteRule ^([^?]*) index.php?_route_=$1 [L,QSA]
```

#### For nginx

Add to your nginx config:

```nginx
location /certificates {
    try_files $uri $uri/ /index.php?route=information/certificates$is_args$args;
}

location ~ ^/certificates/(delivery|corporate|reviews|about|activation) {
    try_files $uri $uri/ /index.php?route=information/certificates/$1$is_args$args;
}
```

### Step 7: Add Menu Links

Edit your header template to add certificates link:

```php
// catalog/view/theme/YOUR_THEME/template/common/header.tpl

<li><a href="<?php echo $this->url->link('information/certificates'); ?>">
    Подарочные сертификаты
</a></li>
```

### Step 8: Clear OpenCart Cache

Clear all caches:

```bash
# Via command line
rm -rf system/storage/cache/*
rm -rf system/storage/modification/*

# Or via Admin Panel
# System → Maintenance → Clear Cache
```

---

## ⚙️ Configuration

### Update React App to Use OpenCart Data

Follow the detailed guide in `REACT_INTEGRATION_GUIDE.md` to:

1. Create `OpenCartContext` in React
2. Read `window.OPENCART_DATA` in App.tsx
3. Use OpenCart API service
4. Update components to use OpenCart data

**Key changes needed in React:**

```typescript
// src/App.tsx
const initialPage = window.OPENCART_DATA?.page || 'home'
const [currentPage, setCurrentPage] = useState(initialPage)
```

```typescript
// src/components/GiftOptionsSection.tsx
const { certificates } = useOpenCart()
```

After making React changes, rebuild:

```bash
npm run build
```

Then redeploy build files (Step 3).

### Configure Payment Gateway

Edit controller to add your payment gateway:

```php
// In certificates.php, api() method

case 'create_order':
    // ... create order

    // Redirect to payment
    $payment_url = $this->payment->getPaymentUrl($order_id);
    echo json_encode(array(
        'success' => true,
        'order_id' => $order_id,
        'redirect_url' => $payment_url
    ));
    break;
```

---

## 🧪 Testing

### Manual Testing Checklist

#### 1. Test All Pages Load

Visit each URL and verify it loads:

- [ ] `https://yoursite.com/certificates` - Home page
- [ ] `https://yoursite.com/certificates/delivery` - Delivery page
- [ ] `https://yoursite.com/certificates/corporate` - Corporate page
- [ ] `https://yoursite.com/certificates/reviews` - Reviews page
- [ ] `https://yoursite.com/certificates/about` - About page
- [ ] `https://yoursite.com/certificates/activation` - Activation page

#### 2. Test SEO Content

1. Disable JavaScript in browser (Chrome DevTools → Settings → Debugger → Disable JavaScript)
2. Visit `/certificates`
3. Verify you see HTML content with certificates
4. Re-enable JavaScript
5. Verify SEO content disappears and React loads

#### 3. Test Data Passing

1. Visit `/certificates`
2. Open browser console (F12)
3. Type: `window.OPENCART_DATA`
4. Verify object has:
   - `page: "index"`
   - `certificates: [...]`
   - `settings: {...}`
   - `urls: {...}`

#### 4. Test API Endpoint

```bash
# Test GET
curl https://yoursite.com/certificates/api?action=get_certificates

# Test POST
curl -X POST https://yoursite.com/certificates/api \
  -H "Content-Type: application/json" \
  -d '{"action":"add_to_cart","certificate_id":1,"quantity":1}'
```

Should return JSON responses.

#### 5. Test Add to Cart

1. Click "Выбрать" button on a certificate
2. Fill out form
3. Click purchase
4. Verify item added to OpenCart cart
5. Go to `/index.php?route=checkout/cart`
6. Verify certificate is in cart

#### 6. Test Mobile Responsiveness

Test on mobile devices or Chrome DevTools device emulation:

- [ ] Home page responsive
- [ ] Certificate cards stack properly
- [ ] Forms are usable
- [ ] Images load correctly

#### 7. Test Performance

Use Chrome DevTools Lighthouse:

- [ ] Performance score > 70
- [ ] SEO score > 90
- [ ] Best Practices score > 80
- [ ] Accessibility score > 80

### Automated Testing

Run tests from React app:

```bash
cd "Сертификаты на деплой полная версия 09112025"
npm test
```

---

## 🐛 Troubleshooting

### Problem: 404 Not Found on /certificates

**Causes:**
- SEO URLs not enabled
- `.htaccess` not working
- SEO URL alias not created

**Solutions:**
1. Check OpenCart Settings → Server → Use SEO URLs is Yes
2. Test `.htaccess`: Visit `/index.php?route=information/certificates` (should work)
3. Check SEO URL table has entry for `certificates`
4. Verify `.htaccess` has rewrite rules
5. Check Apache `mod_rewrite` is enabled: `apache2ctl -M | grep rewrite`

### Problem: React Doesn't Load

**Causes:**
- Wrong file paths
- Files not uploaded
- CORS issues

**Solutions:**
1. Check browser console for 404 errors
2. Verify files exist:
   ```bash
   ls catalog/view/javascript/certificates/assets/
   ```
3. Check paths in controller match actual file names
4. Test direct access: `https://yoursite.com/catalog/view/javascript/certificates/assets/index-CT3lHhnO.css`

### Problem: SEO Content Doesn't Hide

**Causes:**
- React didn't mount
- JavaScript errors
- React root not found

**Solutions:**
1. Open browser console, check for errors
2. Verify React renders: inspect `<div id="root">` - should have content
3. Check `window.OPENCART_DATA` is defined
4. Test React app standalone: `npm run dev`

### Problem: API Returns 404

**Causes:**
- Route not found
- Controller method missing

**Solutions:**
1. Test full route: `/index.php?route=information/certificates/api`
2. Check controller has public `api()` method
3. Check PHP error logs: `tail -f /var/log/apache2/error.log`

### Problem: Data Not Passing to React

**Causes:**
- JSON encoding error
- Data not set in controller

**Solutions:**
1. Check `window.OPENCART_DATA` in console
2. View page source, find `<script>window.OPENCART_DATA =`
3. Validate JSON: copy value and check on jsonlint.com
4. Check controller is setting `$data` variables
5. Check template is outputting JSON correctly

### Problem: Certificates Not Showing

**Causes:**
- Database empty
- Model not loading data
- React component not rendering

**Solutions:**
1. Check database has certificates:
   ```sql
   SELECT * FROM oc_certificate WHERE status = 1;
   ```
2. Add test data if needed
3. Check `window.OPENCART_DATA.certificates` in console
4. Verify React component receives data

### Problem: Images Not Loading

**Causes:**
- Wrong image paths
- Images not uploaded
- CORS issues

**Solutions:**
1. Check image URLs in browser Network tab
2. Verify images exist on server
3. Use full URLs if needed: `https://yoursite.com/image/...`
4. Check image paths in database

---

## 🚀 Production Deployment

### Pre-Deployment Checklist

- [ ] React app built with production mode (`npm run build`)
- [ ] All files uploaded to server
- [ ] Database schema installed
- [ ] SEO URLs configured
- [ ] `.htaccess` rewrite rules active
- [ ] File permissions set correctly
- [ ] Test data added to database
- [ ] All pages tested manually
- [ ] API endpoints tested
- [ ] Cart integration tested
- [ ] Mobile responsiveness verified
- [ ] Performance tested (Lighthouse)
- [ ] SEO content verified (crawlable)
- [ ] Error monitoring set up
- [ ] Backups created

### Performance Optimization

#### 1. Enable Gzip Compression

Add to `.htaccess`:

```apache
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css
    AddOutputFilterByType DEFLATE text/javascript application/javascript application/json
</IfModule>
```

#### 2. Enable Browser Caching

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

#### 3. Use CDN (Optional)

Upload React assets to CDN and update paths:

```php
$data['react_css'] = 'https://cdn.yoursite.com/certificates/assets/index-CT3lHhnO.css';
$data['react_js'] = 'https://cdn.yoursite.com/certificates/assets/index-GKQx7YZW.js';
```

#### 4. Optimize Images

Convert to WebP format:

```bash
# Convert all JPG/PNG to WebP
for f in *.{jpg,png}; do
    cwebp -q 80 "$f" -o "${f%.*}.webp"
done
```

Update image references in React components.

### Security Hardening

1. **Validate all inputs** in controller `api()` method
2. **Use prepared statements** (already done in model)
3. **Add CSRF protection** for API calls
4. **Rate limit** API endpoint to prevent abuse
5. **Sanitize output** to prevent XSS

Example CSRF protection:

```php
// In api() method
if (!isset($post_data['csrf_token']) ||
    $post_data['csrf_token'] !== $this->session->data['csrf_token']) {
    echo json_encode(array('success' => false, 'error' => 'Invalid token'));
    exit;
}
```

### Monitoring

Set up monitoring for:

- **Error logs:** `/var/log/apache2/error.log`
- **Access logs:** `/var/log/apache2/access.log`
- **Database slow queries**
- **API response times**
- **React load failures**

### Backup Strategy

Regular backups of:

1. **Database:** `mysqldump -u user -p opencart_db > backup.sql`
2. **Files:** `tar -czf opencart-backup.tar.gz catalog/`
3. **React source:** Keep Git repository updated

---

## 📚 Additional Resources

- **Routing Configuration:** See `ROUTING_CONFIGURATION.md`
- **React Integration:** See `REACT_INTEGRATION_GUIDE.md`
- **Old Installation Guide:** See `INSTALLATION_GUIDE.md` (non-React version)

---

## ✅ Installation Complete!

Your OpenCart certificates module with React integration is now installed.

**Next steps:**
1. Add certificate products to database
2. Configure payment gateway
3. Set up email notifications
4. Add analytics tracking
5. Launch and promote!

**Support:**
- Check documentation in `opencart_files/` directory
- Review React source code for customization
- Test thoroughly before going live

---

**Last updated:** November 21, 2025
**Version:** 2.0 (React Integration)
