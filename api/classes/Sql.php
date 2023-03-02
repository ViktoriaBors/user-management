<?php

class Sql {
    protected static function conn (){
          return new mysqli(MYSQL_SRV, MYSQL_USER, MYSQL_PSW, MYSQL_DB); 
    }
}
?>


