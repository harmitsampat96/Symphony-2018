$('a').click (function (e) {
	var url=this.getAttribute("href");
   e.preventDefault(); //will stop the link href to call the blog page

   setTimeout(function () {
   		console.log(url);
       window.location.href = url; //will redirect to your blog page (an ex: blog.html)
    }, 1500); //will call the function after 2 secs.

});