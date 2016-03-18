var clickCounter = 0;

function appendCount() {
    clickCounter++;
    countParagraph = document.createElement( 'p' );
    countParagraphText = document.createTextNode( 'This is click number ' + clickCounter );
    countParagraph.appendChild( countParagraphText );
    document.body.appendChild( countParagraph );
}

document.getElementsByTagName( 'h1' )[ 0 ].addEventListener( 'click', appendCount );
