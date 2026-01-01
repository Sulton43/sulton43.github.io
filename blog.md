<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blog Sulton</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
</head>
<body>
    <header class="site-header">
        <div class="header-content container">
            <div class="logo">
                <a href="index.html">Sulton Nizomiddin's Blog</a>
            </div>
            
            <button class="menu-toggle" id="mobile-menu">
                <i class="fas fa-bars"></i>
            </button>

            <nav class="main-nav" id="nav-links">
                <ul>
                    <li><a href="blog.html">Blog</a></li>
                    <li><a href="read.html">Reads</a></li>
                    <li><a href="channnel.html">Channel</a></li>
                </ul>
            </nav>
        </div>
    </header>

---

layout: null


title: Blog

---

<main class="container py-5">
    <h1>Mening maqolalarim</h1>
    <div class="blog-posts-list">
        {% for post in site.posts %}
            <article class="post-preview mb-4">
                <span class="text-muted">{{ post.date | date: "%B %d, %Y" }}</span>
                <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
                <p>{{ post.excerpt | strip_html | truncatewords: 20 }}</p>
                <a href="{{ post.url }}" class="btn-read">Davomini o'qish →</a>
            </article>
        {% endfor %}
    </div>
</main>

    <footer class="site-footer">
        <div class="container">
            <p>&copy; 2025 Sulton Nizomiddin Blog</p>
        </div>
    </footer>

    <script src="js/script.js"></script>

</body>

</html>



