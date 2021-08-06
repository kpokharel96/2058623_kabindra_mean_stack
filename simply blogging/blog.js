function add(){
    var blogList = JSON.parse(sessionStorage.getItem("blogs")) || [];
    var name1 = document.getElementById("titles").value;
    var name2 = document.getElementById("articles").value;
    var add_img = document.getElementById("add_image").value;

    var objJSON = {title:name1,article:name2, inmage:add_img}
    blogList.push(objJSON);

    sessionStorage.setItem("blogs", JSON.stringify(blogList) )

}

function getData(){
    let obj=sessionStorage.getItem("blogs");
    let objJS=JSON.parse(obj);

    let content = "";
    
    for(i=0;i<objJS.length;i++){
        var tit_name=objJS[i].title;
        var art_name=objJS[i].article;
        var img_name=objJS[i].image;

        content = '<div class="post col-md-4"><div class="post-thumbnail"><a href="post.html"><img src="img/blog-1.jpg" alt="..." class="img-fluid"></a></div><div class="post-details"> <div class="post-meta d-flex justify-content-between"></div><a href="post.html"><h3 class="h4">'+title+'</h3></a><p class="text-muted">'+article+'</p></div></div>';
    }
    document.getElementById('content').innerHTML=content;
}