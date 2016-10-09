
$(document).ready(function() {
    changeLanguage('en');
    setScroll();
    popPortModal();
    setLanbutton();
});

//For scroll effect
setScroll=function(){

    $(".scroll").click(function(event){
        event.preventDefault();
        $('body').animate({scrollTop:$(this.hash).offset().top-110},500);
    });
};

titlelist=['Mini Student Information System','Worker Finder Website'];
descriptionlist=['This is a web appication. There are two kinds of users, student and administrator. Student can register/drop courseand check their grade. Administrator can register students, add grade for students, add/drop courses for students and add courses.','This is a web application for finding workers to do some task. Users can post a task to find workers and also take tasks posted by other users as a worker. ']
technologylist=[' Java, JSP, Java Servlet, HTML, CSS, JavaScript, Jquery, AJAX, Bootstrap',' Java, Play, HTML, CSS, JavaScript, Jquery, AJAX, Bootstrap']

//Click portfolio, then show informatiton of correspongding portfolio
popPortModal=function() {
    $("#portmodal").on("show.bs.modal", function (e) {
        var porttitle = e.relatedTarget.getAttribute("data-porttitle");
        var index = e.relatedTarget.getAttribute("data-index");
        var imgs = document.getElementsByClassName('portimg');
        for (var i = 0; i < imgs.length; i++) {
            imgs[i].setAttribute('src', 'resource/image/' + porttitle + (i + 1) + '.png')
        }
        $("#modellable").html(titlelist[index]);
        $("#description").html(descriptionlist[index]);
        $("#technologies").html(technologylist[index]);
    })
};
//function for change language
changeLanguage=function(chosenLanguage){
    $.getJSON('./resource/text/'+chosenLanguage+'.json',function(data){
        for (var k in data){
            objects=$('.'+k);
            if (Array.isArray(data[k])){
                for (var i=0;i<objects.length;i++)
                {
                    $(objects[i]).html(data[k][i]);
                }
            }
            else
                objects.html(data[k]);

        }
    })
}

//set event for clicking language button
setLanbutton=function(){
    $('.lanButton').click(function(){
        $('.lanButton').removeClass('visited');
        $(this).addClass('visited');
        changeLanguage($(this).attr('data-lan'))
    })
}





