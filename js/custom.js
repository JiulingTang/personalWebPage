//For scroll effect
$(document).ready(function() {
    $(".scroll").click(function(event){
        event.preventDefault();
        $('body').animate({scrollTop:$(this.hash).offset().top-110},500);
    });
});


titlelist=['Mini Student Information System','Worker Finder Website'];
descriptionlist=['This is a web appication. There are two kinds of users, student and administrator. Student can register/drop courseand check their grade. Administrator can register students, add grade for students, add/drop courses for students and add courses.','This is a web application for finding workers to do some task. Users can post a task to find workers and also take tasks posted by other users as a worker. ']
technologylist=[' Java, JSP, Java Servlet, HTML, CSS, JavaScript, Jquery, AJAX, Bootstrap',' Java, Play, HTML, CSS, JavaScript, Jquery, AJAX, Bootstrap']

$("#portmodal").on("show.bs.modal",function(e){
    var porttitle=e.relatedTarget.getAttribute("data-porttitle");
    var index=e.relatedTarget.getAttribute("data-index");
    var imgs=document.getElementsByClassName('portimg');
    for (var i=0;i<imgs.length;i++){
        imgs[i].setAttribute('src','resource/image/'+porttitle+(i+1)+'.png')
    }
    $("#modellable").html(titlelist[index]);
    $("#description").html(descriptionlist[index]);
    $("#technologies").html(technologylist[index]);
})