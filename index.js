
var toggler_btn=document.querySelector(".toggler-btn");
var side_nav = document.querySelector(".side-nav");

toggler_btn.onclick=function()
{
    side_nav.classList.toggle("active");
}

var title=document.querySelector("#title");
var array=["Java Developer","Software Engineer","Web Developer"];
var arrIndex=0;
var charIndex=0;
function updateTitle()
{
    charIndex++;
    title.innerHTML="I'm <span>"+array[arrIndex].slice(0,charIndex)+"</span>";
    if(charIndex==array[arrIndex].length)
    {
        arrIndex++;
        charIndex=0;

    }
    if(arrIndex==array.length)
    {
        arrIndex=0;

    }
    setTimeout(updateTitle,100);
}
updateTitle();
/* Start conter coding for fact  */
// $(document).ready(function()
// {
//     sessionStorage.removeItem("scroll_completed");
//     sessionStorage.removeItem("skill-animation");
// })

// $(document).scroll(function()
// {
   
//    if(sessionStorage.getItem("scroll_completed")==null)
//    {
//     var fact_e1=document.querySelector(".fact-section");
//     var get_attr=fact_e1.getAttribute("class");
//     if(get_attr.indexOf("animated") != -1)
//     {
//         counterAnimation();
//     }
//    }
    
// });

//    function counterAnimation()
//    {
    var counters_el=document.querySelectorAll(".fact-counter");
counters_el.forEach((counter)=>
{
    counter.innerText=0;
    increamentCounter()
    function increamentCounter()
    {
        var current_num=+counter.innerText;
        console.log(typeof(current_num));
        var data_cell=counter.getAttribute("data-cell");
        var number=data_cell/32;
        var increament=Math.floor(number+current_num);
        counter.innerText=increament;
        if(increament<data_cell)
        {
            setTimeout(function()
            {
                increamentCounter();
                sessionStorage.setItem("scroll_completed","animation")
            },100);

        }
        else
        {
            counter.innerText=data_cell;
        }

    }
}
)
//  }
//skills park

// $(document).scroll(function()
// {
   
//    if(sessionStorage.getItem("skill-animation")==null)
//    {
//     var skill_e1=document.querySelector(".skill-section");
//     var get_attr=skill_e1.getAttribute("class");
//     if(get_attr.indexOf("animated") != -1)
//     {
//         skillAnimation();
//     }
//    }
    
// });


// function skillAnimation()
// {
    $(document).ready(function()
{

    var java=$(".java").html();
    var springboot=$(".springboot").html();
    var data=$(".data").html();
    var html=$(".html").html();
    var css=$(".css").html();
    var script=$(".script").html();
    // alert(script);
    $(".progress-java").animate({'width':java},50,function()
    {
        $(".progress-springboot").animate({'width':springboot},50,function()
        {
            $(".progress-data").animate({'width':data},50,function()
            {
                $(".progress-html").animate({'width':html},50,function()
                {
                    $(".progress-css").animate({'width':css},50,function()
                    {
                        $(".progress-script").animate({'width':script},50,function()
                        {
                            // sessionStorage.setItem("skill-animation","done");
                        });
                    });
                });
            });
        });
    });
})
// }

//fiter coding with portfolio
$(document).ready(function()
{
    $(".nav-box li").each(function()
    {
        $(this).click(function()
        {
            $(".all").hide();
            $(".nav-box li").removeClass("active");
            $(this).addClass("active");
            var filter=$(this).attr("filter");
            $("."+filter).each(function()
            {
                $("."+filter).show(500);
            });

        });
    });
})