$(document).ready(function(){
    $('#searchUser').on('keyup',function(e){
        let username = e.target.value;

        // Make request to github
        $.ajax({
            url:'https://api.github.com/users'+username,
            data:{
                client_id = 'e7ed8d8236953f77f32b',
                client_secret = '13a6dc2138f5e7cea69544dfbc89f9983485a2d5'
            }
        }).done(function(user){
            console.log(user);
        });
    });
});
