const title = document.getElementById('blogTitle');
const article = document.getElementById('blogArticle');
const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const image = document.querySelector("#blogImage");
    console.log(image.files);
    const reader = new FileReader();
    var blogList = JSON.parse(sessionStorage.getItem("blogs")) || [];
    reader.addEventListener("load", () => {
        //console.log(reader.result);
        var blog = { title: title.value, article: article.value, image: reader.result }
        blogList.push(blog)
        sessionStorage.setItem("blogs", JSON.stringify(blogList));
    });
    reader.readAsDataURL(image.files[0]);

    //redirect to index page
    window.location.replace("index.html");
})



