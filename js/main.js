function calculateCTotal( e ) {
    number1 = document.getElementsByName( 'number1' )[ 0 ].value;
    number2 = document.getElementsByName( 'number2' )[ 0 ].value;
    total = document.getElementsByName( 'total' )[ 0 ];

    total.value = parseInt( number1 ) + parseInt( number2 );
}

document.getElementsByName( 'number2' )[ 0 ].addEventListener( 'change', calculateCTotal );
