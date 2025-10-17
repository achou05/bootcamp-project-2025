
type Blog = {
  title: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  slug: string;
};

const blogs: Blog[] = [
  {
    title: "Clash Royale",
    date: "October 2025",
    description:
      "Open if you dare!!!",
    image: "./pictures/images.png",
    imageAlt: "A photo of the Clash Royale game",
    slug: "first-website",
  },
  {
    title: "Learning TypeScript",
    date: "October 2025",
    description:
      "A reflection on learning TypeScript and DOM manipulation for Milestone 1 of the bootcamp.",
    image: "./pictures/media.png",
    imageAlt: "Code on a laptop screen",
    slug: "learning-typescript",
  },
];

const blogContainer = document.getElementById("blog-container");

blogs.forEach((blog) => {
  const blogDiv = document.createElement("div");
  blogDiv.className = "blog-post";

  const title = document.createElement("h2");
  title.textContent = blog.title;

  const date = document.createElement("p");
  date.textContent = blog.date;
  date.style.fontStyle = "italic";

  const img = document.createElement("img");
  img.src = blog.image;
  img.alt = blog.imageAlt;
  img.className = "blog-image";

  const desc = document.createElement("p");
  desc.textContent = blog.description;

  const link = document.createElement("a");
  link.href = `blogs/${blog.slug}.html`;
  link.textContent = "Read More →";

  blogDiv.appendChild(title);
  blogDiv.appendChild(date);
  blogDiv.appendChild(img);
  blogDiv.appendChild(desc);
  blogDiv.appendChild(link);

  blogContainer?.appendChild(blogDiv);
});
