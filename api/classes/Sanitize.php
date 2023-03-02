<?php
trait Sanitize {
    public static function sanitize ($valtozo){
        $valtozo = strip_tags($valtozo);
        $valtozo = trim($valtozo);
        $valtozo = htmlspecialchars($valtozo);
        return $valtozo;
    }

    public static function sanitizeWithHTML ($valtozo){
        $valtozo = trim($valtozo);
        $valtozo = htmlspecialchars($valtozo);
        return $valtozo;
    }
}