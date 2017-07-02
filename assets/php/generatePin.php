<?php
    function generatePin($digits = 4) {
        $i = 0;
        $pin = '';

        while ($i < $digits) {
            $pin .= mt_rand(0, 9);
            $i++;
        }
        return $pin;
    }
?>
