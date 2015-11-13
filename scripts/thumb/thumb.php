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
<img src="<?php print cropImage($_GET['url'], 0, 0, $_GET['width'], $_GET['height']); ?>" width="<?php print $_GET['width']; ?>" height="<?php print $_GET['height']; ?>" />

