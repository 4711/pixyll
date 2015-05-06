---
layout: post
title: Custom domain with GitHub Pages
summary: Setting up a custom domain with GitHub Pages
---

## Adding a CNAME file to your repository

If you're using a custom domain to redirect your GitHub Pages site, you must create and commit a 
CNAME file to your GitHub Pages repository that contains the custom domain.

[See Github Help](https://help.github.com/articles/adding-a-cname-file-to-your-repository/)

## Configure a CNAME record with your DNS provider

To set up a custom subdomain, you must configure a CNAME record with your DNS provider, 
which may or may not be the same as your web hosting provider.

For more information on custom subdomains, see "About custom domains for GitHub Pages sites."

In cooperation with your DNS provider, create a CNAME record that points from that domain to username.github.io. 
Your DNS changes can take up to a full day to propagate.

To confirm that your CNAME record has been set correctly, use the dig command:

```
dig www.example.com +nostats +nocomments +nocmd
# ;www.example.com.                     IN      A
# www.example.com.              3592    IN      CNAME   username.github.io.
# username.github.io.           43192   IN      CNAME   github.map.fastly.net.
# github.map.fastly.net.        22      IN      A       199.27.76.133
```

[See Github Help](https://help.github.com/articles/tips-for-configuring-a-cname-record-with-your-dns-provider/)
