function viewBlog(){

    var blogs = JSON.parse(sessionStorage.getItem("blogs"));
    var postContent = "";
    for(i = 0; i < blogs.length; i++)
    {
        var title = blogs[i].title;
        var article = blogs[i].article;
        var image = blogs[i].image;
        postContent += '<div class="post col-md-4"><div class="post-thumbnail"><a href="#"><img src="'+image+'" alt="..." class="img-fluid"></a></div><div class="post-details"> <div class="post-meta d-flex justify-content-between"></div><a href="#"><h3 class="h4">'+title+'</h3></a><p class="text-muted">'+article+'</p></div></div>';
    }
    document.getElementById('content').innerHTML=postContent;

}