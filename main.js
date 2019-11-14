!function(){
    var duration = 20
    $('.actions').on('click','button',function(e){
        let $button = $(e.currentTarget)
        let speed = $button.attr('data-speed')
        $button.addClass('active')
        .siblings('.active').removeClass('active')
        console.log(speed)
        switch(speed){
            case 'slow':
                duration=100
                break
            case 'normal':
                duration=50
                break
            case 'fast':
                duration=10
                break
        }
    })
    function writeCode(perfix,code,fn){
        let container = document.querySelector('#code')
        let styleTag = document.querySelector("#styleTag")
        let n = 0
        let id = setTimeout(function run(){
            n+=1
            container.innerHTML = code.substring(0,n)
            container.scrollTop = container.scrollHeight
            styleTag.innerHTML = code.substring(0,n)
            if(n< code.length){
                id=setTimeout(run,duration)
            }else{   
                fn && fn.call()
        }

        },duration)
    }
    let code =`
    /*首先准备皮卡丘的毛色*/
    .preview{
        height:100%;
        border: 1px solid green;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #fee433;
    }
    .wrapper{
        width: 100%;
        height: 218px;
        position: relative;
    }
    /*然后是皮卡丘的鼻子*/
    .nose{
        width: 0px;
        height: 0px;
        position: absolute;
        left: 50%;
        top: 20px;
        margin-left: -12px;
        border-style: solid;
        border-radius: 11px;
        border-width: 12px;
        border-color: black transparent transparent transparent;
    }
    /*再来是两只黑豆眼*/
    .eye{
        height: 50px;
        width: 50px;
        background-color: #2e2e2e;
        position: absolute;
        border-radius: 50%;
        border: 2px soild black;
    }
    /*眼睛的高光*/
    .eye::before{
        content:'';
        display: block;
        width: 24px;
        height: 24px;
        position: absolute;
        border-radius: 50%;
        left: 6px;
        top: 1px;
        border: 2px solid black;
        background-color: #fff;
    }
    .eye.left{
        right: 50%;
        margin-right: 90px;
    }
    .eye.right{
        left: 50%;
        margin-left: 90px;
    }
    /*皮卡丘用来发电的脸颊*/
    .face{
        width: 68px;
        height: 68px;
        background-color: #fc0d1c;
        border: 2px solid black;
        border-radius: 50%;
        position: absolute;
        top: 85px;
    }
    .face.left{
        right: 50%;
        margin-right: 116px;
    }
    .face.right{
        left:50%;
        margin-left: 116px;
    }
    /*最后是皮卡丘的嘴巴*/
    .upperLip{
        height: 25px;
        width: 80px;
        border: 3px solid black; 
        position: absolute;
        top: 50px;
        background-color: #fee433;
    
    }
    .upperLip.left{
        right: 50%;
        border-bottom-left-radius:40px 25px ;
        border-top: none;
        border-right: none;
        transform: rotate(-20deg);
    }
    .upperLip.right{
        left: 50%;
        border-bottom-right-radius: 40px 25px ;
        border-top: none;
        border-left: none;
        transform: rotate(20deg);
    }
    .lowerLip-wrapper{
        position: absolute;
        left: 50%;
        margin-left: -60px;
        overflow: hidden;
        bottom: 0;
        height: 162px;
        width: 120px;
    }
    .lowerLip{
        width: 120px;
        height: 1000px;
        background-color: #990513;
        border-radius: 100px/500px;
        border: 2px solid black;
        position: absolute;
        bottom:0;
        overflow: hidden;
    }
    /*别忘了舌头*/
    .lowerLip::after{
        content: '';
        position: absolute;
        bottom: -36px;
        width: 150px;
        height: 150px;
        background-color: #fc4a62;
        left: 50%;
        margin-left: -75px;
        border-radius: 50%;
    }
    /*大功告成！*/`
    writeCode('',code)

    
}.call()