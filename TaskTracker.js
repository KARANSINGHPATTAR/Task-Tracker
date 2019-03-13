<!DOCTYPE html>
<html lang="en">
<head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <title>Document</title>
    <style>
        .sub_hd{
            margin-top:20px;
            margin-left:15px;
            margin-bottom:0px;
        }

        .inp{
            margin-left:15px;
            margin-bottom:16px;
            height:40px;
            width:500px;
            background-color:#ECECEC;
            border-radius:4px;
            font-size:18px;
        }
    </style>
</head>
<body>
    <div class="container-fluid">

        <div class="row">

            <div class="col-lg-12"style="background-color:#F0F0F0; 
            border:10px solid#E2E2E2; border-bottom:0px; padding:15px; ">
                <h1 style="margin-bottom:0px;"><b>Task Tracker</b></h1>
                <p style="margin-top:0px; color:#616161; font-size:16px;"><b>v2.0</b></p>
            </div>
        
        </div>

        <div class="row">

            <div class="col-lg-6" style="background-color:white; 
            border:10px solid#F0F0F0; border-top:0px; border-bottom:40px solid#F0F0F0 ;">
                <p style="margin:24px; margin-left:15px; margin-top:24px;
                font-size:18px;"><b>Create a Task</b></p>
                <p class='sub_hd'><b>Task Name</b></p>
                <input type='text' class='inp' id='1'>
                <p class='sub_hd'><b>Date</b></p>
                <input type='text' class='inp' id='2' placeholder='mm/dd/yyyy'>
                <p class='sub_hd'><b>Assigned To</b></p>
                <input type='text' class='inp' id='3'><br/>
                <button class='inp' style="width:100px; background-color:#434343;
                border:0px; color:white; margin-bottom:40px; margin-top:20px;"
                onclick="subfunc()">
                    Submit
                </button>

            </div>

            <div class="col-lg-6" style="background-color:white; border:10px solid#F0F0F0; 
            border-left:2px; border-top:0px; border-bottom:40px solid#F0F0F0 ;">
                <p style="margin:18px; margin-left:15px; margin-bottom:40px; 
                font-size:18px;"><b>Existing Tasks</b></p>

                <div id='r1' class='col-lg-6' style="background-color:white; height:310px;
                margin-bottom:48px; border:5px solid #DEDEDE; border-radius:3px; padding:3px;
                border-right:0px; padding-right:0px;">
                    <p id="result1"></p>

                </div>

                <div id='r2' class='col-lg-6' style="background-color:white; height:310px;
                margin-bottom:48px; border:5px solid #DEDEDE; border-radius:3px; padding:3px;
                border-left:0px; padding-left:0px;">
                    <p id="result2"></p>

                </div>

            </div>

        </div>

    </div>  

    <script>
        
        function subfunc(){
            var task=document.getElementById('1').value;
            var date=document.getElementById('2').value;
            var assigned=document.getElementById('3').value; 
            var taskdata={tasko: task , dateo: date , assignedo: assigned };
            var localdata;

            if(task!='' && date!='' && assigned!=''){
                if(typeof(Storage)!=='undefined'){
                    if (localStorage.clickcount) {
                        localStorage.clickcount = Number(localStorage.clickcount)+1;
                        } else {
                        localStorage.clickcount = 1;
                    }
                    localStorage.setItem(localStorage.clickcount,JSON.stringify(taskdata));
                    localdata=JSON.parse(localStorage.getItem(localStorage.clickcount));
                    //console.log(i);

                    var para=document.createElement('p');
                    var node=document.createTextNode(localdata.tasko+'\u00A0\u00A0'+localdata.dateo);
                    para.appendChild(node);
                    document.getElementById('result1').appendChild(para);

                    var para1=document.createElement('p');
                    var node1=document.createTextNode(localdata.assignedo);
                    para1.appendChild(node1);
                    document.getElementById('result2').appendChild(para1);

                    if(localStorage.clickcount%2==0){
                        para.style.cssText='background-color:#ECECEC; border:5px solid #ECECEC;'
                        para1.style.cssText='background-color:#ECECEC; border:5px solid #ECECEC;'
                    }else{
                        para.style.cssText='border:5px solid white;'
                        para1.style.cssText='border:5px solid white;'
                    }

                    document.getElementById('1').value=null;
                    document.getElementById('2').value=null;
                    document.getElementById('3').value=null;

                }
            
            }else{
                alert('Fill all values');
            }
        }

        for(var i=1;i<=localStorage.clickcount;i++){
            var getdata=JSON.parse(localStorage.getItem(i));

            var para2=document.createElement('p');
            var node2=document.createTextNode(getdata.tasko+'\u00A0\u00A0'+getdata.dateo);
            para2.appendChild(node2);
            document.getElementById('result1').appendChild(para2);

            var para3=document.createElement('p');
            var node3=document.createTextNode(getdata.assignedo);
            para3.appendChild(node3);
            document.getElementById('result2').appendChild(para3);
            
            if(i%2==0){
                para2.style.cssText='background-color:#ECECEC; border:5px solid #ECECEC;'
                para3.style.cssText='background-color:#ECECEC; border:5px solid #ECECEC;'

            }else{
                para2.style.cssText='border:5px solid white;'
                para3.style.cssText='border:5px solid white;'
            }
        }

    </script>
</body>
</html>
