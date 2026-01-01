---
layout: null
title: Blog
---
<!DOCTYPE html>
<html lang="uz">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blog | Sulton Nizomiddin</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <header class="site-header">
        <div class="header-content container">
            <div class="logo"><a href="index.html">Sulton Nizomiddin's Blog</a></div>
            <nav class="main-nav">
                <ul>
                    <li><a href="blog.md" class="active">Blog</a></li>
                    <li><a href="read.html">Reads</a></li>
                    <li><a href="AboutMe.html">About Me</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <main class="container py-5" style="max-width: 800px; margin: 0 auto;">
        <h1 style="text-align: center; margin-bottom: 50px; font-weight: 300; letter-spacing: 2px;">BLOG</h1>
        
        <div class="blog-posts-list">
            {% for post in site.posts %}
                <div class="post-item" style="display: flex; align-items: baseline; margin-bottom: 15px;">
                    <span style="color: #999; font-family: monospace; min-width: 140px;">{{ post.date | date: "%d %B, %Y" }}</span>
                    <a href="{{ post.url | relative_url }}" style="text-decoration: none; color: #007bff; font-size: 1.1rem; font-weight: 500;">{{ post.title }}</a>
                </div>
            {% endfor %}
        </div>
    </main>

    <footer style="text-align: center; margin-top: 100px; color: #ccc; font-size: 0.8rem;">
        <p>&copy; 2026 Sulton Nizomiddin Blog</p>
    </footer>
</body>
</html>
