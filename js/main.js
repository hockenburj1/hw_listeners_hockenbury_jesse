function calculateCTotal( e ) {
    number1 = document.getElementsByName( 'number1' )[ 0 ].value;
    number2 = document.getElementsByName( 'number2' )[ 0 ].value;
    total = document.getElementsByName( 'total' )[ 0 ];

    total.value = parseInt( number1 ) + parseInt( number2 );
}

function clearFields() {
    document.getElementsByName( 'number1' )[ 0 ].value = '';
    document.getElementsByName( 'number2' )[ 0 ].value = '';
    document.getElementsByName( 'total' )[ 0 ].value = '';
}

function dangerMessage() {
    dangerWarning = document.createElement( 'p' );
    dangerWarningText = document.createTextNode( 'You were warned not to go near there!' );
    dangerWarning.appendChild( dangerWarningText );
    document.getElementsByClassName( 'container' )[ 0 ].appendChild( dangerWarning );
}

// Upon the second field change calculate total
document.getElementsByName( 'number2' )[ 0 ].addEventListener( 'change', calculateCTotal );

// Clear all fields upon click of clear button
document.getElementById( 'clear' ).addEventListener( 'click', clearFields );

// Clear all fields upon click of clear button
document.getElementById( 'danger' ).addEventListener( 'mouseover', dangerMessage );
