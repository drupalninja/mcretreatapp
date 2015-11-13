<?php

function cropImage($url, $startX, $startY, $width, $height) {
    $file    = file_get_contents( $url );
    $imagick = new Imagick;
    $imagick->readImageBlob( $file );
    $imagick->cropThumbnailImage($width,$height);

    $base64 = base64_encode( $imagick->getImageBlob() );
    return "data:image/jpeg;base64," . $base64;
}

?>
<img src="<?php print cropImage('https://40.media.tumblr.com/7c42e6af0e542cc763d663eecaed54a3/tumblr_n2wg1pxiWC1rsgiooo1_500.png', 0, 0, '300', '200'); ?>" />

<img src="<?php print cropImage('http://vignette3.wikia.nocookie.net/swfanon/images/e/e1/Obiwankenobi_dsws.jpg/revision/latest?cb=20081204152935', 0, 0, '300', '200'); ?>" />

