//create through the command npx tsc src/blog.ts (to compile to js)
var blogs = [
    {
        title: "Clash Royale",
        date: "October 2025",
        description: "Open if you dare!!!",
        image: "./pictures/images.png",
        imageAlt: "A photo of the Clash Royale game",
        slug: "first-website",
    },
    {
        title: "Learning TypeScript",
        date: "October 2025",
        description: "A reflection on learning TypeScript and DOM manipulation for Milestone 1 of the bootcamp.",
        image: "./pictures/media.png",
        imageAlt: "Code on a laptop screen",
        slug: "learning-typescript",
    },
];
var blogContainer = document.getElementById("blog-container");
blogs.forEach(function (blog) {
    var blogDiv = document.createElement("div");
    blogDiv.className = "blog-post";
    var title = document.createElement("h2");
    title.textContent = blog.title;
    var date = document.createElement("p");
    date.textContent = blog.date;
    date.style.fontStyle = "italic";
    var img = document.createElement("img");
    img.src = blog.image;
    img.alt = blog.imageAlt;
    img.className = "blog-image";
    var desc = document.createElement("p");
    desc.textContent = blog.description;
    var link = document.createElement("a");
    link.href = "blogs/".concat(blog.slug, ".html");
    link.textContent = "Read More →";
    blogDiv.appendChild(title);
    blogDiv.appendChild(date);
    blogDiv.appendChild(img);
    blogDiv.appendChild(desc);
    blogDiv.appendChild(link);
    blogContainer === null || blogContainer === void 0 ? void 0 : blogContainer.appendChild(blogDiv);
});
