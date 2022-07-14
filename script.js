$(document).ready(function(){
    $('.clicks').on('click',function(){
        $('#box.show').toggle();
        $('#box').addClass('show');
    });
    $('#usernamevalidation').hide();
    $('#emailvalidation').hide();

    var Error=true;
    var Email_error=true;
    $('#username').keyup(function(){
        username_validation();
    });
    $('#email').keyup(function(){
        email_validation();
    });
    function username_validation()
        {
            var username_val=$('#username').val();
            if(username_val.length=="")
            {
                $('#usernamevalidation').show();
                $('#usernamevalidation').html('username cant be empty');
                $('#usernamevalidation').css('color','red');
                Error=false;
                return false;
            }
            else{
                $('#usernamevalidation').hide();
            }

            if(username_val.length<3 || username_val.length>10)
            {
                $('#usernamevalidation').show();
                $('#usernamevalidation').html('invalid username');
                $('#usernamevalidation').css('color','red');
                Error=false;
                return false;
            }
            else{
                $('#usernamevalidation').hide();
            }
            return true;
        }
        function email_validation()
        {
            var email_val=$('#email').val();
            var emailregex = /^([\-\.0-9a-zA-Z]+)@([\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
            if(emailregex.test(email_val))
            {
                $('#emailvalidation').hide();
            }
            else{
                $('#emailvalidation').show();
                $('#emailvalidation').html('invalid EmailId');
                $('#emailvalidation').css('color','red');
                Email_error=false;
                return false;
            }
            return true;
        }
    
    $('.submission').on('click',function(){
        Error=username_validation();
        Email_error=email_validation();
        console.log(Error);
        console.log(Email_error);
        if(Error==true && Email_error==true)
        {
            $('#box').removeClass('show');
        }
        else
        {
            return false;
        }
        
    });
    $('.icons').on('click',function(){
        $('#box').removeClass('show');
    });
});