var messageForm = document.getElementsByName( 'messageForm' )[ 0 ];
messageForm.addEventListener( 'submit', sendMessage );

function sendMessage( e ) {
    e.preventDefault();
    firstName = document.getElementsByName( 'firstName' )[ 0 ];
    lastName = document.getElementsByName( 'lastName' )[ 0 ];
    email = document.getElementsByName( 'email' )[ 0 ];
    message = document.getElementsByName( 'message' )[ 0 ];
    console.log( 'The firstName is ' + firstName.value );
    console.log( 'The lastName is ' + lastName.value );
    console.log( 'The email is ' + email.value );
    console.log( 'The message is ' + message.value );
}
